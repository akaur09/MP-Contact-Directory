/*! For license information please see cards.bundle.js.LICENSE.txt */
(()=>{var t={591:(t,e,r)=>{var n=r(8).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p={};function h(){}function v(){}function y(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(_([])));b&&b!==r&&a.call(b,c)&&(m=b);var w=y.prototype=h.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,c,s){var u=d(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:D}}function D(){return{value:void 0,done:!0}}return v.prototype=y,l(w,"constructor",y),l(y,"constructor",v),v.displayName=l(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},x(E.prototype),l(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),l(w,u,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},757:(t,e,r)=>{var n=r(591)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function c(e){t(i,o,a,c,s,"next",e)}function s(e){t(i,o,a,c,s,"throw",e)}c(void 0)}))}}var n=r(757),o=r.n(n);let a,i;const c=new WeakMap,s=new WeakMap,u=new WeakMap,l=new WeakMap,f=new WeakMap;let d={get(t,e,r){if(t instanceof IDBTransaction){if("done"===e)return s.get(t);if("objectStoreNames"===e)return t.objectStoreNames||u.get(t);if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return h(t[e])},set:(t,e,r)=>(t[e]=r,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function p(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(v(this),t),h(c.get(this))}:function(...t){return h(e.apply(v(this),t))}:function(t,...r){const n=e.call(v(this),t,...r);return u.set(n,t.sort?t.sort():[t]),h(n)}:(t instanceof IDBTransaction&&function(t){if(s.has(t))return;const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{e(),n()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)}));s.set(t,e)}(t),r=t,(a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>r instanceof t))?new Proxy(t,d):t);var e,r}function h(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{e(h(t.result)),n()},a=()=>{r(t.error),n()};t.addEventListener("success",o),t.addEventListener("error",a)}));return e.then((e=>{e instanceof IDBCursor&&c.set(e,t)})).catch((()=>{})),f.set(e,t),e}(t);if(l.has(t))return l.get(t);const e=p(t);return e!==t&&(l.set(t,e),f.set(e,t)),e}const v=t=>f.get(t);function y(t,e,{blocked:r,upgrade:n,blocking:o,terminated:a}={}){const i=indexedDB.open(t,e),c=h(i);return n&&i.addEventListener("upgradeneeded",(t=>{n(h(i.result),t.oldVersion,t.newVersion,h(i.transaction))})),r&&i.addEventListener("blocked",(()=>r())),c.then((t=>{a&&t.addEventListener("close",(()=>a())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const m=["get","getKey","getAll","getAllKeys","count"],g=["put","add","delete","clear"],b=new Map;function w(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(b.get(e))return b.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,o=g.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!o&&!m.includes(r))return;const a=async function(t,...e){const a=this.transaction(t,o?"readwrite":"readonly");let i=a.store;return n&&(i=i.index(e.shift())),(await Promise.all([i[r](...e),o&&a.done]))[0]};return b.set(e,a),a}var x;x=d,d={...x,get:(t,e,r)=>w(t,e)||x.get(t,e,r),has:(t,e)=>!!w(t,e)||x.has(t,e)};var E=function(){var t=e(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y("contacts",1,{upgrade:function(t){t.objectStoreNames.contains("contacts")?console.log("contacts already exists"):(t.createObjectStore("contacts",{keyPath:"id",autoIncrement:!0}),console.log("contacts database created"))}});case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=e(o().mark((function t(e,r,n,a){var i,c,s,u,l;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Post to the ase"),t.next=3,y("contacts",1);case 3:return i=t.sent,c=i.transaction("contacts","readwrite"),s=c.objectStore("contacts"),u=s.add({contact:e,home:r,cell:n,email:a}),t.next=9,u;case 9:l=t.sent,console.log("🚀 - data saved to the database",l);case 11:case"end":return t.stop()}}),t)})));return function(e,r,n,o){return t.apply(this,arguments)}}(),j=function(){var t=e(o().mark((function t(){var e,r,n,a,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("GET all from the database"),t.next=3,y("contacts",1);case 3:return e=t.sent,r=e.transaction("contacts","readonly"),n=r.objectStore("contacts"),a=n.getAll(),t.next=9,a;case 9:return i=t.sent,console.log("result.value",i),t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=function(){var t=e(o().mark((function t(e){var r,n,a,i,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("DELETE from the database",e),t.next=3,y("contacts",1);case 3:return r=t.sent,n=r.transaction("contacts","readwrite"),a=n.objectStore("contacts"),i=a.delete(e),t.next=9,i;case 9:return c=t.sent,console.log("result.value",c),t.abrupt("return",c);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function S(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return _(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}E();var D=document.getElementById("contact-form");window.deleteCard=function(t){var e=parseInt(t.id);I(e),k()},D.addEventListener("submit",(function(t){t.preventDefault();var e=D.elements.name.value,r=D.elements["home-phone"].value,n=D.elements["cell-phone"].value,o=D.elements.email.value;L(e,r,n,o),D.reset(),k()}));var k=function(){var t=e(o().mark((function t(){var e,r,n,a,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:e=t.sent,r=" ",n=S(e);try{for(n.s();!(a=n.n()).done;)i=a.value,console.log(i),r+='\n    <div class="card card-rounded col-md-3 m-2">\n      <div class="card-header card-rounded">\n        <h1>'.concat(i.name,'</h1>\n      </div>\n      <div class="card-body">\n        <p>Home Phone: ').concat(i.home_phone,"</p>\n        <p>Cell Phone: ").concat(i.cell_phone,"</p>\n        <p>Email: ").concat(i.email,'</p>\n      </div>\n      <div class="flex-row justify-flex-end p-1">\n        <button class="btn btn-sm btn-danger" id="').concat(i.id,'" onclick="deleteCard(this)">Delete</button>\n      </div>\n    </div>\n    ')}catch(t){n.e(t)}finally{n.f()}document.getElementById("card-group").innerHTML=r;case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();k()})()})();