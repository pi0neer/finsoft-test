(function(e){function t(t){for(var n,s,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)s=c[d],a[s]&&f.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/finsoft-test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"app"}},[r("router-view")],1)},o=[],s=r("2877"),c={},i=Object(s["a"])(c,a,o,!1,null,null,null),u=i.exports,l=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"home"},[r("Table")],1)},f=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-data-table",{attrs:{headers:e.tableHeaders,items:e.tableData,"hide-actions":"",id:"table"},scopedSlots:e._u([{key:"items",fn:function(t){return[r("tr",{class:"row-"+t.index},[r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.name))]),r("td",{staticClass:"text-xs-center"},[e._v(e._s("$"+e.usdPrice(t.item.priceUsd)))]),r("td",{staticClass:"text-xs-center hidden-sm-and-down"},[e._v(e._s("$"+e.shortenNumber(t.item.marketCapUsd)))]),r("td",{staticClass:"text-xs-center hidden-sm-and-down"},[e._v(e._s("$"+e.shortenNumber(t.item.volumeUsd24Hr)))])])]}}])})},b=[],h=(r("ac6a"),r("7f7f"),r("84b4"),r("c5f6"),r("bc3a")),m={name:"Table",data:function(){return{headersDesktop:[{text:"Название",align:"center",sortable:!1},{text:"Стоимость",align:"center",sortable:!1},{text:"Рыночная капитализация",align:"center",sortable:!1},{text:"Суточный объем",align:"center",sortable:!1}],headersMobile:[{text:"Название",align:"center",sortable:!1},{text:"Стоимость",align:"center",sortable:!1}],tableData:[],currencyNames:[]}},methods:{usdPrice:function(e){return e>1?Number(e).toFixed(2):Number(e).toFixed(8)},shortenNumber:function(e){if(e>Math.pow(10,9)){var t=(Math.trunc(e)/Math.pow(10,9)).toFixed(2);return t+"b"}if(e>Math.pow(10,6)){var r=(Math.trunc(e)/Math.pow(10,6)).toFixed(2);return r+"m"}return e}},computed:{tableHeaders:function(){return this.$vuetify.breakpoint.xs||this.$vuetify.breakpoint.sm?this.headersMobile:this.headersDesktop}},mounted:function(){var e=this;h.get("https://api.coincap.io/v2/assets").then(function(t){e.tableData=t.data.data.filter(function(e){return e.rank<=15}),e.currencyNames=e.tableData.map(function(e){return e.name})});var t=new WebSocket("wss://ws.coincap.io/prices?assets=ALL");t.onmessage=function(t){var r=JSON.parse(t.data);e.currencyNames.forEach(function(t,n,a){var o=t.toLowerCase();if(r.hasOwnProperty(o)){var s=e.tableData[n],c=e.usdPrice(s.priceUsd),i=e.usdPrice(r[o]);c>i?(document.querySelector(".row-".concat(n)).classList.add("flash-red"),setTimeout(function(){document.querySelector(".row-".concat(n)).classList.remove("flash-red")},1e3)):c!==i&&(document.querySelector(".row-".concat(n)).classList.add("flash-green"),setTimeout(function(){document.querySelector(".row-".concat(n)).classList.remove("flash-green")},1e3)),s.priceUsd=r[o],e.$set(e.tableData,n,s)}})}}},v=m,x=(r("d143"),Object(s["a"])(v,p,b,!1,null,null,null)),w=x.exports,y={name:"home",components:{Table:w}},g=y,_=Object(s["a"])(g,d,f,!1,null,null,null),O=_.exports;n["default"].use(l["a"]);var M=new l["a"]({mode:"history",base:"/finsoft-test/",routes:[{path:"/",name:"home",component:O}]}),S=r("ce5b"),j=r.n(S);r("bf40");n["default"].use(j.a),n["default"].config.productionTip=!1,new n["default"]({router:M,render:function(e){return e(u)}}).$mount("#app")},"858e":function(e,t,r){},d143:function(e,t,r){"use strict";var n=r("858e"),a=r.n(n);a.a}});
//# sourceMappingURL=app.c614776a.js.map