function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=babelHelpers.getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=babelHelpers.getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return babelHelpers.possibleConstructorReturn(this,result)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return!0}catch(e){return!1}}/* global customElements */var DtPaperDatatableApiColumn=/*#__PURE__*/function(_Polymer$mixinBehavio){babelHelpers.inherits(DtPaperDatatableApiColumn,_Polymer$mixinBehavio);var _super=_createSuper(DtPaperDatatableApiColumn);babelHelpers.createClass(DtPaperDatatableApiColumn,null,[{key:"is",get:function get(){return"paper-datatable-api-column"}},{key:"properties",get:function get(){return{/**
       * The name of the header for this column.
       */header:String,/**
       * Property which will be available in data (throught paper-datatable-api).
       */property:String,/**
       * If set, these other properties will be available in data (throught paper-datatable-api).
       * Usefull to keep id of the object.
       */otherProperties:{type:Array,value:[]},/**
       * If true, the colum can be sort.
       */sortable:{type:Boolean,value:!1},/**
       * If true, the column can be draggable.
       */draggableColumn:{type:Boolean,value:!1},/**
       * If true, the column is hidden.
       */hidden:{type:Boolean,value:!1},/**
       * Current sort direction (asc or desc).
       */sortDirection:String,/**
       * If true, the column is currently sorted.
       */sorted:{type:Boolean,value:!1},/**
       * If true, the column can be filtered.
       */filter:{type:Boolean,value:!1},/**
       * If true, a date picker is displayed when the column is sorted.
       */date:{type:Boolean,value:!1},/**
       * If true, the column can be hidden.
       */hideable:{type:Boolean,value:!1},/**
       * Position of the column in the table.
       */position:Number,activeFilter:{type:Boolean,value:!1},/**
       * If true, the column apply the --paper-datatable-api-custom-td mixin.
       */tdCustomStyle:{type:Boolean,value:!1},/**
       * If setted, the choices are displayed in place of the paper-input (in filter mode)
       */choices:Array}}}]);function DtPaperDatatableApiColumn(){var _this;babelHelpers.classCallCheck(this,DtPaperDatatableApiColumn);_this=_super.call(this);_this.instances=[];return _this}babelHelpers.createClass(DtPaperDatatableApiColumn,[{key:"connectedCallback",value:function connectedCallback(){if(!this.ctor){var _props,props=(_props={__key__:!0},babelHelpers.defineProperty(_props,this.header,!0),babelHelpers.defineProperty(_props,this.property,!0),_props),template=this.querySelector("template");this.ctor=Polymer.Templatize.templatize(template,this,{instanceProps:props,forwardHostProp:function forwardHostProp(prop,value){this.instances.forEach(function(inst){inst.forwardHostProp(prop,value)})}})}}/**
   * Stamp the value in template (according to property).
   *
   * @property fillTemplate
   * @param {String} value The value of the property.
   */},{key:"fillTemplate",value:function fillTemplate(value,otherValues){var instance=new this.ctor({value:value,otherValues:otherValues});this.instances.push(instance);return instance}}]);return DtPaperDatatableApiColumn}(Polymer.mixinBehaviors([Polymer.Templatizer],Polymer.Element));customElements.define(DtPaperDatatableApiColumn.is,DtPaperDatatableApiColumn);