parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"9Cy7":[function(require,module,exports) {
"use strict";function e(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(s){return void r(s)}u.done?t(c):Promise.resolve(c).then(n,o)}function t(t){return function(){var r=this,n=arguments;return new Promise(function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={props:{url:{type:String,default:null},inactive:{type:Boolean,default:!1}},data:function(){return{oembed:Object,error:void 0,oembedApi:"https://www.data.gouv.fr/api/1/oembed"}},computed:{html:function(){var e=document.createElement("div");return e.innerHTML=this.oembed.html,this.inactive&&e.firstChild.children[2].removeAttribute("href"),e.innerHTML}},created:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getOembed(this.url);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:{getOembed:function(){var e=t(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.error=void 0,this.oembed={},t){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,r="".concat(this.oembedApi,"?url=").concat(encodeURIComponent(t)),e.next=8,fetch(r);case 8:if(!(n=e.sent).ok){e.next=15;break}return e.next=12,n.json();case 12:this.oembed=e.sent,e.next=16;break;case 15:this.error=n.statusText;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),this.error=e.t0;case 21:case"end":return e.stop()}},e,this,[[4,18]])}));return function(t){return e.apply(this,arguments)}}()},watch:{url:function(e){this.getOembed(e)}}};exports.default=r;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.oembed.type?this._e():t("b-spinner",{attrs:{variant:"secondary",small:""}},[this.oembed.type?t("div",{staticClass:"oembed-content",domProps:{innerHTML:this._s(this.html)}}):this._e()])],1)},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"DatasetCard",{enumerable:!0,get:function(){return e.default}});var e=t(require("./components/DatasetCard.vue"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./components/DatasetCard.vue":"9Cy7"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map