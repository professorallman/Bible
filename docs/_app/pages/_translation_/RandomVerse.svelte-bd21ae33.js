import{S as N,i as R,s as A,e as g,t as S,c as p,a as k,h as w,d as _,b as v,g as m,F as V,j as P,I as E,w as q,k as L,x as U,m as M,y as z,Y,Z,q as B,o as C,B as F,n as D,_ as G,p as J,$ as K,a0 as Q,a1 as W,a2 as X,H as x,a3 as $}from"../../chunks/vendor-aa83f43d.js";import{b as ee}from"../../chunks/bible-40837f4a.js";function te(f){let t,e;return{c(){t=g("a"),e=S(f[1]),this.h()},l(r){t=p(r,"A",{href:!0,class:!0});var s=k(t);e=w(s,f[1]),s.forEach(_),this.h()},h(){v(t,"href",f[0]),v(t,"class","svelte-1perjlt")},m(r,s){m(r,t,s),V(t,e)},p(r,[s]){s&2&&P(e,r[1]),s&1&&v(t,"href",r[0])},i:E,o:E,d(r){r&&_(t)}}}function ne(f,t,e){let{href:r}=t,{text:s}=t;return f.$$set=i=>{"href"in i&&e(0,r=i.href),"text"in i&&e(1,s=i.text)},[r,s]}class se extends N{constructor(t){super();R(this,t,ne,te,A,{href:0,text:1})}}function I(f,t,e){const r=f.slice();return r[5]=t[e],r[7]=e,r}function j(f,t){let e,r,s,i,c=E,l;return r=new se({props:{href:"/Bible/"+t[1]+"/"+t[5].book+"/"+t[5].chapter+"?verse="+t[5].verseNumber,text:t[5].book+" "+t[5].chapter+":"+t[5].verseNumber}}),{key:f,first:null,c(){e=g("li"),q(r.$$.fragment),s=L(),this.h()},l(n){e=p(n,"LI",{});var o=k(e);U(r.$$.fragment,o),s=M(o),o.forEach(_),this.h()},h(){this.first=e},m(n,o){m(n,e,o),z(r,e,null),V(e,s),l=!0},p(n,o){t=n;const u={};o&3&&(u.href="/Bible/"+t[1]+"/"+t[5].book+"/"+t[5].chapter+"?verse="+t[5].verseNumber),o&1&&(u.text=t[5].book+" "+t[5].chapter+":"+t[5].verseNumber),r.$set(u)},r(){i=e.getBoundingClientRect()},f(){Y(e),c()},a(){c(),c=Z(e,i,K,{})},i(n){l||(B(r.$$.fragment,n),l=!0)},o(n){C(r.$$.fragment,n),l=!1},d(n){n&&_(e),F(r)}}}function re(f){let t,e=[],r=new Map,s,i=f[0];const c=l=>l[5].id;for(let l=0;l<i.length;l+=1){let n=I(f,i,l),o=c(n);r.set(o,e[l]=j(o,n))}return{c(){t=g("ul");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=p(l,"UL",{class:!0});var n=k(t);for(let o=0;o<e.length;o+=1)e[o].l(n);n.forEach(_),this.h()},h(){v(t,"class","svelte-18dfyro")},m(l,n){m(l,t,n);for(let o=0;o<e.length;o+=1)e[o].m(t,null);s=!0},p(l,[n]){if(n&3){i=l[0],D();for(let o=0;o<e.length;o+=1)e[o].r();e=G(e,n,c,1,l,i,r,t,Q,j,null,I);for(let o=0;o<e.length;o+=1)e[o].a();J()}},i(l){if(!s){for(let n=0;n<i.length;n+=1)B(e[n]);s=!0}},o(l){for(let n=0;n<e.length;n+=1)C(e[n]);s=!1},d(l){l&&_(t);for(let n=0;n<e.length;n+=1)e[n].d()}}}function ae(f,t,e){let{translation:r}=t,{verses:s}=t,{doShuffle:i=!0}=t;function c(){e(0,s=s.sort(()=>.5-Math.random()))}let l;return f.$$set=n=>{"translation"in n&&e(1,r=n.translation),"verses"in n&&e(0,s=n.verses),"doShuffle"in n&&e(2,i=n.doShuffle)},f.$$.update=()=>{f.$$.dirty&12&&i&&(c(),e(3,l=setInterval(c,100)),setTimeout(()=>{clearInterval(l),e(2,i=!1)},1e3))},[s,r,i,l]}class le extends N{constructor(t){super();R(this,t,ae,re,A,{translation:1,verses:0,doShuffle:2})}}function T(f){let t,e,r;return{c(){t=S(`or
`),e=g("p"),r=S("Shake your phone for a new verse")},l(s){t=w(s,`or
`),e=p(s,"P",{});var i=k(e);r=w(i,"Shake your phone for a new verse"),i.forEach(_)},m(s,i){m(s,t,i),m(s,e,i),V(e,r)},d(s){s&&_(t),s&&_(e)}}}function ie(f){let t,e,r,s,i,c,l,n,o,u=f[3]&&T();function b(a){f[6](a)}let y={translation:f[0],verses:f[1]};return f[2]!==void 0&&(y.doShuffle=f[2]),i=new le({props:y}),W.push(()=>X(i,"doShuffle",b)),{c(){t=g("button"),e=S("Random Verse"),r=L(),u&&u.c(),s=L(),q(i.$$.fragment),this.h()},l(a){t=p(a,"BUTTON",{class:!0});var h=k(t);e=w(h,"Random Verse"),h.forEach(_),r=M(a),u&&u.l(a),s=M(a),U(i.$$.fragment,a),this.h()},h(){v(t,"class","svelte-1jy74gy")},m(a,h){m(a,t,h),V(t,e),m(a,r,h),u&&u.m(a,h),m(a,s,h),z(i,a,h),l=!0,n||(o=x(t,"click",f[4]),n=!0)},p(a,[h]){a[3]?u||(u=T(),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null);const d={};h&1&&(d.translation=a[0]),h&2&&(d.verses=a[1]),!c&&h&4&&(c=!0,d.doShuffle=a[2],$(()=>c=!1)),i.$set(d)},i(a){l||(B(i.$$.fragment,a),l=!0)},o(a){C(i.$$.fragment,a),l=!1},d(a){a&&_(t),a&&_(r),u&&u.d(a),a&&_(s),F(i,a),n=!1,o()}}}async function ce({fetch:f,params:t}){const e=await ee(f,{translation:t.translation});return e.translation?{props:{translation:e.translation,bible:e}}:{fallthrough:!0}}function oe(f,t,e){let{translation:r}=t,{bible:s}=t,i=[],c=!1;function l(){e(2,c=!0),e(1,i=s.random(10))}let n=!1,o=0,u=0,b=!1;if("LinearAccelerationSensor"in window&&"ontouchstart"in document.documentElement&&/Mobi|Android/i.test(navigator.userAgent)){n=!0;const a=new LinearAccelerationSensor;a.addEventListener("reading",h=>{const{x:d,y:H,z:O}=a;o||(o=a.timestamp),!(a.timestamp-o<100)&&(o=a.timestamp,Math.abs(d)>1||Math.abs(H)>1||Math.abs(O)>1?u<2?u=u+1:b||(navigator.vibrate(900),b=!0,l()):(u=0,b=!1,navigator.vibrate(0)))}),a.start()}function y(a){c=a,e(2,c)}return f.$$set=a=>{"translation"in a&&e(0,r=a.translation),"bible"in a&&e(5,s=a.bible)},[r,i,c,n,l,s,y]}class he extends N{constructor(t){super();R(this,t,oe,ie,A,{translation:0,bible:5})}}export{he as default,ce as load};