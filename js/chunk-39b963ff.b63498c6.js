(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39b963ff"],{1811:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"picker-one"},[a("van-button",{attrs:{icon:"arrow-down",type:"default"},on:{click:t.togglePicker}},[t._v(t._s(t.getText()))]),a("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[a("van-picker",{attrs:{title:t.title,"show-toolbar":"","cancel-button-text":"取消","confirm-button-text":"确认",columns:t._f("getTextList")(t.dataList)},on:{confirm:t.onConfirm,cancel:t.togglePicker}})],1)],1)},s=[],i=(a("d81d"),a("d4ec")),c=a("bee2"),r=a("262e"),o=a("2caf"),l=a("9ab4"),u=a("60a3"),v=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.showPicker=!1,t.selectedId=0,t}return Object(c["a"])(a,[{key:"getText",value:function(){if(this.dataList&&this.dataList[this.selectedId||0]){var t=this.dataList[this.selectedId||0];return t.text}return""}},{key:"emitData",value:function(t){this.$emit("index-change",t)}},{key:"togglePicker",value:function(){this.showPicker=!this.showPicker}},{key:"onConfirm",value:function(t,e){var a=this.dataList||[],n=a[e];n&&(this.selectedId=e,this.togglePicker(),this.emitData(n))}},{key:"mounted",value:function(){if(this.sendOnInit){var t=this.dataList||[];this.emitData(t[this.selectedId||0])}}}]),a}(u["d"]);Object(l["a"])([Object(u["c"])({type:String,default:""})],v.prototype,"title",void 0),Object(l["a"])([Object(u["c"])({type:Array,default:function(){return[]}})],v.prototype,"dataList",void 0),Object(l["a"])([Object(u["c"])({type:Boolean,default:!1})],v.prototype,"sendOnInit",void 0),v=Object(l["a"])([Object(u["a"])({filters:{getTextList:function(t){return t?t.map((function(t){return t.text})):[]}}})],v);var p=v,d=p,f=a("2877"),h=Object(f["a"])(d,n,s,!1,null,null,null);e["a"]=h.exports},"4df4":function(t,e,a){"use strict";var n=a("0366"),s=a("7b0b"),i=a("9bdd"),c=a("e95a"),r=a("50c4"),o=a("8418"),l=a("35a1");t.exports=function(t){var e,a,u,v,p,d,f=s(t),h="function"==typeof this?this:Array,b=arguments.length,m=b>1?arguments[1]:void 0,_=void 0!==m,w=l(f),y=0;if(_&&(m=n(m,b>2?arguments[2]:void 0,2)),void 0==w||h==Array&&c(w))for(e=r(f.length),a=new h(e);e>y;y++)d=_?m(f[y],y):f[y],o(a,y,d);else for(v=w.call(f),p=v.next,a=new h;!(u=p.call(v)).done;y++)d=_?i(v,m,[u.value,y],!0):u.value,o(a,y,d);return a.length=y,a}},8418:function(t,e,a){"use strict";var n=a("c04e"),s=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var c=n(e);c in t?s.f(t,c,i(0,a)):t[c]=a}},"8beb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-datepicker"},[a("van-button",{attrs:{icon:"arrow-down",type:"default"},on:{click:t.togglePicker}},[t._v(t._s(t.selectedDate))]),a("van-calendar",{attrs:{"min-date":t.minDate,"max-date":t.maxDate,"default-date":t.maxDate},on:{confirm:t.dateChange},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},s=[],i=(a("a15b"),a("d4ec")),c=a("bee2"),r=a("262e"),o=a("2caf"),l=a("9ab4"),u=a("60a3"),v=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.show=!1,t.minDate=new Date,t.maxDate=new Date,t.selectedDate=t.formatDate(new Date),t}return Object(c["a"])(a,[{key:"mounted",value:function(){var t=new Date;t.setDate(t.getDate()-50),this.minDate=t}},{key:"togglePicker",value:function(){this.show=!this.show}},{key:"dateChange",value:function(t){this.togglePicker();var e=this.formatDate(t);e!==this.selectedDate&&(this.selectedDate=e,this.emitDate())}},{key:"emitDate",value:function(){this.$emit("date-change",this.selectedDate)}},{key:"formatDate",value:function(t){var e=new Date(t),a=""+(e.getMonth()+1),n=""+e.getDate(),s=e.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[s,a,n].join("-")}}]),a}(u["d"]);v=Object(l["a"])([u["a"]],v);var p=v,d=p,f=a("2877"),h=Object(f["a"])(d,n,s,!1,null,null,null);e["a"]=h.exports},a15b:function(t,e,a){"use strict";var n=a("23e7"),s=a("44ad"),i=a("fc6a"),c=a("a640"),r=[].join,o=s!=Object,l=c("join",",");n({target:"Array",proto:!0,forced:o||!l},{join:function(t){return r.call(i(this),void 0===t?",":t)}})},a630:function(t,e,a){var n=a("23e7"),s=a("4df4"),i=a("1c7e"),c=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:c},{from:s})},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},bee2:function(t,e,a){"use strict";function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}a.d(e,"a",(function(){return s}))},e3e5:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"buy-plan"},[a("BuyPlanView")],1)},s=[],i=a("d4ec"),c=a("262e"),r=a("2caf"),o=a("9ab4"),l=a("60a3"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"buy-plan-view"},[a("BuyPlanCard"),a("BuyPlanFilter"),a("BuyPlanTable")],1)},v=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"buy-plan-card"},[a("div",{staticClass:"card-info"},[a("PickerOne",{attrs:{dataList:t.gameList},on:{"index-change":t.indexChange}}),t._m(0),a("div",{staticClass:"top-row"},[a("div",{staticClass:"question"},[a("van-button",{attrs:{type:"default"},on:{click:t.togglePopup}},[t._v("已推荐"+t._s(t.issueCount)+"期")]),a("van-icon",{attrs:{name:"question-o"}})],1)])],1),t._m(1),a("van-popup",{staticClass:"small-pop",attrs:{round:""},model:{value:t.showpopup,callback:function(e){t.showpopup=e},expression:"showpopup"}},[a("div",{staticClass:"pop-header"},[a("van-icon",{attrs:{name:"question-o"}}),a("span",[t._v("帮助说明")]),a("span",[t._v("玩法规则介绍")])],1),a("div",{staticClass:"pop-body"},[a("div",{staticClass:"body-wrapper"},[a("h3",[t._v("功能介绍")]),a("p",{staticClass:"powP"},[a("span",{staticClass:"cp_name"},[t._v("SG飞艇")]),a("span",{staticClass:"cp_check"},[t._v("计划一")]),t._v("购彩计划：依据"),a("span",{staticClass:"cp_name"},[t._v("SG飞艇")]),t._v("历史大数据规律为基础，提供N组购彩计划参考，建议使用阶梯倍投方法投注，如果连续10期没有成功则标记为失败")]),a("h3",{staticClass:"h3_two"},[t._v("本推荐玩法")]),a("p",[a("span",{staticClass:"cp_name"},[t._v("SG飞艇")]),a("span",{staticClass:"cp_check"},[t._v("计划一")]),t._v("追踪第一球开奖号码，以倍投的形式，第一期以1为基数，以此类推，连续十次不中则更新计划。")]),a("h3",{staticClass:"h3_two"},[t._v("使用技巧")]),a("p",[a("span",{staticClass:"cp_name"},[t._v("SG飞艇")]),a("span",{staticClass:"cp_check"},[t._v("计划一")]),t._v("购彩计划，建议使用，阶梯倍投方式追号投注。")]),a("h3",{staticClass:"h3_two"},[t._v("推荐计划")]),a("p",[a("span",{staticClass:"cp_name"},[t._v("SG飞艇")]),a("span",{staticClass:"cp_check"},[t._v("计划一")]),t._v("推荐计划，以此类推，连续十次不中则更新计划 推荐计划：三种方案的推荐计划分别对应不同个数的号码，号码越多中奖率越高，但是中奖额度较小，风险 越大，收益越高。比如：计划1为5个号码，所需要的成本为5，假如赔率是10，则赢5;如果是计划3， 有3个号码，成本为3,则赢7。")]),a("h3",{staticClass:"h3_two"},[t._v("当前成本")]),a("p",[a("span",{staticClass:"cp_name"},[t._v("SG飞艇")]),a("span",{staticClass:"cp_check"},[t._v("计划一")]),t._v("当前成本，指当前期购彩号码成本，每个计划的成本以号码多少为基准。")]),a("h3",{staticClass:"h3_two"},[t._v("累计成本")]),a("p",[a("span",{staticClass:"cp_name"},[t._v("SG飞艇")]),a("span",{staticClass:"cp_check"},[t._v("计划一")]),t._v("累计成本，指从推荐第一期开始计算所用总成本。")]),a("h3",{staticClass:"h3_two"},[t._v("赢亏")]),a("p",[a("span",{staticClass:"cp_name"},[t._v("SG飞艇")]),a("span",{staticClass:"cp_check"},[t._v("计划一")]),t._v("赢亏，根据试玩的赔率计算得来，红为赢，蓝为亏。")])])]),a("div",{staticClass:"pop-footer"},[a("div",{staticClass:"reset"},[a("span",[t._v("取消")])])])])],1)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"timer"},[a("span",[t._v("倒计时：")]),a("span",{staticClass:"countdown"},[t._v("03:28")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"draw-info"},[a("span",[t._v("提示：推荐计划时间段，第一段: ")]),a("span",[t._v("10:55-15:00 ")]),a("span",[t._v("第二段: ")]),a("span",[t._v("17:55-23:50")]),a("br"),a("span",[t._v("第三段: ")]),a("span",[t._v("01:00-03:30")])])}],f=a("bee2"),h=a("1811"),b=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.showpopup=!1,t.issueCount=47,t.gameList=[{id:7,text:"北京PK10"},{id:10,text:"SG飞艇"}],t}return Object(f["a"])(a,[{key:"indexChange",value:function(t){this.$emit("index-change",t)}},{key:"togglePopup",value:function(){this.showpopup=!this.showpopup}}]),a}(l["d"]);b=Object(o["a"])([Object(l["a"])({components:{PickerOne:h["a"]}})],b);var m=b,_=m,w=a("2877"),y=Object(w["a"])(_,p,d,!1,null,null,null),C=y.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"buy-plan-filter"},[a("CommonPickerOne",{attrs:{dataList:t.rowData},on:{"index-change":t.rowChange}}),a("CommonDatePicker",{on:{"date-change":t.dateChange}})],1)},O=[],j=(a("a630"),a("3ca3"),a("8beb")),g=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.selectedRows=10,t.selectedDate="",t.rowData=Array.from(Array(10),(function(t,e){return{id:10*(e+1),text:"近".concat(10*(e+1),"期")}})),t}return Object(f["a"])(a,[{key:"dateChange",value:function(t){this.selectedDate=t}},{key:"rowChange",value:function(t){this.selectedRows=t.id}},{key:"emitData",value:function(){this.$emit("filter-option-change",{date:this.selectedDate,rows:this.selectedRows})}}]),a}(l["d"]);g=Object(o["a"])([Object(l["a"])({components:{CommonDatePicker:j["a"],CommonPickerOne:h["a"]}})],g);var x=g,D=x,P=Object(w["a"])(D,k,O,!1,null,null,null),L=P.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"buy-plan-table"},[a("van-tabs",{attrs:{animated:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabs,(function(e,n){return a("van-tab",{key:n,attrs:{title:e}},[a("vxe-table",{attrs:{border:"",data:t.data}},[a("vxe-table-column",{attrs:{field:"issue",title:"期号"}}),a("vxe-table-column",{attrs:{width:"35",field:"number",title:"号码"}}),a("vxe-table-column",{attrs:{field:"championPlan",title:"冠军购彩计划一"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return t._l(n.championPlan,(function(e,n){return a("span",{key:n},[t._v(t._s(e))])}))}}],null,!0)}),a("vxe-table-column",{attrs:{width:"40",field:"currentLost",title:"当前成本"}}),a("vxe-table-column",{attrs:{width:"40",field:"grandTotalCost",title:"累计成本"}}),a("vxe-table-column",{attrs:{width:"40",field:"profitAndLost",title:"赢利/亏损"}}),a("vxe-table-column",{attrs:{width:"60",field:"drawTime",title:"开奖时间"}})],1)],1)})),1)],1)},S=[],A=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.active=0,t.tabs=["计划一","计划二","计划三"],t.data=[{issue:"0805179",number:"2",championPlan:[3,6,7,9,10],currentLost:"5",grandTotalCost:"505",profitAndLost:"121",drawTime:"14:55:00"}],t}return a}(l["d"]);A=Object(o["a"])([l["a"]],A);var T=A,B=T,E=Object(w["a"])(B,$,S,!1,null,null,null),G=E.exports,I=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(l["d"]);I=Object(o["a"])([Object(l["a"])({components:{BuyPlanCard:C,BuyPlanFilter:L,BuyPlanTable:G}})],I);var q=I,F=q,R=Object(w["a"])(F,u,v,!1,null,null,null),J=R.exports,V=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(l["d"]);V=Object(o["a"])([Object(l["a"])({components:{BuyPlanView:J}})],V);var K=V,M=K,N=Object(w["a"])(M,n,s,!1,null,null,null);e["default"]=N.exports}}]);
//# sourceMappingURL=chunk-39b963ff.b63498c6.js.map