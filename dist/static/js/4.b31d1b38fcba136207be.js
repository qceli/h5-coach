webpackJsonp([4],{Fqrx:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"DealPhoto",data:function(){return{secondImg:""}},watch:{},mounted:function(){var t=window.localStorage.getItem("firstImg");t&&(this.secondImg=t)},methods:{goBack:function(){this.$router.go(-1)},dealPhoto:function(){this.$router.push("/sharephoto")}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"deal-container"},[s("div",{staticClass:"deal-content"},[t._m(0),t._v(" "),s("div",[s("div",{ref:"box",staticClass:"people-img"},[s("img",{attrs:{src:t.secondImg,alt:"分享背景图"}})])])]),t._v(" "),s("div",{staticClass:"choose-button"},[s("div",{staticClass:"btn-div",on:{click:t.goBack}},[t._v("上一步")]),t._v(" "),s("div",{staticClass:"btn-div last",on:{click:t.dealPhoto}},[t._v("下一步")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo-img"},[e("img",{attrs:{src:s("XZF3")}})])}]};var i=s("VU/8")(a,o,!1,function(t){s("mDoD")},"data-v-b7a36a74",null);e.default=i.exports},mDoD:function(t,e){}});
//# sourceMappingURL=4.b31d1b38fcba136207be.js.map