webpackJsonp([3],{"3wg7":function(e,t,n){e.exports=n.p+"static/img/take_photo@2x.53ef2c3.png"},LFIH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("edHG"),c=n("JaHG"),a={name:"ChoosePhoto",data:function(){return{}},mounted:function(){this.initWechatJs()},methods:{initWechatJs:function(){this.axios.post("http://coach.realmshow.com/api/webchat-api/pub/signature").then(function(e){if(200===e.data.code){var t=Object(c.a)(e.data.data);console.log(t),Object(o.a)(t.appId,t.nonce,t.timestamp,t.signature)}}).catch(function(e){console.log(e)})},openAlbum:function(e){var t=this;console.log("openAlbum"),Object(o.b)(e,function(e){console.log(e[0]),window.localStorage.setItem("localIds",e[0]),t.$router.push("/choosealbum")})}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"choose-container"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"choose-button"},[n("div",{staticClass:"btn-div",on:{click:function(t){return e.openAlbum(1)}}},[e._v("上传照片")]),e._v(" "),n("div",{staticClass:"btn-div",on:{click:function(t){return e.openAlbum(2)}}},[e._v("摄像头")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo-img"},[t("img",{attrs:{src:n("XZF3")}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"camera-img"},[t("img",{attrs:{src:n("3wg7")}})])}]};var s=n("VU/8")(a,i,!1,function(e){n("pHCi")},"data-v-68c495a1",null);t.default=s.exports},edHG:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var o=window.wx||{},c=!1,a=function(e,t,n,a,i,r,l){!1===c&&o.config({debug:!1,appId:e,timestamp:n,nonceStr:t,signature:a,jsApiList:["checkJsApi","chooseImage","uploadImage","onMenuShareTimeline","getLocalImgData","onMenuShareAppMessage"]}),c=!0,o.ready(function(){"/sharephoto"===i?s(r,l):(o.onMenuShareTimeline({title:"coach",link:"http://coach.realmshow.com",imgUrl:""}),o.onMenuShareAppMessage({title:"coach",desc:"coach",link:"http://coach.realmshow.com",imgUrl:""}))})},i=function(e,t){var n=[];1===e?n.push("album"):n.push("camera"),o.chooseImage({count:1,sizeType:["original","compressed"],sourceType:n,success:function(e){var n=e.localIds;console.log(n),t&&"function"==typeof t&&t(n)},error:function(e){alert(e)}})},s=function(e,t){console.log(e),console.log(t),o.onMenuShareTimeline({title:"coach",link:e,imgUrl:t,success:function(){console.log()},cancel:function(){alert("取消分享")}}),o.onMenuShareAppMessage({title:"coach",desc:"coach",link:e,imgUrl:t})}},pHCi:function(e,t){}});
//# sourceMappingURL=3.38c59745e25c894590f3.js.map