webpackJsonp([18],{bY3L:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("OC4A"),s=n("mtWM"),a=n.n(s),r={name:"ShopInformation_aDiv",data:function(){return{UserCode:""}},methods:{},mounted:function(){if(localStorage.getItem("Code")){var e=JSON.parse(localStorage.getItem("Code"));this.UserCode=e}a.a.get("http://elm.cangdu.org/v1/user?user_id="+this.UserCode).then(function(e){console.log(e)})},components:{Headers:o.a}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ShopInformation_aDiv"},[t("Headers",{attrs:{ShopInfo:!0}}),this._v(" "),t("content",[this._v("\n    adfsfs\n  ")])],1)},staticRenderFns:[]};var c=n("VU/8")(r,i,!1,function(e){n("oZTE")},null,null);t.default=c.exports},oZTE:function(e,t){}});
//# sourceMappingURL=18.6e0597a8c53f5e3e712a.js.map