(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["oceanFishing"],{"0eaa":function(t,e,n){"use strict";n("d285")},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("6b75");function a(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=n("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||o(t)||Object(r["a"])(t)||s()}},"5db7":function(t,e,n){"use strict";var i=n("23e7"),a=n("a2bf"),o=n("7b0b"),r=n("50c4"),s=n("1c0b"),c=n("65f0");i({target:"Array",proto:!0},{flatMap:function(t){var e,n=o(this),i=r(n.length);return s(t),e=c(n,0),e.length=a(e,n,n,i,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},"73d9":function(t,e,n){var i=n("44d2");i("flatMap")},a2bf:function(t,e,n){"use strict";var i=n("e8b5"),a=n("50c4"),o=n("0366"),r=function(t,e,n,s,c,l,m,u){var v,h=c,f=0,d=!!m&&o(m,u,3);while(f<s){if(f in n){if(v=d?d(n[f],f,e):n[f],l>0&&i(v))h=r(t,e,v,a(v.length),h,l-1)-1;else{if(h>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[h]=v}h++}f++}return h};t.exports=r},c944:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{class:"detail-wrapper "+(t.isMobile?"detail-wrapper-mobile":"detail-wrapper-pc")},[n("v-card",[n("v-card-title",[t._v("海钓航班时间表")]),n("div",[n("ocean-fishing-time-table",{attrs:{voyages:t.voyages,targetOptions:t.targetOptions},on:{filterChanged:t.filterChanged}})],1)],1)],1)},a=[],o=(n("99af"),n("4de4"),n("5db7"),n("d81d"),n("73d9"),n("b0c0"),n("5530")),r=(n("a630"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("2909")),s=n("60bb"),c=n.n(s),l=(n("caad"),n("a15b"),n("2532"),6e4),m=60*l,u=[0,1,2,3,4,5],v=[0,1,2,3,4,5,0,1,2,3,4,5,1,0,3,2,5,4,1,0,3,2,5,4,2,3,4,5,0,1,2,3,4,5,0,1,3,2,5,4,1,0,3,2,5,4,1,0,4,5,0,1,2,3,4,5,0,1,2,3,5,4,1,0,3,2,5,4,1,0,3,2];function h(t){var e=t-t%(2*m);return t%(2*m)<15*l?e:e+2*m}function f(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u;null!=n&&0!==n.length||(n=u);for(var i=64,a=Math.floor(Math.floor(t/m)/2),o=t-t%(2*m),r=[],s=0;r.length<e;s++){var c=v[(a+i+s)%v.length];n.includes(c)&&r.push({time:o+2*s*m,voyageType:c})}return r}var d=["梅尔托尔海峡北","罗塔诺海海面","加拉迪翁湾外海","梅尔托尔海峡南"],p=["早","午","晚"],g=[[3,2,0],[2,3,1]],y={4:{voyageSimpleName:"梅晚",target:"海龙成就 + ※珊瑚蝠鲼",comment:"蝠鲼可以1区跳跳乐",voyageDetail:"梅尔托尔海峡南(夜) - 加拉迪翁湾外海(日) - 梅尔托尔海峡北(夕)"},5:{voyageSimpleName:"罗晚",target:"※索蒂斯 + ※石骨鱼",comment:"索蒂斯可以1区跳跳乐，2区可以冲海龙成就",voyageDetail:"加拉迪翁湾外海(夜) - 梅尔托尔海峡南(日) - 罗塔诺海海面(夕)"},0:{voyageSimpleName:"梅早",target:"章鱼成就",comment:"也比较适合冲分",voyageDetail:"梅尔托尔海峡南(日) - 加拉迪翁湾外海(夕) - 梅尔托尔海峡北(夜)"},1:{voyageSimpleName:"罗早",target:"水母成就 + 冲分推荐",comment:"由于水母成就相对简单，更建议梅午1区跳跳乐",voyageDetail:"加拉迪翁湾外海(日) - 梅尔托尔海峡南(夕) - 罗塔诺海海面(夜)"},2:{voyageSimpleName:"梅午",target:"※索蒂斯 + ※依拉丝莫龙",comment:"1区可以水母成就跳跳乐",voyageDetail:"梅尔托尔海峡南(夕) - 加拉迪翁湾外海(夜) - 梅尔托尔海峡北(日)"},3:{voyageSimpleName:"罗午",target:"鲨鱼成就 + ※珊瑚蝠鲼",comment:"可以和鲨鱼队一起冲分",voyageDetail:"加拉迪翁湾外海(夕) - 梅尔托尔海峡南(夜) - 罗塔诺海海面(日)"}},b=[{achievements:[2562,2563],comment:"最佳冲分航线，同时适合钓章鱼成就"},{achievements:[2562,2565],comment:"次佳冲分路线，同时适合钓水母成就"},{achievements:[],comment:"航线上有两条蓝鱼，没起蓝鱼的话冲分有些困难"},{achievements:[2562,2564],comment:"还不错的冲分航线，同时适合钓鲨鱼成就"},{achievements:[2566],comment:"比较一般的航线，同时适合钓海马成就"},{achievements:[],comment:"航线上有两条蓝鱼，除非欧皇小队起3条蓝鱼否则冲分会很困难"}],T={29791:{_id:29791,name_chs:"依拉丝莫龙",icon:28012},29790:{_id:29790,name_chs:"石骨鱼",icon:28011},29788:{_id:29788,name_chs:"索蒂斯",icon:28009},29789:{_id:29789,name_chs:"珊瑚蝠鲼",icon:28010}},_=[{blueFish:29791},{blueFish:null},{blueFish:null},{blueFish:null},{blueFish:null},{blueFish:29790},{blueFish:null},{blueFish:null},{blueFish:null},{blueFish:null},{blueFish:29788},{blueFish:29789}];function O(t){return t>>>1}function S(t){return t%2}function C(t,e){return(e<<2)+t}function x(t){return t%4}function N(t){return t>>>2}function I(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:13,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u;return f(t,e,n).map((function(t){var e=t.voyageType,n=g[S(e)],i=O(e),a=n.map((function(t,e){var n=(i+e)%3;return{locationName:d[t]+"("+p[n]+")",blueFish:_[C(t,n)].blueFish}}));return Object(o["a"])(Object(o["a"])(Object(o["a"])({},t),y[t.voyageType]),{},{voyageTip:b[e],locationTips:a,shift:{type:i,name:d[n[2]]}})}))}function F(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:13,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u;return I(t,e,n).map((function(t){return{time:new Intl.DateTimeFormat("zh-Hans-CN",{formatMatcher:"basic",timeZone:"Asia/Shanghai",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(new Date(t.time)),name:t.voyageSimpleName,blueFish:t.locationTips.map((function(t){return T[t.blueFish]})).filter((function(t){return t})).map((function(t){return t.name_chs})).join("，"),achievements:t.voyageTip.comment}}))}var w={voyagesWithTipOf:I,simpleTipsOf:F,shiftTimeForCheckInLimit:h,voyageToShift:O,voyageToLocation:S,locationShiftIndexOf:C,locationShiftToLocation:x,locationShiftToShift:N,LOCATIONS:d,SHIFTS:p,LOCATION_SHIFT_TIPS:_,VOYAGE_TIPS:b,VOYAGE_TYPES:u,VOYAGE_LOCATIONS:g};function A(){return c.a.chain(w.VOYAGE_TYPES.flatMap((function(t){return w.VOYAGE_LOCATIONS[w.voyageToLocation(t)].map((function(e,n){return{voyage:t,locationShift:w.locationShiftIndexOf(e,(w.voyageToShift(t)+n)%3)}}))}))).uniq().groupBy("locationShift").mapValues((function(t){return t.map((function(t){return t.voyage}))})).value()}var j=A();function L(){var t=w.LOCATION_SHIFT_TIPS.map((function(t,e){return{locationShift:e,blueFish:t.blueFish}})).filter((function(t){return null!==t.blueFish})),e=c.a.chain(w.VOYAGE_TIPS.flatMap((function(t,e){return t.achievements.map((function(t){return{achievement:t,voyage:e}}))}))).groupBy("achievement").mapValues((function(t){return t.map((function(t){return t.voyage}))})).value(),n=new Set(w.VOYAGE_TIPS.flatMap((function(t){return t.achievements})));return[{type:"蓝鱼",options:t.map((function(t){return{type:"item",id:t.blueFish,voyageTypes:j[t.locationShift]}}))},{type:"成就",options:Array.from(n).map((function(t){return{type:"achievement",id:t,voyageTypes:e[t]}}))}].concat(Object(r["a"])(w.LOCATIONS.map((function(t,e){return{type:t,options:w.SHIFTS.map((function(n,i){var a=w.locationShiftIndexOf(e,i);return{type:"locationShift",id:w.locationShiftIndexOf(e,i),name:"".concat(t,"(").concat(n,")"),voyageTypes:j[a]}}))}}))))}var k=Object(o["a"])(Object(o["a"])({},w),{},{allTargets:L}),M=n("1aeb"),D=n("1315"),E=n("2f62"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n(t.componentType,{tag:"component",attrs:{voyages:t.voyages,targetOptions:t.targetOptions,voyageN:t.voyageN,targets:t.targets},on:{filterChanged:t.filterChanged}})],1)},V=[],Y=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-form",[n("v-container",[n("v-row",[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"3"}},[n("v-subheader",[t._v("显示航班数")]),n("v-text-field",{attrs:{type:"number",solo:""},model:{value:t.voyageN,callback:function(e){t.voyageN=e},expression:"voyageN"}})],1),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[n("v-subheader",[t._v("筛选条件")]),n("v-autocomplete",{staticClass:"targetSelector",attrs:{items:t.selectionOptions,color:"blue-grey lighten-2",placeholder:"选择或搜索筛选条件","item-text":"name","item-value":"id",multiple:"",clearable:"",chips:"","deletable-chips":"","return-object":"",solo:"",attach:".targetSelector"},on:{input:t.targetsChanged},scopedSlots:t._u([{key:"item",fn:function(e){return[e.item.header?[n("v-list-item-content",{domProps:{textContent:t._s(e.item.header)}})]:"locationShift"!==e.item.type?[n("v-list-item-content",[n("div",{staticClass:"d-flex align-center"},[n("item-icon",{attrs:{title:e.item.name,"icon-url":e.item.iconUrl,"icon-class":e.item.icon,type:e.item.type}}),n("div",[t._v(" "+t._s(e.item.name)+" ")])],1)])]:n("div",{staticClass:"d-flex align-center"},[n("v-icon",{attrs:{large:""}},[t._v(" mdi-map ")]),n("div",[t._v(" "+t._s(e.item.name)+" ")])],1)]}}]),model:{value:t.targets,callback:function(e){t.targets=e},expression:"targets"}})],1)],1)],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("colgroup",[n("col",{staticStyle:{width:"15%"},attrs:{span:"1"}}),n("col",{staticStyle:{width:"20%"},attrs:{span:"1"}}),n("col",{staticStyle:{width:"25%"},attrs:{span:"1"}}),n("col",{staticStyle:{width:"40%"},attrs:{span:"1"}})]),n("thead",[n("tr",[n("th",{staticClass:"text-right"},[t._v(" 登船登记时间（本地） ")]),n("th",{staticClass:"text-left pl-5"},[t._v(" 目标 ")]),n("th",{staticClass:"text-left"},[t._v(" 航线 ")]),n("th",{staticClass:"text-left"},[t._v(" 航线线路 ")])])]),n("tbody",t._l(t.voyages,(function(e,i){return n("tr",{key:i},[n("td",[n("div",{staticClass:"d-flex justify-end"},[n("div",{style:e.showDay?"":"visibility: hidden"},[t._v(" "+t._s(e.day)+" ")]),n("div",{staticClass:"ml-1"},[t._v(t._s(e.time))])])]),n("td",[n("div",{staticClass:"d-flex align-center"},t._l(e.targets,(function(t){return n("div",{key:t.id,style:"item"===t.type?"padding-top: 4px":""},[n("item-icon",{attrs:{title:t.name,"icon-url":t.iconUrl,"icon-class":t.icon,cover:t.cover,type:t.type}})],1)})),0)]),n("td",[n("div",{staticClass:"d-flex align-center"},[n("div",[t._v(t._s(e.name)+"航线")]),n("v-icon",[t._v(" "+t._s(e.shiftIcon)+" ")])],1)]),n("td",[n("div",{staticClass:"d-flex align-center"},t._l(e.voyageLocations,(function(e,i){return n("div",{key:i,staticClass:"mx-1"},[t._v(" "+t._s(e)+" ")])})),0)])])})),0)]},proxy:!0}])})],1)],1)],1)}),$=[],z=n("8b70"),G={name:"OceanFishingTimeTableLarge",components:{ItemIcon:z["a"]},props:{voyages:{type:Array,default:function(){return[]}},targetOptions:{type:Array,default:function(){return[]}}},data:function(){return{voyageNLazy:13,targets:[]}},computed:{selectionOptions:function(){return this.targetOptions.flatMap((function(t,e){return e?[{divider:!0},{header:t.type}].concat(Object(r["a"])(t.options)):[{header:t.type}].concat(Object(r["a"])(t.options))}))},voyageN:{get:function(){return this.voyageNLazy},set:function(t){var e=this;this.voyageNLazy=t,this.$nextTick((function(){var n=Math.floor(+t);n<1?n=1:n>100&&(n=100),e.voyageNLazy=n,e.filterChanged(n,e.targets)}))}}},methods:{targetsChanged:function(t){this.filterChanged(this.voyageN,t)},filterChanged:function(t,e){console.log(e),this.$emit("filterChanged",{voyageN:t,voyageTypes:c.a.uniq(e.flatMap((function(t){return t.voyageTypes})))})}}},H={name:"OceanFishingTimeTableLarge",components:{ItemIcon:z["a"]},mixins:[G]},U=H,Z=n("2877"),q=Object(Z["a"])(U,Y,$,!1,null,"46b7ec60",null),B=q.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-form",[n("v-container",[n("v-row",[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"3"}},[n("v-subheader",{staticStyle:{"min-width":"100px"}},[t._v("显示航班数")]),n("v-text-field",{attrs:{type:"number",solo:""},model:{value:t.voyageN,callback:function(e){t.voyageN=e},expression:"voyageN"}})],1),n("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"6"}},[n("v-subheader",{staticStyle:{"min-width":"100px"}},[t._v("筛选条件")]),n("v-autocomplete",{staticClass:"targetSelector",attrs:{items:t.selectionOptions,color:"blue-grey lighten-2",placeholder:"选择或搜索筛选条件","item-text":"name","item-value":"id",multiple:"",clearable:"",chips:"","deletable-chips":"","return-object":"",solo:"",attach:".targetSelector"},on:{input:t.targetsChanged},scopedSlots:t._u([{key:"item",fn:function(e){return[e.item.header?[n("v-list-item-content",{domProps:{textContent:t._s(e.item.header)}})]:"locationShift"!==e.item.type?[n("v-list-item-content",[n("div",{staticClass:"d-flex align-center"},[n("item-icon",{attrs:{title:e.item.name,"icon-url":e.item.iconUrl,"icon-class":e.item.icon,type:e.item.type}}),n("div",[t._v(" "+t._s(e.item.name)+" ")])],1)])]:n("div",{staticClass:"d-flex align-center"},[n("v-icon",{attrs:{large:""}},[t._v(" mdi-map ")]),n("div",[t._v(" "+t._s(e.item.name)+" ")])],1)]}}]),model:{value:t.targets,callback:function(e){t.targets=e},expression:"targets"}})],1)],1)],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("colgroup",[n("col",{staticStyle:{width:"30%"},attrs:{span:"1"}}),n("col",{staticStyle:{width:"45%"},attrs:{span:"1"}}),n("col",{staticStyle:{width:"15%"},attrs:{span:"1"}})]),n("thead",[n("tr",[n("th",{staticClass:"text-right"},[t._v(" 登船登记时间（本地） ")]),n("th",{staticClass:"text-left pl-5"},[t._v(" 目标 ")]),n("th",{staticClass:"text-left"},[t._v(" 航线 ")])])]),n("tbody",t._l(t.voyages,(function(e,i){return n("tr",{key:i},[n("td",[n("div",{staticClass:"d-flex justify-end"},[n("div",{style:e.showDay?"":"visibility: hidden"},[t._v(" "+t._s(e.day)+" ")]),n("div",{staticClass:"ml-1"},[t._v(t._s(e.time))])])]),n("td",[n("div",{staticClass:"d-flex align-center"},t._l(e.targets,(function(t){return n("div",{key:t.id,style:"item"===t.type?"padding-top: 4px":""},[n("item-icon",{attrs:{title:t.name,"icon-url":t.iconUrl,"icon-class":t.icon,cover:t.cover,type:t.type}})],1)})),0)]),n("td",[n("div",{staticClass:"d-flex align-center"},[n("div",[t._v(" "+t._s(e.simpleName)+" ")])])])])})),0)]},proxy:!0}])})],1)],1)],1)},W=[],K={name:"OceanFishingTimeTableSmall",components:{ItemIcon:z["a"]},mixins:[G]},Q=K,R=Object(Z["a"])(Q,J,W,!1,null,"7d61e426",null),X=R.exports,tt={name:"OceanFishingTimeTable",components:{OceanFishingTimeTableSmall:X,OceanFishingTimeTableLarge:B},props:{targets:{type:Array,default:void 0},voyageN:{type:Number},voyages:{type:Array,default:function(){return[]}},targetOptions:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{isMobile:function(){return this.$vuetify.breakpoint.mobile},componentType:function(){return this.isMobile?"OceanFishingTimeTableSmall":"OceanFishingTimeTableLarge"}},methods:{filterChanged:function(t){this.$emit("filterChanged",t)}}},et=tt,nt=Object(Z["a"])(et,P,V,!1,null,"c6673034",null),it=nt.exports,at=n("7a7d"),ot={name:"OceanFishingPage",components:{OceanFishingTimeTable:it},props:["now"],data:function(){return{achievementScore40:at["a"].getImgUrl("ocean-fishing-score-achievement-40x40.png"),filter:{voyageN:13},lazyNow:this.now}},computed:Object(o["a"])({isMobile:function(){return this.$vuetify.breakpoint.mobile},voyages:function(){var t=this;return k.voyagesWithTipOf(k.shiftTimeForCheckInLimit(this.lazyNow),this.filter.voyageN,this.filter.voyageTypes).map((function(e,n){var i=0===n||0===rt(e.time).hour,a=e.voyageTip.achievements.map((function(e){return t.assembleAchievement(e)})).concat(e.locationTips.map((function(e){return{blueFish:t.assembleItem(e.blueFish)}})).flatMap((function(t){return[t.blueFish]}))).filter((function(t){return t}));return{showDay:i,simpleName:e.voyageSimpleName,day:M["a"].formatDateTime(e.time,"MM-dd"),time:M["a"].formatDateTime(e.time,"HH:mm"),shiftIcon:st(e.shift.type),name:e.shift.name,targets:a,voyageLocations:e.locationTips.map((function(t){return t.locationName}))}}))},targetOptions:function(){var t=this;return k.allTargets().map((function(e){return{type:e.type,options:e.options.map((function(e){return"item"===e.type?Object(o["a"])(Object(o["a"])({},t.assembleItem(e.id)),{},{voyageTypes:e.voyageTypes}):"achievement"===e.type?Object(o["a"])(Object(o["a"])({},t.assembleAchievement(e.id)),{},{voyageTypes:e.voyageTypes}):e}))}}))}},Object(E["b"])(["getItemName","getItemIconClass","getAchievementName","getAchievementIconClass"])),watch:{now:function(t){t%9e5<2e3&&(this.lazyNow=t)}},methods:{assembleItem:function(t){return t&&{id:t,name:this.getItemName(t),icon:this.getItemIconClass(t),type:"item"}},assembleAchievement:function(t){return t&&{id:t,name:this.getAchievementName(t),icon:this.getAchievementIconClass(t),iconUrl:2562===t?this.achievementScore40:null,type:"achievement"}},filterChanged:function(t){this.filter=t}}};function rt(t){return D["DateTime"].fromMillis(t).setZone(D["FixedOffsetZone"].instance(480))}function st(t){var e=["mdi-weather-sunny","mdi-weather-sunset","mdi-weather-night"];return e[t]}var ct=ot,lt=(n("0eaa"),Object(Z["a"])(ct,i,a,!1,null,"6868a59a",null));e["default"]=lt.exports},d285:function(t,e,n){}}]);