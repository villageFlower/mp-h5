(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods"],{"02a6":function(t,e,n){"use strict";var r=n("4ea4");n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=r(n("1da1")),i=r(n("5530")),a=n("2f62"),s={};s=getApp({allowDefault:!0});var l={data:function(){return{headerHeight:0,headerOpacity:0,pictureTop:0,scrollTop:0,oldScrollTop:0,propertyElementTop:0,shoppingCartBall:{},shoppingCartBallShow:!1,shoppingCartBallMoving:!1,shoppingCartTotal:0,query:{id:""},goodinfo:"",imageUrl:""}},computed:(0,i.default)((0,i.default)({},(0,a.mapState)(["systemInfo"])),{},{pageStyles:function(){return{wrap:s.$getThemeStyle(["bg-color--1"])}},headerStyles:function(){return{wrap:(0,i.default)((0,i.default)({},s.$getThemeStyle(["bg-color-1",this.headerOpacity>=1?"shadow-1":"shadow-0"])),{},{opacity:this.headerOpacity}),title:(0,i.default)((0,i.default)({},s.$getThemeStyle(["color-1"])),{},{opacity:this.headerOpacity})}},headerLeftBtns:function(){return[{iconUnicode:"",styles:{btn:s.$getThemeStyle(["bg-color-102"]),icon:s.$getThemeStyle(["color-102"])}}]},headerRightBtns:function(){return[]},propertyOptionMaxWidth:function(){return this.systemInfo.windowWidth-28-56-2}}),created:function(){this.$em=s.$em},mounted:function(){var t=this;uni.createSelectorQuery().select(".header").boundingClientRect((function(e){t.headerHeight=e.height})).exec(),uni.createSelectorQuery().select(".content-property").boundingClientRect((function(e){t.propertyElementTop=e.top})).exec()},onLoad:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t),e.imageUrl=s.$imageUrl,e.query.id=t.id,n.next=5,e.getGoodsInfo();case 5:case"end":return n.stop()}}),n)})))()},methods:{getGoodsInfo:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.$http.get(s.$Api.getProductById+"?id="+t.query.id);case 2:n=e.sent,t.goodinfo=n.data;case 4:case"end":return e.stop()}}),e)})))()},addOrder:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.navigateTo({url:"/pages/order/create?product_id="+t.goodinfo.id});case 1:case"end":return e.stop()}}),e)})))()},addCart:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.shoppingCartBallMoving){n.next=2;break}return n.abrupt("return");case 2:return e.shoppingCartBallMoving=!0,r={x:t.changedTouches[0].screenX||t.changedTouches[0].clientX||t.changedTouches[0].pageX,y:t.changedTouches[0].screenY||t.changedTouches[0].clientY||t.changedTouches[0].pageY},o={},n.next=7,new Promise((function(t){uni.createSelectorQuery().in(e.$refs.header).select(".cart").boundingClientRect((function(e){t({x:e.left+e.width/2,y:e.top+e.height/2})})).exec()}));case 7:return o=n.sent,e.shoppingCartBall=r,e.shoppingCartBallShow=!0,n.next=12,s.$threadSleep(50);case 12:return e.shoppingCartBall=o,n.next=15,s.$threadSleep(750);case 15:e.shoppingCartBallShow=!1,e.shoppingCartBallMoving=!1,e.shoppingCartTotal++,e.shoppingCartBall=r;case 19:case"end":return n.stop()}}),n)})))()},scrollToProperty:function(){var t=this;this.scrollTop=this.oldScrollTop,this.$nextTick((function(){t.scrollTop=t.propertyElementTop-t.headerHeight+12}))},clickPropertyOption:function(t,e){var n=this;t.options.forEach((function(t){n.$set(t,"checked",!1),t.checked=!1})),this.$set(e,"checked",!0)},scroll:function(t){var e=t.scrollTop<=0?0:t.scrollTop;this.oldScrollTop=e;var n=4;this.pictureTop=e/n;var r=this.systemInfo.windowWidth,o=e/r,i=o>1?1:o;this.headerOpacity=i},clickHeaderBtn:function(t){"left"===t.position&&0===t.index?s.$navigateBack():"right"===t.position&&0===t.index&&s.$switchTab("/pages/index/index","cart")},isMultiline:function(t,e,n){var r=t.replace(/[\u0391-\uFFE5]/g,"aa").length/2,o=Math.floor(n/e);return r>o}}};e.default=l},"04e1":function(t,e,n){"use strict";n.r(e);var r=n("f004"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"06c5":function(t,e,n){"use strict";n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=o(n("6b75"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(t){if("string"===typeof t)return(0,r.default)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.default)(t,e):void 0}}},"17a9":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.nodes.length?t._e():t._t("default"),n("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[n("div",{attrs:{id:"rtf"+t.uid}})])],2)},i=[]},"1fd5":function(t,e,n){"use strict";n.r(e);var r=n("02a6"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"239f":function(t,e,n){"use strict";var r=n("be87"),o=n.n(r);o.a},"245e":function(t,e,n){"use strict";n("a9e3"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"em-scroller",props:{scrollTop:{type:Number,default:0}},data:function(){return{}},methods:{scroll:function(t){var e=this;uni.createSelectorQuery().in(this).selectAll(".em-scroller").boundingClientRect((function(n){var r=t.detail.scrollTop,o=Math.floor(t.detail.scrollHeight-r-n[0].height);e.$emit("scroll",{scrollTop:r,scrollBottom:o})})).exec()}}};e.default=r},2725:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-1d81963f{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-1d81963f{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"2d88":function(t,e,n){var r=n("367b");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("0d4dbefd",r,!0,{sourceMap:!1,shadowMode:!1})},"367b":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".header[data-v-223fd188]{position:fixed!important;top:0;left:0;right:0;z-index:101}.scroller[data-v-223fd188]{position:absolute!important;top:0;left:0;right:0;bottom:0}.pictures[data-v-223fd188]{position:absolute;top:0;z-index:1;-webkit-transform:translateY(0);transform:translateY(0);\ntransition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.1s;transition-timing-function:linear\n}.pictures-item[data-v-223fd188]{flex:1}.btns[data-v-223fd188]{position:absolute;top:0;z-index:2;right:28px}.btn[data-v-223fd188]{justify-content:center;align-items:center;width:36px;height:36px;border-radius:9px;margin-bottom:16px}.btn-favorite[data-v-223fd188]{background-color:#fff}.btn-share[data-v-223fd188]{background-color:#cfcfcf}.btn-icon[data-v-223fd188]{font-size:18px}.content-box[data-v-223fd188]{position:relative;z-index:3}.content[data-v-223fd188]{\n\t\t/* margin-top: -34px; */padding:0 28px 90px 28px;border-top-left-radius:34px;border-top-right-radius:34px}.content-title[data-v-223fd188]{padding-top:34px}.content-title-text[data-v-223fd188]{font-size:23px;font-weight:700}.content-comment[data-v-223fd188]{margin-top:12px;flex-direction:row;align-items:center}.content-comment-rate[data-v-223fd188]{flex-direction:row}.content-comment-rate-star[data-v-223fd188]{color:#ffc592;margin-right:5px}.content-comment-rate-star-line[data-v-223fd188]{color:#dfdfdf}.content-comment-count[data-v-223fd188]{margin-left:10px;font-size:14px;font-weight:700}.content-price[data-v-223fd188]{margin-top:24px}.content-price-text[data-v-223fd188]{font-size:17px;font-weight:700}.content-desc[data-v-223fd188]{margin-top:18px}.content-desc-text[data-v-223fd188]{font-size:13px}.content-property-item[data-v-223fd188]{margin-top:24px;padding-top:12px}.content-property-title-text[data-v-223fd188]{font-size:14px;font-weight:700}.content-property-option[data-v-223fd188]{flex-direction:row;flex-wrap:wrap}.content-property-option-item[data-v-223fd188]{justify-content:center;align-items:center;margin:12px 12px 0 0;padding:12px 14px;\n\t\t/* background-color: #F7F7F7; */border-radius:12px;border-width:1px;border-style:solid;border-color:transparent}.content-property-option-item-text[data-v-223fd188]{font-size:13px;line-height:17px;font-weight:400}.content-detail[data-v-223fd188]{margin-top:36px}.content-detail-title[data-v-223fd188]{margin-bottom:12px}.content-detail-title-text[data-v-223fd188]{font-size:14px;font-weight:700}.content-detail-item[data-v-223fd188]{flex-direction:row}.content-detail-item-img[data-v-223fd188]{flex:1\n\n\t\t/* width: 100%;\n  \tdisplay: block; */\n}.footer[data-v-223fd188]{position:fixed;right:0;bottom:0;left:0;z-index:3;padding:18px 28px;border-top-left-radius:34px;border-top-right-radius:34px;\n\t\t/* background-color: #FFFFFF; */box-shadow:0 0 4px #e0e0e0}.footer-btns[data-v-223fd188]{flex-direction:row}.footer-btn[data-v-223fd188]{flex-direction:row;justify-content:center;align-items:center;height:54px;border-radius:12px;\n\t\t/* background-color: #F5F5F5; */width:100px}.footer-btn-text[data-v-223fd188]{font-size:13px;font-weight:700}.footer-btn-spec[data-v-223fd188]{flex:0.4}.footer-btn-spec-text[data-v-223fd188]{color:#393939}.footer-btn-spec-icon[data-v-223fd188]{font-size:16px;color:#393939}.footer-btn-buy[data-v-223fd188]{position:relative;flex:1\n\t\t/* background-color: #F76842; */}.footer-btn-buy-text[data-v-223fd188]{color:#fff}.cart-ball[data-v-223fd188]{position:fixed;top:0;left:0;z-index:1000;width:20px;height:20px;border-radius:20px;transition-property:top,left;transition-duration:.5s;box-shadow:0 4px 8px #595959}",""]),t.exports=e},"3b8f":function(t,e,n){"use strict";n.r(e);var r=n("98df"),o=n("1fd5");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("ad1b");var a,s=n("f0c5"),l=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"223fd188",null,!1,r["a"],a);e["default"]=l.exports},"5bbe":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"em-scroller-wrap"},[n("v-uni-scroll-view",{staticClass:"em-scroller",attrs:{"scroll-y":!0,"scroll-top":t.scrollTop},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[t._t("default")],2)],1)},i=[]},6163:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".em-header-wrap[data-v-454d46e3]{position:relative;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:28px;border-bottom-right-radius:28px\n  /* 当前元素为overflow: hidden;时在iOS上，外层或同级元素如果是overflow: scroll;切换页面再回到页面，未显示的滚动区域的内容或暂时被高层的内容遮挡会出现被隐藏的情况 */\n  /* 这里的阴影样式就会被遮掉一部分 */\n  /* overflow: hidden; */}.em-header[data-v-454d46e3]{\n  /* 在nvue中z-index不起作用，但是position: sticky;层级要比absolute高些，所以这里用这个 */\n  /* position: sticky;在nvue中会透过swiper */\n  /* position: sticky; */\n  /* position: relative;\n  z-index: 999;\n  top: 0;\n  right: 0;\n  left: 0; */padding-top:16px;padding-right:28px;padding-bottom:16px;padding-left:28px;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:28px;border-bottom-right-radius:28px\n  /* 当前元素为overflow: hidden;时在iOS上，外层或同级元素如果是overflow: scroll;切换页面再回到页面，未显示的滚动区域的内容或暂时被高层的内容遮挡会出现被隐藏的情况 */\n  /* overflow: hidden; */}.em-header-bg-wrap[data-v-454d46e3]{position:absolute;top:0;right:0;bottom:0;left:0;transition-property:opacity;transition-duration:.25s}.em-header-bg[data-v-454d46e3]{position:absolute;top:0;right:0;bottom:0;left:0;\n  /* 这样设置border-radius，会导致iOS nvue opacity失效，又是个离谱的坑，把opacity放到外层去吧，不能放一起 */border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:28px;border-bottom-right-radius:28px;\n  /* transition-property: background-color;transition-duration: 0.25s;不能与box-shadow一起使用，否则box-shadow在安卓nvue无法切换样式，比如动态切换颜色 */transition-property:background-color;transition-duration:.25s}.em-header-content[data-v-454d46e3]{position:relative;flex-direction:row;justify-content:center;align-items:center;height:36px}.em-header-title[data-v-454d46e3]{flex:1;text-align:center;font-size:15px;font-weight:700}.em-header-left[data-v-454d46e3]{position:absolute;left:0;z-index:10;flex-direction:row;flex:1;justify-content:flex-start;align-items:center}.em-header-right[data-v-454d46e3]{position:absolute;right:0;z-index:10;flex-direction:row;flex:1;justify-content:flex-end;align-items:center}.em-header-btn[data-v-454d46e3]{position:relative;justify-content:center;align-items:center;width:36px;height:36px;border-radius:9px\n  /* 当前元素为overflow: hidden;时在iOS上，外层或同级元素如果是overflow: scroll;切换页面再回到页面，未显示的滚动区域的内容或暂时被高层的内容遮挡会出现被隐藏的情况 */\n  /* overflow: hidden; */}.em-header-left-btn[data-v-454d46e3]{margin-right:16px;\n  /* background-color: #F76842; */transition-property:background-color;transition-duration:.25s}.em-header-right-btn[data-v-454d46e3]{margin-left:16px;\n  /* background-color: #393939; */transition-property:background-color;transition-duration:.25s}.em-header-btn-icon[data-v-454d46e3]{display:flex;align-items:center;font-size:17px;color:#fff}",""]),t.exports=e},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"758b":function(t,e,n){"use strict";var r=n("4ea4");n("99af"),n("caad"),n("c975"),n("acd8"),n("ac1f"),n("2532"),n("466d"),n("5319"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("b85c")),i=uni.getSystemInfoSync().windowWidth/750,a=n("8800"),s={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,r=e.split("://")[0],o=r.length;n=e[o];o++){if("/"==n&&"/"!=e[o-1]&&"/"!=e[o+1])break;r+=Math.random()>.5?n.toUpperCase():n}return r+=e.substr(o),this[t]=r}if(this[t]=e,e.includes("data:image")){var i=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!i)return}}}},mounted:function(){this.document=document.getElementById("rtf"+this._uid),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{_handleHtml:function(t,e){if(!e){var n="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var r in a.userAgentStyles)n+="".concat(r,"{").concat(a.userAgentStyles[r],"}");for(r in this.tagStyle)n+="".concat(r,"{").concat(this.tagStyle[r],"}");n+="</style>",t=n+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*i+"px"}))),t},setContent:function(t,e){var n=this;if(t){var r=document.createElement("div");e?this.rtf?this.rtf.appendChild(r):this.rtf=r:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=r),r.innerHTML=this._handleHtml(t,e);for(var i,s=this.rtf.getElementsByTagName("style"),l=0;i=s[l++];)i.innerHTML=i.innerHTML.replace(/body/g,"#rtf"+this._uid),i.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,r=0;e=t[r++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),n._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var c=this,d=this.rtf.getElementsByTagName("title");d.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:d[0].innerText}),this.imgList.length=0;for(var u,f=this.rtf.getElementsByTagName("img"),p=0,h=0;u=f[p];p++){var g=u.getAttribute("src");this.domain&&g&&("/"==g[0]?"/"==g[1]?u.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+g:u.src=this.domain+g:g.includes("://")||(u.src=this.domain+"/"+g)),u.hasAttribute("ignore")||"A"==u.parentElement.nodeName||(u.i=h++,c.imgList.push(u.src||u.getAttribute("data-src")),u.onclick=function(){var t=!0;this.ignore=function(){return t=!1},c.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:c.imgList})}),u.onerror=function(){a.errorImg&&(c.imgList[this.i]=this.src=a.errorImg),c.$emit("error",{source:"img",target:this})},c.lazyLoad&&this._observer&&u.src&&0!=u.i&&(u.setAttribute("data-src",u.src),u.removeAttribute("src"),this._observer.observe(u))}var v,m=this.rtf.getElementsByTagName("a"),b=(0,o.default)(m);try{for(b.s();!(v=b.n()).done;){var y=v.value;y.onclick=function(){var t=!0,e=this.getAttribute("href");if(c.$emit("linkpress",{href:e,ignore:function(){return t=!1}}),t&&e)if("#"==e[0])c.useAnchor&&c.navigateTo({id:e.substr(1)});else{if(0==e.indexOf("http")||0==e.indexOf("//"))return!0;uni.navigateTo({url:e})}return!1}}}catch(E){b.e(E)}finally{b.f()}var x=this.rtf.getElementsByTagName("video");c.videoContexts=x;for(var w,T=0;w=x[T++];)w.style.maxWidth="100%",w.onerror=function(){c.$emit("error",{source:"video",target:this})},w.onplay=function(){if(c.autopause)for(var t,e=0;t=c.videoContexts[e++];)t!=this&&t.pause()};var C,k,S=this.rtf.getElementsByTagName("audio"),_=(0,o.default)(S);try{for(_.s();!(C=_.n()).done;){var $=C.value;$.onerror=function(){c.$emit("error",{source:"audio",target:this})}}}catch(E){_.e(E)}finally{_.f()}if(this.autoscroll){var B,O=this.rtf.getElementsByTagName("table"),A=(0,o.default)(O);try{for(A.s();!(B=A.n()).done;){var I=B.value,M=document.createElement("div");M.style.overflow="scroll",I.parentNode.replaceChild(M,I),M.appendChild(I)}}catch(E){A.e(E)}finally{A.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){n.nodes=[1],n.$emit("load")})),setTimeout((function(){return n.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){n.rect=n.rtf.getBoundingClientRect(),n.rect.height==k&&(n.$emit("ready",n.rect),clearInterval(n._timer)),k=n.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},navigateTo:function(t){if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});if(!t.id)return window.scrollTo(0,this.rtf.offsetTop),t.success&&t.success({errMsg:"pageScrollTo:ok"});var e=document.getElementById(t.id);if(!e)return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=this.rtf.offsetTop+e.offsetTop+(t.offset||0),uni.pageScrollTo(t)},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]}}};e.default=s},"86f4":function(t,e,n){"use strict";n.r(e);var r=n("ec9e"),o=n("04e1");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("239f");var a,s=n("f0c5"),l=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"454d46e3",null,!1,r["a"],a);e["default"]=l.exports},"87cc":function(t,e,n){"use strict";n.r(e);var r=n("17a9"),o=n("cfcb");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("eb9a");var a,s=n("f0c5"),l=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"1d81963f",null,!1,r["a"],a);e["default"]=l.exports},8800:function(t,e,n){function r(t){for(var e=Object.create(null),n=t.split(","),r=n.length;r--;)e[n[r]]=!0;return e}n("ac1f"),n("1276"),t.exports={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:r(" , ,\t,\r,\n,\f"),boolAttrs:r("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,section,pre"),ignoreTags:r("area,base,canvas,frame,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr,iframe"),richOnlyTags:r("a,colgroup,fieldset,legend,table"),selfClosingTags:r("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}}},"98df":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={emPage:n("143c").default,emScroller:n("c45c").default,ycParser:n("87cc").default,emHeader:n("86f4").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("em-page",{staticClass:"goods",attrs:{"em-styles":t.pageStyles}},[n("em-scroller",{staticClass:"scroller",attrs:{"scroll-top":t.scrollTop},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"pictures-inset",style:{height:1.18*t.systemInfo.windowWidth-34+"px"}}),n("v-uni-swiper",{staticClass:"pictures",style:{width:t.systemInfo.windowWidth+"px",height:1.18*t.systemInfo.windowWidth+"px",transform:"translateY("+t.pictureTop+"px)"},attrs:{"indicator-dots":!0}},t._l(t.goodinfo.images,(function(e,r){return n("v-uni-swiper-item",{key:r,staticClass:"pictures-item"},[n("v-uni-image",{staticClass:"pictures-item-img",style:{width:t.systemInfo.windowWidth+"px",height:1.18*t.systemInfo.windowWidth+"px"},attrs:{src:t.imageUrl+e.file_path}})],1)})),1),n("v-uni-view",{staticClass:"content-box"},[n("v-uni-view",{staticClass:"content",style:[t.$em.$getThemeStyle(["bg-color-1"])]},[n("v-uni-view",{staticClass:"content-title"},[n("v-uni-text",{staticClass:"content-title-text",style:[t.$em.$getThemeStyle(["color-2"])]},[t._v(t._s(t.goodinfo.name))])],1),n("v-uni-view",{staticClass:"content-price"},[n("v-uni-text",{staticClass:"content-price-text",style:[t.$em.$getThemeStyle(["color-2"])]},[t._v("S$"+t._s(t.goodinfo.price))])],1),n("v-uni-view",{staticClass:"content-detail"},[n("v-uni-view",{staticClass:"content-detail-title"},[n("v-uni-text",{staticClass:"content-detail-title-text",style:[t.$em.$getThemeStyle(["color-2"])]},[t._v("Detailed Descriptions")])],1),n("v-uni-view",{staticClass:"content-details"},[n("v-uni-view",{staticClass:"details"},[n("yc-parser",{attrs:{html:t.goodinfo.detail,"lazy-load":!0}})],1)],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"footer",style:[t.$em.$getThemeStyle(["bg-color-1","shadow-1"])]},[n("v-uni-view",{staticClass:"footer-btns"},[n("v-uni-view",{ref:"buy",staticClass:"footer-btn footer-btn-buy",style:[t.$em.$getThemeStyle(["bg-color-101"])],on:{touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.addOrder.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"footer-btn-text footer-btn-buy-text",style:[t.$em.$getThemeStyle(["color-101"])]},[t._v("Place Order")])],1)],1)],1),n("em-header",{ref:"header",staticClass:"header",attrs:{title:"Product Detail","em-styles":t.headerStyles,"left-btns":t.headerLeftBtns,"right-btns":t.headerRightBtns},on:{clickBtn:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHeaderBtn.apply(void 0,arguments)}}})],1)},i=[]},"9ca1":function(t,e,n){"use strict";var r=n("da73"),o=n.n(r);o.a},ad1b:function(t,e,n){"use strict";var r=n("2d88"),o=n.n(r);o.a},b85c:function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=o(n("06c5"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=(0,r.default)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,a=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(l)throw a}}}}},be87:function(t,e,n){var r=n("6163");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("ad5d4a34",r,!0,{sourceMap:!1,shadowMode:!1})},c45c:function(t,e,n){"use strict";n.r(e);var r=n("5bbe"),o=n("d40b");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("9ca1");var a,s=n("f0c5"),l=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"2a4652ec",null,!1,r["a"],a);e["default"]=l.exports},cfcb:function(t,e,n){"use strict";n.r(e);var r=n("758b"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},d40b:function(t,e,n){"use strict";n.r(e);var r=n("245e"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},da73:function(t,e,n){var r=n("f5b3");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("5eeb21c2",r,!0,{sourceMap:!1,shadowMode:!1})},eb9a:function(t,e,n){"use strict";var r=n("f4b8"),o=n.n(r);o.a},ec9e:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={emIcon:n("81d3").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"em-header-wrap",style:[{"box-shadow":t.styles.wrap["box-shadow"]}]},[n("v-uni-view",{staticClass:"em-header-bg-wrap",style:[{opacity:t.styles.wrap["opacity"]}]},[n("v-uni-view",{staticClass:"em-header-bg",style:[{"background-color":t.styles.wrap["background-color"]}]})],1),n("v-uni-view",{staticClass:"em-header",style:[{"padding-top":t.styles.wrap["padding-top"],"padding-bottom":t.styles.wrap["padding-bottom"]}]},[n("v-uni-view",{staticClass:"em-header-content",style:[t.styles.content]},[n("v-uni-text",{staticClass:"em-header-title",style:[t.styles.title]},[t._v(t._s(t.title))]),n("v-uni-view",{staticClass:"em-header-left"},[t._l(t.leftBtns,(function(e,r){return n("v-uni-view",{key:r,ref:e.name,refInFor:!0,staticClass:"em-header-btn em-header-left-btn",class:[e.name],style:[e.styles.btn],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickBtn("left",r)}}},[n("em-icon",{staticClass:"em-header-btn-icon",style:[e.styles.icon],attrs:{unicode:e.iconUnicode}})],1)})),t._t("left")],2),n("v-uni-view",{staticClass:"em-header-right"},[t._l(t.rightBtns,(function(e,r){return n("v-uni-view",{key:r,ref:e.name,refInFor:!0,staticClass:"em-header-btn em-header-right-btn",class:[e.name],style:[e.styles.btn],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickBtn("right",r)}}},[n("em-icon",{staticClass:"em-header-btn-icon",style:[e.styles.icon],attrs:{unicode:e.iconUnicode}})],1)})),t._t("right")],2)],1)],1)],1)},i=[]},f004:function(t,e,n){"use strict";n("4160"),n("b64b"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){var t=uni.getSystemInfoSync(),e={height:36,paddingTop:16,paddingBottom:16};return t.headerStyle=e,t}(),o={name:"em-header",props:{emStyles:{type:Object,default:function(){return{}}},leftBtns:{type:Array,default:function(){return[]}},rightBtns:{type:Array,default:function(){return[]}},title:String},data:function(){return{styles:{wrap:{"background-color":"rgba(0,0,0,0)",opacity:"1","box-shadow":"0 0 4px #E0E0E0","padding-top":"".concat(r.headerStyle.paddingTop,"px"),"padding-bottom":"".concat(r.headerStyle.paddingBottom,"px")},content:{height:"".concat(r.headerStyle.height,"px")},title:{color:"#292929",opacity:"1"}}}},watch:{emStyles:{handler:function(t){var e=this;Object.keys(this.styles).forEach((function(t){var n=e.styles[t],r=e.emStyles[t];r&&"object"===typeof r&&(e.styles[t]=Object.assign(n,r))}))},immediate:!0,deep:!0}},methods:{clickBtn:function(t,e){this.$emit("clickBtn",{position:t,index:e})}}};e.default=o},f4b8:function(t,e,n){var r=n("2725");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("d3b3e11a",r,!0,{sourceMap:!1,shadowMode:!1})},f5b3:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".em-scroller-wrap[data-v-2a4652ec]{\n  /* position: relative; */}\n.em-scroller[data-v-2a4652ec]{position:absolute;top:0;right:0;bottom:0;left:0}",""]),t.exports=e}}]);