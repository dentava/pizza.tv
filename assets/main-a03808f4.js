/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(n,e){if(!n)throw Cs(e)},Cs=function(n){return new Error("Firebase Database ("+c0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=function(n){const e=[];let i=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},gC=function(n){const e=[];let i=0,r=0;for(;i<n.length;){const o=n[i++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[i++];e[r++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[i++],u=n[i++],f=n[i++],h=((o&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const l=n[i++],u=n[i++];e[r++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return e.join("")},Jh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const l=n[o],u=o+1<n.length,f=u?n[o+1]:0,h=o+2<n.length,m=h?n[o+2]:0,y=l>>2,g=(l&3)<<4|f>>4;let b=(f&15)<<2|m>>6,S=m&63;h||(S=64,u||(b=64)),r.push(i[y],i[g],i[b],i[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(u0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const l=i[n.charAt(o++)],f=o<n.length?i[n.charAt(o)]:0;++o;const m=o<n.length?i[n.charAt(o)]:64;++o;const g=o<n.length?i[n.charAt(o)]:64;if(++o,l==null||f==null||m==null||g==null)throw new vC;const b=l<<2|f>>4;if(r.push(b),m!==64){const S=f<<4&240|m>>2;if(r.push(S),g!==64){const C=m<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d0=function(n){const e=u0(n);return Jh.encodeByteArray(e,!0)},sc=function(n){return d0(n).replace(/\./g,"")},oc=function(n){try{return Jh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(n){return ra(void 0,n)}function ra(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const i=e;return new Date(i.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const i in e)!e.hasOwnProperty(i)||!yC(i)||(n[i]=ra(n[i],e[i]));return n}function yC(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=()=>bC().__FIREBASE_DEFAULTS__,IC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},EC=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&oc(n[1]);return e&&JSON.parse(e)},xc=()=>{try{return wC()||IC()||EC()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},h0=n=>{var e,i;return(i=(e=xc())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[n]},CC=n=>{const e=h0(n);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),r]:[e.substring(0,i),r]},f0=()=>{var n;return(n=xc())===null||n===void 0?void 0:n.config},p0=n=>{var e;return(e=xc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n),f="";return[sc(JSON.stringify(i)),sc(JSON.stringify(u)),f].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function m0(){var n;const e=(n=xc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kC(){return typeof self=="object"&&self.self===self}function g0(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Uc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function v0(){const n=Qe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _0(){return c0.NODE_ADMIN===!0}function ac(){try{return typeof indexedDB=="object"}catch{return!1}}function TC(){return new Promise((n,e)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(i){e(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="FirebaseError";class kt extends Error{constructor(e,i,r){super(i),this.code=e,this.customData=r,this.name=RC,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,i,r){this.service=e,this.serviceName=i,this.errors=r}create(e,...i){const r=i[0]||{},o=`${this.service}/${e}`,l=this.errors[e],u=l?AC(l,r):"Error",f=`${this.serviceName}: ${u} (${o}).`;return new kt(o,f,r)}}function AC(n,e){return n.replace(PC,(i,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const PC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n){return JSON.parse(n)}function at(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=function(n){let e={},i={},r={},o="";try{const l=n.split(".");e=sa(oc(l[0])||""),i=sa(oc(l[1])||""),o=l[2],r=i.d||{},delete i.d}catch{}return{header:e,claims:i,data:r,signature:o}},NC=function(n){const e=y0(n),i=e.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},OC=function(n){const e=y0(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ms(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function _h(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function lc(n,e,i){const r={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=e.call(i,n[o],o,n));return r}function cc(n,e){if(n===e)return!0;const i=Object.keys(n),r=Object.keys(e);for(const o of i){if(!r.includes(o))return!1;const l=n[o],u=e[o];if(L_(l)&&L_(u)){if(!cc(l,u))return!1}else if(l!==u)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function L_(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n){const e=[];for(const[i,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function is(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,l]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ko(n){const e=n.indexOf("?");if(!e)return"";const i=n.indexOf("#",e);return n.substring(e,i>0?i:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,i){i||(i=0);const r=this.W_;if(typeof e=="string")for(let g=0;g<16;g++)r[g]=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3),i+=4;else for(let g=0;g<16;g++)r[g]=e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3],i+=4;for(let g=16;g<80;g++){const b=r[g-3]^r[g-8]^r[g-14]^r[g-16];r[g]=(b<<1|b>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],h=this.chain_[4],m,y;for(let g=0;g<80;g++){g<40?g<20?(m=f^l&(u^f),y=1518500249):(m=l^u^f,y=1859775393):g<60?(m=l&u|f&(l|u),y=2400959708):(m=l^u^f,y=3395469782);const b=(o<<5|o>>>27)+m+h+y+r[g]&4294967295;h=f,f=u,u=(l<<30|l>>>2)&4294967295,l=o,o=b}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,i){if(e==null)return;i===void 0&&(i=e.length);const r=i-this.blockSize;let o=0;const l=this.buf_;let u=this.inbuf_;for(;o<i;){if(u===0)for(;o<=r;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<i;)if(l[u]=e.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}else for(;o<i;)if(l[u]=e[o],++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=i}digest(){const e=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[r]=this.chain_[o]>>l&255,++r;return e}}function b0(n,e){const i=new LC(n,e);return i.subscribe.bind(i)}class LC{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,r){let o;if(e===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");MC(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:r},o.next===void 0&&(o.next=Yd),o.error===void 0&&(o.error=Yd),o.complete===void 0&&(o.complete=Yd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MC(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function Yd(){}function Xh(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=function(n){const e=[];let i=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);if(o>=55296&&o<=56319){const l=o-55296;r++,D(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;o=65536+(l<<10)+u}o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):o<65536?(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},Bc=function(n){let e=0;for(let i=0;i<n.length;i++){const r=n.charCodeAt(i);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,i++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(e,i,r){this.name=e,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const r=new Fc;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BC(e))try{this.getOrInitializeService({instanceIdentifier:zi})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const l=this.getOrInitializeService({instanceIdentifier:o});r.resolve(l)}catch{}}}}clearInstance(e=zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zi){return this.instances.has(e)}getOptions(e=zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);r===f&&u.resolve(o)}return o}onInit(e,i){var r;const o=this.normalizeInstanceIdentifier(i),l=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;l.add(e),this.onInitCallbacks.set(o,l);const u=this.instances.get(o);return u&&e(u,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UC(e),options:i}),this.instances.set(e,r),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zi){return this.component?this.component.multipleInstances?e:zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UC(n){return n===zi?void 0:n}function BC(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new FC(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=[];var Ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ie||(Ie={}));const w0={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},VC=Ie.INFO,HC={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},WC=(n,e,...i)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=HC[e];if(o)console[o](`[${r}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jc{constructor(e){this.name=e,this._logLevel=VC,this._logHandler=WC,this._userLogHandler=null,Zh.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}function zC(n){Zh.forEach(e=>{e.setLogLevel(n)})}function GC(n,e){for(const i of Zh){let r=null;e&&e.level&&(r=w0[e.level]),n===null?i.userLogHandler=null:i.userLogHandler=(o,l,...u)=>{const f=u.map(h=>{if(h==null)return null;if(typeof h=="string")return h;if(typeof h=="number"||typeof h=="boolean")return h.toString();if(h instanceof Error)return h.message;try{return JSON.stringify(h)}catch{return null}}).filter(h=>h).join(" ");l>=(r??o.logLevel)&&n({level:Ie[l].toLowerCase(),message:f,args:u,type:o.name})}}}const qC=(n,e)=>e.some(i=>n instanceof i);let M_,x_;function KC(){return M_||(M_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $C(){return x_||(x_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const I0=new WeakMap,yh=new WeakMap,E0=new WeakMap,Jd=new WeakMap,ef=new WeakMap;function YC(n){const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{i(fi(n.result)),o()},u=()=>{r(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(i=>{i instanceof IDBCursor&&I0.set(i,n)}).catch(()=>{}),ef.set(e,n),e}function JC(n){if(yh.has(n))return;const e=new Promise((i,r)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{i(),o()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});yh.set(n,e)}let bh={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return yh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||E0.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return fi(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function QC(n){bh=n(bh)}function XC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const r=n.call(Qd(this),e,...i);return E0.set(r,e.sort?e.sort():[e]),fi(r)}:$C().includes(n)?function(...e){return n.apply(Qd(this),e),fi(I0.get(this))}:function(...e){return fi(n.apply(Qd(this),e))}}function ZC(n){return typeof n=="function"?XC(n):(n instanceof IDBTransaction&&JC(n),qC(n,KC())?new Proxy(n,bh):n)}function fi(n){if(n instanceof IDBRequest)return YC(n);if(Jd.has(n))return Jd.get(n);const e=ZC(n);return e!==n&&(Jd.set(n,e),ef.set(e,n)),e}const Qd=n=>ef.get(n);function e2(n,e,{blocked:i,upgrade:r,blocking:o,terminated:l}={}){const u=indexedDB.open(n,e),f=fi(u);return r&&u.addEventListener("upgradeneeded",h=>{r(fi(u.result),h.oldVersion,h.newVersion,fi(u.transaction),h)}),i&&u.addEventListener("blocked",h=>i(h.oldVersion,h.newVersion,h)),f.then(h=>{l&&h.addEventListener("close",()=>l()),o&&h.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),f}const t2=["get","getKey","getAll","getAllKeys","count"],n2=["put","add","delete","clear"],Xd=new Map;function F_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xd.get(e))return Xd.get(e);const i=e.replace(/FromIndex$/,""),r=e!==i,o=n2.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||t2.includes(i)))return;const l=async function(u,...f){const h=this.transaction(u,o?"readwrite":"readonly");let m=h.store;return r&&(m=m.index(f.shift())),(await Promise.all([m[i](...f),o&&h.done]))[0]};return Xd.set(e,l),l}QC(n=>({...n,get:(e,i,r)=>F_(e,i)||n.get(e,i,r),has:(e,i)=>!!F_(e,i)||n.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(r2(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function r2(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wh="@firebase/app",U_="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new jc("@firebase/app"),s2="@firebase/app-compat",o2="@firebase/analytics-compat",a2="@firebase/analytics",l2="@firebase/app-check-compat",c2="@firebase/app-check",u2="@firebase/auth",d2="@firebase/auth-compat",h2="@firebase/database",f2="@firebase/database-compat",p2="@firebase/functions",m2="@firebase/functions-compat",g2="@firebase/installations",v2="@firebase/installations-compat",_2="@firebase/messaging",y2="@firebase/messaging-compat",b2="@firebase/performance",w2="@firebase/performance-compat",I2="@firebase/remote-config",E2="@firebase/remote-config-compat",C2="@firebase/storage",S2="@firebase/storage-compat",k2="@firebase/firestore",T2="@firebase/firestore-compat",R2="firebase",A2="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="[DEFAULT]",P2={[wh]:"fire-core",[s2]:"fire-core-compat",[a2]:"fire-analytics",[o2]:"fire-analytics-compat",[c2]:"fire-app-check",[l2]:"fire-app-check-compat",[u2]:"fire-auth",[d2]:"fire-auth-compat",[h2]:"fire-rtdb",[f2]:"fire-rtdb-compat",[p2]:"fire-fn",[m2]:"fire-fn-compat",[g2]:"fire-iid",[v2]:"fire-iid-compat",[_2]:"fire-fcm",[y2]:"fire-fcm-compat",[b2]:"fire-perf",[w2]:"fire-perf-compat",[I2]:"fire-rc",[E2]:"fire-rc-compat",[C2]:"fire-gcs",[S2]:"fire-gcs-compat",[k2]:"fire-fst",[T2]:"fire-fst-compat","fire-js":"fire-js",[R2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Map,oa=new Map;function uc(n,e){try{n.container.addComponent(e)}catch(i){er.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function C0(n,e){n.container.addOrOverwriteComponent(e)}function _i(n){const e=n.name;if(oa.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;oa.set(e,n);for(const i of vi.values())uc(i,n);return!0}function ba(n,e){const i=n.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),n.container.getProvider(e)}function N2(n,e,i=gi){ba(n,e).clearInstance(i)}function O2(){oa.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nn=new ar("app","Firebase",D2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L2=class{constructor(e,i,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=A2;function tf(n,e={}){let i=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gi,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw Nn.create("bad-app-name",{appName:String(o)});if(i||(i=f0()),!i)throw Nn.create("no-options");const l=vi.get(o);if(l){if(cc(i,l.options)&&cc(r,l.config))return l;throw Nn.create("duplicate-app",{appName:o})}const u=new jC(o);for(const h of oa.values())u.addComponent(h);const f=new L2(i,r,u);return vi.set(o,f),f}function nf(n=gi){const e=vi.get(n);if(!e&&n===gi&&f0())return tf();if(!e)throw Nn.create("no-app",{appName:n});return e}function M2(){return Array.from(vi.values())}async function S0(n){const e=n.name;vi.has(e)&&(vi.delete(e),await Promise.all(n.container.getProviders().map(i=>i.delete())),n.isDeleted=!0)}function _n(n,e,i){var r;let o=(r=P2[n])!==null&&r!==void 0?r:n;i&&(o+=`-${i}`);const l=o.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(f.join(" "));return}_i(new Mn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}function k0(n,e){if(n!==null&&typeof n!="function")throw Nn.create("invalid-log-argument");GC(n,e)}function T0(n){zC(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2="firebase-heartbeat-database",F2=1,aa="firebase-heartbeat-store";let Zd=null;function R0(){return Zd||(Zd=e2(x2,F2,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(aa)}}}).catch(n=>{throw Nn.create("idb-open",{originalErrorMessage:n.message})})),Zd}async function U2(n){try{return await(await R0()).transaction(aa).objectStore(aa).get(A0(n))}catch(e){if(e instanceof kt)er.warn(e.message);else{const i=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});er.warn(i.message)}}}async function B_(n,e){try{const r=(await R0()).transaction(aa,"readwrite");await r.objectStore(aa).put(e,A0(n)),await r.done}catch(i){if(i instanceof kt)er.warn(i.message);else{const r=Nn.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});er.warn(r.message)}}}function A0(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=1024,j2=30*24*60*60*1e3;class V2{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new W2(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=j_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=j2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=j_(),{heartbeatsToSend:i,unsentEntries:r}=H2(this._heartbeatsCache.heartbeats),o=sc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function j_(){return new Date().toISOString().substring(0,10)}function H2(n,e=B2){const i=[];let r=n.slice();for(const o of n){const l=i.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),V_(i)>e){l.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),V_(i)>e){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class W2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ac()?TC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await U2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return B_(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return B_(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function V_(n){return sc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(n){_i(new Mn("platform-logger",e=>new i2(e),"PRIVATE")),_i(new Mn("heartbeat",e=>new V2(e),"PRIVATE")),_n(wh,U_,n),_n(wh,U_,"esm2017"),_n("fire-js","")}z2("");const G2=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:kt,SDK_VERSION:Ei,_DEFAULT_ENTRY_NAME:gi,_addComponent:uc,_addOrOverwriteComponent:C0,_apps:vi,_clearComponents:O2,_components:oa,_getProvider:ba,_registerComponent:_i,_removeServiceInstance:N2,deleteApp:S0,getApp:nf,getApps:M2,initializeApp:tf,onLog:k0,registerVersion:_n,setLogLevel:T0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,i){this._delegate=e,this.firebase=i,uc(e,new Mn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),S0(this._delegate)))}_getService(e,i=gi){var r;this._delegate.checkDestroyed();const o=this._delegate.container.getProvider(e);return!o.isInitialized()&&((r=o.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&o.initialize(),o.getImmediate({identifier:i})}_removeServiceInstance(e,i=gi){this._delegate.container.getProvider(e).clearInstance(i)}_addComponent(e){uc(this._delegate,e)}_addOrOverwriteComponent(e){C0(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},H_=new ar("app-compat","Firebase",K2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(n){const e={},i={__esModule:!0,initializeApp:l,app:o,registerVersion:_n,setLogLevel:T0,onLog:k0,apps:null,SDK_VERSION:Ei,INTERNAL:{registerComponent:f,removeApp:r,useAsService:h,modularAPIs:G2}};i.default=i,Object.defineProperty(i,"apps",{get:u});function r(m){delete e[m]}function o(m){if(m=m||gi,!nn(e,m))throw H_.create("no-app",{appName:m});return e[m]}o.App=n;function l(m,y={}){const g=tf(m,y);if(nn(e,g.name))return e[g.name];const b=new n(g,i);return e[g.name]=b,b}function u(){return Object.keys(e).map(m=>e[m])}function f(m){const y=m.name,g=y.replace("-compat","");if(_i(m)&&m.type==="PUBLIC"){const b=(S=o())=>{if(typeof S[g]!="function")throw H_.create("invalid-app-argument",{appName:y});return S[g]()};m.serviceProps!==void 0&&ra(b,m.serviceProps),i[g]=b,n.prototype[g]=function(...S){return this._getService.bind(this,y).apply(this,m.multipleInstances?S:[])}}return m.type==="PUBLIC"?i[g]:null}function h(m,y){return y==="serverAuth"?null:y}return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(){const n=$2(q2);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:P0,extendNamespace:e,createSubscribe:b0,ErrorFactory:ar,deepExtend:ra});function e(i){ra(n,i)}return n}const Y2=P0();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=new jc("@firebase/app-compat"),J2="@firebase/app-compat",Q2="0.2.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(n){_n(J2,Q2,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(kC()&&self.firebase!==void 0){W_.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&W_.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const V=Y2;X2();var Z2="firebase",eS="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */V.registerVersion(Z2,eS,"app-compat");const tS={apiKey:"AIzaSyB--dwelzjBYIllSfAwhcsoE9N8wNlXhHM",authDomain:"pizzatv-dbeb2.firebaseapp.com",databaseURL:"https://pizzatv-dbeb2-default-rtdb.europe-west1.firebasedatabase.app",projectId:"pizzatv-dbeb2",storageBucket:"pizzatv-dbeb2.appspot.com",messagingSenderId:"796130974254",appId:"1:796130974254:web:b01c337219a8a5e28d9dbf"};V.initializeApp(tS);function rf(n,e){var i={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(i[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(i[r[o]]=n[r[o]]);return i}const Bo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Xr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function N0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iS=nS,rS=N0,O0=new ar("auth","Firebase",N0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new jc("@firebase/auth");function sS(n,...e){dc.logLevel<=Ie.WARN&&dc.warn(`Auth (${Ei}): ${n}`,...e)}function Zl(n,...e){dc.logLevel<=Ie.ERROR&&dc.error(`Auth (${Ei}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n,...e){throw sf(n,...e)}function dt(n,...e){return sf(n,...e)}function D0(n,e,i){const r=Object.assign(Object.assign({},rS()),{[e]:i});return new ar("auth","Firebase",r).create(e,{appName:n.name})}function Ss(n,e,i){const r=i;if(!(e instanceof r))throw r.name!==e.constructor.name&&lt(n,"argument-error"),D0(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sf(n,...e){if(typeof n!="string"){const i=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(i,...r)}return O0.create(n,...e)}function O(n,e,...i){if(!n)throw sf(e,...i)}function pn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Zl(e),new Error(e)}function rn(n,e){n||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function of(){return z_()==="http:"||z_()==="https:"}function z_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(of()||g0()||"connection"in navigator)?navigator.onLine:!0}function aS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,i){this.shortDelay=e,this.longDelay=i,rn(i>e,"Short delay should be less than long delay!"),this.isMobile=Qh()||Uc()}get(){return oS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(n,e){rn(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{static initialize(e,i,r){this.fetchImpl=e,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=new wa(3e4,6e4);function Xe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function tt(n,e,i,r,o={}){return M0(n,o,async()=>{let l={},u={};r&&(e==="GET"?u=r:l={body:JSON.stringify(r)});const f=lr(Object.assign({key:n.config.apiKey},u)).slice(1),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),L0.fetch()(x0(n,n.config.apiHost,i,f),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},l))})}async function M0(n,e,i){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},lS),e);try{const o=new uS(n),l=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw $o(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[h,m]=f.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(n,"credential-already-in-use",u);if(h==="EMAIL_EXISTS")throw $o(n,"email-already-in-use",u);if(h==="USER_DISABLED")throw $o(n,"user-disabled",u);const y=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw D0(n,y,m);lt(n,y)}}catch(o){if(o instanceof kt)throw o;lt(n,"network-request-failed",{message:String(o)})}}async function Vn(n,e,i,r,o={}){const l=await tt(n,e,i,r,o);return"mfaPendingCredential"in l&&lt(n,"multi-factor-auth-required",{_serverResponse:l}),l}function x0(n,e,i,r){const o=`${e}${i}?${r}`;return n.config.emulator?af(n.config,o):`${n.config.apiScheme}://${o}`}class uS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),cS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $o(n,e,i){const r={appName:n.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=dt(n,e,r);return o.customData._tokenResponse=i,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(n,e){return tt(n,"POST","/v1/accounts:delete",e)}async function hS(n,e){return tt(n,"POST","/v1/accounts:update",e)}async function fS(n,e){return tt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pS(n,e=!1){const i=te(n),r=await i.getIdToken(e),o=Vc(r);O(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l==null?void 0:l.sign_in_provider;return{claims:o,token:r,authTime:Yo(eh(o.auth_time)),issuedAtTime:Yo(eh(o.iat)),expirationTime:Yo(eh(o.exp)),signInProvider:u||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function eh(n){return Number(n)*1e3}function Vc(n){const[e,i,r]=n.split(".");if(e===void 0||i===void 0||r===void 0)return Zl("JWT malformed, contained fewer than 3 sections"),null;try{const o=oc(i);return o?JSON.parse(o):(Zl("Failed to decode base64 JWT payload"),null)}catch(o){return Zl("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function mS(n){const e=Vc(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(n,e,i=!1){if(i)return e;try{return await e}catch(r){throw r instanceof kt&&gS(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function gS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yo(this.lastLoginAt),this.creationTime=Yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(n){var e;const i=n.auth,r=await n.getIdToken(),o=await xn(n,fS(i,{idToken:r}));O(o==null?void 0:o.users.length,i,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const u=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?bS(l.providerUserInfo):[],f=yS(n.providerData,u),h=n.isAnonymous,m=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),y=h?m:!1,g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new F0(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,g)}async function _S(n){const e=te(n);await ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yS(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function bS(n){return n.map(e=>{var{providerId:i}=e,r=rf(e,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wS(n,e){const i=await M0(n,{},async()=>{const r=lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,u=x0(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",L0.fetch()(u,{method:"POST",headers:f,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}async getToken(e,i=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!i&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:r,refreshToken:o,expiresIn:l}=await wS(e,i);this.updateTokensAndExpiration(r,o,Number(l))}updateTokensAndExpiration(e,i,r){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,i){const{refreshToken:r,accessToken:o,expirationTime:l}=i,u=new ua;return r&&(O(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(O(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),l&&(O(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ua,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ji{constructor(e){var{uid:i,auth:r,stsTokenManager:o}=e,l=rf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new F0(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const i=await xn(this,this.stsTokenManager.getToken(this.auth,e));return O(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return pS(this,e)}reload(){return _S(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new Ji(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),i&&await ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xn(this,dS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var r,o,l,u,f,h,m,y;const g=(r=i.displayName)!==null&&r!==void 0?r:void 0,b=(o=i.email)!==null&&o!==void 0?o:void 0,S=(l=i.phoneNumber)!==null&&l!==void 0?l:void 0,C=(u=i.photoURL)!==null&&u!==void 0?u:void 0,_=(f=i.tenantId)!==null&&f!==void 0?f:void 0,I=(h=i._redirectEventId)!==null&&h!==void 0?h:void 0,E=(m=i.createdAt)!==null&&m!==void 0?m:void 0,T=(y=i.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:R,emailVerified:F,isAnonymous:$,providerData:M,stsTokenManager:ee}=i;O(R&&ee,e,"internal-error");const ne=ua.fromJSON(this.name,ee);O(typeof R=="string",e,"internal-error"),ui(g,e.name),ui(b,e.name),O(typeof F=="boolean",e,"internal-error"),O(typeof $=="boolean",e,"internal-error"),ui(S,e.name),ui(C,e.name),ui(_,e.name),ui(I,e.name),ui(E,e.name),ui(T,e.name);const z=new Ji({uid:R,auth:e,email:b,emailVerified:F,displayName:g,isAnonymous:$,photoURL:C,phoneNumber:S,tenantId:_,stsTokenManager:ne,createdAt:E,lastLoginAt:T});return M&&Array.isArray(M)&&(z.providerData=M.map(J=>Object.assign({},J))),I&&(z._redirectEventId=I),z}static async _fromIdTokenResponse(e,i,r=!1){const o=new ua;o.updateFromServerResponse(i);const l=new Ji({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await ca(l),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=new Map;function Ft(n){rn(n instanceof Function,"Expected a class definition");let e=G_.get(n);return e?(rn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,G_.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}U0.type="NONE";const gs=U0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n,e,i){return`firebase:${n}:${e}:${i}`}class ss{constructor(e,i,r){this.persistence=e,this.auth=i,this.userKey=r;const{config:o,name:l}=this.auth;this.fullUserKey=Qi(this.userKey,o.apiKey,l),this.fullPersistenceKey=Qi("persistence",o.apiKey,l),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ji._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,r="authUser"){if(!i.length)return new ss(Ft(gs),e,r);const o=(await Promise.all(i.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=o[0]||Ft(gs);const u=Qi(r,e.config.apiKey,e.name);let f=null;for(const m of i)try{const y=await m._get(u);if(y){const g=Ji._fromJSON(e,y);m!==l&&(f=g),l=m;break}}catch{}const h=o.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!h.length?new ss(l,e,r):(l=h[0],f&&await l._set(u,f.toJSON()),await Promise.all(i.map(async m=>{if(m!==l)try{await m._remove(u)}catch{}})),new ss(l,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(V0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(B0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(H0(e))return"Blackberry";if(W0(e))return"Webos";if(lf(e))return"Safari";if((e.includes("chrome/")||j0(e))&&!e.includes("edge/"))return"Chrome";if(Ia(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function B0(n=Qe()){return/firefox\//i.test(n)}function lf(n=Qe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function j0(n=Qe()){return/crios\//i.test(n)}function V0(n=Qe()){return/iemobile/i.test(n)}function Ia(n=Qe()){return/android/i.test(n)}function H0(n=Qe()){return/blackberry/i.test(n)}function W0(n=Qe()){return/webos/i.test(n)}function ks(n=Qe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function IS(n=Qe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function ES(n=Qe()){var e;return ks(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CS(){return v0()&&document.documentMode===10}function z0(n=Qe()){return ks(n)||Ia(n)||W0(n)||H0(n)||/windows phone/i.test(n)||V0(n)}function SS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(n,e=[]){let i;switch(n){case"Browser":i=q_(Qe());break;case"Worker":i=`${q_(Qe())}-${n}`;break;default:i=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${Ei}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(n){return(await tt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function q0(n,e){return tt(n,"GET","/v2/recaptchaConfig",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n){return n!==void 0&&n.getResponse!==void 0}function $_(n){return n!==void 0&&n.enterprise!==void 0}class K0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(i=>i.provider==="EMAIL_PASSWORD_PROVIDER"&&i.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function cf(n){return new Promise((e,i)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const l=dt("internal-error");l.customData=o,i(l)},r.type="text/javascript",r.charset="UTF-8",TS().appendChild(r)})}function $0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const RS="https://www.google.com/recaptcha/enterprise.js?render=",AS="recaptcha-enterprise",PS="NO_RECAPTCHA";class Y0{constructor(e){this.type=AS,this.auth=ze(e)}async verify(e="verify",i=!1){async function r(l){if(!i){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{q0(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const m=new K0(h);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,u(m.siteKey)}}).catch(h=>{f(h)})})}function o(l,u,f){const h=window.grecaptcha;$_(h)?h.enterprise.ready(()=>{h.enterprise.execute(l,{action:e}).then(m=>{u(m)}).catch(()=>{u(PS)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,u)=>{r(this.auth).then(f=>{if(!i&&$_(window.grecaptcha))o(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}cf(RS+f).then(()=>{o(f,l,u)}).catch(h=>{u(h)})}}).catch(f=>{u(f)})})}}async function yi(n,e,i,r=!1){const o=new Y0(n);let l;try{l=await o.verify(i)}catch{l=await o.verify(i,!0)}const u=Object.assign({},e);return r?Object.assign(u,{captchaResp:l}):Object.assign(u,{captchaResponse:l}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const r=l=>new Promise((u,f)=>{try{const h=e(l);u(h)}catch(h){f(h)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,i,r,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Y_(this),this.idTokenSubscription=new Y_(this),this.beforeStateQueue=new NS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=O0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Ft(i)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var i;const r=await this.assertedPersistence.getCurrentUser();let o=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,f=o==null?void 0:o._redirectEventId,h=await this.tryRedirectSignIn(e);(!u||u===f)&&(h!=null&&h.user)&&(o=h.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const i=e?te(e):null;return i&&O(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}async initializeRecaptchaConfig(){const e=await q0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new K0(e);this.tenantId==null?this._agentRecaptchaConfig=i:this._tenantRecaptchaConfigs[this.tenantId]=i,i.emailPasswordEnabled&&new Y0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,i,r){return this.registerStateListener(this.authStateSubscription,e,i,r)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,r){return this.registerStateListener(this.idTokenSubscription,e,i,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const r=await this.getOrInitRedirectPersistenceManager(i);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Ft(e)||this._popupRedirectResolver;O(i,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[Ft(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,r,o){if(this._deleted)return()=>{};const l=typeof i=="function"?i:i.next.bind(i),u=this._isInitialized?Promise.resolve():this._initializationPromise;return O(u,this,"internal-error"),u.then(()=>l(this.currentUser)),typeof i=="function"?e.addObserver(i,r,o):e.addObserver(i)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=G0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var e;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&sS(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function ze(n){return te(n)}class Y_{constructor(e){this.auth=e,this.observer=null,this.addObserver=b0(i=>this.observer=i)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(n,e){const i=ba(n,"auth");if(i.isInitialized()){const o=i.getImmediate(),l=i.getOptions();if(cc(l,e??{}))return o;lt(o,"already-initialized")}return i.initialize({options:e})}function LS(n,e){const i=(e==null?void 0:e.persistence)||[],r=(Array.isArray(i)?i:[i]).map(Ft);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function J0(n,e,i){const r=ze(n);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!!(i!=null&&i.disableWarnings),l=Q0(e),{host:u,port:f}=MS(e),h=f===null?"":`:${f}`;r.config.emulator={url:`${l}//${u}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||xS()}function Q0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function MS(n){const e=Q0(n),i=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const l=o[1];return{host:l,port:J_(r.substr(l.length+1))}}else{const[l,u]=r.split(":");return{host:l,port:J_(u)}}}function J_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xS(){function n(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,i){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(n,e){return tt(n,"POST","/v1/accounts:resetPassword",Xe(n,e))}async function Z0(n,e){return tt(n,"POST","/v1/accounts:update",e)}async function FS(n,e){return tt(n,"POST","/v1/accounts:update",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(n,e){return Vn(n,"POST","/v1/accounts:signInWithPassword",Xe(n,e))}async function Hc(n,e){return tt(n,"POST","/v1/accounts:sendOobCode",Xe(n,e))}async function US(n,e){return Hc(n,e)}async function nh(n,e){return Hc(n,e)}async function ih(n,e){return Hc(n,e)}async function BS(n,e){return Hc(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(n,e){return Vn(n,"POST","/v1/accounts:signInWithEmailLink",Xe(n,e))}async function VS(n,e){return Vn(n,"POST","/v1/accounts:signInWithEmailLink",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da extends Ts{constructor(e,i,r,o=null){super("password",r),this._email=e,this._password=i,this._tenantId=o}static _fromEmailAndPassword(e,i){return new da(e,i,"password")}static _fromEmailAndCode(e,i,r=null){return new da(e,i,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){var i;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const o=await yi(e,r,"signInWithPassword");return th(e,o)}else return th(e,r).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await yi(e,r,"signInWithPassword");return th(e,l)}else return Promise.reject(o)});case"emailLink":return jS(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":return Z0(e,{idToken:i,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return VS(e,{idToken:i,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(n,e){return Vn(n,"POST","/v1/accounts:signInWithIdp",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="http://localhost";class yn extends Ts{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):lt("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=i,l=rf(i,["providerId","signInMethod"]);if(!r||!o)return null;const u=new yn(r,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const i=this.buildRequest();return On(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,On(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,On(e,i)}buildRequest(){const e={requestUri:HS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=lr(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(n,e){return tt(n,"POST","/v1/accounts:sendVerificationCode",Xe(n,e))}async function zS(n,e){return Vn(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,e))}async function GS(n,e){const i=await Vn(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,e));if(i.temporaryProof)throw $o(n,"account-exists-with-different-credential",i);return i}const qS={USER_NOT_FOUND:"user-not-found"};async function KS(n,e){const i=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Vn(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,i),qS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Ts{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,i){return new Xi({verificationId:e,verificationCode:i})}static _fromTokenResponse(e,i){return new Xi({phoneNumber:e,temporaryProof:i})}_getIdTokenResponse(e){return zS(e,this._makeVerificationRequest())}_linkToIdToken(e,i){return GS(e,Object.assign({idToken:i},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return KS(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:i,verificationId:r,verificationCode:o}=this.params;return e&&i?{temporaryProof:e,phoneNumber:i}:{sessionInfo:r,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:i,verificationCode:r,phoneNumber:o,temporaryProof:l}=e;return!r&&!i&&!o&&!l?null:new Xi({verificationId:i,verificationCode:r,phoneNumber:o,temporaryProof:l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YS(n){const e=is(Ko(n)).link,i=e?is(Ko(e)).deep_link_id:null,r=is(Ko(n)).deep_link_id;return(r?is(Ko(r)).link:null)||r||i||e||n}class Wc{constructor(e){var i,r,o,l,u,f;const h=is(Ko(e)),m=(i=h.apiKey)!==null&&i!==void 0?i:null,y=(r=h.oobCode)!==null&&r!==void 0?r:null,g=$S((o=h.mode)!==null&&o!==void 0?o:null);O(m&&y&&g,"argument-error"),this.apiKey=m,this.operation=g,this.code=y,this.continueUrl=(l=h.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(u=h.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(f=h.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const i=YS(e);try{return new Wc(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(){this.providerId=Ci.PROVIDER_ID}static credential(e,i){return da._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const r=Wc.parseLink(i);return O(r,"argument-error"),da._fromEmailAndCode(e,r.code,r.tenantId)}}Ci.PROVIDER_ID="password";Ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Hn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class os extends Rs{static credentialFromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;return O("providerId"in i&&"signInMethod"in i,"argument-error"),yn._fromParams(i)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),yn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return os.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return os.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r,oauthTokenSecret:o,pendingToken:l,nonce:u,providerId:f}=e;if(!r&&!o&&!i&&!l||!f)return null;try{return new os(f)._credential({idToken:i,accessToken:r,nonce:u,pendingToken:l})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Rs{constructor(){super("facebook.com")}static credential(e){return yn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return yn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:r}=e;if(!i&&!r)return null;try{return dn.credential(i,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Rs{constructor(){super("github.com")}static credential(e){return yn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="http://localhost";class vs extends Ts{constructor(e,i){super(e,e),this.pendingToken=i}_getIdTokenResponse(e){const i=this.buildRequest();return On(e,i)}_linkToIdToken(e,i){const r=this.buildRequest();return r.idToken=i,On(e,r)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,On(e,i)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,pendingToken:l}=i;return!r||!o||!l||r!==o?null:new vs(r,l)}static _create(e,i){return new vs(e,i)}buildRequest(){return{requestUri:JS,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="saml.";class hc extends Hn{constructor(e){O(e.startsWith(QS),"argument-error"),super(e)}static credentialFromResult(e){return hc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return hc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const i=vs.fromJSON(e);return O(i,"argument-error"),i}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:i,providerId:r}=e;if(!i||!r)return null;try{return vs._create(r,i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Rs{constructor(){super("twitter.com")}static credential(e,i){return yn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=e;if(!i||!r)return null;try{return fn.credential(i,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(n,e){return Vn(n,"POST","/v1/accounts:signUp",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,r,o=!1){const l=await Ji._fromIdTokenResponse(e,r,o),u=Q_(r);return new Wt({user:l,providerId:u,_tokenResponse:r,operationType:i})}static async _forOperation(e,i,r){await e._updateTokensIfNecessary(r,!0);const o=Q_(r);return new Wt({user:e,providerId:o,_tokenResponse:r,operationType:i})}}function Q_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(n){var e;const i=ze(n);if(await i._initializationPromise,!((e=i.currentUser)===null||e===void 0)&&e.isAnonymous)return new Wt({user:i.currentUser,providerId:null,operationType:"signIn"});const r=await ec(i,{returnSecureToken:!0}),o=await Wt._fromIdTokenResponse(i,"signIn",r,!0);return await i._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends kt{constructor(e,i,r,o){var l;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,fc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,i,r,o){return new fc(e,i,r,o)}}function eb(n,e,i,r){return(e==="reauthenticate"?i._getReauthenticationResolver(n):i._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?fc._fromErrorAndOperation(n,l,e,r):l})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(n,e){const i=te(n);await zc(!0,i,e);const{providerUserInfo:r}=await hS(i.auth,{idToken:await i.getIdToken(),deleteProvider:[e]}),o=tb(r||[]);return i.providerData=i.providerData.filter(l=>o.has(l.providerId)),o.has("phone")||(i.phoneNumber=null),await i.auth._persistUserIfCurrent(i),i}async function uf(n,e,i=!1){const r=await xn(n,e._linkToIdToken(n.auth,await n.getIdToken()),i);return Wt._forOperation(n,"link",r)}async function zc(n,e,i){await ca(e);const r=tb(e.providerData),o=n===!1?"provider-already-linked":"no-such-provider";O(r.has(i)===n,e.auth,o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(n,e,i=!1){const{auth:r}=n,o="reauthenticate";try{const l=await xn(n,eb(r,o,e,n),i);O(l.idToken,r,"internal-error");const u=Vc(l.idToken);O(u,r,"internal-error");const{sub:f}=u;return O(n.uid===f,r,"user-mismatch"),Wt._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ib(n,e,i=!1){const r="signIn",o=await eb(n,r,e),l=await Wt._fromIdTokenResponse(n,r,o);return i||await n._updateCurrentUser(l.user),l}async function Gc(n,e){return ib(ze(n),e)}async function rb(n,e){const i=te(n);return await zc(!1,i,e.providerId),uf(i,e)}async function sb(n,e){return nb(te(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(n,e){return Vn(n,"POST","/v1/accounts:signInWithCustomToken",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(n,e){const i=ze(n),r=await ek(i,{token:e,returnSecureToken:!0}),o=await Wt._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,i){this.factorId=e,this.uid=i.mfaEnrollmentId,this.enrollmentTime=new Date(i.enrolledAt).toUTCString(),this.displayName=i.displayName}static _fromServerResponse(e,i){return"phoneInfo"in i?df._fromServerResponse(e,i):"totpInfo"in i?hf._fromServerResponse(e,i):lt(e,"internal-error")}}class df extends Ea{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,i){return new df(i)}}class hf extends Ea{constructor(e){super("totp",e)}static _fromServerResponse(e,i){return new hf(i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n,e,i){var r;O(((r=i.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),O(typeof i.dynamicLinkDomain>"u"||i.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=i.url,e.dynamicLinkDomain=i.dynamicLinkDomain,e.canHandleCodeInApp=i.handleCodeInApp,i.iOS&&(O(i.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=i.iOS.bundleId),i.android&&(O(i.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=i.android.installApp,e.androidMinimumVersionCode=i.android.minimumVersion,e.androidPackageName=i.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(n,e,i){var r;const o=ze(n),l={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=o._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await yi(o,l,"getOobCode",!0);i&&as(o,u,i),await nh(o,u)}else i&&as(o,l,i),await nh(o,l).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const f=await yi(o,l,"getOobCode",!0);i&&as(o,f,i),await nh(o,f)}else return Promise.reject(u)})}async function ik(n,e,i){await X0(te(n),{oobCode:e,newPassword:i})}async function rk(n,e){await FS(te(n),{oobCode:e})}async function ob(n,e){const i=te(n),r=await X0(i,{oobCode:e}),o=r.requestType;switch(O(o,i,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,i,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,i,"internal-error");default:O(r.email,i,"internal-error")}let l=null;return r.mfaInfo&&(l=Ea._fromServerResponse(ze(i),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:l},operation:o}}async function sk(n,e){const{data:i}=await ob(te(n),e);return i.email}async function ok(n,e,i){var r;const o=ze(n),l={returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"};let u;if(!((r=o._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const m=await yi(o,l,"signUpPassword");u=ec(o,m)}else u=ec(o,l).catch(async m=>{if(m.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const y=await yi(o,l,"signUpPassword");return ec(o,y)}else return Promise.reject(m)});const f=await u.catch(m=>Promise.reject(m)),h=await Wt._fromIdTokenResponse(o,"signIn",f);return await o._updateCurrentUser(h.user),h}function ak(n,e,i){return Gc(te(n),Ci.credential(e,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(n,e,i){var r;const o=ze(n),l={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function u(f,h){O(h.handleCodeInApp,o,"argument-error"),h&&as(o,f,h)}if(!((r=o._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const f=await yi(o,l,"getOobCode",!0);u(f,i),await ih(o,f)}else u(l,i),await ih(o,l).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const h=await yi(o,l,"getOobCode",!0);u(h,i),await ih(o,h)}else return Promise.reject(f)})}function ck(n,e){const i=Wc.parseLink(e);return(i==null?void 0:i.operation)==="EMAIL_SIGNIN"}async function uk(n,e,i){const r=te(n),o=Ci.credentialWithLink(e,i||la());return O(o._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Gc(r,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(n,e){return tt(n,"POST","/v1/accounts:createAuthUri",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(n,e){const i=of()?la():"http://localhost",r={identifier:e,continueUri:i},{signinMethods:o}=await dk(te(n),r);return o||[]}async function fk(n,e){const i=te(n),o={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&as(i.auth,o,e);const{email:l}=await US(i.auth,o);l!==n.email&&await n.reload()}async function pk(n,e,i){const r=te(n),l={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};i&&as(r.auth,l,i);const{email:u}=await BS(r.auth,l);u!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(n,e){return tt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk(n,{displayName:e,photoURL:i}){if(e===void 0&&i===void 0)return;const r=te(n),l={idToken:await r.getIdToken(),displayName:e,photoUrl:i,returnSecureToken:!0},u=await xn(r,mk(r.auth,l));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const f=r.providerData.find(({providerId:h})=>h==="password");f&&(f.displayName=r.displayName,f.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function vk(n,e){return ab(te(n),e,null)}function _k(n,e){return ab(te(n),null,e)}async function ab(n,e,i){const{auth:r}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(l.email=e),i&&(l.password=i);const u=await xn(n,Z0(r,l));await n._updateTokensIfNecessary(u,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(n){var e,i;if(!n)return null;const{providerId:r}=n,o=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},l=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const u=(i=(e=Vc(n.idToken))===null||e===void 0?void 0:e.firebase)===null||i===void 0?void 0:i.sign_in_provider;if(u){const f=u!=="anonymous"&&u!=="custom"?u:null;return new ls(l,f)}}if(!r)return null;switch(r){case"facebook.com":return new bk(l,o);case"github.com":return new wk(l,o);case"google.com":return new Ik(l,o);case"twitter.com":return new Ek(l,o,n.screenName||null);case"custom":case"anonymous":return new ls(l,null);default:return new ls(l,r,o)}}class ls{constructor(e,i,r={}){this.isNewUser=e,this.providerId=i,this.profile=r}}class lb extends ls{constructor(e,i,r,o){super(e,i,r),this.username=o}}class bk extends ls{constructor(e,i){super(e,"facebook.com",i)}}class wk extends lb{constructor(e,i){super(e,"github.com",i,typeof(i==null?void 0:i.login)=="string"?i==null?void 0:i.login:null)}}class Ik extends ls{constructor(e,i){super(e,"google.com",i)}}class Ek extends lb{constructor(e,i,r){super(e,"twitter.com",i,r)}}function Ck(n){const{user:e,_tokenResponse:i}=n;return e.isAnonymous&&!i?{providerId:null,isNewUser:!1,profile:null}:yk(i)}function Sk(n,e,i,r){return te(n).onIdTokenChanged(e,i,r)}function kk(n,e,i){return te(n).beforeAuthStateChanged(e,i)}function Tk(n,e,i,r){return te(n).onAuthStateChanged(e,i,r)}function Rk(n){return te(n).signOut()}class qi{constructor(e,i,r){this.type=e,this.credential=i,this.auth=r}static _fromIdtoken(e,i){return new qi("enroll",e,i)}static _fromMfaPendingCredential(e){return new qi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var i,r;if(e!=null&&e.multiFactorSession){if(!((i=e.multiFactorSession)===null||i===void 0)&&i.pendingCredential)return qi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return qi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,i,r){this.session=e,this.hints=i,this.signInResolver=r}static _fromError(e,i){const r=ze(e),o=i.customData._serverResponse,l=(o.mfaInfo||[]).map(f=>Ea._fromServerResponse(r,f));O(o.mfaPendingCredential,r,"internal-error");const u=qi._fromMfaPendingCredential(o.mfaPendingCredential);return new ff(u,l,async f=>{const h=await f._process(r,u);delete o.mfaInfo,delete o.mfaPendingCredential;const m=Object.assign(Object.assign({},o),{idToken:h.idToken,refreshToken:h.refreshToken});switch(i.operationType){case"signIn":const y=await Wt._fromIdTokenResponse(r,i.operationType,m);return await r._updateCurrentUser(y.user),y;case"reauthenticate":return O(i.user,r,"internal-error"),Wt._forOperation(i.user,i.operationType,m);default:lt(r,"internal-error")}})}async resolveSignIn(e){const i=e;return this.signInResolver(i)}}function Ak(n,e){var i;const r=te(n),o=e;return O(e.customData.operationType,r,"argument-error"),O((i=o.customData._serverResponse)===null||i===void 0?void 0:i.mfaPendingCredential,r,"argument-error"),ff._fromError(r,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(n,e){return tt(n,"POST","/v2/accounts/mfaEnrollment:start",Xe(n,e))}function Nk(n,e){return tt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Xe(n,e))}function Ok(n,e){return tt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Xe(n,e))}class pf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(i=>{i.mfaInfo&&(this.enrolledFactors=i.mfaInfo.map(r=>Ea._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new pf(e)}async getSession(){return qi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,i){const r=e,o=await this.getSession(),l=await xn(this.user,r._process(this.user.auth,o,i));return await this.user._updateTokensIfNecessary(l),this.user.reload()}async unenroll(e){const i=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const o=await xn(this.user,Ok(this.user.auth,{idToken:r,mfaEnrollmentId:i}));this.enrolledFactors=this.enrolledFactors.filter(({uid:l})=>l!==i),await this.user._updateTokensIfNecessary(o),await this.user.reload()}catch(o){throw o}}}const rh=new WeakMap;function Dk(n){const e=te(n);return rh.has(e)||rh.set(e,pf._fromUser(e)),rh.get(e)}const pc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(pc,"1"),this.storage.removeItem(pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(){const n=Qe();return lf(n)||ks(n)}const Mk=1e3,xk=10;class ub extends cb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lk()&&SS(),this.fallbackToPolling=z0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&e(i,o,r)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((u,f,h)=>{this.notifyListeners(u,h)});return}const r=e.key;if(i?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const u=this.storage.getItem(r);if(e.newValue!==u)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!i)return}const o=()=>{const u=this.storage.getItem(r);!i&&this.localCache[r]===u||this.notifyListeners(r,u)},l=this.storage.getItem(r);CS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,xk):o()}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:r}),!0)})},Mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}ub.type="LOCAL";const qc=ub;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db extends cb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}db.type="SESSION";const bi=db;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const r=new Kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:r,eventType:o,data:l}=i.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const f=Array.from(u).map(async m=>m(i.origin,l)),h=await Fk(f);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:h})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n="",e=10){let i="";for(let r=0;r<e;r++)i+=Math.floor(Math.random()*10);return n+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((f,h)=>{const m=Ca("",20);o.port1.start();const y=setTimeout(()=>{h(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(g){const b=g;if(b.data.eventId===m)switch(b.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(b.data.response);break;default:clearTimeout(y),clearTimeout(l),h(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:i},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function Bk(n){Je().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function jk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Hk(){return mf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb="firebaseLocalStorageDb",Wk=1,mc="firebaseLocalStorage",fb="fbase_key";class Sa{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function $c(n,e){return n.transaction([mc],e?"readwrite":"readonly").objectStore(mc)}function zk(){const n=indexedDB.deleteDatabase(hb);return new Sa(n).toPromise()}function Ih(){const n=indexedDB.open(hb,Wk);return new Promise((e,i)=>{n.addEventListener("error",()=>{i(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(mc,{keyPath:fb})}catch(o){i(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(mc)?e(r):(r.close(),await zk(),e(await Ih()))})})}async function X_(n,e,i){const r=$c(n,!0).put({[fb]:e,value:i});return new Sa(r).toPromise()}async function Gk(n,e){const i=$c(n,!1).get(e),r=await new Sa(i).toPromise();return r===void 0?null:r.value}function Z_(n,e){const i=$c(n,!0).delete(e);return new Sa(i).toPromise()}const qk=800,Kk=3;class pb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ih(),this.db)}async _withRetries(e){let i=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(i++>Kk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(Hk()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await jk(),!this.activeServiceWorker)return;this.sender=new Uk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ih();return await X_(e,pc,"1"),await Z_(e,pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>X_(r,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(r=>Gk(r,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Z_(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=$c(o,!1).getAll();return new Sa(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;for(const{fbase_key:o,value:l}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pb.type="LOCAL";const _s=pb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(n,e){return tt(n,"POST","/v2/accounts/mfaSignIn:start",Xe(n,e))}function Yk(n,e){return tt(n,"POST","/v2/accounts/mfaSignIn:finalize",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=500,Qk=6e4,Yl=1e12;class Xk{constructor(e){this.auth=e,this.counter=Yl,this._widgets=new Map}render(e,i){const r=this.counter;return this._widgets.set(r,new Zk(e,this.auth.name,i||{})),this.counter++,r}reset(e){var i;const r=e||Yl;(i=this._widgets.get(r))===null||i===void 0||i.delete(),this._widgets.delete(r)}getResponse(e){var i;const r=e||Yl;return((i=this._widgets.get(r))===null||i===void 0?void 0:i.getResponse())||""}async execute(e){var i;const r=e||Yl;return(i=this._widgets.get(r))===null||i===void 0||i.execute(),""}}class Zk{constructor(e,i,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;O(o,"argument-error",{appName:i}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=eT(50);const{callback:e,"expired-callback":i}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,i)try{i()}catch{}this.isVisible&&this.execute()},Qk)},Jk))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function eT(n){const e=[],i="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(i.charAt(Math.floor(Math.random()*i.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=$0("rcb"),tT=new wa(3e4,6e4),nT="https://www.google.com/recaptcha/api.js?";class iT{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Je().grecaptcha)===null||e===void 0)&&e.render)}load(e,i=""){return O(rT(i),e,"argument-error"),this.shouldResolveImmediately(i)&&K_(Je().grecaptcha)?Promise.resolve(Je().grecaptcha):new Promise((r,o)=>{const l=Je().setTimeout(()=>{o(dt(e,"network-request-failed"))},tT.get());Je()[sh]=()=>{Je().clearTimeout(l),delete Je()[sh];const f=Je().grecaptcha;if(!f||!K_(f)){o(dt(e,"internal-error"));return}const h=f.render;f.render=(m,y)=>{const g=h(m,y);return this.counter++,g},this.hostLanguage=i,r(f)};const u=`${nT}?${lr({onload:sh,render:"explicit",hl:i})}`;cf(u).catch(()=>{clearTimeout(l),o(dt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var i;return!!(!((i=Je().grecaptcha)===null||i===void 0)&&i.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function rT(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class sT{async load(e){return new Xk(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="recaptcha",oT={theme:"light",type:"image"};let aT=class{constructor(e,i=Object.assign({},oT),r){this.parameters=i,this.type=mb,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ze(r),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof e=="string"?document.getElementById(e):e;O(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sT:new iT,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),i=this.getAssertedRecaptcha(),r=i.getResponse(e);return r||new Promise(o=>{const l=u=>{u&&(this.tokenChangeListeners.delete(l),o(u))};this.tokenChangeListeners.add(l),this.isInvisible&&i.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return i=>{if(this.tokenChangeListeners.forEach(r=>r(i)),typeof e=="function")e(i);else if(typeof e=="string"){const r=Je()[e];typeof r=="function"&&r(i)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const i=document.createElement("div");e.appendChild(i),e=i}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(of()&&!mf(),this.auth,"internal-error"),await lT(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await kS(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function lT(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,i){this.verificationId=e,this.onConfirmation=i}confirm(e){const i=Xi._fromVerification(this.verificationId,e);return this.onConfirmation(i)}}async function cT(n,e,i){const r=ze(n),o=await Yc(r,e,te(i));return new gf(o,l=>Gc(r,l))}async function uT(n,e,i){const r=te(n);await zc(!1,r,"phone");const o=await Yc(r.auth,e,te(i));return new gf(o,l=>rb(r,l))}async function dT(n,e,i){const r=te(n),o=await Yc(r.auth,e,te(i));return new gf(o,l=>sb(r,l))}async function Yc(n,e,i){var r;const o=await i.verify();try{O(typeof o=="string",n,"argument-error"),O(i.type===mb,n,"argument-error");let l;if(typeof e=="string"?l={phoneNumber:e}:l=e,"session"in l){const u=l.session;if("phoneNumber"in l)return O(u.type==="enroll",n,"internal-error"),(await Pk(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:l.phoneNumber,recaptchaToken:o}})).phoneSessionInfo.sessionInfo;{O(u.type==="signin",n,"internal-error");const f=((r=l.multiFactorHint)===null||r===void 0?void 0:r.uid)||l.multiFactorUid;return O(f,n,"missing-multi-factor-info"),(await $k(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:o}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:u}=await WS(n,{phoneNumber:l.phoneNumber,recaptchaToken:o});return u}}finally{i._reset()}}async function hT(n,e){await uf(te(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr=class tc{constructor(e){this.providerId=tc.PROVIDER_ID,this.auth=ze(e)}verifyPhoneNumber(e,i){return Yc(this.auth,e,te(i))}static credential(e,i){return Xi._fromVerification(e,i)}static credentialFromResult(e){const i=e;return tc.credentialFromTaggedObject(i)}static credentialFromError(e){return tc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:i,temporaryProof:r}=e;return i&&r?Xi._fromTokenResponse(i,r):null}};tr.PROVIDER_ID="phone";tr.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n,e){return e?Ft(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends Ts{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return On(e,this._buildIdpRequest())}_linkToIdToken(e,i){return On(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return On(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function fT(n){return ib(n.auth,new vf(n),n.bypassAuthState)}function pT(n){const{auth:e,user:i}=n;return O(i,e,"internal-error"),nb(i,new vf(n),n.bypassAuthState)}async function mT(n){const{auth:e,user:i}=n;return O(i,e,"internal-error"),uf(i,new vf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,i,r,o,l=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:r,postBody:o,tenantId:l,error:u,type:f}=e;if(u){this.reject(u);return}const h={auth:this.auth,requestUri:i,sessionId:r,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(h))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fT;case"linkViaPopup":case"linkViaRedirect":return mT;case"reauthViaPopup":case"reauthViaRedirect":return pT;default:lt(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=new wa(2e3,1e4);async function vT(n,e,i){const r=ze(n);Ss(n,e,Hn);const o=cr(r,i);return new Tn(r,"signInViaPopup",e,o).executeNotNull()}async function _T(n,e,i){const r=te(n);Ss(r.auth,e,Hn);const o=cr(r.auth,i);return new Tn(r.auth,"reauthViaPopup",e,o,r).executeNotNull()}async function yT(n,e,i){const r=te(n);Ss(r.auth,e,Hn);const o=cr(r.auth,i);return new Tn(r.auth,"linkViaPopup",e,o,r).executeNotNull()}class Tn extends gb{constructor(e,i,r,o,l){super(e,i,o,l),this.provider=r,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gT.get())};e()}}Tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="pendingRedirect",Jo=new Map;class wT extends gb{constructor(e,i,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let e=Jo.get(this.auth._key());if(!e){try{const r=await IT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(i){e=()=>Promise.reject(i)}Jo.set(this.auth._key(),e)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IT(n,e){const i=_b(e),r=vb(n);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}async function _f(n,e){return vb(n)._set(_b(e),"true")}function ET(){Jo.clear()}function yf(n,e){Jo.set(n._key(),e)}function vb(n){return Ft(n._redirectPersistence)}function _b(n){return Qi(bT,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(n,e,i){return ST(n,e,i)}async function ST(n,e,i){const r=ze(n);Ss(n,e,Hn),await r._initializationPromise;const o=cr(r,i);return await _f(o,r),o._openRedirect(r,e,"signInViaRedirect")}function kT(n,e,i){return TT(n,e,i)}async function TT(n,e,i){const r=te(n);Ss(r.auth,e,Hn),await r.auth._initializationPromise;const o=cr(r.auth,i);await _f(o,r.auth);const l=await yb(r);return o._openRedirect(r.auth,e,"reauthViaRedirect",l)}function RT(n,e,i){return AT(n,e,i)}async function AT(n,e,i){const r=te(n);Ss(r.auth,e,Hn),await r.auth._initializationPromise;const o=cr(r.auth,i);await zc(!1,r,e.providerId),await _f(o,r.auth);const l=await yb(r);return o._openRedirect(r.auth,e,"linkViaRedirect",l)}async function PT(n,e){return await ze(n)._initializationPromise,Jc(n,e,!1)}async function Jc(n,e,i=!1){const r=ze(n),o=cr(r,e),u=await new wT(r,o,i).execute();return u&&!i&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}async function yb(n){const e=Ca(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=10*60*1e3;class bb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(i=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OT(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var r;if(e.error&&!wb(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(dt(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const r=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NT&&this.cachedEventUids.clear(),this.cachedEventUids.has(ey(e))}saveEventToCache(e){this.cachedEventUids.add(ey(e)),this.lastProcessedEventTime=Date.now()}}function ey(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wb({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wb(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(n,e={}){return tt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LT=/^https?/;async function MT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ib(n);for(const i of e)try{if(xT(i))return}catch{}lt(n,"unauthorized-domain")}function xT(n){const e=la(),{protocol:i,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?i==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&u.hostname===r}if(!LT.test(i))return!1;if(DT.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=new wa(3e4,6e4);function ty(){const n=Je().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let i=0;i<n.CP.length;i++)n.CP[i]=null}}function UT(n){return new Promise((e,i)=>{var r,o,l;function u(){ty(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ty(),i(dt(n,"network-request-failed"))},timeout:FT.get()})}if(!((o=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=Je().gapi)===null||l===void 0)&&l.load)u();else{const f=$0("iframefcb");return Je()[f]=()=>{gapi.load?u():i(dt(n,"network-request-failed"))},cf(`https://apis.google.com/js/api.js?onload=${f}`).catch(h=>i(h))}}).catch(e=>{throw nc=null,e})}let nc=null;function BT(n){return nc=nc||UT(n),nc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=new wa(5e3,15e3),VT="__/auth/iframe",HT="emulator/auth/iframe",WT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GT(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const i=e.emulator?af(e,HT):`https://${n.config.authDomain}/${VT}`,r={apiKey:e.apiKey,appName:n.name,v:Ei},o=zT.get(n.config.apiHost);o&&(r.eid=o);const l=n._getFrameworks();return l.length&&(r.fw=l.join(",")),`${i}?${lr(r).slice(1)}`}async function qT(n){const e=await BT(n),i=Je().gapi;return O(i,n,"internal-error"),e.open({where:document.body,url:GT(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WT,dontclear:!0},r=>new Promise(async(o,l)=>{await r.restyle({setHideOnLeave:!1});const u=dt(n,"network-request-failed"),f=Je().setTimeout(()=>{l(u)},jT.get());function h(){Je().clearTimeout(f),o(r)}r.ping(h).then(h,()=>{l(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$T=500,YT=600,JT="_blank",QT="http://localhost";class ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XT(n,e,i,r=$T,o=YT){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const h=Object.assign(Object.assign({},KT),{width:r.toString(),height:o.toString(),top:l,left:u}),m=Qe().toLowerCase();i&&(f=j0(m)?JT:i),B0(m)&&(e=e||QT,h.scrollbars="yes");const y=Object.entries(h).reduce((b,[S,C])=>`${b}${S}=${C},`,"");if(ES(m)&&f!=="_self")return ZT(e||"",f),new ny(null);const g=window.open(e||"",f,y);O(g,n,"popup-blocked");try{g.focus()}catch{}return new ny(g)}function ZT(n,e){const i=document.createElement("a");i.href=n,i.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="__/auth/handler",tR="emulator/auth/handler",nR=encodeURIComponent("fac");async function Eh(n,e,i,r,o,l){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:r,v:Ei,eventId:o};if(e instanceof Hn){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",_h(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,g]of Object.entries(l||{}))u[y]=g}if(e instanceof Rs){const y=e.getScopes().filter(g=>g!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const h=await n._getAppCheckToken(),m=h?`#${nR}=${encodeURIComponent(h)}`:"";return`${iR(n)}?${lr(f).slice(1)}${m}`}function iR({config:n}){return n.emulator?af(n,tR):`https://${n.authDomain}/${eR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="webStorageSupport";class rR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bi,this._completeRedirectFn=Jc,this._overrideRedirectResult=yf}async _openPopup(e,i,r,o){var l;rn((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const u=await Eh(e,i,r,la(),o);return XT(e,u,Ca())}async _openRedirect(e,i,r,o){await this._originValidation(e);const l=await Eh(e,i,r,la(),o);return Bk(l),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:l}=this.eventManagers[i];return o?Promise.resolve(o):(rn(l,"If manager is not set, promise should be"),l)}const r=this.initAndGetManager(e);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(e){const i=await qT(e),r=new bb(e);return i.register("authEvent",o=>(O(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=i,r}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(oh,{type:oh},o=>{var l;const u=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[oh];u!==void 0&&i(!!u),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=MT(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return z0()||lf()||ks()}}const Eb=rR;class sR{constructor(e){this.factorId=e}_process(e,i,r){switch(i.type){case"enroll":return this._finalizeEnroll(e,i.credential,r);case"signin":return this._finalizeSignIn(e,i.credential);default:return pn("unexpected MultiFactorSessionType")}}}class bf extends sR{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new bf(e)}_finalizeEnroll(e,i,r){return Nk(e,{idToken:i,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,i){return Yk(e,{mfaPendingCredential:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Cb{constructor(){}static assertion(e){return bf._fromCredential(e)}}Cb.FACTOR_ID="phone";var iy="@firebase/auth",ry="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lR(n){_i(new Mn("auth",(e,{options:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=r.options;O(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:u,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:G0(n)},m=new OS(r,o,l,h);return LS(m,i),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,r)=>{e.getProvider("auth-internal").initialize()})),_i(new Mn("auth-internal",e=>{const i=ze(e.getProvider("auth").getImmediate());return(r=>new oR(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(iy,ry,aR(n)),_n(iy,ry,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=5*60,uR=p0("authIdTokenMaxAge")||cR;let sy=null;const dR=n=>async e=>{const i=e&&await e.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>uR)return;const o=i==null?void 0:i.token;sy!==o&&(sy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Sb(n=nf()){const e=ba(n,"auth");if(e.isInitialized())return e.getImmediate();const i=DS(n,{popupRedirectResolver:Eb,persistence:[_s,qc,bi]}),r=p0("authTokenSyncURL");if(r){const l=dR(r);kk(i,l,()=>l(i.currentUser)),Sk(i,u=>l(u))}const o=h0("auth");return o&&J0(i,`http://${o}`),i}lR("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=2e3;async function fR(n,e,i){var r;const{BuildInfo:o}=nr();rn(e.sessionId,"AuthEvent did not contain a session ID");const l=await _R(e.sessionId),u={};return ks()?u.ibi=o.packageName:Ia()?u.apn=o.packageName:lt(n,"operation-not-supported-in-this-environment"),o.displayName&&(u.appDisplayName=o.displayName),u.sessionId=l,Eh(n,i,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,u)}async function pR(n){const{BuildInfo:e}=nr(),i={};ks()?i.iosBundleId=e.packageName:Ia()?i.androidPackageName=e.packageName:lt(n,"operation-not-supported-in-this-environment"),await Ib(n,i)}function mR(n){const{cordova:e}=nr();return new Promise(i=>{e.plugins.browsertab.isAvailable(r=>{let o=null;r?e.plugins.browsertab.openUrl(n):o=e.InAppBrowser.open(n,IS()?"_blank":"_system","location=yes"),i(o)})})}async function gR(n,e,i){const{cordova:r}=nr();let o=()=>{};try{await new Promise((l,u)=>{let f=null;function h(){var g;l();const b=(g=r.plugins.browsertab)===null||g===void 0?void 0:g.close;typeof b=="function"&&b(),typeof(i==null?void 0:i.close)=="function"&&i.close()}function m(){f||(f=window.setTimeout(()=>{u(dt(n,"redirect-cancelled-by-user"))},hR))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(h),document.addEventListener("resume",m,!1),Ia()&&document.addEventListener("visibilitychange",y,!1),o=()=>{e.removePassiveListener(h),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",y,!1),f&&window.clearTimeout(f)}})}finally{o()}}function vR(n){var e,i,r,o,l,u,f,h,m,y;const g=nr();O(typeof((e=g==null?void 0:g.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O(typeof((i=g==null?void 0:g.BuildInfo)===null||i===void 0?void 0:i.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O(typeof((l=(o=(r=g==null?void 0:g.cordova)===null||r===void 0?void 0:r.plugins)===null||o===void 0?void 0:o.browsertab)===null||l===void 0?void 0:l.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((h=(f=(u=g==null?void 0:g.cordova)===null||u===void 0?void 0:u.plugins)===null||f===void 0?void 0:f.browsertab)===null||h===void 0?void 0:h.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((y=(m=g==null?void 0:g.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||y===void 0?void 0:y.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function _R(n){const e=yR(n),i=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(i)).map(o=>o.toString(16).padStart(2,"0")).join("")}function yR(n){if(rn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),i=new Uint8Array(e);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=20;class wR extends bb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(i=>i(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function IR(n,e,i=null){return{type:e,eventId:i,urlResponse:null,sessionId:SR(),postBody:null,tenantId:n.tenantId,error:dt(n,"no-auth-event")}}function ER(n,e){return Ch()._set(Sh(n),e)}async function oy(n){const e=await Ch()._get(Sh(n));return e&&await Ch()._remove(Sh(n)),e}function CR(n,e){var i,r;const o=TR(e);if(o.includes("/__/auth/callback")){const l=ic(o),u=l.firebaseError?kR(decodeURIComponent(l.firebaseError)):null,f=(r=(i=u==null?void 0:u.code)===null||i===void 0?void 0:i.split("auth/"))===null||r===void 0?void 0:r[1],h=f?dt(f):null;return h?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:h,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:o,postBody:null}}return null}function SR(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<bR;i++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Ch(){return Ft(qc)}function Sh(n){return Qi("authEvent",n.config.apiKey,n.name)}function kR(n){try{return JSON.parse(n)}catch{return null}}function TR(n){const e=ic(n),i=e.link?decodeURIComponent(e.link):void 0,r=ic(i).link,o=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ic(o).link||o||r||i||n}function ic(n){if(!(n!=null&&n.includes("?")))return{};const[e,...i]=n.split("?");return is(i.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=500;class AR{constructor(){this._redirectPersistence=bi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Jc,this._overrideRedirectResult=yf}async _initialize(e){const i=e._key();let r=this.eventManagers.get(i);return r||(r=new wR(e),this.eventManagers.set(i,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){lt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,i,r,o){vR(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),ET(),await this._originValidation(e);const u=IR(e,r,o);await ER(e,u);const f=await fR(e,u,i),h=await mR(f);return gR(e,l,h)}_isIframeWebStorageSupported(e,i){throw new Error("Method not implemented.")}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=pR(e)),this.originValidationPromises[i]}attachCallbackListeners(e,i){const{universalLinks:r,handleOpenURL:o,BuildInfo:l}=nr(),u=setTimeout(async()=>{await oy(e),i.onEvent(ay())},RR),f=async y=>{clearTimeout(u);const g=await oy(e);let b=null;g&&(y!=null&&y.url)&&(b=CR(g,y.url)),i.onEvent(b||ay())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,f);const h=o,m=`${l.packageName.toLowerCase()}://`;nr().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(m)&&f({url:y}),typeof h=="function")try{h(y)}catch(g){console.error(g)}}}}const PR=AR;function ay(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:dt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(n,e){ze(n)._logFramework(e)}var OR="@firebase/auth-compat",DR="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=1e3;function Qo(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function MR(){return Qo()==="http:"||Qo()==="https:"}function kb(n=Qe()){return!!((Qo()==="file:"||Qo()==="ionic:"||Qo()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function xR(){return Uc()||m0()}function FR(){return v0()&&(document==null?void 0:document.documentMode)===11}function UR(n=Qe()){return/Edge\/\d+/.test(n)}function BR(n=Qe()){return FR()||UR(n)}function Tb(){try{const n=self.localStorage,e=Ca();if(n)return n.setItem(e,"1"),n.removeItem(e),BR()?ac():!0}catch{return wf()&&ac()}return!1}function wf(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function ah(){return(MR()||g0()||kb())&&!xR()&&Tb()&&!wf()}function Rb(){return kb()&&typeof document<"u"}async function jR(){return Rb()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},LR);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function VR(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt={LOCAL:"local",NONE:"none",SESSION:"session"},jo=O,Ab="persistence";function HR(n,e){if(jo(Object.values(xt).includes(e),n,"invalid-persistence-type"),Uc()){jo(e!==xt.SESSION,n,"unsupported-persistence-type");return}if(m0()){jo(e===xt.NONE,n,"unsupported-persistence-type");return}if(wf()){jo(e===xt.NONE||e===xt.LOCAL&&ac(),n,"unsupported-persistence-type");return}jo(e===xt.NONE||Tb(),n,"unsupported-persistence-type")}async function kh(n){await n._initializationPromise;const e=Pb(),i=Qi(Ab,n.config.apiKey,n.name);e&&e.setItem(i,n._getPersistence())}function WR(n,e){const i=Pb();if(!i)return[];const r=Qi(Ab,n,e);switch(i.getItem(r)){case xt.NONE:return[gs];case xt.LOCAL:return[_s,bi];case xt.SESSION:return[bi];default:return[]}}function Pb(){var n;try{return((n=VR())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=O;class di{constructor(){this.browserResolver=Ft(Eb),this.cordovaResolver=Ft(PR),this.underlyingResolver=null,this._redirectPersistence=bi,this._completeRedirectFn=Jc,this._overrideRedirectResult=yf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,i,r,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,i,r,o)}async _openRedirect(e,i,r,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,i,r,o)}_isIframeWebStorageSupported(e,i){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,i)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Rb()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return zR(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await jR();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(n){return n.unwrap()}function GR(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(n){return Ob(n)}function KR(n,e){var i;const r=(i=e.customData)===null||i===void 0?void 0:i._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const o=e;o.resolver=new $R(n,Ak(n,e))}else if(r){const o=Ob(e),l=e;o&&(l.credential=o,l.tenantId=r.tenantId||void 0,l.email=r.email||void 0,l.phoneNumber=r.phoneNumber||void 0)}}function Ob(n){const{_tokenResponse:e}=n instanceof kt?n.customData:n;if(!e)return null;if(!(n instanceof kt)&&"temporaryProof"in e&&"phoneNumber"in e)return tr.credentialFromResult(n);const i=e.providerId;if(!i||i===Bo.PASSWORD)return null;let r;switch(i){case Bo.GOOGLE:r=dn;break;case Bo.FACEBOOK:r=un;break;case Bo.GITHUB:r=hn;break;case Bo.TWITTER:r=fn;break;default:const{oauthIdToken:o,oauthAccessToken:l,oauthTokenSecret:u,pendingToken:f,nonce:h}=e;return!l&&!u&&!o&&!f?null:f?i.startsWith("saml.")?vs._create(i,f):yn._fromParams({providerId:i,signInMethod:i,pendingToken:f,idToken:o,accessToken:l}):new os(i).credential({idToken:o,accessToken:l,rawNonce:h})}return n instanceof kt?r.credentialFromError(n):r.credentialFromResult(n)}function wt(n,e){return e.catch(i=>{throw i instanceof kt&&KR(n,i),i}).then(i=>{const r=i.operationType,o=i.user;return{operationType:r,credential:qR(i),additionalUserInfo:Ck(i),user:Rn.getOrCreate(o)}})}async function Th(n,e){const i=await e;return{verificationId:i.verificationId,confirm:r=>wt(n,i.confirm(r))}}class $R{constructor(e,i){this.resolver=i,this.auth=GR(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return wt(Nb(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this._delegate=e,this.multiFactor=Dk(e)}static getOrCreate(e){return Rn.USER_MAP.has(e)||Rn.USER_MAP.set(e,new Rn(e)),Rn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return wt(this.auth,rb(this._delegate,e))}async linkWithPhoneNumber(e,i){return Th(this.auth,uT(this._delegate,e,i))}async linkWithPopup(e){return wt(this.auth,yT(this._delegate,e,di))}async linkWithRedirect(e){return await kh(ze(this.auth)),RT(this._delegate,e,di)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return wt(this.auth,sb(this._delegate,e))}reauthenticateWithPhoneNumber(e,i){return Th(this.auth,dT(this._delegate,e,i))}reauthenticateWithPopup(e){return wt(this.auth,_T(this._delegate,e,di))}async reauthenticateWithRedirect(e){return await kh(ze(this.auth)),kT(this._delegate,e,di)}sendEmailVerification(e){return fk(this._delegate,e)}async unlink(e){return await ZS(this._delegate,e),this}updateEmail(e){return vk(this._delegate,e)}updatePassword(e){return _k(this._delegate,e)}updatePhoneNumber(e){return hT(this._delegate,e)}updateProfile(e){return gk(this._delegate,e)}verifyBeforeUpdateEmail(e,i){return pk(this._delegate,e,i)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Rn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=O;class Rh{constructor(e,i){if(this.app=e,i.isInitialized()){this._delegate=i.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Vo(r,"invalid-api-key",{appName:e.name}),Vo(r,"invalid-api-key",{appName:e.name});const o=typeof window<"u"?di:void 0;this._delegate=i.initialize({options:{persistence:YR(r,e.name),popupRedirectResolver:o}}),this._delegate._updateErrorMap(iS),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Rn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,i){J0(this._delegate,e,i)}applyActionCode(e){return rk(this._delegate,e)}checkActionCode(e){return ob(this._delegate,e)}confirmPasswordReset(e,i){return ik(this._delegate,e,i)}async createUserWithEmailAndPassword(e,i){return wt(this._delegate,ok(this._delegate,e,i))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return hk(this._delegate,e)}isSignInWithEmailLink(e){return ck(this._delegate,e)}async getRedirectResult(){Vo(ah(),this._delegate,"operation-not-supported-in-this-environment");const e=await PT(this._delegate,di);return e?wt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){NR(this._delegate,e)}onAuthStateChanged(e,i,r){const{next:o,error:l,complete:u}=ly(e,i,r);return this._delegate.onAuthStateChanged(o,l,u)}onIdTokenChanged(e,i,r){const{next:o,error:l,complete:u}=ly(e,i,r);return this._delegate.onIdTokenChanged(o,l,u)}sendSignInLinkToEmail(e,i){return lk(this._delegate,e,i)}sendPasswordResetEmail(e,i){return nk(this._delegate,e,i||void 0)}async setPersistence(e){HR(this._delegate,e);let i;switch(e){case xt.SESSION:i=bi;break;case xt.LOCAL:i=await Ft(_s)._isAvailable()?_s:qc;break;case xt.NONE:i=gs;break;default:return lt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(i)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return wt(this._delegate,XS(this._delegate))}signInWithCredential(e){return wt(this._delegate,Gc(this._delegate,e))}signInWithCustomToken(e){return wt(this._delegate,tk(this._delegate,e))}signInWithEmailAndPassword(e,i){return wt(this._delegate,ak(this._delegate,e,i))}signInWithEmailLink(e,i){return wt(this._delegate,uk(this._delegate,e,i))}signInWithPhoneNumber(e,i){return Th(this._delegate,cT(this._delegate,e,i))}async signInWithPopup(e){return Vo(ah(),this._delegate,"operation-not-supported-in-this-environment"),wt(this._delegate,vT(this._delegate,e,di))}async signInWithRedirect(e){return Vo(ah(),this._delegate,"operation-not-supported-in-this-environment"),await kh(this._delegate),CT(this._delegate,e,di)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return sk(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Rh.Persistence=xt;function ly(n,e,i){let r=n;typeof n!="function"&&({next:r,error:e,complete:i}=n);const o=r;return{next:u=>o(u&&Rn.getOrCreate(u)),error:e,complete:i}}function YR(n,e){const i=WR(n,e);if(typeof self<"u"&&!i.includes(_s)&&i.push(_s),typeof window<"u")for(const r of[qc,bi])i.includes(r)||i.push(r);return i.includes(gs)||i.push(gs),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.providerId="phone",this._delegate=new tr(Nb(V.auth()))}static credential(e,i){return tr.credential(e,i)}verifyPhoneNumber(e,i){return this._delegate.verifyPhoneNumber(e,i)}unwrap(){return this._delegate}}If.PHONE_SIGN_IN_METHOD=tr.PHONE_SIGN_IN_METHOD;If.PROVIDER_ID=tr.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=O;class QR{constructor(e,i,r=V.app()){var o;JR((o=r.options)===null||o===void 0?void 0:o.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new aT(e,i,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="auth-compat";function ZR(n){n.INTERNAL.registerComponent(new Mn(XR,e=>{const i=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Rh(i,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Xr.EMAIL_SIGNIN,PASSWORD_RESET:Xr.PASSWORD_RESET,RECOVER_EMAIL:Xr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Xr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Xr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Xr.VERIFY_EMAIL}},EmailAuthProvider:Ci,FacebookAuthProvider:un,GithubAuthProvider:hn,GoogleAuthProvider:dn,OAuthProvider:os,SAMLAuthProvider:hc,PhoneAuthProvider:If,PhoneMultiFactorGenerator:Cb,RecaptchaVerifier:QR,TwitterAuthProvider:fn,Auth:Rh,AuthCredential:Ts,Error:kt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(OR,DR)}ZR(V);function eA(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Db={exports:{}};(function(n){(function(){var e=window.CustomEvent;(!e||typeof e=="object")&&(e=function(I,E){E=E||{};var T=document.createEvent("CustomEvent");return T.initCustomEvent(I,!!E.bubbles,!!E.cancelable,E.detail||null),T},e.prototype=window.Event.prototype);function i(_){for(;_&&_!==document.body;){var I=window.getComputedStyle(_),E=function(T,R){return!(I[T]===void 0||I[T]===R)};if(I.opacity<1||E("zIndex","auto")||E("transform","none")||E("mixBlendMode","normal")||E("filter","none")||E("perspective","none")||I.isolation==="isolate"||I.position==="fixed"||I.webkitOverflowScrolling==="touch")return!0;_=_.parentElement}return!1}function r(_){for(;_;){if(_.localName==="dialog")return _;_=_.parentElement}return null}function o(_){_&&_.blur&&_!==document.body&&_.blur()}function l(_,I){for(var E=0;E<_.length;++E)if(_[E]===I)return!0;return!1}function u(_){return!_||!_.hasAttribute("method")?!1:_.getAttribute("method").toLowerCase()==="dialog"}function f(_){if(this.dialog_=_,this.replacedStyleTop_=!1,this.openAsModal_=!1,_.hasAttribute("role")||_.setAttribute("role","dialog"),_.show=this.show.bind(this),_.showModal=this.showModal.bind(this),_.close=this.close.bind(this),"returnValue"in _||(_.returnValue=""),"MutationObserver"in window){var I=new MutationObserver(this.maybeHideModal.bind(this));I.observe(_,{attributes:!0,attributeFilter:["open"]})}else{var E=!1,T=function(){E?this.downgradeModal():this.maybeHideModal(),E=!1}.bind(this),R,F=function($){if($.target===_){var M="DOMNodeRemoved";E|=$.type.substr(0,M.length)===M,window.clearTimeout(R),R=window.setTimeout(T,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function($){_.addEventListener($,F)})}Object.defineProperty(_,"open",{set:this.setOpen.bind(this),get:_.hasAttribute.bind(_,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}f.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),h.dm.removeDialog(this))},setOpen:function(_){_?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(_){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var I=document.createElement("div");this.dialog_.insertBefore(I,this.dialog_.firstChild),I.tabIndex=-1,I.focus(),this.dialog_.removeChild(I)}var E=document.createEvent("MouseEvents");E.initMouseEvent(_.type,_.bubbles,_.cancelable,window,_.detail,_.screenX,_.screenY,_.clientX,_.clientY,_.ctrlKey,_.altKey,_.shiftKey,_.metaKey,_.button,_.relatedTarget),this.dialog_.dispatchEvent(E),_.stopPropagation()},focus_:function(){var _=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!_&&this.dialog_.tabIndex>=0&&(_=this.dialog_),!_){var I=["button","input","keygen","select","textarea"],E=I.map(function(T){return T+":not([disabled])"});E.push('[tabindex]:not([disabled]):not([tabindex=""])'),_=this.dialog_.querySelector(E.join(", "))}o(document.activeElement),_&&_.focus()},updateZIndex:function(_,I){if(_<I)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=_,this.backdrop_.style.zIndex=I},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!h.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");i(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,h.needsCentering(this.dialog_)?(h.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(_){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),_!==void 0&&(this.dialog_.returnValue=_);var I=new e("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(I)}};var h={};if(h.reposition=function(_){var I=document.body.scrollTop||document.documentElement.scrollTop,E=I+(window.innerHeight-_.offsetHeight)/2;_.style.top=Math.max(I,E)+"px"},h.isInlinePositionSetByStylesheet=function(_){for(var I=0;I<document.styleSheets.length;++I){var E=document.styleSheets[I],T=null;try{T=E.cssRules}catch{}if(T)for(var R=0;R<T.length;++R){var F=T[R],$=null;try{$=document.querySelectorAll(F.selectorText)}catch{}if(!(!$||!l($,_))){var M=F.style.getPropertyValue("top"),ee=F.style.getPropertyValue("bottom");if(M&&M!=="auto"||ee&&ee!=="auto")return!0}}}return!1},h.needsCentering=function(_){var I=window.getComputedStyle(_);return I.position!=="absolute"||_.style.top!=="auto"&&_.style.top!==""||_.style.bottom!=="auto"&&_.style.bottom!==""?!1:!h.isInlinePositionSetByStylesheet(_)},h.forceRegisterDialog=function(_){if((window.HTMLDialogElement||_.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",_),_.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new f(_)},h.registerDialog=function(_){_.showModal||h.forceRegisterDialog(_)},h.DialogManager=function(){this.pendingDialogStack=[];var _=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(I){this.forwardTab_=void 0,I.stopPropagation(),_([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=1e5+150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(I){var E=[];I.forEach(function(T){for(var R=0,F;F=T.removedNodes[R];++R){if(F instanceof Element)F.localName==="dialog"&&E.push(F);else continue;E=E.concat(F.querySelectorAll("dialog"))}}),E.length&&_(E)}))},h.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},h.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},h.DialogManager.prototype.updateStacking=function(){for(var _=this.zIndexHigh_,I=0,E;E=this.pendingDialogStack[I];++I)E.updateZIndex(--_,--_),I===0&&(this.overlay.style.zIndex=--_);var T=this.pendingDialogStack[0];if(T){var R=T.dialog.parentNode||document.body;R.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},h.DialogManager.prototype.containedByTopDialog_=function(_){for(;_=r(_);){for(var I=0,E;E=this.pendingDialogStack[I];++I)if(E.dialog===_)return I===0;_=_.parentElement}return!1},h.DialogManager.prototype.handleFocus_=function(_){if(!this.containedByTopDialog_(_.target)&&(_.preventDefault(),_.stopPropagation(),o(_.target),this.forwardTab_!==void 0)){var I=this.pendingDialogStack[0],E=I.dialog,T=E.compareDocumentPosition(_.target);return T&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?I.focus_():document.documentElement.focus()),!1}},h.DialogManager.prototype.handleKey_=function(_){if(this.forwardTab_=void 0,_.keyCode===27){_.preventDefault(),_.stopPropagation();var I=new e("cancel",{bubbles:!1,cancelable:!0}),E=this.pendingDialogStack[0];E&&E.dialog.dispatchEvent(I)&&E.dialog.close()}else _.keyCode===9&&(this.forwardTab_=!_.shiftKey)},h.DialogManager.prototype.checkDOM_=function(_){var I=this.pendingDialogStack.slice();I.forEach(function(E){_.indexOf(E.dialog)!==-1?E.downgradeModal():E.maybeHideModal()})},h.DialogManager.prototype.pushDialog=function(_){var I=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=I?!1:(this.pendingDialogStack.unshift(_)===1&&this.blockDocument(),this.updateStacking(),!0)},h.DialogManager.prototype.removeDialog=function(_){var I=this.pendingDialogStack.indexOf(_);I!==-1&&(this.pendingDialogStack.splice(I,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())},h.dm=new h.DialogManager,h.formSubmitter=null,h.useValue=null,window.HTMLDialogElement===void 0){var m=document.createElement("form");if(m.setAttribute("method","dialog"),m.method!=="dialog"){var y=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(y){var g=y.get;y.get=function(){return u(this)?"dialog":g.call(this)};var b=y.set;y.set=function(_){return typeof _=="string"&&_.toLowerCase()==="dialog"?this.setAttribute("method",_):b.call(this,_)},Object.defineProperty(HTMLFormElement.prototype,"method",y)}}document.addEventListener("click",function(_){if(h.formSubmitter=null,h.useValue=null,!_.defaultPrevented){var I=_.target;if(!(!I||!u(I.form))){var E=I.type==="submit"&&["button","input"].indexOf(I.localName)>-1;if(!E){if(!(I.localName==="input"&&I.type==="image"))return;h.useValue=_.offsetX+","+_.offsetY}var T=r(I);T&&(h.formSubmitter=I)}}},!1);var S=HTMLFormElement.prototype.submit,C=function(){if(!u(this))return S.call(this);var _=r(this);_&&_.close()};HTMLFormElement.prototype.submit=C,document.addEventListener("submit",function(_){var I=_.target;if(u(I)){_.preventDefault();var E=r(I);if(E){var T=h.formSubmitter;T&&T.form===I?E.close(h.useValue||T.value):E.close(),h.formSubmitter=null}}},!0)}h.forceRegisterDialog=h.forceRegisterDialog,h.registerDialog=h.registerDialog,typeof n.exports=="object"?n.exports=h:window.dialogPolyfill=h})()})(Db);var tA=Db.exports;const nA=eA(tA);/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De={upgradeDom:function(n,e){},upgradeElement:function(n,e){},upgradeElements:function(n){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(n,e){},register:function(n){},downgradeElements:function(n){}};De=function(){var n=[],e=[],i="mdlComponentConfigInternal_";function r(_,I){for(var E=0;E<n.length;E++)if(n[E].className===_)return typeof I<"u"&&(n[E]=I),n[E];return!1}function o(_){var I=_.getAttribute("data-upgraded");return I===null?[""]:I.split(",")}function l(_,I){var E=o(_);return E.indexOf(I)!==-1}function u(_,I,E){if("CustomEvent"in window&&typeof window.CustomEvent=="function")return new CustomEvent(_,{bubbles:I,cancelable:E});var T=document.createEvent("Events");return T.initEvent(_,I,E),T}function f(_,I){if(typeof _>"u"&&typeof I>"u")for(var E=0;E<n.length;E++)f(n[E].className,n[E].cssClass);else{var T=_;if(typeof I>"u"){var R=r(T);R&&(I=R.cssClass)}for(var F=document.querySelectorAll("."+I),$=0;$<F.length;$++)h(F[$],T)}}function h(_,I){if(!(typeof _=="object"&&_ instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var E=u("mdl-componentupgrading",!0,!0);if(_.dispatchEvent(E),!E.defaultPrevented){var T=o(_),R=[];if(I)l(_,I)||R.push(r(I));else{var F=_.classList;n.forEach(function(Te){F.contains(Te.cssClass)&&R.indexOf(Te)===-1&&!l(_,Te.className)&&R.push(Te)})}for(var $=0,M=R.length,ee;$<M;$++){if(ee=R[$],ee){T.push(ee.className),_.setAttribute("data-upgraded",T.join(","));var ne=new ee.classConstructor(_);ne[i]=ee,e.push(ne);for(var z=0,J=ee.callbacks.length;z<J;z++)ee.callbacks[z](_);ee.widget&&(_[ee.className]=ne)}else throw new Error("Unable to find a registered component for the given class.");var Q=u("mdl-componentupgraded",!0,!1);_.dispatchEvent(Q)}}}function m(_){Array.isArray(_)||(_ instanceof Element?_=[_]:_=Array.prototype.slice.call(_));for(var I=0,E=_.length,T;I<E;I++)T=_[I],T instanceof HTMLElement&&(h(T),T.children.length>0&&m(T.children))}function y(_){var I=typeof _.widget>"u"&&typeof _.widget>"u",E=!0;I||(E=_.widget||_.widget);var T={classConstructor:_.constructor||_.constructor,className:_.classAsString||_.classAsString,cssClass:_.cssClass||_.cssClass,widget:E,callbacks:[]};if(n.forEach(function(F){if(F.cssClass===T.cssClass)throw new Error("The provided cssClass has already been registered: "+F.cssClass);if(F.className===T.className)throw new Error("The provided className has already been registered")}),_.constructor.prototype.hasOwnProperty(i))throw new Error("MDL component classes must not have "+i+" defined as a property.");var R=r(_.classAsString,T);R||n.push(T)}function g(_,I){var E=r(_);E&&E.callbacks.push(I)}function b(){for(var _=0;_<n.length;_++)f(n[_].className)}function S(_){if(_){var I=e.indexOf(_);e.splice(I,1);var E=_.element_.getAttribute("data-upgraded").split(","),T=E.indexOf(_[i].classAsString);E.splice(T,1),_.element_.setAttribute("data-upgraded",E.join(","));var R=u("mdl-componentdowngraded",!0,!1);_.element_.dispatchEvent(R)}}function C(_){var I=function(T){e.filter(function(R){return R.element_===T}).forEach(S)};if(_ instanceof Array||_ instanceof NodeList)for(var E=0;E<_.length;E++)I(_[E]);else if(_ instanceof Node)I(_);else throw new Error("Invalid argument provided to downgrade MDL nodes.")}return{upgradeDom:f,upgradeElement:h,upgradeElements:m,upgradeAllRegistered:b,registerUpgradedCallback:g,register:y,downgradeElements:C}}();De.ComponentConfigPublic;De.ComponentConfig;De.Component;De.upgradeDom=De.upgradeDom;De.upgradeElement=De.upgradeElement;De.upgradeElements=De.upgradeElements;De.upgradeAllRegistered=De.upgradeAllRegistered;De.registerUpgradedCallback=De.registerUpgradedCallback;De.register=De.register;De.downgradeElements=De.downgradeElements;window.componentHandler=De;window.componentHandler=De;window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),De.upgradeAllRegistered()):(De.upgradeElement=function(){},De.register=function(){})});/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var n=function(i){this.element_=i,this.init()};window.MaterialButton=n,n.prototype.Constant_={},n.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},n.prototype.blurHandler_=function(e){e&&this.element_.blur()},n.prototype.disable=function(){this.element_.disabled=!0},n.prototype.disable=n.prototype.disable,n.prototype.enable=function(){this.element_.disabled=!1},n.prototype.enable=n.prototype.enable,n.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:n,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var n=function(i){this.element_=i,this.init()};window.MaterialProgress=n,n.prototype.Constant_={},n.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},n.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},n.prototype.setProgress=n.prototype.setProgress,n.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},n.prototype.setBuffer=n.prototype.setBuffer,n.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:n,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var n=function(i){this.element_=i,this.init()};window.MaterialSpinner=n,n.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},n.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},n.prototype.createLayer=function(e){var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),i.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),r.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var l=document.createElement("div");l.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),l.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var u=[r,o,l],f=0;f<u.length;f++){var h=document.createElement("div");h.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),u[f].appendChild(h)}i.appendChild(r),i.appendChild(o),i.appendChild(l),this.element_.appendChild(i)},n.prototype.createLayer=n.prototype.createLayer,n.prototype.stop=function(){this.element_.classList.remove("is-active")},n.prototype.stop=n.prototype.stop,n.prototype.start=function(){this.element_.classList.add("is-active")},n.prototype.start=n.prototype.start,n.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:n,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})})();/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){var n=function(i){this.element_=i,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=n,n.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},n.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},n.prototype.onKeyDown_=function(e){var i=e.target.value.split(`
`).length;e.keyCode===13&&i>=this.maxRows&&e.preventDefault()},n.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},n.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},n.prototype.onReset_=function(e){this.updateClasses_()},n.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},n.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},n.prototype.checkDisabled=n.prototype.checkDisabled,n.prototype.checkFocus=function(){this.element_.querySelector(":focus")?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},n.prototype.checkFocus=n.prototype.checkFocus,n.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},n.prototype.checkValidity=n.prototype.checkValidity,n.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},n.prototype.checkDirty=n.prototype.checkDirty,n.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},n.prototype.disable=n.prototype.disable,n.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},n.prototype.enable=n.prototype.enable,n.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},n.prototype.change=n.prototype.change,n.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:n,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0})})();(function(){(function(){var n,e=typeof Object.create=="function"?Object.create:function(t){function s(){}return s.prototype=t,new s},i;if(typeof Object.setPrototypeOf=="function")i=Object.setPrototypeOf;else{var r;e:{var o={xb:!0},l={};try{l.__proto__=o,r=l.xb;break e}catch{}r=!1}i=r?function(t,s){if(t.__proto__=s,t.__proto__!==s)throw new TypeError(t+" is not extensible");return t}:null}var u=i;function f(t,s){if(t.prototype=e(s.prototype),t.prototype.constructor=t,u)u(t,s);else for(var a in s)if(a!="prototype")if(Object.defineProperties){var c=Object.getOwnPropertyDescriptor(s,a);c&&Object.defineProperty(t,a,c)}else t[a]=s[a];t.K=s.prototype}var h=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,s,a){t!=Array.prototype&&t!=Object.prototype&&(t[s]=a.value)},m=typeof window<"u"&&window===this?this:typeof global<"u"&&global!=null?global:this;function y(t,s){if(s){var a=m;t=t.split(".");for(var c=0;c<t.length-1;c++){var d=t[c];d in a||(a[d]={}),a=a[d]}t=t[t.length-1],c=a[t],s=s(c),s!=c&&s!=null&&h(a,t,{configurable:!0,writable:!0,value:s})}}y("Object.is",function(t){return t||function(s,a){return s===a?s!==0||1/s===1/a:s!==s&&a!==a}}),y("Array.prototype.includes",function(t){return t||function(s,a){var c=this;c instanceof String&&(c=String(c));var d=c.length;for(a=a||0,0>a&&(a=Math.max(a+d,0));a<d;a++){var p=c[a];if(p===s||Object.is(p,s))return!0}return!1}});var g=this;function b(t){return t!==void 0}function S(t){return typeof t=="string"}var C=/^[\w+/_-]+[=]{0,2}$/,_=null;function I(){}function E(t){t.W=void 0,t.Xa=function(){return t.W?t.W:t.W=new t}}function T(t){var s=typeof t;if(s=="object")if(t){if(t instanceof Array)return"array";if(t instanceof Object)return s;var a=Object.prototype.toString.call(t);if(a=="[object Window]")return"object";if(a=="[object Array]"||typeof t.length=="number"&&typeof t.splice<"u"&&typeof t.propertyIsEnumerable<"u"&&!t.propertyIsEnumerable("splice"))return"array";if(a=="[object Function]"||typeof t.call<"u"&&typeof t.propertyIsEnumerable<"u"&&!t.propertyIsEnumerable("call"))return"function"}else return"null";else if(s=="function"&&typeof t.call>"u")return"object";return s}function R(t){return T(t)=="array"}function F(t){var s=T(t);return s=="array"||s=="object"&&typeof t.length=="number"}function $(t){return T(t)=="function"}function M(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}var ee="closure_uid_"+(1e9*Math.random()>>>0),ne=0;function z(t,s,a){return t.call.apply(t.bind,arguments)}function J(t,s,a){if(!t)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(d,c),t.apply(s,d)}}return function(){return t.apply(s,arguments)}}function Q(t,s,a){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Q=z:Q=J,Q.apply(null,arguments)}function Te(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var c=a.slice();return c.push.apply(c,arguments),t.apply(this,c)}}function ie(t,s){for(var a in s)t[a]=s[a]}var Be=Date.now||function(){return+new Date};function ge(t,s){t=t.split(".");var a=g;t[0]in a||typeof a.execScript>"u"||a.execScript("var "+t[0]);for(var c;t.length&&(c=t.shift());)!t.length&&b(s)?a[c]=s:a[c]&&a[c]!==Object.prototype[c]?a=a[c]:a=a[c]={}}function Y(t,s){function a(){}a.prototype=s.prototype,t.K=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.vc=function(c,d,p){for(var v=Array(arguments.length-2),w=2;w<arguments.length;w++)v[w-2]=arguments[w];return s.prototype[d].apply(c,v)}}function X(t){if(Error.captureStackTrace)Error.captureStackTrace(this,X);else{var s=Error().stack;s&&(this.stack=s)}t&&(this.message=String(t))}Y(X,Error),X.prototype.name="CustomError";var Ge;function Bt(t,s){t=t.split("%s");for(var a="",c=t.length-1,d=0;d<c;d++)a+=t[d]+(d<s.length?s[d]:"%s");X.call(this,a+t[c])}Y(Bt,X),Bt.prototype.name="AssertionError";function pt(t,s){throw new Bt("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}var qn=Array.prototype.indexOf?function(t,s){return Array.prototype.indexOf.call(t,s,void 0)}:function(t,s){if(S(t))return S(s)&&s.length==1?t.indexOf(s,0):-1;for(var a=0;a<t.length;a++)if(a in t&&t[a]===s)return a;return-1},zt=Array.prototype.forEach?function(t,s,a){Array.prototype.forEach.call(t,s,a)}:function(t,s,a){for(var c=t.length,d=S(t)?t.split(""):t,p=0;p<c;p++)p in d&&s.call(a,d[p],p,t)};function Si(t,s){for(var a=S(t)?t.split(""):t,c=t.length-1;0<=c;--c)c in a&&s.call(void 0,a[c],c,t)}var Oa=Array.prototype.filter?function(t,s){return Array.prototype.filter.call(t,s,void 0)}:function(t,s){for(var a=t.length,c=[],d=0,p=S(t)?t.split(""):t,v=0;v<a;v++)if(v in p){var w=p[v];s.call(void 0,w,v,t)&&(c[d++]=w)}return c},Ds=Array.prototype.map?function(t,s){return Array.prototype.map.call(t,s,void 0)}:function(t,s){for(var a=t.length,c=Array(a),d=S(t)?t.split(""):t,p=0;p<a;p++)p in d&&(c[p]=s.call(void 0,d[p],p,t));return c},pu=Array.prototype.some?function(t,s){return Array.prototype.some.call(t,s,void 0)}:function(t,s){for(var a=t.length,c=S(t)?t.split(""):t,d=0;d<a;d++)if(d in c&&s.call(void 0,c[d],d,t))return!0;return!1};function jt(t,s){return 0<=qn(t,s)}function vp(t,s){s=qn(t,s);var a;return(a=0<=s)&&Da(t,s),a}function Da(t,s){return Array.prototype.splice.call(t,s,1).length==1}function Dw(t,s){e:{for(var a=t.length,c=S(t)?t.split(""):t,d=0;d<a;d++)if(d in c&&s.call(void 0,c[d],d,t)){s=d;break e}s=-1}0<=s&&Da(t,s)}function Lw(t,s){var a=0;Si(t,function(c,d){s.call(void 0,c,d,t)&&Da(t,d)&&a++})}function _p(t){return Array.prototype.concat.apply([],arguments)}function yp(t){var s=t.length;if(0<s){for(var a=Array(s),c=0;c<s;c++)a[c]=t[c];return a}return[]}function Mw(t,s,a){return 2>=arguments.length?Array.prototype.slice.call(t,s):Array.prototype.slice.call(t,s,a)}var At=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},xw=/&/g,Fw=/</g,Uw=/>/g,Bw=/"/g,jw=/'/g,Vw=/\x00/g,Hw=/[\x00&<>"']/;function mu(t,s){return t<s?-1:t>s?1:0}function hr(t){return Hw.test(t)&&(t.indexOf("&")!=-1&&(t=t.replace(xw,"&amp;")),t.indexOf("<")!=-1&&(t=t.replace(Fw,"&lt;")),t.indexOf(">")!=-1&&(t=t.replace(Uw,"&gt;")),t.indexOf('"')!=-1&&(t=t.replace(Bw,"&quot;")),t.indexOf("'")!=-1&&(t=t.replace(jw,"&#39;")),t.indexOf("\0")!=-1&&(t=t.replace(Vw,"&#0;"))),t}function bp(t,s,a){for(var c in t)s.call(a,t[c],c,t)}function gu(t){var s={},a;for(a in t)s[a]=t[a];return s}var wp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function La(t,s){for(var a,c,d=1;d<arguments.length;d++){c=arguments[d];for(a in c)t[a]=c[a];for(var p=0;p<wp.length;p++)a=wp[p],Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a])}}var fr="StopIteration"in g?g.StopIteration:{message:"StopIteration",stack:""};function ki(){}ki.prototype.next=function(){throw fr},ki.prototype.ha=function(){return this};function Ip(t){if(t instanceof ki)return t;if(typeof t.ha=="function")return t.ha(!1);if(F(t)){var s=0,a=new ki;return a.next=function(){for(;;){if(s>=t.length)throw fr;if(s in t)return t[s++];s++}},a}throw Error("Not implemented")}function Ww(t,s){if(F(t))try{zt(t,s,void 0)}catch(a){if(a!==fr)throw a}else{t=Ip(t);try{for(;;)s.call(void 0,t.next(),void 0,t)}catch(a){if(a!==fr)throw a}}}function zw(t){if(F(t))return yp(t);t=Ip(t);var s=[];return Ww(t,function(a){s.push(a)}),s}function Ma(t,s){this.g={},this.a=[],this.j=this.h=0;var a=arguments.length;if(1<a){if(a%2)throw Error("Uneven number of arguments");for(var c=0;c<a;c+=2)this.set(arguments[c],arguments[c+1])}else if(t)if(t instanceof Ma)for(a=t.ja(),c=0;c<a.length;c++)this.set(a[c],t.get(a[c]));else for(c in t)this.set(c,t[c])}n=Ma.prototype,n.la=function(){xa(this);for(var t=[],s=0;s<this.a.length;s++)t.push(this.g[this.a[s]]);return t},n.ja=function(){return xa(this),this.a.concat()},n.clear=function(){this.g={},this.j=this.h=this.a.length=0};function xa(t){if(t.h!=t.a.length){for(var s=0,a=0;s<t.a.length;){var c=t.a[s];Ti(t.g,c)&&(t.a[a++]=c),s++}t.a.length=a}if(t.h!=t.a.length){var d={};for(a=s=0;s<t.a.length;)c=t.a[s],Ti(d,c)||(t.a[a++]=c,d[c]=1),s++;t.a.length=a}}n.get=function(t,s){return Ti(this.g,t)?this.g[t]:s},n.set=function(t,s){Ti(this.g,t)||(this.h++,this.a.push(t),this.j++),this.g[t]=s},n.forEach=function(t,s){for(var a=this.ja(),c=0;c<a.length;c++){var d=a[c],p=this.get(d);t.call(s,p,d,this)}},n.ha=function(t){xa(this);var s=0,a=this.j,c=this,d=new ki;return d.next=function(){if(a!=c.j)throw Error("The map has changed since the iterator was created");if(s>=c.a.length)throw fr;var p=c.a[s++];return t?p:c.g[p]},d};function Ti(t,s){return Object.prototype.hasOwnProperty.call(t,s)}var Gw=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qw(t,s){if(t){t=t.split("&");for(var a=0;a<t.length;a++){var c=t[a].indexOf("="),d=null;if(0<=c){var p=t[a].substring(0,c);d=t[a].substring(c+1)}else p=t[a];s(p,d?decodeURIComponent(d.replace(/\+/g," ")):"")}}}function Ep(t,s,a,c){for(var d=a.length;0<=(s=t.indexOf(a,s))&&s<c;){var p=t.charCodeAt(s-1);if((p==38||p==63)&&(p=t.charCodeAt(s+d),!p||p==61||p==38||p==35))return s;s+=d+1}return-1}var Cp=/#|$/;function Fa(t,s){var a=t.search(Cp),c=Ep(t,0,s,a);if(0>c)return null;var d=t.indexOf("&",c);return(0>d||d>a)&&(d=a),c+=s.length+1,decodeURIComponent(t.substr(c,d-c).replace(/\+/g," "))}var Kw=/[?&]($|#)/;function Kn(t,s){this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1;var a;t instanceof Kn?(this.i=b(s)?s:t.i,vu(this,t.j),this.A=t.A,this.h=t.h,_u(this,t.C),this.g=t.g,yu(this,Tp(t.a)),this.s=t.s):t&&(a=String(t).match(Gw))?(this.i=!!s,vu(this,a[1]||"",!0),this.A=Ls(a[2]||""),this.h=Ls(a[3]||"",!0),_u(this,a[4]),this.g=Ls(a[5]||"",!0),yu(this,a[6]||"",!0),this.s=Ls(a[7]||"")):(this.i=!!s,this.a=new xs(null,this.i))}Kn.prototype.toString=function(){var t=[],s=this.j;s&&t.push(Ms(s,Sp,!0),":");var a=this.h;return(a||s=="file")&&(t.push("//"),(s=this.A)&&t.push(Ms(s,Sp,!0),"@"),t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.C,a!=null&&t.push(":",String(a))),(a=this.g)&&(this.h&&a.charAt(0)!="/"&&t.push("/"),t.push(Ms(a,a.charAt(0)=="/"?Jw:Yw,!0))),(a=this.a.toString())&&t.push("?",a),(a=this.s)&&t.push("#",Ms(a,Xw)),t.join("")};function vu(t,s,a){t.j=a?Ls(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function _u(t,s){if(s){if(s=Number(s),isNaN(s)||0>s)throw Error("Bad port number "+s);t.C=s}else t.C=null}function yu(t,s,a){s instanceof xs?(t.a=s,Zw(t.a,t.i)):(a||(s=Ms(s,Qw)),t.a=new xs(s,t.i))}function bu(t){return t instanceof Kn?new Kn(t):new Kn(t,void 0)}function Ls(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ms(t,s,a){return S(t)?(t=encodeURI(t).replace(s,$w),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $w(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Sp=/[#\/\?@]/g,Yw=/[#\?:]/g,Jw=/[#\?]/g,Qw=/[#\?@]/g,Xw=/#/g;function xs(t,s){this.g=this.a=null,this.h=t||null,this.j=!!s}function $n(t){t.a||(t.a=new Ma,t.g=0,t.h&&qw(t.h,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}n=xs.prototype,n.add=function(t,s){$n(this),this.h=null,t=pr(this,t);var a=this.a.get(t);return a||this.a.set(t,a=[]),a.push(s),this.g+=1,this};function Ri(t,s){$n(t),s=pr(t,s),Ti(t.a.g,s)&&(t.h=null,t.g-=t.a.get(s).length,t=t.a,Ti(t.g,s)&&(delete t.g[s],t.h--,t.j++,t.a.length>2*t.h&&xa(t)))}n.clear=function(){this.a=this.h=null,this.g=0};function kp(t,s){return $n(t),s=pr(t,s),Ti(t.a.g,s)}n.forEach=function(t,s){$n(this),this.a.forEach(function(a,c){zt(a,function(d){t.call(s,d,c,this)},this)},this)},n.ja=function(){$n(this);for(var t=this.a.la(),s=this.a.ja(),a=[],c=0;c<s.length;c++)for(var d=t[c],p=0;p<d.length;p++)a.push(s[c]);return a},n.la=function(t){$n(this);var s=[];if(S(t))kp(this,t)&&(s=_p(s,this.a.get(pr(this,t))));else{t=this.a.la();for(var a=0;a<t.length;a++)s=_p(s,t[a])}return s},n.set=function(t,s){return $n(this),this.h=null,t=pr(this,t),kp(this,t)&&(this.g-=this.a.get(t).length),this.a.set(t,[s]),this.g+=1,this},n.get=function(t,s){return t?(t=this.la(t),0<t.length?String(t[0]):s):s},n.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var t=[],s=this.a.ja(),a=0;a<s.length;a++){var c=s[a],d=encodeURIComponent(String(c));c=this.la(c);for(var p=0;p<c.length;p++){var v=d;c[p]!==""&&(v+="="+encodeURIComponent(String(c[p]))),t.push(v)}}return this.h=t.join("&")};function Tp(t){var s=new xs;return s.h=t.h,t.a&&(s.a=new Ma(t.a),s.g=t.g),s}function pr(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function Zw(t,s){s&&!t.j&&($n(t),t.h=null,t.a.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(Ri(this,c),Ri(this,d),0<a.length&&(this.h=null,this.a.set(pr(this,d),yp(a)),this.g+=a.length))},t)),t.j=s}function Ai(t){this.a=bu(t)}function eI(t,s){s?t.a.a.set(qe.Sa,s):Ri(t.a.a,qe.Sa)}function tI(t,s){s!==null?t.a.a.set(qe.Qa,s?"1":"0"):Ri(t.a.a,qe.Qa)}function Rp(t){return t.a.a.get(qe.Pa)||null}function Ap(t,s){s?t.a.a.set(qe.PROVIDER_ID,s):Ri(t.a.a,qe.PROVIDER_ID)}Ai.prototype.toString=function(){return this.a.toString()};var qe={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"},mr;e:{var Pp=g.navigator;if(Pp){var Np=Pp.userAgent;if(Np){mr=Np;break e}}mr=""}function ce(t){return mr.indexOf(t)!=-1}function Op(){return(ce("Chrome")||ce("CriOS"))&&!ce("Edge")}function wu(t){return wu[" "](t),t}wu[" "]=I;function nI(t,s){var a=sI;return Object.prototype.hasOwnProperty.call(a,t)?a[t]:a[t]=s(t)}var Dp=ce("Opera"),Le=ce("Trident")||ce("MSIE"),Yn=ce("Edge"),iI=Yn||Le,Gt=ce("Gecko")&&!(mr.toLowerCase().indexOf("webkit")!=-1&&!ce("Edge"))&&!(ce("Trident")||ce("MSIE"))&&!ce("Edge"),mt=mr.toLowerCase().indexOf("webkit")!=-1&&!ce("Edge"),rI=mt&&ce("Mobile"),Jn=ce("Macintosh");function Lp(){var t=g.document;return t?t.documentMode:void 0}var Ua;e:{var Iu="",Eu=function(){var t=mr;if(Gt)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yn)return/Edge\/([\d\.]+)/.exec(t);if(Le)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mt)return/WebKit\/(\S+)/.exec(t);if(Dp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Eu&&(Iu=Eu?Eu[1]:""),Le){var Cu=Lp();if(Cu!=null&&Cu>parseFloat(Iu)){Ua=String(Cu);break e}}Ua=Iu}var sI={};function Pi(t){return nI(t,function(){for(var s=0,a=At(String(Ua)).split("."),c=At(String(t)).split("."),d=Math.max(a.length,c.length),p=0;s==0&&p<d;p++){var v=a[p]||"",w=c[p]||"";do{if(v=/(\d*)(\D*)(.*)/.exec(v)||["","","",""],w=/(\d*)(\D*)(.*)/.exec(w)||["","","",""],v[0].length==0&&w[0].length==0)break;s=mu(v[1].length==0?0:parseInt(v[1],10),w[1].length==0?0:parseInt(w[1],10))||mu(v[2].length==0,w[2].length==0)||mu(v[2],w[2]),v=v[3],w=w[3]}while(s==0)}return 0<=s})}var Fs,Mp=g.document;Fs=Mp&&Le?Lp()||(Mp.compatMode=="CSS1Compat"?parseInt(Ua,10):5):void 0;function gr(t,s){this.a=t===Fp&&s||"",this.g=xp}gr.prototype.ma=!0,gr.prototype.ka=function(){return this.a},gr.prototype.toString=function(){return"Const{"+this.a+"}"};var xp={},Fp={};function Ni(){this.a="",this.h=Bp}Ni.prototype.ma=!0,Ni.prototype.ka=function(){return this.a.toString()},Ni.prototype.g=function(){return 1},Ni.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function Up(t){return t instanceof Ni&&t.constructor===Ni&&t.h===Bp?t.a:(pt("expected object of type TrustedResourceUrl, got '"+t+"' of type "+T(t)),"type_error:TrustedResourceUrl")}function oI(){var t=QI;t instanceof gr&&t.constructor===gr&&t.g===xp?t=t.a:(pt("expected object of type Const, got '"+t+"'"),t="type_error:Const");var s=new Ni;return s.a=t,s}var Bp={};function Pt(){this.a="",this.h=Hp}Pt.prototype.ma=!0,Pt.prototype.ka=function(){return this.a.toString()},Pt.prototype.g=function(){return 1},Pt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Qn(t){return t instanceof Pt&&t.constructor===Pt&&t.h===Hp?t.a:(pt("expected object of type SafeUrl, got '"+t+"' of type "+T(t)),"type_error:SafeUrl")}var jp=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ba(t){return t instanceof Pt?t:(t=typeof t=="object"&&t.ma?t.ka():String(t),jp.test(t)||(t="about:invalid#zClosurez"),Su(t))}function Vp(t){return t instanceof Pt?t:(t=typeof t=="object"&&t.ma?t.ka():String(t),jp.test(t)||(t="about:invalid#zClosurez"),Su(t))}var Hp={};function Su(t){var s=new Pt;return s.a=t,s}Su("about:blank");function vr(){this.a="",this.g=Wp}vr.prototype.ma=!0;var Wp={};vr.prototype.ka=function(){return this.a},vr.prototype.toString=function(){return"SafeStyle{"+this.a+"}"};function Xn(){this.a="",this.j=zp,this.h=null}Xn.prototype.g=function(){return this.h},Xn.prototype.ma=!0,Xn.prototype.ka=function(){return this.a.toString()},Xn.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function ja(t){return t instanceof Xn&&t.constructor===Xn&&t.j===zp?t.a:(pt("expected object of type SafeHtml, got '"+t+"' of type "+T(t)),"type_error:SafeHtml")}var zp={};function Us(t,s){var a=new Xn;return a.a=t,a.h=s,a}Us("<!DOCTYPE html>",0);var aI=Us("",0);Us("<br>",0);var lI=function(t){var s=!1,a;return function(){return s||(a=t(),s=!0),a}}(function(){if(typeof document>"u")return!1;var t=document.createElement("div"),s=document.createElement("div");return s.appendChild(document.createElement("div")),t.appendChild(s),t.firstChild?(s=t.firstChild.firstChild,t.innerHTML=ja(aI),!s.parentElement):!1});function cI(t,s){if(t.src=Up(s),_===null)e:{if(s=g.document,(s=s.querySelector&&s.querySelector("script[nonce]"))&&(s=s.nonce||s.getAttribute("nonce"))&&C.test(s)){_=s;break e}_=""}s=_,s&&t.setAttribute("nonce",s)}function _r(t,s){s=s instanceof Pt?s:Vp(s),t.assign(Qn(s))}function Zn(t,s){this.a=b(t)?t:0,this.g=b(s)?s:0}Zn.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Zn.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Zn.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Zn.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this};function ku(t,s){this.width=t,this.height=s}n=ku.prototype,n.toString=function(){return"("+this.width+" x "+this.height+")"},n.aspectRatio=function(){return this.width/this.height},n.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},n.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},n.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};function Va(t){return t?new Pu(Bs(t)):Ge||(Ge=new Pu)}function Tu(t,s){var a=s||document;return a.querySelectorAll&&a.querySelector?a.querySelectorAll("."+t):Gp(document,t,s)}function Ru(t,s){var a=s||document;if(a.getElementsByClassName)t=a.getElementsByClassName(t)[0];else{a=document;var c=s||a;t=c.querySelectorAll&&c.querySelector&&t?c.querySelector(t?"."+t:""):Gp(a,t,s)[0]||null}return t||null}function Gp(t,s,a){var c;if(t=a||t,t.querySelectorAll&&t.querySelector&&s)return t.querySelectorAll(s?"."+s:"");if(s&&t.getElementsByClassName){var d=t.getElementsByClassName(s);return d}if(d=t.getElementsByTagName("*"),s){var p={};for(a=c=0;t=d[a];a++){var v=t.className;typeof v.split=="function"&&jt(v.split(/\s+/),s)&&(p[c++]=t)}return p.length=c,p}return d}function uI(t,s){bp(s,function(a,c){a&&typeof a=="object"&&a.ma&&(a=a.ka()),c=="style"?t.style.cssText=a:c=="class"?t.className=a:c=="for"?t.htmlFor=a:qp.hasOwnProperty(c)?t.setAttribute(qp[c],a):c.lastIndexOf("aria-",0)==0||c.lastIndexOf("data-",0)==0?t.setAttribute(c,a):t[c]=a})}var qp={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Ha(t){return t.scrollingElement?t.scrollingElement:(mt||t.compatMode!="CSS1Compat")&&t.body||t.documentElement}function Oi(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Bs(t){return t.nodeType==9?t:t.ownerDocument||t.document}function Au(t,s){if("textContent"in t)t.textContent=s;else if(t.nodeType==3)t.data=String(s);else if(t.firstChild&&t.firstChild.nodeType==3){for(;t.lastChild!=t.firstChild;)t.removeChild(t.lastChild);t.firstChild.data=String(s)}else{for(var a;a=t.firstChild;)t.removeChild(a);t.appendChild(Bs(t).createTextNode(String(s)))}}function Kp(t,s){return s?dI(t,function(a){return!s||S(a.className)&&jt(a.className.split(/\s+/),s)}):null}function dI(t,s){for(var a=0;t;){if(s(t))return t;t=t.parentNode,a++}return null}function Pu(t){this.a=t||g.document||document}Pu.prototype.N=function(){return S(void 0)?this.a.getElementById(void 0):void 0};var Wa={Fc:!0},$p={Hc:!0},hI={Ec:!0},Yp={Gc:!0};function ei(){throw Error("Do not instantiate directly")}ei.prototype.va=null,ei.prototype.toString=function(){return this.content};function js(t,s,a,c){if(t=t(s||mI,void 0,a),c=(c||Va()).a.createElement("DIV"),t=fI(t),t.match(pI),t=Us(t,null),lI())for(;c.lastChild;)c.removeChild(c.lastChild);return c.innerHTML=ja(t),c.childNodes.length==1&&(t=c.firstChild,t.nodeType==1&&(c=t)),c}function fI(t){if(!M(t))return hr(String(t));if(t instanceof ei){if(t.fa===Wa)return t.content;if(t.fa===Yp)return hr(t.content)}return pt("Soy template output is unsafe for use as HTML: "+t),"zSoyz"}var pI=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,mI={};function gI(t){if(t!=null)switch(t.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}function za(){ei.call(this)}Y(za,ei),za.prototype.fa=Wa;function q(t){return t!=null&&t.fa===Wa?t:t instanceof Xn?x(ja(t).toString(),t.g()):x(hr(String(String(t))),gI(t))}function Ga(){ei.call(this)}Y(Ga,ei),Ga.prototype.fa=$p,Ga.prototype.va=1;function qa(t,s){this.content=String(t),this.va=s??null}Y(qa,ei),qa.prototype.fa=Yp;function me(t){return new qa(t,void 0)}var x=function(t){function s(a){this.content=a}return s.prototype=t.prototype,function(a,c){return a=new s(String(a)),c!==void 0&&(a.va=c),a}}(za),vI=function(t){function s(a){this.content=a}return s.prototype=t.prototype,function(a){return new s(String(a))}}(Ga);function _I(t){function s(){}var a={label:Me("New password")};s.prototype=t,t=new s;for(var c in a)t[c]=a[c];return t}function Me(t){return(t=String(t))?new qa(t,void 0):""}var Jp=function(t){function s(a){this.content=a}return s.prototype=t.prototype,function(a,c){return a=String(a),a?(a=new s(a),c!==void 0&&(a.va=c),a):""}}(za);function gt(t){return t!=null&&t.fa===Wa?String(String(t.content).replace(SI,"").replace(kI,"&lt;")).replace(II,bI):hr(String(t))}function Di(t){return t!=null&&t.fa===$p?t=String(t).replace(Ou,Nu):t instanceof Pt?t=String(Qn(t).toString()).replace(Ou,Nu):(t=String(t),CI.test(t)?t=t.replace(Ou,Nu):(pt("Bad value `%s` for |filterNormalizeUri",[t]),t="#zSoyz")),t}function Qp(t){return t!=null&&t.fa===hI?t=t.content:t==null?t="":t instanceof vr?t instanceof vr&&t.constructor===vr&&t.g===Wp?t=t.a:(pt("expected object of type SafeStyle, got '"+t+"' of type "+T(t)),t="type_error:SafeStyle"):(t=String(t),EI.test(t)||(pt("Bad value `%s` for |filterCssValue",[t]),t="zSoyz")),t}var yI={"\0":"&#0;","	":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function bI(t){return yI[t]}var wI={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","\x07":"%07","\b":"%08","	":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","\x1B":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function Nu(t){return wI[t]}var II=/[\x00\x22\x27\x3c\x3e]/g,Ou=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,EI=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,CI=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,SI=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,kI=/</g;function Du(){return me("Enter a valid phone number")}function Xp(){return me("Unable to send password reset code to specified email")}function Zp(){return me("Something went wrong. Please try again.")}function em(){return me("This email already exists without any means of sign-in. Please reset the password to recover.")}function tm(t){t=t||{};var s="";switch(t.code){case"invalid-argument":s+="Client specified an invalid argument.";break;case"invalid-configuration":s+="Client specified an invalid project configuration.";break;case"failed-precondition":s+="Request can not be executed in the current system state.";break;case"out-of-range":s+="Client specified an invalid range.";break;case"unauthenticated":s+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":s+="Client does not have sufficient permission.";break;case"not-found":s+="Specified resource is not found.";break;case"aborted":s+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":s+="The resource that a client tried to create already exists.";break;case"resource-exhausted":s+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":s+="Request cancelled by the client.";break;case"data-loss":s+="Unrecoverable data loss or data corruption.";break;case"unknown":s+="Unknown server error.";break;case"internal":s+="Internal server error.";break;case"not-implemented":s+="API method not implemented by the server.";break;case"unavailable":s+="Service unavailable.";break;case"deadline-exceeded":s+="Request deadline exceeded.";break;case"auth/user-disabled":s+="The user account has been disabled by an administrator.";break;case"auth/timeout":s+="The operation has timed out.";break;case"auth/too-many-requests":s+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":s+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":s+="A network error has occurred. Try again later.";break;case"restart-process":s+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":s+="No sign-in provider is available for the given email, please try with a different email."}return me(s)}function nm(){return me("Please login again to perform this operation")}function Vs(t,s,a){var c=Error.call(this);if(this.message=c.message,"stack"in c&&(this.stack=c.stack),this.code=TI+t,!(t=s)){switch(t="",this.code){case"firebaseui/merge-conflict":t+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";break;default:t+=Zp()}t=me(t).toString()}this.message=t||"",this.credential=a||null}f(Vs,Error),Vs.prototype.toJSON=function(){return{code:this.code,message:this.message}};var TI="firebaseui/";function Li(){this.T=this.T,this.C=this.C}var RI=0;Li.prototype.T=!1,Li.prototype.m=function(){!this.T&&(this.T=!0,this.o(),RI!=0)&&(this[ee]||(this[ee]=++ne))};function Hs(t,s){t.T?b(void 0)?s.call(void 0):s():(t.C||(t.C=[]),t.C.push(b(void 0)?Q(s,void 0):s))}Li.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ws(t){t&&typeof t.m=="function"&&t.m()}var AI=Object.freeze||function(t){return t},im=!Le||9<=Number(Fs),PI=Le&&!Pi("9"),NI=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{g.addEventListener("test",I,s),g.removeEventListener("test",I,s)}catch{}return t}();function wn(t,s){this.type=t,this.g=this.target=s,this.h=!1,this.qb=!0}wn.prototype.stopPropagation=function(){this.h=!0},wn.prototype.preventDefault=function(){this.qb=!1};function vt(t,s){if(wn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var a=this.type=t.type,c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget){if(Gt){e:{try{wu(s.nodeName);var d=!0;break e}catch{}d=!1}d||(s=null)}}else a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement);this.relatedTarget=s,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.keyCode=t.keyCode||0,this.key=t.key||"",this.j=t.charCode||(a=="keypress"?t.keyCode:0),this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=S(t.pointerType)?t.pointerType:OI[t.pointerType]||"",this.a=t,t.defaultPrevented&&this.preventDefault()}}Y(vt,wn);var OI=AI({2:"touch",3:"pen",4:"mouse"});vt.prototype.stopPropagation=function(){vt.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},vt.prototype.preventDefault=function(){vt.K.preventDefault.call(this);var t=this.a;if(t.preventDefault)t.preventDefault();else if(t.returnValue=!1,PI)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch{}};var zs="closure_listenable_"+(1e6*Math.random()|0),DI=0;function LI(t,s,a,c,d){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!c,this.La=d,this.key=++DI,this.sa=this.Ia=!1}function Ka(t){t.sa=!0,t.listener=null,t.proxy=null,t.src=null,t.La=null}function $a(t){this.src=t,this.a={},this.g=0}$a.prototype.add=function(t,s,a,c,d){var p=t.toString();t=this.a[p],t||(t=this.a[p]=[],this.g++);var v=Mu(t,s,c,d);return-1<v?(s=t[v],a||(s.Ia=!1)):(s=new LI(s,this.src,p,!!c,d),s.Ia=a,t.push(s)),s};function Lu(t,s){var a=s.type;a in t.a&&vp(t.a[a],s)&&(Ka(s),t.a[a].length==0&&(delete t.a[a],t.g--))}function Mu(t,s,a,c){for(var d=0;d<t.length;++d){var p=t[d];if(!p.sa&&p.listener==s&&p.capture==!!a&&p.La==c)return d}return-1}var xu="closure_lm_"+(1e6*Math.random()|0),Fu={};function qt(t,s,a,c,d){if(c&&c.once)return Gs(t,s,a,c,d);if(R(s)){for(var p=0;p<s.length;p++)qt(t,s[p],a,c,d);return null}return a=Bu(a),t&&t[zs]?t.J.add(String(s),a,!1,M(c)?!!c.capture:!!c,d):rm(t,s,a,!1,c,d)}function rm(t,s,a,c,d,p){if(!s)throw Error("Invalid event type");var v=M(d)?!!d.capture:!!d,w=Ya(t);if(w||(t[xu]=w=new $a(t)),a=w.add(s,a,c,v,p),a.proxy)return a;if(c=MI(),a.proxy=c,c.src=t,c.listener=a,t.addEventListener)NI||(d=v),d===void 0&&(d=!1),t.addEventListener(s.toString(),c,d);else if(t.attachEvent)t.attachEvent(sm(s.toString()),c);else if(t.addListener&&t.removeListener)t.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return a}function MI(){var t=xI,s=im?function(a){return t.call(s.src,s.listener,a)}:function(a){if(a=t.call(s.src,s.listener,a),!a)return a};return s}function Gs(t,s,a,c,d){if(R(s)){for(var p=0;p<s.length;p++)Gs(t,s[p],a,c,d);return null}return a=Bu(a),t&&t[zs]?t.J.add(String(s),a,!0,M(c)?!!c.capture:!!c,d):rm(t,s,a,!0,c,d)}function Mi(t,s,a,c,d){if(R(s))for(var p=0;p<s.length;p++)Mi(t,s[p],a,c,d);else c=M(c)?!!c.capture:!!c,a=Bu(a),t&&t[zs]?(t=t.J,s=String(s).toString(),s in t.a&&(p=t.a[s],a=Mu(p,a,c,d),-1<a&&(Ka(p[a]),Da(p,a),p.length==0&&(delete t.a[s],t.g--)))):t&&(t=Ya(t))&&(s=t.a[s.toString()],t=-1,s&&(t=Mu(s,a,c,d)),(a=-1<t?s[t]:null)&&ti(a))}function ti(t){if(typeof t!="number"&&t&&!t.sa){var s=t.src;if(s&&s[zs])Lu(s.J,t);else{var a=t.type,c=t.proxy;s.removeEventListener?s.removeEventListener(a,c,t.capture):s.detachEvent?s.detachEvent(sm(a),c):s.addListener&&s.removeListener&&s.removeListener(c),(a=Ya(s))?(Lu(a,t),a.g==0&&(a.src=null,s[xu]=null)):Ka(t)}}}function sm(t){return t in Fu?Fu[t]:Fu[t]="on"+t}function om(t,s,a,c){var d=!0;if((t=Ya(t))&&(s=t.a[s.toString()]))for(s=s.concat(),t=0;t<s.length;t++){var p=s[t];p&&p.capture==a&&!p.sa&&(p=am(p,c),d=d&&p!==!1)}return d}function am(t,s){var a=t.listener,c=t.La||t.src;return t.Ia&&ti(t),a.call(c,s)}function xI(t,s){if(t.sa)return!0;if(!im){if(!s)e:{s=["window","event"];for(var a=g,c=0;c<s.length;c++)if(a=a[s[c]],a==null){s=null;break e}s=a}if(c=s,s=new vt(c,this),a=!0,!(0>c.keyCode||c.returnValue!=null)){e:{var d=!1;if(c.keyCode==0)try{c.keyCode=-1;break e}catch{d=!0}(d||c.returnValue==null)&&(c.returnValue=!0)}for(c=[],d=s.g;d;d=d.parentNode)c.push(d);for(t=t.type,d=c.length-1;!s.h&&0<=d;d--){s.g=c[d];var p=om(c[d],t,!0,s);a=a&&p}for(d=0;!s.h&&d<c.length;d++)s.g=c[d],p=om(c[d],t,!1,s),a=a&&p}return a}return am(t,new vt(s,this))}function Ya(t){return t=t[xu],t instanceof $a?t:null}var Uu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bu(t){return $(t)?t:(t[Uu]||(t[Uu]=function(s){return t.handleEvent(s)}),t[Uu])}function Ke(){Li.call(this),this.J=new $a(this),this.wb=this,this.Ha=null}Y(Ke,Li),Ke.prototype[zs]=!0,Ke.prototype.Za=function(t){this.Ha=t},Ke.prototype.removeEventListener=function(t,s,a,c){Mi(this,t,s,a,c)};function ni(t,s){var a,c=t.Ha;if(c)for(a=[];c;c=c.Ha)a.push(c);if(t=t.wb,c=s.type||s,S(s))s=new wn(s,t);else if(s instanceof wn)s.target=s.target||t;else{var d=s;s=new wn(c,t),La(s,d)}if(d=!0,a)for(var p=a.length-1;!s.h&&0<=p;p--){var v=s.g=a[p];d=Ja(v,c,!0,s)&&d}if(s.h||(v=s.g=t,d=Ja(v,c,!0,s)&&d,s.h||(d=Ja(v,c,!1,s)&&d)),a)for(p=0;!s.h&&p<a.length;p++)v=s.g=a[p],d=Ja(v,c,!1,s)&&d;return d}Ke.prototype.o=function(){if(Ke.K.o.call(this),this.J){var t=this.J,s;for(s in t.a){for(var a=t.a[s],c=0;c<a.length;c++)Ka(a[c]);delete t.a[s],t.g--}}this.Ha=null};function Ja(t,s,a,c){if(s=t.J.a[String(s)],!s)return!0;s=s.concat();for(var d=!0,p=0;p<s.length;++p){var v=s[p];if(v&&!v.sa&&v.capture==a){var w=v.listener,k=v.La||v.src;v.Ia&&Lu(t.J,v),d=w.call(k,c)!==!1&&d}}return d&&c.qb!=0}var Nt={},lm=0;function cm(t,s){if(!t)throw Error("Event target element must be provided!");if(t=ju(t),Nt[t]&&Nt[t].length)for(var a=0;a<Nt[t].length;a++)ni(Nt[t][a],s)}function FI(t){var s=ju(t.N());Nt[s]&&Nt[s].length&&(Dw(Nt[s],function(a){return a==t}),Nt[s].length||delete Nt[s])}function ju(t){return typeof t.a>"u"&&(t.a=lm,lm++),t.a}function Qa(t){if(!t)throw Error("Event target element must be provided!");Ke.call(this),this.a=t}f(Qa,Ke),Qa.prototype.N=function(){return this.a},Qa.prototype.register=function(){var t=ju(this.N());Nt[t]?jt(Nt[t],this)||Nt[t].push(this):Nt[t]=[this]};function um(t){if(!t)return!1;try{return!!t.$goog_Thenable}catch{return!1}}function Vu(t,s){this.h=t,this.j=s,this.g=0,this.a=null}Vu.prototype.get=function(){if(0<this.g){this.g--;var t=this.a;this.a=t.next,t.next=null}else t=this.h();return t};function dm(t,s){t.j(s),100>t.g&&(t.g++,s.next=t.a,t.a=s)}function hm(){this.g=this.a=null}var fm=new Vu(function(){return new Hu},function(t){t.reset()});hm.prototype.add=function(t,s){var a=fm.get();a.set(t,s),this.g?this.g.next=a:this.a=a,this.g=a};function UI(){var t=mm,s=null;return t.a&&(s=t.a,t.a=t.a.next,t.a||(t.g=null),s.next=null),s}function Hu(){this.next=this.g=this.a=null}Hu.prototype.set=function(t,s){this.a=t,this.g=s,this.next=null},Hu.prototype.reset=function(){this.next=this.g=this.a=null};function pm(t){g.setTimeout(function(){throw t},0)}var Wu;function BI(){var t=g.MessageChannel;if(typeof t>"u"&&typeof window<"u"&&window.postMessage&&window.addEventListener&&!ce("Presto")&&(t=function(){var d=document.createElement("IFRAME");d.style.display="none",d.src="",document.documentElement.appendChild(d);var p=d.contentWindow;d=p.document,d.open(),d.write(""),d.close();var v="callImmediate"+Math.random(),w=p.location.protocol=="file:"?"*":p.location.protocol+"//"+p.location.host;d=Q(function(k){(w=="*"||k.origin==w)&&k.data==v&&this.port1.onmessage()},this),p.addEventListener("message",d,!1),this.port1={},this.port2={postMessage:function(){p.postMessage(v,w)}}}),typeof t<"u"&&!ce("Trident")&&!ce("MSIE")){var s=new t,a={},c=a;return s.port1.onmessage=function(){if(b(a.next)){a=a.next;var d=a.gb;a.gb=null,d()}},function(d){c.next={gb:d},c=c.next,s.port2.postMessage(0)}}return typeof document<"u"&&"onreadystatechange"in document.createElement("SCRIPT")?function(d){var p=document.createElement("SCRIPT");p.onreadystatechange=function(){p.onreadystatechange=null,p.parentNode.removeChild(p),p=null,d(),d=null},document.documentElement.appendChild(p)}:function(d){g.setTimeout(d,0)}}function zu(t,s){Xa||jI(),Gu||(Xa(),Gu=!0),mm.add(t,s)}var Xa;function jI(){if(g.Promise&&g.Promise.resolve){var t=g.Promise.resolve(void 0);Xa=function(){t.then(gm)}}else Xa=function(){var s=gm;!$(g.setImmediate)||g.Window&&g.Window.prototype&&!ce("Edge")&&g.Window.prototype.setImmediate==g.setImmediate?(Wu||(Wu=BI()),Wu(s)):g.setImmediate(s)}}var Gu=!1,mm=new hm;function gm(){for(var t;t=UI();){try{t.a.call(t.g)}catch(s){pm(s)}dm(fm,t)}Gu=!1}function $e(t){if(this.a=xi,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,t!=I)try{var s=this;t.call(void 0,function(a){Fi(s,qs,a)},function(a){if(!(a instanceof br))try{throw a instanceof Error?a:Error("Promise rejected.")}catch{}Fi(s,In,a)})}catch(a){Fi(this,In,a)}}var xi=0,qs=2,In=3;function vm(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}vm.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var _m=new Vu(function(){return new vm},function(t){t.reset()});function qu(t,s,a){var c=_m.get();return c.s=t,c.g=s,c.j=a,c}function xe(t){if(t instanceof $e)return t;var s=new $e(I);return Fi(s,qs,t),s}function yr(t){return new $e(function(s,a){a(t)})}$e.prototype.then=function(t,s,a){return bm(this,$(t)?t:null,$(s)?s:null,a)},$e.prototype.$goog_Thenable=!0,n=$e.prototype,n.fc=function(t,s){return t=qu(t,t,s),t.h=!0,Ku(this,t),this},n.Ca=function(t,s){return bm(this,null,t,s)},n.cancel=function(t){this.a==xi&&zu(function(){var s=new br(t);ym(this,s)},this)};function ym(t,s){if(t.a==xi)if(t.h){var a=t.h;if(a.g){for(var c=0,d=null,p=null,v=a.g;v&&(v.h||(c++,v.a==t&&(d=v),!(d&&1<c)));v=v.next)d||(p=v);d&&(a.a==xi&&c==1?ym(a,s):(p?(c=p,c.next==a.j&&(a.j=c),c.next=c.next.next):Im(a),Em(a,d,In,s)))}t.h=null}else Fi(t,In,s)}function Ku(t,s){t.g||t.a!=qs&&t.a!=In||wm(t),t.j?t.j.next=s:t.g=s,t.j=s}function bm(t,s,a,c){var d=qu(null,null,null);return d.a=new $e(function(p,v){d.s=s?function(w){try{var k=s.call(c,w);p(k)}catch(N){v(N)}}:p,d.g=a?function(w){try{var k=a.call(c,w);!b(k)&&w instanceof br?v(w):p(k)}catch(N){v(N)}}:v}),d.a.h=t,Ku(t,d),d.a}n.hc=function(t){this.a=xi,Fi(this,qs,t)},n.ic=function(t){this.a=xi,Fi(this,In,t)};function Fi(t,s,a){if(t.a==xi){t===a&&(s=In,a=new TypeError("Promise cannot resolve to itself")),t.a=1;e:{var c=a,d=t.hc,p=t.ic;if(c instanceof $e){Ku(c,qu(d||I,p||null,t));var v=!0}else if(um(c))c.then(d,p,t),v=!0;else{if(M(c))try{var w=c.then;if($(w)){VI(c,w,d,p,t),v=!0;break e}}catch(k){p.call(t,k),v=!0;break e}v=!1}}v||(t.A=a,t.a=s,t.h=null,wm(t),s!=In||a instanceof br||HI(t,a))}}function VI(t,s,a,c,d){function p(k){w||(w=!0,c.call(d,k))}function v(k){w||(w=!0,a.call(d,k))}var w=!1;try{s.call(t,v,p)}catch(k){p(k)}}function wm(t){t.i||(t.i=!0,zu(t.Hb,t))}function Im(t){var s=null;return t.g&&(s=t.g,t.g=s.next,s.next=null),t.g||(t.j=null),s}n.Hb=function(){for(var t;t=Im(this);)Em(this,t,this.a,this.A);this.i=!1};function Em(t,s,a,c){if(a==In&&s.g&&!s.h)for(;t&&t.s;t=t.h)t.s=!1;if(s.a)s.a.h=null,Cm(s,a,c);else try{s.h?s.s.call(s.j):Cm(s,a,c)}catch(d){Sm.call(null,d)}dm(_m,s)}function Cm(t,s,a){s==qs?t.s.call(t.j,a):t.g&&t.g.call(t.j,a)}function HI(t,s){t.s=!0,zu(function(){t.s&&Sm.call(null,s)})}var Sm=pm;function br(t){X.call(this,t)}Y(br,X),br.prototype.name="cancel";function km(t,s,a){s||(s={}),a=a||window;var c=t instanceof Pt?t:Ba(typeof t.href<"u"?t.href:String(t));t=s.target||t.target;var d=[];for(p in s)switch(p){case"width":case"height":case"top":case"left":d.push(p+"="+s[p]);break;case"target":case"noopener":case"noreferrer":break;default:d.push(p+"="+(s[p]?1:0))}var p=d.join(",");return(ce("iPhone")&&!ce("iPod")&&!ce("iPad")||ce("iPad")||ce("iPod"))&&a.navigator&&a.navigator.standalone&&t&&t!="_self"?(p=a.document.createElement("A"),c=c instanceof Pt?c:Vp(c),p.href=Qn(c),p.setAttribute("target",t),s.noreferrer&&p.setAttribute("rel","noreferrer"),s=document.createEvent("MouseEvent"),s.initMouseEvent("click",!0,!0,a,1),p.dispatchEvent(s),a={}):s.noreferrer?(a=a.open("",t,p),s=Qn(c).toString(),a&&(iI&&s.indexOf(";")!=-1&&(s="'"+s.replace(/'/g,"%27")+"'"),a.opener=null,s=Us('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+hr(s)+'">',null),a.document.write(ja(s)),a.document.close())):(a=a.open(Qn(c).toString(),t,p))&&s.noopener&&(a.opener=null),a}function Tm(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch{}return!1}function wr(t){km(t,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function Za(t,s){if(t=M(t)&&t.nodeType==1?t:document.querySelector(String(t)),t==null)throw Error(s||"Cannot find element.");return t}function En(){return window.location.href}function WI(){var t=null;return new $e(function(s){g.document.readyState=="complete"?s():(t=function(){s()},Gs(window,"load",t))}).Ca(function(s){throw Mi(window,"load",t),s})}function zI(){for(var t=32,s=[];0<t;)s.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--;return s.join("")}function GI(t,s,a){return a=a===void 0?{}:a,Object.keys(t).filter(function(c){return s.includes(c)}).reduce(function(c,d){return c[d]=t[d],c},a)}function ii(t){var s=$I;this.s=[],this.T=s,this.O=t||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}ii.prototype.cancel=function(t){if(this.a)this.h instanceof ii&&this.h.cancel();else{if(this.g){var s=this.g;delete this.g,t?s.cancel(t):(s.C--,0>=s.C&&s.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(t=new $s,el(this),Ks(this,!1,t))}},ii.prototype.L=function(t,s){this.A=!1,Ks(this,t,s)};function Ks(t,s,a){t.a=!0,t.h=a,t.j=!s,Pm(t)}function el(t){if(t.a){if(!t.J)throw new tl;t.J=!1}}ii.prototype.callback=function(t){el(this),Ks(this,!0,t)};function Rm(t,s,a){t.s.push([s,a,void 0]),t.a&&Pm(t)}ii.prototype.then=function(t,s,a){var c,d,p=new $e(function(v,w){c=v,d=w});return Rm(this,c,function(v){v instanceof $s?p.cancel():d(v)}),p.then(t,s,a)},ii.prototype.$goog_Thenable=!0;function Am(t){return pu(t.s,function(s){return $(s[1])})}function Pm(t){if(t.i&&t.a&&Am(t)){var s=t.i,a=nl[s];a&&(g.clearTimeout(a.a),delete nl[s]),t.i=0}t.g&&(t.g.C--,delete t.g),s=t.h;for(var c=a=!1;t.s.length&&!t.A;){var d=t.s.shift(),p=d[0],v=d[1];if(d=d[2],p=t.j?v:p)try{var w=p.call(d||t.O,s);b(w)&&(t.j=t.j&&(w==s||w instanceof Error),t.h=s=w),(um(s)||typeof g.Promise=="function"&&s instanceof g.Promise)&&(c=!0,t.A=!0)}catch(k){s=k,t.j=!0,Am(t)||(a=!0)}}t.h=s,c&&(w=Q(t.L,t,!0),c=Q(t.L,t,!1),s instanceof ii?(Rm(s,w,c),s.l=!0):s.then(w,c)),a&&(s=new Nm(s),nl[s.a]=s,t.i=s.a)}function tl(){X.call(this)}Y(tl,X),tl.prototype.message="Deferred has already fired",tl.prototype.name="AlreadyCalledError";function $s(){X.call(this)}Y($s,X),$s.prototype.message="Deferred was canceled",$s.prototype.name="CanceledError";function Nm(t){this.a=g.setTimeout(Q(this.h,this),0),this.g=t}Nm.prototype.h=function(){throw delete nl[this.a],this.g};var nl={};function qI(t){var s={},a=s.document||document,c=Up(t).toString(),d=document.createElement("SCRIPT"),p={rb:d,sb:void 0},v=new ii(p),w=null,k=s.timeout!=null?s.timeout:5e3;return 0<k&&(w=window.setTimeout(function(){il(d,!0);var N=new $u(JI,"Timeout reached for loading script "+c);el(v),Ks(v,!1,N)},k),p.sb=w),d.onload=d.onreadystatechange=function(){d.readyState&&d.readyState!="loaded"&&d.readyState!="complete"||(il(d,s.xc||!1,w),v.callback(null))},d.onerror=function(){il(d,!0,w);var N=new $u(YI,"Error while loading script "+c);el(v),Ks(v,!1,N)},p=s.attributes||{},La(p,{type:"text/javascript",charset:"UTF-8"}),uI(d,p),cI(d,t),KI(a).appendChild(d),v}function KI(t){var s=(t||document).getElementsByTagName("HEAD");return s&&s.length!=0?s[0]:t.documentElement}function $I(){if(this&&this.rb){var t=this.rb;t&&t.tagName=="SCRIPT"&&il(t,!0,this.sb)}}function il(t,s,a){a!=null&&g.clearTimeout(a),t.onload=I,t.onerror=I,t.onreadystatechange=I,s&&window.setTimeout(function(){Oi(t)},0)}var YI=0,JI=1;function $u(t,s){var a="Jsloader error (code #"+t+")";s&&(a+=": "+s),X.call(this,a),this.code=t}Y($u,X);function Ys(){return g.google&&g.google.accounts&&g.google.accounts.id||null}function Yu(t){this.a=t||Ys(),this.h=!1,this.g=null}Yu.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())};function Om(t,s,a){if(t.a&&s)return function(){return t.h=!0,new $e(function(d){t.g=d,t.a.initialize({client_id:s,callback:d,auto_select:!a}),t.a.prompt()})}();if(s){var c=Ju.Xa().load().then(function(){return t.a=Ys(),Om(t,s,a)}).Ca(function(){return null});return xe(c)}return xe(null)}E(Yu);var QI=new gr(Fp,"https://accounts.google.com/gsi/client");function Ju(){this.a=null}Ju.prototype.load=function(){var t=this;if(this.a)return this.a;var s=oI();return Ys()?xe():this.a=WI().then(function(){if(!Ys())return new $e(function(a,c){var d=setTimeout(function(){t.a=null,c(Error("Network error!"))},1e4);g.onGoogleLibraryLoad=function(){clearTimeout(d),a()},xe(qI(s)).then(function(){Ys()&&a()}).Ca(function(p){clearTimeout(d),t.a=null,c(p)})})})},E(Ju);function Qu(t,s){this.a=t,this.g=s||function(a){throw a}}Qu.prototype.confirm=function(t){return xe(this.a.confirm(t)).Ca(this.g)};function Xu(t,s,a){this.reset(t,s,a,void 0,void 0)}Xu.prototype.a=null,Xu.prototype.reset=function(t,s,a,c,d){this.h=c||Be(),this.j=t,this.s=s,this.g=a,delete this.a};function Zu(t){this.s=t,this.a=this.h=this.j=this.g=null}function rl(t,s){this.name=t,this.value=s}rl.prototype.toString=function(){return this.name};var Dm=new rl("SEVERE",1e3),Lm=new rl("WARNING",900),Mm=new rl("CONFIG",700);function xm(t){return t.j?t.j:t.g?xm(t.g):(pt("Root logger has no level set."),null)}Zu.prototype.log=function(t,s,a){if(t.value>=xm(this).value)for($(s)&&(s=s()),t=new Xu(t,String(s),this.s),a&&(t.a=a),a=this;a;){var c=a,d=t;if(c.a)for(var p=0;s=c.a[p];p++)s(d);a=a.g}};var ed={},Js=null;function Fm(){Js||(Js=new Zu(""),ed[""]=Js,Js.j=Mm)}function Um(t){Fm();var s;if(!(s=ed[t])){s=new Zu(t);var a=t.lastIndexOf("."),c=t.substr(a+1);a=Um(t.substr(0,a)),a.h||(a.h={}),a.h[c]=s,s.g=a,ed[t]=s}return s}function sl(){this.a=Be()}var td=null;sl.prototype.set=function(t){this.a=t},sl.prototype.reset=function(){this.set(Be())},sl.prototype.get=function(){return this.a};function Qs(t){this.j=t||"",td||(td=new sl),this.s=td}Qs.prototype.a=!0,Qs.prototype.g=!0,Qs.prototype.h=!1;function Ui(t){return 10>t?"0"+t:String(t)}function XI(t,s){t=(t.h-s)/1e3,s=t.toFixed(3);var a=0;if(1>t)a=2;else for(;100>t;)a++,t*=10;for(;0<a--;)s=" "+s;return s}function Bm(t){Qs.call(this,t)}Y(Bm,Qs);function ZI(t,s){var a=[];if(a.push(t.j," "),t.g){var c=new Date(s.h);a.push("[",Ui(c.getFullYear()-2e3)+Ui(c.getMonth()+1)+Ui(c.getDate())+" "+Ui(c.getHours())+":"+Ui(c.getMinutes())+":"+Ui(c.getSeconds())+"."+Ui(Math.floor(c.getMilliseconds()/10)),"] ")}return a.push("[",XI(s,t.s.get()),"s] "),a.push("[",s.g,"] "),a.push(s.s),t.h&&(s=s.a)&&a.push(`
`,s instanceof Error?s.message:s.toString()),t.a&&a.push(`
`),a.join("")}function jm(){this.s=Q(this.h,this),this.a=new Bm,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}jm.prototype.h=function(t){function s(p){if(p){if(p.value>=Dm.value)return"error";if(p.value>=Lm.value)return"warn";if(p.value>=Mm.value)return"log"}return"debug"}if(!this.j[t.g]){var a=ZI(this.a,t),c=eE;if(c){var d=s(t.j);tE(c,d,a,t.a)}}};var eE=g.console;function tE(t,s,a,c){t[s]?t[s](a,c||""):t.log(a,c||"")}function Ot(t,s){var a=nd;a&&a.log(Dm,t,s)}var nd;nd=Um("firebaseui");var id=new jm;if(id.g!=1){var ol;Fm(),ol=Js;var nE=id.s;ol.a||(ol.a=[]),ol.a.push(nE),id.g=!0}function ri(t){var s=nd;s&&s.log(Lm,t,void 0)}function Vm(){this.a=(typeof document>"u"?null:document)||{cookie:""}}n=Vm.prototype,n.set=function(t,s,a,c,d,p){if(/[;=\s]/.test(t))throw Error('Invalid cookie name "'+t+'"');if(/[;\r\n]/.test(s))throw Error('Invalid cookie value "'+s+'"');b(a)||(a=-1),d=d?";domain="+d:"",c=c?";path="+c:"",p=p?";secure":"",a=0>a?"":a==0?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(Be()+1e3*a).toUTCString(),this.a.cookie=t+"="+s+d+c+a+p},n.get=function(t,s){for(var a=t+"=",c=(this.a.cookie||"").split(";"),d=0,p;d<c.length;d++){if(p=At(c[d]),p.lastIndexOf(a,0)==0)return p.substr(a.length);if(p==t)return""}return s},n.ja=function(){return rd(this).keys},n.la=function(){return rd(this).values},n.clear=function(){for(var t=rd(this).keys,s=t.length-1;0<=s;s--){var a=t[s];this.get(a),this.set(a,"",0,void 0,void 0)}};function rd(t){t=(t.a.cookie||"").split(";");for(var s=[],a=[],c,d,p=0;p<t.length;p++)d=At(t[p]),c=d.indexOf("="),c==-1?(s.push(""),a.push(d)):(s.push(d.substring(0,c)),a.push(d.substring(c+1)));return{keys:s,values:a}}var al=new Vm;function Hm(){}function Ir(t,s,a,c){this.h=typeof t<"u"&&t!==null?t:-1,this.g=s||null,this.a=a||null,this.j=!!c}f(Ir,Hm),Ir.prototype.set=function(t,s){al.set(t,s,this.h,this.g,this.a,this.j)},Ir.prototype.get=function(t){return al.get(t)||null},Ir.prototype.ra=function(t){var s=this.g,a=this.a;al.get(t),al.set(t,"",0,s,a)};function sd(t,s){this.g=t,this.a=s||null}function Wm(t){return{email:t.g,credential:t.a&&t.a.toJSON()}}function zm(t){if(t&&t.email){var s=t.credential&&V.auth.AuthCredential.fromJSON(t.credential);return new sd(t.email,s)}return null}function Gm(t){this.a=t||null}function qm(t){for(var s=[],a=0,c=0;c<t.length;c++){var d=t.charCodeAt(c);255<d&&(s[a++]=d&255,d>>=8),s[a++]=d}return s}function iE(t){return Ds(t,function(s){return s=s.toString(16),1<s.length?s:"0"+s}).join("")}function ll(t){for(this.i=t,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(Er*(this.j+1)),t=0;t<this.g;t++)this.a[t]=[this.i[4*t],this.i[4*t+1],this.i[4*t+2],this.i[4*t+3]];var s=Array(4);for(t=this.g;t<Er*(this.j+1);t++){if(s[0]=this.a[t-1][0],s[1]=this.a[t-1][1],s[2]=this.a[t-1][2],s[3]=this.a[t-1][3],t%this.g==0){var a=s,c=a[0];a[0]=a[1],a[1]=a[2],a[2]=a[3],a[3]=c,Qm(s),s[0]^=ul[t/this.g][0],s[1]^=ul[t/this.g][1],s[2]^=ul[t/this.g][2],s[3]^=ul[t/this.g][3]}else 6<this.g&&t%this.g==4&&Qm(s);this.a[t]=Array(4),this.a[t][0]=this.a[t-this.g][0]^s[0],this.a[t][1]=this.a[t-this.g][1]^s[1],this.a[t][2]=this.a[t-this.g][2]^s[2],this.a[t][3]=this.a[t-this.g][3]^s[3]}}ll.prototype.A=16;var Er=ll.prototype.A/4;function Km(t,s){for(var a,c=0;c<Er;c++)for(var d=0;4>d;d++)a=4*d+c,a=s[a],t.h[c][d]=a}function $m(t){for(var s=[],a=0;a<Er;a++)for(var c=0;4>c;c++)s[4*c+a]=t.h[a][c];return s}function Cr(t,s){for(var a=0;4>a;a++)for(var c=0;4>c;c++)t.h[a][c]^=t.a[4*s+c][a]}function cl(t,s){for(var a=0;4>a;a++)for(var c=0;4>c;c++)t.h[a][c]=s[t.h[a][c]]}function Ym(t){for(var s=1;4>s;s++)for(var a=0;4>a;a++)t.s[s][a]=t.h[s][a];for(s=1;4>s;s++)for(a=0;4>a;a++)t.h[s][a]=t.s[s][(a+s)%Er]}function Jm(t){for(var s=1;4>s;s++)for(var a=0;4>a;a++)t.s[s][(a+s)%Er]=t.h[s][a];for(s=1;4>s;s++)for(a=0;4>a;a++)t.h[s][a]=t.s[s][a]}function Qm(t){t[0]=Sr[t[0]],t[1]=Sr[t[1]],t[2]=Sr[t[2]],t[3]=Sr[t[3]]}var Sr=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],Xm=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],ul=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],dl=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],hl=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],fl=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],pl=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],ml=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],gl=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Zm(t,s){t=new ll(tg(t)),s=qm(s);for(var a=s.splice(0,16),c="",d;a.length;){d=16-a.length;for(var p=0;p<d;p++)a.push(0);for(d=t,Km(d,a),Cr(d,0),a=1;a<d.j;++a){cl(d,Sr),Ym(d),p=d.h;for(var v=d.s[0],w=0;4>w;w++)v[0]=p[0][w],v[1]=p[1][w],v[2]=p[2][w],v[3]=p[3][w],p[0][w]=dl[v[0]]^hl[v[1]]^v[2]^v[3],p[1][w]=v[0]^dl[v[1]]^hl[v[2]]^v[3],p[2][w]=v[0]^v[1]^dl[v[2]]^hl[v[3]],p[3][w]=hl[v[0]]^v[1]^v[2]^dl[v[3]];Cr(d,a)}cl(d,Sr),Ym(d),Cr(d,d.j),c+=iE($m(d)),a=s.splice(0,16)}return c}function eg(t,s){t=new ll(tg(t));for(var a=[],c=0;c<s.length;c+=2)a.push(parseInt(s.substring(c,c+2),16));var d=a.splice(0,16);for(s="";d.length;){for(c=t,Km(c,d),Cr(c,c.j),d=1;d<c.j;++d){Jm(c),cl(c,Xm),Cr(c,c.j-d);for(var p=c.h,v=c.s[0],w=0;4>w;w++)v[0]=p[0][w],v[1]=p[1][w],v[2]=p[2][w],v[3]=p[3][w],p[0][w]=gl[v[0]]^pl[v[1]]^ml[v[2]]^fl[v[3]],p[1][w]=fl[v[0]]^gl[v[1]]^pl[v[2]]^ml[v[3]],p[2][w]=ml[v[0]]^fl[v[1]]^gl[v[2]]^pl[v[3]],p[3][w]=pl[v[0]]^ml[v[1]]^fl[v[2]]^gl[v[3]]}if(Jm(c),cl(c,Xm),Cr(c,0),c=$m(c),8192>=c.length)c=String.fromCharCode.apply(null,c);else{for(d="",p=0;p<c.length;p+=8192)d+=String.fromCharCode.apply(null,Mw(c,p,p+8192));c=d}s+=c,d=a.splice(0,16)}return s.replace(/(\x00)+$/,"")}function tg(t){t=qm(t.substring(0,32));for(var s=32-t.length,a=0;a<s;a++)t.push(0);return t}function ng(t){var s=[];return od(new rE,t,s),s.join("")}function rE(){}function od(t,s,a){if(s==null)a.push("null");else{if(typeof s=="object"){if(R(s)){var c=s;s=c.length,a.push("[");for(var d="",p=0;p<s;p++)a.push(d),od(t,c[p],a),d=",";a.push("]");return}if(s instanceof String||s instanceof Number||s instanceof Boolean)s=s.valueOf();else{a.push("{"),d="";for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(p=s[c],typeof p!="function"&&(a.push(d),rg(c,a),a.push(":"),od(t,p,a),d=","));a.push("}");return}}switch(typeof s){case"string":rg(s,a);break;case"number":a.push(isFinite(s)&&!isNaN(s)?String(s):"null");break;case"boolean":a.push(String(s));break;case"function":a.push("null");break;default:throw Error("Unknown type: "+typeof s)}}}var ig={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\u000b"},sE=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function rg(t,s){s.push('"',t.replace(sE,function(a){var c=ig[a];return c||(c="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),ig[a]=c),c}),'"')}function Xs(t){this.a=t}Xs.prototype.set=function(t,s){b(s)?this.a.set(t,ng(s)):this.a.ra(t)},Xs.prototype.get=function(t){try{var s=this.a.get(t)}catch{return}if(s!==null)try{return JSON.parse(s)}catch{throw"Storage: Invalid value was encountered"}};function vl(){}Y(vl,Hm),vl.prototype.clear=function(){var t=zw(this.ha(!0)),s=this;zt(t,function(a){s.ra(a)})};function _l(t){this.a=t}Y(_l,vl);function yl(t){if(!t.a)return!1;try{return t.a.setItem("__sak","1"),t.a.removeItem("__sak"),!0}catch{return!1}}n=_l.prototype,n.set=function(t,s){try{this.a.setItem(t,s)}catch{throw this.a.length==0?"Storage mechanism: Storage disabled":"Storage mechanism: Quota exceeded"}},n.get=function(t){if(t=this.a.getItem(t),!S(t)&&t!==null)throw"Storage mechanism: Invalid value was encountered";return t},n.ra=function(t){this.a.removeItem(t)},n.ha=function(t){var s=0,a=this.a,c=new ki;return c.next=function(){if(s>=a.length)throw fr;var d=a.key(s++);if(t)return d;if(d=a.getItem(d),!S(d))throw"Storage mechanism: Invalid value was encountered";return d},c},n.clear=function(){this.a.clear()},n.key=function(t){return this.a.key(t)};function ad(){var t=null;try{t=window.localStorage||null}catch{}this.a=t}Y(ad,_l);function ld(){var t=null;try{t=window.sessionStorage||null}catch{}this.a=t}Y(ld,_l);function kr(t,s){this.g=t,this.a=s+"::"}Y(kr,vl),kr.prototype.set=function(t,s){this.g.set(this.a+t,s)},kr.prototype.get=function(t){return this.g.get(this.a+t)},kr.prototype.ra=function(t){this.g.ra(this.a+t)},kr.prototype.ha=function(t){var s=this.g.ha(!0),a=this,c=new ki;return c.next=function(){for(var d=s.next();d.substr(0,a.a.length)!=a.a;)d=s.next();return t?d.substr(a.a.length):a.g.get(d)},c},yl(new ad);var sg,og=new ld;sg=yl(og)?new kr(og,"firebaseui"):null;var cd=new Xs(sg),ud={name:"pendingEmailCredential",storage:cd},Bi={name:"redirectStatus",storage:cd},Zs={name:"redirectUrl",storage:cd},Tr={name:"emailForSignIn",storage:new Xs(new Ir(3600,"/"))},eo={name:"pendingEncryptedCredential",storage:new Xs(new Ir(3600,"/"))};function Rr(t,s){return t.storage.get(s?t.name+":"+s:t.name)}function yt(t,s){t.storage.a.ra(s?t.name+":"+s:t.name)}function Ar(t,s,a){t.storage.set(a?t.name+":"+a:t.name,s)}function ag(t){return Rr(Zs,t)||null}function sn(t){return t=Rr(ud,t)||null,zm(t)}function on(t){yt(ud,t)}function lg(t,s){Ar(ud,Wm(t),s)}function dd(t){return(t=Rr(Bi,t)||null)&&typeof t.tenantId<"u"?new Gm(t.tenantId):null}function oE(t,s){Ar(Bi,{tenantId:t.a},s)}function aE(t,s){s=Rr(Tr,s);var a=null;if(s)try{var c=eg(t,s),d=JSON.parse(c);a=d&&d.email||null}catch{}return a}function lE(t,s){s=Rr(eo,s);var a=null;if(s)try{var c=eg(t,s);a=JSON.parse(c)}catch{}return zm(a||null)}function cE(t,s,a){Ar(eo,Zm(t,JSON.stringify(Wm(s))),a)}function hd(){this.W={}}function je(t,s,a){if(s.toLowerCase()in t.W)throw Error("Configuration "+s+" has already been defined.");t.W[s.toLowerCase()]=a}function fd(t,s,a){if(!(s.toLowerCase()in t.W))throw Error("Configuration "+s+" is not defined.");t.W[s.toLowerCase()]=a}hd.prototype.get=function(t){if(!(t.toLowerCase()in this.W))throw Error("Configuration "+t+" is not defined.");return this.W[t.toLowerCase()]};function pd(t,s){if(t=t.get(s),!t)throw Error("Configuration "+s+" is required.");return t}function md(){this.g=void 0,this.a={}}n=md.prototype,n.set=function(t,s){cg(this,t,s,!1)},n.add=function(t,s){cg(this,t,s,!0)};function cg(t,s,a,c){for(var d=0;d<s.length;d++){var p=s.charAt(d);t.a[p]||(t.a[p]=new md),t=t.a[p]}if(c&&t.g!==void 0)throw Error('The collection already contains the key "'+s+'"');t.g=a}n.get=function(t){e:{for(var s=this,a=0;a<t.length;a++)if(s=s.a[t.charAt(a)],!s){t=void 0;break e}t=s}return t?t.g:void 0},n.la=function(){var t=[];return ug(this,t),t};function ug(t,s){t.g!==void 0&&s.push(t.g);for(var a in t.a)ug(t.a[a],s)}n.ja=function(){var t=[];return dg(this,"",t),t};function dg(t,s,a){t.g!==void 0&&a.push(s);for(var c in t.a)dg(t.a[c],s+c,a)}n.clear=function(){this.a={},this.g=void 0};function hg(t){for(this.a=t,this.g=new md,t=0;t<this.a.length;t++){var s=this.g.get("+"+this.a[t].b);s?s.push(this.a[t]):this.g.add("+"+this.a[t].b,[this.a[t]])}}function bl(t,s){t=t.g;var a={},c=0;for(t.g!==void 0&&(a[c]=t.g);c<s.length;c++){var d=s.charAt(c);if(!(d in t.a))break;t=t.a[d],t.g!==void 0&&(a[c]=t.g)}for(var p in a)if(a.hasOwnProperty(p))return a[p];return[]}function ji(t){for(var s=0;s<_t.length;s++)if(_t[s].c===t)return _t[s];return null}function fg(t){t=t.toUpperCase();for(var s=[],a=0;a<_t.length;a++)_t[a].f===t&&s.push(_t[a]);return s}function pg(t){if(0<t.length&&t.charAt(0)=="+"){t=t.substring(1);for(var s=[],a=0;a<_t.length;a++)_t[a].b==t&&s.push(_t[a]);t=s}else t=fg(t);return t}function mg(t){t.sort(function(s,a){return s.name.localeCompare(a.name,"en")})}var _t=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];mg(_t);var to=new hg(_t);function gg(t,s){this.a=t,this.Aa=s}function vg(t){t=At(t);var s=bl(to,t);return 0<s.length?new gg(s[0].b=="1"?"1-US-0":s[0].c,At(t.substr(s[0].b.length+1))):null}function gd(t){var s=ji(t.a);if(!s)throw Error("Country ID "+t.a+" not found.");return"+"+s.b+t.Aa}function _g(t,s){for(var a=0;a<t.length;a++)if(!jt(yg,t[a])&&(Pr!==null&&t[a]in Pr||jt(s,t[a])))return t[a];return null}var yg=["emailLink","password","phone"],Pr={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function uE(){this.a=new hd,je(this.a,"autoUpgradeAnonymousUsers"),je(this.a,"callbacks"),je(this.a,"credentialHelper",El),je(this.a,"immediateFederatedRedirect",!1),je(this.a,"popupMode",!1),je(this.a,"privacyPolicyUrl"),je(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),je(this.a,"queryParameterForWidgetMode","mode"),je(this.a,"signInFlow"),je(this.a,"signInOptions"),je(this.a,"signInSuccessUrl"),je(this.a,"siteName"),je(this.a,"tosUrl"),je(this.a,"widgetUrl"),je(this.a,"adminRestrictedOperation")}function wl(t){var s=!!t.a.get("autoUpgradeAnonymousUsers");return s&&!Ag(t)&&Ot('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),s}function Il(t){t=t.a.get("signInOptions")||[];for(var s=[],a=0;a<t.length;a++){var c=t[a];c=M(c)?c:{provider:c},c.provider&&s.push(c)}return s}function Dt(t,s){t=Il(t);for(var a=0;a<t.length;a++)if(t[a].provider===s)return t[a];return null}function Nr(t){return Il(t).map(function(s){return s.provider})}function no(t,s){t=bg(t);for(var a=0;a<t.length;a++)if(t[a].providerId===s)return t[a];return null}function bg(t){return Il(t).map(function(s){if(Pr[s.provider]||jt(bE,s.provider)){s={providerId:s.provider,S:s.providerName||null,V:s.fullLabel||null,ta:s.buttonColor||null,za:s.iconUrl?Qn(Ba(s.iconUrl)).toString():null};for(var a in s)s[a]===null&&delete s[a];return s}return{providerId:s.provider,S:s.providerName||null,V:s.fullLabel||null,ta:s.buttonColor||null,za:s.iconUrl?Qn(Ba(s.iconUrl)).toString():null,Ob:s.loginHintKey||null}})}function wg(t){var s=Dt(t,V.auth.GoogleAuthProvider.PROVIDER_ID),a;if(a=s&&s.clientId){e:{if((window.location&&window.location.protocol)==="http:"||(window.location&&window.location.protocol)==="https:"){for(c in t=t.a.get("credentialHelper"),wd)if(wd[c]===t){var c=wd[c];break e}}c=El}a=c===bd}return a&&s.clientId||null}function Ig(t){return t=Dt(t,V.auth.EmailAuthProvider.PROVIDER_ID),!!(t&&t.disableSignUp&&t.disableSignUp.status)}function Vi(t){return t=t.a.get("adminRestrictedOperation")||null,!(!t||!t.status)}function dE(t){var s=null;if(Il(t).forEach(function(c){c.provider==V.auth.PhoneAuthProvider.PROVIDER_ID&&M(c.recaptchaParameters)&&!Array.isArray(c.recaptchaParameters)&&(s=gu(c.recaptchaParameters))}),s){var a=[];wE.forEach(function(c){typeof s[c]<"u"&&(a.push(c),delete s[c])}),a.length&&ri('The following provided "recaptchaParameters" keys are not allowed: '+a.join(", "))}return s}function hE(t){return(t=t.a.get("adminRestrictedOperation"))&&t.adminEmail?t.adminEmail:null}function fE(t){if(t=t.a.get("adminRestrictedOperation")||null){var s=t.helpLink||null;if(s&&typeof s=="string")return function(){wr(s)}}return null}function pE(t){return(t=Dt(t,V.auth.EmailAuthProvider.PROVIDER_ID))&&t.disableSignUp&&t.disableSignUp.adminEmail||null}function mE(t){if((t=Dt(t,V.auth.EmailAuthProvider.PROVIDER_ID))&&t.disableSignUp){var s=t.disableSignUp.helpLink||null;if(s&&typeof s=="string")return function(){wr(s)}}return null}function Eg(t,s){return t=(t=Dt(t,s))&&t.scopes,Array.isArray(t)?t:[]}function Cg(t,s){return t=(t=Dt(t,s))&&t.customParameters,M(t)?(t=gu(t),s===V.auth.GoogleAuthProvider.PROVIDER_ID&&delete t.login_hint,s===V.auth.GithubAuthProvider.PROVIDER_ID&&delete t.login,t):null}function gE(t){t=Dt(t,V.auth.PhoneAuthProvider.PROVIDER_ID);var s=null;return t&&typeof t.loginHint=="string"&&(s=vg(t.loginHint)),t&&t.defaultNationalNumber||s&&s.Aa||null}function vE(t){var s=(t=Dt(t,V.auth.PhoneAuthProvider.PROVIDER_ID))&&t.defaultCountry||null;s=s&&fg(s);var a=null;return t&&typeof t.loginHint=="string"&&(a=vg(t.loginHint)),s&&s[0]||a&&ji(a.a)||null}function vd(t){if(t=Dt(t,V.auth.PhoneAuthProvider.PROVIDER_ID),!t)return null;var s=t.whitelistedCountries,a=t.blacklistedCountries;if(typeof s<"u"&&(!Array.isArray(s)||s.length==0))throw Error("WhitelistedCountries must be a non-empty array.");if(typeof a<"u"&&!Array.isArray(a))throw Error("BlacklistedCountries must be an array.");if(s&&a)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!s&&!a)return _t;if(t=[],s){a={};for(var c=0;c<s.length;c++)for(var d=pg(s[c]),p=0;p<d.length;p++)a[d[p].c]=d[p];for(var v in a)a.hasOwnProperty(v)&&t.push(a[v])}else{for(v={},s=0;s<a.length;s++)for(d=pg(a[s]),c=0;c<d.length;c++)v[d[c].c]=d[c];for(d=0;d<_t.length;d++)v!==null&&_t[d].c in v||t.push(_t[d])}return t}function Sg(t){return pd(t.a,"queryParameterForWidgetMode")}function Ve(t){var s=t.a.get("tosUrl")||null;if(t=t.a.get("privacyPolicyUrl")||null,s&&!t&&ri("Privacy Policy URL is missing, the link will not be displayed."),s&&t){if(typeof s=="function")return s;if(typeof s=="string")return function(){wr(s)}}return null}function He(t){var s=t.a.get("tosUrl")||null,a=t.a.get("privacyPolicyUrl")||null;if(a&&!s&&ri("Term of Service URL is missing, the link will not be displayed."),s&&a){if(typeof a=="function")return a;if(typeof a=="string")return function(){wr(a)}}return null}function kg(t){return(t=Dt(t,V.auth.EmailAuthProvider.PROVIDER_ID))&&typeof t.requireDisplayName<"u"?!!t.requireDisplayName:!0}function Or(t){return t=Dt(t,V.auth.EmailAuthProvider.PROVIDER_ID),!(!t||t.signInMethod!==V.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function _E(t){return t=Dt(t,V.auth.EmailAuthProvider.PROVIDER_ID),!(!t||!t.forceSameDevice)}function yE(t){if(Or(t)){var s={url:En(),handleCodeInApp:!0};(t=Dt(t,V.auth.EmailAuthProvider.PROVIDER_ID))&&typeof t.emailLinkSignIn=="function"&&La(s,t.emailLinkSignIn()),t=s.url;var a=En();a instanceof Kn||(a=bu(a)),t instanceof Kn||(t=bu(t));var c=a;a=new Kn(c);var d=!!t.j;d?vu(a,t.j):d=!!t.A,d?a.A=t.A:d=!!t.h,d?a.h=t.h:d=t.C!=null;var p=t.g;if(d)_u(a,t.C);else if(d=!!t.g){if(p.charAt(0)!="/"&&(c.h&&!c.g?p="/"+p:(c=a.g.lastIndexOf("/"),c!=-1&&(p=a.g.substr(0,c+1)+p))),p==".."||p==".")p="";else if(p.indexOf("./")!=-1||p.indexOf("/.")!=-1){c=p.lastIndexOf("/",0)==0,p=p.split("/");for(var v=[],w=0;w<p.length;){var k=p[w++];k=="."?c&&w==p.length&&v.push(""):k==".."?((1<v.length||v.length==1&&v[0]!="")&&v.pop(),c&&w==p.length&&v.push("")):(v.push(k),c=!0)}p=v.join("/")}}return d?a.g=p:d=t.a.toString()!=="",d?yu(a,Tp(t.a)):d=!!t.s,d&&(a.s=t.s),s.url=a.toString(),s}return null}function _d(t){var s=!!t.a.get("immediateFederatedRedirect"),a=Nr(t);return t=Tg(t),s&&a.length==1&&!jt(yg,a[0])&&t==Cl}function Tg(t){t=t.a.get("signInFlow");for(var s in Id)if(Id[s]==t)return Id[s];return Cl}function yd(t){return io(t).signInSuccess||null}function Rg(t){return io(t).signInSuccessWithAuthResult||null}function Ag(t){return io(t).signInFailure||null}function io(t){return t.a.get("callbacks")||{}}var bd="googleyolo",El="none",wd={nc:bd,NONE:El},Cl="redirect",Id={qc:"popup",rc:Cl},Ed={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},bE=["anonymous"],wE=["sitekey","tabindex","callback","expired-callback"],ro,Dr,Cd,Pg,ve={};function U(t,s,a,c){ve[t].apply(null,Array.prototype.slice.call(arguments,1))}function Ng(t){return t.classList?t.classList:(t=t.className,S(t)&&t.match(/\S+/g)||[])}function so(t,s){return t.classList?t.classList.contains(s):jt(Ng(t),s)}function an(t,s){t.classList?t.classList.add(s):so(t,s)||(t.className+=0<t.className.length?" "+s:s)}function ln(t,s){t.classList?t.classList.remove(s):so(t,s)&&(t.className=Oa(Ng(t),function(a){return a!=s}).join(" "))}function nt(t){var s=t.type;switch(S(s)&&s.toLowerCase()){case"checkbox":case"radio":return t.checked?t.value:null;case"select-one":return s=t.selectedIndex,0<=s?t.options[s].value:null;case"select-multiple":s=[];for(var a,c=0;a=t.options[c];c++)a.selected&&s.push(a.value);return s.length?s:null;default:return t.value!=null?t.value:null}}function Og(t,s){var a=t.type;switch(S(a)&&a.toLowerCase()){case"checkbox":case"radio":t.checked=s;break;case"select-one":if(t.selectedIndex=-1,S(s)){for(var c=0;a=t.options[c];c++)if(a.value==s){a.selected=!0;break}}break;case"select-multiple":for(S(s)&&(s=[s]),c=0;a=t.options[c];c++)if(a.selected=!1,s)for(var d,p=0;d=s[p];p++)a.value==d&&(a.selected=!0);break;default:t.value=s??""}}function IE(t){if(t.altKey&&!t.ctrlKey||t.metaKey||112<=t.keyCode&&123>=t.keyCode)return!1;if(oo(t.keyCode))return!0;switch(t.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!Gt;default:return 166>t.keyCode||183<t.keyCode}}function Dg(t,s,a,c,d,p){if(mt&&!Pi("525"))return!0;if(Jn&&d)return oo(t);if(d&&!c)return!1;if(!Gt){typeof s=="number"&&(s=Sd(s));var v=s==17||s==18||Jn&&s==91;if((!a||Jn)&&v||Jn&&s==16&&(c||p))return!1}if((mt||Yn)&&c&&a)switch(t){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(Le&&c&&s==t)return!1;switch(t){case 13:return Gt?p||d?!1:!(a&&c):!0;case 27:return!(mt||Yn||Gt)}return Gt&&(c||d||p)?!1:oo(t)}function oo(t){if(48<=t&&57>=t||96<=t&&106>=t||65<=t&&90>=t||(mt||Yn)&&t==0)return!0;switch(t){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return Gt;default:return!1}}function Sd(t){if(Gt)t=EE(t);else if(Jn&&mt)switch(t){case 93:t=91}return t}function EE(t){switch(t){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return t}}function Lr(t){Ke.call(this),this.a=t,qt(t,"keydown",this.g,!1,this),qt(t,"click",this.h,!1,this)}Y(Lr,Ke),Lr.prototype.g=function(t){(t.keyCode==13||mt&&t.keyCode==3)&&Lg(this,t)},Lr.prototype.h=function(t){Lg(this,t)};function Lg(t,s){var a=new xg(s);if(ni(t,a)){a=new Mg(s);try{ni(t,a)}finally{s.stopPropagation()}}}Lr.prototype.o=function(){Lr.K.o.call(this),Mi(this.a,"keydown",this.g,!1,this),Mi(this.a,"click",this.h,!1,this),delete this.a};function Mg(t){vt.call(this,t.a),this.type="action"}Y(Mg,vt);function xg(t){vt.call(this,t.a),this.type="beforeaction"}Y(xg,vt);function Mr(t){Ke.call(this),this.a=t,t=Le?"focusout":"blur",this.g=qt(this.a,Le?"focusin":"focus",this,!Le),this.h=qt(this.a,t,this,!Le)}Y(Mr,Ke),Mr.prototype.handleEvent=function(t){var s=new vt(t.a);s.type=t.type=="focusin"||t.type=="focus"?"focusin":"focusout",ni(this,s)},Mr.prototype.o=function(){Mr.K.o.call(this),ti(this.g),ti(this.h),delete this.a};function Sl(t,s){Ke.call(this),this.g=t||1,this.a=s||g,this.h=Q(this.gc,this),this.j=Be()}Y(Sl,Ke),n=Sl.prototype,n.Ka=!1,n.aa=null,n.gc=function(){if(this.Ka){var t=Be()-this.j;0<t&&t<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-t):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),ni(this,"tick"),this.Ka&&(kl(this),this.start()))}},n.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=Be())};function kl(t){t.Ka=!1,t.aa&&(t.a.clearTimeout(t.aa),t.aa=null)}n.o=function(){Sl.K.o.call(this),kl(this),delete this.a};function CE(t,s){if($(t))s&&(t=Q(t,s));else if(t&&typeof t.handleEvent=="function")t=Q(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<0?-1:g.setTimeout(t,0)}function xr(t){Li.call(this),this.g=t,this.a={}}Y(xr,Li);var Fg=[];function Fr(t,s,a,c){R(a)||(a&&(Fg[0]=a.toString()),a=Fg);for(var d=0;d<a.length;d++){var p=qt(s,a[d],c||t.handleEvent,!1,t.g||t);if(!p)break;t.a[p.key]=p}}function Ug(t){bp(t.a,function(s,a){this.a.hasOwnProperty(a)&&ti(s)},t),t.a={}}xr.prototype.o=function(){xr.K.o.call(this),Ug(this)},xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ao(t){Ke.call(this),this.a=null,this.g=t,t=Le||Yn||mt&&!Pi("531")&&t.tagName=="TEXTAREA",this.h=new xr(this),Fr(this.h,this.g,t?["keydown","paste","cut","drop","input"]:"input",this)}Y(ao,Ke),ao.prototype.handleEvent=function(t){if(t.type=="input")Le&&Pi(10)&&t.keyCode==0&&t.j==0||(kd(this),ni(this,Bg(t)));else if(t.type!="keydown"||IE(t)){var s=t.type=="keydown"?this.g.value:null;Le&&t.keyCode==229&&(s=null);var a=Bg(t);kd(this),this.a=CE(function(){this.a=null,this.g.value!=s&&ni(this,a)},this)}};function kd(t){t.a!=null&&(g.clearTimeout(t.a),t.a=null)}function Bg(t){return t=new vt(t.a),t.type="input",t}ao.prototype.o=function(){ao.K.o.call(this),this.h.m(),kd(this),delete this.g};function lo(t,s){Ke.call(this),t&&(this.Oa&&zg(this),this.qa=t,this.Na=qt(this.qa,"keypress",this,s),this.Ya=qt(this.qa,"keydown",this.Jb,s,this),this.Oa=qt(this.qa,"keyup",this.Kb,s,this))}Y(lo,Ke),n=lo.prototype,n.qa=null,n.Na=null,n.Ya=null,n.Oa=null,n.R=-1,n.X=-1,n.Ua=!1;var jg={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Vg={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Hg=!mt||Pi("525"),Wg=Jn&&Gt;n=lo.prototype,n.Jb=function(t){(mt||Yn)&&(this.R==17&&!t.ctrlKey||this.R==18&&!t.altKey||Jn&&this.R==91&&!t.metaKey)&&(this.X=this.R=-1),this.R==-1&&(t.ctrlKey&&t.keyCode!=17?this.R=17:t.altKey&&t.keyCode!=18?this.R=18:t.metaKey&&t.keyCode!=91&&(this.R=91)),Hg&&!Dg(t.keyCode,this.R,t.shiftKey,t.ctrlKey,t.altKey,t.metaKey)?this.handleEvent(t):(this.X=Sd(t.keyCode),Wg&&(this.Ua=t.altKey))},n.Kb=function(t){this.X=this.R=-1,this.Ua=t.altKey},n.handleEvent=function(t){var s=t.a,a=s.altKey;if(Le&&t.type=="keypress")var c=this.X,d=c!=13&&c!=27?s.keyCode:0;else(mt||Yn)&&t.type=="keypress"?(c=this.X,d=0<=s.charCode&&63232>s.charCode&&oo(c)?s.charCode:0):Dp&&!mt?(c=this.X,d=oo(c)?s.keyCode:0):(t.type=="keypress"?(Wg&&(a=this.Ua),s.keyCode==s.charCode?32>s.keyCode?(c=s.keyCode,d=0):(c=this.X,d=s.charCode):(c=s.keyCode||this.X,d=s.charCode||0)):(c=s.keyCode||this.X,d=s.charCode||0),Jn&&d==63&&c==224&&(c=191));var p=c=Sd(c);c?63232<=c&&c in jg?p=jg[c]:c==25&&t.shiftKey&&(p=9):s.keyIdentifier&&s.keyIdentifier in Vg&&(p=Vg[s.keyIdentifier]),Gt&&Hg&&t.type=="keypress"&&!Dg(p,this.R,t.shiftKey,t.ctrlKey,a,t.metaKey)||(t=p==this.R,this.R=p,s=new Gg(p,d,t,s),s.altKey=a,ni(this,s))},n.N=function(){return this.qa};function zg(t){t.Na&&(ti(t.Na),ti(t.Ya),ti(t.Oa),t.Na=null,t.Ya=null,t.Oa=null),t.qa=null,t.R=-1,t.X=-1}n.o=function(){lo.K.o.call(this),zg(this)};function Gg(t,s,a,c){vt.call(this,c),this.type="key",this.keyCode=t,this.j=s,this.repeat=a}Y(Gg,vt);function Ur(t,s,a,c){this.top=t,this.right=s,this.bottom=a,this.left=c}Ur.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},Ur.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},Ur.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},Ur.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};function Tl(t,s){var a=Bs(t);return a.defaultView&&a.defaultView.getComputedStyle&&(t=a.defaultView.getComputedStyle(t,null))&&(t[s]||t.getPropertyValue(s))||""}function qg(t){try{var s=t.getBoundingClientRect()}catch{return{left:0,top:0,right:0,bottom:0}}return Le&&t.ownerDocument.body&&(t=t.ownerDocument,s.left-=t.documentElement.clientLeft+t.body.clientLeft,s.top-=t.documentElement.clientTop+t.body.clientTop),s}function SE(t,s){s=s||Ha(document);var a=s||Ha(document),c=Kg(t),d=Kg(a);if(!Le||9<=Number(Fs)){v=Tl(a,"borderLeftWidth");var p=Tl(a,"borderRightWidth");w=Tl(a,"borderTopWidth"),k=Tl(a,"borderBottomWidth"),p=new Ur(parseFloat(w),parseFloat(p),parseFloat(k),parseFloat(v))}else{var v=Rl(a,"borderLeft");p=Rl(a,"borderRight");var w=Rl(a,"borderTop"),k=Rl(a,"borderBottom");p=new Ur(w,p,k,v)}a==Ha(document)?(v=c.a-a.scrollLeft,c=c.g-a.scrollTop,!Le||10<=Number(Fs)||(v+=p.left,c+=p.top)):(v=c.a-d.a-p.left,c=c.g-d.g-p.top),d=t.offsetWidth,p=t.offsetHeight,w=mt&&!d&&!p,b(d)&&!w||!t.getBoundingClientRect?t=new ku(d,p):(t=qg(t),t=new ku(t.right-t.left,t.bottom-t.top)),d=a.clientHeight-t.height,p=a.scrollLeft,w=a.scrollTop,p+=Math.min(v,Math.max(v-(a.clientWidth-t.width),0)),w+=Math.min(c,Math.max(c-d,0)),a=new Zn(p,w),s.scrollLeft=a.a,s.scrollTop=a.g}function Kg(t){var s=Bs(t),a=new Zn(0,0),c=s?Bs(s):document;return c=!Le||9<=Number(Fs)||Va(c).a.compatMode=="CSS1Compat"?c.documentElement:c.body,t==c||(t=qg(t),c=Va(s).a,s=Ha(c),c=c.parentWindow||c.defaultView,s=Le&&Pi("10")&&c.pageYOffset!=s.scrollTop?new Zn(s.scrollLeft,s.scrollTop):new Zn(c.pageXOffset||s.scrollLeft,c.pageYOffset||s.scrollTop),a.a=t.left+s.a,a.g=t.top+s.g),a}var $g={thin:2,medium:4,thick:6};function Rl(t,s){if((t.currentStyle?t.currentStyle[s+"Style"]:null)=="none")return 0;var a=t.currentStyle?t.currentStyle[s+"Width"]:null;if(a in $g)t=$g[a];else if(/^\d+px?$/.test(a))t=parseInt(a,10);else{s=t.style.left;var c=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left,t.style.left=a,a=t.style.pixelLeft,t.style.left=s,t.runtimeStyle.left=c,t=+a}return t}function Td(){}E(Td),Td.prototype.a=0;function Hi(t){Ke.call(this),this.s=t||Va(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}Y(Hi,Ke),n=Hi.prototype,n.Lb=Td.Xa(),n.N=function(){return this.g};function fe(t,s){return t.g?Ru(s,t.g||t.s.a):null}function co(t){return t.L||(t.L=new xr(t)),t.L}n.Za=function(t){if(this.Y&&this.Y!=t)throw Error("Method not supported");Hi.K.Za.call(this,t)},n.kb=function(){this.g=this.s.a.createElement("DIV")},n.render=function(t){if(this.na)throw Error("Component already rendered");this.g||this.kb(),t?t.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},n.v=function(){this.na=!0,Rd(this,function(t){!t.na&&t.N()&&t.v()})},n.ya=function(){Rd(this,function(t){t.na&&t.ya()}),this.L&&Ug(this.L),this.na=!1},n.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Rd(this,function(t){t.m()}),this.g&&Oi(this.g),this.Y=this.g=this.oa=this.Ea=null,Hi.K.o.call(this)};function Rd(t,s){t.Ea&&zt(t.Ea,s,void 0)}n.removeChild=function(t,s){if(t){var a=S(t)?t:t.cb||(t.cb=":"+(t.Lb.a++).toString(36));if(this.oa&&a?(t=this.oa,t=(t!==null&&a in t?t[a]:void 0)||null):t=null,a&&t){var c=this.oa;if(a in c&&delete c[a],vp(this.Ea,t),s&&(t.ya(),t.g&&Oi(t.g)),s=t,s==null)throw Error("Unable to set parent component");s.Y=null,Hi.K.Za.call(s,null)}}if(!t)throw Error("Child is not in parent component");return t};function Fe(t,s){var a=Kp(t,"firebaseui-textfield");s?(ln(t,"firebaseui-input-invalid"),an(t,"firebaseui-input"),a&&ln(a,"firebaseui-textfield-invalid")):(ln(t,"firebaseui-input"),an(t,"firebaseui-input-invalid"),a&&an(a,"firebaseui-textfield-invalid"))}function Br(t,s,a){s=new ao(s),Hs(t,Te(Ws,s)),Fr(co(t),s,"input",a)}function uo(t,s,a){s=new lo(s),Hs(t,Te(Ws,s)),Fr(co(t),s,"key",function(c){c.keyCode==13&&(c.stopPropagation(),c.preventDefault(),a(c))})}function kE(t,s,a){s=new Mr(s),Hs(t,Te(Ws,s)),Fr(co(t),s,"focusin",a)}function TE(t,s,a){s=new Mr(s),Hs(t,Te(Ws,s)),Fr(co(t),s,"focusout",a)}function Ne(t,s,a){s=new Lr(s),Hs(t,Te(Ws,s)),Fr(co(t),s,"action",function(c){c.stopPropagation(),c.preventDefault(),a(c)})}function Lt(t){an(t,"firebaseui-hidden")}function it(t,s){s&&Au(t,s),ln(t,"firebaseui-hidden")}function jr(t){return!so(t,"firebaseui-hidden")&&t.style.display!="none"}function Vr(t){t=t||{};var s=t.email,a=t.disabled,c='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return c=t.wc?c+"Enter new email address":c+"Email",c+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+gt(s??"")+'"'+(a?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',x(c)}function bt(t){t=t||{},t=t.label;var s='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return s=t?s+q(t):s+"Next",x(s+"</button>")}function Ad(){var t=""+bt({label:Me("Sign In")});return x(t)}function Yg(){var t=""+bt({label:Me("Save")});return x(t)}function Kt(){var t=""+bt({label:Me("Continue")});return x(t)}function Jg(t){t=t||{},t=t.label;var s='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return s=t?s+q(t):s+"Choose password",x(s+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function Qg(){var t={},s='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return s=t.current?s+"Current password":s+"Password",x(s+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function Xg(){return x('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function Mt(t){t=t||{},t=t.label;var s='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return s=t?s+q(t):s+"Cancel",x(s+"</button>")}function ct(t){var s="";return t.F&&t.D&&(s+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),x(s)}function Hr(t){var s="";return t.F&&t.D&&(s+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),x(s)}function Zg(t){return t='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+q(t.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',x(t)}Zg.a="firebaseui.auth.soy2.element.infoBar";function ev(t){var s=t.content;return t=t.Ab,x('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(t?" "+gt(t):"")+'">'+q(s)+"</dialog>")}function tv(t){var s=t.message;return x(ev({content:Jp('<div class="firebaseui-dialog-icon-wrapper"><div class="'+gt(t.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+q(s)+"</div>")}))}tv.a="firebaseui.auth.soy2.element.progressDialog";function nv(t){var s='<div class="firebaseui-list-box-actions">';t=t.items;for(var a=t.length,c=0;c<a;c++){var d=t[c];s+='<button type="button" data-listboxid="'+gt(d.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(d.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+gt(d.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+q(d.label)+"</div></button>"}return s=""+ev({Ab:Me("firebaseui-list-box-dialog"),content:Jp(s+"</div>")}),x(s)}nv.a="firebaseui.auth.soy2.element.listBoxDialog";function Al(t){return t=t||{},x(t.tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}Al.a="firebaseui.auth.soy2.element.busyIndicator";function si(t,s){return t=t||{},t=t.ga,me(t.S?t.S:s.hb[t.providerId]?""+s.hb[t.providerId]:t.providerId&&t.providerId.indexOf("saml.")==0||t.providerId&&t.providerId.indexOf("oidc.")==0?t.providerId.substring(5):""+t.providerId)}function Pd(t){iv(t,"upgradeElement")}function Nd(t){iv(t,"downgradeElements")}var RE=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function iv(t,s){t&&window.componentHandler&&window.componentHandler[s]&&RE.forEach(function(a){so(t,a)&&window.componentHandler[s](t),zt(Tu(a,t),function(c){window.componentHandler[s](c)})})}function rv(t,s,a){if(Pl.call(this),document.body.appendChild(t),t.showModal||window.dialogPolyfill.registerDialog(t),t.showModal(),Pd(t),s&&Ne(this,t,function(p){var v=t.getBoundingClientRect();(p.clientX<v.left||v.left+v.width<p.clientX||p.clientY<v.top||v.top+v.height<p.clientY)&&Pl.call(this)}),!a){var c=this.N().parentElement||this.N().parentNode;if(c){var d=this;this.da=function(){if(t.open){var p=t.getBoundingClientRect().height,v=c.getBoundingClientRect().height,w=c.getBoundingClientRect().top-document.body.getBoundingClientRect().top,k=c.getBoundingClientRect().left-document.body.getBoundingClientRect().left,N=t.getBoundingClientRect().width,j=c.getBoundingClientRect().width;t.style.top=(w+(v-p)/2).toString()+"px",p=k+(j-N)/2,t.style.left=p.toString()+"px",t.style.right=(document.body.getBoundingClientRect().width-p-N).toString()+"px"}else window.removeEventListener("resize",d.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Pl(){var t=Od.call(this);t&&(Nd(t),t.open&&t.close(),Oi(t),this.da&&window.removeEventListener("resize",this.da))}function Od(){return Ru("firebaseui-id-dialog")}function sv(){Oi(ov.call(this))}function ov(){return fe(this,"firebaseui-id-info-bar")}function av(){return fe(this,"firebaseui-id-dismiss-info-bar")}var AE={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function Dd(t,s,a){wn.call(this,t,s);for(var c in a)this[c]=a[c]}Y(Dd,wn);function A(t,s,a,c,d){Hi.call(this,a),this.fb=t,this.eb=s,this.Fa=!1,this.Ga=c||null,this.A=this.ca=null,this.Z=gu(AE),La(this.Z,d||{})}Y(A,Hi),n=A.prototype,n.kb=function(){var t=js(this.fb,this.eb,this.Z,this.s);Pd(t),this.g=t},n.v=function(){if(A.K.v.call(this),cm(Ae(this),new Dd("pageEnter",Ae(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var t=this.Z.F;Ne(this,this.bb(),function(){t()})}if(this.ab()&&this.Z.D){var s=this.Z.D;Ne(this,this.ab(),function(){s()})}},n.ya=function(){cm(Ae(this),new Dd("pageExit",Ae(this),{pageId:this.Ga})),A.K.ya.call(this)},n.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,Nd(this.N()),A.K.o.call(this)};function PE(t){t.Fa=!0;var s=so(t.N(),"firebaseui-use-spinner");t.ca=window.setTimeout(function(){t.N()&&t.A===null&&(t.A=js(Al,{tb:s},null,t.s),t.N().appendChild(t.A),Pd(t.A))},500)}n.I=function(t,s,a,c){function d(){if(p.T)return null;p.Fa=!1,window.clearTimeout(p.ca),p.ca=null,p.A&&(Nd(p.A),Oi(p.A),p.A=null)}var p=this;return p.Fa?null:(PE(p),t.apply(null,s).then(a,c).then(d,d))};function Ae(t){return t.N().parentElement||t.N().parentNode}function ho(t,s,a){uo(t,s,function(){a.focus()})}function Wr(t,s,a){uo(t,s,function(){a()})}ie(A.prototype,{a:function(t){sv.call(this);var s=js(Zg,{message:t},null,this.s);this.N().appendChild(s),Ne(this,av.call(this),function(){Oi(s)})},yc:sv,Ac:ov,zc:av,$:function(t,s){t=js(tv,{Ma:t,message:s},null,this.s),rv.call(this,t)},h:Pl,Cb:Od,Cc:function(){return fe(this,"firebaseui-tos")},bb:function(){return fe(this,"firebaseui-tos-link")},ab:function(){return fe(this,"firebaseui-pp-link")},Dc:function(){return fe(this,"firebaseui-tos-list")}});function lv(t,s,a){t=t||{},s=t.Va;var c=t.ia;return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Vr(t)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?Mt(null):"")+bt(null)+'</div></div><div class="firebaseui-card-footer">'+(c?Hr(a):ct(a))+"</div></form></div>",x(t)}lv.a="firebaseui.auth.soy2.page.signIn";function cv(t,s,a){return t=t||{},s=t.ia,t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+Vr(t)+Qg()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+Xg()+'</div><div class="firebaseui-form-actions">'+Ad()+'</div></div><div class="firebaseui-card-footer">'+(s?Hr(a):ct(a))+"</div></form></div>",x(t)}cv.a="firebaseui.auth.soy2.page.passwordSignIn";function uv(t,s,a){t=t||{};var c=t.Tb;s=t.Ta;var d=t.ia,p='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+Vr(t);return c?(t=t||{},t=t.name,t='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+gt(t??"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',t=x(t)):t="",a=p+t+Jg(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?Mt(null):"")+Yg()+'</div></div><div class="firebaseui-card-footer">'+(d?Hr(a):ct(a))+"</div></form></div>",x(a)}uv.a="firebaseui.auth.soy2.page.passwordSignUp";function dv(t,s,a){return t=t||{},s=t.Ta,t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+Vr(t)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?Mt(null):"")+bt({label:Me("Send")})+'</div></div><div class="firebaseui-card-footer">'+ct(a)+"</div></form></div>",x(t)}dv.a="firebaseui.auth.soy2.page.passwordRecovery";function hv(t,s,a){s=t.G;var c="";return t="Follow the instructions sent to <strong>"+(q(t.email)+"</strong> to recover your password"),c+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions">',s&&(c+='<div class="firebaseui-form-actions">'+bt({label:Me("Done")})+"</div>"),c+='</div><div class="firebaseui-card-footer">'+ct(a)+"</div></div>",x(c)}hv.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent";function fv(t,s,a){return x('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+Al(null)+"</div></div>")}fv.a="firebaseui.auth.soy2.page.callback";function pv(t,s,a){return x('<div class="firebaseui-container firebaseui-id-page-spinner">'+Al({tb:!0})+"</div>")}pv.a="firebaseui.auth.soy2.page.spinner";function mv(){return x('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}mv.a="firebaseui.auth.soy2.page.blank";function gv(t,s,a){s="",t="A sign-in email with additional instructions was sent to <strong>"+(q(t.email)+"</strong>. Check your email to complete sign-in.");var c=x('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');return s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+c+'</div><div class="firebaseui-form-actions">'+Mt({label:Me("Back")})+'</div></div><div class="firebaseui-card-footer">'+ct(a)+"</div></form></div>",x(s)}gv.a="firebaseui.auth.soy2.page.emailLinkSignInSent";function vv(t,s,a){return t=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn't work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">`+x('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+Mt({label:Me("Back")})+'</div></div><div class="firebaseui-card-footer">'+ct(a)+"</div></form></div>",x(t)}vv.a="firebaseui.auth.soy2.page.emailNotReceived";function _v(t,s,a){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+Vr(t)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Mt(null)+bt(null)+'</div></div><div class="firebaseui-card-footer">'+ct(a)+"</div></form></div>",x(t)}_v.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation";function yv(){var t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Mt({label:Me("Dismiss")})+"</div></div></div>";return x(t)}yv.a="firebaseui.auth.soy2.page.differentDeviceError";function bv(){var t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Mt({label:Me("Dismiss")})+"</div></div></div>";return x(t)}bv.a="firebaseui.auth.soy2.page.anonymousUserMismatch";function wv(t,s,a){return s="",t="You’ve already used <strong>"+(q(t.email)+"</strong> to sign in. Enter your password for that account."),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+t+"</p>"+Qg()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+Xg()+'</div><div class="firebaseui-form-actions">'+Ad()+'</div></div><div class="firebaseui-card-footer">'+ct(a)+"</div></form></div>",x(s)}wv.a="firebaseui.auth.soy2.page.passwordLinking";function Iv(t,s,a){var c=t.email;return s="",t=""+si(t,a),t=Me(t),c="You’ve already used <strong>"+(q(c)+("</strong>. You can connect your <strong>"+(q(t)+("</strong> account with <strong>"+(q(c)+"</strong> by signing in with email link below."))))),t="For this flow to successfully connect your "+(q(t)+" account with this email, you have to open the link on the same device or browser."),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+c+'<p class="firebaseui-text firebaseui-text-justify">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Ad()+'</div></div><div class="firebaseui-card-footer">'+ct(a)+"</div></form></div>",x(s)}Iv.a="firebaseui.auth.soy2.page.emailLinkSignInLinking";function Ev(t,s,a){s="";var c=""+si(t,a);return c=Me(c),t="You originally intended to connect <strong>"+(q(c)+"</strong> to your email account but have opened the link on a different device where you are not signed in."),c="If you still want to connect your <strong>"+(q(c)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device."),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+t+'</p><p class="firebaseui-text firebaseui-text-justify">'+c+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Kt()+'</div></div><div class="firebaseui-card-footer">'+ct(a)+"</div></form></div>",x(s)}Ev.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice";function Cv(t,s,a){var c=t.email;return s="",t=""+si(t,a),t=Me(t),c="You’ve already used <strong>"+(q(c)+("</strong>. Sign in with "+(q(t)+" to continue."))),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+c+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+bt({label:Me("Sign in with "+t)})+'</div></div><div class="firebaseui-card-footer">'+ct(a)+"</div></form></div>",x(s)}Cv.a="firebaseui.auth.soy2.page.federatedLinking";function Sv(t,s,a){t=t||{};var c=t.kc;s=t.yb,t=t.Eb;var d='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return c?(c="<strong>"+(q(c)+"</strong> is not authorized to view the requested page."),d+=c):d+="User is not authorized to view the requested page.",d+="</p>",s&&(s="Please contact <strong>"+(q(s)+"</strong> for authorization."),d+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+s+"</p>"),d+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',t&&(d+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),d+='</div><div class="firebaseui-form-actions">'+Mt({label:Me("Back")})+'</div></div><div class="firebaseui-card-footer">'+ct(a)+"</div></form></div>",x(d)}Sv.a="firebaseui.auth.soy2.page.unauthorizedUser";function kv(t,s,a){return s="",t="To continue sign in with <strong>"+(q(t.email)+"</strong> on this device, you have to recover the password."),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Mt(null)+bt({label:Me("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+ct(a)+"</div></form></div>",x(s)}kv.a="firebaseui.auth.soy2.page.unsupportedProvider";function Tv(t){var s="",a='<p class="firebaseui-text">for <strong>'+(q(t.email)+"</strong></p>");return s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+a+Jg(_I(t))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Yg()+"</div></div></form></div>",x(s)}Tv.a="firebaseui.auth.soy2.page.passwordReset";function Rv(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",x(t)}Rv.a="firebaseui.auth.soy2.page.passwordResetSuccess";function Av(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",x(t)}Av.a="firebaseui.auth.soy2.page.passwordResetFailure";function Pv(t){var s=t.G,a="";return t="Your sign-in email address has been changed back to <strong>"+(q(t.email)+"</strong>."),a+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(s?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></form></div>",x(a)}Pv.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess";function Nv(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",x(t)}Nv.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure";function Ov(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",x(t)}Ov.a="firebaseui.auth.soy2.page.emailVerificationSuccess";function Dv(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",x(t)}Dv.a="firebaseui.auth.soy2.page.emailVerificationFailure";function Lv(t){var s=t.G,a="";return t="You can now sign in with your new email <strong>"+(q(t.email)+"</strong>."),a+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+'</p></div><div class="firebaseui-card-actions">'+(s?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",x(a)}Lv.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess";function Mv(t){return t=t||{},t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+(t.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",x(t)}Mv.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure";function xv(t){var s=t.factorId,a=t.phoneNumber;t=t.G;var c='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';switch(s){case"phone":s="The <strong>"+(q(s)+(" "+(q(a)+"</strong> was removed as a second authentication step."))),c+=s;break;default:c+="The device or app was removed as a second authentication step."}return c+=`</p><p class="firebaseui-text">If you don't recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">`+(t?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></form></div>",x(c)}xv.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess";function Fv(t){return t=t||{},t=`<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn't remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn't work, contact support for assistance.</p></div><div class="firebaseui-card-actions">`+(t.G?'<div class="firebaseui-form-actions">'+Kt()+"</div>":"")+"</div></div>",x(t)}Fv.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure";function Uv(t){var s=t.zb;return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+q(t.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',s&&(t+=bt({label:Me("Retry")})),x(t+"</div></div></div>")}Uv.a="firebaseui.auth.soy2.page.recoverableError";function Bv(t){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+q(t.errorMessage)+"</p></div></div>",x(t)}Bv.a="firebaseui.auth.soy2.page.unrecoverableError";function jv(t,s,a){var c=t.Qb;return s="",t="Continue with "+(q(t.jc)+"?"),c="You originally wanted to sign in with "+q(c),s+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+t+'</h2><p class="firebaseui-text">'+c+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Mt(null)+bt({label:Me("Continue")})+'</div></div><div class="firebaseui-card-footer">'+ct(a)+"</div></form></div>",x(s)}jv.a="firebaseui.auth.soy2.page.emailMismatch";function Vv(t,s,a){var c='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=t.Sb,s=t.length;for(var d=0;d<s;d++){var p={ga:t[d]},v=a;p=p||{};var w=p.ga,k=p;k=k||{};var N="";switch(k.ga.providerId){case"google.com":N+="firebaseui-idp-google";break;case"github.com":N+="firebaseui-idp-github";break;case"facebook.com":N+="firebaseui-idp-facebook";break;case"twitter.com":N+="firebaseui-idp-twitter";break;case"phone":N+="firebaseui-idp-phone";break;case"anonymous":N+="firebaseui-idp-anonymous";break;case"password":N+="firebaseui-idp-password";break;default:N+="firebaseui-idp-generic"}k='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+gt(me(N))+' firebaseui-id-idp-button" data-provider-id="'+gt(w.providerId)+'" style="background-color:',N=(N=p)||{},N=N.ga,k=k+gt(Qp(me(N.ta?N.ta:v.wa[N.providerId]?""+v.wa[N.providerId]:N.providerId.indexOf("saml.")==0?""+v.wa.saml:N.providerId.indexOf("oidc.")==0?""+v.wa.oidc:""+v.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var j=p;N=v,j=j||{},j=j.ga,N=vI(j.za?Di(j.za):N.xa[j.providerId]?Di(N.xa[j.providerId]):j.providerId.indexOf("saml.")==0?Di(N.xa.saml):j.providerId.indexOf("oidc.")==0?Di(N.xa.oidc):Di(N.xa.password)),k=k+gt(Di(N))+'"></span>',w.providerId=="password"?(k+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',w.V?k+=q(w.V):w.S?(p="Sign in with "+q(si(p,v)),k+=p):k+="Sign in with email",k+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',k=w.S?k+q(w.S):k+"Email",k+="</span>"):w.providerId=="phone"?(k+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',w.V?k+=q(w.V):w.S?(p="Sign in with "+q(si(p,v)),k+=p):k+="Sign in with phone",k+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',k=w.S?k+q(w.S):k+"Phone",k+="</span>"):w.providerId=="anonymous"?(k+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',w.V?k+=q(w.V):w.S?(p="Sign in with "+q(si(p,v)),k+=p):k+="Continue as guest",k+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',k=w.S?k+q(w.S):k+"Guest",k+="</span>"):(k+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',w.V?k+=q(w.V):(N="Sign in with "+q(si(p,v)),k+=N),k+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(w.S?q(w.S):q(si(p,v)))+"</span>"),w=x(k+"</button>"),c+='<li class="firebaseui-list-item">'+w+"</li>"}return c+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+Hr(a)+"</div></div>",x(c)}Vv.a="firebaseui.auth.soy2.page.providerSignIn";function Hv(t,s,a){t=t||{};var c=t.Gb,d=t.Va;s=t.ia,t=t||{},t=t.Aa,t='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+gt(t??"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+x(t);var p;return c?p=x('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):p="",p=t+p+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(d?Mt(null):"")+bt({label:Me("Verify")})+'</div></div><div class="firebaseui-card-footer">',s?(s='<p class="firebaseui-tos firebaseui-phone-tos">',s=a.F&&a.D?s+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':s+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",a=x(s+"</p>")):a=x('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+ct(a),x(p+a+"</div></form></div>")}Hv.a="firebaseui.auth.soy2.page.phoneSignInStart";function Wv(t,s,a){t=t||{},s=t.phoneNumber;var c="";return t='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+(q(s)+"</a>"),q(s),s=c,c=x('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'),a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+t+"</p>"+c+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Mt(null)+bt({label:Me("Continue")})+'</div></div><div class="firebaseui-card-footer">'+ct(a)+"</div></form>",t=x('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),x(s+(a+t+"</div>"))}Wv.a="firebaseui.auth.soy2.page.phoneSignInFinish";function zv(){return x('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}zv.a="firebaseui.auth.soy2.page.signOut";function Gv(t,s,a){var c='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=t.ec,s=t.length;for(var d=0;d<s;d++){var p=t[d],v="",w=q(p.displayName),k=p.tenantId?p.tenantId:"top-level-project";k=Me(k),v+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+gt(k)+' firebaseui-id-tenant-selection-button"'+(p.tenantId?'data-tenant-id="'+gt(p.tenantId)+'"':"")+'style="background-color:'+gt(Qp(p.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+gt(Di(p.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',p.V?v+=q(p.V):(p="Sign in to "+q(p.displayName),v+=p),v=x(v+('</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+w+"</span></button>")),c+='<li class="firebaseui-list-item">'+v+"</li>"}return c+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+Hr(a)+"</div></div>",x(c)}Gv.a="firebaseui.auth.soy2.page.selectTenant";function qv(t,s,a){return t='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+Vr(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+bt(null)+'</div></div><div class="firebaseui-card-footer">'+Hr(a)+"</div></form></div>",x(t)}qv.a="firebaseui.auth.soy2.page.providerMatchByEmail";function Ze(){return fe(this,"firebaseui-id-submit")}function Ye(){return fe(this,"firebaseui-id-secondary-link")}function rt(t,s){Ne(this,Ze.call(this),function(c){t(c)});var a=Ye.call(this);a&&s&&Ne(this,a,function(c){s(c)})}function Nl(){return fe(this,"firebaseui-id-password")}function Ol(){return fe(this,"firebaseui-id-password-error")}function Kv(){var t=Nl.call(this),s=Ol.call(this);Br(this,t,function(){jr(s)&&(Fe(t,!0),Lt(s))})}function $v(){var t=Nl.call(this),s=Ol.call(this);return nt(t)?(Fe(t,!0),Lt(s),s=!0):(Fe(t,!1),it(s,me("Enter your password").toString()),s=!1),s?nt(t):null}function zr(t,s,a,c,d,p){A.call(this,wv,{email:t},p,"passwordLinking",{F:c,D:d}),this.w=s,this.H=a}f(zr,A),zr.prototype.v=function(){this.P(),this.M(this.w,this.H),Wr(this,this.i(),this.w),this.i().focus(),A.prototype.v.call(this)},zr.prototype.o=function(){this.w=null,A.prototype.o.call(this)},zr.prototype.j=function(){return nt(fe(this,"firebaseui-id-email"))},ie(zr.prototype,{i:Nl,B:Ol,P:Kv,u:$v,ea:Ze,ba:Ye,M:rt});var NE=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Cn(){return fe(this,"firebaseui-id-email")}function oi(){return fe(this,"firebaseui-id-email-error")}function Gr(t){var s=Cn.call(this),a=oi.call(this);Br(this,s,function(){jr(a)&&(Fe(s,!0),Lt(a))}),t&&uo(this,s,function(){t()})}function qr(){return At(nt(Cn.call(this))||"")}function Kr(){var t=Cn.call(this),s=oi.call(this),a=nt(t)||"";return a?NE.test(a)?(Fe(t,!0),Lt(s),s=!0):(Fe(t,!1),it(s,me("That email address isn't correct").toString()),s=!1):(Fe(t,!1),it(s,me("Enter your email address to continue").toString()),s=!1),s?At(nt(t)):null}function fo(t,s,a,c,d,p,v){A.call(this,cv,{email:a,ia:!!p},v,"passwordSignIn",{F:c,D:d}),this.w=t,this.H=s}f(fo,A),fo.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),ho(this,this.l(),this.i()),Wr(this,this.i(),this.w),nt(this.l())?this.i().focus():this.l().focus(),A.prototype.v.call(this)},fo.prototype.o=function(){this.H=this.w=null,A.prototype.o.call(this)},ie(fo.prototype,{l:Cn,U:oi,P:Gr,M:qr,j:Kr,i:Nl,B:Ol,ea:Kv,u:$v,ua:Ze,pa:Ye,ba:rt});function ye(t,s,a,c,d,p){A.call(this,t,s,c,d||"notice",p),this.i=a||null}Y(ye,A),ye.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),ye.K.v.call(this)},ye.prototype.o=function(){this.i=null,ye.K.o.call(this)},ie(ye.prototype,{l:Ze,w:Ye,u:rt});function Dl(t,s,a,c,d){ye.call(this,hv,{email:t,G:!!s},s,d,"passwordRecoveryEmailSent",{F:a,D:c})}Y(Dl,ye);function Yv(t,s){ye.call(this,Ov,{G:!!t},t,s,"emailVerificationSuccess")}Y(Yv,ye);function Jv(t,s){ye.call(this,Dv,{G:!!t},t,s,"emailVerificationFailure")}Y(Jv,ye);function Qv(t,s,a){ye.call(this,Lv,{email:t,G:!!s},s,a,"verifyAndChangeEmailSuccess")}Y(Qv,ye);function Xv(t,s){ye.call(this,Mv,{G:!!t},t,s,"verifyAndChangeEmailFailure")}Y(Xv,ye);function Zv(t,s){ye.call(this,Fv,{G:!!t},t,s,"revertSecondFactorAdditionFailure")}Y(Zv,ye);function e_(t){ye.call(this,zv,void 0,void 0,t,"signOut")}Y(e_,ye);function t_(t,s){ye.call(this,Rv,{G:!!t},t,s,"passwordResetSuccess")}Y(t_,ye);function n_(t,s){ye.call(this,Av,{G:!!t},t,s,"passwordResetFailure")}Y(n_,ye);function i_(t,s){ye.call(this,Nv,{G:!!t},t,s,"emailChangeRevokeFailure")}Y(i_,ye);function r_(t,s,a){ye.call(this,Uv,{errorMessage:t,zb:!!s},s,a,"recoverableError")}Y(r_,ye);function s_(t,s){ye.call(this,Bv,{errorMessage:t},void 0,s,"unrecoverableError")}Y(s_,ye);function po(t){if(t.code==="auth/invalid-credential"&&t.message&&t.message.indexOf("error=consent_required")!==-1)return{code:"auth/user-cancelled"};if(t.message&&t.message.indexOf("HTTP Cloud Function returned an error:")!==-1){var s=JSON.parse(t.message.substring(t.message.indexOf("{"),t.message.lastIndexOf("}")+1));return{code:t.code,message:s&&s.error&&s.error.message||t.message}}return t}function Sn(t,s,a,c){function d(v){if(!v.name||v.name!="cancel"){e:{var w=v.message;try{var k=((JSON.parse(w).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(k&&k.length){var N=!0;break e}}catch{}N=!1}if(N)v=Ae(s),s.m(),Ce(t,v,void 0,me("Your sign-in session has expired. Please try again.").toString());else{if(N=v&&v.message||"",v.code){if(v.code=="auth/email-already-in-use"||v.code=="auth/credential-already-in-use")return;N=we(v)}s.a(N)}}}if(T_(t),c)return o_(t,a),xe();if(!a.credential)throw Error("No credential found!");if(!ue(t).currentUser&&!a.user)throw Error("User not logged in.");try{var p=cC(t,a)}catch(v){return Ot(v.code||v.message,v),s.a(v.code||v.message),xe()}return a=p.then(function(v){o_(t,v)},d).then(void 0,d),Z(t,p),xe(a)}function o_(t,s){if(!s.user)throw Error("No user found");var a=Rg(P(t));if(yd(P(t))&&a&&ri("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),a){a=Rg(P(t));var c=ag(G(t))||void 0;yt(Zs,G(t));var d=!1;Tm()?((!a||a(s,c))&&(d=!0,_r(window.opener.location,Ll(t,c))),a||window.close()):(!a||a(s,c))&&(d=!0,_r(window.location,Ll(t,c))),d||t.reset()}else{a=s.user,s=s.credential,c=yd(P(t)),d=ag(G(t))||void 0,yt(Zs,G(t));var p=!1;Tm()?((!c||c(a,s,d))&&(p=!0,_r(window.opener.location,Ll(t,d))),c||window.close()):(!c||c(a,s,d))&&(p=!0,_r(window.location,Ll(t,d))),p||t.reset()}}function Ll(t,s){if(t=s||P(t).a.get("signInSuccessUrl"),!t)throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return t}function we(t){var s={code:t.code};s=s||{};var a="";switch(s.code){case"auth/email-already-in-use":a+="The email address is already used by another account";break;case"auth/requires-recent-login":a+=nm();break;case"auth/too-many-requests":a+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":a+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":a+="That email address doesn't match an existing account";break;case"auth/user-token-expired":a+=nm();break;case"auth/weak-password":a+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":a+="The email and password you entered don't match";break;case"auth/network-request-failed":a+="A network error has occurred";break;case"auth/invalid-phone-number":a+=Du();break;case"auth/invalid-verification-code":a+=me("Wrong code. Try again.");break;case"auth/code-expired":a+="This code is no longer valid";break;case"auth/expired-action-code":a+="This code has expired.";break;case"auth/invalid-action-code":a+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(s=me(a).toString())return s;try{return JSON.parse(t.message),Ot("Internal error: "+t.message,void 0),Zp().toString()}catch{return t.message}}function OE(t,s,a){var c=Pr[s]&&V.auth[Pr[s]]?new V.auth[Pr[s]]:s.indexOf("saml.")==0?new V.auth.SAMLAuthProvider(s):new V.auth.OAuthProvider(s);if(!c)throw Error("Invalid Firebase Auth provider!");var d=Eg(P(t),s);if(c.addScope)for(var p=0;p<d.length;p++)c.addScope(d[p]);return d=Cg(P(t),s)||{},a&&(s==V.auth.GoogleAuthProvider.PROVIDER_ID?t="login_hint":s==V.auth.GithubAuthProvider.PROVIDER_ID?t="login":t=(t=no(P(t),s))&&t.Ob,t&&(d[t]=a)),c.setCustomParameters&&c.setCustomParameters(d),c}function mo(t,s,a,c){function d(){oE(new Gm(t.h.tenantId||null),G(t)),Z(t,s.I(Q(t.dc,t),[k],function(){if((window.location&&window.location.protocol)==="file:")return Z(t,I_(t).then(function(N){s.m(),yt(Bi,G(t)),U("callback",t,w,xe(N))},p))},v))}function p(N){if(yt(Bi,G(t)),!N.name||N.name!="cancel")switch(N=po(N),N.code){case"auth/popup-blocked":d();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":break;case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":s.a(we(N));break;case"auth/admin-restricted-operation":s.m(),Vi(P(t))?U("handleUnauthorizedUser",t,w,null,a):U("callback",t,w,yr(N));break;default:s.m(),U("callback",t,w,yr(N))}}function v(N){yt(Bi,G(t)),N.name&&N.name=="cancel"||(Ot("signInWithRedirect: "+N.code,void 0),N=we(N),s.Ga=="blank"&&_d(P(t))?(s.m(),U("providerSignIn",t,w,N)):s.a(N))}var w=Ae(s),k=OE(t,a,c);Tg(P(t))==Cl?d():Z(t,lC(t,k).then(function(N){s.m(),U("callback",t,w,xe(N))},p))}function DE(t,s){Z(t,s.I(Q(t.$b,t),[],function(a){return s.m(),Sn(t,s,a,!0)},function(a){a.name&&a.name=="cancel"||(Ot("ContinueAsGuest: "+a.code,void 0),a=we(a),s.a(a))}))}function LE(t,s,a){function c(p){var v=!1;return p=s.I(Q(t.ac,t),[p],function(w){var k=Ae(s);s.m(),U("callback",t,k,xe(w)),v=!0},function(w){if((!w.name||w.name!="cancel")&&(!w||w.code!="auth/credential-already-in-use"))if(w&&w.code=="auth/email-already-in-use"&&w.email&&w.credential){var k=Ae(s);s.m(),U("callback",t,k,yr(w))}else w&&w.code=="auth/admin-restricted-operation"&&Vi(P(t))?(w=Ae(s),s.m(),U("handleUnauthorizedUser",t,w,null,V.auth.GoogleAuthProvider.PROVIDER_ID)):(w=we(w),s.a(w))}),Z(t,p),p.then(function(){return v},function(){return!1})}if(a&&a.credential&&a.clientId===wg(P(t))){if(Eg(P(t),V.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var d=JSON.parse(atob(a.credential.split(".")[1])).email}catch{}return mo(t,s,V.auth.GoogleAuthProvider.PROVIDER_ID,d),xe(!0)}return c(V.auth.GoogleAuthProvider.credential(a.credential))}return a&&s.a(me("The selected credential for the authentication provider is not supported!").toString()),xe(!1)}function ME(t,s){var a=s.j(),c=s.u();if(a)if(c){var d=V.auth.EmailAuthProvider.credential(a,c);Z(t,s.I(Q(t.bc,t),[a,c],function(p){return Sn(t,s,{user:p.user,credential:d,operationType:p.operationType,additionalUserInfo:p.additionalUserInfo})},function(p){if(!p.name||p.name!="cancel")switch(p.code){case"auth/email-already-in-use":break;case"auth/email-exists":Fe(s.l(),!1),it(s.U(),we(p));break;case"auth/too-many-requests":case"auth/wrong-password":Fe(s.i(),!1),it(s.B(),we(p));break;default:Ot("verifyPassword: "+p.message,void 0),s.a(we(p))}}))}else s.i().focus();else s.l().focus()}function Ml(t){return t=Nr(P(t)),t.length==1&&t[0]==V.auth.EmailAuthProvider.PROVIDER_ID}function a_(t){return t=Nr(P(t)),t.length==1&&t[0]==V.auth.PhoneAuthProvider.PROVIDER_ID}function Ce(t,s,a,c){Ml(t)?c?U("signIn",t,s,a,c):Md(t,s,a):t&&a_(t)&&!c?U("phoneSignInStart",t,s):t&&_d(P(t))&&!c?U("federatedRedirect",t,s,a):U("providerSignIn",t,s,c,a)}function l_(t,s,a,c){var d=Ae(s);Z(t,s.I(Q(ue(t).fetchSignInMethodsForEmail,ue(t)),[a],function(p){s.m(),c_(t,d,p,a,c)},function(p){p=we(p),s.a(p)}))}function c_(t,s,a,c,d,p){a.length||Or(P(t))&&!Or(P(t))?jt(a,V.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?U("passwordSignIn",t,s,c,p):a.length==1&&a[0]===V.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Or(P(t))?U("sendEmailLinkForSignIn",t,s,c,function(){U("signIn",t,s)}):U("unsupportedProvider",t,s,c):(a=_g(a,Nr(P(t))))?(lg(new sd(c),G(t)),U("federatedSignIn",t,s,c,a,d)):U("unsupportedProvider",t,s,c):Ig(P(t))?U("handleUnauthorizedUser",t,s,c,V.auth.EmailAuthProvider.PROVIDER_ID):Or(P(t))?U("sendEmailLinkForSignIn",t,s,c,function(){U("signIn",t,s)}):U("passwordSignUp",t,s,c,void 0,void 0,p)}function Ld(t,s,a,c,d,p){var v=Ae(s);Z(t,s.I(Q(t.Ib,t),[a,p],function(){s.m(),U("emailLinkSignInSent",t,v,a,c,p)},d))}function Md(t,s,a){a?U("prefilledEmailSignIn",t,s,a):U("signIn",t,s)}function go(){return Fa(En(),"oobCode")}function xd(){var t=Fa(En(),"continueUrl");return t?function(){_r(window.location,t)}:null}function vo(t,s){A.call(this,bv,void 0,s,"anonymousUserMismatch"),this.i=t}f(vo,A),vo.prototype.v=function(){var t=this;Ne(this,this.l(),function(){t.i()}),this.l().focus(),A.prototype.v.call(this)},vo.prototype.o=function(){this.i=null,A.prototype.o.call(this)},ie(vo.prototype,{l:Ye}),ve.anonymousUserMismatch=function(t,s){var a=new vo(function(){a.m(),Ce(t,s)});a.render(s),re(t,a)};function xl(t){A.call(this,fv,void 0,t,"callback")}f(xl,A),xl.prototype.I=function(t,s,a,c){return t.apply(null,s).then(a,c)};function u_(t,s,a){if(a.user){var c={user:a.user,credential:a.credential,operationType:a.operationType,additionalUserInfo:a.additionalUserInfo},d=sn(G(t)),p=d&&d.g;if(p&&!FE(a.user,p))xE(t,s,c);else{var v=d&&d.a;v?Z(t,a.user.linkWithCredential(v).then(function(w){c={user:w.user,credential:v,operationType:w.operationType,additionalUserInfo:w.additionalUserInfo},d_(t,s,c)},function(w){Fl(t,s,w)})):d_(t,s,c)}}else a=Ae(s),s.m(),on(G(t)),Ce(t,a)}function d_(t,s,a){on(G(t)),Sn(t,s,a)}function Fl(t,s,a){var c=Ae(s);on(G(t)),a=we(a),s.m(),Ce(t,c,void 0,a)}function h_(t,s,a,c){var d=Ae(s);Z(t,ue(t).fetchSignInMethodsForEmail(a).then(function(p){s.m(),p.length?jt(p,V.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?U("passwordLinking",t,d,a):p.length==1&&p[0]===V.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?U("emailLinkSignInLinking",t,d,a):(p=_g(p,Nr(P(t))))?U("federatedLinking",t,d,a,p,c):(on(G(t)),U("unsupportedProvider",t,d,a)):(on(G(t)),U("passwordRecovery",t,d,a,!1,em().toString()))},function(p){Fl(t,s,p)}))}function xE(t,s,a){var c=Ae(s);Z(t,ai(t).then(function(){s.m(),U("emailMismatch",t,c,a)},function(d){d.name&&d.name=="cancel"||(d=we(d.code),s.a(d))}))}function FE(t,s){if(s==t.email)return!0;if(t.providerData){for(var a=0;a<t.providerData.length;a++)if(s==t.providerData[a].email)return!0}return!1}ve.callback=function(t,s,a){var c=new xl;c.render(s),re(t,c),a=a||I_(t),Z(t,a.then(function(d){u_(t,c,d)},function(d){if((d=po(d))&&(d.code=="auth/account-exists-with-different-credential"||d.code=="auth/email-already-in-use")&&d.email&&d.credential)lg(new sd(d.email,d.credential),G(t)),h_(t,c,d.email);else if(d&&d.code=="auth/user-cancelled"){var p=sn(G(t)),v=we(d);p&&p.a?h_(t,c,p.g,v):p?l_(t,c,p.g,v):Fl(t,c,d)}else d&&d.code=="auth/credential-already-in-use"||(d&&d.code=="auth/operation-not-supported-in-this-environment"&&Ml(t)?u_(t,c,{user:null,credential:null}):d&&d.code=="auth/admin-restricted-operation"&&Vi(P(t))?(c.m(),on(G(t)),U("handleUnauthorizedUser",t,s,null,null)):Fl(t,c,d))}))};function _o(t,s){A.call(this,yv,void 0,s,"differentDeviceError"),this.i=t}f(_o,A),_o.prototype.v=function(){var t=this;Ne(this,this.l(),function(){t.i()}),this.l().focus(),A.prototype.v.call(this)},_o.prototype.o=function(){this.i=null,A.prototype.o.call(this)},ie(_o.prototype,{l:Ye}),ve.differentDeviceError=function(t,s){var a=new _o(function(){a.m(),Ce(t,s)});a.render(s),re(t,a)};function yo(t,s,a,c){A.call(this,Pv,{email:t,G:!!a},c,"emailChangeRevoke"),this.l=s,this.i=a||null}f(yo,A),yo.prototype.v=function(){var t=this;Ne(this,fe(this,"firebaseui-id-reset-password-link"),function(){t.l()}),this.i&&(this.w(this.i),this.u().focus()),A.prototype.v.call(this)},yo.prototype.o=function(){this.l=this.i=null,A.prototype.o.call(this)},ie(yo.prototype,{u:Ze,B:Ye,w:rt});function bo(){return fe(this,"firebaseui-id-new-password")}function Ul(){return fe(this,"firebaseui-id-password-toggle")}function UE(){this.Ra=!this.Ra;var t=Ul.call(this),s=bo.call(this);this.Ra?(s.type="text",an(t,"firebaseui-input-toggle-off"),ln(t,"firebaseui-input-toggle-on")):(s.type="password",an(t,"firebaseui-input-toggle-on"),ln(t,"firebaseui-input-toggle-off")),s.focus()}function Bl(){return fe(this,"firebaseui-id-new-password-error")}function f_(){this.Ra=!1;var t=bo.call(this);t.type="password";var s=Bl.call(this);Br(this,t,function(){jr(s)&&(Fe(t,!0),Lt(s))});var a=Ul.call(this);an(a,"firebaseui-input-toggle-on"),ln(a,"firebaseui-input-toggle-off"),kE(this,t,function(){an(a,"firebaseui-input-toggle-focus"),ln(a,"firebaseui-input-toggle-blur")}),TE(this,t,function(){an(a,"firebaseui-input-toggle-blur"),ln(a,"firebaseui-input-toggle-focus")}),Ne(this,a,Q(UE,this))}function p_(){var t=bo.call(this),s=Bl.call(this);return nt(t)?(Fe(t,!0),Lt(s),s=!0):(Fe(t,!1),it(s,me("Enter your password").toString()),s=!1),s?nt(t):null}function wo(t,s,a){A.call(this,Tv,{email:t},a,"passwordReset"),this.l=s}f(wo,A),wo.prototype.v=function(){this.H(),this.B(this.l),Wr(this,this.i(),this.l),this.i().focus(),A.prototype.v.call(this)},wo.prototype.o=function(){this.l=null,A.prototype.o.call(this)},ie(wo.prototype,{i:bo,w:Bl,M:Ul,H:f_,u:p_,U:Ze,P:Ye,B:rt});function Io(t,s,a,c,d){A.call(this,xv,{factorId:t,phoneNumber:a||null,G:!!c},d,"revertSecondFactorAdditionSuccess"),this.l=s,this.i=c||null}f(Io,A),Io.prototype.v=function(){var t=this;Ne(this,fe(this,"firebaseui-id-reset-password-link"),function(){t.l()}),this.i&&(this.w(this.i),this.u().focus()),A.prototype.v.call(this)},Io.prototype.o=function(){this.l=this.i=null,A.prototype.o.call(this)},ie(Io.prototype,{u:Ze,B:Ye,w:rt});function BE(t,s,a,c,d){var p=a.u();p&&Z(t,a.I(Q(ue(t).confirmPasswordReset,ue(t)),[c,p],function(){a.m();var v=new t_(d);v.render(s),re(t,v)},function(v){m_(t,s,a,v)}))}function m_(t,s,a,c){(c&&c.code)=="auth/weak-password"?(t=we(c),Fe(a.i(),!1),it(a.w(),t),a.i().focus()):(a&&a.m(),a=new n_,a.render(s),re(t,a))}function jE(t,s,a){var c=new yo(a,function(){Z(t,c.I(Q(ue(t).sendPasswordResetEmail,ue(t)),[a],function(){c.m(),c=new Dl(a,void 0,Ve(P(t)),He(P(t))),c.render(s),re(t,c)},function(){c.a(Xp().toString())}))});c.render(s),re(t,c)}function VE(t,s,a,c){var d=new Io(c.factorId,function(){d.I(Q(ue(t).sendPasswordResetEmail,ue(t)),[a],function(){d.m(),d=new Dl(a,void 0,Ve(P(t)),He(P(t))),d.render(s),re(t,d)},function(){d.a(Xp().toString())})},c.phoneNumber);d.render(s),re(t,d)}ve.passwordReset=function(t,s,a,c){Z(t,ue(t).verifyPasswordResetCode(a).then(function(d){var p=new wo(d,function(){BE(t,s,p,a,c)});p.render(s),re(t,p)},function(){m_(t,s)}))},ve.emailChangeRevocation=function(t,s,a){var c=null;Z(t,ue(t).checkActionCode(a).then(function(d){return c=d.data.email,ue(t).applyActionCode(a)}).then(function(){jE(t,s,c)},function(){var d=new i_;d.render(s),re(t,d)}))},ve.emailVerification=function(t,s,a,c){Z(t,ue(t).applyActionCode(a).then(function(){var d=new Yv(c);d.render(s),re(t,d)},function(){var d=new Jv;d.render(s),re(t,d)}))},ve.revertSecondFactorAddition=function(t,s,a){var c=null,d=null;Z(t,ue(t).checkActionCode(a).then(function(p){return c=p.data.email,d=p.data.multiFactorInfo,ue(t).applyActionCode(a)}).then(function(){VE(t,s,c,d)},function(){var p=new Zv;p.render(s),re(t,p)}))},ve.verifyAndChangeEmail=function(t,s,a,c){var d=null;Z(t,ue(t).checkActionCode(a).then(function(p){return d=p.data.email,ue(t).applyActionCode(a)}).then(function(){var p=new Qv(d,c);p.render(s),re(t,p)},function(){var p=new Xv;p.render(s),re(t,p)}))};function jl(t,s){try{var a=typeof t.selectionStart=="number"}catch{a=!1}a?(t.selectionStart=s,t.selectionEnd=s):Le&&!Pi("9")&&(t.type=="textarea"&&(s=t.value.substring(0,s).replace(/(\r\n|\r|\n)/g,`
`).length),t=t.createTextRange(),t.collapse(!0),t.move("character",s),t.select())}function Eo(t,s,a,c,d,p){A.call(this,_v,{email:a},p,"emailLinkSignInConfirmation",{F:c,D:d}),this.l=t,this.u=s}f(Eo,A),Eo.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),jl(this.i(),(this.i().value||"").length),A.prototype.v.call(this)},Eo.prototype.o=function(){this.u=this.l=null,A.prototype.o.call(this)},ie(Eo.prototype,{i:Cn,M:oi,w:Gr,H:qr,j:Kr,U:Ze,P:Ye,B:rt}),ve.emailLinkConfirmation=function(t,s,a,c,d,p){var v=new Eo(function(){var w=v.j();w?(v.m(),c(t,s,w,a)):v.i().focus()},function(){v.m(),Ce(t,s,d||void 0)},d||void 0,Ve(P(t)),He(P(t)));v.render(s),re(t,v),p&&v.a(p)};function Co(t,s,a,c,d){A.call(this,Ev,{ga:t},d,"emailLinkSignInLinkingDifferentDevice",{F:a,D:c}),this.i=s}f(Co,A),Co.prototype.v=function(){this.u(this.i),this.l().focus(),A.prototype.v.call(this)},Co.prototype.o=function(){this.i=null,A.prototype.o.call(this)},ie(Co.prototype,{l:Ze,u:rt}),ve.emailLinkNewDeviceLinking=function(t,s,a,c){var d=new Ai(a);if(a=d.a.a.get(qe.PROVIDER_ID)||null,Ap(d,null),a){var p=new Co(no(P(t),a),function(){p.m(),c(t,s,d.toString())},Ve(P(t)),He(P(t)));p.render(s),re(t,p)}else Ce(t,s)};function Vl(t){A.call(this,mv,void 0,t,"blank")}f(Vl,A);function Fd(t,s,a,c,d){var p=new Vl,v=new Ai(a),w=v.a.a.get(qe.$a)||"",k=v.a.a.get(qe.Sa)||"",N=v.a.a.get(qe.Qa)==="1",j=Rp(v),be=v.a.a.get(qe.PROVIDER_ID)||null;v=v.a.a.get(qe.vb)||null,R_(t,v);var Jt=!Rr(Tr,G(t)),D_=c||aE(k,G(t)),Fo=(c=lE(k,G(t)))&&c.a;be&&Fo&&Fo.providerId!==be&&(Fo=null),p.render(s),re(t,p),Z(t,p.I(function(){var Vt=xe(null);Vt=j&&Jt||Jt&&N?yr(Error("anonymous-user-not-found")):sC(t,a).then(function($d){if(be&&!Fo)throw Error("pending-credential-not-found");return $d});var Uo=null;return Vt.then(function($d){return Uo=$d,d?null:ue(t).checkActionCode(w)}).then(function(){return Uo})},[],function(Vt){D_?WE(t,p,D_,a,Fo,Vt):N?(p.m(),U("differentDeviceError",t,s)):(p.m(),U("emailLinkConfirmation",t,s,a,g_))},function(Vt){var Uo=void 0;if(!Vt||!Vt.name||Vt.name!="cancel")switch(p.m(),Vt&&Vt.message){case"anonymous-user-not-found":U("differentDeviceError",t,s);break;case"anonymous-user-mismatch":U("anonymousUserMismatch",t,s);break;case"pending-credential-not-found":U("emailLinkNewDeviceLinking",t,s,a,HE);break;default:Vt&&(Uo=we(Vt)),Ce(t,s,void 0,Uo)}}))}function g_(t,s,a,c){Fd(t,s,c,a,!0)}function HE(t,s,a){Fd(t,s,a)}function WE(t,s,a,c,d,p){var v=Ae(s);s.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",me("Signing in...").toString());var w=null;d=(p?oC(t,p,a,c,d):aC(t,a,c,d)).then(function(k){yt(eo,G(t)),yt(Tr,G(t)),s.h(),s.$("firebaseui-icon-done",me("Signed in!").toString()),w=setTimeout(function(){s.h(),Sn(t,s,k,!0)},1e3),Z(t,function(){s&&(s.h(),s.m()),clearTimeout(w)})},function(k){if(s.h(),s.m(),!k.name||k.name!="cancel"){k=po(k);var N=we(k);k.code=="auth/email-already-in-use"||k.code=="auth/credential-already-in-use"?(yt(eo,G(t)),yt(Tr,G(t))):k.code=="auth/invalid-email"?(N=me("The email provided does not match the current sign-in session.").toString(),U("emailLinkConfirmation",t,v,c,g_,null,N)):Ce(t,v,a,N)}}),Z(t,d)}ve.emailLinkSignInCallback=Fd;function So(t,s,a,c,d,p){A.call(this,Iv,{email:t,ga:s},p,"emailLinkSignInLinking",{F:c,D:d}),this.i=a}f(So,A),So.prototype.v=function(){this.u(this.i),this.l().focus(),A.prototype.v.call(this)},So.prototype.o=function(){this.i=null,A.prototype.o.call(this)},ie(So.prototype,{l:Ze,u:rt});function zE(t,s,a,c){var d=Ae(s);Ld(t,s,a,function(){Ce(t,d,a)},function(p){if(!p.name||p.name!="cancel"){var v=we(p);p&&p.code=="auth/network-request-failed"?s.a(v):(s.m(),Ce(t,d,a,v))}},c)}ve.emailLinkSignInLinking=function(t,s,a){var c=sn(G(t));if(on(G(t)),c){var d=c.a.providerId,p=new So(a,no(P(t),d),function(){zE(t,p,a,c)},Ve(P(t)),He(P(t)));p.render(s),re(t,p)}else Ce(t,s)};function ko(t,s,a,c,d,p){A.call(this,gv,{email:t},p,"emailLinkSignInSent",{F:c,D:d}),this.u=s,this.i=a}f(ko,A),ko.prototype.v=function(){var t=this;Ne(this,this.l(),function(){t.i()}),Ne(this,fe(this,"firebaseui-id-trouble-getting-email-link"),function(){t.u()}),this.l().focus(),A.prototype.v.call(this)},ko.prototype.o=function(){this.i=this.u=null,A.prototype.o.call(this)},ie(ko.prototype,{l:Ye}),ve.emailLinkSignInSent=function(t,s,a,c,d){var p=new ko(a,function(){p.m(),U("emailNotReceived",t,s,a,c,d)},function(){p.m(),c()},Ve(P(t)),He(P(t)));p.render(s),re(t,p)};function To(t,s,a,c,d,p,v){A.call(this,jv,{jc:t,Qb:s},v,"emailMismatch",{F:d,D:p}),this.l=a,this.i=c}f(To,A),To.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),A.prototype.v.call(this)},To.prototype.o=function(){this.i=null,A.prototype.o.call(this)},ie(To.prototype,{u:Ze,B:Ye,w:rt}),ve.emailMismatch=function(t,s,a){var c=sn(G(t));if(c){var d=new To(a.user.email,c.g,function(){var p=d;on(G(t)),Sn(t,p,a)},function(){var p=a.credential.providerId,v=Ae(d);d.m(),c.a?U("federatedLinking",t,v,c.g,p):U("federatedSignIn",t,v,c.g,p)},Ve(P(t)),He(P(t)));d.render(s),re(t,d)}else Ce(t,s)};function $r(t,s,a,c,d){A.call(this,vv,void 0,d,"emailNotReceived",{F:a,D:c}),this.l=t,this.i=s}f($r,A),$r.prototype.v=function(){var t=this;Ne(this,this.u(),function(){t.i()}),Ne(this,this.Da(),function(){t.l()}),this.u().focus(),A.prototype.v.call(this)},$r.prototype.Da=function(){return fe(this,"firebaseui-id-resend-email-link")},$r.prototype.o=function(){this.i=this.l=null,A.prototype.o.call(this)},ie($r.prototype,{u:Ye}),ve.emailNotReceived=function(t,s,a,c,d){var p=new $r(function(){Ld(t,p,a,c,function(v){v=we(v),p.a(v)},d)},function(){p.m(),Ce(t,s,a)},Ve(P(t)),He(P(t)));p.render(s),re(t,p)};function Yr(t,s,a,c,d,p){A.call(this,Cv,{email:t,ga:s},p,"federatedLinking",{F:c,D:d}),this.i=a}f(Yr,A),Yr.prototype.v=function(){this.u(this.i),this.l().focus(),A.prototype.v.call(this)},Yr.prototype.o=function(){this.i=null,A.prototype.o.call(this)},ie(Yr.prototype,{l:Ze,u:rt}),ve.federatedLinking=function(t,s,a,c,d){var p=sn(G(t));if(p&&p.a){var v=new Yr(a,no(P(t),c),function(){mo(t,v,c,a)},Ve(P(t)),He(P(t)));v.render(s),re(t,v),d&&v.a(d)}else Ce(t,s)},ve.federatedRedirect=function(t,s,a){var c=new Vl;c.render(s),re(t,c),s=Nr(P(t))[0],mo(t,c,s,a)},ve.federatedSignIn=function(t,s,a,c,d){var p=new Yr(a,no(P(t),c),function(){mo(t,p,c,a)},Ve(P(t)),He(P(t)));p.render(s),re(t,p),d&&p.a(d)};function GE(t,s,a,c){var d=s.u();d?Z(t,s.I(Q(t.Xb,t),[a,d],function(p){return p=p.user.linkWithCredential(c).then(function(v){return Sn(t,s,{user:v.user,credential:c,operationType:v.operationType,additionalUserInfo:v.additionalUserInfo})}),Z(t,p),p},function(p){if(!p.name||p.name!="cancel")switch(p.code){case"auth/wrong-password":Fe(s.i(),!1),it(s.B(),we(p));break;case"auth/too-many-requests":s.a(we(p));break;default:Ot("signInWithEmailAndPassword: "+p.message,void 0),s.a(we(p))}})):s.i().focus()}ve.passwordLinking=function(t,s,a){var c=sn(G(t));on(G(t));var d=c&&c.a;if(d){var p=new zr(a,function(){GE(t,p,a,d)},function(){p.m(),U("passwordRecovery",t,s,a)},Ve(P(t)),He(P(t)));p.render(s),re(t,p)}else Ce(t,s)};function Ro(t,s,a,c,d,p){A.call(this,dv,{email:a,Ta:!!s},p,"passwordRecovery",{F:c,D:d}),this.l=t,this.u=s}f(Ro,A),Ro.prototype.v=function(){this.B(),this.H(this.l,this.u),nt(this.i())||this.i().focus(),Wr(this,this.i(),this.l),A.prototype.v.call(this)},Ro.prototype.o=function(){this.u=this.l=null,A.prototype.o.call(this)},ie(Ro.prototype,{i:Cn,w:oi,B:Gr,M:qr,j:Kr,U:Ze,P:Ye,H:rt});function qE(t,s){var a=s.j();if(a){var c=Ae(s);Z(t,s.I(Q(ue(t).sendPasswordResetEmail,ue(t)),[a],function(){s.m();var d=new Dl(a,function(){d.m(),Ce(t,c)},Ve(P(t)),He(P(t)));d.render(c),re(t,d)},function(d){Fe(s.i(),!1),it(s.w(),we(d))}))}else s.i().focus()}ve.passwordRecovery=function(t,s,a,c,d){var p=new Ro(function(){qE(t,p)},c?void 0:function(){p.m(),Ce(t,s)},a,Ve(P(t)),He(P(t)));p.render(s),re(t,p),d&&p.a(d)},ve.passwordSignIn=function(t,s,a,c){var d=new fo(function(){ME(t,d)},function(){var p=d.M();d.m(),U("passwordRecovery",t,s,p)},a,Ve(P(t)),He(P(t)),c);d.render(s),re(t,d)};function Ud(){return fe(this,"firebaseui-id-name")}function Bd(){return fe(this,"firebaseui-id-name-error")}function Ao(t,s,a,c,d,p,v,w,k){A.call(this,uv,{email:c,Tb:t,name:d,Ta:!!a,ia:!!w},k,"passwordSignUp",{F:p,D:v}),this.w=s,this.H=a,this.B=t}f(Ao,A),Ao.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(ho(this,this.i(),this.u()),ho(this,this.u(),this.l())):ho(this,this.i(),this.l()),this.w&&Wr(this,this.l(),this.w),nt(this.i())?this.B&&!nt(this.u())?this.u().focus():this.l().focus():this.i().focus(),A.prototype.v.call(this)},Ao.prototype.o=function(){this.H=this.w=null,A.prototype.o.call(this)},ie(Ao.prototype,{i:Cn,U:oi,ea:Gr,jb:qr,j:Kr,u:Ud,Bc:Bd,Ja:function(){var t=Ud.call(this),s=Bd.call(this);Br(this,t,function(){jr(s)&&(Fe(t,!0),Lt(s))})},M:function(){var t=Ud.call(this),s=Bd.call(this),a=nt(t);return a=!/^[\s\xa0]*$/.test(a==null?"":String(a)),Fe(t,a),a?(Lt(s),s=!0):(it(s,me("Enter your account name").toString()),s=!1),s?At(nt(t)):null},l:bo,ba:Bl,lb:Ul,ua:f_,P:p_,Nb:Ze,Mb:Ye,pa:rt});function KE(t,s){var a=kg(P(t)),c=s.j(),d=null;a&&(d=s.M());var p=s.P();if(c){if(a)if(d)d=hr(d);else{s.u().focus();return}if(p){var v=V.auth.EmailAuthProvider.credential(c,p);Z(t,s.I(Q(t.Yb,t),[c,p],function(w){var k={user:w.user,credential:v,operationType:w.operationType,additionalUserInfo:w.additionalUserInfo};return a?(w=w.user.updateProfile({displayName:d}).then(function(){return Sn(t,s,k)}),Z(t,w),w):Sn(t,s,k)},function(w){if(!w.name||w.name!="cancel"){var k=po(w);switch(w=we(k),k.code){case"auth/email-already-in-use":return $E(t,s,c,k);case"auth/too-many-requests":w=me("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":Fe(s.l(),!1),it(s.ba(),w);break;case"auth/admin-restricted-operation":Vi(P(t))?(w=Ae(s),s.m(),U("handleUnauthorizedUser",t,w,c,V.auth.EmailAuthProvider.PROVIDER_ID)):s.a(w);break;default:k="setAccountInfo: "+ng(k),Ot(k,void 0),s.a(w)}}}))}else s.l().focus()}else s.i().focus()}function $E(t,s,a,c){function d(){var v=we(c);Fe(s.i(),!1),it(s.U(),v),s.i().focus()}var p=ue(t).fetchSignInMethodsForEmail(a).then(function(v){v.length?d():(v=Ae(s),s.m(),U("passwordRecovery",t,v,a,!1,em().toString()))},function(){d()});return Z(t,p),p}ve.passwordSignUp=function(t,s,a,c,d,p){function v(){w.m(),Ce(t,s)}var w=new Ao(kg(P(t)),function(){KE(t,w)},d?void 0:v,a,c,Ve(P(t)),He(P(t)),p);w.render(s),re(t,w)};function jd(){return fe(this,"firebaseui-id-phone-confirmation-code")}function v_(){return fe(this,"firebaseui-id-phone-confirmation-code-error")}function __(){return fe(this,"firebaseui-id-resend-countdown")}function Jr(t,s,a,c,d,p,v,w,k){A.call(this,Wv,{phoneNumber:d},k,"phoneSignInFinish",{F:v,D:w}),this.jb=p,this.i=new Sl(1e3),this.B=p,this.P=t,this.l=s,this.H=a,this.M=c}f(Jr,A),Jr.prototype.v=function(){var t=this;this.U(this.jb),qt(this.i,"tick",this.w,!1,this),this.i.start(),Ne(this,fe(this,"firebaseui-id-change-phone-number-link"),function(){t.P()}),Ne(this,this.Da(),function(){t.M()}),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),A.prototype.v.call(this)},Jr.prototype.o=function(){this.M=this.H=this.l=this.P=null,kl(this.i),Mi(this.i,"tick",this.w),this.i=null,A.prototype.o.call(this)},Jr.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(kl(this.i),Mi(this.i,"tick",this.w),this.ua(),this.lb())},ie(Jr.prototype,{u:jd,pa:v_,Ja:function(t){var s=jd.call(this),a=v_.call(this);Br(this,s,function(){jr(a)&&(Fe(s,!0),Lt(a))}),t&&uo(this,s,function(){t()})},ba:function(){var t=At(nt(jd.call(this))||"");return/^\d{6}$/.test(t)?t:null},Fb:__,U:function(t){Au(__.call(this),me("Resend code in "+((9<t?"0:":"0:0")+t)).toString())},ua:function(){Lt(this.Fb())},Da:function(){return fe(this,"firebaseui-id-resend-link")},lb:function(){it(this.Da())},Nb:Ze,Mb:Ye,ea:rt});function YE(t,s,a,c){function d(v){s.u().focus(),Fe(s.u(),!1),it(s.pa(),v)}var p=s.ba();p?(s.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",me("Verifying...").toString()),Z(t,s.I(Q(c.confirm,c),[p],function(v){s.h(),s.$("firebaseui-icon-done",me("Verified!").toString());var w=setTimeout(function(){s.h(),s.m();var k={user:$t(t).currentUser,credential:null,operationType:v.operationType,additionalUserInfo:v.additionalUserInfo};Sn(t,s,k,!0)},1e3);Z(t,function(){s&&s.h(),clearTimeout(w)})},function(v){if(v.name&&v.name=="cancel")s.h();else{var w=po(v);switch(v=we(w),w.code){case"auth/credential-already-in-use":s.h();break;case"auth/code-expired":w=Ae(s),s.h(),s.m(),U("phoneSignInStart",t,w,a,v);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":s.h(),d(v);break;default:s.h(),s.a(v)}}}))):d(me("Wrong code. Try again.").toString())}ve.phoneSignInFinish=function(t,s,a,c,d,p){var v=new Jr(function(){v.m(),U("phoneSignInStart",t,s,a)},function(){YE(t,v,a,d)},function(){v.m(),Ce(t,s)},function(){v.m(),U("phoneSignInStart",t,s,a)},gd(a),c,Ve(P(t)),He(P(t)));v.render(s),re(t,v),p&&v.a(p)};var JE=!Le&&!(ce("Safari")&&!(Op()||ce("Coast")||ce("Opera")||ce("Edge")||ce("Firefox")||ce("FxiOS")||ce("Silk")||ce("Android")));function Hl(t,s){return/-[a-z]/.test(s)?null:JE&&t.dataset?!ce("Android")||Op()||ce("Firefox")||ce("FxiOS")||ce("Opera")||ce("Silk")||s in t.dataset?(t=t.dataset[s],t===void 0?null:t):null:t.getAttribute("data-"+String(s).replace(/([A-Z])/g,"-$1").toLowerCase())}function QE(t,s,a){var c=this;t=js(nv,{items:t},null,this.s),rv.call(this,t,!0,!0),a&&(a=XE(t,a))&&(a.focus(),SE(a,t)),Ne(this,t,function(d){(d=(d=Kp(d.target,"firebaseui-id-list-box-dialog-button"))&&Hl(d,"listboxid"))&&(Pl.call(c),s(d))})}function XE(t,s){t=(t||document).getElementsByTagName("BUTTON");for(var a=0;a<t.length;a++)if(Hl(t[a],"listboxid")===s)return t[a];return null}function Wi(){return fe(this,"firebaseui-id-phone-number")}function y_(){return fe(this,"firebaseui-id-country-selector")}function Vd(){return fe(this,"firebaseui-id-phone-number-error")}function ZE(t,s){var a=t.a,c=Hd("1-US-0",a),d=null;if(s&&Hd(s,a)?d=s:c?d="1-US-0":d=0<a.length?a[0].c:null,!d)throw Error("No available default country");Wl.call(this,d,t)}function Hd(t,s){return t=ji(t),!(!t||!jt(s,t))}function eC(t){return t.map(function(s){return{id:s.c,Ma:"firebaseui-flag "+Wd(s),label:s.name+" "+("‎+"+s.b)}})}function Wd(t){return"firebaseui-flag-"+t.f}function tC(t){var s=this;QE.call(this,eC(t.a),function(a){Wl.call(s,a,t,!0),s.O().focus()},this.Ba)}function Wl(t,s,a){var c=ji(t);c&&(a&&(a=At(nt(Wi.call(this))||""),s=bl(s,a),s.length&&s[0].b!=c.b&&(a="+"+c.b+a.substr(s[0].b.length+1),Og(Wi.call(this),a))),s=ji(this.Ba),this.Ba=t,t=fe(this,"firebaseui-id-country-selector-flag"),s&&ln(t,Wd(s)),an(t,Wd(c)),Au(fe(this,"firebaseui-id-country-selector-code"),"‎+"+c.b))}function Po(t,s,a,c,d,p,v,w,k,N){A.call(this,Hv,{Gb:s,Aa:k||null,Va:!!a,ia:!!p},N,"phoneSignInStart",{F:c,D:d}),this.H=w||null,this.M=s,this.l=t,this.w=a||null,this.pa=v||null}f(Po,A),Po.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||ho(this,this.O(),this.i()),Wr(this,this.i(),this.l),this.O().focus(),jl(this.O(),(this.O().value||"").length),A.prototype.v.call(this)},Po.prototype.o=function(){this.w=this.l=null,A.prototype.o.call(this)},ie(Po.prototype,{Cb:Od,O:Wi,B:Vd,ea:function(t,s,a){var c=this,d=Wi.call(this),p=y_.call(this),v=Vd.call(this),w=t||to,k=w.a;if(k.length==0)throw Error("No available countries provided.");ZE.call(c,w,s),Ne(this,p,function(){tC.call(c,w)}),Br(this,d,function(){jr(v)&&(Fe(d,!0),Lt(v));var N=At(nt(d)||""),j=ji(this.Ba),be=bl(w,N);N=Hd("1-US-0",k),be.length&&be[0].b!=j.b&&(j=be[0],Wl.call(c,j.b=="1"&&N?"1-US-0":j.c,w))}),a&&uo(this,d,function(){a()})},U:function(t){var s=At(nt(Wi.call(this))||"");t=t||to;var a=t.a,c=bl(to,s);if(c.length&&!jt(a,c[0]))throw Og(Wi.call(this)),Wi.call(this).focus(),it(Vd.call(this),me("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return a=ji(this.Ba),c.length&&c[0].b!=a.b&&Wl.call(this,c[0].c,t),c.length&&(s=s.substr(c[0].b.length+1)),s?new gg(this.Ba,s):null},Ja:y_,ba:function(){return fe(this,"firebaseui-recaptcha-container")},u:function(){return fe(this,"firebaseui-id-recaptcha-error")},i:Ze,ua:Ye,P:rt});function b_(t,s,a,c){try{var d=s.U(Cd)}catch{return}d?ro?(s.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",me("Verifying...").toString()),Z(t,s.I(Q(t.cc,t),[gd(d),a],function(p){var v=Ae(s);s.$("firebaseui-icon-done",me("Code sent!").toString());var w=setTimeout(function(){s.h(),s.m(),U("phoneSignInFinish",t,v,d,15,p)},1e3);Z(t,function(){s&&s.h(),clearTimeout(w)})},function(p){if(s.h(),!p.name||p.name!="cancel"){grecaptcha.reset(Pg),ro=null;var v=p&&p.message||"";if(p.code)switch(p.code){case"auth/too-many-requests":v=me("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":s.O().focus(),it(s.B(),Du().toString());return;case"auth/admin-restricted-operation":if(Vi(P(t))){p=Ae(s),s.m(),U("handleUnauthorizedUser",t,p,gd(d),V.auth.PhoneAuthProvider.PROVIDER_ID);return}v=we(p);break;default:v=we(p)}s.a(v)}}))):Dr?it(s.u(),me("Solve the reCAPTCHA").toString()):!Dr&&c&&s.i().click():(s.O().focus(),it(s.B(),Du().toString()))}ve.phoneSignInStart=function(t,s,a,c){var d=dE(P(t))||{};ro=null,Dr=!(d&&d.size==="invisible");var p=a_(t),v=vE(P(t)),w=p?gE(P(t)):null;v=a&&a.a||v&&v.c||null,a=a&&a.Aa||w,(w=vd(P(t)))&&mg(w),Cd=w?new hg(vd(P(t))):to;var k=new Po(function(j){b_(t,k,N,!(!j||!j.keyCode))},Dr,p?null:function(){N.clear(),k.m(),Ce(t,s)},Ve(P(t)),He(P(t)),p,Cd,v,a);k.render(s),re(t,k),c&&k.a(c),d.callback=function(j){k.u()&&Lt(k.u()),ro=j,Dr||b_(t,k,N)},d["expired-callback"]=function(){ro=null};var N=new V.auth.RecaptchaVerifier(Dr?k.ba():k.i(),d,$t(t).app);Z(t,k.I(Q(N.render,N),[],function(j){Pg=j},function(j){j.name&&j.name=="cancel"||(j=we(j),k.m(),Ce(t,s,void 0,j))}))},ve.prefilledEmailSignIn=function(t,s,a){var c=new Vl;c.render(s),re(t,c),Z(t,c.I(Q(ue(t).fetchSignInMethodsForEmail,ue(t)),[a],function(d){c.m();var p=!(!Ml(t)||!E_(t));c_(t,s,d,a,void 0,p)},function(d){d=we(d),c.m(),U("signIn",t,s,a,d)}))};function No(t,s,a,c,d){A.call(this,Vv,{Sb:s},d,"providerSignIn",{F:a,D:c}),this.i=t}f(No,A),No.prototype.v=function(){this.l(this.i),A.prototype.v.call(this)},No.prototype.o=function(){this.i=null,A.prototype.o.call(this)},ie(No.prototype,{l:function(t){function s(v){t(v)}for(var a=this.g?Tu("firebaseui-id-idp-button",this.g||this.s.a):[],c=0;c<a.length;c++){var d=a[c],p=Hl(d,"providerId");Ne(this,d,Te(s,p))}}}),ve.providerSignIn=function(t,s,a,c){var d=new No(function(p){p==V.auth.EmailAuthProvider.PROVIDER_ID?(d.m(),Md(t,s,c)):p==V.auth.PhoneAuthProvider.PROVIDER_ID?(d.m(),U("phoneSignInStart",t,s)):p=="anonymous"?DE(t,d):mo(t,d,p,c),pe(t),t.l.cancel()},bg(P(t)),Ve(P(t)),He(P(t)));d.render(s),re(t,d),a&&d.a(a),rC(t)},ve.sendEmailLinkForSignIn=function(t,s,a,c){var d=new xl;d.render(s),re(t,d),Ld(t,d,a,c,function(p){d.m(),p&&p.code=="auth/admin-restricted-operation"&&Vi(P(t))?U("handleUnauthorizedUser",t,s,a,V.auth.EmailAuthProvider.PROVIDER_ID):(p=we(p),U("signIn",t,s,a,p))})};function Oo(t,s,a,c,d,p,v){A.call(this,lv,{email:a,Va:!!s,ia:!!p},v,"signIn",{F:c,D:d}),this.i=t,this.u=s}f(Oo,A),Oo.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),jl(this.l(),(this.l().value||"").length),A.prototype.v.call(this)},Oo.prototype.o=function(){this.u=this.i=null,A.prototype.o.call(this)},ie(Oo.prototype,{l:Cn,M:oi,w:Gr,H:qr,j:Kr,U:Ze,P:Ye,B:rt}),ve.signIn=function(t,s,a,c){var d=Ml(t),p=new Oo(function(){var v=p,w=v.j()||"";w&&l_(t,v,w)},d?null:function(){p.m(),Ce(t,s,a)},a,Ve(P(t)),He(P(t)),d);p.render(s),re(t,p),c&&p.a(c)};function Do(t,s,a,c,d,p,v){A.call(this,Sv,{kc:t,yb:a,Eb:!!c},v,"unauthorizedUser",{F:d,D:p}),this.l=s,this.i=c}f(Do,A),Do.prototype.v=function(){var t=this,s=fe(this,"firebaseui-id-unauthorized-user-help-link");this.i&&s&&Ne(this,s,function(){t.i()}),Ne(this,this.u(),function(){t.l()}),this.u().focus(),A.prototype.v.call(this)},Do.prototype.o=function(){this.i=this.l=null,A.prototype.o.call(this)},ie(Do.prototype,{u:Ye}),ve.handleUnauthorizedUser=function(t,s,a,c){function d(){Ce(t,s)}c===V.auth.EmailAuthProvider.PROVIDER_ID?d=function(){Md(t,s)}:c===V.auth.PhoneAuthProvider.PROVIDER_ID&&(d=function(){U("phoneSignInStart",t,s)});var p=null,v=null;c===V.auth.EmailAuthProvider.PROVIDER_ID&&Ig(P(t))?(p=pE(P(t)),v=mE(P(t))):Vi(P(t))&&(p=hE(P(t)),v=fE(P(t)));var w=new Do(a,function(){w.m(),d()},p,v,Ve(P(t)),He(P(t)));w.render(s),re(t,w)};function Lo(t,s,a,c,d,p){A.call(this,kv,{email:t},p,"unsupportedProvider",{F:c,D:d}),this.l=s,this.i=a}f(Lo,A),Lo.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),A.prototype.v.call(this)},Lo.prototype.o=function(){this.i=this.l=null,A.prototype.o.call(this)},ie(Lo.prototype,{u:Ze,B:Ye,w:rt}),ve.unsupportedProvider=function(t,s,a){var c=new Lo(a,function(){c.m(),U("passwordRecovery",t,s,a)},function(){c.m(),Ce(t,s,a)},Ve(P(t)),He(P(t)));c.render(s),re(t,c)};function cn(t,s){this.$=!1;var a=zd(s);if(Mo[a])throw Error('An AuthUI instance already exists for the key "'+a+'"');Mo[a]=this,this.a=t,this.u=null,this.Y=!1,w_(this.a),this.h=V.initializeApp({apiKey:t.app.options.apiKey,authDomain:t.app.options.authDomain},t.app.name+"-firebaseui-temp").auth(),(t=t.emulatorConfig)&&(a=t.port,this.h.useEmulator(t.protocol+"://"+t.host+(a===null?"":":"+a),t.options)),w_(this.h),this.h.setPersistence&&this.h.setPersistence(V.auth.Auth.Persistence.SESSION),this.oa=s,this.ca=new uE,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=Yu.Xa(),this.j=this.C=null,this.da=this.A=!1}function w_(t){t&&t.INTERNAL&&t.INTERNAL.logFramework&&t.INTERNAL.logFramework("FirebaseUI-web")}var Mo={};function zd(t){return t||"[DEFAULT]"}function I_(t){return pe(t),t.i||(t.i=kn(t,function(s){return s&&!sn(G(t))?xe($t(t).getRedirectResult().then(function(a){return a},function(a){if(a&&a.code=="auth/email-already-in-use"&&a.email&&a.credential)throw a;return li(t,a)})):xe(ue(t).getRedirectResult().then(function(a){return wl(P(t))&&!a.user&&t.j&&!t.j.isAnonymous?$t(t).getRedirectResult():a}))})),t.i}function re(t,s){pe(t),t.g=s}var Qr=null;function ue(t){return pe(t),t.h}function $t(t){return pe(t),t.a}function G(t){return pe(t),t.oa}function E_(t){return pe(t),t.O?t.O.emailHint:void 0}n=cn.prototype,n.nb=function(){return pe(this),!!dd(G(this))||C_(En())};function C_(t){return t=new Ai(t),(t.a.a.get(qe.ub)||null)==="signIn"&&!!t.a.a.get(qe.$a)}n.start=function(t,s){S_(this,t,s)};function S_(t,s,a,c){pe(t),typeof t.a.languageCode<"u"&&(t.u=t.a.languageCode);var d="en".replace(/_/g,"-");t.a.languageCode=d,t.h.languageCode=d,t.Y=!0,typeof t.a.tenantId<"u"&&(t.h.tenantId=t.a.tenantId),t.ib(a),t.O=c||null;var p=g.document;t.C?t.C.then(function(){p.readyState=="complete"?zl(t,s):Gs(window,"load",function(){zl(t,s)})}):p.readyState=="complete"?zl(t,s):Gs(window,"load",function(){zl(t,s)})}function zl(t,s){var a=Za(s,"Could not find the FirebaseUI widget element on the page.");if(a.setAttribute("lang","en".replace(/_/g,"-")),Qr){var c=Qr;pe(c),sn(G(c))&&ri("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),Qr.reset()}if(Qr=t,t.T=a,iC(t,a),yl(new ad)&&yl(new ld)){s=Za(s,"Could not find the FirebaseUI widget element on the page."),a=En(),c=pd(P(t).a,"queryParameterForSignInSuccessUrl"),a=(a=Fa(a,c))?Qn(Ba(a)).toString():null;e:{c=En();var d=Sg(P(t));c=Fa(c,d)||"";for(p in Ed)if(Ed[p].toLowerCase()==c.toLowerCase()){var p=Ed[p];break e}p="callback"}switch(p){case"callback":a&&(p=G(t),Ar(Zs,a,p)),t.nb()?U("callback",t,s):Ce(t,s,E_(t));break;case"resetPassword":U("passwordReset",t,s,go(),xd());break;case"recoverEmail":U("emailChangeRevocation",t,s,go());break;case"revertSecondFactorAddition":U("revertSecondFactorAddition",t,s,go());break;case"verifyEmail":U("emailVerification",t,s,go(),xd());break;case"verifyAndChangeEmail":U("verifyAndChangeEmail",t,s,go(),xd());break;case"signIn":U("emailLinkSignInCallback",t,s,En()),A_();break;case"select":a&&(p=G(t),Ar(Zs,a,p)),Ce(t,s);break;default:throw Error("Unhandled widget operation.")}s=P(t),(s=io(s).uiShown||null)&&s()}else s=Za(s,"Could not find the FirebaseUI widget element on the page."),p=new s_(me("The browser you are using does not support Web Storage. Please try again in a different browser.").toString()),p.render(s),re(t,p);s=t.g&&t.g.Ga=="blank"&&_d(P(t)),dd(G(t))&&!s&&(s=dd(G(t)),R_(t,s.a),yt(Bi,G(t)))}function kn(t,s){if(t.A)return s(k_(t));if(Z(t,function(){t.A=!1}),wl(P(t))){var a=new $e(function(c){Z(t,t.a.onAuthStateChanged(function(d){t.j=d,t.A||(t.A=!0,c(s(k_(t))))}))});return Z(t,a),a}return t.A=!0,s(null)}function k_(t){return pe(t),wl(P(t))&&t.j&&t.j.isAnonymous?t.j:null}function Z(t,s){if(pe(t),s){t.s.push(s);var a=function(){Lw(t.s,function(c){return c==s})};typeof s!="function"&&s.then(a,a)}}n.Db=function(){pe(this),this.Z=!0};function nC(t){pe(t);var s;return(s=t.Z)||(t=P(t),t=Cg(t,V.auth.GoogleAuthProvider.PROVIDER_ID),s=!(!t||t.prompt!=="select_account")),s}function T_(t){typeof t.a.languageCode<"u"&&t.Y&&(t.Y=!1,t.a.languageCode=t.u)}function R_(t,s){t.a.tenantId=s,t.h.tenantId=s}n.reset=function(){pe(this);var t=this;this.T&&this.T.removeAttribute("lang"),this.J&&FI(this.J),T_(this),this.O=null,A_(),yt(Bi,G(this)),pe(this),this.l.cancel(),this.i=xe({user:null,credential:null}),Qr==this&&(Qr=null),this.T=null;for(var s=0;s<this.s.length;s++)typeof this.s[s]=="function"?this.s[s]():this.s[s].cancel&&this.s[s].cancel();this.s=[],on(G(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=ai(this).then(function(){t.C=null},function(){t.C=null}))};function iC(t,s){t.L=null,t.J=new Qa(s),t.J.register(),qt(t.J,"pageEnter",function(a){if(a=a&&a.pageId,t.L!=a){var c=P(t);(c=io(c).uiChanged||null)&&c(t.L,a),t.L=a}})}n.ib=function(t){pe(this);var s=this.ca,a;for(a in t)try{fd(s.a,a,t[a])}catch{Ot('Invalid config: "'+a+'"',void 0)}rI&&fd(s.a,"popupMode",!1),vd(s),!this.da&&yd(P(this))&&(ri("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)};function P(t){return pe(t),t.ca}n.Wb=function(){pe(this);var t=P(this),s=pd(t.a,"widgetUrl");t=Sg(t);for(var a=s.search(Cp),c=0,d,p=[];0<=(d=Ep(s,c,t,a));)p.push(s.substring(c,d)),c=Math.min(s.indexOf("&",d)+1||a,a);p.push(s.substr(c)),s=p.join("").replace(Kw,"$1"),a="="+encodeURIComponent("select"),(t+=a)?(a=s.indexOf("#"),0>a&&(a=s.length),c=s.indexOf("?"),0>c||c>a?(c=a,d=""):d=s.substring(c+1,a),s=[s.substr(0,c),d,s.substr(a)],a=s[1],s[1]=t?a?a+"&"+t:t:a,a=s[0]+(s[1]?"?"+s[1]:"")+s[2]):a=s,P(this).a.get("popupMode")?(t=(window.screen.availHeight-600)/2,s=(window.screen.availWidth-500)/2,a=a||"about:blank",t={width:500,height:600,top:0<t?t:0,left:0<s?s:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},t.target=t.target||a.target||"google_popup",t.width=t.width||690,t.height=t.height||500,(t=km(a,t))&&t.focus()):_r(window.location,a)};function pe(t){if(t.$)throw Error("AuthUI instance is deleted!")}n.Wa=function(){var t=this;return pe(this),this.h.app.delete().then(function(){var s=zd(G(t));delete Mo[s],t.reset(),t.$=!0})};function rC(t){pe(t);try{Om(t.l,wg(P(t)),nC(t)).then(function(s){return t.g?LE(t,t.g,s):!1})}catch{}}n.Ib=function(t,s){pe(this);var a=this,c=zI();if(!Or(P(this)))return yr(Error("Email link sign-in should be enabled to trigger email sending."));var d=yE(P(this)),p=new Ai(d.url);return eI(p,c),s&&s.a&&(cE(c,s,G(this)),Ap(p,s.a.providerId)),tI(p,_E(P(this))),kn(this,function(v){return v&&((v=v.uid)?p.a.a.set(qe.Pa,v):Ri(p.a.a,qe.Pa)),d.url=p.toString(),ue(a).sendSignInLinkToEmail(t,d)}).then(function(){var v=G(a),w={};w.email=t,Ar(Tr,Zm(c,JSON.stringify(w)),v)},function(v){throw yt(eo,G(a)),yt(Tr,G(a)),v})};function sC(t,s){var a=Rp(new Ai(s));return a?(s=new $e(function(c,d){var p=$t(t).onAuthStateChanged(function(v){p(),v&&v.isAnonymous&&v.uid===a?c(v):v&&v.isAnonymous&&v.uid!==a?d(Error("anonymous-user-mismatch")):d(Error("anonymous-user-not-found"))});Z(t,p)}),Z(t,s),s):xe(null)}function oC(t,s,a,c,d){pe(t);var p=d||null,v=V.auth.EmailAuthProvider.credentialWithLink(a,c);return a=p?ue(t).signInWithEmailLink(a,c).then(function(w){return w.user.linkWithCredential(p)}).then(function(){return ai(t)}).then(function(){return li(t,{code:"auth/email-already-in-use"},p)}):ue(t).fetchSignInMethodsForEmail(a).then(function(w){return w.length?li(t,{code:"auth/email-already-in-use"},v):s.linkWithCredential(v)}),Z(t,a),a}function aC(t,s,a,c){pe(t);var d=c||null,p;return s=ue(t).signInWithEmailLink(s,a).then(function(v){if(p={user:v.user,credential:null,operationType:v.operationType,additionalUserInfo:v.additionalUserInfo},d)return v.user.linkWithCredential(d).then(function(w){p={user:w.user,credential:d,operationType:p.operationType,additionalUserInfo:w.additionalUserInfo}})}).then(function(){ai(t)}).then(function(){return $t(t).updateCurrentUser(p.user)}).then(function(){return p.user=$t(t).currentUser,p}),Z(t,s),s}function A_(){var t=En();if(C_(t)){t=new Ai(t);for(var s in qe)qe.hasOwnProperty(s)&&Ri(t.a.a,qe[s]);s={state:"signIn",mode:"emailLink",operation:"clear"};var a=g.document.title;g.history&&g.history.replaceState&&g.history.replaceState(s,a,t.toString())}}n.bc=function(t,s){pe(this);var a=this;return ue(this).signInWithEmailAndPassword(t,s).then(function(c){return kn(a,function(d){return d?ai(a).then(function(){return li(a,{code:"auth/email-already-in-use"},V.auth.EmailAuthProvider.credential(t,s))}):c})})},n.Yb=function(t,s){pe(this);var a=this;return kn(this,function(c){if(c){var d=V.auth.EmailAuthProvider.credential(t,s);return c.linkWithCredential(d)}return ue(a).createUserWithEmailAndPassword(t,s)})},n.ac=function(t){pe(this);var s=this;return kn(this,function(a){return a?a.linkWithCredential(t).then(function(c){return c},function(c){if(c&&c.code=="auth/email-already-in-use"&&c.email&&c.credential)throw c;return li(s,c,t)}):ue(s).signInWithCredential(t)})};function lC(t,s){return pe(t),kn(t,function(a){return a&&!sn(G(t))?a.linkWithPopup(s).then(function(c){return c},function(c){if(c&&c.code=="auth/email-already-in-use"&&c.email&&c.credential)throw c;return li(t,c)}):ue(t).signInWithPopup(s)})}n.dc=function(t){pe(this);var s=this,a=this.i;return this.i=null,kn(this,function(c){return c&&!sn(G(s))?c.linkWithRedirect(t):ue(s).signInWithRedirect(t)}).then(function(){},function(c){throw s.i=a,c})},n.cc=function(t,s){pe(this);var a=this;return kn(this,function(c){return c?c.linkWithPhoneNumber(t,s).then(function(d){return new Qu(d,function(p){if(p.code=="auth/credential-already-in-use")return li(a,p);throw p})}):$t(a).signInWithPhoneNumber(t,s).then(function(d){return new Qu(d)})})},n.$b=function(){return pe(this),$t(this).signInAnonymously()};function cC(t,s){return pe(t),kn(t,function(a){if(t.j&&!t.j.isAnonymous&&wl(P(t))&&!ue(t).currentUser)return ai(t).then(function(){return s.credential.providerId=="password"&&(s.credential=null),s});if(a)return ai(t).then(function(){return a.linkWithCredential(s.credential)}).then(function(c){return s.user=c.user,s.credential=c.credential,s.operationType=c.operationType,s.additionalUserInfo=c.additionalUserInfo,s},function(c){if(c&&c.code=="auth/email-already-in-use"&&c.email&&c.credential)throw c;return li(t,c,s.credential)});if(!s.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return ai(t).then(function(){return $t(t).updateCurrentUser(s.user)}).then(function(){return s.user=$t(t).currentUser,s.operationType="signIn",s.credential&&s.credential.providerId&&s.credential.providerId=="password"&&(s.credential=null),s})})}n.Xb=function(t,s){return pe(this),ue(this).signInWithEmailAndPassword(t,s)};function ai(t){return pe(t),ue(t).signOut()}function li(t,s,a){if(pe(t),s&&s.code&&(s.code=="auth/email-already-in-use"||s.code=="auth/credential-already-in-use")){var c=Ag(P(t));return xe().then(function(){return c(new Vs("anonymous-upgrade-merge-conflict",null,a||s.credential))}).then(function(){throw t.g&&(t.g.m(),t.g=null),s})}return yr(s)}function xo(t,s,a,c){A.call(this,qv,void 0,c,"providerMatchByEmail",{F:s,D:a}),this.i=t}f(xo,A),xo.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),jl(this.l(),(this.l().value||"").length),A.prototype.v.call(this)},xo.prototype.o=function(){this.i=null,A.prototype.o.call(this)},ie(xo.prototype,{l:Cn,H:oi,u:Gr,B:qr,j:Kr,M:Ze,w:rt});function Gl(t,s,a,c,d){A.call(this,Gv,{ec:s},d,"selectTenant",{F:a,D:c}),this.i=t}f(Gl,A),Gl.prototype.v=function(){uC(this,this.i),A.prototype.v.call(this)},Gl.prototype.o=function(){this.i=null,A.prototype.o.call(this)};function uC(t,s){function a(w){s(w)}for(var c=t.g?Tu("firebaseui-id-tenant-selection-button",t.g||t.s.a):[],d=0;d<c.length;d++){var p=c[d],v=Hl(p,"tenantId");Ne(t,p,Te(a,v))}}function Gd(t){A.call(this,pv,void 0,t,"spinner")}f(Gd,A);function dC(t){this.a=new hd,je(this.a,"authDomain"),je(this.a,"displayMode",Kl),je(this.a,"tenants"),je(this.a,"callbacks"),je(this.a,"tosUrl"),je(this.a,"privacyPolicyUrl");for(var s in t)if(t.hasOwnProperty(s))try{fd(this.a,s,t[s])}catch{Ot('Invalid config: "'+s+'"',void 0)}}function hC(t){t=t.a.get("displayMode");for(var s in Kd)if(Kd[s]===t)return Kd[s];return Kl}function ql(t){return t.a.get("callbacks")||{}}function P_(t){var s=t.a.get("tosUrl")||null;if(t=t.a.get("privacyPolicyUrl")||null,s&&!t&&ri("Privacy Policy URL is missing, the link will not be displayed."),s&&t){if(typeof s=="function")return s;if(typeof s=="string")return function(){wr(s)}}return null}function N_(t){var s=t.a.get("tosUrl")||null,a=t.a.get("privacyPolicyUrl")||null;if(a&&!s&&ri("Terms of Service URL is missing, the link will not be displayed."),s&&a){if(typeof a=="function")return a;if(typeof a=="string")return function(){wr(a)}}return null}function qd(t,s){if(t=t.a.get("tenants"),!t||!t.hasOwnProperty(s)&&!t.hasOwnProperty($l))throw Error("Invalid tenant configuration!")}function O_(t,s,a){if(t=t.a.get("tenants"),!t)throw Error("Invalid tenant configuration!");var c=[];if(t=t[s]||t[$l],!t)return Ot("Invalid tenant configuration: "+(s+" is not configured!"),void 0),c;if(s=t.signInOptions,!s)throw Error("Invalid tenant configuration: signInOptions are invalid!");return s.forEach(function(d){if(typeof d=="string")c.push(d);else if(typeof d.provider=="string"){var p=d.hd;p&&a?(p instanceof RegExp?p:new RegExp("@"+p.replace(".","\\.")+"$")).test(a)&&c.push(d.provider):c.push(d.provider)}else d="Invalid tenant configuration: signInOption "+(JSON.stringify(d)+" is invalid!"),Ot(d,void 0)}),c}function fC(t,s,a){return t=pC(t,s),(s=t.signInOptions)&&a&&(s=s.filter(function(c){return typeof c=="string"?a.includes(c):a.includes(c.provider)}),t.signInOptions=s),t}function pC(t,s){var a=mC,c=c===void 0?{}:c;return qd(t,s),t=t.a.get("tenants"),GI(t[s]||t[$l],a,c)}var mC=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],Kl="optionFirst",Kd={pc:Kl,oc:"identifierFirst"},$l="*";function Yt(t,s){var a=this;this.s=Za(t),this.a={},Object.keys(s).forEach(function(c){a.a[c]=new dC(s[c])}),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(c){this.ob=c||null},enumerable:!1})}n=Yt.prototype,n.Ub=function(t,s){var a=this;ci(this);var c=t.apiKey;return new $e(function(d,p){if(a.a.hasOwnProperty(c)){var v=ql(a.a[c]).selectTenantUiHidden||null;if(hC(a.a[c])===Kl){var w=[];s.forEach(function(j){j=j||"_";var be=a.a[c].a.get("tenants");if(!be)throw Error("Invalid tenant configuration!");(be=be[j]||be[$l])?j={tenantId:j!=="_"?j:null,V:be.fullLabel||null,displayName:be.displayName,za:be.iconUrl,ta:be.buttonColor}:(Ot("Invalid tenant configuration: "+(j+" is not configured!"),void 0),j=null),j&&w.push(j)});var k=function(j){j={tenantId:j,providerIds:O_(a.a[c],j||"_")},d(j)};if(w.length===1){k(w[0].tenantId);return}a.g=new Gl(function(j){ci(a),v&&v(),k(j)},w,P_(a.a[c]),N_(a.a[c]))}else a.g=new xo(function(){var j=a.g.j();if(j){for(var be=0;be<s.length;be++){var Jt=O_(a.a[c],s[be]||"_",j);if(Jt.length!==0){j={tenantId:s[be],providerIds:Jt,email:j},ci(a),v&&v(),d(j);return}}a.g.a(tm({code:"no-matching-tenant-for-email"}).toString())}},P_(a.a[c]),N_(a.a[c]));a.g.render(a.s),(p=ql(a.a[c]).selectTenantUiShown||null)&&p()}else{var N=Error("Invalid project configuration: API key is invalid!");N.code="invalid-configuration",a.pb(N),p(N)}})},n.Pb=function(t,s){if(!this.a.hasOwnProperty(t))throw Error("Invalid project configuration: API key is invalid!");var a=s||void 0;qd(this.a[t],s||"_");try{this.i=V.app(a).auth()}catch{var c=this.a[t].a.get("authDomain");if(!c)throw Error("Invalid project configuration: authDomain is required!");t=V.initializeApp({apiKey:t,authDomain:c},a),t.auth().tenantId=s,this.i=t.auth()}return this.i},n.Zb=function(t,s){var a=this;return new $e(function(c,d){function p(be,Jt){a.j=new cn(t),S_(a.j,a.s,be,Jt)}var v=t.app.options.apiKey;a.a.hasOwnProperty(v)||d(Error("Invalid project configuration: API key is invalid!"));var w=fC(a.a[v],t.tenantId||"_",s&&s.providerIds);ci(a),d={signInSuccessWithAuthResult:function(be){return c(be),!1}};var k=ql(a.a[v]).signInUiShown||null,N=!1;d.uiChanged=function(be,Jt){be===null&&Jt==="callback"?((be=Ru("firebaseui-id-page-callback",a.s))&&Lt(be),a.h=new Gd,a.h.render(a.s)):N||be===null&&Jt==="spinner"||Jt==="blank"||(a.h&&(a.h.m(),a.h=null),N=!0,k&&k(t.tenantId))},w.callbacks=d,w.credentialHelper="none";var j;s&&s.email&&(j={emailHint:s.email}),a.j?a.j.Wa().then(function(){p(w,j)}):p(w,j)})},n.reset=function(){var t=this;return xe().then(function(){t.j&&t.j.Wa()}).then(function(){t.j=null,ci(t)})},n.Vb=function(){var t=this;this.h||this.A||(this.A=window.setTimeout(function(){ci(t),t.h=new Gd,t.g=t.h,t.h.render(t.s),t.A=null},500))},n.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},n.Bb=function(){return ci(this),this.g=new e_,this.g.render(this.s),xe()};function ci(t){t.j&&t.j.reset(),t.mb(),t.g&&t.g.m()}n.pb=function(t){var s=this,a=tm({code:t.code}).toString()||t.message;ci(this);var c;t.retry&&typeof t.retry=="function"&&(c=function(){s.reset(),t.retry()}),this.g=new r_(a,c),this.g.render(this.s)},n.Rb=function(t){var s=this;return xe().then(function(){var a=s.i&&s.i.app.options.apiKey;if(!s.a.hasOwnProperty(a))throw Error("Invalid project configuration: API key is invalid!");if(qd(s.a[a],t.tenantId||"_"),!s.i.currentUser||s.i.currentUser.uid!==t.uid)throw Error("The user being processed does not match the signed in user!");return(a=ql(s.a[a]).beforeSignInSuccess||null)?a(t):t}).then(function(a){if(a.uid!==t.uid)throw Error("User with mismatching UID returned.");return a})},ge("firebaseui.auth.FirebaseUiHandler",Yt),ge("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Yt.prototype.Ub),ge("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Yt.prototype.Pb),ge("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Yt.prototype.Zb),ge("firebaseui.auth.FirebaseUiHandler.prototype.reset",Yt.prototype.reset),ge("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Yt.prototype.Vb),ge("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Yt.prototype.mb),ge("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Yt.prototype.Bb),ge("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Yt.prototype.pb),ge("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Yt.prototype.Rb),ge("firebaseui.auth.AuthUI",cn),ge("firebaseui.auth.AuthUI.getInstance",function(t){return t=zd(t),Mo[t]?Mo[t]:null}),ge("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",cn.prototype.Db),ge("firebaseui.auth.AuthUI.prototype.start",cn.prototype.start),ge("firebaseui.auth.AuthUI.prototype.setConfig",cn.prototype.ib),ge("firebaseui.auth.AuthUI.prototype.signIn",cn.prototype.Wb),ge("firebaseui.auth.AuthUI.prototype.reset",cn.prototype.reset),ge("firebaseui.auth.AuthUI.prototype.delete",cn.prototype.Wa),ge("firebaseui.auth.AuthUI.prototype.isPendingRedirect",cn.prototype.nb),ge("firebaseui.auth.AuthUIError",Vs),ge("firebaseui.auth.AuthUIError.prototype.toJSON",Vs.prototype.toJSON),ge("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",bd),ge("firebaseui.auth.CredentialHelper.NONE",El),ge("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),$e.prototype.catch=$e.prototype.Ca,$e.prototype.finally=$e.prototype.fc}).apply(typeof global<"u"?global:typeof self<"u"?self:window)}).apply(typeof global<"u"?global:typeof self<"u"?self:window);typeof window<"u"&&(window.dialogPolyfill=nA);var iA=firebaseui.auth;function rA(n){new iA.AuthUI(n.auth()).start("#login",{signInOptions:[n.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:()=>!1}})}function le(){}const Ef=n=>n;function sA(n,e){for(const i in e)n[i]=e[i];return n}function oA(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function Lb(n){return n()}function cy(){return Object.create(null)}function ur(n){n.forEach(Lb)}function Qc(n){return typeof n=="function"}function bn(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Jl;function mn(n,e){return Jl||(Jl=document.createElement("a")),Jl.href=e,n===Jl.href}function aA(n){return Object.keys(n).length===0}function lA(n,...e){if(n==null)return le;const i=n.subscribe(...e);return i.unsubscribe?()=>i.unsubscribe():i}function ft(n,e,i){n.$$.on_destroy.push(lA(e,i))}function gc(n,e,i){return n.set(i),e}function cA(n){const e=typeof n=="string"&&n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[n,"px"]}const Mb=typeof window<"u";let xb=Mb?()=>window.performance.now():()=>Date.now(),Cf=Mb?n=>requestAnimationFrame(n):le;const cs=new Set;function Fb(n){cs.forEach(e=>{e.c(n)||(cs.delete(e),e.f())}),cs.size!==0&&Cf(Fb)}function Ub(n){let e;return cs.size===0&&Cf(Fb),{promise:new Promise(i=>{cs.add(e={c:n,f:i})}),abort(){cs.delete(e)}}}const uA=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in uA;function B(n,e){n.appendChild(e)}function Bb(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function dA(n){const e=W("style");return hA(Bb(n),e),e.sheet}function hA(n,e){return B(n.head||n,e),e.sheet}function he(n,e,i){n.insertBefore(e,i||null)}function se(n){n.parentNode&&n.parentNode.removeChild(n)}function jb(n,e){for(let i=0;i<n.length;i+=1)n[i]&&n[i].d(e)}function W(n){return document.createElement(n)}function ys(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function pi(n){return document.createTextNode(n)}function Ee(){return pi(" ")}function ka(){return pi("")}function Fn(n,e,i,r){return n.addEventListener(e,i,r),()=>n.removeEventListener(e,i,r)}function fA(n){return function(e){return e.stopPropagation(),n.call(this,e)}}function L(n,e,i){i==null?n.removeAttribute(e):n.getAttribute(e)!==i&&n.setAttribute(e,i)}function pA(n){return Array.from(n.childNodes)}function vc(n,e){e=""+e,n.data!==e&&(n.data=e)}function uy(n,e){n.value=e??""}function Ht(n,e,i){n.classList[i?"add":"remove"](e)}function Vb(n,e,{bubbles:i=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(n,i,r,e),o}const _c=new Map;let yc=0;function mA(n){let e=5381,i=n.length;for(;i--;)e=(e<<5)-e^n.charCodeAt(i);return e>>>0}function gA(n,e){const i={stylesheet:dA(e),rules:{}};return _c.set(n,i),i}function Hb(n,e,i,r,o,l,u,f=0){const h=16.666/r;let m=`{
`;for(let I=0;I<=1;I+=h){const E=e+(i-e)*l(I);m+=I*100+`%{${u(E,1-E)}}
`}const y=m+`100% {${u(i,1-i)}}
}`,g=`__svelte_${mA(y)}_${f}`,b=Bb(n),{stylesheet:S,rules:C}=_c.get(b)||gA(b,n);C[g]||(C[g]=!0,S.insertRule(`@keyframes ${g} ${y}`,S.cssRules.length));const _=n.style.animation||"";return n.style.animation=`${_?`${_}, `:""}${g} ${r}ms linear ${o}ms 1 both`,yc+=1,g}function Ah(n,e){const i=(n.style.animation||"").split(", "),r=i.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),o=i.length-r.length;o&&(n.style.animation=r.join(", "),yc-=o,yc||vA())}function vA(){Cf(()=>{yc||(_c.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&se(e)}),_c.clear())})}let ha;function An(n){ha=n}function Sf(){if(!ha)throw new Error("Function called outside component initialization");return ha}function _A(n){Sf().$$.on_mount.push(n)}function yA(){const n=Sf();return(e,i,{cancelable:r=!1}={})=>{const o=n.$$.callbacks[e];if(o){const l=Vb(e,i,{cancelable:r});return o.slice().forEach(u=>{u.call(n,l)}),!l.defaultPrevented}return!0}}function bA(n,e){const i=n.$$.callbacks[e.type];i&&i.slice().forEach(r=>r.call(this,e))}const ns=[],dy=[];let us=[];const hy=[],wA=Promise.resolve();let Ph=!1;function IA(){Ph||(Ph=!0,wA.then(kf))}function Un(n){us.push(n)}const lh=new Set;let Zr=0;function kf(){if(Zr!==0)return;const n=ha;do{try{for(;Zr<ns.length;){const e=ns[Zr];Zr++,An(e),EA(e.$$)}}catch(e){throw ns.length=0,Zr=0,e}for(An(null),ns.length=0,Zr=0;dy.length;)dy.pop()();for(let e=0;e<us.length;e+=1){const i=us[e];lh.has(i)||(lh.add(i),i())}us.length=0}while(ns.length);for(;hy.length;)hy.pop()();Ph=!1,lh.clear(),An(n)}function EA(n){if(n.fragment!==null){n.update(),ur(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Un)}}function CA(n){const e=[],i=[];us.forEach(r=>n.indexOf(r)===-1?e.push(r):i.push(r)),i.forEach(r=>r()),us=e}let Ho;function Wb(){return Ho||(Ho=Promise.resolve(),Ho.then(()=>{Ho=null})),Ho}function bc(n,e,i){n.dispatchEvent(Vb(`${e?"intro":"outro"}${i}`))}const rc=new Set;let hi;function Xc(){hi={r:0,c:[],p:hi}}function Zc(){hi.r||ur(hi.c),hi=hi.p}function Oe(n,e){n&&n.i&&(rc.delete(n),n.i(e))}function We(n,e,i,r){if(n&&n.o){if(rc.has(n))return;rc.add(n),hi.c.push(()=>{rc.delete(n),r&&(i&&n.d(1),r())}),n.o(e)}else r&&r()}const zb={duration:0};function eu(n,e,i){const r={direction:"in"};let o=e(n,i,r),l=!1,u,f,h=0;function m(){u&&Ah(n,u)}function y(){const{delay:b=0,duration:S=300,easing:C=Ef,tick:_=le,css:I}=o||zb;I&&(u=Hb(n,0,1,S,b,C,I,h++)),_(0,1);const E=xb()+b,T=E+S;f&&f.abort(),l=!0,Un(()=>bc(n,!0,"start")),f=Ub(R=>{if(l){if(R>=T)return _(1,0),bc(n,!0,"end"),m(),l=!1;if(R>=E){const F=C((R-E)/S);_(F,1-F)}}return l})}let g=!1;return{start(){g||(g=!0,Ah(n),Qc(o)?(o=o(r),Wb().then(y)):y())},invalidate(){g=!1},end(){l&&(m(),l=!1)}}}function tu(n,e,i){const r={direction:"out"};let o=e(n,i,r),l=!0,u;const f=hi;f.r+=1;function h(){const{delay:m=0,duration:y=300,easing:g=Ef,tick:b=le,css:S}=o||zb;S&&(u=Hb(n,1,0,y,m,g,S));const C=xb()+m,_=C+y;Un(()=>bc(n,!1,"start")),Ub(I=>{if(l){if(I>=_)return b(0,1),bc(n,!1,"end"),--f.r||ur(f.c),!1;if(I>=C){const E=g((I-C)/y);b(1-E,E)}}return l})}return Qc(o)?Wb().then(()=>{o=o(r),h()}):h(),{end(m){m&&o.tick&&o.tick(1,0),l&&(u&&Ah(n,u),l=!1)}}}function Gb(n,e){const i=e.token={};function r(o,l,u,f){if(e.token!==i)return;e.resolved=f;let h=e.ctx;u!==void 0&&(h=h.slice(),h[u]=f);const m=o&&(e.current=o)(h);let y=!1;e.block&&(e.blocks?e.blocks.forEach((g,b)=>{b!==l&&g&&(Xc(),We(g,1,1,()=>{e.blocks[b]===g&&(e.blocks[b]=null)}),Zc())}):e.block.d(1),m.c(),Oe(m,1),m.m(e.mount(),e.anchor),y=!0),e.block=m,e.blocks&&(e.blocks[l]=m),y&&kf()}if(oA(n)){const o=Sf();if(n.then(l=>{An(o),r(e.then,1,e.value,l),An(null)},l=>{if(An(o),r(e.catch,2,e.error,l),An(null),!e.hasCatch)throw l}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,n),!0;e.resolved=n}}function qb(n,e,i){const r=e.slice(),{resolved:o}=n;n.current===n.then&&(r[n.value]=o),n.current===n.catch&&(r[n.error]=o),n.block.p(r,i)}function SA(n,e){const i={},r={},o={$$scope:1};let l=n.length;for(;l--;){const u=n[l],f=e[l];if(f){for(const h in u)h in f||(r[h]=1);for(const h in f)o[h]||(i[h]=f[h],o[h]=1);n[l]=f}else for(const h in u)o[h]=1}for(const u in r)u in i||(i[u]=void 0);return i}function kA(n){return typeof n=="object"&&n!==null?n:{}}const TA=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...TA];function Ut(n){n&&n.c()}function It(n,e,i,r){const{fragment:o,after_update:l}=n.$$;o&&o.m(e,i),r||Un(()=>{const u=n.$$.on_mount.map(Lb).filter(Qc);n.$$.on_destroy?n.$$.on_destroy.push(...u):ur(u),n.$$.on_mount=[]}),l.forEach(Un)}function Et(n,e){const i=n.$$;i.fragment!==null&&(CA(i.after_update),ur(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function RA(n,e){n.$$.dirty[0]===-1&&(ns.push(n),IA(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Wn(n,e,i,r,o,l,u,f=[-1]){const h=ha;An(n);const m=n.$$={fragment:null,ctx:[],props:l,update:le,not_equal:o,bound:cy(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:cy(),dirty:f,skip_bound:!1,root:e.target||h.$$.root};u&&u(m.root);let y=!1;if(m.ctx=i?i(n,e.props||{},(g,b,...S)=>{const C=S.length?S[0]:b;return m.ctx&&o(m.ctx[g],m.ctx[g]=C)&&(!m.skip_bound&&m.bound[g]&&m.bound[g](C),y&&RA(n,g)),b}):[],m.update(),y=!0,ur(m.before_update),m.fragment=r?r(m.ctx):!1,e.target){if(e.hydrate){const g=pA(e.target);m.fragment&&m.fragment.l(g),g.forEach(se)}else m.fragment&&m.fragment.c();e.intro&&Oe(n.$$.fragment),It(n,e.target,e.anchor,e.customElement),kf()}An(h)}class zn{$destroy(){Et(this,1),this.$destroy=le}$on(e,i){if(!Qc(i))return le;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(i),()=>{const o=r.indexOf(i);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!aA(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fy="@firebase/database",py="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kb="";function AA(n){Kb=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,i){i==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),at(i))}get(e){const i=this.domStorage_.getItem(this.prefixedName_(e));return i==null?null:sa(i)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,i){i==null?delete this.cache_[e]:this.cache_[e]=i}get(e){return nn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new PA(e)}}catch{}return new NA},Ki=$b("localStorage"),Nh=$b("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new jc("@firebase/database"),OA=function(){let n=1;return function(){return n++}}(),Yb=function(n){const e=xC(n),i=new DC;i.update(e);const r=i.digest();return Jh.encodeByteArray(r)},Ta=function(...n){let e="";for(let i=0;i<n.length;i++){const r=n[i];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ta.apply(null,r):typeof r=="object"?e+=at(r):e+=r,e+=" "}return e};let Zi=null,my=!0;const DA=function(n,e){D(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(ds.logLevel=Ie.VERBOSE,Zi=ds.log.bind(ds),e&&Nh.set("logging_enabled",!0)):typeof n=="function"?Zi=n:(Zi=null,Nh.remove("logging_enabled"))},ht=function(...n){if(my===!0&&(my=!1,Zi===null&&Nh.get("logging_enabled")===!0&&DA(!0)),Zi){const e=Ta.apply(null,n);Zi(e)}},Ra=function(n){return function(...e){ht(n,...e)}},Oh=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ta(...n);ds.error(e)},Bn=function(...n){const e=`FIREBASE FATAL ERROR: ${Ta(...n)}`;throw ds.error(e),new Error(e)},Tt=function(...n){const e="FIREBASE WARNING: "+Ta(...n);ds.warn(e)},LA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jb=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},MA=function(n){if(document.readyState==="complete")n();else{let e=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},bs="[MIN_NAME]",ir="[MAX_NAME]",As=function(n,e){if(n===e)return 0;if(n===bs||e===ir)return-1;if(e===bs||n===ir)return 1;{const i=gy(n),r=gy(e);return i!==null?r!==null?i-r===0?n.length-e.length:i-r:-1:r!==null?1:n<e?-1:1}},xA=function(n,e){return n===e?0:n<e?-1:1},Wo=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+at(e))},Tf=function(n){if(typeof n!="object"||n===null)return at(n);const e=[];for(const r in n)e.push(r);e.sort();let i="{";for(let r=0;r<e.length;r++)r!==0&&(i+=","),i+=at(e[r]),i+=":",i+=Tf(n[e[r]]);return i+="}",i},Qb=function(n,e){const i=n.length;if(i<=e)return[n];const r=[];for(let o=0;o<i;o+=e)o+e>i?r.push(n.substring(o,i)):r.push(n.substring(o,o+e));return r};function Rt(n,e){for(const i in n)n.hasOwnProperty(i)&&e(i,n[i])}const Xb=function(n){D(!Jb(n),"Invalid JSON number");const e=11,i=52,r=(1<<e-1)-1;let o,l,u,f,h;n===0?(l=0,u=0,o=1/n===-1/0?1:0):(o=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),r),l=f+r,u=Math.round(n*Math.pow(2,i-f)-Math.pow(2,i))):(l=0,u=Math.round(n/Math.pow(2,1-r-i))));const m=[];for(h=i;h;h-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(h=e;h;h-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(o?1:0),m.reverse();const y=m.join("");let g="";for(h=0;h<64;h+=8){let b=parseInt(y.substr(h,8),2).toString(16);b.length===1&&(b="0"+b),g=g+b}return g.toLowerCase()},FA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},UA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function BA(n,e){let i="Unknown Error";n==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?i="Client doesn't have permission to access the desired data.":n==="unavailable"&&(i="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+i);return r.code=n.toUpperCase(),r}const jA=new RegExp("^-?(0*)\\d{1,10}$"),VA=-2147483648,HA=2147483647,gy=function(n){if(jA.test(n)){const e=Number(n);if(e>=VA&&e<=HA)return e}return null},Ps=function(n){try{n()}catch(e){setTimeout(()=>{const i=e.stack||"";throw Tt("Exception was thrown by user callback.",i),e},Math.floor(0))}},WA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xo=function(n,e){const i=setTimeout(n,e);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,i){this.appName_=e,this.appCheckProvider=i,this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((i,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(i,r):i(null)},0)})}addTokenChangeListener(e){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Tt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,i,r){this.appName_=e,this.firebaseOptions_=i,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(i=>i&&i.code==="auth/token-not-initialized"?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(i,r):i(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(i=>i.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(i=>i.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tt(e)}}class hs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="5",Zb="v",e1="s",t1="r",n1="f",i1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,r1="ls",s1="p",Dh="ac",o1="websocket",a1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,i,r,o,l=!1,u="",f=!1,h=!1){this.secure=i,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ki.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ki.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${i}`}}function qA(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function c1(n,e,i){D(typeof e=="string","typeof type must == string"),D(typeof i=="object","typeof params must == object");let r;if(e===o1)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===a1)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qA(n)&&(i.ns=n.namespace);const o=[];return Rt(i,(l,u)=>{o.push(l+"="+u)}),r+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.counters_={}}incrementCounter(e,i=1){nn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=i}get(){return _C(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch={},uh={};function Af(n){const e=n.toString();return ch[e]||(ch[e]=new KA),ch[e]}function $A(n,e){const i=n.toString();return uh[i]||(uh[i]=e()),uh[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,i){this.closeAfterResponse=e,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,i){for(this.pendingResponses[e]=i;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&Ps(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="start",JA="close",QA="pLPCommand",XA="pRTLPCB",u1="id",d1="pw",h1="ser",ZA="cb",eP="seg",tP="ts",nP="d",iP="dframe",f1=1870,p1=30,rP=f1-p1,sP=25e3,oP=3e4;class rs{constructor(e,i,r,o,l,u,f){this.connId=e,this.repoInfo=i,this.applicationId=r,this.appCheckToken=o,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ra(e),this.stats_=Af(i),this.urlFn=h=>(this.appCheckToken&&(h[Dh]=this.appCheckToken),c1(i,a1,h))}open(e,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new YA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(oP)),MA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pf((...l)=>{const[u,f,h,m,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===vy)this.id=f,this.password=h;else if(u===JA)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const r={};r[vy]="t",r[h1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ZA]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Zb]=Rf,this.transportSessionId&&(r[e1]=this.transportSessionId),this.lastSessionId&&(r[r1]=this.lastSessionId),this.applicationId&&(r[s1]=this.applicationId),this.appCheckToken&&(r[Dh]=this.appCheckToken),typeof location<"u"&&location.hostname&&i1.test(location.hostname)&&(r[t1]=n1);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){rs.forceAllow_=!0}static forceDisallow(){rs.forceDisallow_=!0}static isAvailable(){return rs.forceAllow_?!0:!rs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!FA()&&!UA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const i=at(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=d0(i),o=Qb(r,rP);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,i){this.myDisconnFrame=document.createElement("iframe");const r={};r[iP]="t",r[u1]=e,r[d1]=i,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const i=at(e).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class Pf{constructor(e,i,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=OA(),window[QA+this.uniqueCallbackIdentifier]=e,window[XA+this.uniqueCallbackIdentifier]=i,this.myIFrame=Pf.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){ht("frame writing exception"),f.stack&&ht(f.stack),ht(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,i){for(this.myID=e,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[u1]=this.myID,e[d1]=this.myPW,e[h1]=this.currentSerial;let i=this.urlFn(e),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+p1+r.length<=f1;){const u=this.pendingSegs.shift();r=r+"&"+eP+o+"="+u.seg+"&"+tP+o+"="+u.ts+"&"+nP+o+"="+u.d,o++}return i=i+r,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(e,i,r){this.pendingSegs.push({seg:e,ts:i,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,i){this.outstandingRequests.add(i);const r=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(r,Math.floor(sP)),l=()=>{clearTimeout(o),r()};this.addTag(e,l)}addTag(e,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),i())},r.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=16384,lP=45e3;let wc=null;typeof MozWebSocket<"u"?wc=MozWebSocket:typeof WebSocket<"u"&&(wc=WebSocket);class Qt{constructor(e,i,r,o,l,u,f){this.connId=e,this.applicationId=r,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ra(this.connId),this.stats_=Af(i),this.connURL=Qt.connectionURL_(i,u,f,o,r),this.nodeAdmin=i.nodeAdmin}static connectionURL_(e,i,r,o,l){const u={};return u[Zb]=Rf,typeof location<"u"&&location.hostname&&i1.test(location.hostname)&&(u[t1]=n1),i&&(u[e1]=i),r&&(u[r1]=r),o&&(u[Dh]=o),l&&(u[s1]=l),c1(e,o1,u)}open(e,i){this.onDisconnect=i,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ki.set("previous_websocket_failure",!0);try{let r;_0(),this.mySock=new wc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(i);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&wc!==null&&!Qt.forceDisallow_}static previouslyFailed(){return Ki.isInMemoryStorage||Ki.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ki.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const r=sa(i);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const i=Number(e);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const i=e.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const r=this.extractFrameCount_(i);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const i=at(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=Qb(i,aP);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lP))}sendString_(e){try{this.mySock.send(e)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[rs,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const i=Qt&&Qt.isAvailable();let r=i&&!Qt.previouslyFailed();if(e.webSocketOnly&&(i||Tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Qt];else{const o=this.transports_=[];for(const l of fa.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);fa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=6e4,uP=5e3,dP=10*1024,hP=100*1024,dh="t",_y="d",fP="s",yy="r",pP="e",by="o",wy="a",Iy="n",Ey="p",mP="h";class gP{constructor(e,i,r,o,l,u,f,h,m,y){this.id=e,this.repoInfo_=i,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=h,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ra("c:"+this.id+":"),this.transportManager_=new fa(i),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,r)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Xo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return i=>{e===this.conn_?this.onConnectionLost_(i):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return i=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(i):e===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(e){const i={t:"d",d:e};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(dh in e){const i=e[dh];i===wy?this.upgradeIfSecondaryHealthy_():i===yy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===by&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const i=Wo("t",e),r=Wo("d",e);if(i==="c")this.onSecondaryControl_(r);else if(i==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ey,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Iy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const i=Wo("t",e),r=Wo("d",e);i==="c"?this.onControl_(r):i==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const i=Wo(dh,e);if(_y in e){const r=e[_y];if(i===mP){const o=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===Iy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===fP?this.onConnectionShutdown_(r):i===yy?this.onReset_(r):i===pP?Oh("Server Error: "+r):i===by?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Oh("Unknown control packet command: "+i)}}onHandshake_(e){const i=e.ts,r=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),Rf!==r&&Tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,r),Xo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(cP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,i){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ey,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ki.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{put(e,i,r,o){}merge(e,i,r,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,i,r){}onDisconnectMerge(e,i,r){}onDisconnectCancel(e,i){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...i){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,i)}}on(e,i,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:i,context:r});const o=this.getInitialEvent(e);o&&i.apply(r,o)}off(e,i,r){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===i&&(!r||r===o[l].context)){o.splice(l,1);return}}validateEventType_(e){D(this.allowedEvents_.find(i=>i===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends g1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ic}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=32,Sy=768;class Se{constructor(e,i){if(i===void 0){this.pieces_=e.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=i}toString(){let e="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(e+="/"+this.pieces_[i]);return e||"/"}}function _e(){return new Se("")}function oe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function wi(n){return n.pieces_.length-n.pieceNum_}function ke(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Se(n.pieces_,e)}function v1(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function vP(n){let e="";for(let i=n.pieceNum_;i<n.pieces_.length;i++)n.pieces_[i]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[i])));return e||"/"}function _1(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function y1(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let i=n.pieceNum_;i<n.pieces_.length-1;i++)e.push(n.pieces_[i]);return new Se(e,0)}function et(n,e){const i=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)i.push(n.pieces_[r]);if(e instanceof Se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)i.push(e.pieces_[r]);else{const r=e.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&i.push(r[o])}return new Se(i,0)}function de(n){return n.pieceNum_>=n.pieces_.length}function Ct(n,e){const i=oe(n),r=oe(e);if(i===null)return e;if(i===r)return Ct(ke(n),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Nf(n,e){if(wi(n)!==wi(e))return!1;for(let i=n.pieceNum_,r=e.pieceNum_;i<=n.pieces_.length;i++,r++)if(n.pieces_[i]!==e.pieces_[r])return!1;return!0}function Zt(n,e){let i=n.pieceNum_,r=e.pieceNum_;if(wi(n)>wi(e))return!1;for(;i<n.pieces_.length;){if(n.pieces_[i]!==e.pieces_[r])return!1;++i,++r}return!0}class _P{constructor(e,i){this.errorPrefix_=i,this.parts_=_1(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Bc(this.parts_[r]);b1(this)}}function yP(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Bc(e),b1(n)}function bP(n){const e=n.parts_.pop();n.byteLength_-=Bc(e),n.parts_.length>0&&(n.byteLength_-=1)}function b1(n){if(n.byteLength_>Sy)throw new Error(n.errorPrefix_+"has a key path longer than "+Sy+" bytes ("+n.byteLength_+").");if(n.parts_.length>Cy)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cy+") or object contains a cycle "+Gi(n))}function Gi(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of extends g1{constructor(){super(["visible"]);let e,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Of}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=1e3,wP=60*5*1e3,ky=30*1e3,IP=1.3,EP=3e4,CP="server_kill",Ty=3;class Dn extends m1{constructor(e,i,r,o,l,u,f,h){if(super(),this.repoInfo_=e,this.applicationId_=i,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=h,this.id=Dn.nextPersistentConnectionId_++,this.log_=Ra("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zo,this.maxReconnectDelay_=wP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h&&!_0())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Of.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ic.getInstance().on("online",this.onOnline_,this)}sendRequest(e,i,r){const o=++this.requestNumber_,l={r:o,a:e,b:i};this.log_(at(l)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),r&&(this.requestCBHash_[o]=r)}get(e){this.initConnection_();const i=new Fc,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?i.resolve(f):i.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),i.promise}listen(e,i,r,o){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:i,query:e,tag:r};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const i=this.outstandingGets_[e];this.sendRequest("g",i.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(r)})}sendListen_(e){const i=e.query,r=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+r+" for "+o);const l={p:r},u="q";e.tag&&(l.q=i._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,f=>{const h=f.d,m=f.s;Dn.warnOnListenWarnings_(h,i),(this.listens.get(r)&&this.listens.get(r).get(o))===e&&(this.log_("listen response",f),m!=="ok"&&this.removeListen_(r,o),e.onComplete&&e.onComplete(m,h))})}static warnOnListenWarnings_(e,i){if(e&&typeof e=="object"&&nn(e,"w")){const r=ms(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',l=i._path.toString();Tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||OC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ky)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,i=NC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(i,r,o=>{const l=o.s,u=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const i=e.s,r=e.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,r)})}unlisten(e,i){const r=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,e._queryObject,i)}sendUnlisten_(e,i,r,o){this.log_("Unlisten on "+e+" for "+i);const l={p:e},u="n";o&&(l.q=r,l.t=o),this.sendRequest(u,l)}onDisconnectPut(e,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,i,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:i,onComplete:r})}onDisconnectMerge(e,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,i,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:i,onComplete:r})}onDisconnectCancel(e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(e,i,r,o){const l={p:i,d:r};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(e,i,r,o){this.putInternal("p",e,i,r,o)}merge(e,i,r,o){this.putInternal("m",e,i,r,o)}putInternal(e,i,r,o,l){this.initConnection_();const u={p:i,d:r};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+i)}sendPut_(e){const i=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(i,r,l=>{this.log_(i+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const i={c:e};this.log_("reportStats",i),this.sendRequest("s",i,r=>{if(r.s!=="ok"){const l=r.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+at(e));const i=e.r,r=this.requestCBHash_[i];r&&(delete this.requestCBHash_[i],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,i){this.log_("handleServerMessage",e,i),e==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):e==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):e==="c"?this.onListenRevoked_(i.p,i.q):e==="ac"?this.onAuthRevoked_(i.s,i.d):e==="apc"?this.onAppCheckRevoked_(i.s,i.d):e==="sd"?this.onSecurityDebugPacket_(i):Oh("Unrecognized action received from server: "+at(e)+`
Are you using the latest client?`)}onReady_(e,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>EP&&(this.reconnectDelay_=zo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let i=Math.max(0,this.reconnectDelay_-e);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*IP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Dn.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const h=function(){f?f.close():(u=!0,r())},m=function(g){D(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(g)};this.realtime_={close:h,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[g,b]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=g&&g.accessToken,this.appCheckToken_=b&&b.token,f=new gP(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,i,r,S=>{Tt(S+" ("+this.repoInfo_.toString()+")"),this.interrupt(CP)},l))}catch(g){this.log_("Failed to get token: "+g),u||(this.repoInfo_.nodeAdmin&&Tt(g),h())}}}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_h(this.interruptReasons_)&&(this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const i=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const i=this.outstandingPuts_[e];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,i){let r;i?r=i.map(l=>Tf(l)).join("$"):r="default";const o=this.removeListen_(e,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,i){const r=new Se(e).toString();let o;if(this.listens.has(r)){const l=this.listens.get(r);o=l.get(i),l.delete(i),l.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(e,i){ht("Auth token revoked: "+e+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ty&&(this.reconnectDelay_=ky,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,i){ht("App check token revoked: "+e+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ty&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const i of e.values())this.sendListen_(i);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let i="js";e["sdk."+i+"."+Kb.replace(/\./g,"-")]=1,Qh()?e["framework.cordova"]=1:Uc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ic.getInstance().currentlyOnline();return _h(this.interruptReasons_)&&e}}Dn.nextPersistentConnectionId_=0;Dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,i){this.name=e,this.node=i}static Wrap(e,i){return new ae(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,i){const r=new ae(bs,e),o=new ae(bs,i);return this.compare(r,o)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ql;class w1 extends nu{static get __EMPTY_NODE(){return Ql}static set __EMPTY_NODE(e){Ql=e}compare(e,i){return As(e.name,i.name)}isDefinedOn(e){throw Cs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,i){return!1}minPost(){return ae.MIN}maxPost(){return new ae(ir,Ql)}makePost(e,i){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,Ql)}toString(){return".key"}}const fs=new w1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,i,r,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=i?r(e.key,i):1,o&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(e.key,e.value):i={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ot{constructor(e,i,r,o,l){this.key=e,this.value=i,this.color=r??ot.RED,this.left=o??St.EMPTY_NODE,this.right=l??St.EMPTY_NODE}copy(e,i,r,o,l){return new ot(e??this.key,i??this.value,r??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,r){let o=this;const l=r(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,i,r),null):l===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,i,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return St.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,i){let r,o;if(r=this,i(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,i),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),i(e,r.key)===0){if(r.right.isEmpty())return St.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,i))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ot.RED=!0;ot.BLACK=!1;class SP{copy(e,i,r,o,l){return this}insert(e,i,r){return new ot(e,i,null)}remove(e,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class St{constructor(e,i=St.EMPTY_NODE){this.comparator_=e,this.root_=i}insert(e,i){return new St(this.comparator_,this.root_.insert(e,i,this.comparator_).copy(null,null,ot.BLACK,null,null))}remove(e){return new St(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ot.BLACK,null,null))}get(e){let i,r=this.root_;for(;!r.isEmpty();){if(i=this.comparator_(e,r.key),i===0)return r.value;i<0?r=r.left:i>0&&(r=r.right)}return null}getPredecessorKey(e){let i,r=this.root_,o=null;for(;!r.isEmpty();)if(i=this.comparator_(e,r.key),i===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else i<0?r=r.left:i>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,i){return new Xl(this.root_,e,this.comparator_,!1,i)}getReverseIteratorFrom(e,i){return new Xl(this.root_,e,this.comparator_,!0,i)}getReverseIterator(e){return new Xl(this.root_,null,this.comparator_,!0,e)}}St.EMPTY_NODE=new SP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(n,e){return As(n.name,e.name)}function Df(n,e){return As(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lh;function TP(n){Lh=n}const I1=function(n){return typeof n=="number"?"number:"+Xb(n):"string:"+n},E1=function(n){if(n.isLeafNode()){const e=n.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&nn(e,".sv"),"Priority must be a string or number.")}else D(n===Lh||n.isEmpty(),"priority of unexpected type.");D(n===Lh||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ry;class st{constructor(e,i=st.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=i,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),E1(this.priorityNode_)}static set __childrenNodeConstructor(e){Ry=e}static get __childrenNodeConstructor(){return Ry}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new st(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return de(e)?this:oe(e)===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,i){return null}updateImmediateChild(e,i){return e===".priority"?this.updatePriority(i):i.isEmpty()&&e!==".priority"?this:st.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,i).updatePriority(this.priorityNode_)}updateChild(e,i){const r=oe(e);return r===null?i:i.isEmpty()&&r!==".priority"?this:(D(r!==".priority"||wi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,st.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,i){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+I1(this.priorityNode_.val())+":");const i=typeof this.value_;e+=i+":",i==="number"?e+=Xb(this.value_):e+=this.value_,this.lazyHash_=Yb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===st.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof st.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const i=typeof e.value_,r=typeof this.value_,o=st.VALUE_TYPE_ORDER.indexOf(i),l=st.VALUE_TYPE_ORDER.indexOf(r);return D(o>=0,"Unknown leaf type: "+i),D(l>=0,"Unknown leaf type: "+r),o===l?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const i=e;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}st.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C1,S1;function RP(n){C1=n}function AP(n){S1=n}class PP extends nu{compare(e,i){const r=e.node.getPriority(),o=i.node.getPriority(),l=r.compareTo(o);return l===0?As(e.name,i.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,i){return!e.getPriority().equals(i.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(ir,new st("[PRIORITY-POST]",S1))}makePost(e,i){const r=C1(e);return new ae(i,new st("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ue=new PP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=Math.log(2);class OP{constructor(e){const i=l=>parseInt(Math.log(l)/NP,10),r=l=>parseInt(Array(l+1).join("1"),2);this.count=i(e+1),this.current_=this.count-1;const o=r(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ec=function(n,e,i,r){n.sort(e);const o=function(h,m){const y=m-h;let g,b;if(y===0)return null;if(y===1)return g=n[h],b=i?i(g):g,new ot(b,g.node,ot.BLACK,null,null);{const S=parseInt(y/2,10)+h,C=o(h,S),_=o(S+1,m);return g=n[S],b=i?i(g):g,new ot(b,g.node,ot.BLACK,C,_)}},l=function(h){let m=null,y=null,g=n.length;const b=function(C,_){const I=g-C,E=g;g-=C;const T=o(I+1,E),R=n[I],F=i?i(R):R;S(new ot(F,R.node,_,null,T))},S=function(C){m?(m.left=C,m=C):(y=C,m=C)};for(let C=0;C<h.count;++C){const _=h.nextBitIsOne(),I=Math.pow(2,h.count-(C+1));_?b(I,ot.BLACK):(b(I,ot.BLACK),b(I,ot.RED))}return y},u=new OP(n.length),f=l(u);return new St(r||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hh;const es={};class Pn{constructor(e,i){this.indexes_=e,this.indexSet_=i}static get Default(){return D(es&&Ue,"ChildrenNode.ts has not been loaded"),hh=hh||new Pn({".priority":es},{".priority":Ue}),hh}get(e){const i=ms(this.indexes_,e);if(!i)throw new Error("No index defined for "+e);return i instanceof St?i:null}hasIndex(e){return nn(this.indexSet_,e.toString())}addIndex(e,i){D(e!==fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const l=i.getIterator(ae.Wrap);let u=l.getNext();for(;u;)o=o||e.isDefinedOn(u.node),r.push(u),u=l.getNext();let f;o?f=Ec(r,e.getCompare()):f=es;const h=e.toString(),m=Object.assign({},this.indexSet_);m[h]=e;const y=Object.assign({},this.indexes_);return y[h]=f,new Pn(y,m)}addToIndexes(e,i){const r=lc(this.indexes_,(o,l)=>{const u=ms(this.indexSet_,l);if(D(u,"Missing index implementation for "+l),o===es)if(u.isDefinedOn(e.node)){const f=[],h=i.getIterator(ae.Wrap);let m=h.getNext();for(;m;)m.name!==e.name&&f.push(m),m=h.getNext();return f.push(e),Ec(f,u.getCompare())}else return es;else{const f=i.get(e.name);let h=o;return f&&(h=h.remove(new ae(e.name,f))),h.insert(e,e.node)}});return new Pn(r,this.indexSet_)}removeFromIndexes(e,i){const r=lc(this.indexes_,o=>{if(o===es)return o;{const l=i.get(e.name);return l?o.remove(new ae(e.name,l)):o}});return new Pn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go;class K{constructor(e,i,r){this.children_=e,this.priorityNode_=i,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&E1(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Go||(Go=new K(new St(Df),null,Pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Go}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const i=this.children_.get(e);return i===null?Go:i}}getChild(e){const i=oe(e);return i===null?this:this.getImmediateChild(i).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,i){if(D(i,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(i);{const r=new ae(e,i);let o,l;i.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(e,i),l=this.indexMap_.addToIndexes(r,this.children_));const u=o.isEmpty()?Go:this.priorityNode_;return new K(o,u,l)}}updateChild(e,i){const r=oe(e);if(r===null)return i;{D(oe(e)!==".priority"||wi(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(ke(e),i);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const i={};let r=0,o=0,l=!0;if(this.forEachChild(Ue,(u,f)=>{i[u]=f.val(e),r++,l&&K.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):l=!1}),!e&&l&&o<2*r){const u=[];for(const f in i)u[f]=i[f];return u}else return e&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+I1(this.getPriority().val())+":"),this.forEachChild(Ue,(i,r)=>{const o=r.hash();o!==""&&(e+=":"+i+":"+o)}),this.lazyHash_=e===""?"":Yb(e)}return this.lazyHash_}getPredecessorChildName(e,i,r){const o=this.resolveIndex_(r);if(o){const l=o.getPredecessorKey(new ae(e,i));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const i=this.resolveIndex_(e);if(i){const r=i.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const i=this.getFirstChildName(e);return i?new ae(i,this.children_.get(i)):null}getLastChildName(e){const i=this.resolveIndex_(e);if(i){const r=i.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const i=this.getLastChildName(e);return i?new ae(i,this.children_.get(i)):null}forEachChild(e,i){const r=this.resolveIndex_(e);return r?r.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,i){const r=this.resolveIndex_(i);if(r)return r.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,ae.Wrap);let l=o.peek();for(;l!=null&&i.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,i){const r=this.resolveIndex_(i);if(r)return r.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let l=o.peek();for(;l!=null&&i.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Aa?-1:0}withIndex(e){if(e===fs||this.indexMap_.hasIndex(e))return this;{const i=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,i)}}isIndexed(e){return e===fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const i=e;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const r=this.getIterator(Ue),o=i.getIterator(Ue);let l=r.getNext(),u=o.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=r.getNext(),u=o.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===fs?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DP extends K{constructor(){super(new St(Df),K.EMPTY_NODE,Pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const Aa=new DP;Object.defineProperties(ae,{MIN:{value:new ae(bs,K.EMPTY_NODE)},MAX:{value:new ae(ir,Aa)}});w1.__EMPTY_NODE=K.EMPTY_NODE;st.__childrenNodeConstructor=K;TP(Aa);AP(Aa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=!0;function ut(n,e=null){if(n===null)return K.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const i=n;return new st(i,ut(e))}if(!(n instanceof Array)&&LP){const i=[];let r=!1;if(Rt(n,(u,f)=>{if(u.substring(0,1)!=="."){const h=ut(f);h.isEmpty()||(r=r||!h.getPriority().isEmpty(),i.push(new ae(u,h)))}}),i.length===0)return K.EMPTY_NODE;const l=Ec(i,kP,u=>u.name,Df);if(r){const u=Ec(i,Ue.getCompare());return new K(l,ut(e),new Pn({".priority":u},{".priority":Ue}))}else return new K(l,ut(e),Pn.Default)}else{let i=K.EMPTY_NODE;return Rt(n,(r,o)=>{if(nn(n,r)&&r.substring(0,1)!=="."){const l=ut(o);(l.isLeafNode()||!l.isEmpty())&&(i=i.updateImmediateChild(r,l))}}),i.updatePriority(ut(e))}}RP(ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP extends nu{constructor(e){super(),this.indexPath_=e,D(!de(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,i){const r=this.extractChild(e.node),o=this.extractChild(i.node),l=r.compareTo(o);return l===0?As(e.name,i.name):l}makePost(e,i){const r=ut(e),o=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new ae(i,o)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,Aa);return new ae(ir,e)}toString(){return _1(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP extends nu{compare(e,i){const r=e.node.compareTo(i.node);return r===0?As(e.name,i.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,i){return!e.equals(i)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,i){const r=ut(e);return new ae(i,r)}toString(){return".value"}}const FP=new xP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(n){return{type:"value",snapshotNode:n}}function ws(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function pa(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ma(n,e,i){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:i}}function UP(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this.index_=e}updateChild(e,i,r,o,l,u){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(i);return f.getChild(o).equals(r.getChild(o))&&f.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(i)?u.trackChildChange(pa(i,f)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(ws(i,r)):u.trackChildChange(ma(i,r,f))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(i,r).withIndex(this.index_)}updateFullNode(e,i,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ue,(o,l)=>{i.hasChild(o)||r.trackChildChange(pa(o,l))}),i.isLeafNode()||i.forEachChild(Ue,(o,l)=>{if(e.hasChild(o)){const u=e.getImmediateChild(o);u.equals(l)||r.trackChildChange(ma(o,l,u))}else r.trackChildChange(ws(o,l))})),i.withIndex(this.index_)}updatePriority(e,i){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e){this.indexedFilter_=new Lf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ga.getStartPost_(e),this.endPost_=ga.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return i&&r}updateChild(e,i,r,o,l,u){return this.matches(new ae(i,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,i,r,o,l,u)}updateFullNode(e,i,r){i.isLeafNode()&&(i=K.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(K.EMPTY_NODE);const l=this;return i.forEachChild(Ue,(u,f)=>{l.matches(new ae(u,f))||(o=o.updateImmediateChild(u,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,r)}updatePriority(e,i){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const i=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),i)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const i=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),i)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=i=>{const r=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ga(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,i,r,o,l,u){return this.rangedFilter_.matches(new ae(i,r))||(r=K.EMPTY_NODE),e.getImmediateChild(i).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,i,r,o,l,u):this.fullLimitUpdateChild_(e,i,r,l,u)}updateFullNode(e,i,r){let o;if(i.isLeafNode()||i.isEmpty())o=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=K.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(K.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:o=o.updateImmediateChild(f.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,r)}updatePriority(e,i){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,i,r,o,l){let u;if(this.reverse_){const g=this.index_.getCompare();u=(b,S)=>g(S,b)}else u=this.index_.getCompare();const f=e;D(f.numChildren()===this.limit_,"");const h=new ae(i,r),m=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(h);if(f.hasChild(i)){const g=f.getImmediateChild(i);let b=o.getChildAfterChild(this.index_,m,this.reverse_);for(;b!=null&&(b.name===i||f.hasChild(b.name));)b=o.getChildAfterChild(this.index_,b,this.reverse_);const S=b==null?1:u(b,h);if(y&&!r.isEmpty()&&S>=0)return l!=null&&l.trackChildChange(ma(i,r,g)),f.updateImmediateChild(i,r);{l!=null&&l.trackChildChange(pa(i,g));const _=f.updateImmediateChild(i,K.EMPTY_NODE);return b!=null&&this.rangedFilter_.matches(b)?(l!=null&&l.trackChildChange(ws(b.name,b.node)),_.updateImmediateChild(b.name,b.node)):_}}else return r.isEmpty()?e:y&&u(m,h)>=0?(l!=null&&(l.trackChildChange(pa(m.name,m.node)),l.trackChildChange(ws(i,r))),f.updateImmediateChild(i,r).updateImmediateChild(m.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bs}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const e=new Mf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jP(n){return n.loadsAllData()?new Lf(n.getIndex()):n.hasLimit()?new BP(n):new ga(n)}function Ay(n){const e={};if(n.isDefault())return e;let i;if(n.index_===Ue?i="$priority":n.index_===FP?i="$value":n.index_===fs?i="$key":(D(n.index_ instanceof MP,"Unrecognized index type!"),i=n.index_.toString()),e.orderBy=at(i),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=at(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+at(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=at(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+at(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Py(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let i=n.viewFrom_;i===""&&(n.isViewFromLeft()?i="l":i="r"),e.vf=i}return n.index_!==Ue&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends m1{constructor(e,i,r,o){super(),this.repoInfo_=e,this.onDataUpdate_=i,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=Ra("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,i){return i!==void 0?"tag$"+i:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,i,r,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=Cc.getListenId_(e,r),f={};this.listens_[u]=f;const h=Ay(e._queryParams);this.restRequest_(l+".json",h,(m,y)=>{let g=y;if(m===404&&(g=null,m=null),m===null&&this.onDataUpdate_(l,g,!1,r),ms(this.listens_,u)===f){let b;m?m===401?b="permission_denied":b="rest_error:"+m:b="ok",o(b,null)}})}unlisten(e,i){const r=Cc.getListenId_(e,i);delete this.listens_[r]}get(e){const i=Ay(e._queryParams),r=e._path.toString(),o=new Fc;return this.restRequest_(r+".json",i,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(r,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(e){}restRequest_(e,i={},r){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(i.auth=o.accessToken),l&&l.token&&(i.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+lr(i);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(r&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let h=null;if(f.status>=200&&f.status<300){try{h=sa(f.responseText)}catch{Tt("Failed to parse JSON response for "+u+": "+f.responseText)}r(null,h)}else f.status!==401&&f.status!==404&&Tt("Got unsuccessful REST response for "+u+" Status: "+f.status),r(f.status);r=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,i){this.rootNode_=this.rootNode_.updateChild(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(){return{value:null,children:new Map}}function T1(n,e,i){if(de(e))n.value=i,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,i);else{const r=oe(e);n.children.has(r)||n.children.set(r,Sc());const o=n.children.get(r);e=ke(e),T1(o,e,i)}}function Mh(n,e,i){n.value!==null?i(e,n.value):HP(n,(r,o)=>{const l=new Se(e.toString()+"/"+r);Mh(o,l,i)})}function HP(n,e){n.children.forEach((i,r)=>{e(r,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),i=Object.assign({},e);return this.last_&&Rt(this.last_,(r,o)=>{i[r]=i[r]-o}),this.last_=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=10*1e3,zP=30*1e3,GP=5*60*1e3;class qP{constructor(e,i){this.server_=i,this.statsToReport_={},this.statsListener_=new WP(e);const r=Ny+(zP-Ny)*Math.random();Xo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),i={};let r=!1;Rt(e,(o,l)=>{l>0&&nn(this.statsToReport_,o)&&(i[o]=l,r=!0)}),r&&this.server_.reportStats(i),Xo(this.reportStats_.bind(this),Math.floor(Math.random()*2*GP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var en;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(en||(en={}));function R1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ff(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,i,r){this.path=e,this.affectedTree=i,this.revert=r,this.type=en.ACK_USER_WRITE,this.source=R1()}operationForChild(e){if(de(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Se(e));return new kc(_e(),i,this.revert)}}else return D(oe(this.path)===e,"operationForChild called for unrelated child."),new kc(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,i){this.source=e,this.path=i,this.type=en.LISTEN_COMPLETE}operationForChild(e){return de(this.path)?new va(this.source,_e()):new va(this.source,ke(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,i,r){this.source=e,this.path=i,this.snap=r,this.type=en.OVERWRITE}operationForChild(e){return de(this.path)?new rr(this.source,_e(),this.snap.getImmediateChild(e)):new rr(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,i,r){this.source=e,this.path=i,this.children=r,this.type=en.MERGE}operationForChild(e){if(de(this.path)){const i=this.children.subtree(new Se(e));return i.isEmpty()?null:i.value?new rr(this.source,_e(),i.value):new _a(this.source,_e(),i)}else return D(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _a(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,i,r){this.node_=e,this.fullyInitialized_=i,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(de(e))return this.isFullyInitialized()&&!this.filtered_;const i=oe(e);return this.isCompleteForChild(i)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $P(n,e,i,r){const o=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(UP(u.childName,u.snapshotNode))}),qo(n,o,"child_removed",e,r,i),qo(n,o,"child_added",e,r,i),qo(n,o,"child_moved",l,r,i),qo(n,o,"child_changed",e,r,i),qo(n,o,"value",e,r,i),o}function qo(n,e,i,r,o,l){const u=r.filter(f=>f.type===i);u.sort((f,h)=>JP(n,f,h)),u.forEach(f=>{const h=YP(n,f,l);o.forEach(m=>{m.respondsTo(f.type)&&e.push(m.createEvent(h,n.query_))})})}function YP(n,e,i){return e.type==="value"||e.type==="child_removed"||(e.prevName=i.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function JP(n,e,i){if(e.childName==null||i.childName==null)throw Cs("Should only compare child_ events.");const r=new ae(e.childName,e.snapshotNode),o=new ae(i.childName,i.snapshotNode);return n.index_.compare(r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(n,e){return{eventCache:n,serverCache:e}}function Zo(n,e,i,r){return iu(new sr(e,i,r),n.serverCache)}function A1(n,e,i,r){return iu(n.eventCache,new sr(e,i,r))}function xh(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function or(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh;const QP=()=>(fh||(fh=new St(xA)),fh);class Re{constructor(e,i=QP()){this.value=e,this.children=i}static fromObject(e){let i=new Re(null);return Rt(e,(r,o)=>{i=i.set(new Se(r),o)}),i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,i){if(this.value!=null&&i(this.value))return{path:_e(),value:this.value};if(de(e))return null;{const r=oe(e),o=this.children.get(r);if(o!==null){const l=o.findRootMostMatchingPathAndValue(ke(e),i);return l!=null?{path:et(new Se(r),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(de(e))return this;{const i=oe(e),r=this.children.get(i);return r!==null?r.subtree(ke(e)):new Re(null)}}set(e,i){if(de(e))return new Re(i,this.children);{const r=oe(e),l=(this.children.get(r)||new Re(null)).set(ke(e),i),u=this.children.insert(r,l);return new Re(this.value,u)}}remove(e){if(de(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const i=oe(e),r=this.children.get(i);if(r){const o=r.remove(ke(e));let l;return o.isEmpty()?l=this.children.remove(i):l=this.children.insert(i,o),this.value===null&&l.isEmpty()?new Re(null):new Re(this.value,l)}else return this}}get(e){if(de(e))return this.value;{const i=oe(e),r=this.children.get(i);return r?r.get(ke(e)):null}}setTree(e,i){if(de(e))return i;{const r=oe(e),l=(this.children.get(r)||new Re(null)).setTree(ke(e),i);let u;return l.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,l),new Re(this.value,u)}}fold(e){return this.fold_(_e(),e)}fold_(e,i){const r={};return this.children.inorderTraversal((o,l)=>{r[o]=l.fold_(et(e,o),i)}),i(e,this.value,r)}findOnPath(e,i){return this.findOnPath_(e,_e(),i)}findOnPath_(e,i,r){const o=this.value?r(i,this.value):!1;if(o)return o;if(de(e))return null;{const l=oe(e),u=this.children.get(l);return u?u.findOnPath_(ke(e),et(i,l),r):null}}foreachOnPath(e,i){return this.foreachOnPath_(e,_e(),i)}foreachOnPath_(e,i,r){if(de(e))return this;{this.value&&r(i,this.value);const o=oe(e),l=this.children.get(o);return l?l.foreachOnPath_(ke(e),et(i,o),r):new Re(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,i){this.children.inorderTraversal((r,o)=>{o.foreach_(et(e,r),i)}),this.value&&i(e,this.value)}foreachChild(e){this.children.inorderTraversal((i,r)=>{r.value&&e(i,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.writeTree_=e}static empty(){return new tn(new Re(null))}}function ea(n,e,i){if(de(e))return new tn(new Re(i));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const o=r.path;let l=r.value;const u=Ct(o,e);return l=l.updateChild(u,i),new tn(n.writeTree_.set(o,l))}else{const o=new Re(i),l=n.writeTree_.setTree(e,o);return new tn(l)}}}function Oy(n,e,i){let r=n;return Rt(i,(o,l)=>{r=ea(r,et(e,o),l)}),r}function Dy(n,e){if(de(e))return tn.empty();{const i=n.writeTree_.setTree(e,new Re(null));return new tn(i)}}function Fh(n,e){return dr(n,e)!=null}function dr(n,e){const i=n.writeTree_.findRootMostValueAndPath(e);return i!=null?n.writeTree_.get(i.path).getChild(Ct(i.path,e)):null}function Ly(n){const e=[],i=n.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Ue,(r,o)=>{e.push(new ae(r,o))}):n.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&e.push(new ae(r,o.value))}),e}function mi(n,e){if(de(e))return n;{const i=dr(n,e);return i!=null?new tn(new Re(i)):new tn(n.writeTree_.subtree(e))}}function Uh(n){return n.writeTree_.isEmpty()}function Is(n,e){return P1(_e(),n.writeTree_,e)}function P1(n,e,i){if(e.value!=null)return i.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?(D(l.value!==null,"Priority writes must always be leaf nodes"),r=l.value):i=P1(et(n,o),l,i)}),!i.getChild(n).isEmpty()&&r!==null&&(i=i.updateChild(et(n,".priority"),r)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n,e){return L1(e,n)}function XP(n,e,i,r,o){D(r>n.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),n.allWrites.push({path:e,snap:i,writeId:r,visible:o}),o&&(n.visibleWrites=ea(n.visibleWrites,e,i)),n.lastWriteId=r}function ZP(n,e){for(let i=0;i<n.allWrites.length;i++){const r=n.allWrites[i];if(r.writeId===e)return r}return null}function eN(n,e){const i=n.allWrites.findIndex(f=>f.writeId===e);D(i>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[i];n.allWrites.splice(i,1);let o=r.visible,l=!1,u=n.allWrites.length-1;for(;o&&u>=0;){const f=n.allWrites[u];f.visible&&(u>=i&&tN(f,r.path)?o=!1:Zt(r.path,f.path)&&(l=!0)),u--}if(o){if(l)return nN(n),!0;if(r.snap)n.visibleWrites=Dy(n.visibleWrites,r.path);else{const f=r.children;Rt(f,h=>{n.visibleWrites=Dy(n.visibleWrites,et(r.path,h))})}return!0}else return!1}function tN(n,e){if(n.snap)return Zt(n.path,e);for(const i in n.children)if(n.children.hasOwnProperty(i)&&Zt(et(n.path,i),e))return!0;return!1}function nN(n){n.visibleWrites=N1(n.allWrites,iN,_e()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function iN(n){return n.visible}function N1(n,e,i){let r=tn.empty();for(let o=0;o<n.length;++o){const l=n[o];if(e(l)){const u=l.path;let f;if(l.snap)Zt(i,u)?(f=Ct(i,u),r=ea(r,f,l.snap)):Zt(u,i)&&(f=Ct(u,i),r=ea(r,_e(),l.snap.getChild(f)));else if(l.children){if(Zt(i,u))f=Ct(i,u),r=Oy(r,f,l.children);else if(Zt(u,i))if(f=Ct(u,i),de(f))r=Oy(r,_e(),l.children);else{const h=ms(l.children,oe(f));if(h){const m=h.getChild(ke(f));r=ea(r,_e(),m)}}}else throw Cs("WriteRecord should have .snap or .children")}}return r}function O1(n,e,i,r,o){if(!r&&!o){const l=dr(n.visibleWrites,e);if(l!=null)return l;{const u=mi(n.visibleWrites,e);if(Uh(u))return i;if(i==null&&!Fh(u,_e()))return null;{const f=i||K.EMPTY_NODE;return Is(u,f)}}}else{const l=mi(n.visibleWrites,e);if(!o&&Uh(l))return i;if(!o&&i==null&&!Fh(l,_e()))return null;{const u=function(m){return(m.visible||o)&&(!r||!~r.indexOf(m.writeId))&&(Zt(m.path,e)||Zt(e,m.path))},f=N1(n.allWrites,u,e),h=i||K.EMPTY_NODE;return Is(f,h)}}}function rN(n,e,i){let r=K.EMPTY_NODE;const o=dr(n.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Ue,(l,u)=>{r=r.updateImmediateChild(l,u)}),r;if(i){const l=mi(n.visibleWrites,e);return i.forEachChild(Ue,(u,f)=>{const h=Is(mi(l,new Se(u)),f);r=r.updateImmediateChild(u,h)}),Ly(l).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const l=mi(n.visibleWrites,e);return Ly(l).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function sN(n,e,i,r,o){D(r||o,"Either existingEventSnap or existingServerSnap must exist");const l=et(e,i);if(Fh(n.visibleWrites,l))return null;{const u=mi(n.visibleWrites,l);return Uh(u)?o.getChild(i):Is(u,o.getChild(i))}}function oN(n,e,i,r){const o=et(e,i),l=dr(n.visibleWrites,o);if(l!=null)return l;if(r.isCompleteForChild(i)){const u=mi(n.visibleWrites,o);return Is(u,r.getNode().getImmediateChild(i))}else return null}function aN(n,e){return dr(n.visibleWrites,e)}function lN(n,e,i,r,o,l,u){let f;const h=mi(n.visibleWrites,e),m=dr(h,_e());if(m!=null)f=m;else if(i!=null)f=Is(h,i);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const y=[],g=u.getCompare(),b=l?f.getReverseIteratorFrom(r,u):f.getIteratorFrom(r,u);let S=b.getNext();for(;S&&y.length<o;)g(S,r)!==0&&y.push(S),S=b.getNext();return y}else return[]}function cN(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function Tc(n,e,i,r){return O1(n.writeTree,n.treePath,e,i,r)}function Bf(n,e){return rN(n.writeTree,n.treePath,e)}function My(n,e,i,r){return sN(n.writeTree,n.treePath,e,i,r)}function Rc(n,e){return aN(n.writeTree,et(n.treePath,e))}function uN(n,e,i,r,o,l){return lN(n.writeTree,n.treePath,e,i,r,o,l)}function jf(n,e,i){return oN(n.writeTree,n.treePath,e,i)}function D1(n,e){return L1(et(n.treePath,e),n.writeTree)}function L1(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.changeMap=new Map}trackChildChange(e){const i=e.type,r=e.childName;D(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),D(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const l=o.type;if(i==="child_added"&&l==="child_removed")this.changeMap.set(r,ma(r,e.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&l==="child_added")this.changeMap.delete(r);else if(i==="child_removed"&&l==="child_changed")this.changeMap.set(r,pa(r,o.oldSnap));else if(i==="child_changed"&&l==="child_added")this.changeMap.set(r,ws(r,e.snapshotNode));else if(i==="child_changed"&&l==="child_changed")this.changeMap.set(r,ma(r,e.snapshotNode,o.oldSnap));else throw Cs("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{getCompleteChild(e){return null}getChildAfterChild(e,i,r){return null}}const M1=new hN;class Vf{constructor(e,i,r=null){this.writes_=e,this.viewCache_=i,this.optCompleteServerCache_=r}getCompleteChild(e){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(e))return i.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new sr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jf(this.writes_,e,r)}}getChildAfterChild(e,i,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:or(this.viewCache_),l=uN(this.writes_,o,i,1,r,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(n){return{filter:n}}function pN(n,e){D(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function mN(n,e,i,r,o){const l=new dN;let u,f;if(i.type===en.OVERWRITE){const m=i;m.source.fromUser?u=Bh(n,e,m.path,m.snap,r,o,l):(D(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered()&&!de(m.path),u=Ac(n,e,m.path,m.snap,r,o,f,l))}else if(i.type===en.MERGE){const m=i;m.source.fromUser?u=vN(n,e,m.path,m.children,r,o,l):(D(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered(),u=jh(n,e,m.path,m.children,r,o,f,l))}else if(i.type===en.ACK_USER_WRITE){const m=i;m.revert?u=bN(n,e,m.path,r,o,l):u=_N(n,e,m.path,m.affectedTree,r,o,l)}else if(i.type===en.LISTEN_COMPLETE)u=yN(n,e,i.path,r,l);else throw Cs("Unknown operation type: "+i.type);const h=l.getChanges();return gN(e,u,h),{viewCache:u,changes:h}}function gN(n,e,i){const r=e.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),l=xh(n);(i.length>0||!n.eventCache.isFullyInitialized()||o&&!r.getNode().equals(l)||!r.getNode().getPriority().equals(l.getPriority()))&&i.push(k1(xh(e)))}}function x1(n,e,i,r,o,l){const u=e.eventCache;if(Rc(r,i)!=null)return e;{let f,h;if(de(i))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=or(e),y=m instanceof K?m:K.EMPTY_NODE,g=Bf(r,y);f=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const m=Tc(r,or(e));f=n.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=oe(i);if(m===".priority"){D(wi(i)===1,"Can't have a priority with additional path components");const y=u.getNode();h=e.serverCache.getNode();const g=My(r,i,y,h);g!=null?f=n.filter.updatePriority(y,g):f=u.getNode()}else{const y=ke(i);let g;if(u.isCompleteForChild(m)){h=e.serverCache.getNode();const b=My(r,i,u.getNode(),h);b!=null?g=u.getNode().getImmediateChild(m).updateChild(y,b):g=u.getNode().getImmediateChild(m)}else g=jf(r,m,e.serverCache);g!=null?f=n.filter.updateChild(u.getNode(),m,g,y,o,l):f=u.getNode()}}return Zo(e,f,u.isFullyInitialized()||de(i),n.filter.filtersNodes())}}function Ac(n,e,i,r,o,l,u,f){const h=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(de(i))m=y.updateFullNode(h.getNode(),r,null);else if(y.filtersNodes()&&!h.isFiltered()){const S=h.getNode().updateChild(i,r);m=y.updateFullNode(h.getNode(),S,null)}else{const S=oe(i);if(!h.isCompleteForPath(i)&&wi(i)>1)return e;const C=ke(i),I=h.getNode().getImmediateChild(S).updateChild(C,r);S===".priority"?m=y.updatePriority(h.getNode(),I):m=y.updateChild(h.getNode(),S,I,C,M1,null)}const g=A1(e,m,h.isFullyInitialized()||de(i),y.filtersNodes()),b=new Vf(o,g,l);return x1(n,g,i,o,b,f)}function Bh(n,e,i,r,o,l,u){const f=e.eventCache;let h,m;const y=new Vf(o,e,l);if(de(i))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),h=Zo(e,m,!0,n.filter.filtersNodes());else{const g=oe(i);if(g===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),h=Zo(e,m,f.isFullyInitialized(),f.isFiltered());else{const b=ke(i),S=f.getNode().getImmediateChild(g);let C;if(de(b))C=r;else{const _=y.getCompleteChild(g);_!=null?v1(b)===".priority"&&_.getChild(y1(b)).isEmpty()?C=_:C=_.updateChild(b,r):C=K.EMPTY_NODE}if(S.equals(C))h=e;else{const _=n.filter.updateChild(f.getNode(),g,C,b,y,u);h=Zo(e,_,f.isFullyInitialized(),n.filter.filtersNodes())}}}return h}function xy(n,e){return n.eventCache.isCompleteForChild(e)}function vN(n,e,i,r,o,l,u){let f=e;return r.foreach((h,m)=>{const y=et(i,h);xy(e,oe(y))&&(f=Bh(n,f,y,m,o,l,u))}),r.foreach((h,m)=>{const y=et(i,h);xy(e,oe(y))||(f=Bh(n,f,y,m,o,l,u))}),f}function Fy(n,e,i){return i.foreach((r,o)=>{e=e.updateChild(r,o)}),e}function jh(n,e,i,r,o,l,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let h=e,m;de(i)?m=r:m=new Re(null).setTree(i,r);const y=e.serverCache.getNode();return m.children.inorderTraversal((g,b)=>{if(y.hasChild(g)){const S=e.serverCache.getNode().getImmediateChild(g),C=Fy(n,S,b);h=Ac(n,h,new Se(g),C,o,l,u,f)}}),m.children.inorderTraversal((g,b)=>{const S=!e.serverCache.isCompleteForChild(g)&&b.value===null;if(!y.hasChild(g)&&!S){const C=e.serverCache.getNode().getImmediateChild(g),_=Fy(n,C,b);h=Ac(n,h,new Se(g),_,o,l,u,f)}}),h}function _N(n,e,i,r,o,l,u){if(Rc(o,i)!=null)return e;const f=e.serverCache.isFiltered(),h=e.serverCache;if(r.value!=null){if(de(i)&&h.isFullyInitialized()||h.isCompleteForPath(i))return Ac(n,e,i,h.getNode().getChild(i),o,l,f,u);if(de(i)){let m=new Re(null);return h.getNode().forEachChild(fs,(y,g)=>{m=m.set(new Se(y),g)}),jh(n,e,i,m,o,l,f,u)}else return e}else{let m=new Re(null);return r.foreach((y,g)=>{const b=et(i,y);h.isCompleteForPath(b)&&(m=m.set(y,h.getNode().getChild(b)))}),jh(n,e,i,m,o,l,f,u)}}function yN(n,e,i,r,o){const l=e.serverCache,u=A1(e,l.getNode(),l.isFullyInitialized()||de(i),l.isFiltered());return x1(n,u,i,r,M1,o)}function bN(n,e,i,r,o,l){let u;if(Rc(r,i)!=null)return e;{const f=new Vf(r,e,o),h=e.eventCache.getNode();let m;if(de(i)||oe(i)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Tc(r,or(e));else{const g=e.serverCache.getNode();D(g instanceof K,"serverChildren would be complete if leaf node"),y=Bf(r,g)}y=y,m=n.filter.updateFullNode(h,y,l)}else{const y=oe(i);let g=jf(r,y,e.serverCache);g==null&&e.serverCache.isCompleteForChild(y)&&(g=h.getImmediateChild(y)),g!=null?m=n.filter.updateChild(h,y,g,ke(i),f,l):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(h,y,K.EMPTY_NODE,ke(i),f,l):m=h,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Tc(r,or(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,l)))}return u=e.serverCache.isFullyInitialized()||Rc(r,_e())!=null,Zo(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e,i){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,o=new Lf(r.getIndex()),l=jP(r);this.processor_=fN(l);const u=i.serverCache,f=i.eventCache,h=o.updateFullNode(K.EMPTY_NODE,u.getNode(),null),m=l.updateFullNode(K.EMPTY_NODE,f.getNode(),null),y=new sr(h,u.isFullyInitialized(),o.filtersNodes()),g=new sr(m,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=iu(g,y),this.eventGenerator_=new KP(this.query_)}get query(){return this.query_}}function IN(n){return n.viewCache_.serverCache.getNode()}function EN(n,e){const i=or(n.viewCache_);return i&&(n.query._queryParams.loadsAllData()||!de(e)&&!i.getImmediateChild(oe(e)).isEmpty())?i.getChild(e):null}function Uy(n){return n.eventRegistrations_.length===0}function CN(n,e){n.eventRegistrations_.push(e)}function By(n,e,i){const r=[];if(i){D(e==null,"A cancel should cancel all event registrations.");const o=n.query._path;n.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(i,o);u&&r.push(u)})}if(e){let o=[];for(let l=0;l<n.eventRegistrations_.length;++l){const u=n.eventRegistrations_[l];if(!u.matches(e))o.push(u);else if(e.hasAnyCallback()){o=o.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=o}else n.eventRegistrations_=[];return r}function jy(n,e,i,r){e.type===en.MERGE&&e.source.queryId!==null&&(D(or(n.viewCache_),"We should always have a full cache before handling merges"),D(xh(n.viewCache_),"Missing event cache, even though we have a server cache"));const o=n.viewCache_,l=mN(n.processor_,o,e,i,r);return pN(n.processor_,l.viewCache),D(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,F1(n,l.changes,l.viewCache.eventCache.getNode(),null)}function SN(n,e){const i=n.viewCache_.eventCache,r=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(Ue,(l,u)=>{r.push(ws(l,u))}),i.isFullyInitialized()&&r.push(k1(i.getNode())),F1(n,r,i.getNode(),e)}function F1(n,e,i,r){const o=r?[r]:n.eventRegistrations_;return $P(n.eventGenerator_,e,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc;class kN{constructor(){this.views=new Map}}function TN(n){D(!Pc,"__referenceConstructor has already been defined"),Pc=n}function RN(){return D(Pc,"Reference.ts has not been loaded"),Pc}function AN(n){return n.views.size===0}function Hf(n,e,i,r){const o=e.source.queryId;if(o!==null){const l=n.views.get(o);return D(l!=null,"SyncTree gave us an op for an invalid query."),jy(l,e,i,r)}else{let l=[];for(const u of n.views.values())l=l.concat(jy(u,e,i,r));return l}}function PN(n,e,i,r,o){const l=e._queryIdentifier,u=n.views.get(l);if(!u){let f=Tc(i,o?r:null),h=!1;f?h=!0:r instanceof K?(f=Bf(i,r),h=!1):(f=K.EMPTY_NODE,h=!1);const m=iu(new sr(f,h,!1),new sr(r,o,!1));return new wN(e,m)}return u}function NN(n,e,i,r,o,l){const u=PN(n,e,r,o,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),CN(u,i),SN(u,i)}function ON(n,e,i,r){const o=e._queryIdentifier,l=[];let u=[];const f=Ii(n);if(o==="default")for(const[h,m]of n.views.entries())u=u.concat(By(m,i,r)),Uy(m)&&(n.views.delete(h),m.query._queryParams.loadsAllData()||l.push(m.query));else{const h=n.views.get(o);h&&(u=u.concat(By(h,i,r)),Uy(h)&&(n.views.delete(o),h.query._queryParams.loadsAllData()||l.push(h.query)))}return f&&!Ii(n)&&l.push(new(RN())(e._repo,e._path)),{removed:l,events:u}}function U1(n){const e=[];for(const i of n.views.values())i.query._queryParams.loadsAllData()||e.push(i);return e}function ps(n,e){let i=null;for(const r of n.views.values())i=i||EN(r,e);return i}function B1(n,e){if(e._queryParams.loadsAllData())return ru(n);{const r=e._queryIdentifier;return n.views.get(r)}}function j1(n,e){return B1(n,e)!=null}function Ii(n){return ru(n)!=null}function ru(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc;function DN(n){D(!Nc,"__referenceConstructor has already been defined"),Nc=n}function LN(){return D(Nc,"Reference.ts has not been loaded"),Nc}let MN=1;class Vy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=cN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function V1(n,e,i,r,o){return XP(n.pendingWriteTree_,e,i,r,o),o?Pa(n,new rr(R1(),e,i)):[]}function $i(n,e,i=!1){const r=ZP(n.pendingWriteTree_,e);if(eN(n.pendingWriteTree_,e)){let l=new Re(null);return r.snap!=null?l=l.set(_e(),!0):Rt(r.children,u=>{l=l.set(new Se(u),!0)}),Pa(n,new kc(r.path,l,i))}else return[]}function su(n,e,i){return Pa(n,new rr(xf(),e,i))}function xN(n,e,i){const r=Re.fromObject(i);return Pa(n,new _a(xf(),e,r))}function FN(n,e){return Pa(n,new va(xf(),e))}function UN(n,e,i){const r=zf(n,i);if(r){const o=Gf(r),l=o.path,u=o.queryId,f=Ct(l,e),h=new va(Ff(u),f);return qf(n,l,h)}else return[]}function Vh(n,e,i,r,o=!1){const l=e._path,u=n.syncPointTree_.get(l);let f=[];if(u&&(e._queryIdentifier==="default"||j1(u,e))){const h=ON(u,e,i,r);AN(u)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const m=h.removed;if(f=h.events,!o){const y=m.findIndex(b=>b._queryParams.loadsAllData())!==-1,g=n.syncPointTree_.findOnPath(l,(b,S)=>Ii(S));if(y&&!g){const b=n.syncPointTree_.subtree(l);if(!b.isEmpty()){const S=VN(b);for(let C=0;C<S.length;++C){const _=S[C],I=_.query,E=z1(n,_);n.listenProvider_.startListening(ta(I),Oc(n,I),E.hashFn,E.onComplete)}}}!g&&m.length>0&&!r&&(y?n.listenProvider_.stopListening(ta(e),null):m.forEach(b=>{const S=n.queryToTagMap.get(ou(b));n.listenProvider_.stopListening(ta(b),S)}))}HN(n,m)}return f}function BN(n,e,i,r){const o=zf(n,r);if(o!=null){const l=Gf(o),u=l.path,f=l.queryId,h=Ct(u,e),m=new rr(Ff(f),h,i);return qf(n,u,m)}else return[]}function jN(n,e,i,r){const o=zf(n,r);if(o){const l=Gf(o),u=l.path,f=l.queryId,h=Ct(u,e),m=Re.fromObject(i),y=new _a(Ff(f),h,m);return qf(n,u,y)}else return[]}function Hy(n,e,i,r=!1){const o=e._path;let l=null,u=!1;n.syncPointTree_.foreachOnPath(o,(b,S)=>{const C=Ct(b,o);l=l||ps(S,C),u=u||Ii(S)});let f=n.syncPointTree_.get(o);f?(u=u||Ii(f),l=l||ps(f,_e())):(f=new kN,n.syncPointTree_=n.syncPointTree_.set(o,f));let h;l!=null?h=!0:(h=!1,l=K.EMPTY_NODE,n.syncPointTree_.subtree(o).foreachChild((S,C)=>{const _=ps(C,_e());_&&(l=l.updateImmediateChild(S,_))}));const m=j1(f,e);if(!m&&!e._queryParams.loadsAllData()){const b=ou(e);D(!n.queryToTagMap.has(b),"View does not exist, but we have a tag");const S=WN();n.queryToTagMap.set(b,S),n.tagToQueryMap.set(S,b)}const y=Uf(n.pendingWriteTree_,o);let g=NN(f,e,i,y,l,h);if(!m&&!u&&!r){const b=B1(f,e);g=g.concat(zN(n,e,b))}return g}function Wf(n,e,i){const o=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(u,f)=>{const h=Ct(u,e),m=ps(f,h);if(m)return m});return O1(o,e,l,i,!0)}function Pa(n,e){return H1(e,n.syncPointTree_,null,Uf(n.pendingWriteTree_,_e()))}function H1(n,e,i,r){if(de(n.path))return W1(n,e,i,r);{const o=e.get(_e());i==null&&o!=null&&(i=ps(o,_e()));let l=[];const u=oe(n.path),f=n.operationForChild(u),h=e.children.get(u);if(h&&f){const m=i?i.getImmediateChild(u):null,y=D1(r,u);l=l.concat(H1(f,h,m,y))}return o&&(l=l.concat(Hf(o,n,r,i))),l}}function W1(n,e,i,r){const o=e.get(_e());i==null&&o!=null&&(i=ps(o,_e()));let l=[];return e.children.inorderTraversal((u,f)=>{const h=i?i.getImmediateChild(u):null,m=D1(r,u),y=n.operationForChild(u);y&&(l=l.concat(W1(y,f,h,m)))}),o&&(l=l.concat(Hf(o,n,r,i))),l}function z1(n,e){const i=e.query,r=Oc(n,i);return{hashFn:()=>(IN(e)||K.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return r?UN(n,i._path,r):FN(n,i._path);{const l=BA(o,i);return Vh(n,i,null,l)}}}}function Oc(n,e){const i=ou(e);return n.queryToTagMap.get(i)}function ou(n){return n._path.toString()+"$"+n._queryIdentifier}function zf(n,e){return n.tagToQueryMap.get(e)}function Gf(n){const e=n.indexOf("$");return D(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Se(n.substr(0,e))}}function qf(n,e,i){const r=n.syncPointTree_.get(e);D(r,"Missing sync point for query tag that we're tracking");const o=Uf(n.pendingWriteTree_,e);return Hf(r,i,o,null)}function VN(n){return n.fold((e,i,r)=>{if(i&&Ii(i))return[ru(i)];{let o=[];return i&&(o=U1(i)),Rt(r,(l,u)=>{o=o.concat(u)}),o}})}function ta(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(LN())(n._repo,n._path):n}function HN(n,e){for(let i=0;i<e.length;++i){const r=e[i];if(!r._queryParams.loadsAllData()){const o=ou(r),l=n.queryToTagMap.get(o);n.queryToTagMap.delete(o),n.tagToQueryMap.delete(l)}}}function WN(){return MN++}function zN(n,e,i){const r=e._path,o=Oc(n,e),l=z1(n,i),u=n.listenProvider_.startListening(ta(e),o,l.hashFn,l.onComplete),f=n.syncPointTree_.subtree(r);if(o)D(!Ii(f.value),"If we're adding a query, it shouldn't be shadowed");else{const h=f.fold((m,y,g)=>{if(!de(m)&&y&&Ii(y))return[ru(y).query];{let b=[];return y&&(b=b.concat(U1(y).map(S=>S.query))),Rt(g,(S,C)=>{b=b.concat(C)}),b}});for(let m=0;m<h.length;++m){const y=h[m];n.listenProvider_.stopListening(ta(y),Oc(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.node_=e}getImmediateChild(e){const i=this.node_.getImmediateChild(e);return new Kf(i)}node(){return this.node_}}class $f{constructor(e,i){this.syncTree_=e,this.path_=i}getImmediateChild(e){const i=et(this.path_,e);return new $f(this.syncTree_,i)}node(){return Wf(this.syncTree_,this.path_)}}const GN=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Wy=function(n,e,i){if(!n||typeof n!="object")return n;if(D(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return qN(n[".sv"],e,i);if(typeof n[".sv"]=="object")return KN(n[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},qN=function(n,e,i){switch(n){case"timestamp":return i.timestamp;default:D(!1,"Unexpected server value: "+n)}},KN=function(n,e,i){n.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&D(!1,"Unexpected increment value: "+r);const o=e.node();if(D(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const u=o.getValue();return typeof u!="number"?r:u+r},$N=function(n,e,i,r){return Yf(e,new $f(i,n),r)},G1=function(n,e,i){return Yf(n,new Kf(e),i)};function Yf(n,e,i){const r=n.getPriority().val(),o=Wy(r,e.getImmediateChild(".priority"),i);let l;if(n.isLeafNode()){const u=n,f=Wy(u.getValue(),e,i);return f!==u.getValue()||o!==u.getPriority().val()?new st(f,ut(o)):n}else{const u=n;return l=u,o!==u.getPriority().val()&&(l=l.updatePriority(new st(o))),u.forEachChild(Ue,(f,h)=>{const m=Yf(h,e.getImmediateChild(f),i);m!==h&&(l=l.updateImmediateChild(f,m))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e="",i=null,r={children:{},childCount:0}){this.name=e,this.parent=i,this.node=r}}function Qf(n,e){let i=e instanceof Se?e:new Se(e),r=n,o=oe(i);for(;o!==null;){const l=ms(r.node.children,o)||{children:{},childCount:0};r=new Jf(o,r,l),i=ke(i),o=oe(i)}return r}function Ns(n){return n.node.value}function q1(n,e){n.node.value=e,Hh(n)}function K1(n){return n.node.childCount>0}function YN(n){return Ns(n)===void 0&&!K1(n)}function au(n,e){Rt(n.node.children,(i,r)=>{e(new Jf(i,n,r))})}function $1(n,e,i,r){i&&!r&&e(n),au(n,o=>{$1(o,e,!0,r)}),i&&r&&e(n)}function JN(n,e,i){let r=i?n:n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Na(n){return new Se(n.parent===null?n.name:Na(n.parent)+"/"+n.name)}function Hh(n){n.parent!==null&&QN(n.parent,n.name,n)}function QN(n,e,i){const r=YN(i),o=nn(n.node.children,e);r&&o?(delete n.node.children[e],n.node.childCount--,Hh(n)):!r&&!o&&(n.node.children[e]=i.node,n.node.childCount++,Hh(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=/[\[\].#$\/\u0000-\u001F\u007F]/,ZN=/[\[\].#$\u0000-\u001F\u007F]/,ph=10*1024*1024,Y1=function(n){return typeof n=="string"&&n.length!==0&&!XN.test(n)},J1=function(n){return typeof n=="string"&&n.length!==0&&!ZN.test(n)},e3=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),J1(n)},t3=function(n,e,i,r){r&&e===void 0||Xf(Xh(n,"value"),e,i)},Xf=function(n,e,i){const r=i instanceof Se?new _P(i,n):i;if(e===void 0)throw new Error(n+"contains undefined "+Gi(r));if(typeof e=="function")throw new Error(n+"contains a function "+Gi(r)+" with contents = "+e.toString());if(Jb(e))throw new Error(n+"contains "+e.toString()+" "+Gi(r));if(typeof e=="string"&&e.length>ph/3&&Bc(e)>ph)throw new Error(n+"contains a string greater than "+ph+" utf8 bytes "+Gi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(Rt(e,(u,f)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!Y1(u)))throw new Error(n+" contains an invalid key ("+u+") "+Gi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yP(r,u),Xf(n,f,r),bP(r)}),o&&l)throw new Error(n+' contains ".value" child '+Gi(r)+" in addition to actual children.")}},Q1=function(n,e,i,r){if(!(r&&i===void 0)&&!J1(i))throw new Error(Xh(n,e)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},n3=function(n,e,i,r){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Q1(n,e,i,r)},i3=function(n,e){if(oe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},r3=function(n,e){const i=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Y1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!e3(i))throw new Error(Xh(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zf(n,e){let i=null;for(let r=0;r<e.length;r++){const o=e[r],l=o.getPath();i!==null&&!Nf(l,i.path)&&(n.eventLists_.push(i),i=null),i===null&&(i={events:[],path:l}),i.events.push(o)}i&&n.eventLists_.push(i)}function X1(n,e,i){Zf(n,i),Z1(n,r=>Nf(r,e))}function jn(n,e,i){Zf(n,i),Z1(n,r=>Zt(r,e)||Zt(e,r))}function Z1(n,e){n.recursionDepth_++;let i=!0;for(let r=0;r<n.eventLists_.length;r++){const o=n.eventLists_[r];if(o){const l=o.path;e(l)?(o3(n.eventLists_[r]),n.eventLists_[r]=null):i=!1}}i&&(n.eventLists_=[]),n.recursionDepth_--}function o3(n){for(let e=0;e<n.events.length;e++){const i=n.events[e];if(i!==null){n.events[e]=null;const r=i.getEventRunner();Zi&&ht("event: "+i.toString()),Ps(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a3="repo_interrupt",l3=25;class c3{constructor(e,i,r,o){this.repoInfo_=e,this.forceRestClient_=i,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new s3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sc(),this.transactionQueueTree_=new Jf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function u3(n,e,i){if(n.stats_=Af(n.repoInfo_),n.forceRestClient_||WA())n.server_=new Cc(n.repoInfo_,(r,o,l,u)=>{zy(n,r,o,l,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Gy(n,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{at(i)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Dn(n.repoInfo_,e,(r,o,l,u)=>{zy(n,r,o,l,u)},r=>{Gy(n,r)},r=>{h3(n,r)},n.authTokenProvider_,n.appCheckProvider_,i),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=$A(n.repoInfo_,()=>new qP(n.stats_,n.server_)),n.infoData_=new VP,n.infoSyncTree_=new Vy({startListening:(r,o,l,u)=>{let f=[];const h=n.infoData_.getNode(r._path);return h.isEmpty()||(f=su(n.infoSyncTree_,r._path,h),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),tp(n,"connected",!1),n.serverSyncTree_=new Vy({startListening:(r,o,l,u)=>(n.server_.listen(r,l,o,(f,h)=>{const m=u(f,h);jn(n.eventQueue_,r._path,m)}),[]),stopListening:(r,o)=>{n.server_.unlisten(r,o)}})}function d3(n){const i=n.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function ep(n){return GN({timestamp:d3(n)})}function zy(n,e,i,r,o){n.dataUpdateCount++;const l=new Se(e);i=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,i):i;let u=[];if(o)if(r){const h=lc(i,m=>ut(m));u=jN(n.serverSyncTree_,l,h,o)}else{const h=ut(i);u=BN(n.serverSyncTree_,l,h,o)}else if(r){const h=lc(i,m=>ut(m));u=xN(n.serverSyncTree_,l,h)}else{const h=ut(i);u=su(n.serverSyncTree_,l,h)}let f=l;u.length>0&&(f=lu(n,l)),jn(n.eventQueue_,f,u)}function Gy(n,e){tp(n,"connected",e),e===!1&&p3(n)}function h3(n,e){Rt(e,(i,r)=>{tp(n,i,r)})}function tp(n,e,i){const r=new Se("/.info/"+e),o=ut(i);n.infoData_.updateSnapshot(r,o);const l=su(n.infoSyncTree_,r,o);jn(n.eventQueue_,r,l)}function ew(n){return n.nextWriteId_++}function f3(n,e,i,r,o){np(n,"set",{path:e.toString(),value:i,priority:r});const l=ep(n),u=ut(i,r),f=Wf(n.serverSyncTree_,e),h=G1(u,f,l),m=ew(n),y=V1(n.serverSyncTree_,e,h,m,!0);Zf(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(b,S)=>{const C=b==="ok";C||Tt("set at "+e+" failed: "+b);const _=$i(n.serverSyncTree_,m,!C);jn(n.eventQueue_,e,_),v3(n,o,b,S)});const g=sw(n,e);lu(n,g),jn(n.eventQueue_,g,[])}function p3(n){np(n,"onDisconnectEvents");const e=ep(n),i=Sc();Mh(n.onDisconnect_,_e(),(o,l)=>{const u=$N(o,l,n.serverSyncTree_,e);T1(i,o,u)});let r=[];Mh(i,_e(),(o,l)=>{r=r.concat(su(n.serverSyncTree_,o,l));const u=sw(n,o);lu(n,u)}),n.onDisconnect_=Sc(),jn(n.eventQueue_,_e(),r)}function m3(n,e,i){let r;oe(e._path)===".info"?r=Hy(n.infoSyncTree_,e,i):r=Hy(n.serverSyncTree_,e,i),X1(n.eventQueue_,e._path,r)}function qy(n,e,i){let r;oe(e._path)===".info"?r=Vh(n.infoSyncTree_,e,i):r=Vh(n.serverSyncTree_,e,i),X1(n.eventQueue_,e._path,r)}function g3(n){n.persistentConnection_&&n.persistentConnection_.interrupt(a3)}function np(n,...e){let i="";n.persistentConnection_&&(i=n.persistentConnection_.id+":"),ht(i,...e)}function v3(n,e,i,r){e&&Ps(()=>{if(i==="ok")e(null);else{const o=(i||"error").toUpperCase();let l=o;r&&(l+=": "+r);const u=new Error(l);u.code=o,e(u)}})}function tw(n,e,i){return Wf(n.serverSyncTree_,e,i)||K.EMPTY_NODE}function ip(n,e=n.transactionQueueTree_){if(e||cu(n,e),Ns(e)){const i=iw(n,e);D(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&_3(n,Na(e),i)}else K1(e)&&au(e,i=>{ip(n,i)})}function _3(n,e,i){const r=i.map(m=>m.currentWriteId),o=tw(n,e,r);let l=o;const u=o.hash();for(let m=0;m<i.length;m++){const y=i[m];D(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const g=Ct(e,y.path);l=l.updateChild(g,y.currentOutputSnapshotRaw)}const f=l.val(!0),h=e;n.server_.put(h.toString(),f,m=>{np(n,"transaction put response",{path:h.toString(),status:m});let y=[];if(m==="ok"){const g=[];for(let b=0;b<i.length;b++)i[b].status=2,y=y.concat($i(n.serverSyncTree_,i[b].currentWriteId)),i[b].onComplete&&g.push(()=>i[b].onComplete(null,!0,i[b].currentOutputSnapshotResolved)),i[b].unwatcher();cu(n,Qf(n.transactionQueueTree_,e)),ip(n,n.transactionQueueTree_),jn(n.eventQueue_,e,y);for(let b=0;b<g.length;b++)Ps(g[b])}else{if(m==="datastale")for(let g=0;g<i.length;g++)i[g].status===3?i[g].status=4:i[g].status=0;else{Tt("transaction at "+h.toString()+" failed: "+m);for(let g=0;g<i.length;g++)i[g].status=4,i[g].abortReason=m}lu(n,e)}},u)}function lu(n,e){const i=nw(n,e),r=Na(i),o=iw(n,i);return y3(n,o,r),r}function y3(n,e,i){if(e.length===0)return;const r=[];let o=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const h=e[f],m=Ct(i,h.path);let y=!1,g;if(D(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)y=!0,g=h.abortReason,o=o.concat($i(n.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=l3)y=!0,g="maxretry",o=o.concat($i(n.serverSyncTree_,h.currentWriteId,!0));else{const b=tw(n,h.path,u);h.currentInputSnapshot=b;const S=e[f].update(b.val());if(S!==void 0){Xf("transaction failed: Data returned ",S,h.path);let C=ut(S);typeof S=="object"&&S!=null&&nn(S,".priority")||(C=C.updatePriority(b.getPriority()));const I=h.currentWriteId,E=ep(n),T=G1(C,b,E);h.currentOutputSnapshotRaw=C,h.currentOutputSnapshotResolved=T,h.currentWriteId=ew(n),u.splice(u.indexOf(I),1),o=o.concat(V1(n.serverSyncTree_,h.path,T,h.currentWriteId,h.applyLocally)),o=o.concat($i(n.serverSyncTree_,I,!0))}else y=!0,g="nodata",o=o.concat($i(n.serverSyncTree_,h.currentWriteId,!0))}jn(n.eventQueue_,i,o),o=[],y&&(e[f].status=2,function(b){setTimeout(b,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(g==="nodata"?r.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):r.push(()=>e[f].onComplete(new Error(g),!1,null))))}cu(n,n.transactionQueueTree_);for(let f=0;f<r.length;f++)Ps(r[f]);ip(n,n.transactionQueueTree_)}function nw(n,e){let i,r=n.transactionQueueTree_;for(i=oe(e);i!==null&&Ns(r)===void 0;)r=Qf(r,i),e=ke(e),i=oe(e);return r}function iw(n,e){const i=[];return rw(n,e,i),i.sort((r,o)=>r.order-o.order),i}function rw(n,e,i){const r=Ns(e);if(r)for(let o=0;o<r.length;o++)i.push(r[o]);au(e,o=>{rw(n,o,i)})}function cu(n,e){const i=Ns(e);if(i){let r=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[r]=i[o],r++);i.length=r,q1(e,i.length>0?i:void 0)}au(e,r=>{cu(n,r)})}function sw(n,e){const i=Na(nw(n,e)),r=Qf(n.transactionQueueTree_,e);return JN(r,o=>{mh(n,o)}),mh(n,r),$1(r,o=>{mh(n,o)}),i}function mh(n,e){const i=Ns(e);if(i){const r=[];let o=[],l=-1;for(let u=0;u<i.length;u++)i[u].status===3||(i[u].status===1?(D(l===u-1,"All SENT items should be at beginning of queue."),l=u,i[u].status=3,i[u].abortReason="set"):(D(i[u].status===0,"Unexpected transaction status in abort"),i[u].unwatcher(),o=o.concat($i(n.serverSyncTree_,i[u].currentWriteId,!0)),i[u].onComplete&&r.push(i[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?q1(e,void 0):i.length=l+1,jn(n.eventQueue_,Na(e),o);for(let u=0;u<r.length;u++)Ps(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b3(n){let e="";const i=n.split("/");for(let r=0;r<i.length;r++)if(i[r].length>0){let o=i[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function w3(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const i of n.split("&")){if(i.length===0)continue;const r=i.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Tt(`Invalid query segment '${i}' in query '${n}'`)}return e}const Ky=function(n,e){const i=I3(n),r=i.namespace;i.domain==="firebase.com"&&Bn(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&i.domain!=="localhost"&&Bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||LA();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new l1(i.host,i.secure,r,o,e,"",r!==i.subdomain),path:new Se(i.pathString)}},I3=function(n){let e="",i="",r="",o="",l="",u=!0,f="https",h=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(f=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let g=n.indexOf("?");g===-1&&(g=n.length),e=n.substring(0,Math.min(y,g)),y<g&&(o=b3(n.substring(y,g)));const b=w3(n.substring(Math.min(n.length,g)));m=e.indexOf(":"),m>=0?(u=f==="https"||f==="wss",h=parseInt(e.substring(m+1),10)):m=e.length;const S=e.slice(0,m);if(S.toLowerCase()==="localhost")i="localhost";else if(S.split(".").length<=2)i=S;else{const C=e.indexOf(".");r=e.substring(0,C).toLowerCase(),i=e.substring(C+1),l=r}"ns"in b&&(l=b.ns)}return{host:e,port:h,domain:i,subdomain:r,secure:u,scheme:f,pathString:o,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,i,r,o){this.eventType=e,this.eventRegistration=i,this.snapshot=r,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+at(this.snapshot.exportVal())}}class aw{constructor(e,i,r){this.eventRegistration=e,this.error=i,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E3{constructor(e,i){this.snapshotCallback=e,this.cancelCallback=i}onValue(e,i){this.snapshotCallback.call(null,e,i)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,i,r,o){this._repo=e,this._path=i,this._queryParams=r,this._orderByCalled=o}get key(){return de(this._path)?null:v1(this._path)}get ref(){return new Gn(this._repo,this._path)}get _queryIdentifier(){const e=Py(this._queryParams),i=Tf(e);return i==="{}"?"default":i}get _queryObject(){return Py(this._queryParams)}isEqual(e){if(e=te(e),!(e instanceof rp))return!1;const i=this._repo===e._repo,r=Nf(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return i&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+vP(this._path)}}class Gn extends rp{constructor(e,i){super(e,i,new Mf,!1)}get parent(){const e=y1(this._path);return e===null?null:new Gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ya{constructor(e,i,r){this._node=e,this.ref=i,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const i=new Se(e),r=Dc(this.ref,e);return new ya(this._node.getChild(i),r,Ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,o)=>e(new ya(o,Dc(this.ref,r),Ue)))}hasChild(e){const i=new Se(e);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function lw(n,e){return n=te(n),n._checkNotDeleted("ref"),e!==void 0?Dc(n._root,e):n._root}function Dc(n,e){return n=te(n),oe(n._path)===null?n3("child","path",e,!1):Q1("child","path",e,!1),new Gn(n._repo,et(n._path,e))}function C3(n,e){n=te(n),i3("set",n._path),t3("set",e,n._path,!1);const i=new Fc;return f3(n._repo,n._path,e,null,i.wrapCallback(()=>{})),i.promise}class sp{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,i){const r=i._queryParams.getIndex();return new ow("value",this,new ya(e.snapshotNode,new Gn(i._repo,i._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,i){return this.callbackContext.hasCancelCallback?new aw(this,e,i):null}matches(e){return e instanceof sp?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class op{constructor(e,i){this.eventType=e,this.callbackContext=i}respondsTo(e){let i=e==="children_added"?"child_added":e;return i=i==="children_removed"?"child_removed":i,this.eventType===i}createCancelEvent(e,i){return this.callbackContext.hasCancelCallback?new aw(this,e,i):null}createEvent(e,i){D(e.childName!=null,"Child events should have a childName.");const r=Dc(new Gn(i._repo,i._path),e.childName),o=i._queryParams.getIndex();return new ow(e.type,this,new ya(e.snapshotNode,r,o),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof op?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function S3(n,e,i,r,o){let l;if(typeof r=="object"&&(l=void 0,o=r),typeof r=="function"&&(l=r),o&&o.onlyOnce){const h=i,m=(y,g)=>{qy(n._repo,n,f),h(y,g)};m.userCallback=i.userCallback,m.context=i.context,i=m}const u=new E3(i,l||void 0),f=e==="value"?new sp(u):new op(e,u);return m3(n._repo,n,f),()=>qy(n._repo,n,f)}function k3(n,e,i,r){return S3(n,"value",e,i,r)}TN(Gn);DN(Gn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T3="FIREBASE_DATABASE_EMULATOR_HOST",Wh={};let R3=!1;function A3(n,e,i,r){n.repoInfo_=new l1(`${e}:${i}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function P3(n,e,i,r,o){let l=r||n.options.databaseURL;l===void 0&&(n.options.projectId||Bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=Ky(l,o),f=u.repoInfo,h,m;typeof process<"u"&&process.env&&(m=process.env[T3]),m?(h=!0,l=`http://${m}?ns=${f.namespace}`,u=Ky(l,o),f=u.repoInfo):h=!u.repoInfo.secure;const y=o&&h?new hs(hs.OWNER):new GA(n.name,n.options,e);r3("Invalid Firebase Database URL",u),de(u.path)||Bn("Database URL must point to the root of a Firebase Database (not including a child path).");const g=O3(f,n,y,new zA(n.name,i));return new D3(g,n)}function N3(n,e){const i=Wh[e];(!i||i[n.key]!==n)&&Bn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),g3(n),delete i[n.key]}function O3(n,e,i,r){let o=Wh[e.name];o||(o={},Wh[e.name]=o);let l=o[n.toURLString()];return l&&Bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new c3(n,R3,i,r),o[n.toURLString()]=l,l}class D3{constructor(e,i){this._repoInternal=e,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(u3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gn(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(N3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bn("Cannot call "+e+" on a deleted database.")}}function L3(n=nf(),e){const i=ba(n,"database").getImmediate({identifier:e});if(!i._instanceStarted){const r=CC("database");r&&M3(i,...r)}return i}function M3(n,e,i,r={}){n=te(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Bn("Cannot call useEmulator() after instance has already been initialized.");const o=n._repoInternal;let l;if(o.repoInfo_.nodeAdmin)r.mockUserToken&&Bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),l=new hs(hs.OWNER);else if(r.mockUserToken){const u=typeof r.mockUserToken=="string"?r.mockUserToken:SC(r.mockUserToken,n.app.options.projectId);l=new hs(u)}A3(o,e,i,l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x3(n){AA(Ei),_i(new Mn("database",(e,{instanceIdentifier:i})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return P3(r,o,l,i)},"PUBLIC").setMultipleInstances(!0)),_n(fy,py,n),_n(fy,py,"esm2017")}Dn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Dn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};x3();const ts=[];function cw(n,e){return{subscribe:Os(n,e).subscribe}}function Os(n,e=le){let i;const r=new Set;function o(f){if(bn(n,f)&&(n=f,i)){const h=!ts.length;for(const m of r)m[1](),ts.push(m,n);if(h){for(let m=0;m<ts.length;m+=2)ts[m][0](ts[m+1]);ts.length=0}}}function l(f){o(f(n))}function u(f,h=le){const m=[f,h];return r.add(m),r.size===1&&(i=e(o)||le),f(n),()=>{r.delete(m),r.size===0&&i&&(i(),i=null)}}return{set:o,update:l,subscribe:u}}function F3(n){return{subscribe:n.subscribe.bind(n)}}const zh=Os(""),Gh=Os(!0),qh=Os(!1),Kh=Os(null),uu=F3(Kh),uw=L3(),dw=cw(uw),Es=Os([]),gh=new Date,hw=`${gh.getFullYear()}-${gh.getMonth()+1}-${gh.getDate()}`,fw=cw(hw);Tk(Sb(),n=>{if(n){qh.set(!1),Kh.set(n);let e=lw(uw,"users/"+n.uid+"/"+hw);k3(e,i=>{i.val()&&Es.set(i.val())})}else Kh.set(null),Es.set([])});function U3(n){return n<.5?4*n*n*n:.5*Math.pow(2*n-2,3)+1}function pw(n){const e=n-1;return e*e*e+1}function $y(n,{delay:e=0,duration:i=400,easing:r=U3,amount:o=5,opacity:l=0}={}){const u=getComputedStyle(n),f=+u.opacity,h=u.filter==="none"?"":u.filter,m=f*(1-l),[y,g]=cA(o);return{delay:e,duration:i,easing:r,css:(b,S)=>`opacity: ${f-m*S}; filter: ${h} blur(${S*y}${g});`}}function Lc(n,{delay:e=0,duration:i=400,easing:r=Ef}={}){const o=+getComputedStyle(n).opacity;return{delay:e,duration:i,easing:r,css:l=>`opacity: ${l*o}`}}function Yy(n,{delay:e=0,duration:i=400,easing:r=pw,start:o=0,opacity:l=0}={}){const u=getComputedStyle(n),f=+u.opacity,h=u.transform==="none"?"":u.transform,m=1-o,y=f*(1-l);return{delay:e,duration:i,easing:r,css:(g,b)=>`
			transform: ${h} scale(${1-m*b});
			opacity: ${f-y*b}
		`}}function B3(n){let e,i,r,o,l,u;return{c(){e=W("button"),e.innerHTML=`Login
              <svg class="inline h-4 mb-1 fill-primary-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path></svg>`,L(e,"class","px-2.5 py-0.5 tracking-wide uppercase rounded-md bg-primary-200 text-primary-700")},m(f,h){he(f,e,h),o=!0,l||(u=Fn(e,"click",n[5]),l=!0)},p:le,i(f){o||(Un(()=>{o&&(r&&r.end(1),i=eu(e,Lc,{delay:500}),i.start())}),o=!0)},o(f){i&&i.invalidate(),r=tu(e,Lc,{}),o=!1},d(f){f&&se(e),f&&r&&r.end(),l=!1,u()}}}function j3(n){let e,i,r,o,l,u;return{c(){e=W("button"),e.innerHTML=`Logout
              <svg class="inline h-4 mb-1 fill-primary-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path></svg>`,L(e,"class","px-2.5 py-0.5 tracking-wide uppercase rounded bg-primary-200 text-primary-700")},m(f,h){he(f,e,h),o=!0,l||(u=Fn(e,"click",n[6]),l=!0)},p:le,i(f){o||(Un(()=>{o&&(r&&r.end(1),i=eu(e,Lc,{delay:500}),i.start())}),o=!0)},o(f){i&&i.invalidate(),r=tu(e,Lc,{}),o=!1},d(f){f&&se(e),f&&r&&r.end(),l=!1,u()}}}function Jy(n){let e,i,r,o,l,u;return{c(){e=W("input"),i=Ee(),r=ys("svg"),o=ys("path"),L(e,"type","text"),L(e,"class","w-full h-8 pl-4 pr-8 border-b border-solid bg-black-50 border-black-500 focus:border-primary-500 md:w-40 outline-0"),L(o,"d","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"),L(r,"class","absolute w-4 -translate-y-1/2 top-1/2 right-2"),L(r,"xmlns","http://www.w3.org/2000/svg"),L(r,"viewBox","0 0 512 512")},m(f,h){he(f,e,h),uy(e,n[0]),he(f,i,h),he(f,r,h),B(r,o),l||(u=[Fn(e,"input",n[7]),Fn(e,"keyup",n[8])],l=!0)},p(f,h){h&1&&e.value!==f[0]&&uy(e,f[0])},d(f){f&&se(e),f&&se(i),f&&se(r),l=!1,ur(u)}}}function V3(n){let e,i,r,o,l,u,f,h,m,y,g,b,S,C,_,I,E,T,R,F;const $=[j3,B3],M=[];function ee(z,J){return z[2]?0:1}f=ee(n),h=M[f]=$[f](n);let ne=n[3]&&Jy(n);return{c(){e=W("div"),i=W("nav"),r=W("ul"),o=W("li"),o.innerHTML='<img src="./static/pizza.tv-removebg.png" alt="pizza.tv logo" width="40"/> Pizza.tv',l=Ee(),u=W("li"),h.c(),m=Ee(),y=W("ul"),g=W("li"),ne&&ne.c(),b=Ee(),S=W("div"),C=W("div"),_=Ee(),I=W("div"),E=W("button"),E.textContent="×",L(o,"class","flex items-center font-serif font-black"),L(u,"class",""),L(r,"class","flex items-center gap-x-3 md:gap-x-6 shrink-0"),L(g,"class","relative h-8"),L(y,"class","shrink"),L(i,"class","flex justify-between max-w-screen-lg px-8 mx-auto gap-x-8"),L(e,"class","fixed top-0 left-0 z-[500] bg-black-50 w-screen py-2 shadow-md shadow-black-500"),L(C,"class","fixed top-0 left-0 z-[700] w-screen h-screen opacity-80 bg-black-800"),L(E,"class","absolute top-0 right-0 z-50 p-2 pt-3 pr-6 text-2xl leading-4"),L(I,"id","login"),L(I,"class","fixed z-[999] w-full max-w-sm -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"),L(S,"class","transition-opacity delay-100 opacity-0"),Ht(S,"hidden",!n[1]),Ht(S,"opacity-100",n[1])},m(z,J){he(z,e,J),B(e,i),B(i,r),B(r,o),B(r,l),B(r,u),M[f].m(u,null),B(i,m),B(i,y),B(y,g),ne&&ne.m(g,null),he(z,b,J),he(z,S,J),B(S,C),B(S,_),B(S,I),B(I,E),T=!0,R||(F=Fn(E,"click",n[5]),R=!0)},p(z,[J]){let Q=f;f=ee(z),f===Q?M[f].p(z,J):(Xc(),We(M[Q],1,1,()=>{M[Q]=null}),Zc(),h=M[f],h?h.p(z,J):(h=M[f]=$[f](z),h.c()),Oe(h,1),h.m(u,null)),z[3]?ne?ne.p(z,J):(ne=Jy(z),ne.c(),ne.m(g,null)):ne&&(ne.d(1),ne=null),(!T||J&2)&&Ht(S,"hidden",!z[1]),(!T||J&2)&&Ht(S,"opacity-100",z[1])},i(z){T||(Oe(h),T=!0)},o(z){We(h),T=!1},d(z){z&&se(e),M[f].d(),ne&&ne.d(),z&&se(b),z&&se(S),R=!1,F()}}}function H3(n,e,i){let r,o,l,u;ft(n,qh,b=>i(1,r=b)),ft(n,uu,b=>i(2,o=b)),ft(n,Gh,b=>i(3,l=b)),ft(n,zh,b=>i(4,u=b));let f="";function h(){gc(qh,r=!r,r)}function m(){Rk(Sb()).then(()=>{console.log("signed out")}).catch(b=>{console.log("error")})}function y(){f=this.value,i(0,f)}return[f,r,o,l,u,h,m,y,()=>gc(zh,u=f,u)]}class W3 extends zn{constructor(e){super(),Wn(this,e,H3,V3,bn,{})}}var mw={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ap={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},z3=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Mc={CSS:{},springs:{}};function gn(n,e,i){return Math.min(Math.max(n,e),i)}function na(n,e){return n.indexOf(e)>-1}function vh(n,e){return n.apply(null,e)}var H={arr:function(n){return Array.isArray(n)},obj:function(n){return na(Object.prototype.toString.call(n),"Object")},pth:function(n){return H.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||H.svg(n)},str:function(n){return typeof n=="string"},fnc:function(n){return typeof n=="function"},und:function(n){return typeof n>"u"},nil:function(n){return H.und(n)||n===null},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return H.hex(n)||H.rgb(n)||H.hsl(n)},key:function(n){return!mw.hasOwnProperty(n)&&!ap.hasOwnProperty(n)&&n!=="targets"&&n!=="keyframes"}};function gw(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(i){return parseFloat(i)}):[]}function vw(n,e){var i=gw(n),r=gn(H.und(i[0])?1:i[0],.1,100),o=gn(H.und(i[1])?100:i[1],.1,100),l=gn(H.und(i[2])?10:i[2],.1,100),u=gn(H.und(i[3])?0:i[3],.1,100),f=Math.sqrt(o/r),h=l/(2*Math.sqrt(o*r)),m=h<1?f*Math.sqrt(1-h*h):0,y=1,g=h<1?(h*f+-u)/m:-u+f;function b(C){var _=e?e*C/1e3:C;return h<1?_=Math.exp(-_*h*f)*(y*Math.cos(m*_)+g*Math.sin(m*_)):_=(y+g*_)*Math.exp(-_*f),C===0||C===1?C:1-_}function S(){var C=Mc.springs[n];if(C)return C;for(var _=1/6,I=0,E=0;;)if(I+=_,b(I)===1){if(E++,E>=16)break}else E=0;var T=I*_*1e3;return Mc.springs[n]=T,T}return e?b:S}function G3(n){return n===void 0&&(n=10),function(e){return Math.ceil(gn(e,1e-6,1)*n)*(1/n)}}var q3=function(){var n=11,e=1/(n-1);function i(y,g){return 1-3*g+3*y}function r(y,g){return 3*g-6*y}function o(y){return 3*y}function l(y,g,b){return((i(g,b)*y+r(g,b))*y+o(g))*y}function u(y,g,b){return 3*i(g,b)*y*y+2*r(g,b)*y+o(g)}function f(y,g,b,S,C){var _,I,E=0;do I=g+(b-g)/2,_=l(I,S,C)-y,_>0?b=I:g=I;while(Math.abs(_)>1e-7&&++E<10);return I}function h(y,g,b,S){for(var C=0;C<4;++C){var _=u(g,b,S);if(_===0)return g;var I=l(g,b,S)-y;g-=I/_}return g}function m(y,g,b,S){if(!(0<=y&&y<=1&&0<=b&&b<=1))return;var C=new Float32Array(n);if(y!==g||b!==S)for(var _=0;_<n;++_)C[_]=l(_*e,y,b);function I(E){for(var T=0,R=1,F=n-1;R!==F&&C[R]<=E;++R)T+=e;--R;var $=(E-C[R])/(C[R+1]-C[R]),M=T+$*e,ee=u(M,y,b);return ee>=.001?h(E,M,y,b):ee===0?M:f(E,T,T+e,y,b)}return function(E){return y===g&&b===S||E===0||E===1?E:l(I(E),g,S)}}return m}(),_w=function(){var n={linear:function(){return function(r){return r}}},e={Sine:function(){return function(r){return 1-Math.cos(r*Math.PI/2)}},Circ:function(){return function(r){return 1-Math.sqrt(1-r*r)}},Back:function(){return function(r){return r*r*(3*r-2)}},Bounce:function(){return function(r){for(var o,l=4;r<((o=Math.pow(2,--l))-1)/11;);return 1/Math.pow(4,3-l)-7.5625*Math.pow((o*3-2)/22-r,2)}},Elastic:function(r,o){r===void 0&&(r=1),o===void 0&&(o=.5);var l=gn(r,1,10),u=gn(o,.1,2);return function(f){return f===0||f===1?f:-l*Math.pow(2,10*(f-1))*Math.sin((f-1-u/(Math.PI*2)*Math.asin(1/l))*(Math.PI*2)/u)}}},i=["Quad","Cubic","Quart","Quint","Expo"];return i.forEach(function(r,o){e[r]=function(){return function(l){return Math.pow(l,o+2)}}}),Object.keys(e).forEach(function(r){var o=e[r];n["easeIn"+r]=o,n["easeOut"+r]=function(l,u){return function(f){return 1-o(l,u)(1-f)}},n["easeInOut"+r]=function(l,u){return function(f){return f<.5?o(l,u)(f*2)/2:1-o(l,u)(f*-2+2)/2}},n["easeOutIn"+r]=function(l,u){return function(f){return f<.5?(1-o(l,u)(1-f*2))/2:(o(l,u)(f*2-1)+1)/2}}}),n}();function lp(n,e){if(H.fnc(n))return n;var i=n.split("(")[0],r=_w[i],o=gw(n);switch(i){case"spring":return vw(n,e);case"cubicBezier":return vh(q3,o);case"steps":return vh(G3,o);default:return vh(r,o)}}function yw(n){try{var e=document.querySelectorAll(n);return e}catch{return}}function du(n,e){for(var i=n.length,r=arguments.length>=2?arguments[1]:void 0,o=[],l=0;l<i;l++)if(l in n){var u=n[l];e.call(r,u,l,n)&&o.push(u)}return o}function hu(n){return n.reduce(function(e,i){return e.concat(H.arr(i)?hu(i):i)},[])}function Qy(n){return H.arr(n)?n:(H.str(n)&&(n=yw(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function cp(n,e){return n.some(function(i){return i===e})}function up(n){var e={};for(var i in n)e[i]=n[i];return e}function $h(n,e){var i=up(n);for(var r in n)i[r]=e.hasOwnProperty(r)?e[r]:n[r];return i}function fu(n,e){var i=up(n);for(var r in e)i[r]=H.und(n[r])?e[r]:n[r];return i}function K3(n){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);return e?"rgba("+e[1]+",1)":n}function $3(n){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=n.replace(e,function(f,h,m,y){return h+h+m+m+y+y}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),o=parseInt(r[1],16),l=parseInt(r[2],16),u=parseInt(r[3],16);return"rgba("+o+","+l+","+u+",1)"}function Y3(n){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),i=parseInt(e[1],10)/360,r=parseInt(e[2],10)/100,o=parseInt(e[3],10)/100,l=e[4]||1;function u(b,S,C){return C<0&&(C+=1),C>1&&(C-=1),C<1/6?b+(S-b)*6*C:C<1/2?S:C<2/3?b+(S-b)*(2/3-C)*6:b}var f,h,m;if(r==0)f=h=m=o;else{var y=o<.5?o*(1+r):o+r-o*r,g=2*o-y;f=u(g,y,i+1/3),h=u(g,y,i),m=u(g,y,i-1/3)}return"rgba("+f*255+","+h*255+","+m*255+","+l+")"}function J3(n){if(H.rgb(n))return K3(n);if(H.hex(n))return $3(n);if(H.hsl(n))return Y3(n)}function Ln(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function Q3(n){if(na(n,"translate")||n==="perspective")return"px";if(na(n,"rotate")||na(n,"skew"))return"deg"}function Yh(n,e){return H.fnc(n)?n(e.target,e.id,e.total):n}function vn(n,e){return n.getAttribute(e)}function dp(n,e,i){var r=Ln(e);if(cp([i,"deg","rad","turn"],r))return e;var o=Mc.CSS[e+i];if(!H.und(o))return o;var l=100,u=document.createElement(n.tagName),f=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;f.appendChild(u),u.style.position="absolute",u.style.width=l+i;var h=l/u.offsetWidth;f.removeChild(u);var m=h*parseFloat(e);return Mc.CSS[e+i]=m,m}function bw(n,e,i){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return i?dp(n,o,i):o}}function hp(n,e){if(H.dom(n)&&!H.inp(n)&&(!H.nil(vn(n,e))||H.svg(n)&&n[e]))return"attribute";if(H.dom(n)&&cp(z3,e))return"transform";if(H.dom(n)&&e!=="transform"&&bw(n,e))return"css";if(n[e]!=null)return"object"}function ww(n){if(H.dom(n)){for(var e=n.style.transform||"",i=/(\w+)\(([^)]*)\)/g,r=new Map,o;o=i.exec(e);)r.set(o[1],o[2]);return r}}function X3(n,e,i,r){var o=na(e,"scale")?1:0+Q3(e),l=ww(n).get(e)||o;return i&&(i.transforms.list.set(e,l),i.transforms.last=e),r?dp(n,l,r):l}function fp(n,e,i,r){switch(hp(n,e)){case"transform":return X3(n,e,r,i);case"css":return bw(n,e,i);case"attribute":return vn(n,e);default:return n[e]||0}}function pp(n,e){var i=/^(\*=|\+=|-=)/.exec(n);if(!i)return n;var r=Ln(n)||0,o=parseFloat(e),l=parseFloat(n.replace(i[0],""));switch(i[0][0]){case"+":return o+l+r;case"-":return o-l+r;case"*":return o*l+r}}function Iw(n,e){if(H.col(n))return J3(n);if(/\s/g.test(n))return n;var i=Ln(n),r=i?n.substr(0,n.length-i.length):n;return e?r+e:r}function mp(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function Z3(n){return Math.PI*2*vn(n,"r")}function eO(n){return vn(n,"width")*2+vn(n,"height")*2}function tO(n){return mp({x:vn(n,"x1"),y:vn(n,"y1")},{x:vn(n,"x2"),y:vn(n,"y2")})}function Ew(n){for(var e=n.points,i=0,r,o=0;o<e.numberOfItems;o++){var l=e.getItem(o);o>0&&(i+=mp(r,l)),r=l}return i}function nO(n){var e=n.points;return Ew(n)+mp(e.getItem(e.numberOfItems-1),e.getItem(0))}function Cw(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return Z3(n);case"rect":return eO(n);case"line":return tO(n);case"polyline":return Ew(n);case"polygon":return nO(n)}}function iO(n){var e=Cw(n);return n.setAttribute("stroke-dasharray",e),e}function rO(n){for(var e=n.parentNode;H.svg(e)&&H.svg(e.parentNode);)e=e.parentNode;return e}function Sw(n,e){var i=e||{},r=i.el||rO(n),o=r.getBoundingClientRect(),l=vn(r,"viewBox"),u=o.width,f=o.height,h=i.viewBox||(l?l.split(" "):[0,0,u,f]);return{el:r,viewBox:h,x:h[0]/1,y:h[1]/1,w:u,h:f,vW:h[2],vH:h[3]}}function sO(n,e){var i=H.str(n)?yw(n)[0]:n,r=e||100;return function(o){return{property:o,el:i,svg:Sw(i),totalLength:Cw(i)*(r/100)}}}function oO(n,e,i){function r(y){y===void 0&&(y=0);var g=e+y>=1?e+y:0;return n.el.getPointAtLength(g)}var o=Sw(n.el,n.svg),l=r(),u=r(-1),f=r(1),h=i?1:o.w/o.vW,m=i?1:o.h/o.vH;switch(n.property){case"x":return(l.x-o.x)*h;case"y":return(l.y-o.y)*m;case"angle":return Math.atan2(f.y-u.y,f.x-u.x)*180/Math.PI}}function Xy(n,e){var i=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=Iw(H.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(i)?r.match(i).map(Number):[0],strings:H.str(n)||e?r.split(i):[]}}function gp(n){var e=n?hu(H.arr(n)?n.map(Qy):Qy(n)):[];return du(e,function(i,r,o){return o.indexOf(i)===r})}function kw(n){var e=gp(n);return e.map(function(i,r){return{target:i,id:r,total:e.length,transforms:{list:ww(i)}}})}function aO(n,e){var i=up(e);if(/^spring/.test(i.easing)&&(i.duration=vw(i.easing)),H.arr(n)){var r=n.length,o=r===2&&!H.obj(n[0]);o?n={value:n}:H.fnc(e.duration)||(i.duration=e.duration/r)}var l=H.arr(n)?n:[n];return l.map(function(u,f){var h=H.obj(u)&&!H.pth(u)?u:{value:u};return H.und(h.delay)&&(h.delay=f?0:e.delay),H.und(h.endDelay)&&(h.endDelay=f===l.length-1?e.endDelay:0),h}).map(function(u){return fu(u,i)})}function lO(n){for(var e=du(hu(n.map(function(l){return Object.keys(l)})),function(l){return H.key(l)}).reduce(function(l,u){return l.indexOf(u)<0&&l.push(u),l},[]),i={},r=function(l){var u=e[l];i[u]=n.map(function(f){var h={};for(var m in f)H.key(m)?m==u&&(h.value=f[m]):h[m]=f[m];return h})},o=0;o<e.length;o++)r(o);return i}function cO(n,e){var i=[],r=e.keyframes;r&&(e=fu(lO(r),e));for(var o in e)H.key(o)&&i.push({name:o,tweens:aO(e[o],n)});return i}function uO(n,e){var i={};for(var r in n){var o=Yh(n[r],e);H.arr(o)&&(o=o.map(function(l){return Yh(l,e)}),o.length===1&&(o=o[0])),i[r]=o}return i.duration=parseFloat(i.duration),i.delay=parseFloat(i.delay),i}function dO(n,e){var i;return n.tweens.map(function(r){var o=uO(r,e),l=o.value,u=H.arr(l)?l[1]:l,f=Ln(u),h=fp(e.target,n.name,f,e),m=i?i.to.original:h,y=H.arr(l)?l[0]:m,g=Ln(y)||Ln(h),b=f||g;return H.und(u)&&(u=m),o.from=Xy(y,b),o.to=Xy(pp(u,y),b),o.start=i?i.end:0,o.end=o.start+o.delay+o.duration+o.endDelay,o.easing=lp(o.easing,o.duration),o.isPath=H.pth(l),o.isPathTargetInsideSVG=o.isPath&&H.svg(e.target),o.isColor=H.col(o.from.original),o.isColor&&(o.round=1),i=o,o})}var Tw={css:function(n,e,i){return n.style[e]=i},attribute:function(n,e,i){return n.setAttribute(e,i)},object:function(n,e,i){return n[e]=i},transform:function(n,e,i,r,o){if(r.list.set(e,i),e===r.last||o){var l="";r.list.forEach(function(u,f){l+=f+"("+u+") "}),n.style.transform=l}}};function Rw(n,e){var i=kw(n);i.forEach(function(r){for(var o in e){var l=Yh(e[o],r),u=r.target,f=Ln(l),h=fp(u,o,f,r),m=f||Ln(h),y=pp(Iw(l,m),h),g=hp(u,o);Tw[g](u,o,y,r.transforms,!0)}})}function hO(n,e){var i=hp(n.target,e.name);if(i){var r=dO(e,n),o=r[r.length-1];return{type:i,property:e.name,animatable:n,tweens:r,duration:o.end,delay:r[0].delay,endDelay:o.endDelay}}}function fO(n,e){return du(hu(n.map(function(i){return e.map(function(r){return hO(i,r)})})),function(i){return!H.und(i)})}function Aw(n,e){var i=n.length,r=function(l){return l.timelineOffset?l.timelineOffset:0},o={};return o.duration=i?Math.max.apply(Math,n.map(function(l){return r(l)+l.duration})):e.duration,o.delay=i?Math.min.apply(Math,n.map(function(l){return r(l)+l.delay})):e.delay,o.endDelay=i?o.duration-Math.max.apply(Math,n.map(function(l){return r(l)+l.duration-l.endDelay})):e.endDelay,o}var Zy=0;function pO(n){var e=$h(mw,n),i=$h(ap,n),r=cO(i,n),o=kw(n.targets),l=fO(o,r),u=Aw(l,i),f=Zy;return Zy++,fu(e,{id:f,children:[],animatables:o,animations:l,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var Xt=[],Pw=function(){var n;function e(){!n&&(!e0()||!Pe.suspendWhenDocumentHidden)&&Xt.length>0&&(n=requestAnimationFrame(i))}function i(o){for(var l=Xt.length,u=0;u<l;){var f=Xt[u];f.paused?(Xt.splice(u,1),l--):(f.tick(o),u++)}n=u>0?requestAnimationFrame(i):void 0}function r(){Pe.suspendWhenDocumentHidden&&(e0()?n=cancelAnimationFrame(n):(Xt.forEach(function(o){return o._onDocumentVisibility()}),Pw()))}return typeof document<"u"&&document.addEventListener("visibilitychange",r),e}();function e0(){return!!document&&document.hidden}function Pe(n){n===void 0&&(n={});var e=0,i=0,r=0,o,l=0,u=null;function f(T){var R=window.Promise&&new Promise(function(F){return u=F});return T.finished=R,R}var h=pO(n);f(h);function m(){var T=h.direction;T!=="alternate"&&(h.direction=T!=="normal"?"normal":"reverse"),h.reversed=!h.reversed,o.forEach(function(R){return R.reversed=h.reversed})}function y(T){return h.reversed?h.duration-T:T}function g(){e=0,i=y(h.currentTime)*(1/Pe.speed)}function b(T,R){R&&R.seek(T-R.timelineOffset)}function S(T){if(h.reversePlayback)for(var F=l;F--;)b(T,o[F]);else for(var R=0;R<l;R++)b(T,o[R])}function C(T){for(var R=0,F=h.animations,$=F.length;R<$;){var M=F[R],ee=M.animatable,ne=M.tweens,z=ne.length-1,J=ne[z];z&&(J=du(ne,function(pu){return T<pu.end})[0]||J);for(var Q=gn(T-J.start-J.delay,0,J.duration)/J.duration,Te=isNaN(Q)?1:J.easing(Q),ie=J.to.strings,Be=J.round,ge=[],Y=J.to.numbers.length,X=void 0,Ge=0;Ge<Y;Ge++){var Bt=void 0,pt=J.to.numbers[Ge],qn=J.from.numbers[Ge]||0;J.isPath?Bt=oO(J.value,Te*pt,J.isPathTargetInsideSVG):Bt=qn+Te*(pt-qn),Be&&(J.isColor&&Ge>2||(Bt=Math.round(Bt*Be)/Be)),ge.push(Bt)}var zt=ie.length;if(!zt)X=ge[0];else{X=ie[0];for(var Si=0;Si<zt;Si++){ie[Si];var Oa=ie[Si+1],Ds=ge[Si];isNaN(Ds)||(Oa?X+=Ds+Oa:X+=Ds+" ")}}Tw[M.type](ee.target,M.property,X,ee.transforms),M.currentValue=X,R++}}function _(T){h[T]&&!h.passThrough&&h[T](h)}function I(){h.remaining&&h.remaining!==!0&&h.remaining--}function E(T){var R=h.duration,F=h.delay,$=R-h.endDelay,M=y(T);h.progress=gn(M/R*100,0,100),h.reversePlayback=M<h.currentTime,o&&S(M),!h.began&&h.currentTime>0&&(h.began=!0,_("begin")),!h.loopBegan&&h.currentTime>0&&(h.loopBegan=!0,_("loopBegin")),M<=F&&h.currentTime!==0&&C(0),(M>=$&&h.currentTime!==R||!R)&&C(R),M>F&&M<$?(h.changeBegan||(h.changeBegan=!0,h.changeCompleted=!1,_("changeBegin")),_("change"),C(M)):h.changeBegan&&(h.changeCompleted=!0,h.changeBegan=!1,_("changeComplete")),h.currentTime=gn(M,0,R),h.began&&_("update"),T>=R&&(i=0,I(),h.remaining?(e=r,_("loopComplete"),h.loopBegan=!1,h.direction==="alternate"&&m()):(h.paused=!0,h.completed||(h.completed=!0,_("loopComplete"),_("complete"),!h.passThrough&&"Promise"in window&&(u(),f(h)))))}return h.reset=function(){var T=h.direction;h.passThrough=!1,h.currentTime=0,h.progress=0,h.paused=!0,h.began=!1,h.loopBegan=!1,h.changeBegan=!1,h.completed=!1,h.changeCompleted=!1,h.reversePlayback=!1,h.reversed=T==="reverse",h.remaining=h.loop,o=h.children,l=o.length;for(var R=l;R--;)h.children[R].reset();(h.reversed&&h.loop!==!0||T==="alternate"&&h.loop===1)&&h.remaining++,C(h.reversed?h.duration:0)},h._onDocumentVisibility=g,h.set=function(T,R){return Rw(T,R),h},h.tick=function(T){r=T,e||(e=r),E((r+(i-e))*Pe.speed)},h.seek=function(T){E(y(T))},h.pause=function(){h.paused=!0,g()},h.play=function(){h.paused&&(h.completed&&h.reset(),h.paused=!1,Xt.push(h),g(),Pw())},h.reverse=function(){m(),h.completed=!h.reversed,g()},h.restart=function(){h.reset(),h.play()},h.remove=function(T){var R=gp(T);Nw(R,h)},h.reset(),h.autoplay&&h.play(),h}function t0(n,e){for(var i=e.length;i--;)cp(n,e[i].animatable.target)&&e.splice(i,1)}function Nw(n,e){var i=e.animations,r=e.children;t0(n,i);for(var o=r.length;o--;){var l=r[o],u=l.animations;t0(n,u),!u.length&&!l.children.length&&r.splice(o,1)}!i.length&&!r.length&&e.pause()}function mO(n){for(var e=gp(n),i=Xt.length;i--;){var r=Xt[i];Nw(e,r)}}function gO(n,e){e===void 0&&(e={});var i=e.direction||"normal",r=e.easing?lp(e.easing):null,o=e.grid,l=e.axis,u=e.from||0,f=u==="first",h=u==="center",m=u==="last",y=H.arr(n),g=parseFloat(y?n[0]:n),b=y?parseFloat(n[1]):0,S=Ln(y?n[1]:n)||0,C=e.start||0+(y?g:0),_=[],I=0;return function(E,T,R){if(f&&(u=0),h&&(u=(R-1)/2),m&&(u=R-1),!_.length){for(var F=0;F<R;F++){if(!o)_.push(Math.abs(u-F));else{var $=h?(o[0]-1)/2:u%o[0],M=h?(o[1]-1)/2:Math.floor(u/o[0]),ee=F%o[0],ne=Math.floor(F/o[0]),z=$-ee,J=M-ne,Q=Math.sqrt(z*z+J*J);l==="x"&&(Q=-z),l==="y"&&(Q=-J),_.push(Q)}I=Math.max.apply(Math,_)}r&&(_=_.map(function(ie){return r(ie/I)*I})),i==="reverse"&&(_=_.map(function(ie){return l?ie<0?ie*-1:-ie:Math.abs(I-ie)}))}var Te=y?(b-g)/I:g;return C+Te*(Math.round(_[T]*100)/100)+S}}function vO(n){n===void 0&&(n={});var e=Pe(n);return e.duration=0,e.add=function(i,r){var o=Xt.indexOf(e),l=e.children;o>-1&&Xt.splice(o,1);function u(b){b.passThrough=!0}for(var f=0;f<l.length;f++)u(l[f]);var h=fu(i,$h(ap,n));h.targets=h.targets||n.targets;var m=e.duration;h.autoplay=!1,h.direction=e.direction,h.timelineOffset=H.und(r)?m:pp(r,m),u(e),e.seek(h.timelineOffset);var y=Pe(h);u(y),l.push(y);var g=Aw(l,n);return e.delay=g.delay,e.endDelay=g.endDelay,e.duration=g.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}Pe.version="3.2.1";Pe.speed=1;Pe.suspendWhenDocumentHidden=!0;Pe.running=Xt;Pe.remove=mO;Pe.get=fp;Pe.set=Rw;Pe.convertPx=dp;Pe.path=sO;Pe.setDashoffset=iO;Pe.stagger=gO;Pe.timeline=vO;Pe.easing=lp;Pe.penner=_w;Pe.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};function _O(n,e,i){const r=n.slice();return r[1]=e[i],r[3]=i,r}function yO(n){return{c:le,m:le,p:le,d:le}}function bO(n){return{c:le,m:le,p:le,d:le}}function wO(n){let e,i,r=Array(8),o=[];for(let l=0;l<r.length;l+=1)o[l]=IO(_O(n,r,l));return{c(){e=W("div"),i=W("div");for(let l=0;l<o.length;l+=1)o[l].c();L(i,"class","relative w-full max-w-lg aspect-square"),L(e,"id","preloader"),L(e,"class","fixed top-0 left-0 flex items-center justify-center w-screen h-screen z-[999] bg-black-50")},m(l,u){he(l,e,u),B(e,i);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(i,null)},p:le,d(l){l&&se(e),jb(o,l)}}}function IO(n){let e,i;return{c(){e=W("img"),mn(e.src,i="./static/fetta-"+(n[3]+1)+".png")||L(e,"src",i),L(e,"alt","slice "+(n[3]+1)),L(e,"class","absolute top-0 left-0 w-full")},m(r,o){he(r,e,o)},p:le,d(r){r&&se(e)}}}function EO(n){let e,i={ctx:n,current:null,token:null,hasCatch:!1,pending:wO,then:bO,catch:yO,value:1};return Gb(n[0].finished,i),{c(){e=ka(),i.block.c()},m(r,o){he(r,e,o),i.block.m(r,i.anchor=o),i.mount=()=>e.parentNode,i.anchor=e},p(r,[o]){n=r,qb(i,n,o)},i:le,o:le,d(r){r&&se(e),i.block.d(r),i.token=null,i=null}}}function n0(n,e){if(e==="y"){let r=16;return n==0||n==7?r=-32:n==3||n==4?r=32:(n==1||n==6)&&(r=-32/2),r}else{let r=-32;return n==0||n==3?r=32/2:n==1||n==2?r=32:(n==4||n==7)&&(r=-32/2),r}}function CO(n){const e=Pe.timeline();return _A(()=>{e.add({targets:"#preloader > div",easing:"easeOutCubic",duration:1e3,rotate:{value:360*2,duration:2e3,easing:"easeOutBack"},opacity:[0,1],scale:[.4,1]}).add({targets:"#preloader img",easing:"easeOutQuad",delay:Pe.stagger(100),translateY:(i,r)=>[0,n0(r,"y")],translateX:(i,r)=>[0,n0(r,"x")],opacity:{value:0,delay:Pe.stagger(100,{start:300})}}).add({targets:"#preloader",easing:"easeOutCubic",opacity:0,complete:()=>{document.body.classList.remove("overflow-hidden")}})}),[e]}class SO extends zn{constructor(e){super(),Wn(this,e,CO,EO,bn,{})}}function i0(n){let e,i,r,o;function l(h,m){return h[2]?TO:kO}let u=l(n),f=u(n);return{c(){e=W("button"),f.c(),L(e,"class",i="block "+n[0])},m(h,m){he(h,e,m),f.m(e,null),r||(o=Fn(e,"click",fA(n[4])),r=!0)},p(h,m){u===(u=l(h))&&f?f.p(h,m):(f.d(1),f=u(h),f&&(f.c(),f.m(e,null))),m&1&&i!==(i="block "+h[0])&&L(e,"class",i)},d(h){h&&se(e),f.d(),r=!1,o()}}}function kO(n){let e,i,r;return{c(){e=ys("svg"),i=ys("path"),L(i,"d","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"),L(e,"class",r="w-6 h-6 fill-primary-700 "+n[1]),L(e,"xmlns","http://www.w3.org/2000/svg"),L(e,"viewBox","0 0 512 512")},m(o,l){he(o,e,l),B(e,i)},p(o,l){l&2&&r!==(r="w-6 h-6 fill-primary-700 "+o[1])&&L(e,"class",r)},d(o){o&&se(e)}}}function TO(n){let e,i,r;return{c(){e=ys("svg"),i=ys("path"),L(i,"d","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"),L(e,"class",r="w-6 h-6 fill-primary-700 "+n[1]),L(e,"xmlns","http://www.w3.org/2000/svg"),L(e,"viewBox","0 0 512 512")},m(o,l){he(o,e,l),B(e,i)},p(o,l){l&2&&r!==(r="w-6 h-6 fill-primary-700 "+o[1])&&L(e,"class",r)},d(o){o&&se(e)}}}function RO(n){let e,i=n[3]&&i0(n);return{c(){i&&i.c(),e=ka()},m(r,o){i&&i.m(r,o),he(r,e,o)},p(r,[o]){r[3]?i?i.p(r,o):(i=i0(r),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},i:le,o:le,d(r){i&&i.d(r),r&&se(e)}}}function AO(n,e,i){let r,o,l,u,f;ft(n,uu,b=>i(3,o=b)),ft(n,dw,b=>i(7,l=b)),ft(n,Es,b=>i(6,u=b)),ft(n,fw,b=>i(8,f=b));let{show:h}=e,{extraCSSButtonClasses:m=""}=e,{extraCSSSVGClasses:y=""}=e;function g(){u.includes(h)?gc(Es,u=u.filter(S=>S!==h),u):u.push(h);let b={};b[f]=u,C3(lw(l,"users/"+o.uid),b)}return n.$$set=b=>{"show"in b&&i(5,h=b.show),"extraCSSButtonClasses"in b&&i(0,m=b.extraCSSButtonClasses),"extraCSSSVGClasses"in b&&i(1,y=b.extraCSSSVGClasses)},n.$$.update=()=>{n.$$.dirty&96&&i(2,r=u.includes(h))},[m,y,r,o,g,h,u]}class Ow extends zn{constructor(e){super(),Wn(this,e,AO,RO,bn,{show:5,extraCSSButtonClasses:0,extraCSSSVGClasses:1})}}function r0(n){let e,i=n[4].get(n[1])+"";return{c(){e=W("div"),L(e,"class","h-3 mr-1")},m(r,o){he(r,e,o),e.innerHTML=i},p(r,o){o&2&&i!==(i=r[4].get(r[1])+"")&&(e.innerHTML=i)},d(r){r&&se(e)}}}function PO(n){let e,i,r,o,l=n[1]&&r0(n);return{c(){e=W("div"),l&&l.c(),i=Ee(),r=pi(n[0]),L(e,"class",o="inline-flex items-center px-2 py-1 text-xs rounded "+n[3]+" "+n[2])},m(u,f){he(u,e,f),l&&l.m(e,null),B(e,i),B(e,r)},p(u,[f]){u[1]?l?l.p(u,f):(l=r0(u),l.c(),l.m(e,i)):l&&(l.d(1),l=null),f&1&&vc(r,u[0]),f&12&&o!==(o="inline-flex items-center px-2 py-1 text-xs rounded "+u[3]+" "+u[2])&&L(e,"class",o)},i:le,o:le,d(u){u&&se(e),l&&l.d()}}}function NO(n,e,i){let{content:r}=e,{icon:o=""}=e,{extraTextClasses:l=""}=e,{extraIconClasses:u=""}=e,{dark:f=!1}=e,h="bg-black-400 text-black-100",m="fill-black-100";f&&(h="bg-black-700 text-black-400",m="fill-black-400");const y=new Map;return y.set("tv",`
  <svg class="w-full h-full ${m} ${u}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
  `).set("clock",`
  <svg class="w-full h-full ${m} ${u}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
  `).set("hourglass",`
  <svg class="w-full h-full ${m} ${u}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 19-5.6 37.4-16 53H112c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9H112z"/></svg>
  `),n.$$set=g=>{"content"in g&&i(0,r=g.content),"icon"in g&&i(1,o=g.icon),"extraTextClasses"in g&&i(2,l=g.extraTextClasses),"extraIconClasses"in g&&i(5,u=g.extraIconClasses),"dark"in g&&i(6,f=g.dark)},[r,o,l,h,y,u,f]}class ia extends zn{constructor(e){super(),Wn(this,e,NO,PO,bn,{content:0,icon:1,extraTextClasses:2,extraIconClasses:5,dark:6})}}function OO(n){let e,i,r,o,l,u,f,h,m,y,g,b,S,C,_,I,E,T,R,F,$;return r=new Ow({props:{show:n[0],extraCSSButtonClasses:"p-4"}}),I=new ia({props:{content:n[5],icon:"tv",dark:!0}}),T=new ia({props:{content:n[3],icon:"clock",dark:!0}}),{c(){e=W("div"),i=W("div"),Ut(r.$$.fragment),o=Ee(),l=W("img"),f=Ee(),h=W("div"),m=W("img"),g=Ee(),b=W("h5"),S=pi(n[1]),C=Ee(),_=W("div"),Ut(I.$$.fragment),E=Ee(),Ut(T.$$.fragment),L(i,"class","absolute z-30 transition-opacity delay-500 rounded-full shadow-md opacity-0 bg-primary-200 -top-6 -right-6 group-hover:opacity-100"),mn(l.src,u=n[2])||L(l,"src",u),L(l,"alt","Tv show featured"),L(l,"class","object-cover object-center aspect-[4/3] shadow-black-400 group-hover:shadow-black-500 group-hover:shadow-xl shadow-lg group-hover:scale-110 transition delay-150 duration-300"),L(m,"class","absolute translate-y-1/2 h-7 bottom-full left-6"),mn(m.src,y=n[4])||L(m,"src",y),L(m,"alt","channel logo"),L(h,"class","relative w-5/6 px-6 pt-4 pb-6 transition duration-300 shadow-lg group-hover:shadow-xl -top-12 text-black-200 bg-black-800 grow rounded-3xl shadow-black-400 group-hover:shadow-black-500 group-hover:scale-110"),L(e,"class","relative flex flex-col items-center w-full cursor-pointer rounded-3xl group")},m(M,ee){he(M,e,ee),B(e,i),It(r,i,null),B(e,o),B(e,l),B(e,f),B(e,h),B(h,m),B(h,g),B(h,b),B(b,S),B(h,C),B(h,_),It(I,_,null),B(_,E),It(T,_,null),R=!0,F||($=Fn(e,"click",n[7]),F=!0)},p(M,[ee]){const ne={};ee&1&&(ne.show=M[0]),r.$set(ne),(!R||ee&4&&!mn(l.src,u=M[2]))&&L(l,"src",u),(!R||ee&16&&!mn(m.src,y=M[4]))&&L(m,"src",y),(!R||ee&2)&&vc(S,M[1]);const z={};ee&32&&(z.content=M[5]),I.$set(z);const J={};ee&8&&(J.content=M[3]),T.$set(J)},i(M){R||(Oe(r.$$.fragment,M),Oe(I.$$.fragment,M),Oe(T.$$.fragment,M),R=!0)},o(M){We(r.$$.fragment,M),We(I.$$.fragment,M),We(T.$$.fragment,M),R=!1},d(M){M&&se(e),Et(r),Et(I),Et(T),F=!1,$()}}}function DO(n,e,i){let r;ft(n,uu,g=>i(9,g)),ft(n,dw,g=>i(10,g)),ft(n,Es,g=>i(6,r=g)),ft(n,fw,g=>i(11,g));let{show:o,title:l,imageURL:u,onair:f,channelIcon:h,channelName:m}=e;function y(g){bA.call(this,n,g)}return n.$$set=g=>{"show"in g&&i(0,o=g.show),"title"in g&&i(1,l=g.title),"imageURL"in g&&i(2,u=g.imageURL),"onair"in g&&i(3,f=g.onair),"channelIcon"in g&&i(4,h=g.channelIcon),"channelName"in g&&i(5,m=g.channelName)},n.$$.update=()=>{n.$$.dirty&65&&r.includes(o)},[o,l,u,f,h,m,r,y]}class LO extends zn{constructor(e){super(),Wn(this,e,DO,OO,bn,{show:0,title:1,imageURL:2,onair:3,channelIcon:4,channelName:5})}}function MO(n){let e,i,r,o,l,u,f,h,m,y,g,b,S,C,_,I,E,T,R,F,$,M,ee,ne,z,J,Q,Te,ie,Be,ge,Y;return l=new Ow({props:{show:n[0],extraCSSSVGClasses:"w-12 h-12 fill-primary-500"}}),_=new ia({props:{content:n[8],icon:"tv"}}),E=new ia({props:{content:n[5].split(" ")[1],icon:"clock"}}),R=new ia({props:{content:`${n[6]} '`,icon:"hourglass"}}),{c(){e=W("div"),i=W("button"),i.innerHTML=`<svg class="w-4 mr-2 fill-black-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"></path></svg>
    back`,r=Ee(),o=W("div"),Ut(l.$$.fragment),u=Ee(),f=W("img"),m=Ee(),y=W("div"),g=W("h1"),b=pi(n[1]),S=Ee(),C=W("div"),Ut(_.$$.fragment),I=Ee(),Ut(E.$$.fragment),T=Ee(),Ut(R.$$.fragment),F=Ee(),$=W("p"),M=pi(n[2]),ee=Ee(),ne=W("p"),z=W("img"),Q=Ee(),Te=W("a"),ie=pi("More infos"),L(i,"class","absolute top-0 left-0 z-40 flex items-center justify-center w-20 h-20 transition-transform rounded-full shadow-lg shadow-black-800 hover:scale-110 bg-black-700 text-black-100 md:right-full -translate-x-1/3 -translate-y-1/3"),L(o,"class","absolute z-40 top-3 right-3"),L(f,"class","relative w-screen max-w-none md:w-full -left-8 md:left-0"),mn(f.src,h=n[3])||L(f,"src",h),L(f,"alt","Tv show"),L(C,"class","my-2"),L(z,"class","h-10"),mn(z.src,J=n[7])||L(z,"src",J),L(z,"alt","channel logo"),L(Te,"href",n[4]),L(Te,"target","_blank"),L(Te,"class","text-sm tracking-wide underline uppercase underline-offset-4"),L(ne,"class","flex items-center justify-between"),L(y,"class","relative px-8 py-10 mx-auto shadow-xl -top-20 bg-black-200 rounded-2xl shadow-black-400 md:w-3/4"),L(e,"class","relative w-full max-w-screen-sm mx-auto")},m(X,Ge){he(X,e,Ge),B(e,i),B(e,r),B(e,o),It(l,o,null),B(e,u),B(e,f),B(e,m),B(e,y),B(y,g),B(g,b),B(y,S),B(y,C),It(_,C,null),B(C,I),It(E,C,null),B(C,T),It(R,C,null),B(y,F),B(y,$),B($,M),B(y,ee),B(y,ne),B(ne,z),B(ne,Q),B(ne,Te),B(Te,ie),Be=!0,ge||(Y=Fn(i,"click",n[10]),ge=!0)},p(X,[Ge]){const Bt={};Ge&1&&(Bt.show=X[0]),l.$set(Bt),(!Be||Ge&8&&!mn(f.src,h=X[3]))&&L(f,"src",h),(!Be||Ge&2)&&vc(b,X[1]);const pt={};Ge&256&&(pt.content=X[8]),_.$set(pt);const qn={};Ge&32&&(qn.content=X[5].split(" ")[1]),E.$set(qn);const zt={};Ge&64&&(zt.content=`${X[6]} '`),R.$set(zt),(!Be||Ge&4)&&vc(M,X[2]),(!Be||Ge&128&&!mn(z.src,J=X[7]))&&L(z,"src",J),(!Be||Ge&16)&&L(Te,"href",X[4])},i(X){Be||(Oe(l.$$.fragment,X),Oe(_.$$.fragment,X),Oe(E.$$.fragment,X),Oe(R.$$.fragment,X),Be=!0)},o(X){We(l.$$.fragment,X),We(_.$$.fragment,X),We(E.$$.fragment,X),We(R.$$.fragment,X),Be=!1},d(X){X&&se(e),Et(l),Et(_),Et(E),Et(R),ge=!1,Y()}}}function xO(n,e,i){const r=yA();let{showIndex:o,title:l,description:u,imageURL:f,url_sito:h,onair:m,duration:y,channelIcon:g,channelName:b}=e;const S=()=>r("hideModal");return n.$$set=C=>{"showIndex"in C&&i(0,o=C.showIndex),"title"in C&&i(1,l=C.title),"description"in C&&i(2,u=C.description),"imageURL"in C&&i(3,f=C.imageURL),"url_sito"in C&&i(4,h=C.url_sito),"onair"in C&&i(5,m=C.onair),"duration"in C&&i(6,y=C.duration),"channelIcon"in C&&i(7,g=C.channelIcon),"channelName"in C&&i(8,b=C.channelName)},[o,l,u,f,h,m,y,g,b,r,S]}class FO extends zn{constructor(e){super(),Wn(this,e,xO,MO,bn,{showIndex:0,title:1,description:2,imageURL:3,url_sito:4,onair:5,duration:6,channelIcon:7,channelName:8})}}function s0(n,e,i){const r=n.slice();return r[16]=e[i].title,r[17]=e[i].small_tablet_img,r[18]=e[i].onair,r[19]=e[i].channel,r[21]=i,r}function UO(n){let e,i=n[22].message+"",r;return{c(){e=W("p"),r=pi(i),L(e,"class","text-red-700")},m(o,l){he(o,e,l),B(e,r)},p:le,i:le,o:le,d(o){o&&se(e)}}}function BO(n){let e,i,r,o;const l=[VO,jO],u=[];function f(h,m){return h[1]?0:1}return e=f(n),i=u[e]=l[e](n),{c(){i.c(),r=ka()},m(h,m){u[e].m(h,m),he(h,r,m),o=!0},p(h,m){let y=e;e=f(h),e===y?u[e].p(h,m):(Xc(),We(u[y],1,1,()=>{u[y]=null}),Zc(),i=u[e],i?i.p(h,m):(i=u[e]=l[e](h),i.c()),Oe(i,1),i.m(r.parentNode,r))},i(h){o||(Oe(i),o=!0)},o(h){We(i),o=!1},d(h){u[e].d(h),h&&se(r)}}}function jO(n){let e,i,r,o,l;const u=[n[9][n[2]],{showIndex:n[2]},{imageURL:`${Yi}${n[9][n[2]].small_tablet_img}`},{channelIcon:`${Yi}/${n[9][n[2]].channel.icon2x}`},{channelName:n[9][n[2]].channel.name}];let f={};for(let h=0;h<u.length;h+=1)f=sA(f,u[h]);return i=new FO({props:f}),i.$on("hideModal",n[13]),{c(){e=W("div"),Ut(i.$$.fragment)},m(h,m){he(h,e,m),It(i,e,null),l=!0},p(h,m){n=h;const y=m&516?SA(u,[m&516&&kA(n[9][n[2]]),m&4&&{showIndex:n[2]},{imageURL:`${Yi}${n[9][n[2]].small_tablet_img}`},{channelIcon:`${Yi}/${n[9][n[2]].channel.icon2x}`},m&516&&{channelName:n[9][n[2]].channel.name}]):{};i.$set(y)},i(h){l||(Oe(i.$$.fragment,h),Un(()=>{l&&(o&&o.end(1),r=eu(e,$y,{...n[8],delay:700+n[0]*100}),r.start())}),l=!0)},o(h){We(i.$$.fragment,h),r&&r.invalidate(),o=tu(e,$y,{...n[8]}),l=!1},d(h){h&&se(e),Et(i),h&&o&&o.end()}}}function VO(n){let e,i,r,o,l,u,f=n[9].filter(n[10]).length===n[0]||n[3]&&n[6].length===0,h,m,y=n[4]&&o0(n),g=n[9],b=[];for(let _=0;_<g.length;_+=1)b[_]=a0(s0(n,g,_));const S=_=>We(b[_],1,1,()=>{b[_]=null});let C=f&&l0();return{c(){y&&y.c(),e=Ee(),i=W("div");for(let _=0;_<b.length;_+=1)b[_].c();r=Ee(),o=W("script"),u=Ee(),C&&C.c(),h=ka(),L(i,"class","relative grid md:grid-cols-3 gap-y-12 gap-x-12"),mn(o.src,l="https://cdn.lordicon.com/bhenfmcm.js")||L(o,"src",l)},m(_,I){y&&y.m(_,I),he(_,e,I),he(_,i,I);for(let E=0;E<b.length;E+=1)b[E]&&b[E].m(i,null);he(_,r,I),he(_,o,I),he(_,u,I),C&&C.m(_,I),he(_,h,I),m=!0},p(_,I){if(_[4]?y?y.p(_,I):(y=o0(_),y.c(),y.m(e.parentNode,e)):y&&(y.d(1),y=null),I&1e3){g=_[9];let E;for(E=0;E<g.length;E+=1){const T=s0(_,g,E);b[E]?(b[E].p(T,I),Oe(b[E],1)):(b[E]=a0(T),b[E].c(),Oe(b[E],1),b[E].m(i,null))}for(Xc(),E=g.length;E<b.length;E+=1)S(E);Zc()}I&105&&(f=_[9].filter(_[10]).length===_[0]||_[3]&&_[6].length===0),f?C||(C=l0(),C.c(),C.m(h.parentNode,h)):C&&(C.d(1),C=null)},i(_){if(!m){for(let I=0;I<g.length;I+=1)Oe(b[I]);m=!0}},o(_){b=b.filter(Boolean);for(let I=0;I<b.length;I+=1)We(b[I]);m=!1},d(_){y&&y.d(_),_&&se(e),_&&se(i),jb(b,_),_&&se(r),_&&se(o),_&&se(u),C&&C.d(_),_&&se(h)}}}function o0(n){let e,i,r,o,l,u,f;return{c(){e=W("div"),i=W("button"),r=W("div"),o=Ee(),l=W("span"),l.textContent="Likes only",L(r,"class","absolute w-6 h-6 transition-transform duration-300 -translate-y-1/2 rounded-full top-1/2 left-1 bg-black-50"),Ht(r,"translate-x-4",n[3]),L(i,"class","relative px-6 py-4 transition-colors duration-300 rounded-full outline-none bg-black-300"),Ht(i,"bg-green-400",n[3]),L(l,"class","bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-black-900 from-50% to-50% bg-[length:200%] bg-right transition-all duration-300"),Ht(l,"bg-left",n[3]),L(e,"class","flex items-center my-6 gap-x-2")},m(h,m){he(h,e,m),B(e,i),B(i,r),B(e,o),B(e,l),u||(f=Fn(i,"click",n[11]),u=!0)},p(h,m){m&8&&Ht(r,"translate-x-4",h[3]),m&8&&Ht(i,"bg-green-400",h[3]),m&8&&Ht(l,"bg-left",h[3])},d(h){h&&se(e),u=!1,f()}}}function a0(n){let e,i,r,o,l,u;function f(){return n[12](n[21])}return i=new LO({props:{show:n[21],title:n[16],imageURL:`${Yi}${n[17]}`,onair:n[18].split(" ")[1],channelIcon:`${Yi}/${n[19].icon}`,channelName:n[19].name}}),i.$on("click",f),{c(){e=W("div"),Ut(i.$$.fragment),r=Ee(),Ht(e,"hidden",n[16].toLowerCase().indexOf(n[5].toLowerCase())===-1||n[3]&&!n[6].includes(n[21]))},m(h,m){he(h,e,m),It(i,e,null),B(e,r),u=!0},p(h,m){n=h,(!u||m&616)&&Ht(e,"hidden",n[16].toLowerCase().indexOf(n[5].toLowerCase())===-1||n[3]&&!n[6].includes(n[21]))},i(h){u||(Oe(i.$$.fragment,h),Un(()=>{u&&(l&&l.end(1),o=eu(e,Yy,{...n[8],start:.8,delay:700+n[21]*100}),o.start())}),u=!0)},o(h){We(i.$$.fragment,h),o&&o.invalidate(),l=tu(e,Yy,{...n[8],start:.8,delay:n[21]*100}),u=!1},d(h){h&&se(e),Et(i),h&&l&&l.end()}}}function l0(n){let e;return{c(){e=W("div"),e.innerHTML=`<lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" delay="1000" colors="primary:#3f3f46,secondary:#f59e0b" stroke="60" style="width:250px;height:250px"></lord-icon> 
				<p class="text-2xl font-bold">Nothing to show here.</p>`,L(e,"class","flex flex-col items-center justify-center")},m(i,r){he(i,e,r)},d(i){i&&se(e)}}}function HO(n){let e;return{c(){e=W("p"),e.textContent="...waiting"},m(i,r){he(i,e,r)},p:le,i:le,o:le,d(i){i&&se(e)}}}function WO(n){let e,i,r,o;e=new SO({});let l={ctx:n,current:null,token:null,hasCatch:!0,pending:HO,then:BO,catch:UO,value:9,error:22,blocks:[,,,]};return Gb(n[9],l),{c(){Ut(e.$$.fragment),i=Ee(),r=ka(),l.block.c()},m(u,f){It(e,u,f),he(u,i,f),he(u,r,f),l.block.m(u,l.anchor=f),l.mount=()=>r.parentNode,l.anchor=r,o=!0},p(u,[f]){n=u,qb(l,n,f)},i(u){o||(Oe(e.$$.fragment,u),Oe(l.block),o=!0)},o(u){We(e.$$.fragment,u);for(let f=0;f<3;f+=1){const h=l.blocks[f];We(h)}o=!1},d(u){Et(e,u),u&&se(i),u&&se(r),l.block.d(u),l.token=null,l=null}}}const Yi="https://services.tivulaguida.it";function zO(n,e,i){let r,o,l,u;ft(n,Gh,R=>i(14,r=R)),ft(n,uu,R=>i(4,o=R)),ft(n,zh,R=>i(5,l=R)),ft(n,Es,R=>i(6,u=R));let f=0;async function h(){const R=await fetch(`${Yi}/api/epg/highlights.json`),F=await R.json();if(R.ok)return i(0,f=F.highlights.length),F.highlights;throw new Error("Some error occured")}const m=h();let y=!0,g=0;function b(R){R!==null&&R>=0&&Number.isInteger(R)&&i(2,g=R),i(1,y=!y),gc(Gh,r=y,r);let F=700;y||(F=(f-1)*100+600),setTimeout(()=>window.scrollTo(0,0),F)}const S={duration:600,easing:pw};let C=!1;return[f,y,g,C,o,l,u,b,S,m,R=>R.title.toLowerCase().indexOf(l.toLowerCase())===-1,()=>i(3,C=!C),R=>b(R),()=>b(null)]}class GO extends zn{constructor(e){super(),Wn(this,e,zO,WO,bn,{})}}function qO(n){let e;return{c(){e=W("footer"),e.innerHTML=`<ul class="flex justify-between max-w-screen-lg px-8 py-10 mx-auto"><li>© 2023</li> 
    <li class="font-serif">Pizza.tv</li></ul>`,L(e,"class","w-full mt-32 text-sm bg-black-800 text-black-400")},m(i,r){he(i,e,r)},p:le,i:le,o:le,d(i){i&&se(e)}}}class KO extends zn{constructor(e){super(),Wn(this,e,null,qO,bn,{})}}function $O(n){let e,i,r,o,l,u,f,h,m,y;return e=new W3({}),f=new GO({}),m=new KO({}),{c(){Ut(e.$$.fragment),i=Ee(),r=W("div"),o=W("main"),l=W("h1"),l.textContent="Tonight tv shows",u=Ee(),Ut(f.$$.fragment),h=Ee(),Ut(m.$$.fragment),L(l,"class","my-4 mb-8 md:my-12"),L(o,"class","w-full max-w-screen-lg px-8 pt-24 mx-auto grow"),L(r,"class","flex flex-col min-h-screen")},m(g,b){It(e,g,b),he(g,i,b),he(g,r,b),B(r,o),B(o,l),B(o,u),It(f,o,null),B(r,h),It(m,r,null),y=!0},p:le,i(g){y||(Oe(e.$$.fragment,g),Oe(f.$$.fragment,g),Oe(m.$$.fragment,g),y=!0)},o(g){We(e.$$.fragment,g),We(f.$$.fragment,g),We(m.$$.fragment,g),y=!1},d(g){Et(e,g),g&&se(i),g&&se(r),Et(f),Et(m)}}}class YO extends zn{constructor(e){super(),Wn(this,e,null,$O,bn,{})}}new YO({target:document.getElementById("app"),props:{}});rA(V);
