!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-lupus-paragraph-text",[],e):"object"==typeof exports?exports["vue-lupus-paragraph-text"]=e():t["vue-lupus-paragraph-text"]=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"PgText",props:{dataFieldText:{type:String,default:function(){return""}}},computed:{hasText:function(){return""!==this.dataFieldText}}}},function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"paragraph paragraph--text"},[this.hasText?e("div",{staticClass:"paragraph__field-text",domProps:{innerHTML:this._s(this.fieldText)}}):this._e(),this._v(" "),this._t("field-text")],2)},o=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},function(t,e,n){"use strict";function r(t,e,n,r,o,i,u,a){var s,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),u?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},f._ssrRegister=s):o&&(s=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(f.functional){f._injectStyles=s;var c=f.render;f.render=function(t,e){return s.call(e),c(t,e)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,s):[s]}return{exports:t,options:f}}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PgText=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(5));e.PgText=r.default},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(0);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var u=n(3),a=Object(u.a)(o.default,r.a,r.b,!1,null,null,null);a.options.__file="src/pg-text.vue",e.default=a.exports}])});