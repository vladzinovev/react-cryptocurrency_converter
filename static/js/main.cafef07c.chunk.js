(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var r,a,c,i,o,l,u,m,s,p=n(0),f=n.n(p),d=n(72),b=n.n(d),g=(n(60),n(189)),O=n(185),y=n(13),h=n(198),j=n(193),I=n(197),C=n(196),E=n(192),S=n(194),v=n(195),w=n(19),P=n(33),x=n(38),D=n(39),k=n(22),N=(n(61),n(10)),U=(r=function(){function e(){Object(x.a)(this,e),Object(P.a)(this,"selectedInCoin",a,this),Object(P.a)(this,"selectedInPrice",c,this),Object(P.a)(this,"selectedOutCoin",i,this),Object(N.n)(this)}return Object(D.a)(e,[{key:"setSelectedInCoin",value:function(e){this.selectedInCoin={name:e}}},{key:"setSelectedInPrice",value:function(e){this.selectedInPrice={price:e}}},{key:"setSelectedOutCoin",value:function(e){this.selectedOutCoin={name:e}}},{key:"getSelectedInCoin",get:function(){return this.selectedInCoin}},{key:"getSelectedInPrice",get:function(){return this.selectedInPrice}},{key:"getSelectedOutCoin",get:function(){return this.selectedOutCoin}}]),e}(),a=Object(k.a)(r.prototype,"selectedInCoin",[N.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{name:"BTC"}}}),Object(k.a)(r.prototype,"getSelectedInCoin",[N.g],Object.getOwnPropertyDescriptor(r.prototype,"getSelectedInCoin"),r.prototype),Object(k.a)(r.prototype,"setSelectedInCoin",[N.f],Object.getOwnPropertyDescriptor(r.prototype,"setSelectedInCoin"),r.prototype),c=Object(k.a)(r.prototype,"selectedInPrice",[N.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{price:1}}}),Object(k.a)(r.prototype,"getSelectedInPrice",[N.g],Object.getOwnPropertyDescriptor(r.prototype,"getSelectedInPrice"),r.prototype),Object(k.a)(r.prototype,"setSelectedInPrice",[N.f],Object.getOwnPropertyDescriptor(r.prototype,"setSelectedInPrice"),r.prototype),i=Object(k.a)(r.prototype,"selectedOutCoin",[N.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{name:"BTC"}}}),Object(k.a)(r.prototype,"getSelectedOutCoin",[N.g],Object.getOwnPropertyDescriptor(r.prototype,"getSelectedOutCoin"),r.prototype),Object(k.a)(r.prototype,"setSelectedOutCoin",[N.f],Object.getOwnPropertyDescriptor(r.prototype,"setSelectedOutCoin"),r.prototype),r),W=n(75),z=n.n(W),R=(o=function(){function e(){Object(x.a)(this,e),Object(P.a)(this,"items",l,this),Object(P.a)(this,"diffObj",u,this),Object(P.a)(this,"setItems",m,this),Object(P.a)(this,"fetchCoins",s,this),Object(N.n)(this)}return Object(D.a)(e,[{key:"diffCurrencies",value:function(e,t){return e.filter(function(e,n){return e.price!==t[n].price})}},{key:"getItems",get:function(){return this.items}},{key:"getDiffObj",get:function(){return this.diffObj}}]),e}(),l=Object(k.a)(o.prototype,"items",[N.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),u=Object(k.a)(o.prototype,"diffObj",[N.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Object(k.a)(o.prototype,"getItems",[N.g],Object.getOwnPropertyDescriptor(o.prototype,"getItems"),o.prototype),Object(k.a)(o.prototype,"getDiffObj",[N.g],Object.getOwnPropertyDescriptor(o.prototype,"getDiffObj"),o.prototype),m=Object(k.a)(o.prototype,"setItems",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.diffObj=e.diffCurrencies(e.items,t).reduce(function(n,r){var a=t.find(function(e){return e.name===r.name}),c=e.items.find(function(e){return e.name===a.name}),i=a.price===c.price?"":a.price>c.price?"green":"red";return n[a.name]=i,n},{}),e.items=t}}}),s=Object(k.a)(o.prototype,"fetchCoins",[N.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){z.a.get("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD").then(function(t){var n=t.data.Data.map(function(e){return{name:e.CoinInfo.Name,fullName:e.CoinInfo.FullName,imageUrl:"https://www.cryptocompare.com/".concat(e.CoinInfo.ImageUrl),price:e.RAW.USD.PRICE.toFixed(3),volume24Hour:e.RAW.USD.VOLUME24HOUR.toFixed(0)}});e.setItems(n)})}}}),o),H=Object(p.createContext)({currenciesStore:new R,converterStore:new U}),A=function(){return Object(p.useContext)(H)},F={width:"18px",height:"18px"},B=Object(w.b)(function(){var e=A(),t=e.currenciesStore,n=e.converterStore,r=t.getItems,a=t.getDiffObj,c=Object(p.useState)(!0),i=Object(y.a)(c,2),o=i[0],l=i[1];Object(p.useEffect)(function(){o&&u();var e=setInterval(function(){t.fetchCoins()},15e3);return function(){clearInterval(e)}},[t.getItems]);var u=function(){t.fetchCoins(),l(!1)};return f.a.createElement(E.a,{component:h.a},f.a.createElement(j.a,{sx:{minWidth:650},"aria-label":"simple table"},f.a.createElement(S.a,null,f.a.createElement(v.a,null,f.a.createElement(C.a,null,"ICON"),f.a.createElement(C.a,{align:"center"},"Name"),f.a.createElement(C.a,{align:"center"},"FullName"),f.a.createElement(C.a,{align:"center"},"Price"),f.a.createElement(C.a,{align:"center"},"volume24Hour"))),f.a.createElement(I.a,null,r.length?r.map(function(e){return f.a.createElement(v.a,{className:"cursor",onClick:function(){return function(e){n.setSelectedInCoin(e.name),n.setSelectedInPrice(e.price)}(e)},key:e.name,hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}}},f.a.createElement(C.a,{component:"th",scope:"row"},f.a.createElement("img",{style:F,src:e.imageUrl,alt:"image"})),f.a.createElement(C.a,{align:"center"},e.name),f.a.createElement(C.a,{align:"center"},e.fullName),f.a.createElement(C.a,{className:a[e.name]&&"".concat(a[e.name]),align:"center"},"$ ",e.price),f.a.createElement(C.a,{align:"center"},"$ ",e.volume24Hour))}):"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")))}),T=n(77),J=n(4),M=n(183),$=n(184),L=n(182),V=n(186),q=n(187),G=Object(J.a)(h.a)(function(e){var t=e.theme;return Object(T.a)({backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff"},t.typography.body2,{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}),K={marginTop:"10px"},Q={minWidth:"65%",marginRight:"10px"},X={minWidth:"32%"},Y=Object(w.b)(function(){var e=A(),t=e.converterStore,n=e.currenciesStore,r=n.getItems.map(function(e){return e.name}),a=Object(p.useState)(0),c=Object(y.a)(a,2),i=c[0],o=c[1],l=function(){var e=n.getItems.find(function(e){return e.name==t.getSelectedOutCoin.name}),r=n.getItems.find(function(e){return e.name==t.getSelectedInCoin.name});return t.getSelectedInPrice.price*r.price/e.price};return f.a.createElement(G,null,f.a.createElement("div",null,f.a.createElement(V.a,{style:Q},f.a.createElement($.a,{fullWidth:!0,value:t.getSelectedInPrice.price,label:"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",onChange:function(e){t.setSelectedInPrice(e.target.value),o(l())},variant:"outlined"})),f.a.createElement(V.a,{style:X},f.a.createElement(q.a,{id:"demo-simple-select-autowidth-label"},"\u0412\u0430\u043b\u044e\u0442\u0430"),f.a.createElement(L.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t.getSelectedInCoin.name,onChange:function(e){t.setSelectedInCoin(e.target.value),o(l())},label:"\u0412\u0430\u043b\u044e\u0442\u0430"},r.map(function(e){return f.a.createElement(M.a,{value:e},e)})))),f.a.createElement("div",{style:K},f.a.createElement(V.a,{style:Q},f.a.createElement($.a,{fullWidth:!0,label:"\u0421\u0443\u043c\u043c\u0430 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c\u0430\u044f",value:i,variant:"outlined"})),f.a.createElement(V.a,{style:X},f.a.createElement(q.a,{id:"demo-simple-select-autowidth-label"},"\u0412\u0430\u043b\u044e\u0442\u0430"),f.a.createElement(L.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:function(e){t.setSelectedOutCoin(e.target.value),o(l())},value:t.getSelectedOutCoin.name,label:"\u0412\u0430\u043b\u044e\u0442\u0430"},r.map(function(e){return f.a.createElement(M.a,{value:e},e)})))))}),Z={padding:"10px"};var _=function(){return f.a.createElement(g.a,{style:Z,maxWidth:"lg"},f.a.createElement(O.a,{container:!0,spacing:2},f.a.createElement(O.a,{item:!0,xs:8},f.a.createElement(B,null)),f.a.createElement(O.a,{item:!0,xs:4},f.a.createElement(Y,null))))},ee=n(122);b.a.createRoot(document.getElementById("root")).render(f.a.createElement(f.a.StrictMode,null,f.a.createElement(ee.a,H,f.a.createElement(_,null))))},60:function(e,t,n){},78:function(e,t,n){e.exports=n(133)}},[[78,2,1]]]);
//# sourceMappingURL=main.cafef07c.chunk.js.map