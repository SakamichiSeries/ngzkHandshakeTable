import{S as J,i as Q,s as j,a as O,k as I,c as M,l as w,m as z,h as p,n as S,b as P,g as k,v as L,d as E,f as N,K as Y,y as C,z as $,A as y,D as v,B as K,q as W,r as Z,w as x,a1 as ee,Y as te,O as ne}from"./index.b0d75dac.js";import{R as le,T as se,U as ie,I as re,V as ae,L as oe,W as F,X as H,Y as ce,Z as fe,_ as ue,$ as he,S as X}from"./StateButton.66ebb796.js";function _e(){}function ge(n,e,t){var i=-1,l=n.length;e<0&&(e=-e>l?0:l+e),t=t>l?l:t,t<0&&(t+=l),l=e>t?0:t-e>>>0,e>>>=0;for(var u=Array(l);++i<l;)u[i]=n[i+e];return u}function me(n,e){return e.length<2?n:le(n,ge(e,0,-1))}function be(n,e){return e=se(e,n),n=me(n,e),n==null||delete n[ie(re(e))]}var de=Array.prototype,pe=de.splice;function ve(n,e){for(var t=n?e.length:0,i=t-1;t--;){var l=e[t];if(t==i||l!==u){var u=l;ae(l)?pe.call(n,l,1):be(n,l)}}return n}function ke(n,e){var t=[];if(!(n&&n.length))return t;var i=-1,l=[],u=n.length;for(e=oe(e);++i<u;){var r=n[i];e(r,i,n)&&(t.push(r),l.push(i))}return ve(n,l),t}var Se=1/0,Ie=F&&1/H(new F([,-0]))[1]==Se?function(n){return new F(n)}:_e;const we=Ie;var Ae=200;function Ee(n,e,t){var i=-1,l=fe,u=n.length,r=!0,f=[],s=f;if(t)r=!1,l=ue;else if(u>=Ae){var o=e?null:we(n);if(o)return H(o);r=!1,l=he,s=new ce}else s=e?[]:f;e:for(;++i<u;){var a=n[i],g=e?e(a):a;if(a=t||a!==0?a:0,r&&g===g){for(var _=s.length;_--;)if(s[_]===g)continue e;e&&s.push(g),f.push(a)}else l(s,g,t)||(s!==f&&s.push(g),f.push(a))}return f}function Oe(n){return n&&n.length?Ee(n):[]}function R(n,e,t){const i=n.slice();return i[13]=e[t],i[14]=e,i[15]=t,i}function q(n,e,t){const i=n.slice();return i[16]=e[t],i}function D(n){let e,t,i,l,u,r;t=new X({props:{states:["全員選ぶ","全員外す"]}}),t.$on("changeFrom",n[8]);let f=!n[2]&&T();return{c(){e=I("div"),C(t.$$.fragment),i=O(),f&&f.c(),l=O(),u=I("br"),this.h()},l(s){e=w(s,"DIV",{class:!0});var o=z(e);$(t.$$.fragment,o),i=M(o),f&&f.l(o),l=M(o),u=w(o,"BR",{}),o.forEach(p),this.h()},h(){S(e,"class","memberGrouping svelte-1edzgs0")},m(s,o){P(s,e,o),y(t,e,null),v(e,i),f&&f.m(e,null),v(e,l),v(e,u),r=!0},p(s,o){s[2]?f&&(f.d(1),f=null):f||(f=T(),f.c(),f.m(e,l))},i(s){r||(k(t.$$.fragment,s),r=!0)},o(s){E(t.$$.fragment,s),r=!1},d(s){s&&p(e),K(t),f&&f.d()}}}function T(n){let e,t;return{c(){e=I("span"),t=W("18個以下を選択することを推奨します"),this.h()},l(i){e=w(i,"SPAN",{class:!0});var l=z(e);t=Z(l,"18個以下を選択することを推奨します"),l.forEach(p),this.h()},h(){S(e,"class","weaker svelte-1edzgs0")},m(i,l){P(i,e,l),v(e,t)},d(i){i&&p(e)}}}function U(n){let e,t,i,l=n[16].kanji+"",u,r,f,s;return r=te(n[12][0]),{c(){e=I("label"),t=I("input"),i=O(),u=W(l),this.h()},l(o){e=w(o,"LABEL",{});var a=z(e);t=w(a,"INPUT",{type:!0,name:!0,class:!0}),i=M(a),u=Z(a,l),a.forEach(p),this.h()},h(){S(t,"type","checkbox"),S(t,"name","selectedMembers"),t.__value=n[16].member,t.value=t.__value,S(t,"class","svelte-1edzgs0"),r.p(t)},m(o,a){P(o,e,a),v(e,t),t.checked=~(n[0]||[]).indexOf(t.__value),v(e,i),v(e,u),f||(s=ne(t,"change",n[11]),f=!0)},p(o,a){a&1&&(t.checked=~(o[0]||[]).indexOf(t.__value))},d(o){o&&p(e),r.r(),f=!1,s()}}}function V(n){let e,t,i=n[15],l,u,r;const f=()=>n[9](t,i),s=()=>n[9](null,i);function o(...h){return n[10](n[13],...h)}let a={states:n[13].labels};t=new X({props:a}),f(),t.$on("changeFrom",o);let g=n[13].consistsOf,_=[];for(let h=0;h<g.length;h+=1)_[h]=U(q(n,g,h));return{c(){e=I("div"),C(t.$$.fragment),l=O();for(let h=0;h<_.length;h+=1)_[h].c();u=O(),this.h()},l(h){e=w(h,"DIV",{class:!0});var b=z(e);$(t.$$.fragment,b),l=M(b);for(let d=0;d<_.length;d+=1)_[d].l(b);u=M(b),b.forEach(p),this.h()},h(){S(e,"class","groupList svelte-1edzgs0")},m(h,b){P(h,e,b),y(t,e,null),v(e,l);for(let d=0;d<_.length;d+=1)_[d]&&_[d].m(e,null);v(e,u),r=!0},p(h,b){n=h,i!==n[15]&&(s(),i=n[15],f());const d={};if(t.$set(d),b&17){g=n[13].consistsOf;let c;for(c=0;c<g.length;c+=1){const m=q(n,g,c);_[c]?_[c].p(m,b):(_[c]=U(m),_[c].c(),_[c].m(e,u))}for(;c<_.length;c+=1)_[c].d(1);_.length=g.length}},i(h){r||(k(t.$$.fragment,h),r=!0)},o(h){E(t.$$.fragment,h),r=!1},d(h){h&&p(e),s(),K(t),Y(_,h)}}}function Me(n){let e,t,i,l=n[1].length>1&&D(n),u=n[4],r=[];for(let s=0;s<u.length;s+=1)r[s]=V(R(n,u,s));const f=s=>E(r[s],1,1,()=>{r[s]=null});return{c(){l&&l.c(),e=O(),t=I("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){l&&l.l(s),e=M(s),t=w(s,"DIV",{class:!0});var o=z(t);for(let a=0;a<r.length;a+=1)r[a].l(o);o.forEach(p),this.h()},h(){S(t,"class","memberGrouping svelte-1edzgs0")},m(s,o){l&&l.m(s,o),P(s,e,o),P(s,t,o);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(t,null);i=!0},p(s,[o]){if(s[1].length>1?l?(l.p(s,o),o&2&&k(l,1)):(l=D(s),l.c(),k(l,1),l.m(e.parentNode,e)):l&&(L(),E(l,1,1,()=>{l=null}),N()),o&57){u=s[4];let a;for(a=0;a<u.length;a+=1){const g=R(s,u,a);r[a]?(r[a].p(g,o),k(r[a],1)):(r[a]=V(g),r[a].c(),k(r[a],1),r[a].m(t,null))}for(L(),a=u.length;a<r.length;a+=1)f(a);N()}},i(s){if(!i){k(l);for(let o=0;o<u.length;o+=1)k(r[o]);i=!0}},o(s){E(l),r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)E(r[o]);i=!1},d(s){l&&l.d(s),s&&p(e),s&&p(t),Y(r,s)}}}function Pe(n,e,t){let{selectables:i}=e,{selectedMembers:l}=e,{nolimit:u=!1}=e,r=Oe(i.map(c=>c.gen)).sort((c,m)=>parseInt(c)-parseInt(m)).map(c=>({gen:c,labels:[`全${c}期生選ぶ`,`全${c}期生外す`],consistsOf:i.filter(m=>m.gen==c)})),f=Array(r.length);function s(c,m){let G=r.find(A=>A.gen==parseInt(c));if(m.match(/選ぶ$/))for(let A of G.consistsOf)l.find(B=>A.member==B.member)||l.push(A.member);else G.consistsOf.map(A=>ke(l,B=>B==A.member));t(0,l)}function o(){for(let c of f)c.resetState(0)}const a=c=>t(0,l=c.match(/選ぶ$/)?i.map(m=>m.member):[]),g=[[]],_=c=>a(c.detail.text);function h(c,m){x[c?"unshift":"push"](()=>{f[m]=c,t(3,f)})}const b=(c,m)=>s(c.gen,m.detail.text);function d(){l=ee(g[0],this.__value,this.checked),t(0,l)}return n.$$set=c=>{"selectables"in c&&t(1,i=c.selectables),"selectedMembers"in c&&t(0,l=c.selectedMembers),"nolimit"in c&&t(2,u=c.nolimit)},[l,i,u,f,r,s,a,o,_,h,b,d,g]}class Fe extends J{constructor(e){super(),Q(this,e,Pe,Me,j,{selectables:1,selectedMembers:0,nolimit:2,reset:7})}get reset(){return this.$$.ctx[7]}}export{Fe as S,Ee as b,Oe as u};
