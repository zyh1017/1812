webpackJsonp([20],{"+qiL":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("G4nV");var o=n("sIC1"),r=(n("pABc"),n("LuYC")),i=n.n(r),a=n("xd7I"),u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"router-fade"}},[t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1)],1),this._v(" "),t("transition",{attrs:{name:"router-fade"}},[this.$route.meta.keepAlive?this._e():t("router-view")],1)],1)},staticRenderFns:[]};var l=n("C7Lr")({name:"App"},u,!1,function(e){n("x8Cd")},null,null).exports,s=n("ZWLj"),c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};n("C7Lr")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(e){n("tGEK")},"data-v-d8ec41bc",null).exports;a.default.use(s.a);var h=new s.a({routes:[{path:"/",redirect:"/Ding"},{path:"/Account",component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"dVfe"))}},{path:"/Ssite",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"xY4v"))}},{path:"/Moneyout",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"S3Qz"))}},{path:"/Newly",component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"AOLG"))},meta:{keepAlive:!0}},{path:"/Redact",component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"DzdJ"))}},{path:"/Goods",component:function(){return n.e(17).then(n.bind(null,"6C9L"))},redirect:"/Goods/Left",children:[{path:"/Goods/Left",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"ECxf"))}},{path:"/Goods/right",component:function(){return n.e(18).then(n.bind(null,"qrMz"))}}]},{path:"/Login",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"Pv68"))},meta:{keepAlive:!0}},{path:"/cs",component:function(){return n.e(5).then(n.bind(null,"iAkR"))}},{path:"/Reset",component:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"Ija5"))}},{path:"/Shou",component:function(){return n.e(6).then(n.bind(null,"RQ1S"))},children:[{path:"/Shou/Take",component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"Tdpl"))}},{path:"/Shou/Order",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"WgAD"))}},{path:"/Shou/Search",component:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"WoO3"))}},{path:"/Shou/My",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"5iSS"))}}]},{path:"/Ding",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"GtZN"))}},{path:"/Sou",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"LrVr"))}}]}),p=(n("UAgs"),n("6s2J")),d=n.n(p),f=(n("+qiL"),n("2bvH")),m=n("H3vm");a.default.use(f.a);var v=new m.a({storage:window.localStorage}),_=new f.a.Store({plugins:[v.plugin],state:{login:{user:"",code:"",password:"",show:!1,id:"",headPhoto:""},arr:[]},getters:{},mutations:{login:function(e,t){e.login=t},out:function(e,t){e.login=t},headPhoto:function(e,t){e.headPhoto=t},addShop:function(e,t){e.arr.push(t)},addNum:function(e,t){e.arr[t].num++},minusNum:function(e,t){e.arr[t].num--},del:function(e,t){e.arr.splice(t,1)},minus:function(e,t){e.arr[t].num--},clear:function(e){e.arr.splice(0)}},actions:{}}),b=(n("f1sM"),n("Zbtb"));a.default.component(i.a.name,i.a),a.default.config.productionTip=!1,a.default.use(d.a),a.default.use(o.a),a.default.use(b.b),new a.default({el:"#app",router:h,store:_,components:{App:l},template:"<App/>"})},UAgs:function(e,t){var n,o,r,i,a;n=document,o=window,r=n.documentElement,i="orientationchange"in window?"orientationchange":"resize",a=function(){var e=r.clientWidth;e&&(r.style.fontSize=e/150*20+"px")},n.addEventListener&&(o.addEventListener(i,a,!1),n.addEventListener("DOMContentLoaded",a,!1))},YQf2:function(e,t){},baDk:function(e,t){},f1sM:function(e,t){},pABc:function(e,t){},tGEK:function(e,t){},x8Cd:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.98b2341649702fc97121.js.map