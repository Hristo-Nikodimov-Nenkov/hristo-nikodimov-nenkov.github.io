(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0abeeec6"],{"0054":function(e,n,t){"use strict";var o=t("ff41"),c=t.n(o);c.a},9703:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Page not found.")]),t("h5",[e._v("Auto redirect to home page in "+e._s(this.secondsLeft)+" seconds.")])])},c=[],s=3,u={name:"NotFound",data:function(){return{secondsLeft:s}},methods:{countDownTimer:function(){var e=this;this.secondsLeft<1?this.$router.push("/").then((function(){console.log("Auto redirect to Home page.")})).catch((function(e){return console.log(e)})):setTimeout((function(){e.secondsLeft--,e.countDownTimer()}),1e3)}},created:function(){this.countDownTimer()}},i=u,r=(t("0054"),t("2877")),f=Object(r["a"])(i,o,c,!1,null,"e9b56dd8",null);n["default"]=f.exports},ff41:function(e,n,t){}}]);
//# sourceMappingURL=chunk-0abeeec6.7529e082.js.map