import{S as P,i as U,s as j,e as k,k as q,t as p,c as E,a as B,d as b,m as N,h as g,b as T,g as y,F as v,j as I,l as M,T as D,I as R,U as F}from"../../chunks/vendor-81807408.js";import{b as O}from"../../chunks/bible-94cd1b09.js";function A(o,t,i){const l=o.slice();return l[4]=t[i],l}function C(o){let t,i,l=o[2](o[4].verse)+"",_,s,u=o[4].book+"",r,n,e=o[4].chapter+"",h,a,m=o[4].verseNumber+"",S,w,H;return{c(){t=k("section"),i=k("p"),_=q(),s=k("a"),r=p(u),n=q(),h=p(e),a=p(":"),S=p(m),H=q(),this.h()},l(c){t=E(c,"SECTION",{class:!0});var f=B(t);i=E(f,"P",{});var L=B(i);L.forEach(b),_=N(f),s=E(f,"A",{href:!0});var d=B(s);r=g(d,u),n=N(d),h=g(d,e),a=g(d,":"),S=g(d,m),d.forEach(b),H=N(f),f.forEach(b),this.h()},h(){T(s,"href",w="/"+o[0]+"/"+o[4].book+"/"+o[4].chapter+"?verse="+o[4].verseNumber),T(t,"class","svelte-nfyymv")},m(c,f){y(c,t,f),v(t,i),i.innerHTML=l,v(t,_),v(t,s),v(s,r),v(s,n),v(s,h),v(s,a),v(s,S),v(t,H)},p(c,f){f&2&&l!==(l=c[2](c[4].verse)+"")&&(i.innerHTML=l),f&2&&u!==(u=c[4].book+"")&&I(r,u),f&2&&e!==(e=c[4].chapter+"")&&I(h,e),f&2&&m!==(m=c[4].verseNumber+"")&&I(S,m),f&3&&w!==(w="/"+c[0]+"/"+c[4].book+"/"+c[4].chapter+"?verse="+c[4].verseNumber)&&T(s,"href",w)},d(c){c&&b(t)}}}function z(o){let t,i,l,_,s,u,r=o[1],n=[];for(let e=0;e<r.length;e+=1)n[e]=C(A(o,r,e));return{c(){t=k("meta"),i=q(),l=k("h1"),_=p("Results:"),s=q();for(let e=0;e<n.length;e+=1)n[e].c();u=M(),this.h()},l(e){const h=D('[data-svelte="svelte-ecryk0"]',document.head);t=E(h,"META",{name:!0,content:!0}),h.forEach(b),i=N(e),l=E(e,"H1",{});var a=B(l);_=g(a,"Results:"),a.forEach(b),s=N(e);for(let m=0;m<n.length;m+=1)n[m].l(e);u=M(),this.h()},h(){T(t,"name","description"),T(t,"content","Bible search results"),document.title="Bible Search"},m(e,h){v(document.head,t),y(e,i,h),y(e,l,h),v(l,_),y(e,s,h);for(let a=0;a<n.length;a+=1)n[a].m(e,h);y(e,u,h)},p(e,[h]){if(h&7){r=e[1];let a;for(a=0;a<r.length;a+=1){const m=A(e,r,a);n[a]?n[a].p(m,h):(n[a]=C(m),n[a].c(),n[a].m(u.parentNode,u))}for(;a<n.length;a+=1)n[a].d(1);n.length=r.length}},i:R,o:R,d(e){b(t),e&&b(i),e&&b(l),e&&b(s),F(n,e),e&&b(u)}}}const Q=!1;async function V({fetch:o,params:t,url:i}){const l=i.searchParams.get("q"),_=t.translation;if(!l)return{props:{results:[]}};const s=await O(o,{translation:_});if(!s.translation)return{fallthrough:!0};const u=s.search(l);return{props:{translation:s.translation,results:u,query:l}}}function G(o,t,i){let{translation:l}=t,{results:_}=t,{query:s}=t;function u(r){if(!!r)return r.replace(new RegExp(s,"g"),`<strong>${s}</strong>`)}return o.$$set=r=>{"translation"in r&&i(0,l=r.translation),"results"in r&&i(1,_=r.results),"query"in r&&i(3,s=r.query)},[l,_,u,s]}class W extends P{constructor(t){super();U(this,t,G,z,j,{translation:0,results:1,query:3})}}export{W as default,V as load,Q as prerender};
