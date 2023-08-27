"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[923],{5923:function(n,t,e){e.r(t),e.d(t,{default:function(){return pn}});var r,o,a,i=e(2791),c=e(9434),u=function(n){return n.filter},l=e(5145),s=e(168),p=e(5867),f=p.ZP.div(r||(r=(0,s.Z)(["\n\tmargin: 20px auto 30px auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-between;\n"]))),d=p.ZP.label(o||(o=(0,s.Z)(["\n\tdisplay: block;\n\tmargin-bottom: 16px;\n"]))),b=p.ZP.input(a||(a=(0,s.Z)(["\n\tdisplay: block;\n\twidth: 320px;\n\tmargin-top: 8px;\n\tpadding: 4px 8px;\n\n\tborder: 0;\n\tborder-radius: 8px;\n\tbackground-color: rgba(135, 207, 235, 0.3);\n\ttransition: background-color,\n\t\tscale 1000ms cubic-bezier(0.4, 0, 0.2, 1);\n\tscale: 1;\n\n\t&:focus {\n\t\toutline: none;\n\t\tbackground-color: rgba(135, 207, 235, 0.7);\n\t\tscale: 1.1;\n\t}\n"]))),g=e(184),m=function(){var n=(0,c.v9)(u),t=(0,c.I0)();return(0,g.jsxs)(f,{children:[(0,g.jsx)(d,{children:"Find contacts by name"}),(0,g.jsx)(b,{type:"text",value:n,onChange:function(n){var e=n.target.value.toLowerCase();t((0,l.M6)(e))}})]})},h="NOT_FOUND";var v=function(n,t){return n===t};function x(n,t){var e="object"===typeof t?t:{equalityCheck:t},r=e.equalityCheck,o=void 0===r?v:r,a=e.maxSize,i=void 0===a?1:a,c=e.resultEqualityCheck,u=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!n(t[o],e[o]))return!1;return!0}}(o),l=1===i?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:h},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(n,t){var e=[];function r(n){var r=e.findIndex((function(e){return t(n,e.key)}));if(r>-1){var o=e[r];return r>0&&(e.splice(r,1),e.unshift(o)),o.value}return h}return{get:r,put:function(t,o){r(t)===h&&(e.unshift({key:t,value:o}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(i,u);function s(){var t=l.get(arguments);if(t===h){if(t=n.apply(null,arguments),c){var e=l.getEntries(),r=e.find((function(n){return c(n.value,t)}));r&&(t=r.value)}l.put(arguments,t)}return t}return s.clearCache=function(){return l.clear()},s}function y(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function j(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var a,i=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,s=l.memoizeOptions,p=void 0===s?e:s,f=Array.isArray(p)?p:[p],d=y(r),b=n.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(f)),g=n((function(){for(var n=[],t=d.length,e=0;e<t;e++)n.push(d[e].apply(null,arguments));return a=b.apply(null,n)}));return Object.assign(g,{resultFunc:u,memoizedResultFunc:b,dependencies:d,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),g};return o}var w,k,O,Z,E,P,z=j(x),C=function(n){return n.contacts.isLoading},I=function(n){return n.contacts.items},_=z([I,u],(function(n,t){return console.log(n),n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))})),S=e(3634),A=e(5705),F=(0,p.ZP)(A.l0)(w||(w=(0,s.Z)(["\n\twidth: 360px;\n\tpadding: 20px;\n\tmargin: 0 auto;\n\n\tbackground-color: rgba(135, 207, 235, 0.2);\n\tborder-radius: 8px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n"]))),N=p.ZP.label(k||(k=(0,s.Z)(["\n\tdisplay: block;\n\tmargin-bottom: 16px;\n"]))),M=(0,p.ZP)(A.gN)(O||(O=(0,s.Z)(["\n\tdisplay: block;\n\twidth: 320px;\n\tmargin-top: 8px;\n\tpadding: 4px 8px;\n\n\tborder: 0;\n\tborder-radius: 8px;\n\tbackground-color: rgba(135, 207, 235, 0.3);\n\ttransition: background-color,\n\t\tscale 1000ms cubic-bezier(0.4, 0, 0.2, 1);\n\tscale: 1;\n\n\t&:focus {\n\t\toutline: none;\n\t\tbackground-color: rgba(135, 207, 235, 0.7);\n\t\tscale: 1.1;\n\t}\n"]))),R=p.ZP.button(Z||(Z=(0,s.Z)(["\n\tpadding: 8px 16px;\n\n\tcolor: rgba(0, 0, 0, 0.4);\n\tfont-size: 12px;\n\n\tborder: 0;\n\tborder-radius: 8px;\n\tbackground-color: rgba(135, 207, 235, 0.5);\n\tcursor: pointer;\n\tscale: 1;\n\ttransition: background-color 1000ms\n\t\tcubic-bezier(0.4, 0, 0.2, 1);\n\ttransition: scale 1000ms cubic-bezier(0.4, 0, 0.2, 1);\n\n\t&:hover,\n\t&:focus {\n\t\toutline: none;\n\t\tbackground-color: rgba(135, 207, 235, 0.7);\n\t\tscale: 1.1;\n\t}\n"]))),L=["title","titleId"];function q(){return q=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},q.apply(this,arguments)}function B(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}function H(n,t){var e=n.title,r=n.titleId,o=B(n,L);return i.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},o),e?i.createElement("title",{id:r},e):null,E||(E=i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),P||(P=i.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var V,J,D,T,U,Y=i.forwardRef(H),G=(e.p,e(1686)),K=e(6727),Q={name:"",number:""},W=K.Ry().shape({name:K.Z_().required((function(){return G.Notify.info("Please enter a name")})),number:K.Rx().required((function(){return G.Notify.info("Please enter a number")}))}),X=function(){var n=(0,c.v9)(I),t=(0,c.I0)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(A.J9,{initialValues:Q,onSubmit:function(e,r){var o=r.resetForm;console.log(e.name),n.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?G.Notify.info("".concat(e.name," already in contact\u261d\ufe0f")):(t((0,S.el)(e)),o())},validationSchema:W,children:(0,g.jsxs)(F,{autoComplete:"off",children:[(0,g.jsxs)(N,{children:["Name",(0,g.jsx)(M,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter a name"}),(0,g.jsx)(A.Bc,{name:"name",component:"div"})]}),(0,g.jsxs)(N,{children:["Number",(0,g.jsx)(M,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter a phone number"}),(0,g.jsx)(A.Bc,{name:"number",component:"div"})]}),(0,g.jsxs)(R,{type:"submit",children:[(0,g.jsx)(Y,{fill:"#000000",width:"25",height:"25"}),"Add contact"]})]})}),(0,g.jsx)(m,{})]})},$=p.ZP.ul(V||(V=(0,s.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\n\tgap: 12px;\n\tmargin: 0 auto;\n\tpadding: 20px;\n\tmax-width: 360px;\n\n\tbackground-color: rgba(135, 207, 235, 0.1);\n\tborder-radius: 8px;\n"]))),nn=p.ZP.li(J||(J=(0,s.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 32px;\n\tpadding: 0 0 0 8px;\n\n\tbackground-color: rgba(135, 207, 235, 0.2);\n\tborder-radius: 8px;\n\n\t& span:nth-child(2) {\n\t\tmargin-left: auto;\n\t}\n"]))),tn=p.ZP.button(D||(D=(0,s.Z)(["\n\tpadding: 8px 16px;\n\n\tcolor: rgba(0, 0, 0, 0.4);\n\tfont-size: 12px;\n\n\tborder: 0;\n\tborder-radius: 8px;\n\tbackground-color: rgba(135, 207, 235, 0.5);\n\tcursor: pointer;\n\tscale: 1;\n\ttransition: background-color 1000ms\n\t\tcubic-bezier(0.4, 0, 0.2, 1);\n\ttransition: scale 1000ms cubic-bezier(0.4, 0, 0.2, 1);\n\t&:hover,\n\t&:focus {\n\t\toutline: none;\n\t\tbackground-color: rgba(135, 207, 235, 0.7);\n\t\tscale: 1.1;\n\t}\n"]))),en=["title","titleId"];function rn(){return rn=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},rn.apply(this,arguments)}function on(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}function an(n,t){var e=n.title,r=n.titleId,o=on(n,en);return i.createElement("svg",rn({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},o),e?i.createElement("title",{id:r},e):null,T||(T=i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),U||(U=i.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}var cn=i.forwardRef(an),un=(e.p,function(){var n=(0,c.v9)(_),t=(0,c.I0)();return(0,g.jsx)($,{children:n.map((function(n){return(0,g.jsxs)(nn,{children:[n.name+" : "+n.number,(0,g.jsxs)(tn,{type:"button",name:"delete",onClick:function(){return t((0,S._f)(n.id))},children:[(0,g.jsx)(cn,{fill:"#000000",width:"20",height:"20"}),"delete"]})]},n.id)}))})}),ln=e(6708),sn=e(7689),pn=function(){var n=(0,c.I0)(),t=(0,c.v9)(C);return(0,i.useEffect)((function(){n((0,S.yF)())}),[n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("title",{children:"Your contacts"}),(0,g.jsx)(X,{}),t&&(0,g.jsx)(ln.a,{}),(0,g.jsx)(un,{}),(0,g.jsx)(i.Suspense,{children:(0,g.jsx)(sn.j3,{})})]})}}}]);
//# sourceMappingURL=923.a99b9e48.chunk.js.map