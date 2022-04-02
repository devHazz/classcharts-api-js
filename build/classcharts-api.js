!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.classchartsapi=t():e.classchartsapi=t()}(self,(function(){return e={669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var n=r(867),s=r(26),o=r(372),i=r(327),a=r(97),u=r(109),c=r(985),d=r(61),f=r(874),l=r(263);e.exports=function(e){return new Promise((function(t,r){var p,h=e.data,m=e.headers,g=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(h)&&delete m["Content-Type"];var y=new XMLHttpRequest;if(e.auth){var w=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(w+":"+S)}var b=a(e.baseURL,e.url);function E(){if(y){var n="getAllResponseHeaders"in y?u(y.getAllResponseHeaders()):null,o={data:g&&"text"!==g&&"json"!==g?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:n,config:e,request:y};s((function(e){t(e),v()}),(function(e){r(e),v()}),o),y=null}}if(y.open(e.method.toUpperCase(),i(b,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,"onloadend"in y?y.onloadend=E:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(E)},y.onabort=function(){y&&(r(d("Request aborted",e,"ECONNABORTED",y)),y=null)},y.onerror=function(){r(d("Network Error",e,null,y)),y=null},y.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||f;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(d(t,e,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",y)),y=null},n.isStandardBrowserEnv()){var A=(e.withCredentials||c(b))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;A&&(m[e.xsrfHeaderName]=A)}"setRequestHeader"in y&&n.forEach(m,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete m[t]:y.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(y.withCredentials=!!e.withCredentials),g&&"json"!==g&&(y.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){y&&(r(!e||e&&e.type?new l("canceled"):e),y.abort(),y=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),h||(h=null),y.send(h)}))}},609:(e,t,r)=>{"use strict";var n=r(867),s=r(849),o=r(321),i=r(185),a=function e(t){var r=new o(t),a=s(o.prototype.request,r);return n.extend(a,o.prototype,r),n.extend(a,r),a.create=function(r){return e(i(t,r))},a}(r(546));a.Axios=o,a.Cancel=r(263),a.CancelToken=r(972),a.isCancel=r(502),a.VERSION=r(288).version,a.all=function(e){return Promise.all(e)},a.spread=r(713),a.isAxiosError=r(268),e.exports=a,e.exports.default=a},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var n=r(263);function s(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},s.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},s.source=function(){var e;return{token:new s((function(t){e=t})),cancel:e}},e.exports=s},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(867),s=r(327),o=r(782),i=r(572),a=r(185),u=r(875),c=u.validators;function d(e){this.defaults=e,this.interceptors={request:new o,response:new o}}d.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&u.assertOptions(r,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var o,d=[];if(this.interceptors.response.forEach((function(e){d.push(e.fulfilled,e.rejected)})),!s){var f=[i,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(d),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var l=t;n.length;){var p=n.shift(),h=n.shift();try{l=p(l)}catch(e){h(e);break}}try{o=i(l)}catch(e){return Promise.reject(e)}for(;d.length;)o=o.then(d.shift(),d.shift());return o},d.prototype.getUri=function(e){return e=a(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){d.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){d.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=d},782:(e,t,r)=>{"use strict";var n=r(867);function s(){this.handlers=[]}s.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=s},97:(e,t,r)=>{"use strict";var n=r(793),s=r(303);e.exports=function(e,t){return e&&!n(t)?s(e,t):t}},61:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,s,o){var i=new Error(e);return n(i,t,r,s,o)}},572:(e,t,r)=>{"use strict";var n=r(867),s=r(527),o=r(502),i=r(546),a=r(263);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=s.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return u(e),t.data=s.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(u(e),t&&t.response&&(t.response.data=s.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,s){return e.config=t,r&&(e.code=r),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={};function s(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:s(void 0,e[r]):s(e[r],t[r])}function i(e){if(!n.isUndefined(t[e]))return s(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:s(void 0,e[r]):s(void 0,t[r])}function u(r){return r in t?s(e[r],t[r]):r in e?s(void 0,e[r]):void 0}var c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,s=t(e);n.isUndefined(s)&&t!==u||(r[e]=s)})),r}},26:(e,t,r)=>{"use strict";var n=r(61);e.exports=function(e,t,r){var s=r.config.validateStatus;r.status&&s&&!s(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var n=r(867),s=r(546);e.exports=function(e,t,r){var o=this||s;return n.forEach(r,(function(r){e=r.call(o,e,t)})),e}},546:(e,t,r)=>{"use strict";var n=r(867),s=r(16),o=r(481),i=r(874),a={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,d={transitional:i,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=r(448)),c),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)||t&&"application/json"===t["Content-Type"]?(u(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(0,JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,r=t&&t.silentJSONParsing,s=t&&t.forcedJSONParsing,i=!r&&"json"===this.responseType;if(i||s&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(i){if("SyntaxError"===e.name)throw o(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){d.headers[e]=n.merge(a)})),e.exports=d},874:e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},288:e=>{e.exports={version:"0.26.1"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var n=r(867);function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(s(t)+"="+s(e))})))})),o=i.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,s,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(s)&&a.push("path="+s),n.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},268:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}},985:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function s(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=s(window.location.href),function(t){var r=n.isString(t)?s(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:(e,t,r)=>{"use strict";var n=r(867),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,i={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t){if(i[t]&&s.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:(e,t,r)=>{"use strict";var n=r(288).version,s={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){s[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var o={};s.transitional=function(e,t,r){function s(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,i){if(!1===e)throw new Error(s(n," has been removed"+(t?" in "+t:"")));return t&&!o[n]&&(o[n]=!0,console.warn(s(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,i)}},e.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),s=n.length;s-- >0;){var o=n[s],i=t[o];if(i){var a=e[o],u=void 0===a||i(a,o,e);if(!0!==u)throw new TypeError("option "+o+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+o)}},validators:s}},867:(e,t,r)=>{"use strict";var n=r(849),s=Object.prototype.toString;function o(e){return Array.isArray(e)}function i(e){return void 0===e}function a(e){return"[object ArrayBuffer]"===s.call(e)}function u(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==s.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function d(e){return"[object Function]"===s.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}e.exports={isArray:o,isArrayBuffer:a,isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===s.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&a(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:d,isStream:function(e){return u(e)&&d(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===s.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):o(r)?t[n]=r.slice():t[n]=r}for(var n=0,s=arguments.length;n<s;n++)f(arguments[n],r);return t},extend:function(e,t,r){return f(t,(function(t,s){e[s]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},405:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ClasschartsClient=void 0;const s=n(r(669));t.ClasschartsClient=class{constructor(e){this.studentId=0,this.studentName="",this.sessionId="",this.API_BASE="",this.API_BASE=e}async makeAuthedRequest(e,t){if(!this.authCookies)throw new Error("Not authenticated");const r={...t,url:e,headers:{...t.headers,Cookie:this.authCookies.join(";"),authorization:"Basic "+this.sessionId},validateStatus:()=>!0},n=(await s.default.request(r)).data;if(0==n.success)throw new Error(n.error);return n.data}async getStudentInfo(){return(await this.makeAuthedRequest(this.API_BASE+"/ping",{method:"POST",data:"include_data=true"}))?.user}async getActivity(e){const t=new URLSearchParams;return e?.from&&t.append("from",e?.from),e?.to&&t.append("to",e?.to),e?.last_id&&t.append("last_id",e?.last_id),this.makeAuthedRequest(this.API_BASE+"/activity/"+this.studentId+"?"+t.toString(),{method:"GET"})}async getFullActivity(e){let t,r=[],n=!0;for(;n;){const s={from:e.from,to:e.to};t&&(s.last_id=String(t));const o=await this.getActivity(s);o&&o.length?(r=r.concat(o),t=o[o.length-1].id):n=!1}return r}async getBehaviour(e){const t=new URLSearchParams;return e?.from&&t.append("from",e?.from),e?.to&&t.append("to",e?.to),await this.makeAuthedRequest(this.API_BASE+"/behaviour/"+this.studentId+"?"+t.toString(),{method:"GET"})}async listHomeworks(e){const t=new URLSearchParams;e?.displayDate&&t.append("display_date",String(e?.displayDate)),e?.fromDate&&t.append("from",String(e?.fromDate)),e?.toDate&&t.append("to",String(e?.toDate));const r=await this.makeAuthedRequest(this.API_BASE+"/homeworks/"+this.studentId+"?"+t.toString(),{method:"GET"});for(let e=0;e<r.length;e++)r[e].description_raw=r[e].description,r[e].description=r[e].description.replace(/(<([^>]+)>)/gi,""),r[e].description=r[e].description.replace(/&nbsp;/g,""),r[e].description=r[e].description.trim();return r}async getLessons(e){if(!e?.date)throw new Error("No date specified");const t=new URLSearchParams;return t.append("date",String(e?.date)),await this.makeAuthedRequest(this.API_BASE+"/timetable/"+this.studentId+"?"+t.toString(),{method:"GET"})}async getBadges(){return await this.makeAuthedRequest(this.API_BASE+"/eventbadges/"+this.studentId,{method:"GET"})}async listAnnouncements(){return await this.makeAuthedRequest(this.API_BASE+"/announcements/"+this.studentId,{method:"GET"})}async getDetentions(){return await this.makeAuthedRequest(this.API_BASE+"/detentions/"+this.studentId,{method:"GET"})}}},312:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_BASE_PARENT=t.API_BASE_STUDENT=t.BASE_URL=void 0,t.BASE_URL="https://www.classcharts.com",t.API_BASE_STUDENT=`${t.BASE_URL}/apiv2student`,t.API_BASE_PARENT=`${t.BASE_URL}/apiv2parent`},607:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var s=Object.getOwnPropertyDescriptor(t,r);s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,s)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),s=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),s(r(133),t),s(r(374),t)},133:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ClasschartsParentClient=void 0;const s=n(r(669)),o=r(405),i=r(312);class a extends o.ClasschartsClient{constructor(e,t){super(i.API_BASE_PARENT),this.password="",this.email="",this.email=String(e),this.password=String(t)}async login(){if(!this.email)throw new Error("Email not inputted");const e=new URLSearchParams;e.append("_method","POST"),e.append("email",this.email),e.append("logintype","existing"),e.append("password",this.password),e.append("recaptcha-token","no-token-avaliable");const t=await s.default.request({url:i.BASE_URL+"/parent/login",method:"POST",data:e.toString(),maxRedirects:0,headers:{"Content-Type":"application/x-www-form-urlencoded"},validateStatus:()=>!0});if(302!=t.status||!t.headers["set-cookie"])throw new Error("Unauthenticated: Classcharts returned an error");const r=t.headers["set-cookie"];for(let e=0;e<r.length;e++)r[e]=r[e].substring(0,r[e].indexOf(";"));this.authCookies=r;let n=decodeURI(r[2]).replace(/%3A/g,":").replace(/%2C/g,",");if(n=JSON.parse(n.substring(n.indexOf("{"),n.length)),this.sessionId=n.session_id,this.pupils=await this.getPupils(),!this.pupils)throw new Error("Account has no pupils attached");this.studentId=this.pupils[0].id,this.studentName=this.pupils[0].name}async getPupils(){return this.makeAuthedRequest(this.API_BASE+"/pupils",{method:"GET"})}async selectPupil(e){if(!e)throw new Error("No pupil ID specified");const t=this.pupils;for(let r=0;r<t.length;r++){const n=t[r];if(n.id==e)return this.studentId=n.id,void(this.studentName=n.name)}throw new Error("No pupil with specified ID returned")}}t.ClasschartsParentClient=a},374:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ClasschartsStudentClient=void 0;const s=n(r(669)),o=r(312),i=r(405);class a extends i.ClasschartsClient{constructor(e,t){super(o.API_BASE_STUDENT),this.studentCode="",this.dateOfBirth="",this.studentCode=String(e),this.dateOfBirth=String(t)}async login(){if(!this.studentCode)throw new Error("Student Code not inputted");const e=new URLSearchParams;e.append("_method","POST"),e.append("code",this.studentCode.toUpperCase()),e.append("dob",this.dateOfBirth),e.append("remember_me","1"),e.append("recaptcha-token","no-token-avaliable");const t=await s.default.request({url:o.BASE_URL+"/student/login",method:"POST",data:e.toString(),maxRedirects:0,headers:{"Content-Type":"application/x-www-form-urlencoded"},validateStatus:()=>!0});if(302!=t.status||!t.headers["set-cookie"])throw new Error("Unauthenticated: Classcharts returned an error");const r=t.headers["set-cookie"];for(let e=0;e<r.length;e++)r[e]=r[e].substring(0,r[e].indexOf(";"));this.authCookies=r;let n=decodeURI(r[2]).replace(/%3A/g,":").replace(/%2C/g,",");n=JSON.parse(n.substring(n.indexOf("{"),n.length)),this.sessionId=n.session_id;const i=await this.getStudentInfo();this.studentId=i.id,this.studentName=i.name}}t.ClasschartsStudentClient=a}},t={},function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(607);var e,t}));
//# sourceMappingURL=classcharts-api.map