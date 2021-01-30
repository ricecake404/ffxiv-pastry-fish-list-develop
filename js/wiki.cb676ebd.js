(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["wiki"],{"0867":function(t,e,i){"use strict";i("356e")},"20ed":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{staticClass:"my-4 inner",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[t.fishList.length<=0?i("div",{staticClass:"d-flex justify-center align-content-center pa-2"},[t._t("empty")],2):t._e(),t._l(t.flattenFishList,(function(e,n){return i("div",{key:e._id+(e.isPredator?"-"+n:"")},[i("fish-list-item",{attrs:{fish:e,"fish-time-part":t.fishListTimePart[e._id],color:t.listItemColors[n],position:t.toPos(n),"hide-spot-column":t.hideSpotColumn,"show-divider":t.showFishDivider},on:{click:function(i){return t.onFishClicked(i,e.fishingSpots)}}})],1)}))],2),t.enableLoadMore&&t.flattenFishList.length>0&&t.remainingCnt>0?i("v-col",{attrs:{cols:"12"}},[i("v-btn",{attrs:{block:"",color:"secondary",tile:""},on:{click:t.loadMore}},[t._v(" "+t._s(t.$t("loadingMoreWithRemainingCnt",{remainingCnt:t.remainingCnt}))+" ")])],1):t._e(),t.clearAllButton&&t.flattenFishList.length>0?i("v-col",{attrs:{cols:"12"}},[i("v-dialog",{attrs:{"max-width":"330"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[i("click-helper",t._g(t._b({},"click-helper",r,!1),n),[i("v-btn",{staticClass:"rounded-t-0",attrs:{block:"",color:"error"}},[i("v-icon",[t._v("mdi-playlist-remove")]),i("span",[t._v(t._s(t.$t("list.toBeNotified.clearAll")))])],1)],1)]}}],null,!1,2082861578),model:{value:t.showClearConfirmDialog,callback:function(e){t.showClearConfirmDialog=e},expression:"showClearConfirmDialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v(" "+t._s(t.$t("list.toBeNotified.dialog.title"))+" ")]),i("v-card-actions",[i("v-spacer"),i("click-helper",{on:{click:function(e){t.showClearConfirmDialog=!1}}},[i("v-btn",{attrs:{text:""}},[t._v(" "+t._s(t.$t("general.dialog.cancel"))+" ")])],1),i("click-helper",{on:{click:t.onConfirmClear}},[i("v-btn",{attrs:{color:"error",text:""}},[t._v(" "+t._s(t.$t("list.toBeNotified.dialog.confirm"))+" ")])],1)],1)],1)],1)],1):t._e()],1)},r=[],s=(i("99af"),i("5db7"),i("d81d"),i("fb6a"),i("73d9"),i("2909")),o=i("5530"),a=i("2f62"),l=i("1aeb"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-sheet",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.fish._id,class:["v-list-item","v-list-item--link","px-0",t.borderClass],attrs:{color:t.color}},[i("fish-info-row",{attrs:{fish:t.fish,"fish-time-part":t.fishTimePart,predators:[],"in-predator":t.fish.isPredator,"hide-spot-column":t.hideSpotColumn,"is-last":"last"===t.position,"show-divider":t.showDivider},on:{click:function(e){return t.$emit("click",e)}}})],1)},d=[],h=i("63b1"),u={name:"FishListItem",components:{FishInfoRow:h["a"]},props:{fish:{type:Object,default:void 0},fishTimePart:{type:Object,default:void 0},color:{type:String,default:void 0},position:{type:String,default:"inside"},hideSpotColumn:{type:Boolean,default:!1},showDivider:{type:Boolean,default:!0}},computed:{roundedClass:function(){switch(this.position){case"first":return"rounded-t-lg";case"last":return"rounded-b-lg";default:return""}},borderClass:function(){return this.fish.isPredator||"first"===this.position?"border-none":"border-normal"}}},p=u,f=(i("0867"),i("2877")),m=Object(f["a"])(p,c,d,!1,null,"15786d16",null),v=m.exports,g=i("6053"),y={name:"fish-list",components:{ClickHelper:g["a"],FishListItem:v},props:{fishList:{type:Array,default:function(){return[]}},fishListTimePart:{type:Object,default:function(){return{}}},fishListWeatherChangePart:{type:Object,default:function(){return{}}},showFishDivider:{type:Boolean,default:!0},clearAllButton:{type:Boolean,default:!1},hideSpotColumn:{type:Boolean,default:!1},hidePredators:{type:Boolean,default:!1},enableLoadMore:{type:Boolean,default:!1}},data:function(){return{openPanelIndex:void 0,showClearConfirmDialog:!1,showN:50}},computed:Object(o["a"])(Object(o["a"])({remainingCnt:function(){return this.fishList.length-this.showN},fishListOfShowLimit:function(){return this.enableLoadMore?this.fishList.slice(0,this.showN):this.fishList},flattenFishList:function(){var t=this;return this.fishListOfShowLimit.flatMap((function(e){return[e].concat(Object(s["a"])(t.hidePredators?[]:e.predators.map((function(t){var i,n;return Object(o["a"])(Object(o["a"])({},t),{},{fishingSpots:l["a"].toSpotsOfPredator(t.fishingSpots,null===(i=e.fishingSpots)||void 0===i||null===(n=i[0])||void 0===n?void 0:n.fishingSpotId)})}))))}))},listItemColors:function(){var t=this,e="",i=0,n=this.fishListTimePart;return this.flattenFishList.map((function(r){if(r.isPredator)return e;var s,o,a=t.getFishCompleted(r._id),c=null===(s=n[r._id])||void 0===s||null===(o=s.countDown)||void 0===o?void 0:o.type,d=l["a"].getColorByStatus(t.$vuetify.theme.currentTheme,a,c,i++%2,"BACKGROUND");return e=d,d}))},isMobile:function(){return this.$vuetify.breakpoint.mobile}},Object(a["d"])({allFish:"fish"})),Object(a["b"])(["getFishCompleted","getFishCompleted","filters"])),methods:{loadMore:function(){this.showN+=20},toPos:function(t){return 0===t?"first":t===this.flattenFishList.length-1?"last":"inside"},onFishClicked:function(t,e){var i;this.$emit("fish-selected",Object(o["a"])(Object(o["a"])({},t),{},{firstSpotId:null===e||void 0===e||null===(i=e[0])||void 0===i?void 0:i.fishingSpotId}))},onConfirmClear:function(){this.$emit("clear-all"),this.showClearConfirmDialog=!1}}},b=y,I=Object(f["a"])(b,n,r,!1,null,"53d35b08",null);e["a"]=I.exports},"25f2":function(t,e,i){"use strict";i("a4bd")},"356e":function(t,e,i){},"374d":function(t,e,i){"use strict";i("aeae")},"4d89":function(t,e){t.exports=function(){"use strict";function t(i,n){var r,s,o=n.length;return o>=2?(r=n.slice(0,o/2),s=n.slice(o/2,o),e(i,t(i,r),t(i,s))):n.slice()}function e(t,e,i){var n=[],r=e.length,s=i.length;while(r>0&&s>0)t(e[0],i[0])<=0?(n.push(e.shift()),r--):(n.push(i.shift()),s--);return r>0?n.push.apply(n,e):n.push.apply(n,i),n}return t}()},"5d77":function(t,e,i){},"73ec":function(t,e,i){var n,r;n=i("4d89"),r=i("f742"),t.exports=function(){"use strict";var t;function e(t){return function(){return t}}function i(t){t=t||{},this.config=t,this.config.childrenPropertyName=t.childrenPropertyName||"children",this.config.modelComparatorFn=t.modelComparatorFn}function s(t,e){return e.parent=t,t.children.push(e),e}function o(t,e){this.config=t,this.model=e,this.children=[]}function a(t){return"function"===typeof t.config.modelComparatorFn}function l(t,e,i){var n;if(!(e instanceof o))throw new TypeError("Child must be of type Node.");if(e.parent=t,t.model[t.config.childrenPropertyName]instanceof Array||(t.model[t.config.childrenPropertyName]=[]),a(t))n=r(t.config.modelComparatorFn,t.model[t.config.childrenPropertyName],e.model),t.model[t.config.childrenPropertyName].splice(n,0,e.model),t.children.splice(n,0,e);else if(void 0===i)t.model[t.config.childrenPropertyName].push(e.model),t.children.push(e);else{if(i<0||i>t.children.length)throw new Error("Invalid index.");t.model[t.config.childrenPropertyName].splice(i,0,e.model),t.children.splice(i,0,e)}return e}function c(){var e={};if(1===arguments.length?"function"===typeof arguments[0]?e.fn=arguments[0]:e.options=arguments[0]:2===arguments.length?"function"===typeof arguments[0]?(e.fn=arguments[0],e.ctx=arguments[1]):(e.options=arguments[0],e.fn=arguments[1]):(e.options=arguments[0],e.fn=arguments[1],e.ctx=arguments[2]),e.options=e.options||{},e.options.strategy||(e.options.strategy="pre"),!t[e.options.strategy])throw new Error("Unknown tree walk strategy. Valid strategies are 'pre' [default], 'post' and 'breadth'.");return e}return t={},i.prototype.parse=function(t){var e,i,r;if(!(t instanceof Object))throw new TypeError("Model must be of type object.");if(r=new o(this.config,t),t[this.config.childrenPropertyName]instanceof Array)for(this.config.modelComparatorFn&&(t[this.config.childrenPropertyName]=n(this.config.modelComparatorFn,t[this.config.childrenPropertyName])),e=0,i=t[this.config.childrenPropertyName].length;e<i;e++)s(r,this.parse(t[this.config.childrenPropertyName][e]));return r},o.prototype.isRoot=function(){return void 0===this.parent},o.prototype.hasChildren=function(){return this.children.length>0},o.prototype.addChild=function(t){return l(this,t)},o.prototype.addChildAtIndex=function(t,e){if(a(this))throw new Error("Cannot add child at index when using a comparator function.");return l(this,t,e)},o.prototype.setIndex=function(t){if(a(this))throw new Error("Cannot set node index when using a comparator function.");if(this.isRoot()){if(0===t)return this;throw new Error("Invalid index.")}if(t<0||t>=this.parent.children.length)throw new Error("Invalid index.");var e=this.parent.children.indexOf(this);return this.parent.children.splice(t,0,this.parent.children.splice(e,1)[0]),this.parent.model[this.parent.config.childrenPropertyName].splice(t,0,this.parent.model[this.parent.config.childrenPropertyName].splice(e,1)[0]),this},o.prototype.getPath=function(){var t=[];return function e(i){t.unshift(i),i.isRoot()||e(i.parent)}(this),t},o.prototype.getIndex=function(){return this.isRoot()?0:this.parent.children.indexOf(this)},o.prototype.walk=function(){var e;e=c.apply(this,arguments),t[e.options.strategy].call(this,e.fn,e.ctx)},t.pre=function t(e,i){var n,r,s;for(s=e.call(i,this),n=0,r=this.children.length;n<r;n++){if(!1===s)return!1;s=t.call(this.children[n],e,i)}return s},t.post=function t(e,i){var n,r,s;for(n=0,r=this.children.length;n<r;n++)if(s=t.call(this.children[n],e,i),!1===s)return!1;return s=e.call(i,this),s},t.breadth=function(t,e){var i=[this];(function n(){var r,s,o;if(0!==i.length){for(o=i.shift(),r=0,s=o.children.length;r<s;r++)i.push(o.children[r]);!1!==t.call(e,o)&&n()}})()},o.prototype.all=function(){var i,n=[];return i=c.apply(this,arguments),i.fn=i.fn||e(!0),t[i.options.strategy].call(this,(function(t){i.fn.call(i.ctx,t)&&n.push(t)}),i.ctx),n},o.prototype.first=function(){var i,n;return i=c.apply(this,arguments),i.fn=i.fn||e(!0),t[i.options.strategy].call(this,(function(t){if(i.fn.call(i.ctx,t))return n=t,!1}),i.ctx),n},o.prototype.drop=function(){var t;return this.isRoot()||(t=this.parent.children.indexOf(this),this.parent.children.splice(t,1),this.parent.model[this.config.childrenPropertyName].splice(t,1),this.parent=void 0,delete this.parent),this},i}()},9661:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex",staticStyle:{height:"100%"}},[i("v-navigation-drawer",{attrs:{bottom:"",fixed:t.isMobile,width:"20vw"},model:{value:t.showMapMenu,callback:function(e){t.showMapMenu=e},expression:"showMapMenu"}},[i("v-card",[i("v-sheet",{staticClass:"pa-1 primary"},[i("div",{staticClass:"d-flex align-center"},[i("v-text-field",{attrs:{label:t.$t("wiki.searchTitle"),flat:"","solo-inverted":"","hide-details":"",clearable:""},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),i("v-btn",{staticClass:"ml-1",attrs:{icon:""},on:{click:t.collapseAll}},[i("v-icon",[t._v("mdi-arrow-collapse-vertical")])],1)],1)]),i("div",{staticClass:"d-flex justify-center"},[i("v-btn-toggle",{staticClass:"my-1",attrs:{color:"primary",mandatory:"","background-color":"transparent"},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}},t._l(t.modes,(function(e,n){return i("v-btn",{key:n,attrs:{value:e.value},on:{click:function(i){return t.clearCurrentStatus(e)}}},[i("div",{staticClass:"d-flex align-center"},[i("item-icon",{attrs:{"icon-class":e.icon}}),i("span",[t._v(t._s(e.title))])],1)])})),1)],1),i("v-card-text",{staticClass:"spot-list"},[i("v-treeview",{directives:[{name:"show",rawName:"v-show",value:"normal"===t.mode,expression:"mode === 'normal'"}],ref:"normalSpotMenu",attrs:{items:t.regionTerritorySpots,"item-key":"id",hoverable:"",dense:"",activatable:"",selectable:"",search:t.searchText,filter:t.spotMenuSearchFn,open:t.openedItems,"selected-color":"primary",color:"select"},on:{"update:open":function(e){t.openedItems=e},"update:active":t.onMenuItemActive},model:{value:t.normalCompletedSpotFishIds,callback:function(e){t.normalCompletedSpotFishIds=e},expression:"normalCompletedSpotFishIds"}}),i("v-treeview",{directives:[{name:"show",rawName:"v-show",value:"spear"===t.mode,expression:"mode === 'spear'"}],ref:"spearSpotMenu",attrs:{items:t.spearRegionTerritorySpots,"item-key":"id",hoverable:"",dense:"",activatable:"",selectable:"",search:t.searchText,filter:t.spotMenuSearchFn,open:t.spearOpenedItems,"selected-color":"primary",color:"select"},on:{"update:open":function(e){t.spearOpenedItems=e},"update:active":t.onMenuItemActive},model:{value:t.spearCompletedSpotFishIds,callback:function(e){t.spearCompletedSpotFishIds=e},expression:"spearCompletedSpotFishIds"}})],1)],1)],1),i("div",{staticStyle:{height:"100%",width:"100%"}},[i("div",{class:"detail-wrapper "+(t.isMobile?"detail-wrapper-mobile":"detail-wrapper-pc")},[!t.type||"region"===t.type||"territory"===t.type&&t.isOceanFishingTerritory?i("div",{staticClass:"d-flex justify-center align-center fill-height"},[i("v-icon",{attrs:{size:"200"}},[t._v("mdi-book-open-page-variant")])],1):"territory"===t.type?i("div",{staticStyle:{width:"100%",height:"100%"}},[i("eorzea-simple-map",{ref:"simpleMap",attrs:{id:t.currentMapInfo.mapFileId,"size-factor":t.currentMapInfo.size_factor,"fishing-spots":t.currentSpotList,"show-fishing-range-helper":"normal"===t.mode}})],1):"spot"!==t.type&&"fish"!==t.type||t.isOceanFishingSpot?t.isOceanFishingSpot?i("div",[i("ocean-fishing-fish-list",{staticClass:"ml-2",attrs:{"fish-list":t.currentFishList}})],1):t._e():i("div",{staticClass:"grid-content"},[t.currentSpotId?i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"my-1",attrs:{cols:"12"}},[i("v-expansion-panels",{attrs:{hover:"",flat:"",tile:"",value:0}},[i("v-expansion-panel",{staticClass:"systemSecondary"},[i("v-expansion-panel-header",{staticClass:"systemSecondary"},[i("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[i("link-list",{attrs:{id:t.currentMapInfo.id,"angler-id":t.currentMapInfo.anglerLocationId,name:t.currentMapInfo.name,mode:"spot","spot-mode":t.mode}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[i("div",{class:"text-subtitle-1 "+(n?"info--text text-decoration-underline":"")},[t._v(" "+t._s(t.currentMapInfo.name)+" ")])]}}],null,!1,2574224276)})],1),i("div",{staticClass:"text-subtitle-1 ml-2"},[t._v(" ("+t._s(t.currentMapInfo.fishSpotPositionText)+") ")]),i("click-helper",{attrs:{"copy-text":t.currentMapInfo.name},on:{click:function(t){t.stopPropagation()}}},[i("v-btn",{staticClass:"my-2",attrs:{text:"",icon:"",title:t.$t("list.item.copyHint")}},[i("v-icon",[t._v("mdi-content-copy")])],1)],1),i("click-helper",{on:{click:function(e){return e.stopPropagation(),t.goToFishingSpotAngelPage(t.currentMapInfo.anglerLocationId,t.currentMapInfo.name)}}},[i("v-btn",{staticClass:"my-2",attrs:{text:"",icon:"",title:t.$t("list.item.linkHint")}},[i("v-icon",[t._v("mdi-link-variant")])],1)],1)],1)]),i("v-expansion-panel-content",[i("div",{staticClass:"d-flex justify-center mt-4",staticStyle:{width:"100%",height:"512px"}},[i("div",{staticStyle:{width:"100%","max-width":"512px"}},[i("eorzea-simple-map",{ref:"simpleMap",attrs:{id:t.currentMapInfo.mapFileId,"size-factor":t.currentMapInfo.size_factor,"fishing-spots":t.currentSpotList,"show-fishing-range-helper":"normal"===t.mode}})],1)])])],1)],1)],1),i("v-col",{staticClass:"my-1",attrs:{cols:"12"}},[i("div",[t.showSpotPredators?i("v-card",{attrs:{color:"info"}},[i("v-card-title",[t._v(" "+t._s(t.$t("gigTip.fishShadow.title"))+" ")]),i("v-card-text",[t._v(" 此处为鱼影，需要刺相应个数的前置鱼才能触发，触发后在小地图上会有鱼影位置提示。"),i("br"),t._v(" 当前版本中，鱼影并没有记录在钓鱼笔记中。"),i("br"),t._v(" 在5.4版本，所有鱼影会加入钓鱼笔记。此处鱼影的名称以及位置均来自于5.4版本数据。"),i("br"),t._v(" 少数位置与当前5.3版本并不一致，请以游戏中的提示为准。"),i("br")]),i("v-card-subtitle",[t._v(" "+t._s(t.$t("gigTip.fishShadow.location"))+" ")]),i("v-card-text",[i("detail-item-map",{attrs:{fish:t.currentSpotPredators[0]}})],1),i("v-card-subtitle",[t._v(" "+t._s(t.$t("gigTip.fishShadow.predators"))+" ")]),i("v-card-text",[i("fish-list",{attrs:{"fish-list":t.currentSpotPredators,"fish-list-time-part":t.fishListTimePart,"fish-list-weather-change-part":t.fishListWeatherChangePart,"show-fish-divider":!1,"hide-spot-column":""},on:{"fish-selected":function(e){return t.onFishClicked(e)}}})],1)],1):t._e()],1)]),i("v-col",{staticClass:"my-1",attrs:{cols:"12"}},[i("v-card",[i("v-card-text",[i("fish-list",{attrs:{"fish-list":t.currentFishList,"fish-list-time-part":t.fishListTimePart,"fish-list-weather-change-part":t.fishListWeatherChangePart,"hide-spot-column":"","hide-predators":""},on:{"fish-selected":function(e){return t.onFishClicked(e)}}})],1)],1)],1),i("v-col",{staticClass:"my-1",attrs:{cols:"12"}},["normal"===t.mode?i("fish-tug-table",{attrs:{value:t.currentFishList}}):i("fish-gig-table",{attrs:{value:t.currentFishList}})],1)],1):t._e()],1)]),t.isMobile?i("div",{staticStyle:{position:"absolute",top:"4px",left:"0",right:"0"}},[i("v-btn",{attrs:{block:"",color:"primary",tile:""},on:{click:function(e){t.showMapMenu=!t.showMapMenu}}},[t._v(" 点击选择地图 ")])],1):t._e()]),i("v-dialog",{attrs:{"max-width":"70vh",fullscreen:t.isMobile,scrollable:""},model:{value:t.isDetailFishWindowOpen,callback:function(e){t.isDetailFishWindowOpen=e},expression:"isDetailFishWindowOpen"}},[i("v-card",[i("v-card-text",[i("fish-detail",{attrs:{fish:t.currentFish,now:t.now,forceShowComponents:t.forceShowComponents,"show-fishing-range-helper":"normal"===t.mode,"hide-map":""}})],1),i("v-card-actions",[i("div",{staticClass:"d-flex flex-column flex-fill"},[i("click-helper",{on:{click:function(e){t.isDetailFishWindowOpen=!1}}},[i("v-btn",{staticClass:"mt-2",attrs:{color:"default",block:"",text:""}},[t._v(" "+t._s(t.$t("general.dialog.close"))+" ")])],1)],1)])],1)],1)],1)},r=[],s=(i("99af"),i("4de4"),i("7db0"),i("5db7"),i("caad"),i("c975"),i("d81d"),i("45fc"),i("a434"),i("73d9"),i("b0c0"),i("b64b"),i("ac1f"),i("2532"),i("466d"),i("1276"),i("2909")),o=i("5530"),a=i("5d8e"),l=i("7511"),c=i("2f62"),d=i("81f6"),h=i("60bb"),u=i.n(h),p=i("d22a"),f=i("1aeb"),m=i("1335"),v=i("73ec"),g=i.n(v),y=i("6053"),b=i("20ed"),I=i("96af"),C=i("08eb"),S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-simple-table",{staticClass:"rounded-lg pt-2 elevation-4 inner",attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v(t._s(t.$t("gigTable.gigFish")))]),t._l(t.fishGigList,(function(e,n){return i("th",{key:e.id,class:{primary:t.currentCol===n}},[i("item-icon",{staticStyle:{margin:"auto"},attrs:{"icon-class":e.icon,title:e.name+"#"+e.id}})],1)}))],2)]),i("tbody",t._l(t.GIGS,(function(e){return i("tr",{key:e},[i("td",[i("item-icon",{attrs:{"icon-class":t.GIG_ICON[e],title:t.$t("gig."+e)}})],1),t._l(t.fishGigList,(function(n,r){return i("td",{key:n.id,staticClass:"text-center",on:{mouseover:function(e){return t.onCellHover(r)},mouseout:function(e){return t.onCellHoverEnd(r)}}},[i("v-icon",{directives:[{name:"show",rawName:"v-show",value:"all"===n.gig||n.gig===e,expression:"spotFish.gig === 'all' || spotFish.gig === gig"}]},[t._v("mdi-fish")])],1)}))],2)})),0)]},proxy:!0}])})},F=[],x=i("8b70"),w={name:"FishGigTable",components:{ItemIcon:x["a"]},props:{value:{type:Array,default:function(){return[]}}},data:function(){return{GIGS:Object.keys(f["a"].GIG_ICON).filter((function(t){return"all"!==t})),GIG_ICON:f["a"].GIG_ICON,currentCol:-1}},computed:{fishGigList:function(){return this.value.map((function(t){return{id:t.id,name:t.name,icon:t.icon,gig:t.gig.type}}))}},methods:{onCellHover:function(t){this.currentCol=t},onCellHoverEnd:function(t){this.currentCol===t&&(this.currentCol=-1)}}},_=w,O=(i("374d"),i("2877")),T=Object(O["a"])(_,S,F,!1,null,"71b253fe",null),k=T.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-simple-table",{staticClass:"rounded-lg pt-2 elevation-4 inner",attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v(t._s(t.$t("tugTable.tugFish")))]),t._l(t.fishTugList,(function(e,n){return i("th",{key:e.id,class:{primary:t.currentCol===n}},[i("item-icon",{staticStyle:{margin:"auto"},attrs:{"icon-class":e.icon,title:e.name+"#"+e.id}})],1)}))],2)]),i("tbody",t._l(t.TUGS,(function(e){return i("tr",{key:e},[i("td",[t._v(t._s(t.$t("tug."+e)))]),t._l(t.fishTugList,(function(n,r){return i("td",{key:n.id,staticClass:"text-center",on:{mouseover:function(e){return t.onCellHover(r)},mouseout:function(e){return t.onCellHoverEnd(r)}}},[i("v-icon",{directives:[{name:"show",rawName:"v-show",value:n.tug===e,expression:"spotFish.tug === tug"}]},[t._v("mdi-fish")])],1)}))],2)})),0)]},proxy:!0}])})},P=[],M={name:"FishTugTable",components:{ItemIcon:x["a"]},props:{value:{type:Array,default:function(){return[]}}},data:function(){return{TUGS:Object.keys(f["a"].TUG_ICON),currentCol:-1}},computed:{fishTugList:function(){return this.value.map((function(t){var e;return{id:t.id,name:t.name,icon:t.icon,tug:null===(e=u.a.last(t.baits))||void 0===e?void 0:e.tug}}))}},methods:{onCellHover:function(t){this.currentCol=t},onCellHoverEnd:function(t){this.currentCol===t&&(this.currentCol=-1)}}},N=M,j=(i("25f2"),Object(O["a"])(N,L,P,!1,null,"5a96fb9b",null)),D=j.exports,A=i("ae17"),$=i("96a9"),E={name:"WikiPage",components:{LinkList:$["a"],ItemIcon:x["a"],DetailItemMap:A["a"],FishTugTable:D,FishGigTable:k,OceanFishingFishList:I["a"],FishList:b["a"],ClickHelper:y["a"],FishDetail:m["a"],EorzeaSimpleMap:d["a"]},props:["lazyTransformedFishDict","fishListTimePart","now","fishListWeatherChangePart","extraFishListTimePart","lazyFishSourceList","lazyTransformedFishList"],data:function(t){return{modes:[{title:t.$t("wiki.mode.normal"),icon:"bg-060027",value:"normal"},{title:t.$t("wiki.mode.spear"),icon:"bg-060037",value:"spear"}],type:void 0,currentTerritoryId:-1,currentSpotId:-1,currentFishId:-1,openedItems:[],normalOpenedItems:[],searchOpenedItems:[],spearOpenedItems:[],spearNormalOpenedItems:[],spearSearchOpenedItems:[],spotDict:{},territoryDict:{},isSettingMode:!1,searching:!1,lazySearchText:"",activeItem:void 0,preActiveItem:void 0,isDetailFishWindowOpen:!1,showMapMenu:!0,root:void 0,searchResults:{text:"",nodeIds:[]},forceShowComponents:void 0,mode:"normal",FISH_ID_TO_WIKI_IDS:f["a"].generateFishId2WikiId(C["a"].FISH)}},computed:Object(o["a"])(Object(o["a"])({showSpotPredators:function(){return"spear"===this.mode&&this.currentFishList.some((function(t){return t.predators.length>0}))},currentSpotPredators:function(){var t,e;return null!==(t=null===(e=this.currentFishList.find((function(t){return t.predators.length>0})))||void 0===e?void 0:e.predators)&&void 0!==t?t:[]},currentRegionTerritorySpots:function(){return"normal"===this.mode?this.regionTerritorySpots:this.spearRegionTerritorySpots},regionTerritorySpots:function(){return this.loadWikiDataOfType("normal")},spearRegionTerritorySpots:function(){return this.loadWikiDataOfType("spear")},isOceanFishingTerritory:function(){return this.currentTerritoryId>=3444&&this.currentTerritoryId<=3447},isOceanFishingSpot:function(){return this.currentSpotId>=237&&this.currentSpotId<=244},searchText:{get:function(){return this.lazySearchText},set:function(t){this.debouncedSearchTextUpdater(t)}},currentMapInfo:function(){var t=u.a.first(this.currentSpotList);return console.debug("Current Spot",t),Object(o["a"])(Object(o["a"])({},t),{},{id:t._id,fishSpotPositionText:f["a"].toPositionText(t),size_factor:t.size_factor,mapFileId:t.mapFileId})},currentSpotList:function(){if(-1===this.currentSpotId&&-1===this.currentTerritoryId)return[];switch(this.type){case"territory":return this.territoryDict["".concat(this.mode,"-").concat(this.currentTerritoryId)].map(this.assembleSpot);case"fish":case"spot":return[this.assembleSpot(this.currentSpotId)];default:return[]}},currentFishList:function(){var t,e,i,n=this;return null===(t=this.spotDict)||void 0===t||null===(e=t[this.currentSpotId])||void 0===e||null===(i=e.fishList)||void 0===i?void 0:i.map((function(t){return n.lazyTransformedFishDict[t]}))},currentFlattenFishList:function(){var t,e;return null!==(t=null===(e=this.currentFishList)||void 0===e?void 0:e.flatMap((function(t){return[t].concat(Object(s["a"])(t.predators))})))&&void 0!==t?t:[]},normalCompletedSpotFishIds:{get:function(){return this.getSpotsOfType("normal")},set:function(t){var e=this.normalCompletedSpotFishIds;this.updateCompleted(e,t)}},spearCompletedSpotFishIds:{get:function(){return this.getSpotsOfType("spear")},set:function(t){var e=this.spearCompletedSpotFishIds;this.updateCompleted(e,t)}},currentFish:function(){return f["a"].assembleFishForDetail(this.currentFishId,this.allFish,this.lazyTransformedFishDict,this.fishListTimePart,this.extraFishListTimePart,this.fishListWeatherChangePart)},isMobile:function(){return this.$vuetify.breakpoint.mobile}},Object(c["d"])({allFish:"fish"})),Object(c["b"])(["getFishingSpotsName","getFishingSpot","getFishCompleted","allCompletedFish"])),watch:{currentRegionTerritorySpots:function(t){t&&t.length>0&&(this.root=(new g.a).parse({name:"root",children:this.regionTerritorySpots}))},currentSpotId:function(t){var e=this;-1!==t&&setTimeout((function(){var t;return null===(t=e.$refs.simpleMap)||void 0===t?void 0:t.resize()}),500)},currentFishId:function(t){t>0&&!this.isOceanFishingSpot&&(this.isDetailFishWindowOpen=!0,this.$emit("fish-selected",{fishId:t}))},isDetailFishWindowOpen:function(t){t||(this.currentFishId=-1)},"$route.query":{handler:function(t){var e,i;console.debug("watch query",t),this.mode=null!==(e=t.mode)&&void 0!==e?e:"normal",this.currentSpotId=+(null!==(i=t.spotId)&&void 0!==i?i:-1),this.type=-1!==this.currentSpotId?"spot":void 0},immediate:!0}},created:function(){var t=this;console.debug("nav with query",this.$route.query),this.openedItems=this.normalOpenedItems,this.spearOpenedItems=this.spearNormalOpenedItems,this.debouncedSearchTextUpdater=u.a.debounce((function(e){var i=null==e?"":e;t.updateOpenItems(i,t.lazySearchText),t.lazySearchText=i}),500)},methods:Object(o["a"])({clearCurrentStatus:function(t){t!==this.mode&&(this.type=void 0,this.currentTerritoryId=-1,this.currentSpotId=-1,this.currentFishId=-1,this.openedItems=this.normalOpenedItems=[],this.searchOpenedItems=[],this.spearOpenedItems=this.spearNormalOpenedItems=[],this.spearSearchOpenedItems=[])},getSpotsOfType:function(t){var e=this;return this.allCompletedFish.flatMap((function(i){var n=e.FISH_ID_TO_WIKI_IDS[i];if(n){var r=n[0].split("-")[3],s=e.lazyTransformedFishDict[r].type;return s===t?n:[]}var o,a=e.lazyTransformedFishDict[i];return(null===a||void 0===a?void 0:a.type)===t&&null!==(o=null===a||void 0===a?void 0:a.fishingSpots.map((function(t){return"spot-".concat(t.fishingSpotId,"-fish-").concat(i)})))&&void 0!==o?o:[]}))},updateCompleted:function(t,e){var i=this;if(!u.a.isEqual(u.a.sortBy(t),u.a.sortBy(e))){var n=u.a.difference(t,e).map((function(t){return i.extractFishId(t)})),r=u.a.difference(e,t).map((function(t){return i.extractFishId(t)}));n.length>0?this.batchSetFishCompleted({fishIds:n,completed:!1}):r.length>0&&this.batchSetFishCompleted({fishIds:r,completed:!0})}},loadWikiDataOfType:function(t){var e=this;return this.lazyTransformedFishDict&&Object.keys(this.lazyTransformedFishDict).length>0?("normal"===t?a:C["a"].SPEAR_REGION_TERRITORY_POINT).filter((function(t){return null!=t.id})).map((function(i){return{id:"region-"+i.id,name:l[i.id],children:i.territories.map((function(n){return e.territoryDict["".concat(t,"-").concat(n.id)]=n.spots.map((function(t){return t.id})),{id:"territory-"+n.id,name:l[n.id],children:n.spots.map((function(r){var s=r.fishList.filter((function(t){var i=e.lazyTransformedFishDict[t];return i||console.warn("fish data missing for",t),i}));return e.spotDict[r.id]={spotId:r.id,territoryId:n.id,regionId:i.id,fishList:s},{id:"spot-"+r.id,name:"normal"===t?e.getFishingSpotsName(r.id):l[C["a"].SPEAR_FISH_GATHERING_POINTS[r.id].placeNameId],children:s.map((function(t){return{id:"spot-"+r.id+"-fish-"+t,name:e.lazyTransformedFishDict[t].name}}))}}))}}))}})):[]},goToFishingSpotAngelPage:function(t,e){f["a"].goToFishingSpotAngelPage(t,e,this.isMobile,this.showSnackbar)},toPos:function(t){return 0===t?"first":t===this.currentFlattenFishList.length-1?"last":"inside"},getPathNodesOf:function(t){var e,i,n,r,s;return null!==(e=null===(i=this.root)||void 0===i||null===(n=i.first((function(e){return null!=t&&e.model.id===t})))||void 0===n||null===(r=n.getPath())||void 0===r||null===(s=r.map((function(t){return t.model.id})))||void 0===s?void 0:s.filter((function(t){return null!=t})))&&void 0!==e?e:[]},updateOpenItems:function(t,e){if(""===t&&""!==e){var i=this.getPathNodesOf(this.activeItem);"normal"===this.mode?(this.openedItems=u.a.uniq([].concat(Object(s["a"])(this.normalOpenedItems),Object(s["a"])(i))),this.searchOpenedItems=[]):(this.spearOpenedItems=u.a.uniq([].concat(Object(s["a"])(this.spearNormalOpenedItems),Object(s["a"])(i))),this.spearSearchOpenedItems=[]),this.searching=!1}else""!==t&&""===e&&("normal"===this.mode?(this.normalOpenedItems=this.openedItems,this.openedItems=this.searchOpenedItems):(this.spearNormalOpenedItems=this.spearOpenedItems,this.spearOpenedItems=this.spearSearchOpenedItems),this.searching=!0)},onFishClicked:function(t){var e=t.fishId,i=t.components;this.currentFishId=e,this.forceShowComponents=i},onMapCardResized:function(){var t=this;setTimeout((function(){var e;return null===(e=t.$refs.simpleMap)||void 0===e?void 0:e.resize()}),300)},toggleSettingMode:function(){this.isSettingMode=!this.isSettingMode},onMenuItemActive:function(t){var e="normal"===this.mode?this.openedItems:this.spearOpenedItems;if(0!==t.length){this.activeItem=t[0];var i=this.activeItem.split("-");switch(4===i.length?this.type=i[2]:this.type=i[0],this.type){case"region":break;case"territory":this.currentTerritoryId=+i[1];break;case"spot":this.currentSpotId=+i[1];break;case"fish":this.currentSpotId=+i[1],this.currentFishId=+i[3];break;default:console.error("not supported")}"spot"!==this.type?(e.includes(this.activeItem)||e.push(this.activeItem),this.preActiveItem=this.activeItem):this.preActiveItem=null}else null!=this.preActiveItem&&e.splice(e.indexOf(this.preActiveItem),1)},extractFishId:function(t){return+t.split("-")[3]},spotMenuSearchFn:function(t,e,i){var n,r=t[i];return"zh-CN"===this.$i18n.locale?(null==r&&console.log(t.id),n=!1!==p["a"].match(null!==r&&void 0!==r?r:"",e)):n=r.toLowerCase().indexOf(e.toLowerCase())>-1,n},expandAll:function(){var t,e;null===(t=this.$refs.normalSpotMenu)||void 0===t||t.updateAll(!0),null===(e=this.$refs.spearSpotMenu)||void 0===e||e.updateAll(!0)},collapseAll:function(){var t,e;null===(t=this.$refs.normalSpotMenu)||void 0===t||t.updateAll(!1),null===(e=this.$refs.spearSpotMenu)||void 0===e||e.updateAll(!1)},assembleSpot:function(t){if("normal"===this.mode){var e=this.getFishingSpot(t);return Object(o["a"])(Object(o["a"])({},e),{},{name:f["a"].getName(e),zone:l[e.territoryId]})}var i=C["a"].SPEAR_FISH_GATHERING_POINTS[t];return Object(o["a"])(Object(o["a"])({},i),{},{name:f["a"].getName(i),zone:l[i.regionPlaceNameId]})}},Object(c["c"])(["setFishCompleted","batchSetFishCompleted","showSnackbar"]))},W=E,z=(i("ee5b"),Object(O["a"])(W,n,r,!1,null,"53f49aea",null));e["default"]=z.exports},"96af":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.weatherFilter?i("div",{staticClass:"d-flex justify-space-between align-center"},[i("v-radio-group",{attrs:{row:""},model:{value:t.currentWeather,callback:function(e){t.currentWeather=e},expression:"currentWeather"}},t._l(t.weathers,(function(e){return i("v-radio",{key:e.id,attrs:{value:e.id},scopedSlots:t._u([{key:"label",fn:function(){return[e.icon?i("div",{class:e.icon,attrs:{title:e.name}}):t._e(),i("div",{staticClass:"ml-1"},[t._v(t._s(e.name))])]},proxy:!0}],null,!0)})})),1)],1):t._e(),i("v-data-table",{staticClass:"elevation-4 mt-2",attrs:{headers:t.oceanFishingHeaders,items:t.transformFishList,"items-per-page":20,"hide-default-footer":"","multi-sort":"",dense:t.dense},scopedSlots:t._u([{key:"item.name",fn:function(e){var n=e.item;return[i("div",{staticClass:"d-flex align-center"},[i("toggle-button",{attrs:{value:n.completed},on:{input:function(e){return t.setCompleted(n.id,e)}}}),i("item-icon",{staticStyle:{"min-width":"36px"},attrs:{"icon-class":n.icon,title:n.name,small:t.dense}}),i("div",{attrs:{title:n.name+"#"+n.id}},[t._v(t._s(n.name))])],1)]}},{key:"item.baitId",fn:function(e){var n=e.item;return[i("div",{staticClass:"d-flex align-center justify-center"},[n.hasPredators?[t._l(n.predators,(function(e,n){return i("div",{key:n,staticClass:"d-flex align-center ml-1"},[i("item-icon",{attrs:{"icon-class":e.icon,small:t.dense}}),i("span",[t._v("X")]),i("v-badge",{attrs:{content:e.requiredCnt,color:"predatorCnt black--text",inline:"",bottom:"",bordered:""}})],1)})),i("div",{class:n.predatorsIcon,staticStyle:{"margin-left":"2px"}})]:t._e(),i("item-icon",{attrs:{"data-ck-item-id":t.toItemIdIfExisted(n.bait.id,n.bait.name),"icon-class":n.bait.icon,title:n.bait.name,small:t.dense}}),n.baitExtra?[i("div",[t._v("或")]),i("item-icon",{attrs:{"data-ck-item-id":t.toItemIdIfExisted(n.baitExtra.id,n.baitExtra.name),"icon-class":n.baitExtra.icon,title:n.baitExtra.name,small:t.dense}})]:t._e()],2)]}},{key:"item.tugIcon",fn:function(e){var n=e.item;return[i("div",{staticClass:"d-flex align-center justify-center"},[i("v-badge",{directives:[{name:"show",rawName:"v-show",value:null!=n.tug,expression:"item.tug != null"}],attrs:{color:t.TUG_ICON_COLOR[n.tugIcon],content:n.tugIcon,inline:""}})],1)]}},{key:"item.biteTimeForSort",fn:function(e){var n=e.item;return[i("div",{staticClass:"d-flex align-center justify-center"},[i("span",[t._v(t._s(n.biteTimeMin))]),n.biteTimeMax?[i("span",{staticClass:"mx-1"},[t._v("-")]),i("span",[t._v(t._s(n.biteTimeMax))])]:t._e()],2)]}},{key:"item.notAvailableWeatherSet",fn:function(e){var n=e.item;return[i("div",{staticClass:"d-flex align-center justify-center"},[n.hasWeatherConstraint||n.hasRealWeatherConstraint?i("div",[t._v(" 在 ")]):i("div",[t._v(" 无要求 ")]),t._l(n.notAvailableWeatherSetDetail,(function(t,e){return i("div",{key:e,staticClass:"d-flex flex-column align-center",attrs:{title:t.name}},[i("div",{class:t.icon,attrs:{title:t.name}})])})),n.hasWeatherConstraint?i("div",[t._v(" 不出现 ")]):n.hasRealWeatherConstraint?i("div",{attrs:{title:"条件无法满足"}},[t._v(" 不可钓 ")]):t._e()],2)]}},{key:"item.time",fn:function(e){var n=e.item;return[i("div",{staticClass:"d-flex align-center justify-center"},[0===n.time?i("div",[t._v(t._s(n.timeText))]):i("v-icon",{attrs:{title:n.timeText}},[t._v(t._s(n.timeIcon))])],1)]}},{key:"item.bonusId",fn:function(e){var n=e.item;return[i("div",{staticClass:"d-flex align-center justify-center"},[0!==n.bonusId?i("item-icon",{attrs:{title:n.bonus.name,"icon-class":n.bonus.icon,small:t.dense}}):t._e()],1)]}}])})],1)},r=[],s=(i("99af"),i("a623"),i("4de4"),i("caad"),i("d81d"),i("a9e3"),i("2532"),i("5530")),o=i("8b70"),a=i("2f62"),l=i("9197"),c=i("1aeb"),d=i("08eb"),h={name:"OceanFishingFishList",components:{ToggleButton:l["a"],ItemIcon:o["a"]},props:{dense:{type:Boolean,default:!1},fishList:{type:Array,default:function(){return[]}},weatherFilter:{type:Boolean,default:!1},weatherSet:{type:Array,default:function(){return[]}},shiftFilter:{type:Boolean,default:!1},shift:{type:Number,default:void 0}},data:function(){return{TUG_ICON_COLOR:c["a"].TUG_ICON_COLOR,currentWeather:0,currentShift:this.shift}},computed:Object(s["a"])({weathers:function(){return this.weatherSet.map((function(t){var e=d["a"].OCEAN_FISHING_WEATHER[t];return{id:e._id,name:c["a"].getName(e),icon:c["a"].iconIdToClass(e.icon)}})).concat([{id:0,name:"无特定",icon:null}])},filteredFishList:function(){var t=this;return this.fishList.filter((function(e){return(!t.weatherFilter||!e.notAvailableWeatherSet.includes(t.currentWeather))&&(!t.shiftFilter||null==t.currentShift||0===e.time||e.time===t.currentShift+1)}))},oceanFishingHeaders:function(){return[{text:"名称",align:"start",sortable:!1,value:"name",width:"15%"},{text:"鱼饵",align:"center",sortable:!0,value:"baitId",width:"15%"},{text:"杆型",align:"center",sortable:!0,value:"tugIcon",width:"5%"},{text:"咬钩时间",align:"center",sortable:!0,value:"biteTimeForSort",width:"10%"},{text:"渔分",align:"center",sortable:!0,value:"points",width:"5%"},{text:"双提",align:"center",sortable:!0,value:"doubleHook",width:"5%"},this.restrictColumnHeader,{text:"分类",align:"center",sortable:!0,value:"bonusId",width:"10%"}]},transformFishList:function(){var t=this;return this.filteredFishList.map((function(e){return Object(s["a"])({completed:t.getFishCompleted(e.id)},e)}))},isSpectralCurrentSpot:function(){return this.fishList.every((function(t){return!t.hasWeatherConstraint}))},restrictColumnHeader:function(){return this.isSpectralCurrentSpot?{text:"时间",align:"center",sortable:!0,value:"time",width:"15%"}:{text:"天气",align:"center",sortable:!1,value:"notAvailableWeatherSet",width:"15%"}}},Object(a["b"])(["getFishCompleted"])),watch:{shift:function(t){this.currentShift=t},weatherSet:function(){this.currentWeather=0}},methods:Object(s["a"])({clearWeatherFilter:function(){this.currentWeather=null},setCompleted:function(t,e){this.setFishCompleted({fishId:t,completed:e})},toItemIdIfExisted:c["a"].toItemIdIfExisted},Object(a["c"])(["setFishCompleted"]))},u=h,p=i("2877"),f=Object(p["a"])(u,n,r,!1,null,"7ad593cc",null);e["a"]=f.exports},a4bd:function(t,e,i){},aeae:function(t,e,i){},ee5b:function(t,e,i){"use strict";i("5d77")},f742:function(t,e){t.exports=function(){"use strict";function t(t,e,i){var n,r;for(n=0,r=e.length;n<r;n++)if(t(e[n],i)>0)break;return n}return t}()}}]);