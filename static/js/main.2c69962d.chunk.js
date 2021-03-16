(this["webpackJsonphtn-challenge"]=this["webpackJsonphtn-challenge"]||[]).push([[0],{36:function(n,e,t){},38:function(n,e,t){},57:function(n,e,t){"use strict";t.r(e);var r,i,c,a,o,l,s,d,j,u,b,h,p,f,O,x,g,m,v,w,C,y,k,_,L,S,E,R=t(1),z=t.n(R),q=t(7),D=t.n(q),H=(t(36),t(5)),P=t.n(H),B=t(8),I=t(4),M=(t(38),t(2)),A=t(14),F=Object(A.gql)(r||(r=Object(M.a)(["\n  {\n    events {\n      id\n      name\n      event_type\n      permission\n      start_time\n      end_time\n      description\n      speakers {\n        name\n        profile_pic\n      }\n      public_url\n      private_url\n      related_events\n    }\n  }\n"]))),T=function(){var n=Object(B.a)(P.a.mark((function n(){var e;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(A.request)("https://api.hackthenorth.com/v3/graphql",F);case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=function(n,e){return n.start_time>e.start_time?1:n.start_time<e.start_time?-1:0},J=function(n){return"public"===n.permission},N=function(n,e){return n.forEach((function(n){var t=e?n.private_url:n.public_url;delete n.public_url,delete n.private_url,n.url=t})),n},V=function(n){var e={};return n.forEach((function(n){var t=new Date(n.start_time).toLocaleDateString();e.hasOwnProperty(t)?e[t].push(n):e[t]=[n]})),e},W=t(6),G=t(3),K=t(26),Q=t.n(K),U=t(0),X={workshop:"Workshop \ud83d\udea7",activity:"Activity \u270f\ufe0f",tech_talk:"Tech Talk \ud83d\udce2"},Y=G.a.h1(i||(i=Object(M.a)(["\n  font-size: 26px;\n"]))),$=G.a.h4(c||(c=Object(M.a)(["\n  font-weight: normal;\n  margin: 0.5rem 0;\n"]))),nn=G.a.a(a||(a=Object(M.a)(["\n  text-decoration: none;\n  color: white;\n  margin: 0;\n  padding: 0;\n"]))),en=G.a.div(o||(o=Object(M.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),tn=G.a.div(l||(l=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n"]))),rn=function(n){var e=function(n){return new Date(n).toLocaleTimeString()},t=function(n){n.stopPropagation()},r=function(n,e){return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)($,{children:[Object(U.jsx)("strong",{children:n}),e]})})};return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Y,{children:n.name}),Object(U.jsxs)(en,{children:[Object(U.jsxs)(tn,{children:[r("Start: ",e(n.start_time)),r("End: ",e(n.end_time)),r("Type: ",X[n.event_type]),Object(U.jsx)(nn,{href:n.url,onClick:t,children:r("Link to event \ud83d\udd17",null)})]}),Object(U.jsxs)(tn,{children:[r("Related Events:",null),n.getRelatedEvents(n.related_events).map((function(n){var e=n.name,r=n.url;return Object(U.jsxs)($,{style:{margin:0},children:[e,Object(U.jsx)("a",{href:r,onClick:t,children:" \ud83d\udd17"})]},e)}))]})]})]})},cn=t.p+"static/media/user.9370fc40.png",an=G.a.img(s||(s=Object(M.a)(["\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 4px solid #efaba0;\n  src: ",";\n  z-index: 2000;\n"])),(function(n){return n.src})),on=G.a.div(d||(d=Object(M.a)(["\n  display: flex;\n  height: 80px;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n"]))),ln=G.a.h4(j||(j=Object(M.a)(["\n  color: white;\n  margin: 0;\n"]))),sn=function(n){var e=n.name,t=n.profile_pic||cn;return Object(U.jsxs)(on,{children:[Object(U.jsx)(an,{src:t}),Object(U.jsx)(ln,{children:e})]})},dn=G.a.div(u||(u=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),jn=G.a.div(b||(b=Object(M.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  padding-top: 15px;\n"]))),un=G.a.div(h||(h=Object(M.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 100%;\n  padding-left: 15px;\n"]))),bn=G.a.h4(p||(p=Object(M.a)(["\n  font-weight: normal;\n  margin: 0.5rem 0;\n"]))),hn=function(n){return Object(U.jsxs)(dn,{children:[Object(U.jsx)(bn,{children:Object(U.jsx)("strong",{children:"Description: "})}),Object(U.jsx)(bn,{children:n.description}),"tech_talk"===n.event_type&&Object(U.jsxs)(jn,{children:[Object(U.jsx)("strong",{children:"Speakers: "}),Object(U.jsx)(un,{children:n.speakers.map((function(n){var e=n.profile_pic,t=n.name;return Object(U.jsx)(sn,{profile_pic:e,name:t},t)}))})]})]})},pn=t(16),fn=G.a.div(f||(f=Object(M.a)(["\n  min-height: ",";\n  padding: 25px;\n  background-color: #183249;\n  border-radius: 30px;\n"])),(function(n){return"".concat(n.minHeight,"px")})),On=function(n){var e=Object(R.useState)(!1),t=Object(I.a)(e,2),r=t[0],i=t[1],c=Object(R.useState)(0),a=Object(I.a)(c,2),o=a[0],l=a[1],s=Object(R.useState)(0),d=Object(I.a)(s,2),j=d[0],u=d[1],b=Object(R.useRef)(),h=Object(R.useRef)(),p=Object(pn.a)({targetRef:b}).height,f=Object(pn.a)({targetRef:h}).height;Object(R.useEffect)((function(){p&&f&&(p>f?o>j?l(0):u(p):f>p&&(j>o?u(0):l(f)))}),[p,f]);var O=function(n){n.preventDefault(),i(!r)};return Object(U.jsxs)(Q.a,{isFlipped:r,flipDirection:"vertical",children:[Object(U.jsx)(fn,{onClick:O,ref:b,minHeight:o,children:Object(U.jsx)(rn,Object(W.a)({},n))}),Object(U.jsx)(fn,{onClick:O,ref:h,minHeight:j,children:Object(U.jsx)(hn,Object(W.a)({},n))})]})},xn=G.a.div(O||(O=Object(M.a)(["\n  width: 90%;\n  margin: 0 auto;\n"]))),gn=G.a.div(x||(x=Object(M.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n\n  @media(max-width: 700px) {\n    flex-wrap: wrap;\n  }\n"]))),mn=G.a.div(g||(g=Object(M.a)(["\n  width: 0;\n  flex: 1 1 0;\n  padding: 0 20px;\n\n  @media (max-width: 700px) {\n    flex: 0 0 100%;\n    padding: 0;\n  }\n"]))),vn=G.a.div(m||(m=Object(M.a)(["\n  padding: 20px 0;\n"]))),wn=G.a.h1(v||(v=Object(M.a)(["\n  color: #183249;\n  font-size: 40px;\n"]))),Cn=G.a.h1(w||(w=Object(M.a)(["\n  color: #183249;\n  font-size: 50px;\n  text-decoration: underline;\n  padding-left: 20px;\n"]))),yn=function(n){var e=n.events,t=function(n){var t=[];return Object.entries(e).forEach((function(e){var r=Object(I.a)(e,2);r[0];r[1].forEach((function(e){var r=e.id;n.includes(r)&&t.push(e)}))})),t},r=function(n){return n.map((function(n){return Object(U.jsx)(vn,{children:Object(U.jsx)(On,Object(W.a)(Object(W.a)({},n),{},{getRelatedEvents:t}))},n.id)}))};return Object(U.jsxs)(xn,{children:[Object(U.jsx)(Cn,{children:"Event Schedule"}),Object(U.jsx)(gn,{children:Object.entries(e).map((function(n){var e=Object(I.a)(n,2),t=e[0],i=e[1];return Object(U.jsxs)(mn,{children:[Object(U.jsx)(wn,{children:t}),r(i)]},t)}))})]})},kn=G.a.form(C||(C=Object(M.a)(["\n  height: 380px;\n  width: 500px;\n  background-color: #183249;\n  padding: 0;\n  outline: none;\n  border-radius: 30px;\n"]))),_n=G.a.input(y||(y=Object(M.a)(["\n  height: 24px;\n  padding: 5px 10px;\n  outline: none;\n  border: none;\n  border-radius: 12px;\n"]))),Ln=G.a.button(k||(k=Object(M.a)(["\n  height: 26px;\n  width: 150px;\n  background-color: #efaba0;\n  border-radius: 13px;\n  color: #183249;\n  align-self: center;\n  border: none;\n  outline: none;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),Sn=G.a.div(_||(_=Object(M.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin: 30px;\n"]))),En=G.a.div(L||(L=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]))),Rn=G.a.h1(S||(S=Object(M.a)(["\n  color: white;\n  font-size: 20px;\n"]))),zn=G.a.h1(E||(E=Object(M.a)(["\n  color: white;\n  font-size: 38px;\n"]))),qn=function(n){var e=Object(R.useState)(""),t=Object(I.a)(e,2),r=t[0],i=t[1],c=Object(R.useState)(""),a=Object(I.a)(c,2),o=a[0],l=a[1];return Object(U.jsx)(kn,{onSubmit:function(e){e.preventDefault(),"htn2021@gmail.com"===r&&"helloworld"===o?n.onAuthenticate():(alert("Incorrect email or password!"),l(""))},children:Object(U.jsxs)(Sn,{children:[Object(U.jsx)(zn,{children:"Log in to Hack the North!"}),Object(U.jsxs)(En,{children:[Object(U.jsx)(Rn,{children:"Email:"}),Object(U.jsx)(_n,{type:"email",value:r,onChange:function(n){i(n.target.value)},required:!0}),Object(U.jsx)(Rn,{children:"Password: "}),Object(U.jsx)(_n,{type:"password",value:o,onChange:function(n){l(n.target.value)},required:!0})]}),Object(U.jsx)(Ln,{children:"Submit"})]})})};function Dn(){return(Dn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Hn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var Pn=R.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32.0666 28.2283L38.2783 31.1341C38.9122 31.3868 39.6724 31.2605 40.0531 30.8815C40.1757 30.7592 40.3111 30.6372 40.4517 30.5109C40.7535 30.239 41.0658 29.9568 41.3207 29.618C41.8279 29.1126 41.9546 28.3546 41.5741 27.8491L38.6584 21.6585C39.6724 20.0161 40.4332 18.121 40.9406 16.2259L47.5328 13.9517C48.1663 13.6991 48.5468 13.1937 48.6735 12.4356V11.5513V10.6669C48.6735 10.0352 48.1663 9.40342 47.5328 9.15076L41.0673 6.75029C40.5599 4.8552 39.7997 2.96008 38.7855 1.31766L39.4061 0C51.9082 3.77797 60.9515 15.2974 60.9515 29.0027C60.9515 34.2801 59.5982 39.2334 57.2218 43.5453C57.0698 43.1898 56.5865 42.9558 56.2204 42.9558L50.9963 43.2107C50.1044 42.0642 49.0852 41.045 47.9385 40.1534L48.1933 34.9304C48.1933 34.5481 47.9385 34.0387 47.5562 33.9112C47.0466 33.6565 46.6641 33.529 46.1547 33.4018C45.7722 33.2743 45.2628 33.4018 45.0079 33.6565L41.5673 37.4782C40.1658 37.2233 38.6368 37.2233 37.2353 37.4782L33.795 33.6565C33.5403 33.2743 33.0307 33.1469 32.6484 33.4018C32.5365 33.4576 32.4247 33.4889 32.3237 33.5173C32.1948 33.5537 32.0828 33.585 32.0112 33.6565C31.7565 33.7838 31.5016 33.9112 31.374 33.9112C30.992 34.0387 30.7369 34.5481 30.7369 34.9304L30.992 40.1534C29.8448 41.045 28.6982 42.0642 27.9339 43.2107L22.7098 42.9558C22.3275 42.9558 21.8179 43.2107 21.6902 43.5927C21.4355 44.1023 21.3083 44.4845 21.1806 44.9941C21.053 45.3763 21.1807 45.8857 21.4355 46.1404L25.2579 49.58C25.0032 50.9814 25.0032 52.5101 25.2579 53.9113L21.4355 57.3508C21.2529 57.4723 21.1284 57.652 21.0761 57.8479C8.81797 53.8984 0 42.4343 0 29.0027C0 24.3801 1.0385 20.0061 2.89318 16.0939C3.41626 17.9946 4.17697 19.8898 5.19113 21.5321L2.14869 27.8491C1.89526 28.481 2.02198 29.239 2.40212 29.618C2.52476 29.7402 2.64742 29.8755 2.77412 30.0154C3.04107 30.3097 3.32653 30.6245 3.67013 30.8815C4.17697 31.3868 4.9377 31.5131 5.44454 31.1341L11.6566 28.2283C13.3047 29.239 15.2059 29.997 17.1074 30.5025L19.3896 37.0721C19.643 37.7038 20.1504 38.0828 20.9106 38.2091H21.7981H22.6854C23.3195 38.2091 23.953 37.7038 24.207 37.0721L26.4886 30.5025C28.6437 29.997 30.4185 29.239 32.0666 28.2283ZM39.2479 57.521C42.5171 57.521 45.1678 54.907 45.1678 51.6826C45.1678 48.4582 42.5171 45.8444 39.2479 45.8444C35.9787 45.8444 33.328 48.4582 33.328 51.6826C33.328 54.907 35.9787 57.521 39.2479 57.521ZM30.2562 11.4882C30.2562 16.0766 26.5262 19.7964 21.9249 19.7964C17.3235 19.7964 13.5934 16.0766 13.5934 11.4882C13.5934 6.89965 17.3235 3.17994 21.9249 3.17994C26.5262 3.17994 30.2562 6.89965 30.2562 11.4882Z"});function Bn(n,e){var t=n.title,r=n.titleId,i=Hn(n,["title","titleId"]);return R.createElement("svg",Dn({width:61,height:58,viewBox:"0 0 61 58",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?R.createElement("title",{id:r},t):null,Pn)}var In,Mn,An,Fn,Tn,Zn,Jn,Nn=R.forwardRef(Bn),Vn=(t.p,Object(G.b)(In||(In=Object(M.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"])))),Wn=G.a.div(Mn||(Mn=Object(M.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  height: 60px;\n  padding-left: 5%;\n  padding-right: 5%;\n  position: sticky;\n  top: 0;\n  left: 0;\n  background-color: #183249;\n  z-index: 1000;\n"]))),Gn=Object(G.a)(Nn)(An||(An=Object(M.a)(["\n  height: 40px;\n  fill: white;\n  margin-left: 10px;\n  margin-right: 10px;\n  animation: "," infinite 10s linear;\n"])),Vn),Kn=G.a.button(Fn||(Fn=Object(M.a)(["\n  display: block;\n  font-size: 15px;\n  color: white;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),Qn=G.a.h1(Tn||(Tn=Object(M.a)(["\n  color: white;\n  font-size: 15px;\n"]))),Un=G.a.div(Zn||(Zn=Object(M.a)(["\n  display: flex;\n  margin-left: auto;\n  margin-right: 15px;\n"]))),Xn=G.a.div(Jn||(Jn=Object(M.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 180px;\n"]))),Yn=function(n){var e=n.authState;return Object(U.jsxs)(Wn,{children:[Object(U.jsx)(Gn,{}),Object(U.jsx)(Qn,{children:"Hack the North 2021"}),Object(U.jsx)(Un,{children:e?Object(U.jsxs)(Xn,{children:[Object(U.jsx)(Qn,{children:"Welcome user!"}),Object(U.jsx)(Kn,{onClick:n.authBtn,children:"Logout"})]}):Object(U.jsx)(Kn,{onClick:n.authBtn,children:"Log in"})})]})},$n=t(17),ne=t.n($n);ne.a.setAppElement("#modal");var ee,te,re={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:0,outline:"none",border:"none",borderRadius:0,backgroundColor:"transparent"},overlay:{backgroundColor:"#1832496e"}},ie=function(n){var e=n.isOpen,t=n.onRequestClose;return Object(U.jsx)(ne.a,{isOpen:e,onRequestClose:t,style:re,children:n.children})},ce=G.a.div(ee||(ee=Object(M.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 60px;\n  width: 100%;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  background-color: #183249;\n  z-index: 1000;\n"]))),ae=G.a.h4(te||(te=Object(M.a)(["\n  font-size: 14px;\n  font-weight: normal;\n"]))),oe=function(){return Object(U.jsx)(ce,{children:Object(U.jsx)(ae,{children:"Made with \u2764\ufe0f and \u2615 by Lucas \ud83d\udc68\u200d\ud83d\udcbb"})})},le=function(){var n=Object(R.useState)(!1),e=Object(I.a)(n,2),t=e[0],r=e[1],i=Object(R.useState)([]),c=Object(I.a)(i,2),a=c[0],o=c[1],l=Object(R.useState)(!1),s=Object(I.a)(l,2),d=s[0],j=s[1];Object(R.useEffect)((function(){(function(){var n=Object(B.a)(P.a.mark((function n(){var e,r,i;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T();case 2:e=n.sent,r=e.events,t||(r=r.filter(J)),(r=N(r,t)).sort(Z),i=V(r),o(i);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[t]);return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(ie,{isOpen:d,onRequestClose:function(){j(!1)},children:Object(U.jsx)(qn,{onAuthenticate:function(){j(!1),r(!0)}})}),Object(U.jsx)(Yn,{authBtn:function(){t?r(!1):j(!0)},authState:t}),Object(U.jsx)(yn,{events:a}),Object(U.jsx)(oe,{})]})};D.a.render(Object(U.jsx)(z.a.StrictMode,{children:Object(U.jsx)(le,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.2c69962d.chunk.js.map