class RepoList extends Polymer.Element {
    static get is() { return 'repo-list'; }
    static get properties() { return {
        user: {
            type: String,
            notify: true
        },
        sortProperty: {
            type: String,
            notify: true,
            value: "updated_at"
        },
        sortDirection: {
            type: String,
            notify: true,
            value: "desc"
        },
        filters: {
            type: Object,
            notify: true,
            value: {}
        },
        lastFilter: {
            type: Object,
            notify: true
        },
        data: {
            type: Array,
            notify: true
        },
        visibleData: {
            type: Array,
            notify: true,
            computed: '_computeVisibleData(data, sortProperty, sortDirection, filters, lastFilter.property, ' +
                'lastFilter.value)'
        }
    } }

    _computeVisibleData(data, sortProperty, sortDirection, filters, lastFilterProperty, lastFilterValue) {
        if (data) {
            data = [...data];

            data.forEach(repo => {
                let domain = repo.owner.login+".github.io";
                let ownerPage = "https://"+domain;
                repo.possibleGhPages = [ownerPage+"/"+repo.name];
                if (repo.name == domain) {
                    repo.possibleGhPages.unshift(ownerPage);
                }
            });

            if (sortProperty && sortDirection) {
                let more, less, equal;

                if (sortDirection === 'desc') {
                    more = -1;
                    less = +1;
                    equal = 0;
                } else if (sortDirection === 'asc') {
                    more = +1;
                    less = -1;
                    equal = 0;
                } else {
                    throw Error("sortDirection is invalid: " + sortDirection);
                }

                data.sort((a, b) => {
                    if (a[sortProperty] < b[sortProperty]) return less;
                    if (b[sortProperty] < a[sortProperty]) return more;
                    return equal;
                });
            }

            if (filters) {
                for (let property in filters) {
                    if (filters[property]) {
                        data = data.filter(value => value[property].includes(filters[property]));
                        if (data.length === 0) console.warn("Data after filtered for "+property);
                    }
                }
            }
        }

        return data;
    }

    _handleSort(event) {
        Polymer.RenderStatus.afterNextRender(this, function () {
            this.sortProperty = event.detail.sort.property;
            this.sortDirection = event.detail.sort.direction;
        });
    }

    _handleFilter(event) {
        Polymer.RenderStatus.afterNextRender(this, function () {
            this.set("filters."+event.detail.filter.property, event.detail.filter.value);
            this.lastFilter = event.detail;
        });
    }
}
customElements.define(RepoList.is, RepoList);