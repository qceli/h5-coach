webpackJsonp([3],{"3wg7":function(t,e,n){t.exports=n.p+"static/img/take_photo@2x.53ef2c3.png"},GmzV:function(t,e){},LFIH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("edHG"),c=n("JaHG"),a={name:"ChoosePhoto",data:function(){return{}},mounted:function(){this.initWechatJs()},methods:{initWechatJs:function(){this.axios.post("http://coach.realmshow.com/api/webchat-api/pub/signature").then(function(t){if(200===t.data.code){var e=Object(c.a)(t.data.data);console.log(e),Object(o.a)(e.appId,e.nonce,e.timestamp,e.signature)}}).catch(function(t){console.log(t)})},openAlbum:function(t){var e=this;console.log("openAlbum"),Object(o.b)(t,function(t){console.log(t[0]),window.localStorage.setItem("localIds",t[0]),e.$router.push("/choosealbum")})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"choose-container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"choose-button"},[n("div",{staticClass:"btn-div",on:{click:function(e){return t.openAlbum(1)}}},[t._v("上传照片")]),t._v(" "),n("div",{staticClass:"btn-div",on:{click:function(e){return t.openAlbum(2)}}},[t._v("摄像头")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"choose-bg"},[e("img",{attrs:{src:n("YdKM")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo-img"},[e("img",{attrs:{src:n("XZF3")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"camera-img"},[e("img",{attrs:{src:n("3wg7")}})])}]};var s=n("VU/8")(a,i,!1,function(t){n("GmzV")},"data-v-55339f1e",null);e.default=s.exports},YdKM:function(t,e,n){t.exports=n.p+"static/img/page_bg@2x.0d85874.jpg"},edHG:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var o=window.wx||{},c=!1,a=function(t,e,n,a,i,r,l){!1===c&&o.config({debug:!1,appId:t,timestamp:n,nonceStr:e,signature:a,jsApiList:["checkJsApi","chooseImage","uploadImage","onMenuShareTimeline","getLocalImgData","onMenuShareAppMessage"]}),c=!0,o.ready(function(){"/sharephoto"===i?s(r,l):(o.onMenuShareTimeline({title:"coach",link:"http://coach.realmshow.com",imgUrl:""}),o.onMenuShareAppMessage({title:"coach",desc:"coach",link:"http://coach.realmshow.com",imgUrl:""}))})},i=function(t,e){var n=[];1===t?n.push("album"):n.push("camera"),o.chooseImage({count:1,sizeType:["original","compressed"],sourceType:n,success:function(t){var n=t.localIds;console.log(n),e&&"function"==typeof e&&e(n)},error:function(t){alert(t)}})},s=function(t,e){console.log(t),console.log(e),o.onMenuShareTimeline({title:"coach",link:t.split("#")[0]+"static/html/redirect.html?app3Redirect="+encodeURIComponent(t),imgUrl:e,success:function(){console.log()},cancel:function(){alert("取消分享")}}),o.onMenuShareAppMessage({title:"coach",desc:"coach",link:t,imgUrl:e})}}});
//# sourceMappingURL=3.7204e369f392594884d0.js.map