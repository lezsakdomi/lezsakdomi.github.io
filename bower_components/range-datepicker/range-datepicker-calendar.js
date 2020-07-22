function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=babelHelpers.getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=babelHelpers.getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return babelHelpers.possibleConstructorReturn(this,result)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return!0}catch(e){return!1}}/**
 * `range-datepicker-calendar`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */var RangeDatepickerCalendar=/*#__PURE__*/function(_Polymer$Element){babelHelpers.inherits(RangeDatepickerCalendar,_Polymer$Element);var _super=_createSuper(RangeDatepickerCalendar);function RangeDatepickerCalendar(){babelHelpers.classCallCheck(this,RangeDatepickerCalendar);return _super.apply(this,arguments)}babelHelpers.createClass(RangeDatepickerCalendar,[{key:"_localeChanged",value:function _localeChanged(locale){var dayNamesOfTheWeek=moment.localeData(locale).weekdaysMin(),firstDayOfWeek=moment.localeData(this.locale).firstDayOfWeek(),tmp=dayNamesOfTheWeek.slice().splice(0,firstDayOfWeek),newDayNamesOfTheWeek=dayNamesOfTheWeek.slice().splice(firstDayOfWeek,dayNamesOfTheWeek.length).concat(tmp);this.set("_dayNamesOfTheWeek",newDayNamesOfTheWeek)}},{key:"_yearAndMonthChanged",value:function _yearAndMonthChanged(year,month){if(year&&month){var startDate=moment([year,month-1]).locale(this.locale),endDate=moment(startDate).locale(this.locale).endOf("month"),rows=[],columns=[],lastDayOfWeek=6;while(startDate.format("DD/MM/YYYY")!==endDate.format("DD/MM/YYYY")){var dayNumber=startDate.weekday();columns.push({hover:!1,date:parseInt(startDate.format("X"),10),title:parseInt(startDate.format("D"),10)});if(dayNumber===lastDayOfWeek){for(var i=columns.length;i<lastDayOfWeek+1;i+=1){columns.unshift(0)}rows.push(columns.slice());columns=[]}startDate.add(1,"day");if(startDate.format("DD/MM/YYYY")===endDate.format("DD/MM/YYYY")){columns.push({hover:!1,date:parseInt(startDate.format("X"),10),title:parseInt(startDate.format("D"),10)});for(var _i=columns.length;_i<=lastDayOfWeek;_i+=1){columns.push(0)}rows.push(columns.slice());columns=[]}}this.set("_daysOfMonth",rows)}}},{key:"_computeCurrentMonthName",value:function _computeCurrentMonthName(month,year){return moment("".concat(month,"/").concat(year),"MM/YYYY").locale(this.locale).format("MMMM")}},{key:"_tdIsEnabled",value:function _tdIsEnabled(day){if(day){return"enabled"}return""}},{key:"_handleDateSelected",value:function _handleDateSelected(event){var date=event.detail.date;if(!this.noRange){if(this.dateFrom&&this.dateTo){this.dateFrom=date;this.dateTo=0;this.hoveredDate=void 0}else if(!this.dateFrom||this.dateFrom&&date<this.dateFrom){this.dateFrom=date}else if(!this.dateTo||this.dateTo&&date>this.dateTo){this.dateTo=date}}else{this.dateFrom=date}}},{key:"_handleDateHovered",value:function _handleDateHovered(event){if(!this.noRange){this.hoveredDate=event.detail.date}}},{key:"_handleNextMonth",value:function _handleNextMonth(){var tbody=this.shadowRoot.querySelector(".tbody"),monthName=this.shadowRoot.querySelector(".monthName > div");tbody.classList.add("withTransition");tbody.classList.add("moveToLeft");monthName.classList.add("withTransition");monthName.classList.add("moveToLeft");this.month=moment(this.month,"MM").locale(this.locale).add(1,"month").format("MM");if("01"===this.month){this.year=moment(this.year,"YYYY").locale(this.locale).add(1,"year").format("YYYY")}this.dispatchEvent(new CustomEvent("next-month"));setTimeout(function(){tbody.classList.remove("withTransition");tbody.classList.add("moveToRight");tbody.classList.remove("moveToLeft");monthName.classList.remove("withTransition");monthName.classList.add("moveToRight");monthName.classList.remove("moveToLeft");setTimeout(function(){tbody.classList.add("withTransition");tbody.classList.remove("moveToRight");monthName.classList.add("withTransition");monthName.classList.remove("moveToRight");setTimeout(function(){tbody.classList.remove("withTransition");monthName.classList.remove("withTransition")},100)},100)},100)}},{key:"_handlePrevMonth",value:function _handlePrevMonth(){var tbody=this.shadowRoot.querySelector(".tbody"),monthName=this.shadowRoot.querySelector(".monthName > div");tbody.classList.add("withTransition");tbody.classList.add("moveToRight");monthName.classList.add("withTransition");monthName.classList.add("moveToRight");this.month=moment(this.month,"MM").locale(this.locale).subtract(1,"month").format("MM");if("12"===this.month){this.year=moment(this.year,"YYYY").locale(this.locale).subtract(1,"year").format("YYYY")}this.dispatchEvent(new CustomEvent("prev-month"));setTimeout(function(){tbody.classList.remove("withTransition");tbody.classList.add("moveToLeft");tbody.classList.remove("moveToRight");monthName.classList.remove("withTransition");monthName.classList.add("moveToLeft");monthName.classList.remove("moveToRight");setTimeout(function(){tbody.classList.add("withTransition");tbody.classList.remove("moveToLeft");monthName.classList.add("withTransition");monthName.classList.remove("moveToLeft");setTimeout(function(){monthName.classList.remove("withTransition");monthName.classList.remove("withTransition")},100)},100)},100)}},{key:"_ifNarrow",value:function _ifNarrow(pos,narrow){if(pos||narrow){return!0}return!1}},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(RangeDatepickerCalendar.prototype),"ready",this).call(this);for(var yearsList=[],i=1970;2100>=i;i+=1){yearsList.push(i)}this.set("_yearsList",yearsList)}},{key:"_enableYearChangeChanged",value:function _enableYearChangeChanged(enableYearChange){this.narrow=enableYearChange}}],[{key:"is",get:function get(){return"range-datepicker-calendar"}},{key:"properties",get:function get(){return{month:String,year:{type:String,notify:!0},_dayNamesOfTheWeek:{type:Array,value:[]},_daysOfMonth:Array,locale:{type:String,value:"en",observer:"_localeChanged"},dateTo:{type:Number,notify:!0},prev:Boolean,next:Boolean,dateFrom:{type:Number,notify:!0},hoveredDate:{type:Number,notify:!0},noRange:{type:Boolean,value:!1},narrow:{type:Boolean,value:!1},_yearsList:{type:Array,value:[]},enableYearChange:{type:Boolean,value:!1,observer:"_enableYearChangeChanged"},min:Number,max:Number,disabledDays:Array}}},{key:"observers",get:function get(){return["_yearAndMonthChanged(year, month)"]}}]);return RangeDatepickerCalendar}(Polymer.Element);window.customElements.define(RangeDatepickerCalendar.is,RangeDatepickerCalendar);