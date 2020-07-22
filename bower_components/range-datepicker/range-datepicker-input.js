function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=babelHelpers.getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=babelHelpers.getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return babelHelpers.possibleConstructorReturn(this,result)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return!0}catch(e){return!1}}/* global RangeDatepickerBehavior */ /**
 * `range-datepicker-input`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */var RangeDatepickerInput=/*#__PURE__*/function(_Polymer$mixinBehavio){babelHelpers.inherits(RangeDatepickerInput,_Polymer$mixinBehavio);var _super=_createSuper(RangeDatepickerInput);function RangeDatepickerInput(){babelHelpers.classCallCheck(this,RangeDatepickerInput);return _super.apply(this,arguments)}babelHelpers.createClass(RangeDatepickerInput,[{key:"_handleOpenDropdown",value:function _handleOpenDropdown(){this.shadowRoot.querySelector("iron-dropdown").open()}},{key:"_formatDate",value:function _formatDate(date){if(date){return moment(date,"X").locale(this.locale).format(this.dateFormat)}return""}},{key:"_dateFromChanged",value:function _dateFromChanged(date){if(this.noRange&&date&&this.instance){this.shadowRoot.querySelector("iron-dropdown").close();this.instance.dateFrom=this._formatDate(this.dateFrom)}}},{key:"_dateToChanged",value:function _dateToChanged(date){if(date){this.shadowRoot.querySelector("iron-dropdown").close();this.instance.dateTo=this._formatDate(this.dateTo);this.instance.dateFrom=this._formatDate(this.dateFrom)}}},{key:"attached",value:function attached(){this._ensureTemplatized()}},{key:"_ensureTemplatized",value:function _ensureTemplatized(){this._userTemplate=this.queryEffectiveChildren("template");var TemplateClass=Polymer.Templatize.templatize(this._userTemplate,this),dateFrom=this.dateFrom?this._formatDate(this.dateFrom):0,dateTo=this.dateTo?this._formatDate(this.dateTo):0;this.instance=new TemplateClass({dateTo:0,dateFrom:0});this._itemsParent.appendChild(this.instance.root);if(dateFrom){this.instance.dateFrom=dateFrom}if(dateTo){this.instance.dateTo=dateTo}}},{key:"_itemsParent",get:function get(){return Polymer.dom(Polymer.dom(this._userTemplate).parentNode)}}],[{key:"is",get:function get(){return"range-datepicker-input"}},{key:"properties",get:function get(){return{/**
       * If setted only one date can be selected.
       */noRange:{type:Boolean,value:!1,observer:"_noRangeChanged"},/**
       * Force display one month.
       */forceNarrow:{type:Boolean,value:!1},/**
       * If true, only one month is displayed.
       */narrow:{type:Boolean,value:!1,notify:!0},/**
       * Set locale of the calendar.
       * Default is 'en'.
       */locale:{type:String,value:"en",observer:"_localeChanged"},/**
       * Set month.
       * Format is MM (example: 07 for July, 12 for january).
       * Default is current month.
       */month:String,_monthPlus:String,_yearPlus:Number,/**
       * Set year.
       * Default is current year.
       */year:String,/**
       * Date from.
       * Format is Unix timestamp.
       */dateFrom:{type:String,notify:!0,observer:"_dateFromChanged"},/**
       * Date to.
       * Format is Unix timestamp.
       */dateTo:{type:String,notify:!0,observer:"_dateToChanged"},/**
       * Current hovered date.
       * Format is Unix timestamp.
       */_hoveredDate:String,enableYearChange:{type:Boolean,value:!1},/**
       * Minimal date.
       * Format is Unix timestamp.
       */min:Number,/**
       * Maximal date.
       * Format is Unix timestamp.
       */max:Number,/**
       * Array of disabled days.
       * Format is Unix timestamp.
       */disabledDays:Array,/**
       * Format of the date.
       * Default is DD/MM/YYYY.
       */dateFormat:{type:String,value:"DD/MM/YYYY"},/**
       * The orientation against which to align the dropdown content
       * horizontally relative to the dropdown trigger.
       */horizontalAlign:{type:String,value:"left"}}}},{key:"observers",get:function get(){return["_monthChanged(month, year)"]}}]);return RangeDatepickerInput}(Polymer.mixinBehaviors([Polymer.Templatizer],RangeDatepickerBehavior(Polymer.Element)));window.customElements.define(RangeDatepickerInput.is,RangeDatepickerInput);