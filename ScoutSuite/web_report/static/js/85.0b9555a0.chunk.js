(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[85],{564:function(e,t,c){"use strict";c.r(t);var n=c(1),a=(c(0),c(16)),s=c.n(a),i=c(30),r=c.n(i),l=c(91),j=c(739),u=c(71),o=(c(757),c(746));t.default=function(e){var t=e.mfaDevices,c=e.accessKeys,a=e.loginProfile;return Object(n.jsxs)("div",{className:"authentication-methods",children:[Object(n.jsx)(j.c,{label:"Password enabled",valuePath:"LoginProfile",renderValue:function(e){return Object(l.e)(!r()(e))}}),Object(n.jsx)(j.c,{label:"Multi-Factor enabled",valuePath:"MFADevices",errorPath:"mfa_enabled",renderValue:function(e){return Object(l.e)(!r()(e))}}),!r()(t)&&Object(n.jsx)("ul",{children:t.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{label:"Serial Number",value:e.SerialNumber})},t)}))}),Object(n.jsx)(j.c,{label:"Access Keys",valuePath:"AccessKeys",errorPath:"multiple_api_keys",renderValue:function(e){return s()(e,"length",0)}}),!r()(c)&&Object(n.jsx)("ul",{children:c.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)(j.c,{errorPath:"AccessKeys.".concat(t),renderValue:function(){return Object(n.jsxs)("ul",{className:"key-infos",children:[e.AccessKeyId,Object(n.jsx)("li",{children:e.Status}),Object(n.jsx)("li",{children:"Created on ".concat(Object(l.h)(e.CreateDate))})]})}})},t)}))}),Object(n.jsxs)("div",{className:"warnings",children:[!r()(a)&&c.length>0&&Object(n.jsx)(j.c,{errorPath:"password_and_keys",renderValue:function(){return Object(n.jsx)(o.a,{message:"Review the need for password-based and key-based authentication"})}}),c.length>1&&Object(n.jsx)(j.c,{errorPath:"multiple_active_api_keys",renderValue:function(){return Object(n.jsx)(o.a,{message:"Review the need for multiple active access keys"})}})]})]})}},607:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(15),s=(c(0),c(16)),i=c.n(s),r=c(30),l=c.n(r),j=c(91),u=c(739),o=c(744),d=c(742),b=c(564),h=c(748),O=c(72);t.default=function(e){var t=e.data;if(!t)return null;var c=i()(t,["item","groups"],{}),s=i()(t,["item","inline_policies"],{}),r=i()(t,["item","policies"],{}),f=i()(t,["item","Tags"],[]);return Object(n.jsxs)(u.a,{data:t,children:[Object(n.jsxs)(d.a,{children:[Object(n.jsx)(u.c,{label:"ARN",valuePath:"arn",renderValue:j.q}),Object(n.jsx)(u.c,{label:"Creation Date",valuePath:"CreateDate",renderValue:j.h})]}),Object(n.jsxs)(o.b,{children:[Object(n.jsx)(o.a,{title:"Authentication Methods",children:Object(n.jsx)(b.default,{mfaDevices:i()(t,["item","MFADevices"]),accessKeys:i()(t,["item","AccessKeys"]),loginProfile:i()(t,["item","LoginProfile"])})}),Object(n.jsx)(o.a,{title:"Groups",disabled:l()(c),children:Object(j.l)(Object.values(c),"",(function(e){return Object(n.jsx)(O.a,{service:"iam",resource:"groups",id:e})}))}),Object(n.jsx)(o.a,{title:"Inline Policies",disabled:l()(s),children:Object(n.jsx)(n.Fragment,{children:Object.entries(s).map((function(e,t){var c=Object(a.a)(e,2),s=c[0],i=c[1];return Object(n.jsx)(h.a,{name:i.name,policy:i.PolicyDocument,policyPath:"inline_policies.".concat(s,".PolicyDocument")},t)}))})}),Object(n.jsx)(o.a,{title:"Managed Policies",disabled:l()(r),children:Object(j.l)(Object.values(r),"",j.m)}),Object(n.jsx)(o.a,{title:"Tags",disabled:l()(f),children:Object(j.j)(f)})]})]})}},742:function(e,t,c){"use strict";var n=c(1);c(0),c(743);t.a=function(e){var t=e.children;return Object(n.jsxs)("div",{className:"informations-wrapper",children:[Object(n.jsx)("h4",{className:"title",children:"Informations"}),t]})}},743:function(e,t,c){},746:function(e,t,c){"use strict";var n=c(1),a=(c(0),c(9)),s=c.n(a),i=c(127),r=c.n(i),l=(c(747),{icon:Object(n.jsx)(r.a,{fontSize:"inherit"})}),j=function(e){var t=e.message,c=e.icon,a=e.className;return Object(n.jsxs)("div",{className:s()("warning-message",a),children:[c,t]})};j.defaultProps=l,t.a=j},747:function(e,t,c){},757:function(e,t,c){}}]);
//# sourceMappingURL=85.0b9555a0.chunk.js.map