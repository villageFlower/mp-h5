(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-favorite-favorite"],{"224b":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".header[data-v-6463104a]{position:fixed!important;top:0;left:0;right:0;z-index:101}.scroller[data-v-6463104a]{position:absolute!important;top:0;left:0;right:0;bottom:0}.panel-header[data-v-6463104a]{padding:24px 28px}.panel-header-title[data-v-6463104a]{font-size:21px}.panel-content-wrap[data-v-6463104a]{border-radius:28px 28px 0 0}.list[data-v-6463104a]{padding:0 28px 28px 28px}.list-item[data-v-6463104a]{flex-direction:row;justify-content:space-between;align-items:center;margin-top:28px}.list-item-left[data-v-6463104a]{flex:1;flex-direction:row;align-items:center}.list-item-image[data-v-6463104a]{width:88px;height:88px;border-radius:12px}.list-item-info[data-v-6463104a]{margin-left:18px}.list-item-title[data-v-6463104a]{line-height:19px;font-size:15px;font-weight:700}.list-item-price[data-v-6463104a]{margin-top:10px;font-size:13px}.list-item-btn[data-v-6463104a]{justify-content:center;align-items:center;width:36px;height:36px;border-radius:9px}",""]),e.exports=t},"5a05":function(e,t,i){"use strict";i.r(t);var a=i("c1e1"),n=i("e160");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("e230");var l,o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"6463104a",null,!1,a["a"],l);t["default"]=r.exports},c1e1:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var a={emPage:i("143c").default,emScroller:i("c45c").default,emHeaderInset:i("a362").default,emIcon:i("81d3").default,emHeaderSearch:i("3c90").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("em-page",{staticClass:"favorite",attrs:{"em-styles":e.pageStyles}},[i("em-scroller",{staticClass:"scroller"},[i("em-header-inset"),i("v-uni-view",{staticClass:"em-panel",style:[e.$em.$getThemeStyle(["bg-color--1"])]},[i("v-uni-view",{staticClass:"em-panel-header panel-header"},[i("v-uni-text",{staticClass:"em-panel-header-title panel-header-title",style:[e.$em.$getThemeStyle(["color-1"])]},[e._v("收藏")])],1)],1),i("v-uni-view",{staticClass:"em-panel panel-content-wrap",style:[e.$em.$getThemeStyle(["bg-color-1"])]},[i("v-uni-view",{staticClass:"em-panel-content"},[i("v-uni-view",{staticClass:"list"},e._l(e.favorites,(function(t,a){return i("v-uni-view",{key:a,staticClass:"list-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$em.$navigateTo("/pages/goods/goods?id=")}}},[i("v-uni-view",{staticClass:"list-item-left"},[i("v-uni-view",{staticClass:"list-item-image-wrap"},[i("v-uni-image",{staticClass:"list-item-image",attrs:{src:t.image}})],1),i("v-uni-view",{staticClass:"list-item-info"},[i("v-uni-text",{staticClass:"list-item-title",style:[e.$em.$getThemeStyle(["color-1"])]},[e._v(e._s(t.title))]),i("v-uni-text",{staticClass:"list-item-price",style:[e.$em.$getThemeStyle(["color-1"])]},[e._v("￥"+e._s(t.price.toFixed(2)))])],1)],1),i("v-uni-view",{staticClass:"list-item-right"},[i("v-uni-view",{staticClass:"list-item-operate"},[i("v-uni-view",{staticClass:"list-item-btn",style:[e.$em.$getThemeStyle(["bg-color-108"])]},[i("em-icon",{staticClass:"list-item-btn-icon",style:[e.$em.$getThemeStyle(["color-108"])],attrs:{unicode:""}})],1)],1)],1)],1)})),1)],1)],1)],1),i("em-header-search",{staticClass:"header",attrs:{"em-styles":e.headerStyles,"search-btn":e.headerSearchBtn,"left-btns":e.headerLeftBtns,placeholder:"搜索商品..."},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmSearch.apply(void 0,arguments)},clickBtn:function(t){arguments[0]=t=e.$handleEvent(t),e.clickHeaderBtn.apply(void 0,arguments)}},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1)},s=[]},c7d5:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={};a=getApp({allowDefault:!0});var n={data:function(){return{keywords:"",favorites:[]}},computed:{pageStyles:function(){return{wrap:a.$getThemeStyle(["bg-color--1"])}},headerStyles:function(){return{wrap:a.$getThemeStyle(["bg-color-1","shadow-1"]),input:a.$getThemeStyle(["bg-color-2","color-1"]),placeholder:a.$getThemeStyle(["color-6"])}},headerSearchBtn:function(){return{iconUnicode:"",styles:{btn:a.$getThemeStyle(["bg-color-101"]),icon:a.$getThemeStyle(["color-101"])}}},headerLeftBtns:function(){return[{iconUnicode:"",styles:{btn:a.$getThemeStyle(["bg-color-102"]),icon:a.$getThemeStyle(["color-102"])}}]}},created:function(){this.$em=a.$em},onLoad:function(){this.getFavoriteList()},methods:{getFavoriteList:function(){var e=this;a.$api.getFavoriteList().then((function(t){e.favorites=t.data}))},confirmSearch:function(e){e.value&&uni.showToast({icon:"none",title:"搜索：".concat(e.value)})},clickHeaderBtn:function(e){"left"===e.position&&0===e.index&&a.$navigateBack()}}};t.default=n},e160:function(e,t,i){"use strict";i.r(t);var a=i("c7d5"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},e230:function(e,t,i){"use strict";var a=i("e488"),n=i.n(a);n.a},e488:function(e,t,i){var a=i("224b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("3c9f147c",a,!0,{sourceMap:!1,shadowMode:!1})}}]);