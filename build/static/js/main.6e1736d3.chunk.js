(this["webpackJsonpslack-clone"]=this["webpackJsonpslack-clone"]||[]).push([[0],{117:function(n,e,t){"use strict";t.r(e);var a,i,c,o,r,s=t(2),l=t.n(s),d=t(32),j=t.n(d),p=(t(89),t(7)),b=t(22),x=(t(90),t(82)),h=t(13),g=t(8),m=t(133),O=t(57),u=t.n(O),f=t(62),v=t.n(f),y=t(63),w=t.n(y),I=t(33),k=t(40),S=k.a.initializeApp({apiKey:"AIzaSyCK4lj9K8_OYjzBkwWhToUrSLC0b4CpHtA",authDomain:"slack-clone-4ad41.firebaseapp.com",projectId:"slack-clone-4ad41",storageBucket:"slack-clone-4ad41.appspot.com",messagingSenderId:"562674350268",appId:"1:562674350268:web:434644ad6e2c5d6b56f8b9",measurementId:"G-GEPQ43LJRS"}).firestore(),C=k.a.auth(),z=new k.a.auth.GoogleAuthProvider,M=t(3);var R,A,_=function(){var n=Object(I.a)(C),e=Object(b.a)(n,1)[0];return Object(M.jsxs)(N,{children:[Object(M.jsxs)(B,{children:[Object(M.jsx)(E,{onClick:function(){return C.signOut()},alt:null===e||void 0===e?void 0:e.displayName,src:null===e||void 0===e?void 0:e.photoURL}),Object(M.jsx)(u.a,{})]}),Object(M.jsxs)(D,{children:[Object(M.jsx)(v.a,{}),Object(M.jsx)("input",{placeholder:"Search"})]}),Object(M.jsx)(P,{children:Object(M.jsx)(w.a,{})})]})},D=g.a.div(a||(a=Object(p.a)(["\nflex: 0.4;\nopacity: 1;\nborder-radius: 6px;\nbackground-color: #421f44;\ntext-align: center;\ndisplay:flex;\npadding: 0 50px;\ncolor: gray;\nborder: 1px gray solid;\n\n>input{\n    background-color: transparent;\n    border: none;\n    text-align: 30vw;\n    outline: 0;\n    color: white;\n}\n\n"]))),N=g.a.div(i||(i=Object(p.a)(["\ndisplay: flex;\nposition: fixed; \nwidth: 100%;\nalign-items: center;\njustify-content: space-between;\npadding: 10px 0;\nbackground-color:var(--slack-color);\ncolor: white;\n"]))),B=g.a.div(c||(c=Object(p.a)(["\nflex: 0.3;\ndisplay: flex;\nalign-items: center;\nmargin-left: 20px;\n\n>.MuiSvgIcon-root{\n    margin-left: auto;\n    margin-right: 30px;\n}\n"]))),P=g.a.div(o||(o=Object(p.a)(["\nflex: 0.3;\ndisplay: flex;\nalign-items: flex-end;\n\n>.MuiSvgIcon-root{\n    margin-left: auto;\n    margin-right: 20px;\n}\n"]))),E=Object(g.a)(m.a)(r||(r=Object(p.a)(["\ncursor: pointer;\n:hover {\n    opacity:0.8;\n}"]))),F=t(44),G=t(67),L=t.n(G),T=t(68),U=t.n(T),W=t(38),J=t(50),K=Object(J.b)({name:"app",initialState:{roomId:null},reducers:{enterRoom:function(n,e){n.roomId=e.payload.roomId}}}),V=K.actions.enterRoom,H=function(n){return n.app.roomId},Q=K.reducer;var Y,$,q,X=function(n){var e=n.Icon,t=n.title,a=n.addChannelOption,i=n.id,c=Object(W.b)();return Object(M.jsxs)(Z,{onClick:a?function(){var n=prompt("Please enter the channel name");n&&S.collection("rooms").add({name:n})}:function(){i&&c(V({roomId:i}))},children:[e&&Object(M.jsx)(e,{fontsize:"small",style:{padding:10}}),e?Object(M.jsx)("h3",{children:t}):Object(M.jsxs)(nn,{children:[Object(M.jsx)("span",{children:"#"})," ",t]})]})},Z=g.a.div(R||(R=Object(p.a)(["\ndisplay: flex;\nfont-size: 12px;\nalign-items: center;\npadding-left: 2px;\ncursor: pointer;\n\n:hover {\n    opacity: 0.9;\n    background-color: #340e36;\n}\n\n> h3 {\n    font-weight: 500;\n}\n\n> h3 > span{\n    padding: 15px;   \n}\n\n"]))),nn=g.a.h3(A||(A=Object(p.a)(["\npadding: 10px 0;\nfont-weight: 300;\n\n"]))),en=t(69),tn=t.n(en),an=t(70),cn=t.n(an),on=t(71),rn=t.n(on),sn=t(72),ln=t.n(sn),dn=t(73),jn=t.n(dn),pn=t(74),bn=t.n(pn),xn=t(75),hn=t.n(xn),gn=t(76),mn=t.n(gn),On=t(77),un=t.n(On),fn=t(78),vn=t.n(fn);var yn,wn=function(){var n=Object(F.a)(S.collection("rooms")),e=Object(b.a)(n,3),t=e[0],a=(e[1],e[2],Object(I.a)(C));return Object(b.a)(a,1)[0],Object(M.jsxs)(In,{children:[Object(M.jsxs)(kn,{children:[Object(M.jsxs)(Sn,{children:[Object(M.jsx)("h2",{children:"Archis HQ"}),Object(M.jsx)("h3",{children:Object(M.jsx)(L.a,{})})]}),Object(M.jsx)(U.a,{})]}),Object(M.jsx)(X,{Icon:tn.a,title:"Threads"}),Object(M.jsx)(X,{Icon:cn.a,title:"Mentions & reactions"}),Object(M.jsx)(X,{Icon:rn.a,title:"Saved items"}),Object(M.jsx)(X,{Icon:ln.a,title:"Channel browser"}),Object(M.jsx)(X,{Icon:jn.a,title:"People & user groups"}),Object(M.jsx)(X,{Icon:bn.a,title:"Apps"}),Object(M.jsx)(X,{Icon:hn.a,title:"File browser"}),Object(M.jsx)(X,{Icon:mn.a,title:"Show less"}),Object(M.jsx)("hr",{}),Object(M.jsx)(X,{Icon:un.a,title:"Channels"}),Object(M.jsx)("hr",{}),Object(M.jsx)(X,{Icon:vn.a,addChannelOption:!0,title:"Add Channel"}),null===t||void 0===t?void 0:t.docs.map((function(n){return Object(M.jsx)(X,{id:n.id,title:n.data().name},n.id)}))]})},In=g.a.div(Y||(Y=Object(p.a)(["\ncolor: white;\nbackground-color: var(--slack-color);\nflex:0.3;\nborder-top: 1px solid #49274b;\nmax-width: 260px;\nmargin-top: 60px;\n\n>hr{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border: 1px solid #49274b;\n}\n\n"]))),kn=g.a.div($||($=Object(p.a)(["\ndisplay: flex;\nborder-bottom: 1px solid #49274b;\npadding: 13px;\n\n>.MuiSvgIcon-root{\n    padding: 8px;\n    color: #49274b;\n    font-size: 18px;\n    background-color: white;\n    border-radius: 999px;\n\n}\n\n"]))),Sn=g.a.div(q||(q=Object(p.a)(["\nflex: 1;\n\n>h2{\n    font-size: 15px;\n    font-weight: 900;\n    margin-bottom: 5px;\n}\n\n>h3{\n    display: flex;\n    font-size: 13px;\n    font-weight: 400;\n    align-items: center;\n\n}\n\n>h3 >.MuiSvgIcon-root{\n    font-size: 14px;\n    margin-top: 1px;\n    margin-right: 2px;\n    color: green;\n}\n\n"]))),Cn=t(79),zn=t.n(Cn),Mn=t(80),Rn=t.n(Mn),An=t(132);var _n,Dn,Nn=function(n){var e=n.channelName,t=n.channelId,a=n.chatRef,i=Object(s.useState)(""),c=Object(b.a)(i,2),o=c[0],r=c[1],l=Object(I.a)(C),d=Object(b.a)(l,1)[0];return Object(M.jsx)(Bn,{children:Object(M.jsxs)("form",{children:[Object(M.jsx)("input",{value:o,onChange:function(n){return r(n.target.value)},placeholder:"Message #".concat(e)}),Object(M.jsx)(An.a,{hidden:!0,type:"submit",onClick:function(n){if(n.preventDefault(),!t)return!1;S.collection("rooms").doc(t).collection("messages").add({message:o,timestamp:k.a.firestore.FieldValue.serverTimestamp(),user:d.displayName,userImage:d.photoURL}),a.current.scrollIntoView({behavior:"smooth"}),r("")},children:"SEND"})]})})},Bn=g.a.div(yn||(yn=Object(p.a)(["\nborder-radius: 20px;\n\n>form {\n    position: relative;\n    display: flex;\n    justify-content: center;\n\n}\n\n> form > input {\n    position: fixed;\n    bottom: 30px;\n    width: 60%;\n    border: 1px solid gray;\n    padding: 20px;\n    outline: none;\n}\n\n> form > button{\n    display: none !important;\n}\n\n"])));var Pn,En,Fn,Gn,Ln,Tn,Un=function(n){var e=n.message,t=n.timestamp,a=n.user,i=n.userImage;return Object(M.jsxs)(Wn,{children:[Object(M.jsx)("img",{src:i,alt:""}),Object(M.jsxs)(Jn,{children:[Object(M.jsxs)("h4",{children:[a,"",Object(M.jsx)("span",{children:new Date(null===t||void 0===t?void 0:t.toDate()).toUTCString()})]}),Object(M.jsx)("p",{children:e})]})]})},Wn=g.a.div(_n||(_n=Object(p.a)(["\ndisplay:flex;\nalign-items:center;\npadding:20px;\n\n>img{\n    height:50px;\n    border-radius:8px;\n}\n\n"]))),Jn=g.a.div(Dn||(Dn=Object(p.a)(["\npadding-left:10px;\n\n>h4> span{\n    color:gray;\n    font-weight:300;\n    margin-left:4px;\n    font-size:10px;\n}\n\n"])));var Kn,Vn,Hn=function(){var n=Object(s.useRef)(null),e=Object(W.c)(H),t=Object(F.b)(e&&S.collection("rooms").doc(e)),a=Object(b.a)(t,1)[0],i=Object(F.a)(e&&S.collection("rooms").doc(e).collection("messages").orderBy("timestamp","asc")),c=Object(b.a)(i,2),o=c[0],r=c[1];return Object(s.useEffect)((function(){var e;null===n||void 0===n||null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[e,r]),Object(M.jsx)(Zn,{children:a&&o&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(Yn,{children:[Object(M.jsxs)(qn,{children:[Object(M.jsx)("h4",{children:Object(M.jsxs)("strong",{children:["#",null===a||void 0===a?void 0:a.data().name]})}),Object(M.jsx)(zn.a,{})]}),Object(M.jsx)(Xn,{children:Object(M.jsxs)("p",{children:[Object(M.jsx)(Rn.a,{})," details"]})})]}),Object(M.jsxs)($n,{children:[null===o||void 0===o?void 0:o.docs.map((function(n){var e=n.data(),t=e.message,a=e.timestamp,i=e.user,c=e.userImage;return Object(M.jsx)(Un,{message:t,timestamp:a,user:i,userImage:c},n.id)})),Object(M.jsx)(Qn,{ref:n})]}),Object(M.jsx)(Nn,{chatRef:n,channelName:null===a||void 0===a?void 0:a.data().name,channelId:e})]})})},Qn=g.a.div(Pn||(Pn=Object(p.a)(["\npadding-bottom: 200px;\n"]))),Yn=g.a.div(En||(En=Object(p.a)(["\ndisplay: flex;\njustify-content: space-between;\npadding: 20px;\nborder-bottom: 1px solid lightgray;\n\n"]))),$n=g.a.div(Fn||(Fn=Object(p.a)([""]))),qn=g.a.div(Gn||(Gn=Object(p.a)(["\n\ndisplay: flex;\nalign-items:center;\n\n>h4{\n    display: flex;\n    text-transform: lowercase;\n    margin-right: 10px;\n}\n\n>h4>.MuiSvgIcon-root{\n    margin-left: 10px;\n    font-size: 18px;\n}\n"]))),Xn=g.a.div(Ln||(Ln=Object(p.a)(["\n\n>p{\n    display:flex;\n    align-items:center;\n    font-size:14px;\n}\n\n>p > .MuiSvgIcon-root{\n    margin-right:5px !important;\n    font-size: 16px;\n}\n\n"]))),Zn=g.a.div(Tn||(Tn=Object(p.a)(["\nflex: 0.7;\nflex-grow: 1;\noverflow-y: scroll;\nmargin-top: 60px;\n\n"])));var ne,ee,te,ae=function(){return Object(M.jsx)(ie,{children:Object(M.jsxs)(ce,{children:[Object(M.jsx)("img",{src:"https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",alt:""}),Object(M.jsx)("h1",{children:"Sign in"}),Object(M.jsx)("p",{}),Object(M.jsx)(An.a,{onClick:function(n){n.preventDefault(),C.signInWithPopup(z).catch((function(n){return alert(n.message)}))},children:"Sign in with Google"})]})})},ie=g.a.div(Kn||(Kn=Object(p.a)(["\nbackground-color: #f8f8f8;\nheight: 100vh;\ndisplay: grid;\nplace-items: center;\n"]))),ce=g.a.div(Vn||(Vn=Object(p.a)(["\n\npadding: 100px;\ntext-align: center;\nbackground-color:white;\nborder-radius: 10px;\nbox-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n\n\n\n>img{\n    object-fit:contain;\n    height: 100px;\n    margin-bottom:40px;\n\n}\n\n>button{\n    margin-top: 50px;\n    text-transform: inherit !important;\n    background-color: #0a8d48 !important;\n    color: white;\n\n}\n"]))),oe=t(81),re=t.n(oe);var se=function(){var n=Object(I.a)(C),e=Object(b.a)(n,2),t=e[0];return e[1]?Object(M.jsx)(le,{children:Object(M.jsxs)(de,{children:[Object(M.jsx)("img",{src:"https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",alt:""}),Object(M.jsx)(re.a,{name:"ball-spin-fade-loader",color:"purple",fadeIn:"none"})]})}):Object(M.jsx)("div",{className:"app",children:Object(M.jsx)(x.a,{children:t?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(_,{}),Object(M.jsxs)(je,{children:[Object(M.jsx)(wn,{}),Object(M.jsx)(h.c,{children:Object(M.jsx)(h.a,{path:"/",exact:!0,children:Object(M.jsx)(Hn,{})})})]})]}):Object(M.jsx)(ae,{})})})},le=g.a.div(ne||(ne=Object(p.a)(["\ndisplay: grid;\nplace-items: center;\nheight: 100vh;\nwidth: 100%;\n\n"]))),de=g.a.div(ee||(ee=Object(p.a)(["\n\ntext-align: center;\npadding-bottom: 100px;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n\n>img{\n  height: 100px;\n  padding: 20px;\n  margin-bottom: 40px;\n}"]))),je=g.a.div(te||(te=Object(p.a)(["\ndisplay: flex;\nheight: 100vh;\n"]))),pe=Object(J.a)({reducer:{app:Q}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));j.a.render(Object(M.jsx)(l.a.StrictMode,{children:Object(M.jsx)(W.a,{store:pe,children:Object(M.jsx)(se,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},89:function(n,e,t){},90:function(n,e,t){}},[[117,1,2]]]);
//# sourceMappingURL=main.6e1736d3.chunk.js.map