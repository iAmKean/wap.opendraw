(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96baaea6"],{"0926":function(e,t,a){"use strict";var n=[{text:"两面推荐",img:"icon-lmtj.png",link:"two-sides"},{text:"长龙统计",img:"icon-cltj.png",link:"reminder"},{text:"杀号计划",img:"icon-shjh.png",link:"killplan"},{text:"免费计划",img:"icon-gcjh.png",link:"quizes"},{text:"专家推荐",img:"icon-zjtj.png",link:"recommend"},{text:"购彩计划",img:"icon-cart.png",link:"buyplan"}];t["a"]=n},5708:function(e,t,a){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var n=a("1d80"),r=a("5899"),i="["+r+"]",c=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(e){return function(t){var a=String(n(t));return 1&e&&(a=a.replace(c,"")),2&e&&(a=a.replace(s,"")),a}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5a94":function(e,t,a){var n={"./banner0.png":"fee8","./banner1.png":"b0b9","./banner2.png":"5ae4","./burger-icon.png":"9c0f","./home-icon.png":"f650","./icon-arrowdown.png":"bc4a","./icon-cart.png":"4b36","./icon-cltj.png":"6d9a","./icon-gcjh.png":"c90cf","./icon-index.png":"6602","./icon-lmtj.png":"37af","./icon-message.png":"7169","./icon-shjh.png":"e528","./icon-zjtj.png":"e6d8"};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id="5a94"},7156:function(e,t,a){var n=a("861d"),r=a("d2bb");e.exports=function(e,t,a){var i,c;return r&&"function"==typeof(i=t.constructor)&&i!==a&&n(c=i.prototype)&&c!==a.prototype&&r(e,c),e}},a9e3:function(e,t,a){"use strict";var n=a("83ab"),r=a("da84"),i=a("94ca"),c=a("6eeb"),s=a("5135"),u=a("c6b6"),o=a("7156"),l=a("c04e"),f=a("d039"),p=a("7c73"),m=a("241c").f,g=a("06cf").f,b=a("9bf2").f,v=a("58a8").trim,d="Number",w=r[d],h=w.prototype,y=u(p(h))==d,D=function(e){var t,a,n,r,i,c,s,u,o=l(e,!1);if("string"==typeof o&&o.length>2)if(o=v(o),t=o.charCodeAt(0),43===t||45===t){if(a=o.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(o.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+o}for(i=o.slice(2),c=i.length,s=0;s<c;s++)if(u=i.charCodeAt(s),u<48||u>r)return NaN;return parseInt(i,n)}return+o};if(i(d,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var O,j=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof j&&(y?f((function(){h.valueOf.call(a)})):u(a)!=d)?o(new w(D(t)),a,j):D(t)},_=n?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)s(w,O=_[x])&&!s(j,O)&&b(j,O,g(w,O));j.prototype=h,h.constructor=j,c(r,d,j)}},aee1:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-menu"},[a("div",{staticClass:"home-menu-wrapper"},[a("van-grid",{staticClass:"menu-grid"},e._l(e.menuItems,(function(t,n){return a("van-grid-item",{key:n,attrs:{icon:e.getMenuImage(t.img),text:t.text},on:{click:function(a){return e.goPage(t.link)}}})})),1)],1)])},r=[],i=(a("b0c0"),a("d4ec")),c=a("bee2"),s=a("262e"),u=a("2caf"),o=a("9ab4"),l=a("60a3"),f=a("0926"),p=a("d399"),m=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.menuItems=f["a"],e}return Object(c["a"])(n,[{key:"getMenuImage",value:function(e){return a("5a94")("./".concat(e))}},{key:"goPage",value:function(e){var t=this.$route.name;t!=e?this.$router.push("/".concat(e)):p["a"].fail("当前页面")}}]),n}(l["d"]);m=Object(o["a"])([l["a"]],m);var g=m,b=g,v=(a("fa40"),a("2877")),d=Object(v["a"])(b,n,r,!1,null,"6ab52b62",null);t["a"]=d.exports},b0c0:function(e,t,a){var n=a("83ab"),r=a("9bf2").f,i=Function.prototype,c=i.toString,s=/^\s*function ([^ (]*)/,u="name";n&&!(u in i)&&r(i,u,{configurable:!0,get:function(){try{return c.call(this).match(s)[1]}catch(e){return""}}})},bb51:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("AdvertisingHomeBanner"),a("AdvertisingHomeMarquee"),a("HomeMenu"),a("div",{staticClass:"draw-cards"},e._l(e.currentDraws,(function(e,t){return a("LotteryCard",{key:t,attrs:{gameName:e.gameName,issueNumber:e.issueNumber,nextDraw:e.nextDraw,actualDraw:e.actualDraw,inforDraw:e.inforDraw,infoOtherDraw:e.infoOtherDraw,gameType:e.gameType}})})),1)],1)},r=[],i=a("d4ec"),c=a("bee2"),s=a("262e"),u=a("2caf"),o=a("9ab4"),l=a("60a3"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"advertising-home-banner"},[a("div",{staticClass:"advertising-home-banner-wrapper"},[a("swiper",{ref:"mySwiper"},e._l(e.bannerList,(function(t,n){return a("swiper-slide",{key:n,style:e.getBannerImage(t),attrs:{width:"100%"}})})),1)],1)])},p=[],m=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.bannerList=["banner0.png"],e}return Object(c["a"])(n,[{key:"getBannerImage",value:function(e){return"\n    background: url(".concat(a("5a94")("./"+e),") no-repeat;\n    background-size: 100% 160px;\n    ")}}]),n}(l["d"]);m=Object(o["a"])([l["a"]],m);var g=m,b=g,v=a("2877"),d=Object(v["a"])(b,f,p,!1,null,null,null),w=d.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"advertising-home-marquee"},[a("div",{staticClass:"advertising-home-marquee-wrapper"},[a("div",{staticClass:"marquee-icon"}),a("div",{staticClass:"marquee-container"},[a("marquee-text",{attrs:{repeat:10}},[a("p",{staticClass:"marquee-item"},[e._v("AA娱乐开奖网上线啦，最全走势，最新计划。为百姓谋福利~！")])])],1)])])},y=[],D=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(l["d"]);D=Object(o["a"])([l["a"]],D);var O=D,j=O,_=Object(v["a"])(j,h,y,!1,null,null,null),x=_.exports,N=a("aee1"),k=a("d436"),C=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.currentDraws={},e}return Object(c["a"])(a,[{key:"mounted",value:function(){this.currentDraws={7:{gameType:"pk10",gameName:"北京PK10",issueNumber:748063,nextDraw:new Date,actualDraw:[1,2,3,4,5,6,7,8,9,10],inforDraw:["龙","龙","龙","龙","龙"],infoOtherDraw:[9,"小","单"]},10:{gameType:"ssc",gameName:"极速赛车",issueNumber:748063,nextDraw:new Date,actualDraw:[1,2,3,4,5],inforDraw:["龙","龙","龙","龙","龙"],infoOtherDraw:[9,"小","单"]},11:{gameType:"k3",gameName:"江苏快3",issueNumber:748063,nextDraw:new Date,actualDraw:[1,2,3],inforDraw:["龙","龙","龙","龙","龙"],infoOtherDraw:[9,"小","单"]},12:{gameType:"elevenFive",gameName:"广东11选5",issueNumber:748063,nextDraw:new Date,actualDraw:[1,2,3,4,5],inforDraw:["龙","龙","龙","龙","龙"],infoOtherDraw:[9,"小","单"]},13:{gameType:"marksix",gameName:"五分六合彩",issueNumber:748063,nextDraw:new Date,actualDraw:[33,31,5,32,42,20,16],inforDraw:["龙","龙","龙","龙","龙"],infoOtherDraw:[9,"小","单"]},14:{gameType:"threeD",gameName:"福彩3D",issueNumber:748063,nextDraw:new Date,actualDraw:[1,2,3],inforDraw:["龙","龙","龙","龙","龙"],infoOtherDraw:[9,"小","单"]}}}}]),a}(l["d"]);C=Object(o["a"])([Object(l["a"])({components:{AdvertisingHomeBanner:w,AdvertisingHomeMarquee:x,HomeMenu:N["a"],LotteryCard:k["a"]}})],C);var T=C,I=T,E=Object(v["a"])(I,n,r,!1,null,null,null);t["default"]=E.exports},d436:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lottery-card"},[a("div",{staticClass:"lottery-info"},[a("div",{staticClass:"game-name"},[e._v(e._s(e.gameName))]),a("div",{staticClass:"game-issue"},[e._v(e._s(e.issueNumber)+"期")]),a("div",{staticClass:"game-next-issue"},[e._v(e._s(e.issueNumber+1)+"期")]),e._m(0),a("div",{staticClass:"game-time"},[a("span",[e._v("距下期开奖")]),a("span",[e._v(e._s(e.gameTime))])])]),a("div",{staticClass:"lottery-draw"},[a("ul",{staticClass:"draw-wrapper",class:e.gameType},e._l(e.actualDraw,(function(t,n){return a("li",{key:n,class:"num"+t},[e._v(" "+e._s(e.setDrawText(t,e.gameType))+" ")])})),0),a("div",{staticClass:"info-draw-wrapper"},[a("div",{staticClass:"draw-num-text"},[a("ul",e._l(e.inforDraw,(function(t,n){return a("li",{key:n},[e._v(e._s(t))])})),0)]),a("div",{staticClass:"info-custome-text"},[a("div",[e._v(e._s(e.infoDrawText)+"：")]),a("ul",{staticClass:"other-info-draw-wrapper"},e._l(e.infoOtherDraw,(function(t,n){return a("li",{key:n},[e._v(e._s(t))])})),0)])])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game-draw-count"},[a("span",[e._v("已开")]),a("span",[e._v("10")]),a("span",[e._v("期，剩余")]),a("span",[e._v("20")]),a("span",[e._v("期")])])}],i=(a("a9e3"),a("d4ec")),c=a("bee2"),s=a("262e"),u=a("2caf"),o=a("9ab4"),l=a("60a3"),f=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.gameTime="00 : 05 : 00",e.arrayTime=[0,5,0],e.infoDrawText="冠亚和",e}return Object(c["a"])(a,[{key:"nextDrawChanged",value:function(e){new Date(e),this.arrayTime=[0,8,23],this.gameTime="00 : 08 : 23",this.infoDrawText="冠亚和"}},{key:"countDown",value:function(){this.gameTime="00 : 08 : 23"}},{key:"mounted",value:function(){this.arrayTime=[0,8,23],this.gameTime="00 : 08 : 23",this.infoDrawText="冠亚和",console.log(this.gameType)}},{key:"setDrawText",value:function(e,t){return"pk10"===t||"k3"===t?"":e}}]),a}(l["d"]);Object(o["a"])([Object(l["c"])({type:String,default:""})],f.prototype,"gameType",void 0),Object(o["a"])([Object(l["c"])({type:String,default:"北京PK10"})],f.prototype,"gameName",void 0),Object(o["a"])([Object(l["c"])({type:[Number,String],default:748063})],f.prototype,"issueNumber",void 0),Object(o["a"])([Object(l["c"])({type:[Date,String],default:function(){return new Date}})],f.prototype,"nextDraw",void 0),Object(o["a"])([Object(l["c"])({type:Array,default:function(){return[1,2,3,4,5,6,7,8,9,10]}})],f.prototype,"actualDraw",void 0),Object(o["a"])([Object(l["c"])({type:Array,default:function(){return["龙","龙","龙","龙","龙"]}})],f.prototype,"inforDraw",void 0),Object(o["a"])([Object(l["c"])({type:Array,default:function(){return[9,"小","单"]}})],f.prototype,"infoOtherDraw",void 0),Object(o["a"])([Object(l["c"])({type:Number,default:0})],f.prototype,"gameId",void 0),Object(o["a"])([Object(l["e"])("nextDraw")],f.prototype,"nextDrawChanged",null),f=Object(o["a"])([l["a"]],f);var p=f,m=p,g=a("2877"),b=Object(g["a"])(m,n,r,!1,null,null,null);t["a"]=b.exports},fa40:function(e,t,a){"use strict";var n=a("5708"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-96baaea6.ff36cfc2.js.map