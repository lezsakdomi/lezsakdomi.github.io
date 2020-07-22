function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=babelHelpers.getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=babelHelpers.getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return babelHelpers.possibleConstructorReturn(this,result)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return!0}catch(e){return!1}}/* global customElements */var DtPaperDatatableApiThContent=/*#__PURE__*/function(_Polymer$mixinBehavio){babelHelpers.inherits(DtPaperDatatableApiThContent,_Polymer$mixinBehavio);var _super=_createSuper(DtPaperDatatableApiThContent);function DtPaperDatatableApiThContent(){babelHelpers.classCallCheck(this,DtPaperDatatableApiThContent);return _super.apply(this,arguments)}babelHelpers.createClass(DtPaperDatatableApiThContent,[{key:"_dateChanged",value:function _dateChanged(){if(this._dateFrom&&this._dateTo){this.column.activeFilterValue={dateFrom:this._dateFrom,dateTo:this._dateTo};this.fire("date-input-change-th-content",{column:this.column,value:this.column.activeFilterValue})}}},{key:"_displayPickerDate",value:function _displayPickerDate(dateFrom,dateTo){if(dateFrom&&dateTo){return"".concat(dateFrom," - ").concat(dateTo)}return""}},{key:"_handleSort",value:function _handleSort(){this.fire("sort-th-content",{column:this.column})}},{key:"_handleFilter",value:function _handleFilter(){if(this.column.filter){if(this.column.activeFilter){var paperInput=this.shadowRoot.querySelector("paper-input");if(paperInput){paperInput.value=""}this.previousValue=null}this.fire("filter-th-content",{column:this.column})}}},{key:"setPaperInputValue",value:function setPaperInputValue(value){this.shadowRoot.querySelector("paper-input").value=value}},{key:"_handleChoiceChanged",value:function _handleChoiceChanged(){this.fire("input-change-th-content",{column:this.column,value:this._selectedChoices})}},{key:"_handleActiveFilterChange",value:function _handleActiveFilterChange(event){var _this=this,parentDiv=event.currentTarget.parentNode;Polymer.dom.flush();Polymer.Async.microTask.run(function(){var paperInput;if(!_this.column.date&&!_this.column.choices){paperInput=parentDiv.querySelector("paper-input");if(paperInput){paperInput.setAttribute("tabindex",1);paperInput.focus();if(_this.column.activeFilterValue){_this.previousValue=_this.column.activeFilterValue}}}else if(_this.column.date){var datePicker=parentDiv.querySelector("range-datepicker-input");if(datePicker){if(_this.column.activeFilterValue){_this.previousValue=_this.column.activeFilterValue}}}else{_this._selectedChoices=[]}})}},{key:"_handleKeyDownInput",value:function _handleKeyDownInput(event){var _this2=this,input=event.currentTarget;this.currentValue=input.value;if(this.previousValue!==this.currentValue){if(13===event.keyCode){this.fire("input-change-th-content",{column:this.column,value:this.currentValue});this.previousValue=this.currentValue}else{clearTimeout(this.timeoutFilter);this.timeoutFilter=setTimeout(function(){if(_this2.previousValue!==_this2.currentValue){_this2.fire("input-change-th-content",{column:_this2.column,value:_this2.currentValue})}_this2.previousValue=_this2.currentValue},1e3)}}}},{key:"equals",value:function equals(targetedValue,value){return value===targetedValue}},{key:"_draggableClass",value:function _draggableClass(draggable){if(draggable){return"draggable"}return""}},{key:"_isDraggable",value:function _isDraggable(draggableColumn,focused){if(draggableColumn&&!focused){return"true"}return"false"}},{key:"_computeIconName",value:function _computeIconName(choice,selectedChoices){if(-1===selectedChoices.base.indexOf(choice)){return"check-box-outline-blank"}return"check-box"}}],[{key:"is",get:function get(){return"paper-datatable-api-th-content"}},{key:"properties",get:function get(){return{language:String,column:{type:Object,notify:!0,value:function value(){return{}}},positionSortIcon:String,sortable:{type:Boolean,value:function value(){return!1}},sorted:{type:Boolean,value:function value(){return!1}},sortDirection:{type:String,value:function value(){return"asc"}},previousValue:{type:String,value:function value(){return""}},currentValue:{type:String,value:function value(){return""}},timeoutFilter:Number,focused:{type:Boolean,value:!1},_dateFrom:Number,_dateTo:Number,dateFormat:String}}},{key:"observers",get:function get(){return["_dateChanged(_dateTo)"]}}]);return DtPaperDatatableApiThContent}(Polymer.mixinBehaviors([Polymer.AppLocalizeBehavior],Polymer.Element));customElements.define(DtPaperDatatableApiThContent.is,DtPaperDatatableApiThContent);