(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5482321a"],{4283:function(t,e,i){},c4b4:function(t,e,i){"use strict";var a=i("4283"),c=i.n(a);c.a},de8c:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"details"}},[i("div",{attrs:{id:"thumb"}},[i("img",{attrs:{src:t.getCertificateUrl,alt:"Certificate preview image"}})]),i("div",{attrs:{id:"info"}},[i("div",{attrs:{id:"course-name"}},[t._v(" Course: "+t._s(t.getCertificate.courseName))]),i("div",{attrs:{id:"issued-on"}},[t._v("Issued On: "+t._s(t.getCertificate.issuedOn))]),i("div",{attrs:{id:"summary"}},[t._v(" "+t._s(t.getCertificate.summary)+" ")])])])},c=[],r=(i("99af"),i("7db0"),i("5530")),s=i("2f62"),n=Object(s["a"])("certificates"),f=n.mapState,d=n.mapActions,o={name:"CertificateDetails",components:{},computed:Object(r["a"])(Object(r["a"])({},f(["certificates"])),{},{getCertificate:function(){var t=this;return this.certificates.find((function(e){return e.id===t.$route.params.id}))},getCertificateUrl:function(){return"https://softuni.bg/certificates/certificates/converttoimage/".concat(this.getCertificate.id,"?code=").concat(this.getCertificate.code)}}),methods:Object(r["a"])({},d(["loadCertificates"])),created:function(){var t=this;this.certificate=this.certificates.find((function(e){return e.id===t.$route.params.id}))}},u=o,m=(i("c4b4"),i("2877")),v=Object(m["a"])(u,a,c,!1,null,"73bc60ba",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-5482321a.470bec13.js.map