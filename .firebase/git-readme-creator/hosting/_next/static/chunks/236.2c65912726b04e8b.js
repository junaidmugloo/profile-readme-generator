"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{9125:function(e,t,n){n.d(t,{MN:function(){return a},nm:function(){return o},LV:function(){return p},Hg:function(){return u}});var r=n(7742),a=function(e){return{type:r.Inputs.TEXT,path:"content.graphs.".concat(e,".custom_title"),label:"Custom title",props:{column:"1 / 3"}}},o=function(e){return{type:r.Inputs.SELECT,path:"content.graphs.".concat(e,".locale"),label:"Translate",props:{column:"1 / 3",options:[{label:"Portuguese",value:"pt-br"},{label:"English",value:"en"},{label:"French",value:"fr"},{label:"Spanish",value:"es"},{label:"German",value:"de"}]}}},l=n(9903),u=function(e){return{type:r.Inputs.SELECT,path:"content.graphs.".concat(e,".theme"),label:"Theme",props:{column:"1 / 3",clearable:!0,options:l.np}}},p=function(e){return{type:r.Inputs.SWITCH,path:"content.graphs.".concat(e,".show"),label:"Show",props:{direction:"column"}}}},5236:function(e,t,n){n.r(t),n.d(t,{Languages:function(){return s}});var r=n(9499),a=n(2595),o=n(9125),l=n(7742),u=[{id:1,fields:[(0,o.LV)("languages"),(0,o.MN)("languages"),(0,o.nm)("languages")]},{id:2,label:"Layout",columns:2,fields:[{type:l.Inputs.SELECT,path:"content.graphs.languages.layout",label:"Style",props:{column:"1 / 3",options:[{label:"Compact",value:"compact"},{label:"Default",value:"default "}]}},{type:l.Inputs.TEXT,path:"content.graphs.languages.height",label:"Height",props:{type:"number",min:0}},{type:l.Inputs.TEXT,path:"content.graphs.languages.langs_count",label:"Languages count",props:{type:"number",min:1,max:12}},(0,o.Hg)("languages"),{type:l.Inputs.SWITCH,path:"content.graphs.languages.hide_title",label:"Hide title",props:{direction:"column"}},{type:l.Inputs.SWITCH,path:"content.graphs.languages.hide_border",label:"Hide border",props:{direction:"column"}}]}],p=n(5893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var s=function(){return(0,p.jsx)(p.Fragment,{children:u.map((function(e){return(0,p.jsx)(a.AS,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),e.id)}))})}}}]);