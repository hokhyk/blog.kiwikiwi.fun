(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{u8Gk:function(a,e,t){"use strict";var n=t("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var d=n(t("p0pE")),u=n(t("d6i3")),r=t("f1A5"),c={namespace:"adminAndsocialiteUserAndindex",state:{data:{list:[],pagination:{}}},effects:{fetch:u.default.mark(function a(e,t){var n,d,c,i;return u.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,d=t.call,c=t.put,a.next=4,d(r.queryRule,n);case 4:return i=a.sent,a.next=7,c({type:"save",payload:i});case 7:case"end":return a.stop()}},a)}),update:u.default.mark(function a(e,t){var n,d,c,i,l;return u.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,d=e.callback,c=t.call,i=t.put,a.next=4,c(r.updateRule,n);case 4:return l=a.sent,a.next=7,i({type:"edit",payload:l});case 7:d&&d();case 8:case"end":return a.stop()}},a)})},reducers:{save:function(a,e){return(0,d.default)({},a,{data:e.payload})},edit:function(a,e){return void 0!==a&&a.data.list.forEach(function(t,n){t.id===e.payload.data.id&&(a.data.list[n]=e.payload.data)}),(0,d.default)({data:e.payload},a)}}},i=c;e.default=i}}]);