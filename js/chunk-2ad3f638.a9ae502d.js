(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ad3f638"],{2923:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a={key:1,class:"product"},n={class:"container"},r={class:"product__content"},l={class:"product__left"},s={class:"product__img"},d=["src"],i={class:"product__right"},p={class:"about"},b={class:"about__item"},m={class:"paragraph"},u={class:"paragraph"},j={class:"about__item"},O={class:"paragraph"},N={class:"paragraph"},f={class:"about__item"},v={class:"paragraph"},_={class:"paragraph"},V={class:"about__item"},g={class:"paragraph"},y={class:"paragraph"},E={class:"about__item"},h={class:"paragraph"},$={class:"paragraph"},I={class:"about__item"},k={class:"paragraph"},D={class:"paragraph"},S={class:"about__item"},C={class:"paragraph"},B={class:"paragraph"};function w(e,t,c,w,x,T){var M=Object(o["resolveComponent"])("Loader"),L=Object(o["resolveComponent"])("Breadcrumbs"),q=Object(o["resolveComponent"])("Carousel"),F=Object(o["resolveComponent"])("Btn"),P=Object(o["resolveComponent"])("ModalInput");return w.LoaderInfo?(Object(o["openBlock"])(),Object(o["createBlock"])(M,{key:0,class:"product__loader",loader12:"1"})):w.productInfo?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(L,{title:w.productInfo["name_".concat(e.$i18n.locale)]},null,8,["title"]),Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",l,[Object(o["createVNode"])(q,{options:w.product,data:w.productInfo.image},{default:Object(o["withCtx"])((function(e){return[Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("img",{src:e.slide.image,alt:"img"},null,8,d)])]})),_:1},8,["options","data"])]),Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("h1",null,Object(o["toDisplayString"])(w.productInfo["name_".concat(e.$i18n.locale)]),1),Object(o["createElementVNode"])("div",p,[Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("p",m,Object(o["toDisplayString"])(e.$t("productInfo.item1")),1),Object(o["createElementVNode"])("p",u,Object(o["toDisplayString"])(w.productInfo.company_name["name_".concat(e.$i18n.locale)]),1)]),Object(o["createElementVNode"])("div",j,[Object(o["createElementVNode"])("p",O,Object(o["toDisplayString"])(e.$t("productInfo.item2")),1),Object(o["createElementVNode"])("p",N,Object(o["toDisplayString"])(w.productInfo["model_".concat(e.$i18n.locale)]),1)]),Object(o["createElementVNode"])("div",f,[Object(o["createElementVNode"])("p",v,Object(o["toDisplayString"])(e.$t("productInfo.item3")),1),Object(o["createElementVNode"])("p",_,Object(o["toDisplayString"])(w.productInfo["size_".concat(e.$i18n.locale)]),1)]),Object(o["createElementVNode"])("div",V,[Object(o["createElementVNode"])("p",g,Object(o["toDisplayString"])(e.$t("productInfo.item5")),1),Object(o["createElementVNode"])("p",y,Object(o["toDisplayString"])(w.productInfo["power_".concat(e.$i18n.locale)]),1)]),Object(o["createElementVNode"])("div",E,[Object(o["createElementVNode"])("p",h,Object(o["toDisplayString"])(e.$t("productInfo.item6")),1),Object(o["createElementVNode"])("p",$,Object(o["toDisplayString"])(w.productInfo["season_".concat(e.$i18n.locale)]),1)]),Object(o["createElementVNode"])("div",I,[Object(o["createElementVNode"])("p",k,Object(o["toDisplayString"])(e.$t("productInfo.item7")),1),Object(o["createElementVNode"])("p",D,Object(o["toDisplayString"])(w.productInfo["country_".concat(e.$i18n.locale)]),1)]),Object(o["createElementVNode"])("div",S,[Object(o["createElementVNode"])("p",C,Object(o["toDisplayString"])(e.$t("productInfo.item8")),1),Object(o["createElementVNode"])("p",B,Object(o["toDisplayString"])(w.productInfo.date),1)])]),Object(o["createVNode"])(F,{onClick:t[0]||(t[0]=function(e){return w.close=!w.close}),type:"blue"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("apply")),1)]})),_:1})])])]),Object(o["createVNode"])(P,{close:w.close,onClose:t[1]||(t[1]=function(e){return w.close=!1})},null,8,["close"])])):Object(o["createCommentVNode"])("",!0)}var x=c("f1b0"),T=c("775a"),M=c("c6e1"),L=c("4a90"),q={class:"modalInput__items cardText"},F={class:"modalInput__item"},P={for:"name"},J=["placeholder"],U={key:0,class:"small"},z={class:"modalInput__item"},A={for:"number"},G={key:0,class:"small"},H={key:1,class:"small"},K={class:"modalInput__item"},Q={class:"modalInput__item"};function R(e,t,c,a,n,r){var l=Object(o["resolveComponent"])("Btn"),s=Object(o["resolveComponent"])("ModalBase"),d=Object(o["resolveDirective"])("maska");return Object(o["openBlock"])(),Object(o["createBlock"])(s,{title:e.$t("apply"),onClose:t[4]||(t[4]=function(t){return e.$emit("close")}),close:c.close},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",q,[Object(o["createElementVNode"])("div",F,[Object(o["createElementVNode"])("label",P,Object(o["toDisplayString"])(e.$t("modal.name")),1),Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"name",type:"text",placeholder:e.$t("modal.inputName"),"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.state.yourName=e})},null,8,J),[[o["vModelText"],a.state.yourName]]),a.v$.yourName.$dirty&&a.v$.yourName.required.$invalid?(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",U,Object(o["toDisplayString"])(e.$t("modal.requiredName")),1)):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",z,[Object(o["createElementVNode"])("label",A,Object(o["toDisplayString"])(e.$t("modal.phoneNumber")),1),Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"number",type:"text",placeholder:"+998 __-___-__-__",onFocus:t[1]||(t[1]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.state.phoneNumber=e})},null,544),[[o["vModelText"],a.state.phoneNumber],[d,"+998 (##) ###-##-##"]]),a.v$.phoneNumber.$dirty&&a.v$.phoneNumber.required.$invalid?(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",G,Object(o["toDisplayString"])(e.$t("modal.requiredName")),1)):Object(o["createCommentVNode"])("",!0),a.v$.phoneNumber.$dirty&&a.v$.phoneNumber.minLength.$invalid?(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",H,Object(o["toDisplayString"])(e.$t("modal.requiredName")),1)):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",K,[Object(o["createVNode"])(l,{type:"blue","text-font":"cardText",onClick:a.submit},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("modal.send")),1)]})),_:1},8,["onClick"])]),Object(o["createElementVNode"])("div",Q,[Object(o["createVNode"])(l,{type:"secondary",onClick:t[3]||(t[3]=function(t){return e.$emit("close")}),"text-font":"cardText"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("modal.cancel")),1)]})),_:1})])])]})),_:1},8,["title","close"])}var W=c("f621"),X=c("cd2a"),Y=c("e2b5"),Z={name:"modalInput",components:{Btn:L["a"],ModalBase:W["a"]},props:{close:{type:Boolean,default:!1}},setup:function(){var e=Object(X["a"])(),t=e.v$,c=e.state,o=function(e){e.target.value||(c.phoneNumber="+998 (")},a=Object(Y["a"])(),n=a.submit;return{v$:t,state:c,onFocus:o,submit:n}}},ee=c("6b0d"),te=c.n(ee);const ce=te()(Z,[["render",R]]);var oe=ce,ae=c("a4c7"),ne=c("5f79"),re=c("728f"),le={name:"ProductPage",components:{Loader:re["a"],ModalInput:oe,Btn:L["a"],Breadcrumbs:x["a"],Carousel:T["a"]},setup:function(){var e=Object(o["ref"])(!1),t=Object(ne["b"])(),c=t.productInfo,a=t.getProduct,n=t.LoaderInfo,r=Object(M["a"])(),l=r.product;return Object(o["watch"])(e,(function(){return Object(ae["a"])(e.value)})),Object(o["onMounted"])(a),{product:l,close:e,productInfo:c,getProduct:a,LoaderInfo:n}}};const se=te()(le,[["render",w]]);t["default"]=se},f1b0:function(e,t,c){"use strict";var o=c("7a23"),a={class:"breadcrumbs"},n={class:"container"},r={class:"breadcrumbs__wrap"},l={class:"breadcrumbs__home"},s={class:"breadcrumbs__title"},d={class:"small"};function i(e,t,c,i,p,b){var m=Object(o["resolveComponent"])("SvgIcon");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",l,[Object(o["createVNode"])(m,{"icon-class":"homeIcons","class-name":"p",wh:"18",onClick:t[0]||(t[0]=function(t){return e.$router.push("/")})}),Object(o["createVNode"])(m,{"icon-class":"right",wh:"18"})]),Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("p",d,Object(o["toDisplayString"])(c.title),1)])])])])}var p=c("d429"),b={name:"Breadcrumbs",components:{SvgIcon:p["a"]},props:{title:String}},m=c("6b0d"),u=c.n(m);const j=u()(b,[["render",i]]);t["a"]=j}}]);
//# sourceMappingURL=chunk-2ad3f638.a9ae502d.js.map