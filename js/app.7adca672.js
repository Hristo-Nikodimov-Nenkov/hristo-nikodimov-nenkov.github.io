(function(e){function t(t){for(var o,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0abeeec6":"7529e082","chunk-2d0f0c2d":"7f6a9797","chunk-2d2138f6":"d73c96ac","chunk-2d22d746":"dd60f174","chunk-5482321a":"470bec13","chunk-bae2e60a":"796250bd"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0abeeec6":1,"chunk-5482321a":1,"chunk-bae2e60a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-0abeeec6":"080002a7","chunk-2d0f0c2d":"31d6cfe0","chunk-2d2138f6":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-5482321a":"0e28cb9a","chunk-bae2e60a":"40bebe49"}[e]+".css",r=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"3e42":function(e,t,n){"use strict";var o=n("7908"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("ac1f"),n("1276"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("nav-bar")],1),n("main",[n("router-view",{staticClass:"app-page"})],1),n("footer",[n("page-footer")],1)])},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[this.mergeSectionsItems?e._l(this.getNavItems,(function(t,o){return n("div",{key:o,staticClass:"nav-item"},[n("router-link",{attrs:{to:t.url}},[e._v(e._s(t.text))])],1)})):e._l(this.sections,(function(t,o){return n("div",{key:o,staticClass:"nav-section"},e._l(t.items,(function(t,o){return n("div",{key:o,staticClass:"nav-item"},[n("router-link",{attrs:{to:t.url}},[e._v(e._s(t.text))])],1)})),0)}))],2)},s=[],c=(n("99af"),n("13d5"),n("5530")),u=n("2f62"),l=Object(u["a"])("navigation"),d=l.mapState,f=l.mapGetters,m={name:"NavBar",computed:Object(c["a"])(Object(c["a"])({getNavItems:function(){return this.sections.reduce((function(e,t){return e.concat(t.items)}),[])}},d(["mergeSectionsItems","sections"])),f(["getSection"]))},p=m,h=(n("79de"),n("2877")),g=Object(h["a"])(p,i,s,!1,null,"08f9a444",null),v=g.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" Vue v2 application hosted on GitHub Pages. ")])},S=[],k={name:"PageFooter"},y=k,O=Object(h["a"])(y,b,S,!1,null,"c5aae70e",null),j=O.exports,_={name:"App",components:{NavBar:v,PageFooter:j}},C=_,N=(n("034f"),Object(h["a"])(C,a,r,!1,null,null,null)),P=N.exports,w=n("9483");Object(w["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var E=n("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home-page"}},[n("personal-info",{attrs:{"personal-info":this.sections.personalInfo}}),e._l(this.sections.namedSections,(function(e,t){return n("div",{key:t},[n("titled-section",{attrs:{section:e}})],1)}))],2)},x=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"personal-info"}},[n("div",{attrs:{id:"personal-info-photo"}},[n("img",{attrs:{src:this.personalInfo.photoUrl,alt:"Photo"}})]),n("h1",{attrs:{id:"personal-info-name"}},[e._v(e._s(this.personalInfo.name))]),n("div",{attrs:{id:"personal-info-fields"}},e._l(this.personalInfo.fields,(function(t,o){return n("div",{key:o,staticClass:"personal-info-field"},[e._v(" "+e._s(t.title)+": "+e._s(t.value)+" ")])})),0),n("div",{attrs:{id:"personal-info-summary"}},[e._v(" "+e._s(this.personalInfo.summary)+" ")])])},J=[],B=Object(u["a"])("sections"),T=B.mapState,M=B.mapActions,F={name:"PersonalInfo",props:{personalInfo:{type:Object,required:!0}},computed:Object(c["a"])({},T(["sections"])),methods:Object(c["a"])({},M(["loadSections"])),created:function(){0===this.sections.length&&this.loadSections()}},L=F,H=(n("3e42"),Object(h["a"])(L,A,J,!1,null,"07660abd",null)),$=H.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"titled-section"},[n("h2",{staticClass:"section-name"},[e._v(e._s(e.section.title))]),n("hr"),n("div",{staticClass:"section-fields"},e._l(this.section.fields,(function(t,o){return n("div",{key:o,staticClass:"section-field"},[e._v(" "+e._s(t.title)+" - "+e._s(t.value)+" ")])})),0)])},D=[],U={name:"TitledSection",props:{section:{type:Object,required:!0}}},V=U,G=(n("a84d"),Object(h["a"])(V,q,D,!1,null,"2107e45a",null)),Q=G.exports,z=Object(u["a"])("sections"),K=z.mapState,R=z.mapActions,W={name:"Home",components:{PersonalInfo:$,TitledSection:Q},computed:Object(c["a"])({},K(["sections"])),methods:Object(c["a"])({},R(["loadSections"])),created:function(){this.loadSections()}},X=W,Y=Object(h["a"])(X,I,x,!1,null,"3a5d356a",null),Z=Y.exports;o["a"].use(E["a"]);var ee=[{path:"/",name:"Home",component:Z},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/certificates",component:function(){return n.e("chunk-bae2e60a").then(n.bind(null,"41f3"))},children:[{path:"",component:function(){return n.e("chunk-2d0f0c2d").then(n.bind(null,"9e6a"))}},{path:":id",component:function(){return n.e("chunk-5482321a").then(n.bind(null,"de8c"))}}]},{path:"/projects",name:"Projects",component:function(){return n.e("chunk-2d2138f6").then(n.bind(null,"acca"))}},{path:"*",name:"NotFound",component:function(){return n.e("chunk-0abeeec6").then(n.bind(null,"9703"))}}],te=new E["a"]({mode:"history",base:"/",routes:ee}),ne=te,oe=(n("7db0"),n("b0c0"),{namespaced:!0,state:{mergeSectionsItems:!0,sections:[{name:"Home",items:[{text:"Home",url:"/"}]},{name:"Education",items:[{text:"Certificates",url:"/certificates"}]},{name:"Projects",items:[{text:"Projects",url:"/projects"}]}]},getters:{getSection:function(e){return function(t){return e.sections.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}}},mutations:{setMergeSectionsItems:function(e,t){return e.mergeSectionsItems=t},toggleMergeSectionsItems:function(e){return e.mergeSectionsItems=!e.mergeSectionsItems}},actions:{}}),ae=[{id:"17645",code:"ccef3c72",courseName:"Programming Basics - December 2016",issuedOn:"21/03/2017",language:"C#"},{id:"22347",code:"3b5343a7",courseName:"Programming Fundamentals - Extended - May 2017",issuedOn:"27/08/2017",language:"C#"},{id:"50705",code:"9f4afe9b",courseName:"Software Technologies - October 2017",issuedOn:"12/01/2018",language:"C#, Java, JavaScript, PHP"},{id:"61486",code:"e1e3b049",courseName:"C# Advanced - September 2018",issuedOn:"20/12/2018",language:"C#"},{id:"61777",code:"8ca7e30a",courseName:"C# OOP Advanced - November 2018",issuedOn:"23/12/2018",language:"C#"},{id:"65079",code:"93f4a90f",courseName:"JS Applications - March 2019",issuedOn:"17/04/2019",language:"JavaScript ES6"},{id:"65990",code:"26b70b74",courseName:"JS Advanced - February 2019",issuedOn:"23/04/2019",language:"JavaScript ES6"},{id:"66037",code:"92513f98",courseName:"JS Fundamentals - January 2019",issuedOn:"24/04/2019",language:"JavaScript ES6"},{id:"70574",code:"6e7b4d97",courseName:"C# Web Basics - May 2019",issuedOn:"05/09/2019",language:"C#"},{id:"75936",code:"13ed4146",courseName:"Databases Basics - MS SQL Server - September 2019",issuedOn:"20/01/2020",language:"SQL"},{id:"76180",code:"6ed93fe2",courseName:"Entity Framework Core - October 2019",issuedOn:"24/01/2020",language:"C#"},{id:"82168",code:"4493403c",courseName:"ASP.NET Core - February 2020",issuedOn:"08/06/2020",language:"C#"},{id:"80664",code:"8b358ccf",courseName:"VueJS - March 2020",issuedOn:"21/04/2020",language:"JavaScript ES6"}],re={loadCertificates:function(e){0===e.state.certificates.length&&e.commit("setCertificates",ae)}},ie={namespaced:!0,state:{certificates:[]},getters:{},mutations:{setCertificates:function(e,t){return e.certificates=t}},actions:{loadCertificates:re.loadCertificates}},se=(n("4de4"),[{name:"CV Generator",description:"",language:"C#",techStack:"ASP.NET Core, Blazor"},{name:"Portfolio",description:"",language:"JavaScript",techStack:"ES6, Vue"}]),ce={loadProjects:function(e){0===e.state.projects.length&&e.commit("setProjects",se)}},ue={namespaced:!0,state:{projects:[]},getters:{getByLanguage:function(e){return function(t){return e.projects.filter((function(e){return e.language===t}))}}},mutations:{setProjects:function(e,t){return e.projects=t}},actions:{loadProjects:ce.loadProjects}},le=(n("ddb0"),{personalInfo:{photoUrl:"",name:"Hristo Nikodimov Nenkov",summary:"",fields:[{title:"E-Mail",value:"hristo.nikodimov.nenkov@gmail.com"}]},namedSections:[{title:"Education",fields:[{title:"SoftUni",value:"2016 - 2020"}]},{title:"Languages",fields:[{title:"Bulgarian",value:"Native language"},{title:"English",value:"B2"}]}]}),de={loadSections:function(e){0===e.state.sections.keys.length&&e.commit("setSections",le)}},fe={namespaced:!0,state:{sections:[]},getters:{},mutations:{setSections:function(e,t){return e.sections=t}},actions:{loadSections:de.loadSections}};o["a"].use(u["b"]);var me=new u["b"].Store({state:{},mutations:{},actions:{},modules:{navigation:oe,certificates:ie,projects:ue,sections:fe}});o["a"].config.productionTip=!1,new o["a"]({router:ne,store:me,render:function(e){return e(P)},created:function(){var e=sessionStorage.redirect;delete sessionStorage.redirect;var t="https://hristo-nikodimov-nenkov.github.io";e&&e!==location.href&&(e=e.split(t)[1],this.$router.push(e).then((function(){return console.log("Redirecting to requested url")})))}}).$mount("#app")},7908:function(e,t,n){},"79de":function(e,t,n){"use strict";var o=n("d6fb"),a=n.n(o);a.a},"85ec":function(e,t,n){},"925b":function(e,t,n){},a84d:function(e,t,n){"use strict";var o=n("925b"),a=n.n(o);a.a},d6fb:function(e,t,n){}});
//# sourceMappingURL=app.7adca672.js.map