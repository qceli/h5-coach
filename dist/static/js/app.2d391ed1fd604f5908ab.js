webpackJsonp([6],{BIW0:function(t,e){},F3QM:function(t,e,n){t.exports=n.p+"static/img/home_bg@2x.8d30d5e.png"},HLCr:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:this.transitionName}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App",data:function(){return{transitionName:""}},mounted:function(){},watch:{$route:function(t,e){t.meta.index>e.meta.index?this.transitionName="slide-left":this.transitionName="slide-right"}},methods:{}},i,!1,function(t){n("HLCr")},null,null).exports,r=n("/ocq"),s={name:"HelloWorld",data:function(){return{}},mounted:function(){-1!==window.location.href.indexOf("?")&&("1"===this.getQueryString("isLast")&&this.$router.push("/sharephoto"))},methods:{getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?decodeURI(n[2]):null},startPhoto:function(){this.$router.push("/choosephoto")}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-page"},[e("div",{staticClass:"home-container"},[e("img",{attrs:{src:n("F3QM")}}),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"home-button"},[e("div",{staticClass:"start-button",on:{click:this.startPhoto}},[this._v("上传照片")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo-img"},[e("img",{attrs:{src:n("XZF3")}})])}]};var c=n("VU/8")(s,u,!1,function(t){n("BIW0")},"data-v-44bd2a6f",null).exports;o.default.use(r.a);var l=new r.a({routes:[{path:"/",name:"HelloWorld",component:c,meta:{index:0}},{path:"/choosephoto",name:"ChoosePhoto",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"LFIH"))},meta:{index:1}},{path:"/choosealbum",name:"ChooseAlbum",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"T63e"))},meta:{index:2}},{path:"/dealphoto",name:"DealPhoto",component:function(){return n.e(4).then(n.bind(null,"Fqrx"))},meta:{index:3}},{path:"/sharephoto",name:"SharePhoto",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"b7FI"))},meta:{index:4}}]}),h=n("Au9i"),d=n.n(h),m=(n("d8/S"),n("mtWM")),p=n.n(m),f=n("Rf8U"),v=n.n(f);o.default.use(d.a),o.default.use(v.a,p.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:l,components:{App:a},template:"<App/>"})},XZF3:function(t,e,n){t.exports=n.p+"static/img/logo@2x.9f1bb5f.png"},"d8/S":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2d391ed1fd604f5908ab.js.map