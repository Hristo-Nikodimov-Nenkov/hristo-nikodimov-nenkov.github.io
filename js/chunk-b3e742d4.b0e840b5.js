(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3e742d4"],{"5b33":function(t,n,e){"use strict";var o=e("7cb7"),c=e.n(o);c.a},"7cb7":function(t,n,e){},9703:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Page not found.")]),e("h5",[t._v("Auto redirect to home page in "+t._s(this.secondsLeft)+" seconds.")])])},c=[],s=5,u={name:"NotFound",data:function(){return{secondsLeft:s}},methods:{countDownTimer:function(){var t=this;0===this.secondsLeft?this.$router.push("/").then((function(){console.log("Auto redirect to Home page.")})):setTimeout((function(){t.secondsLeft--,t.countDownTimer()}),1e3)}},created:function(){this.countDownTimer()}},i=u,r=(e("5b33"),e("2877")),a=Object(r["a"])(i,o,c,!1,null,"b32093a4",null);n["default"]=a.exports}}]);
//# sourceMappingURL=chunk-b3e742d4.b0e840b5.js.map