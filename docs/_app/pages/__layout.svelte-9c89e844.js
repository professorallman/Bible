import{S as F,i as R,s as j,e as m,t as $,k as T,c as d,a as v,h as q,d as u,m as B,b as P,g as V,F as n,G,H as O,I as H,J as ne,w as X,x as Y,y as Z,q as Q,K as re,o as U,L as x,B as ee,M as ie,N as te,p as ce,O as ue,P as fe,Q as _e,R as le,n as he}from"../chunks/vendor-21bd5755.js";import{b as pe}from"../chunks/bible-a3a33fc4.js";import{g as oe,a as be}from"../chunks/navigation-13fd7038.js";import"../chunks/singletons-d1fb5791.js";function me(r){let t,e,l,i,p,b,f,a,h,E,c,S;return{c(){t=m("section"),e=m("form"),l=m("label"),i=m("span"),p=$("Search:"),b=T(),f=m("input"),a=T(),h=m("button"),E=$("Go"),this.h()},l(o){t=d(o,"SECTION",{class:!0});var s=v(t);e=d(s,"FORM",{});var _=v(e);l=d(_,"LABEL",{"aria-label":!0,class:!0});var N=v(l);i=d(N,"SPAN",{});var C=v(i);p=q(C,"Search:"),C.forEach(u),b=B(N),f=d(N,"INPUT",{}),N.forEach(u),a=B(_),h=d(_,"BUTTON",{class:!0});var g=v(h);E=q(g,"Go"),g.forEach(u),_.forEach(u),s.forEach(u),this.h()},h(){P(l,"aria-label","Search"),P(l,"class","svelte-1g7e7cj"),P(h,"class","svelte-1g7e7cj"),P(t,"class","svelte-1g7e7cj")},m(o,s){V(o,t,s),n(t,e),n(e,l),n(l,i),n(i,p),n(l,b),n(l,f),G(f,r[0]),n(e,a),n(e,h),n(h,E),c||(S=[O(f,"input",r[3]),O(e,"submit",r[1])],c=!0)},p(o,[s]){s&1&&f.value!==o[0]&&G(f,o[0])},i:H,o:H,d(o){o&&u(t),c=!1,ne(S)}}}function de(r,t,e){let{translation:l="CPDV"}=t,i="";function p(f){f.preventDefault(),oe(`/Bible/search/${l}?q=${i}`),e(0,i="")}function b(){i=this.value,e(0,i)}return r.$$set=f=>{"translation"in f&&e(2,l=f.translation)},[i,p,l,b]}class ve extends F{constructor(t){super();R(this,t,de,me,j,{translation:2})}}function se(r){let t;return{c(){t=$("Not found, try again")},l(e){t=q(e,"Not found, try again")},m(e,l){V(e,t,l)},d(e){e&&u(t)}}}function ge(r){let t,e,l,i,p,b,f,a,h,E,c,S,o,s,_,N,C,g=r[1]&&se();return{c(){t=m("section"),e=m("form"),l=m("label"),i=m("span"),p=$("Quick Verse :"),b=T(),f=m("p"),a=m("small"),h=$("Examples: g, genesis, genesis 1, genesis 1:1, genesis 1:1-5"),E=T(),c=m("input"),S=T(),o=m("button"),s=$("Go"),_=T(),g&&g.c(),this.h()},l(y){t=d(y,"SECTION",{class:!0});var I=v(t);e=d(I,"FORM",{});var k=v(e);l=d(k,"LABEL",{"aria-label":!0,class:!0});var L=v(l);i=d(L,"SPAN",{});var w=v(i);p=q(w,"Quick Verse :"),w.forEach(u),b=B(L),f=d(L,"P",{class:!0});var D=v(f);a=d(D,"SMALL",{});var M=v(a);h=q(M,"Examples: g, genesis, genesis 1, genesis 1:1, genesis 1:1-5"),M.forEach(u),D.forEach(u),E=B(L),c=d(L,"INPUT",{}),L.forEach(u),S=B(k),o=d(k,"BUTTON",{class:!0});var A=v(o);s=q(A,"Go"),A.forEach(u),_=B(k),g&&g.l(k),k.forEach(u),I.forEach(u),this.h()},h(){P(f,"class","svelte-4a4pp0"),P(l,"aria-label","Search"),P(l,"class","svelte-4a4pp0"),P(o,"class","svelte-4a4pp0"),P(t,"class","svelte-4a4pp0")},m(y,I){V(y,t,I),n(t,e),n(e,l),n(l,i),n(i,p),n(l,b),n(l,f),n(f,a),n(a,h),n(l,E),n(l,c),G(c,r[0]),n(e,S),n(e,o),n(o,s),n(e,_),g&&g.m(e,null),N||(C=[O(c,"input",r[4]),O(c,"keydown",r[5]),O(o,"click",r[2]),O(e,"submit",r[2])],N=!0)},p(y,[I]){I&1&&c.value!==y[0]&&G(c,y[0]),y[1]?g||(g=se(),g.c(),g.m(e,null)):g&&(g.d(1),g=null)},i:H,o:H,d(y){y&&u(t),g&&g.d(),N=!1,ne(C)}}}function ke(r,t,e){let{bible:l}=t,i="",p=!1;function b(h){h.preventDefault();const[E,c]=i.split(":"),[S,o]=E.split(" ");e(3,l.book=S,l),e(3,l.chapter=o,l);const s=l.book?`/Bible/${l.translation}/${l.book}/${l.chapter?o:1}`:!1;if(s){const _=c?"?verse="+c:"";oe(`${s}${_}`),e(0,i="")}else e(1,p=!0)}function f(){i=this.value,e(0,i)}const a=()=>e(1,p=!1);return r.$$set=h=>{"bible"in h&&e(3,l=h.bible)},[i,p,b,l,f,a]}class Ee extends F{constructor(t){super();R(this,t,ke,ge,j,{bible:3})}}function ae(r){let t,e,l,i,p,b,f,a,h,E,c,S,o,s,_,N,C,g,y,I;return c=new ve({props:{translation:r[0].translation}}),s=new Ee({props:{bible:r[0]}}),{c(){t=m("nav"),e=m("header"),l=m("h1"),i=$("The Bible"),p=T(),b=m("p"),f=$("Catholic Public Domain Version (CPDV)"),a=T(),h=m("ul"),E=m("li"),X(c.$$.fragment),S=T(),o=m("li"),X(s.$$.fragment),_=T(),N=m("li"),C=m("a"),g=$("Home"),this.h()},l(k){t=d(k,"NAV",{class:!0});var L=v(t);e=d(L,"HEADER",{});var w=v(e);l=d(w,"H1",{});var D=v(l);i=q(D,"The Bible"),D.forEach(u),p=B(w),b=d(w,"P",{});var M=v(b);f=q(M,"Catholic Public Domain Version (CPDV)"),M.forEach(u),w.forEach(u),a=B(L),h=d(L,"UL",{class:!0});var A=v(h);E=d(A,"LI",{});var J=v(E);Y(c.$$.fragment,J),J.forEach(u),S=B(A),o=d(A,"LI",{});var K=v(o);Y(s.$$.fragment,K),K.forEach(u),_=B(A),N=d(A,"LI",{});var z=v(N);C=d(z,"A",{href:!0,class:!0});var W=v(C);g=q(W,"Home"),W.forEach(u),z.forEach(u),A.forEach(u),L.forEach(u),this.h()},h(){P(C,"href","/Bible"),P(C,"class","svelte-1cr9qti"),P(h,"class","svelte-1cr9qti"),P(t,"class","svelte-1cr9qti")},m(k,L){V(k,t,L),n(t,e),n(e,l),n(l,i),n(e,p),n(e,b),n(b,f),n(t,a),n(t,h),n(h,E),Z(c,E,null),n(h,S),n(h,o),Z(s,o,null),n(h,_),n(h,N),n(N,C),n(C,g),I=!0},p(k,L){const w={};L&1&&(w.translation=k[0].translation),c.$set(w);const D={};L&1&&(D.bible=k[0]),s.$set(D)},i(k){I||(Q(c.$$.fragment,k),Q(s.$$.fragment,k),re(()=>{y||(y=x(t,le,{},!0)),y.run(1)}),I=!0)},o(k){U(c.$$.fragment,k),U(s.$$.fragment,k),y||(y=x(t,le,{},!1)),y.run(0),I=!1},d(k){k&&u(t),ee(c),ee(s),k&&y&&y.end()}}}function ye(r){let t;return{c(){t=$("Menu")},l(e){t=q(e,"Menu")},m(e,l){V(e,t,l)},d(e){e&&u(t)}}}function Ne(r){let t;return{c(){t=$("Close")},l(e){t=q(e,"Close")},m(e,l){V(e,t,l)},d(e){e&&u(t)}}}function Se(r){let t,e,l,i,p,b,f,a=r[1]&&ae(r);function h(s,_){return s[1]?Ne:ye}let E=h(r),c=E(r);const S=r[3].default,o=ie(S,r,r[2],null);return{c(){a&&a.c(),t=T(),e=m("main"),l=m("button"),c.c(),i=T(),o&&o.c(),this.h()},l(s){a&&a.l(s),t=B(s),e=d(s,"MAIN",{});var _=v(e);l=d(_,"BUTTON",{class:!0});var N=v(l);c.l(N),N.forEach(u),i=B(_),o&&o.l(_),_.forEach(u),this.h()},h(){P(l,"class","menu svelte-1cr9qti"),te(l,"show",r[1])},m(s,_){a&&a.m(s,_),V(s,t,_),V(s,e,_),n(e,l),c.m(l,null),n(e,i),o&&o.m(e,null),p=!0,b||(f=O(l,"click",r[4]),b=!0)},p(s,[_]){s[1]?a?(a.p(s,_),_&2&&Q(a,1)):(a=ae(s),a.c(),Q(a,1),a.m(t.parentNode,t)):a&&(he(),U(a,1,1,()=>{a=null}),ce()),E!==(E=h(s))&&(c.d(1),c=E(s),c&&(c.c(),c.m(l,null))),_&2&&te(l,"show",s[1]),o&&o.p&&(!p||_&4)&&ue(o,S,s,s[2],p?_e(S,s[2],_,null):fe(s[2]),null)},i(s){p||(Q(a),Q(o,s),p=!0)},o(s){U(a),U(o,s),p=!1},d(s){a&&a.d(s),s&&u(t),s&&u(e),c.d(),o&&o.d(s),b=!1,f()}}}async function Ie({fetch:r,params:t}){const e=t.translation?t.translation:"CPDV";return{props:{bible:await pe(r,{translation:e})}}}function Le(r,t,e){let{$$slots:l={},$$scope:i}=t,{bible:p}=t,b=!1;be(()=>e(1,b=!1));const f=()=>e(1,b=!b);return r.$$set=a=>{"bible"in a&&e(0,p=a.bible),"$$scope"in a&&e(2,i=a.$$scope)},[p,b,i,l,f]}class $e extends F{constructor(t){super();R(this,t,Le,Se,j,{bible:0})}}export{$e as default,Ie as load};