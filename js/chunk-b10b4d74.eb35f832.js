(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b10b4d74"],{"0843":function(e,t,c){"use strict";var o=c("7a23"),n={class:"container"},a={class:"body"};function r(e,t,c,r,s,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["topBanner",c.type])},[Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("h2",null,Object(o["toDisplayString"])(c.h2),1),Object(o["createElementVNode"])("p",a,Object(o["toDisplayString"])(c.body),1)])],2)}var s={name:"topBanner",props:{h2:String,body:String,type:String}},l=c("6b0d"),i=c.n(l);const b=i()(s,[["render",r]]);t["a"]=b},3870:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n={class:"locationShops"};function a(e,t,c,a,r,s){var l=Object(o["resolveComponent"])("TopBanner"),i=Object(o["resolveComponent"])("Breadcrumbs"),b=Object(o["resolveComponent"])("Location");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[Object(o["createVNode"])(l,{body:e.$t("locationMarket",{number:4}),h2:e.$t("home.location"),type:"location"},null,8,["body","h2"]),Object(o["createVNode"])(i,{title:e.$t("location")},null,8,["title"]),Object(o["createVNode"])(b)])}var r=c("f1b0"),s=c("0843"),l=(c("d81d"),c("b894")),i=c.n(l),b={class:"locationShops__maps"},d={class:"container"},m={class:"locationShops__maps-wrap"},p={class:"locationShops__maps-left"},O=Object(o["createElementVNode"])("div",{class:"logo"},[Object(o["createElementVNode"])("img",{src:i.a,alt:"logo"})],-1),j={class:"markets"},u={class:"locationShops__maps-items"},v={class:"look"},h={class:"small"},E={class:"locationShops__maps-right"},N=["src"];function V(e,t,c,n,a,r){var s=Object(o["resolveComponent"])("SvgIcon"),l=Object(o["resolveComponent"])("Btn");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",b,[Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("div",m,[Object(o["createElementVNode"])("div",p,[O,Object(o["createElementVNode"])("p",j,Object(o["toDisplayString"])(e.$t("locationMarkets")),1),Object(o["createElementVNode"])("div",u,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.address,(function(t,c){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"locationShops__maps-item",key:c},[Object(o["createVNode"])(s,{width:"32",height:"24","icon-class":"maps"}),Object(o["createElementVNode"])("div",v,[Object(o["createElementVNode"])("p",h,Object(o["toDisplayString"])(t["address_".concat(e.$i18n.locale)]),1),Object(o["createVNode"])(l,{type:"seeMaps p","text-font":"badge",onClick:function(e){return n.seeFromMap(t.map)}},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("seeFromMaps")),1)]})),_:2},1032,["onClick"])])])})),128))])]),Object(o["createElementVNode"])("div",E,[Object(o["createElementVNode"])("iframe",{src:n.url},null,8,N)])])])])}var g=c("d429"),k=c("4a90"),S=c("81fa"),f={name:"Location",components:{SvgIcon:g["a"],Btn:k["a"]},setup:function(){var e=Object(o["ref"])("Toshkent shahar, Sergeli tumani Sergeli moshina bozor 6/2.2- do’kon."),t=Object(o["computed"])((function(){return"https://www.google.com/maps/embed/v1/search?key=AIzaSyBB3MrUX62BmjlOEu1f7OlrtpMFZ3GEtqU&q=".concat(e.value)})),c=function(t){e.value=t};return{url:t,seeFromMap:c,address:S["b"]}}},B=c("6b0d"),_=c.n(B);const y=_()(f,[["render",V]]);var w=y,C={name:"LocationShops",components:{Location:w,TopBanner:s["a"],Breadcrumbs:r["a"]}};const M=_()(C,[["render",a]]);t["default"]=M},f1b0:function(e,t,c){"use strict";var o=c("7a23"),n={class:"breadcrumbs"},a={class:"container"},r={class:"breadcrumbs__wrap"},s={class:"breadcrumbs__home"},l={class:"breadcrumbs__title"},i={class:"small"};function b(e,t,c,b,d,m){var p=Object(o["resolveComponent"])("SvgIcon");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",s,[Object(o["createVNode"])(p,{"icon-class":"homeIcons","class-name":"p",wh:"18",onClick:t[0]||(t[0]=function(t){return e.$router.push("/")})}),Object(o["createVNode"])(p,{"icon-class":"right",wh:"18"})]),Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("p",i,Object(o["toDisplayString"])(c.title),1)])])])])}var d=c("d429"),m={name:"Breadcrumbs",components:{SvgIcon:d["a"]},props:{title:String}},p=c("6b0d"),O=c.n(p);const j=O()(m,[["render",b]]);t["a"]=j}}]);
//# sourceMappingURL=chunk-b10b4d74.eb35f832.js.map