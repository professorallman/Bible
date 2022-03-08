import{S as H,i as M,s as j,e as b,t as T,k as L,c as g,a as E,h as B,d as f,m as P,b as S,g as q,F as n,G as U,H as V,I as G,J as ae,w as X,x as Y,y as Z,q as D,K as re,o as w,L as x,B as ee,M as oe,N as te,p as ie,O as ce,P as ue,Q as fe,R as se,n as _e}from"../chunks/vendor-81807408.js";import{g as ne,a as he}from"../chunks/navigation-13fd7038.js";import"../chunks/singletons-d1fb5791.js";function pe(i){let t,e,a,c,u,o,v,s,m,p,_;return{c(){t=b("section"),e=b("label"),a=b("span"),c=T("Search:"),u=L(),o=b("input"),v=L(),s=b("button"),m=T("Go"),this.h()},l(h){t=g(h,"SECTION",{class:!0});var r=E(t);e=g(r,"LABEL",{"aria-label":!0,class:!0});var l=E(e);a=g(l,"SPAN",{});var d=E(a);c=B(d,"Search:"),d.forEach(f),u=P(l),o=g(l,"INPUT",{}),l.forEach(f),v=P(r),s=g(r,"BUTTON",{class:!0});var k=E(s);m=B(k,"Go"),k.forEach(f),r.forEach(f),this.h()},h(){S(e,"aria-label","Search"),S(e,"class","svelte-1g7e7cj"),S(s,"class","svelte-1g7e7cj"),S(t,"class","svelte-1g7e7cj")},m(h,r){q(h,t,r),n(t,e),n(e,a),n(a,c),n(e,u),n(e,o),U(o,i[0]),n(t,v),n(t,s),n(s,m),p||(_=[V(o,"input",i[4]),V(o,"keypress",i[2]),V(s,"click",i[1])],p=!0)},p(h,[r]){r&1&&o.value!==h[0]&&U(o,h[0])},i:G,o:G,d(h){h&&f(t),p=!1,ae(_)}}}function me(i,t,e){let{translation:a="CPDV"}=t,c="";function u(){ne(`/Bible/search/${a}?q=${c}`),e(0,c="")}function o(s){s.code==="Enter"&&u()}function v(){c=this.value,e(0,c)}return i.$$set=s=>{"translation"in s&&e(3,a=s.translation)},[c,u,o,a,v]}class de extends H{constructor(t){super();M(this,t,me,pe,j,{translation:3})}}function ve(i){let t,e,a,c,u,o,v,s,m,p,_,h,r,l,d;return{c(){t=b("section"),e=b("label"),a=b("span"),c=T("Quick Verse :"),u=L(),o=b("p"),v=b("small"),s=T("Examples: g, genesis, genesis 1, genesis 1:1, genesis 1:1-5"),m=L(),p=b("input"),_=L(),h=b("button"),r=T("Go"),this.h()},l(k){t=g(k,"SECTION",{class:!0});var $=E(t);e=g($,"LABEL",{"aria-label":!0,class:!0});var C=E(e);a=g(C,"SPAN",{});var N=E(a);c=B(N,"Quick Verse :"),N.forEach(f),u=P(C),o=g(C,"P",{class:!0});var I=E(o);v=g(I,"SMALL",{});var y=E(v);s=B(y,"Examples: g, genesis, genesis 1, genesis 1:1, genesis 1:1-5"),y.forEach(f),I.forEach(f),m=P(C),p=g(C,"INPUT",{}),C.forEach(f),_=P($),h=g($,"BUTTON",{class:!0});var A=E(h);r=B(A,"Go"),A.forEach(f),$.forEach(f),this.h()},h(){S(o,"class","svelte-4a4pp0"),S(e,"aria-label","Search"),S(e,"class","svelte-4a4pp0"),S(h,"class","svelte-4a4pp0"),S(t,"class","svelte-4a4pp0")},m(k,$){q(k,t,$),n(t,e),n(e,a),n(a,c),n(e,u),n(e,o),n(o,v),n(v,s),n(e,m),n(e,p),U(p,i[0]),n(t,_),n(t,h),n(h,r),l||(d=[V(p,"input",i[4]),V(p,"keypress",i[2]),V(h,"click",i[1])],l=!0)},p(k,[$]){$&1&&p.value!==k[0]&&U(p,k[0])},i:G,o:G,d(k){k&&f(t),l=!1,ae(d)}}}function be(i,t,e){let{translation:a="CPDV"}=t,c="";function u(){const[s,m]=c.split(":"),[p,_]=s.split(" "),h=m?"?verse="+m:"";ne(`/Bible/${a}/${p}/${_||1}${h}`),e(0,c="")}function o(s){s.code==="Enter"&&u()}function v(){c=this.value,e(0,c)}return i.$$set=s=>{"translation"in s&&e(3,a=s.translation)},[c,u,o,a,v]}class ge extends H{constructor(t){super();M(this,t,be,ve,j,{translation:3})}}function le(i){let t,e,a,c,u,o,v,s,m,p,_,h,r,l,d,k,$,C,N,I;return _=new de({}),l=new ge({}),{c(){t=b("nav"),e=b("header"),a=b("h1"),c=T("The Bible"),u=L(),o=b("p"),v=T("Catholic Public Domain Version (CPDV)"),s=L(),m=b("ul"),p=b("li"),X(_.$$.fragment),h=L(),r=b("li"),X(l.$$.fragment),d=L(),k=b("li"),$=b("a"),C=T("Home"),this.h()},l(y){t=g(y,"NAV",{class:!0});var A=E(t);e=g(A,"HEADER",{});var O=E(e);a=g(O,"H1",{});var R=E(a);c=B(R,"The Bible"),R.forEach(f),u=P(O),o=g(O,"P",{});var F=E(o);v=B(F,"Catholic Public Domain Version (CPDV)"),F.forEach(f),O.forEach(f),s=P(A),m=g(A,"UL",{class:!0});var Q=E(m);p=g(Q,"LI",{});var J=E(p);Y(_.$$.fragment,J),J.forEach(f),h=P(Q),r=g(Q,"LI",{});var K=E(r);Y(l.$$.fragment,K),K.forEach(f),d=P(Q),k=g(Q,"LI",{});var z=E(k);$=g(z,"A",{href:!0,class:!0});var W=E($);C=B(W,"Home"),W.forEach(f),z.forEach(f),Q.forEach(f),A.forEach(f),this.h()},h(){S($,"href","/Bible"),S($,"class","svelte-1cr9qti"),S(m,"class","svelte-1cr9qti"),S(t,"class","svelte-1cr9qti")},m(y,A){q(y,t,A),n(t,e),n(e,a),n(a,c),n(e,u),n(e,o),n(o,v),n(t,s),n(t,m),n(m,p),Z(_,p,null),n(m,h),n(m,r),Z(l,r,null),n(m,d),n(m,k),n(k,$),n($,C),I=!0},i(y){I||(D(_.$$.fragment,y),D(l.$$.fragment,y),re(()=>{N||(N=x(t,se,{},!0)),N.run(1)}),I=!0)},o(y){w(_.$$.fragment,y),w(l.$$.fragment,y),N||(N=x(t,se,{},!1)),N.run(0),I=!1},d(y){y&&f(t),ee(_),ee(l),y&&N&&N.end()}}}function Ee(i){let t;return{c(){t=T("Menu")},l(e){t=B(e,"Menu")},m(e,a){q(e,t,a)},d(e){e&&f(t)}}}function ke(i){let t;return{c(){t=T("Close")},l(e){t=B(e,"Close")},m(e,a){q(e,t,a)},d(e){e&&f(t)}}}function $e(i){let t,e,a,c,u,o,v,s=i[0]&&le();function m(l,d){return l[0]?ke:Ee}let p=m(i),_=p(i);const h=i[2].default,r=oe(h,i,i[1],null);return{c(){s&&s.c(),t=L(),e=b("main"),a=b("button"),_.c(),c=L(),r&&r.c(),this.h()},l(l){s&&s.l(l),t=P(l),e=g(l,"MAIN",{});var d=E(e);a=g(d,"BUTTON",{class:!0});var k=E(a);_.l(k),k.forEach(f),c=P(d),r&&r.l(d),d.forEach(f),this.h()},h(){S(a,"class","menu svelte-1cr9qti"),te(a,"show",i[0])},m(l,d){s&&s.m(l,d),q(l,t,d),q(l,e,d),n(e,a),_.m(a,null),n(e,c),r&&r.m(e,null),u=!0,o||(v=V(a,"click",i[3]),o=!0)},p(l,[d]){l[0]?s?d&1&&D(s,1):(s=le(),s.c(),D(s,1),s.m(t.parentNode,t)):s&&(_e(),w(s,1,1,()=>{s=null}),ie()),p!==(p=m(l))&&(_.d(1),_=p(l),_&&(_.c(),_.m(a,null))),d&1&&te(a,"show",l[0]),r&&r.p&&(!u||d&2)&&ce(r,h,l,l[1],u?fe(h,l[1],d,null):ue(l[1]),null)},i(l){u||(D(s),D(r,l),u=!0)},o(l){w(s),w(r,l),u=!1},d(l){s&&s.d(l),l&&f(t),l&&f(e),_.d(),r&&r.d(l),o=!1,v()}}}function ye(i,t,e){let{$$slots:a={},$$scope:c}=t,u=!1;he(()=>e(0,u=!1));const o=()=>e(0,u=!u);return i.$$set=v=>{"$$scope"in v&&e(1,c=v.$$scope)},[u,c,a,o]}class Pe extends H{constructor(t){super();M(this,t,ye,$e,j,{})}}export{Pe as default};
