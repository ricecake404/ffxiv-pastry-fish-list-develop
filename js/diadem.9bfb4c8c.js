(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["diadem"],{"53ba":function(t,i,e){"use strict";e("57c7")},"57c7":function(t,i,e){},afcb:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-container",{class:"detail-wrapper "+(t.isMobile?"detail-wrapper-mobile":"detail-wrapper-pc"),attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-title",[e("div",[t._v("云冠群岛")])]),e("v-card-text",[e("v-row",[e("v-col",{staticClass:"col-12 col-md-8"},[e("div",[e("v-tabs",{model:{value:t.versionIndex,callback:function(i){t.versionIndex=i},expression:"versionIndex"}},[e("v-tab",[t._v("第二期重建")]),e("v-tab",[t._v("第三期重建")])],1),e("v-card",{attrs:{color:"system"}},[e("v-card-title",[t._v(t._s(t.simpleTip.title))]),e("v-card-text",[e("div",{domProps:{innerHTML:t._s(t.simpleTip.content)}})]),e("v-divider"),e("v-card-text",[t._v(" 攻略及下方资料参考： "),e("div",{staticClass:"text-subtitle-1"},[e("a",{attrs:{href:t.simpleTip.reference.link,target:"_blank"}},[t._v(" "+t._s(t.simpleTip.reference.title)+" ")])]),e("div",[t._v(" "+t._s(t.simpleTip.reference.author)+" ")])])],1)],1)]),e("v-col",{staticClass:"col-12 col-md-4"},[e("v-img",{attrs:{src:t.tipMap}})],1)],1)],1)],1)],1),e("v-col",[e("v-expansion-panels",{attrs:{focusable:"",value:t.spotPanels,multiple:""}},t._l(t.diademSpots,(function(i,s){return e("v-expansion-panel",{key:s},[e("v-expansion-panel-header",[t._v(t._s(i.fishingSpotName)+" ")]),e("v-expansion-panel-content",[e("diadem-fish-list",{attrs:{"spot-data":i}})],1)],1)})),1)],1)],1)],1)},a=[],n=(e("99af"),e("4de4"),e("7db0"),e("caad"),e("d81d"),e("fb6a"),e("2532"),e("5530")),l=e("5d8e"),r=e("60bb"),c=e.n(r),o=e("2f62"),d=e("1aeb"),v=e("3b6f"),p=e("7a7d"),u=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e(t.component,{tag:"component",attrs:{"spot-data":t.spotData}})],1)},m=[],h=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"d-flex flex-wrap"},[e("div",{staticClass:"col-12"},[e("v-simple-table",[e("colgroup",[e("col",{staticStyle:{width:"25%"},attrs:{span:"1"}}),e("col",{staticStyle:{width:"8%"},attrs:{span:"1"}}),e("col",{staticStyle:{width:"6%"},attrs:{span:"1"}}),e("col",{staticStyle:{width:"5%"},attrs:{span:"1"}}),e("col",{staticStyle:{width:"5%"},attrs:{span:"1"}}),e("col",{staticStyle:{width:"7%"},attrs:{span:"1"}}),e("col",{staticStyle:{width:"32%"},attrs:{span:"1"}}),e("col",{staticStyle:{width:"12%"},attrs:{span:"1"}})]),e("thead",[e("tr",[e("th",[t._v(" 名称 ")]),e("th",{staticClass:"text-center"},[t._v(" 天气 ")]),e("th",{staticClass:"text-center"},[t._v("天穹街"),e("br"),t._v("振兴票")]),e("th",{staticClass:"text-center"},[t._v(" 技巧点 ")]),e("th",{staticClass:"text-center"},[t._v(" 双提 ")]),e("th",{staticClass:"text-center"},[t._v(" 咬钩(s) ")]),e("th",[t._v(" 钓法 ")]),e("th",[t._v(" 分解 ")])])]),e("tbody",t._l(t.spotData.fishList,(function(i){return e("tr",{key:i.id},[e("td",[e("div",{staticClass:"d-flex align-center"},[e("item-icon",{staticStyle:{"min-width":"48px"},attrs:{"icon-class":i.icon}}),e("div",{staticClass:"d-flex flex-column ml-1"},[e("div",{staticClass:"text-subtitle-1",attrs:{title:i.name+"#"+i.id}},[t._v(" "+t._s(i.name)+" ")]),e("div",{staticClass:"d-flex"},[e("click-helper",{attrs:{"copy-text":i.name},on:{click:function(t){t.stopPropagation()}}},[e("v-btn",{attrs:{text:"",icon:"",small:"",title:t.$t("list.item.copyHint")}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-content-copy")])],1)],1),e("click-helper",{on:{click:function(e){return e.stopPropagation(),t.goToFishAngelPage(i.anglerFishId)}}},[e("v-btn",{attrs:{text:"",icon:"",small:"",title:t.$t("list.item.linkHint")}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-link-variant")])],1)],1)],1)])],1)]),e("td",[i.hasWeatherConstraint?e("div",{staticClass:"d-flex justify-center"},t._l(i.weatherSetDetail,(function(i,s){return e("div",{key:s,staticClass:"d-flex flex-column align-center",attrs:{title:i.name}},[e("div",{class:i.icon,attrs:{title:i.name}}),e("div",{staticClass:"ml-1"},[t._v(t._s(i.name))])])})),0):t._e()]),e("td",[e("div",{staticClass:"d-flex align-center justify-end"},[e("div",{staticClass:"text-subtitle-1 mr-1"},[t._v(t._s(i.scrips))]),e("div",[e("v-img",{attrs:{src:t.scripsIcon,width:"36",height:"36"}})],1)])]),e("td",[e("div",{staticClass:"d-flex align-center justify-end"},[e("div",{staticClass:"text-subtitle-1 mr-1"},[t._v(t._s(i.points))]),e("div",[e("v-icon",[t._v("mdi-plus-circle")])],1)])]),e("td",[e("div",{staticClass:"d-flex justify-center align-center"},[e("div",{staticClass:"mr-1"},[t._v(t._s(i.doubleHook?i.doubleHook:"-"))]),i.doubleHookTip?e("v-tooltip",{attrs:{right:"",color:"secondary"},scopedSlots:t._u([{key:"activator",fn:function(i){var s=i.on,a=i.attrs;return[e("v-icon",t._g(t._b({attrs:{small:""}},"v-icon",a,!1),s),[t._v(" mdi-help-circle-outline ")])]}}],null,!0)},[e("div",[t._v(t._s(i.doubleHookTip))])]):t._e()],1)]),e("td",{staticClass:"text-center"},[t._v(" "+t._s(i.biteTimeText)+" ")]),e("td",[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"d-flex align-center"},[i.baitsExtra.length>0?e("i",{staticClass:"xiv square-a",attrs:{title:"一种可能情况A"}}):t._e(),e("fish-bait-list",{attrs:{baits:i.baits}})],1),i.baitsExtra.length>0?[e("div",{staticClass:"d-flex align-center"},[e("i",{staticClass:"xiv square-b",attrs:{title:"另一种可能情况B"}}),e("fish-bait-list",{attrs:{baits:i.baitsExtra}})],1)]:t._e()],2)]),e("td",{staticClass:"text-left"},[t._v(" "+t._s(i.desynthesis)+" ")])])})),0)])],1),e("div",{staticClass:"col-12"},[e("detail-item-map",{attrs:{fish:t.toFishingSpotData(t.spotData),expanded:!1}})],1)])},f=[],b=e("6053"),x=e("8bb8"),g=e("ae17"),_=e("8b70"),C={components:{ClickHelper:b["a"],FishBaitList:x["a"],DetailItemMap:g["a"],ItemIcon:_["a"]},props:["spotData"],data:function(){return{scripsIcon:p["a"].getImgUrl("skybuilders-scrips-065073-36x36.png")}},methods:{toFishingSpotData:function(t){return{id:-1,fishingSpots:[t]}},goToFishAngelPage:d["a"].goToFishAngelPage}},S={name:"DiademFishListLarge",mixins:[C]},y=S,k=e("2877"),w=Object(k["a"])(y,h,f,!1,null,"04a70b28",null),I=w.exports,T=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-row",{staticClass:"d-flex flex-wrap",attrs:{"no-gutters":""}},[e("div",{staticClass:"col-12"},[e("v-simple-table",[e("colgroup",[e("col",{staticStyle:{width:"25%"},attrs:{span:"1"}}),e("col",{staticStyle:{width:"75%"},attrs:{span:"1"}})]),e("tbody",t._l(t.spotData.fishList,(function(i){return e("tr",{key:i.id},[e("td",[e("div",{staticClass:"d-flex flex-column align-center my-1"},[e("div",{staticStyle:{position:"relative"}},[e("item-icon",{staticStyle:{"min-width":"48px"},attrs:{"icon-class":i.icon}}),i.hasWeatherConstraint?e("div",{staticStyle:{position:"absolute",right:"-10px",bottom:"-8px"}},t._l(i.weatherSetDetail,(function(t,i){return e("div",{key:i,staticClass:"d-flex flex-column align-center",attrs:{title:t.name}},[e("div",{class:t.icon,attrs:{title:t.name}})])})),0):t._e()],1),e("div",{staticClass:"text-subtitle-1",attrs:{title:i.name+"#"+i.id}},[t._v(" "+t._s(t.toSimpleName(i.name))+" ")]),e("div",{staticClass:"d-flex align-center"},[e("v-badge",{attrs:{inline:"",content:i.version+"期",color:t.versionColorOf(i.version)}}),e("click-helper",{attrs:{"copy-text":i.name},on:{click:function(t){t.stopPropagation()}}},[e("v-btn",{attrs:{text:"",icon:"",small:"",title:t.$t("list.item.copyHint")}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-content-copy")])],1)],1),e("click-helper",{on:{click:function(e){return e.stopPropagation(),t.goToFishAngelPage(i.anglerFishId)}}},[e("v-btn",{attrs:{text:"",icon:"",small:"",title:t.$t("list.item.linkHint")}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-link-variant")])],1)],1)],1)])]),e("td",[e("div",[e("div",{staticClass:"d-flex flex-column"},[e("div",{staticClass:"d-flex align-center"},[i.baitsExtra.length>0?e("i",{staticClass:"xiv square-a",attrs:{title:"一种可能情况A"}}):t._e(),e("fish-bait-list",{attrs:{baits:i.baits}})],1),i.baitsExtra.length>0?[e("div",{staticClass:"d-flex align-center"},[e("i",{staticClass:"xiv square-b",attrs:{title:"另一种可能情况B"}}),e("fish-bait-list",{attrs:{baits:i.baitsExtra}})],1)]:t._e()],2),e("div",[e("v-divider"),e("v-row",{attrs:{"no-gutters":""}},[""!==i.biteTimeText?e("v-col",{staticClass:"text-center"},[t._v(" 咬钩："+t._s(i.biteTimeText)+" ")]):t._e(),0!==i.doubleHook?e("v-col",{staticClass:"text-center"},[t._v(" 双提 "+t._s(i.doubleHook?i.doubleHook:"-")+" ")]):t._e()],1),e("v-divider"),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"d-flex align-center justify-end"},[e("div",{staticClass:"mr-1"},[t._v(t._s(i.scrips))]),e("div",[e("v-img",{attrs:{src:t.scripsIcon,width:"24",height:"24"}})],1)]),e("v-col",{staticClass:"d-flex align-center justify-end"},[e("div",{staticClass:"mr-1"},[t._v(t._s(i.points))]),e("div",[e("v-icon",{attrs:{small:""}},[t._v("mdi-plus-circle")])],1)])],1)],1)])])])})),0)])],1),e("div",{staticClass:"col-12"},[e("detail-item-map",{attrs:{fish:t.toFishingSpotData(t.spotData),expanded:!1}})],1)])},F=[],P=(e("ac1f"),e("466d"),{name:"DiademFishListSmall",mixins:[C],methods:{toSimpleName:function(t){return t.match("[一-鿿]+")?"".concat(t.slice(9)):"".concat(t.slice(21))},versionColorOf:function(t){switch(t){case 2:return"primary";case 3:return"info";default:return"primary"}}}}),D=P,L=Object(k["a"])(D,T,F,!1,null,"79fd26e7",null),j=L.exports,H={name:"DiademFishList",components:{DiademFishListLarge:I,DiademFishListSmall:j},props:["spotData"],computed:{isMobile:function(){return this.$vuetify.breakpoint.mobile},component:function(){var t=this.isMobile?"small":"large";switch(t){case"large":return"DiademFishListLarge";case"small":return"DiademFishListSmall";default:return"FishInfoRowLarge"}}}},E=H,M=Object(k["a"])(E,u,m,!1,null,"088aff40",null),O=M.exports,$={name:"DiademPage",components:{DiademFishList:O},data:function(){return{regionTerritorySpots:l,tipMaps:[p["a"].getImgUrl("diadem-tip-map-grade2.png"),p["a"].getImgUrl("diadem-tip-map-grade3.png")],versionIndex:1}},computed:Object(n["a"])(Object(n["a"])({isMobile:function(){return this.$vuetify.breakpoint.mobile},allFish:function(){return this.fish},version:function(){return[2,3,4][this.versionIndex]},simpleTip:function(){return v["a"].SIMPLE_TIPS[this.versionIndex]},tipMap:function(){return this.tipMaps[this.versionIndex]},versionSpots:function(){switch(this.version){case 2:return[10001,10002,10003,10004,10005,10006,10007];case 3:return[10008,10009,10010,10011,10012,10013,10014,10015,10016];default:return[]}},diademSpots:function(){var t=this;return c.a.sortBy(this.regionTerritorySpots.find((function(t){return null===t.id})).territories[0].spots.filter((function(i){return t.versionSpots.includes(i.id)})),"id").map((function(i){var e=t.getFishingSpot(i.id);return Object(n["a"])(Object(n["a"])({},i),{},{fishingSpot:e,fishingSpotName:t.getFishingSpotsName(i.id),fishingSpotId:i.id,fishSpotPositionText:d["a"].toPositionText(e),fishList:i.fishList.map((function(e){var s,a=v["a"].FISH[e],l=a.bestCatchPathGroup?a.bestCatchPathGroup[i.id].bestCatchPath:a.bestCatchPath,r=a.bestCatchPathGroup?a.bestCatchPathGroup[i.id].bestCatchPathExtra:a.bestCatchPathExtra,c=null!==(s=null===a||void 0===a?void 0:a.weatherSet)&&void 0!==s?s:[];return Object(n["a"])(Object(n["a"])({},a),{},{id:e,name:t.getItemName(e),icon:t.getItemIconClass(e),points:a.points[t.versionIndex],scrips:a.scrips[t.versionIndex],hasWeatherConstraint:c.length>0,weatherSetDetail:t.getWeather(c),baits:t.getBaits(a,l,v["a"].FISH),baitsExtra:r.length>0?t.getBaits(a,r,v["a"].FISH):[],biteTimeText:t.toBiteTimeText(a.biteMin,a.biteMax)})}))})}))},spotPanels:function(){return this.isMobile?[]:this.diademSpots.map((function(t,i){return i})).slice(3)}},Object(o["d"])(["fish","items"])),Object(o["b"])(["getFishingSpot","getFishingSpotsName","getItemName","getItemIconClass","getWeather","getBaits"])),methods:{toBiteTimeText:function(t,i){return null==t&&null==i?"":null==t?"< ".concat(i):null==i?"> ".concat(t):"".concat(t," - ").concat(i)}}},B=$,N=(e("53ba"),Object(k["a"])(B,s,a,!1,null,"421a5fb8",null));i["default"]=N.exports}}]);