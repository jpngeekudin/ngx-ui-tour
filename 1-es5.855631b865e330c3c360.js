!function(){function t(e,n,i){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}})(e,n,i||e)}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(u){o=!0,r=u}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,i=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function p(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1kSV":function(t,o,s){"use strict";s.d(o,"a",function(){return dt}),s.d(o,"b",function(){return vt});var u=s("fXoL"),l=s("ofXK"),f=s("HDdC"),d=s("EY2u"),v=s("LRne"),b=s("XNiG"),g=s("xgIS"),w=s("PqYM"),m=s("DH7j"),y=s("yCtX"),S=s("l7GE"),O=s("ZUHj");function k(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(1===e.length){if(!Object(m.a)(e[0]))return e[0];e=e[0]}return Object(y.a)(e,void 0).lift(new _)}var _=function(){function t(){h(this,t)}return p(t,[{key:"call",value:function(t,e){return e.subscribe(new j(t))}}]),t}(),j=function(t){r(n,t);var e=a(n);function n(t){var i;return h(this,n),(i=e.call(this,t)).hasFirst=!1,i.observables=[],i.subscriptions=[],i}return p(n,[{key:"_next",value:function(t){this.observables.push(t)}},{key:"_complete",value:function(){var t=this.observables,e=t.length;if(0===e)this.destination.complete();else{for(var n=0;n<e&&!this.hasFirst;n++){var i=t[n],o=Object(O.a)(this,i,void 0,n);this.subscriptions&&this.subscriptions.push(o),this.add(o)}this.observables=null}}},{key:"notifyNext",value:function(t,e,n){if(!this.hasFirst){this.hasFirst=!0;for(var i=0;i<this.subscriptions.length;i++)if(i!==n){var o=this.subscriptions[i];o.unsubscribe(),this.remove(o)}this.subscriptions=null}this.destination.next(e)}}]),n}(S.a);s("2Vo4"),s("itXk"),s("KqfI"),s("7o/Q"),s("Lhse"),s("zx2A");var R=s("VRyK"),x=s("GyhO"),E=s("1G5W"),C=s("pLZG"),A=s("IzEk"),P=s("lJxs"),T=(s("JX91"),s("/uUt"),s("eIep"),s("vkgz")),D=function(){function t(e,n){h(this,t),this.observables=e,this.project=n}return p(t,[{key:"call",value:function(t,e){return e.subscribe(new $(t,this.observables,this.project))}}]),t}(),$=function(t){r(i,t);var e=a(i);function i(t,n,o){var r;h(this,i),(r=e.call(this,t)).observables=n,r.project=o,r.toRespond=[];var s=n.length;r.values=new Array(s);for(var a=0;a<s;a++)r.toRespond.push(a);for(var u=0;u<s;u++){var l=n[u];r.add(Object(O.a)(c(r),l,void 0,u))}return r}return p(i,[{key:"notifyNext",value:function(t,e,n){this.values[n]=e;var i=this.toRespond;if(i.length>0){var o=i.indexOf(n);-1!==o&&i.splice(o,1)}}},{key:"notifyComplete",value:function(){}},{key:"_next",value:function(t){if(0===this.toRespond.length){var e=[t].concat(n(this.values));this.project?this._tryProject(e):this.destination.next(e)}}},{key:"_tryProject",value:function(t){var e;try{e=this.project.apply(this,t)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}]),i}(S.a),H=s("3E0/"),L=s("5+tZ"),I=s("w1tV");s("Cfvw"),s("cp0P");var F=["*"];function N(t,e){if(1&t&&u.Jc(0),2&t){var n=u.nc(2);u.Kc(n.title)}}function V(t,e){}function M(t,e){if(1&t&&(u.bc(0,"h3",3),u.Hc(1,N,1,1,"ng-template",null,4,u.Ic),u.Hc(3,V,0,0,"ng-template",5),u.ac()),2&t){var n=u.Ac(2),i=u.nc();u.Jb(3),u.sc("ngTemplateOutlet",i.isTitleTemplate()?i.title:n)("ngTemplateOutletContext",i.context)}}"undefined"==typeof Element||Element.prototype.closest||(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null});var W,X=!0,B=5,K=((W=function t(){h(this,t),this.animation=X}).\u0275fac=function(t){return new(t||W)},W.\u0275prov=Object(u.Rb)({factory:function(){return new W},token:W,providedIn:"root"}),W),z=function(){},U=B,q=new Map,J=function(t,e,n,i){var o=i.context||{},r=q.get(e);if(r)switch(i.runningTransition){case"continue":return d.a;case"stop":t.run(function(){return r.transition$.complete()}),o=Object.assign(r.context,o),q.delete(e)}var s=n(e,i.animation,o)||z;if(!i.animation||"none"===window.getComputedStyle(e).transitionProperty)return t.run(function(){return s()}),Object(v.a)(void 0).pipe(function(t){return function(e){return new f.a(function(n){return e.subscribe(function(e){return t.run(function(){return n.next(e)})},function(e){return t.run(function(){return n.error(e)})},function(){return t.run(function(){return n.complete()})})})}}(t));var a=new b.a,u=new b.a,c=a.pipe(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return Object(x.a)(t,Object(v.a).apply(void 0,e))}}(!0));q.set(e,{transition$:a,complete:function(){u.next(),u.complete()},context:o});var l=function(t){var e=window.getComputedStyle(t),n=e.transitionDelay,i=e.transitionDuration;return 1e3*(parseFloat(n)+parseFloat(i))}(e);return t.runOutsideAngular(function(){var n=Object(g.a)(e,"transitionend").pipe(Object(E.a)(c),Object(C.a)(function(t){return t.target===e}));k(Object(w.a)(l+U).pipe(Object(E.a)(c)),n,u).pipe(Object(E.a)(c)).subscribe(function(){q.delete(e),t.run(function(){s(),a.next(),a.complete()})})}),a.asObservable()},Z=function(t){return t[t.Tab=9]="Tab",t[t.Enter=13]="Enter",t[t.Escape=27]="Escape",t[t.Space=32]="Space",t[t.PageUp=33]="PageUp",t[t.PageDown=34]="PageDown",t[t.End=35]="End",t[t.Home=36]="Home",t[t.ArrowLeft=37]="ArrowLeft",t[t.ArrowUp=38]="ArrowUp",t[t.ArrowRight=39]="ArrowRight",t[t.ArrowDown=40]="ArrowDown",t}({}),G=function(t,e){return!!e&&e.some(function(e){return e.contains(t)})},Y=function(t,e){return!e||null!=function(t,e){return e?void 0===t.closest?null:t.closest(e):null}(t,e)},Q="undefined"!=typeof navigator&&!!navigator.userAgent&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2||/Android/.test(navigator.userAgent));["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");var tt=/\s+/,et=new(function(){function t(){h(this,t)}return p(t,[{key:"getAllStyles",value:function(t){return window.getComputedStyle(t)}},{key:"getStyle",value:function(t,e){return this.getAllStyles(t)[e]}},{key:"isStaticPositioned",value:function(t){return"static"===(this.getStyle(t,"position")||"static")}},{key:"offsetParent",value:function(t){for(var e=t.offsetParent||document.documentElement;e&&e!==document.documentElement&&this.isStaticPositioned(e);)e=e.offsetParent;return e||document.documentElement}},{key:"position",value:function(t){var e,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i={width:0,height:0,top:0,bottom:0,left:0,right:0};if("fixed"===this.getStyle(t,"position"))e={top:(e=t.getBoundingClientRect()).top,bottom:e.bottom,left:e.left,right:e.right,height:e.height,width:e.width};else{var o=this.offsetParent(t);e=this.offset(t,!1),o!==document.documentElement&&(i=this.offset(o,!1)),i.top+=o.clientTop,i.left+=o.clientLeft}return e.top-=i.top,e.bottom-=i.top,e.left-=i.left,e.right-=i.left,n&&(e.top=Math.round(e.top),e.bottom=Math.round(e.bottom),e.left=Math.round(e.left),e.right=Math.round(e.right)),e}},{key:"offset",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t.getBoundingClientRect(),i=window.pageYOffset-document.documentElement.clientTop,o=window.pageXOffset-document.documentElement.clientLeft,r={height:n.height||t.offsetHeight,width:n.width||t.offsetWidth,top:n.top+i,bottom:n.bottom+i,left:n.left+o,right:n.right+o};return e&&(r.height=Math.round(r.height),r.width=Math.round(r.width),r.top=Math.round(r.top),r.bottom=Math.round(r.bottom),r.left=Math.round(r.left),r.right=Math.round(r.right)),r}},{key:"positionElements",value:function(t,n,i,o){var r=e(i.split("-"),2),s=r[0],a=void 0===s?"top":s,u=r[1],c=void 0===u?"center":u,l=o?this.offset(t,!1):this.position(t,!1),h=this.getAllStyles(n),f=parseFloat(h.marginTop),p=parseFloat(h.marginBottom),d=parseFloat(h.marginLeft),v=parseFloat(h.marginRight),b=0,g=0;switch(a){case"top":b=l.top-(n.offsetHeight+f+p);break;case"bottom":b=l.top+l.height;break;case"left":g=l.left-(n.offsetWidth+d+v);break;case"right":g=l.left+l.width}switch(c){case"top":b=l.top;break;case"bottom":b=l.top+l.height-n.offsetHeight;break;case"left":g=l.left;break;case"right":g=l.left+l.width-n.offsetWidth;break;case"center":"top"===a||"bottom"===a?g=l.left+l.width/2-n.offsetWidth/2:b=l.top+l.height/2-n.offsetHeight/2}n.style.transform="translate(".concat(Math.round(g),"px, ").concat(Math.round(b),"px)");var w=n.getBoundingClientRect(),m=document.documentElement,y=window.innerHeight||m.clientHeight,S=window.innerWidth||m.clientWidth;return w.left>=0&&w.top>=0&&w.right<=S&&w.bottom<=y}}]),t}());new Date(1882,10,12),new Date(2174,10,25);var nt,it,ot,rt,st=function t(e,n,i){h(this,t),this.nodes=e,this.viewRef=n,this.componentRef=i},at=function(){function t(e,n,i,o,r,s,a){h(this,t),this._type=e,this._injector=n,this._viewContainerRef=i,this._renderer=o,this._ngZone=r,this._componentFactoryResolver=s,this._applicationRef=a,this._windowRef=null,this._contentRef=null}return p(t,[{key:"open",value:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this._windowRef||(this._contentRef=this._getContentRef(t,e),this._windowRef=this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type),this._viewContainerRef.length,this._injector,this._contentRef.nodes));var o=this._windowRef.location.nativeElement,r=this._ngZone.onStable.pipe(Object(A.a)(1),Object(L.a)(function(){return J(n._ngZone,o,function(t){return t.classList.add("show")},{animation:i,runningTransition:"continue"})}));return{windowRef:this._windowRef,transition$:r}}},{key:"close",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._windowRef?J(this._ngZone,this._windowRef.location.nativeElement,function(t){return t.classList.remove("show")},{animation:e,runningTransition:"stop"}).pipe(Object(T.a)(function(){var e;t._windowRef&&(t._viewContainerRef.remove(t._viewContainerRef.indexOf(t._windowRef.hostView)),t._windowRef=null),(null===(e=t._contentRef)||void 0===e?void 0:e.viewRef)&&(t._applicationRef.detachView(t._contentRef.viewRef),t._contentRef.viewRef.destroy(),t._contentRef=null)})):Object(v.a)(void 0)}},{key:"_getContentRef",value:function(t,e){if(t){if(t instanceof u.T){var n=t.createEmbeddedView(e);return this._applicationRef.attachView(n),new st([n.rootNodes],n)}return new st([[this._renderer.createText("".concat(t))]])}return new st([])}}]),t}(),ut=function(){function t(e,n){h(this,t),this.open=e,this.close=n,n||(this.close=e)}return p(t,[{key:"isManual",value:function(){return"manual"===this.open||"manual"===this.close}}]),t}(),ct={hover:["mouseenter","mouseleave"],focus:["focusin","focusout"]},lt=function(t){return t>0?Object(H.a)(t):function(t){return t}},ht=((rt=function(){function t(e){h(this,t),this._ngbConfig=e,this.autoClose=!0,this.placement="auto",this.triggers="click",this.disablePopover=!1,this.openDelay=0,this.closeDelay=0}return p(t,[{key:"animation",get:function(){return void 0===this._animation?this._ngbConfig.animation:this._animation},set:function(t){this._animation=t}}]),t}()).\u0275fac=function(t){return new(t||rt)(u.ic(K))},rt.\u0275prov=Object(u.Rb)({factory:function(){return new rt(Object(u.ic)(K))},token:rt,providedIn:"root"}),rt),ft=0,pt=((ot=function(){function t(){h(this,t)}return p(t,[{key:"isTitleTemplate",value:function(){return this.title instanceof u.T}}]),t}()).\u0275fac=function(t){return new(t||ot)},ot.\u0275cmp=u.Pb({type:ot,selectors:[["ngb-popover-window"]],hostAttrs:["role","tooltip"],hostVars:5,hostBindings:function(t,e){2&t&&(u.ec("id",e.id),u.Lb("popover"+(e.popoverClass?" "+e.popoverClass:"")),u.Nb("fade",e.animation))},inputs:{animation:"animation",title:"title",id:"id",popoverClass:"popoverClass",context:"context"},ngContentSelectors:F,decls:4,vars:1,consts:[[1,"arrow"],["class","popover-header",4,"ngIf"],[1,"popover-body"],[1,"popover-header"],["simpleTitle",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(u.rc(),u.Wb(0,"div",0),u.Hc(1,M,4,2,"h3",1),u.bc(2,"div",2),u.qc(3),u.ac()),2&t&&(u.Jb(1),u.sc("ngIf",e.title))},directives:[l.l,l.m],styles:["ngb-popover-window.bs-popover-bottom>.arrow,ngb-popover-window.bs-popover-top>.arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left>.arrow,ngb-popover-window.bs-popover-top-left>.arrow{left:2em}ngb-popover-window.bs-popover-bottom-right>.arrow,ngb-popover-window.bs-popover-top-right>.arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left>.arrow,ngb-popover-window.bs-popover-right>.arrow{margin-top:-.5rem;top:50%}ngb-popover-window.bs-popover-left-top>.arrow,ngb-popover-window.bs-popover-right-top>.arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom>.arrow,ngb-popover-window.bs-popover-right-bottom>.arrow{bottom:.7em;top:auto}"],encapsulation:2,changeDetection:0}),ot),dt=((it=function(){function t(n,o,r,s,a,c,l,f,p,d){var v=this;h(this,t),this._elementRef=n,this._renderer=o,this._ngZone=l,this._document=f,this._changeDetector=p,this.shown=new u.q,this.hidden=new u.q,this._ngbPopoverWindowId="ngb-popover-"+ft++,this._windowRef=null,this.animation=c.animation,this.autoClose=c.autoClose,this.placement=c.placement,this.triggers=c.triggers,this.container=c.container,this.disablePopover=c.disablePopover,this.popoverClass=c.popoverClass,this.openDelay=c.openDelay,this.closeDelay=c.closeDelay,this._popupService=new at(pt,r,a,o,this._ngZone,s,d),this._zoneSubscription=l.onStable.subscribe(function(){v._windowRef&&function(t,n,o,r,s){var a=Array.isArray(o)?o:o.split(tt),u=["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right","left-top","left-bottom","right-top","right-bottom"],c=n.classList,l=function(t){var n=e(t.split("-"),2),i=n[0],o=n[1],r=[];return r.push("bs-popover-".concat(i)),o&&r.push("bs-popover-".concat(i,"-").concat(o)),r.forEach(function(t){c.add(t)}),r};u.forEach(function(t){c.remove("bs-popover-".concat(t))});var h=a.findIndex(function(t){return"auto"===t});h>=0&&u.forEach(function(t){null==a.find(function(e){return-1!==e.search("^"+t)})&&a.splice(h++,1,t)});var f=n.style;f.position="absolute",f.top="0",f.left="0",f["will-change"]="transform";var p,d=null,v=!1,b=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw s}}}}(a);try{for(b.s();!(p=b.n()).done;){var g=l(d=p.value);if(et.positionElements(t,n,d,r)){v=!0;break}g.forEach(function(t){c.remove(t)})}}catch(w){b.e(w)}finally{b.f()}v||(l(d=a[0]),et.positionElements(t,n,d,r))}(v._elementRef.nativeElement,v._windowRef.location.nativeElement,v.placement,"body"===v.container)})}return p(t,[{key:"_isDisabled",value:function(){return!!this.disablePopover||!this.ngbPopover&&!this.popoverTitle}},{key:"open",value:function(t){var n=this;if(!this._windowRef&&!this._isDisabled()){var i=this._popupService.open(this.ngbPopover,t,this.animation),o=i.windowRef,r=i.transition$;this._windowRef=o,this._windowRef.instance.animation=this.animation,this._windowRef.instance.title=this.popoverTitle,this._windowRef.instance.context=t,this._windowRef.instance.popoverClass=this.popoverClass,this._windowRef.instance.id=this._ngbPopoverWindowId,this._renderer.setAttribute(this._elementRef.nativeElement,"aria-describedby",this._ngbPopoverWindowId),"body"===this.container&&this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement),this._windowRef.changeDetectorRef.detectChanges(),this._windowRef.changeDetectorRef.markForCheck(),function(t,i,o,r,s,a,u,c){var l;o&&t.runOutsideAngular((l=function(){var r=Object(g.a)(i,"keydown").pipe(Object(E.a)(s),Object(C.a)(function(t){return t.which===Z.Escape}),Object(T.a)(function(t){return t.preventDefault()})),u=Object(g.a)(i,"mousedown").pipe(Object(P.a)(function(t){var e=t.target;return 2!==t.button&&!G(e,void 0)&&("inside"===o?G(e,a)&&Y(e,c):"outside"===o?!G(e,a):Y(e,c)||!G(e,a))}),Object(E.a)(s)),l=Object(g.a)(i,"mouseup").pipe(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){var n;return"function"==typeof e[e.length-1]&&(n=e.pop()),t.lift(new D(e,n))}}(u),Object(C.a)(function(t){var n=e(t,2);return n[0],n[1]}),Object(H.a)(0),Object(E.a)(s));k([r.pipe(Object(P.a)(function(t){return 0})),l.pipe(Object(P.a)(function(t){return 1}))]).subscribe(function(e){return t.run(function(){return n.close()})})},Q?function(){return setTimeout(function(){return l()},100)}:l))}(this._ngZone,this._document,this.autoClose,0,this.hidden,[this._windowRef.location.nativeElement]),r.subscribe(function(){return n.shown.emit()})}}},{key:"close",value:function(){var t=this;this._windowRef&&(this._renderer.removeAttribute(this._elementRef.nativeElement,"aria-describedby"),this._popupService.close(this.animation).subscribe(function(){t._windowRef=null,t.hidden.emit(),t._changeDetector.markForCheck()}))}},{key:"toggle",value:function(){this._windowRef?this.close():this.open()}},{key:"isOpen",value:function(){return null!=this._windowRef}},{key:"ngOnInit",value:function(){this._unregisterListenersFn=function(t,e,n,i,o,r){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ct,n=(t||"").trim();if(0===n.length)return[];var i=n.split(/\s+/).map(function(t){return t.split(":")}).map(function(t){var n=e[t[0]]||t;return new ut(n[0],n[1])}),o=i.filter(function(t){return t.isManual()});if(o.length>1)throw"Triggers parse error: only one manual trigger is allowed";if(1===o.length&&i.length>1)throw"Triggers parse error: manual trigger can't be mixed with other triggers";return i}(n);if(1===u.length&&u[0].isManual())return function(){};var c=function(t,e,n,i){return new f.a(function(o){var r=[],s=function(){return o.next(!0)},a=function(){return o.next(!1)},u=function(){return o.next(!i())};return n.forEach(function(n){n.open===n.close?r.push(t.listen(e,n.open,u)):r.push(t.listen(e,n.open,s),t.listen(e,n.close,a))}),function(){r.forEach(function(t){return t()})}})}(t,e,u,i).pipe(function(t,e,n){return function(i){var o=null,r=i.pipe(Object(P.a)(function(t){return{open:t}}),Object(C.a)(function(t){var e=n();return e===t.open||o&&o.open!==e?(o&&o.open!==t.open&&(o=null),!1):(o=t,!0)}),Object(I.a)()),s=r.pipe(Object(C.a)(function(t){return t.open}),lt(t)),a=r.pipe(Object(C.a)(function(t){return!t.open}),lt(e));return Object(R.a)(s,a).pipe(Object(C.a)(function(t){return t===o&&(o=null,t.open!==n())}),Object(P.a)(function(t){return t.open}))}}(s,a,i)).subscribe(function(t){return t?o():r()});return function(){return c.unsubscribe()}}(this._renderer,this._elementRef.nativeElement,this.triggers,this.isOpen.bind(this),this.open.bind(this),this.close.bind(this),+this.openDelay,+this.closeDelay)}},{key:"ngOnChanges",value:function(t){var e=t.ngbPopover,n=t.popoverTitle,i=t.disablePopover,o=t.popoverClass;o&&this.isOpen()&&(this._windowRef.instance.popoverClass=o.currentValue),(e||n||i)&&this._isDisabled()&&this.close()}},{key:"ngOnDestroy",value:function(){this.close(),this._unregisterListenersFn&&this._unregisterListenersFn(),this._zoneSubscription.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||it)(u.Vb(u.o),u.Vb(u.M),u.Vb(u.w),u.Vb(u.l),u.Vb(u.X),u.Vb(ht),u.Vb(u.G),u.Vb(l.c),u.Vb(u.i),u.Vb(u.g))},it.\u0275dir=u.Qb({type:it,selectors:[["","ngbPopover",""]],inputs:{animation:"animation",autoClose:"autoClose",placement:"placement",triggers:"triggers",container:"container",disablePopover:"disablePopover",popoverClass:"popoverClass",openDelay:"openDelay",closeDelay:"closeDelay",ngbPopover:"ngbPopover",popoverTitle:"popoverTitle"},outputs:{shown:"shown",hidden:"hidden"},exportAs:["ngbPopover"],features:[u.Hb]}),it),vt=((nt=function t(){h(this,t)}).\u0275fac=function(t){return new(t||nt)},nt.\u0275mod=u.Tb({type:nt}),nt.\u0275inj=u.Sb({imports:[[l.b]]}),nt);new u.v("live announcer delay",{providedIn:"root",factory:function(){return 100}})},"3E0/":function(t,e,n){"use strict";n.d(e,"a",function(){return u});var i=n("D0XW"),o=n("7o/Q"),s=n("WMd4");function u(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.a,o=(e=t)instanceof Date&&!isNaN(+e)?+t-n.now():Math.abs(t);return function(t){return t.lift(new c(o,n))}}var c=function(){function t(e,n){h(this,t),this.delay=e,this.scheduler=n}return p(t,[{key:"call",value:function(t,e){return e.subscribe(new l(t,this.delay,this.scheduler))}}]),t}(),l=function(t){r(n,t);var e=a(n);function n(t,i,o){var r;return h(this,n),(r=e.call(this,t)).delay=i,r.scheduler=o,r.queue=[],r.active=!1,r.errored=!1,r}return p(n,[{key:"_schedule",value:function(t){this.active=!0,this.destination.add(t.schedule(n.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))}},{key:"scheduleNotification",value:function(t){if(!0!==this.errored){var e=this.scheduler,n=new f(e.now()+this.delay,t);this.queue.push(n),!1===this.active&&this._schedule(e)}}},{key:"_next",value:function(t){this.scheduleNotification(s.a.createNext(t))}},{key:"_error",value:function(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleNotification(s.a.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(t){for(var e=t.source,n=e.queue,i=t.scheduler,o=t.destination;n.length>0&&n[0].time-i.now()<=0;)n.shift().notification.observe(o);if(n.length>0){var r=Math.max(0,n[0].time-i.now());this.schedule(t,r)}else this.unsubscribe(),e.active=!1}}]),n}(o.a),f=function t(e,n){h(this,t),this.time=e,this.notification=n}},PCNd:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("ofXK"),o=n("fXoL"),r=function(){var t=function t(){h(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Tb({type:t}),t.\u0275inj=o.Sb({imports:[[i.b]]}),t}()},cp0P:function(t,e,i){"use strict";i.d(e,"a",function(){return c});var o=i("HDdC"),r=i("DH7j"),s=i("lJxs"),a=i("XoHu"),u=i("Cfvw");function c(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];if(1===e.length){var o=e[0];if(Object(r.a)(o))return l(o,null);if(Object(a.a)(o)&&Object.getPrototypeOf(o)===Object.prototype){var u=Object.keys(o);return l(u.map(function(t){return o[t]}),u)}}if("function"==typeof e[e.length-1]){var c=e.pop();return l(e=1===e.length&&Object(r.a)(e[0])?e[0]:e,null).pipe(Object(s.a)(function(t){return c.apply(void 0,n(t))}))}return l(e,null)}function l(t,e){return new o.a(function(n){var i=t.length;if(0!==i)for(var o=new Array(i),r=0,s=0,a=function(a){var c=Object(u.a)(t[a]),l=!1;n.add(c.subscribe({next:function(t){l||(l=!0,s++),o[a]=t},error:function(t){return n.error(t)},complete:function(){++r!==i&&l||(s===i&&n.next(e?e.reduce(function(t,e,n){return t[e]=o[n],t},{}):o),n.complete())}}))},c=0;c<i;c++)a(c);else n.complete()})}},kucA:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n("fXoL"),o=n("LRne"),r=n("3E0/"),s=n("ofXK"),a=["tr-data-loading",""];function u(t,e){1&t&&(i.Zb(0),i.bc(1,"strong"),i.Jc(2,"Loading data..."),i.ac(),i.Yb())}function c(t,e){if(1&t&&(i.Jc(0),i.oc(1,"json")),2&t){var n=i.nc(2);i.Lc(" Fake data: ",i.pc(1,1,n.fakeData)," ")}}function l(t,e){if(1&t&&(i.bc(0,"td",1),i.Hc(1,u,3,0,"ng-container",2),i.Hc(2,c,2,3,"ng-template",null,3,i.Ic),i.ac()),2&t){var n=i.Ac(3),o=i.nc();i.Jb(1),i.sc("ngIf",o.isLoading)("ngIfElse",n)}}var f=function(){var t=function(){function t(){h(this,t),this.dataLoadingChange=new i.q}return p(t,[{key:"loadData",value:function(){var t=this;this.isLoading=!0,this.dataLoadingChange.emit(this.isLoading),Object(o.a)([1,2,3]).pipe(Object(r.a)(1e3)).subscribe(function(e){t.isLoading=!1,t.fakeData=e,t.dataLoadingChange.emit(t.isLoading)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Pb({type:t,selectors:[["","tr-data-loading",""]],outputs:{dataLoadingChange:"dataLoadingChange"},attrs:a,decls:1,vars:1,consts:[["colspan","4",4,"ngIf"],["colspan","4"],[4,"ngIf","ngIfElse"],["finishedLoading",""]],template:function(t,e){1&t&&i.Hc(0,l,4,2,"td",0),2&t&&i.sc("ngIf",e.isLoading||e.fakeData)},directives:[s.l],pipes:[s.f],encapsulation:2}),t}()},ts7W:function(e,n,i){"use strict";i.d(n,"a",function(){return L}),i.d(n,"b",function(){return $}),i.d(n,"c",function(){return D}),i.d(n,"d",function(){return H}),i.d(n,"e",function(){return T}),i.d(n,"f",function(){return P}),i.d(n,"g",function(){return I});var o=i("ofXK"),s=i("tyNb"),u=i("XNiG"),c=i("VRyK"),f=i("Cfvw"),d=i("xgIS"),v=i("HDdC"),b=i("D0XW"),g=i("Y7HM");function w(t){var e=t.subscriber,n=t.counter,i=t.period;e.next(n),this.schedule({subscriber:e,counter:n+1,period:i},i)}var m,y,S,O,k=i("lJxs"),_=i("pLZG"),j=i("SxV6"),R=i("zx2A"),x=function(){function t(e){h(this,t),this.durationSelector=e}return p(t,[{key:"call",value:function(t,e){return e.subscribe(new E(t,this.durationSelector))}}]),t}(),E=function(e){r(i,e);var n=a(i);function i(t,e){var o;return h(this,i),(o=n.call(this,t)).durationSelector=e,o.hasValue=!1,o}return p(i,[{key:"_next",value:function(t){try{var e=this.durationSelector.call(this,t);e&&this._tryNext(t,e)}catch(n){this.destination.error(n)}}},{key:"_complete",value:function(){this.emitValue(),this.destination.complete()}},{key:"_tryNext",value:function(t,e){var n=this.durationSubscription;this.value=t,this.hasValue=!0,n&&(n.unsubscribe(),this.remove(n)),(n=Object(R.c)(e,new R.a(this)))&&!n.closed&&this.add(this.durationSubscription=n)}},{key:"notifyNext",value:function(){this.emitValue()}},{key:"notifyComplete",value:function(){this.emitValue()}},{key:"emitValue",value:function(){if(this.hasValue){var e=this.value,n=this.durationSubscription;n&&(this.durationSubscription=void 0,n.unsubscribe(),this.remove(n)),this.value=void 0,this.hasValue=!1,t(l(i.prototype),"_next",this).call(this,e)}}}]),i}(R.b),C=i("fXoL"),A=["*"],P=function(t){return t[t.OFF=0]="OFF",t[t.ON=1]="ON",t[t.PAUSED=2]="PAUSED",t}({}),T=((O=function(){function t(e){h(this,t),this.router=e,this.stepShow$=new u.a,this.stepHide$=new u.a,this.initialize$=new u.a,this.start$=new u.a,this.end$=new u.a,this.pause$=new u.a,this.resume$=new u.a,this.startWaiting$=new u.a,this.stopWaiting$=new u.a,this.anchorRegister$=new u.a,this.anchorUnregister$=new u.a,this.events$=Object(c.a)(this.stepShow$.pipe(Object(k.a)(function(t){return{name:"stepShow",value:t}})),this.stepHide$.pipe(Object(k.a)(function(t){return{name:"stepHide",value:t}})),this.initialize$.pipe(Object(k.a)(function(t){return{name:"initialize",value:t}})),this.start$.pipe(Object(k.a)(function(t){return{name:"start",value:t}})),this.end$.pipe(Object(k.a)(function(t){return{name:"end",value:t}})),this.pause$.pipe(Object(k.a)(function(t){return{name:"pause",value:t}})),this.resume$.pipe(Object(k.a)(function(t){return{name:"resume",value:t}})),this.anchorRegister$.pipe(Object(k.a)(function(t){return{name:"anchorRegister",value:t}})),this.anchorUnregister$.pipe(Object(k.a)(function(t){return{name:"anchorUnregister",value:t}}))),this.steps=[],this.anchors={},this.status=P.OFF,this.isHotKeysEnabled=!0}return p(t,[{key:"initialize",value:function(t,e){t&&t.length>0&&(this.status=P.OFF,this.steps=t.map(function(t){return Object.assign({},e,t)}),this.initialize$.next(this.steps))}},{key:"disableHotkeys",value:function(){this.isHotKeysEnabled=!1}},{key:"enableHotkeys",value:function(){this.isHotKeysEnabled=!0}},{key:"start",value:function(){this.startAt(0)}},{key:"startAt",value:function(t){var e=this;this.status=P.ON,this.goToStep(this.loadStep(t)),this.start$.next(),this.router.events.pipe(Object(_.a)(function(t){return t instanceof s.a}),Object(j.a)()).subscribe(function(){e.currentStep&&e.currentStep.hasOwnProperty("route")&&e.hideStep(e.currentStep)})}},{key:"end",value:function(){this.status=P.OFF,this.hideStep(this.currentStep),this.currentStep=void 0,this.end$.next()}},{key:"pause",value:function(){this.status=P.PAUSED,this.hideStep(this.currentStep),this.pause$.next()}},{key:"resume",value:function(){this.status=P.ON,this.showStep(this.currentStep),this.resume$.next()}},{key:"toggle",value:function(t){t?this.currentStep?this.pause():this.resume():this.currentStep?this.end():this.start()}},{key:"next",value:function(){this.hasNext(this.currentStep)&&this.goToStep(this.loadStep(this.currentStep.nextStep||this.steps.indexOf(this.currentStep)+1))}},{key:"hasNext",value:function(t){return t?void 0!==t.nextStep||this.steps.indexOf(t)<this.steps.length-1:(console.warn("Can't get next step. No currentStep."),!1)}},{key:"prev",value:function(){this.hasPrev(this.currentStep)&&this.goToStep(this.loadStep(this.currentStep.prevStep||this.steps.indexOf(this.currentStep)-1))}},{key:"hasPrev",value:function(t){return t?void 0!==t.prevStep||this.steps.indexOf(t)>0:(console.warn("Can't get previous step. No currentStep."),!1)}},{key:"goto",value:function(t){this.goToStep(this.loadStep(t))}},{key:"register",value:function(t,e){if(t){if(this.anchors[t])throw new Error("anchorId "+t+" already registered!");this.anchors[t]=e,this.anchorRegister$.next(t)}}},{key:"unregister",value:function(t){t&&(delete this.anchors[t],this.anchorUnregister$.next(t))}},{key:"getStatus",value:function(){return this.status}},{key:"isHotkeysEnabled",value:function(){return this.isHotKeysEnabled}},{key:"goToStep",value:function(t){var e=this;if(!t)return console.warn("Can't go to non-existent step"),void this.end();this.currentStep&&this.hideStep(this.currentStep);var n=new Promise(function(t){return t(!0)});"string"==typeof t.route?n=this.router.navigateByUrl(t.route):Array.isArray(t.route)&&(n=this.router.navigate(t.route)),n.then(function(n){!1===n||t.waitFor?!1!==n&&e.wait(t):setTimeout(function(){return e.setCurrentStep(t)})})}},{key:"wait",value:function(t){var e=this,n=Object(f.a)(t.waitFor);this.startWaiting$.next(t),n.pipe(Object(j.a)()).subscribe(function(){setTimeout(function(){return e.setCurrentStep(t)}),e.stopWaiting$.next(t)})}},{key:"loadStep",value:function(t){return"number"==typeof t?this.steps[t]:this.steps.find(function(e){return e.stepId===t})}},{key:"setCurrentStep",value:function(t){var e=this;this.currentStep=t,this.showStep(this.currentStep),this.router.events.pipe(Object(_.a)(function(t){return t instanceof s.a}),Object(j.a)()).subscribe(function(){e.currentStep&&e.currentStep.hasOwnProperty("route")&&e.hideStep(e.currentStep)})}},{key:"showStep",value:function(t){var e=this.anchors[t&&t.anchorId];if(!e)return console.warn("Can't attach to unregistered anchor with id "+t.anchorId),void this.end();e.showTourStep(t),this.stepShow$.next(t)}},{key:"hideStep",value:function(t){var e=this.anchors[t&&t.anchorId];e&&(e.hideTourStep(),this.stepHide$.next(t))}}]),t}()).\u0275fac=function(t){return new(t||O)(C.ic(s.b))},O.\u0275prov=C.Rb({token:O,factory:O.\u0275fac}),O),D=((S=function(){function t(e){h(this,t),this.tourService=e}return p(t,[{key:"onEscapeKey",value:function(){this.tourService.getStatus()===P.ON&&this.tourService.isHotkeysEnabled()&&this.tourService.end()}},{key:"onArrowRightKey",value:function(){this.tourService.getStatus()===P.ON&&this.tourService.hasNext(this.tourService.currentStep)&&this.tourService.isHotkeysEnabled()&&this.tourService.next()}},{key:"onArrowLeftKey",value:function(){this.tourService.getStatus()===P.ON&&this.tourService.hasPrev(this.tourService.currentStep)&&this.tourService.isHotkeysEnabled()&&this.tourService.prev()}}]),t}()).\u0275fac=function(t){return new(t||S)(C.Vb(T))},S.\u0275cmp=C.Pb({type:S,selectors:[["tour-hotkey-listener"]],hostBindings:function(t,e){1&t&&C.lc("keydown.Escape",function(){return e.onEscapeKey()},!1,C.Bc)("keydown.ArrowRight",function(){return e.onArrowRightKey()},!1,C.Bc)("keydown.ArrowLeft",function(){return e.onArrowLeftKey()},!1,C.Bc)},ngContentSelectors:A,decls:1,vars:0,template:function(t,e){1&t&&(C.rc(),C.qc(0))},encapsulation:2}),S),$=((y=function(){function t(e){h(this,t),this.renderer=e.createRenderer(null,null)}return p(t,[{key:"show",value:function(t){var e=t.nativeElement.getBoundingClientRect();this.backdropElement||(this.backdropElement=this.renderer.createElement("div"),this.renderer.addClass(this.backdropElement,"ngx-ui-tour_backdrop"),this.renderer.appendChild(document.body,this.backdropElement),this.subscribeToWindowEvents(t.nativeElement)),this.setStyles(e)}},{key:"subscribeToWindowEvents",value:function(t){var e,n=this,i=Object(d.a)(window,"resize");this.windowResizeSubscription$=i.pipe((e=function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.a;return(!Object(g.a)(t)||t<0)&&(t=0),e&&"function"==typeof e.schedule||(e=b.a),new v.a(function(n){return n.add(e.schedule(w,t,{subscriber:n,counter:0,period:t})),n})}(10)},function(t){return t.lift(new x(e))})).subscribe(function(){var e=t.getBoundingClientRect();n.setStyles(e)})}},{key:"close",value:function(){this.backdropElement&&(this.renderer.removeChild(document.body,this.backdropElement),this.windowResizeSubscription$.unsubscribe(),this.backdropElement=null)}},{key:"setStyles",value:function(t){for(var e={position:"absolute",width:"".concat(t.width,"px"),height:"".concat(t.height,"px"),top:"".concat(t.top+window.scrollY,"px"),left:"".concat(t.left+window.scrollX,"px"),"box-shadow":"0 0 0 9999px rgba(0, 0, 0, 0.7)","z-index":"100"},n=0,i=Object.keys(e);n<i.length;n++){var o=i[n];this.renderer.setStyle(this.backdropElement,o,e[o])}}}]),t}()).\u0275fac=function(t){return new(t||y)(C.ic(C.N))},y.\u0275prov=C.Rb({token:y,factory:y.\u0275fac}),y),H=((m=function(){function t(){h(this,t)}return p(t,null,[{key:"forRoot",value:function(){return{ngModule:t,providers:[T,$]}}}]),t}()).\u0275fac=function(t){return new(t||m)},m.\u0275mod=C.Tb({type:m}),m.\u0275inj=C.Sb({imports:[[o.b,s.e]]}),m),L=function(t){return t[t.Top=0]="Top",t[t.Bottom=1]="Bottom",t[t.All=2]="All",t}({});function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L.All,n=window.innerWidth,i=window.innerHeight,o=t.getBoundingClientRect(),r=o.left>=0&&o.right<=n,s=o.top>=0,a=o.bottom<=i;return e===L.Top?s&&r:e===L.Bottom?a&&r:s&&a&&r}}}])}();