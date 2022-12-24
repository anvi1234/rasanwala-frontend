"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9230],{9230:(w,g,l)=>{l.r(g),l.d(g,{ion_datetime_button:()=>b});var p=l(5861),r=l(7936),v=l(1671),h=l(3756),u=l(4147),E=l(2854),d=l(2675);const b=class{constructor(s){var o=this;(0,r.r)(this,s),this.datetimeEl=null,this.overlayEl=null,this.datetimePresentation="date-time",this.datetimeActive=!1,this.color="primary",this.disabled=!1,this.setDateTimeText=()=>{const{datetimeEl:e,datetimePresentation:n}=this;if(!e)return;const{value:i,locale:t,hourCycle:a,preferWheel:c,multiple:y}=e;if(y)return void(0,u.p)("Multi-date selection cannot be used with ion-datetime-button.\n\nPlease upvote https://github.com/ionic-team/ionic-framework/issues/25668 if you are interested in seeing this functionality added.\n      ",this.el);const m=(0,d.p)(i||(0,d.f)()),f=(0,d.G)(t,a);switch(m.tzOffset=void 0,this.dateText=this.timeText=void 0,n){case"date-time":case"time-date":const x=(0,d.Q)(t,m),_=(0,d.H)(t,m,f);c?this.dateText=`${x} ${_}`:(this.dateText=x,this.timeText=_);break;case"date":this.dateText=(0,d.Q)(t,m);break;case"time":this.timeText=(0,d.H)(t,m,f);break;case"month-year":this.dateText=(0,d.D)(t,m);break;case"month":this.dateText=(0,d.P)(t,m,{month:"long"});break;case"year":this.dateText=(0,d.P)(t,m,{year:"numeric"})}},this.waitForDatetimeChanges=(0,p.Z)(function*(){const{datetimeEl:e}=o;return e?new Promise(n=>{(0,h.a)(e,"ionRender",n,{once:!0})}):Promise.resolve()}),this.handleDateClick=function(){var e=(0,p.Z)(function*(n){const{datetimeEl:i,datetimePresentation:t}=o;if(!i)return;let a=!1;switch(t){case"date-time":case"time-date":const c="date"!==i.presentation;!i.preferWheel&&c&&(i.presentation="date",a=!0)}o.selectedButton="date",o.presentOverlay(n,a,o.dateTargetEl)});return function(n){return e.apply(this,arguments)}}(),this.handleTimeClick=e=>{const{datetimeEl:n,datetimePresentation:i}=this;if(!n)return;let t=!1;switch(i){case"date-time":case"time-date":"time"!==n.presentation&&(n.presentation="time",t=!0)}this.selectedButton="time",this.presentOverlay(e,t,this.timeTargetEl)},this.presentOverlay=function(){var e=(0,p.Z)(function*(n,i,t){const{overlayEl:a}=o;!a||("ION-POPOVER"===a.tagName?(i&&(yield o.waitForDatetimeChanges()),a.present(Object.assign(Object.assign({},n),{detail:{ionShadowTarget:t}}))):a.present())});return function(n,i,t){return e.apply(this,arguments)}}()}componentWillLoad(){var s=this;return(0,p.Z)(function*(){const{datetime:o}=s;if(!o)return void(0,u.b)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",s.el);const e=s.datetimeEl=document.getElementById(o);if(!e)return void(0,u.b)(`No ion-datetime instance found for ID '${o}'.`,s.el);new IntersectionObserver(t=>{s.datetimeActive=t[0].isIntersecting},{threshold:.01}).observe(e);const i=s.overlayEl=e.closest("ion-modal, ion-popover");i&&i.classList.add("ion-datetime-button-overlay"),(0,h.c)(e,()=>{const t=s.datetimePresentation=e.presentation||"date-time";switch(s.setDateTimeText(),(0,h.a)(e,"ionChange",s.setDateTimeText),t){case"date-time":case"date":case"month-year":case"month":case"year":s.selectedButton="date";break;case"time-date":case"time":s.selectedButton="time"}})})()}render(){const{color:s,dateText:o,timeText:e,selectedButton:n,datetimeActive:i,disabled:t}=this,a=(0,v.b)(this);return(0,r.h)(r.H,{class:(0,E.c)(s,{[a]:!0,[`${n}-active`]:i,"datetime-button-disabled":t})},o&&(0,r.h)("button",{class:"ion-activatable",id:"date-button","aria-expanded":i?"true":"false",onClick:this.handleDateClick,disabled:t,part:"native",ref:c=>this.dateTargetEl=c},(0,r.h)("slot",{name:"date-target"},o),"md"===a&&(0,r.h)("ion-ripple-effect",null)),e&&(0,r.h)("button",{class:"ion-activatable",id:"time-button","aria-expanded":i?"true":"false",onClick:this.handleTimeClick,disabled:t,part:"native",ref:c=>this.timeTargetEl=c},(0,r.h)("slot",{name:"time-target"},e),"md"===a&&(0,r.h)("ion-ripple-effect",null)))}get el(){return(0,r.i)(this)}};b.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;margin-left:2px;margin-right:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}",md:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;margin-left:2px;margin-right:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}"}}}]);