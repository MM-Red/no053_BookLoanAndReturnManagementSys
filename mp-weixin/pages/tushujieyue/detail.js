(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tushujieyue/detail"],{"37e0":function(t,e,n){"use strict";n.r(e);var u=n("3d02"),i=n("f4a6");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("924e");var a,s=n("f0c5"),o=Object(s["a"])(i["default"],u["b"],u["c"],!1,null,"5623d868",null,!1,u["a"],a);e["default"]=o.exports},"3d02":function(t,e,n){"use strict";var u={"mescroll-uni":()=>Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"f05e"))},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.isAuth("tushujieyue","归还")),u=t.isAuthFront("tushujieyue","归还");t.$mp.data=Object.assign({},{$root:{m0:n,m1:u}})},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}))},5436:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,u,i,r,a){try{var s=t[r](a),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(u,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(u,i){var a=t.apply(e,n);function s(t){r(a,u,i,s,o,"next",t)}function o(t){r(a,u,i,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=a(u.default.mark((function t(e){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id,e.userid&&(this.userid=e.userid);case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var e=a(u.default.mark((function e(n){var i,r;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.init(),i=t.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:r=e.sent,this.user=r.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","tushujieyue"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},onAcrossTap:function(e,n,u,i,r){if(t.setStorageSync("crossTable","tushujieyue"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",u),t.setStorageSync("statusColumnValue",r),t.setStorageSync("tips",i),""!=u&&!u.startsWith("[")){var a=t.getStorageSync("crossObj");for(var s in a)if(s==u&&a[s]==r)return void this.$utils.msg(i)}this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var t=a(u.default.mark((function t(){var e;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("tushujieyue",this.id);case 2:e=t.sent,this.detail=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=a(u.default.mark((function t(e){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.endSuccess(e.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;e=n.$base.url+e,t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=a(u.default.mark((function t(){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discusstushujieyue/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onSHTap:function(){this.$refs.popup.open()}}};e.default=s}).call(this,n("543d")["default"])},8387:function(t,e,n){},"924e":function(t,e,n){"use strict";var u=n("8387"),i=n.n(u);i.a},ae26:function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");u(n("66fd"));var e=u(n("37e0"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f4a6:function(t,e,n){"use strict";n.r(e);var u=n("5436"),i=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e["default"]=i.a}},[["ae26","common/runtime","common/vendor"]]]);