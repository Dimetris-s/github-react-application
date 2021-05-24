(()=>{"use strict";var e,r={8765:(e,r,t)=>{var n=t(7149),a=t(904),o=t(5903),c=t(7449),i="SET_REPOS",l="SET_LOADING",s="SET_CURRENT_PAGE",u="SET_SEARCH_VALUE",p=t(7049),d=t.n(p);function m(e,r,t,n,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void t(e)}i.done?r(l):Promise.resolve(l).then(n,a)}function f(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function c(e){m(o,n,a,c,i,"next",e)}function i(e){m(o,n,a,c,i,"throw",e)}c(void 0)}))}}var g=function(e){return{type:i,payload:e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"stars:%3E1",r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0;return""==e&&(e="stars:%3E1"),function(){var n=f(regeneratorRuntime.mark((function n(a){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(v({reposLoading:!0})),n.next=3,d().get("https://api.github.com/search/repositories?q=".concat(e,"&sort=stars&per_page=").concat(r,"&page=").concat(t));case 3:o=n.sent,a(g(o.data)),a(v({reposLoading:!1}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(e){return{type:l,payload:e}},b=function(e){return{type:s,payload:e}},y=function(){var e=f(regeneratorRuntime.mark((function e(r,t,n,a,o){var c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("https://api.github.com/repos/".concat(r,"/").concat(t));case 2:return c=e.sent,e.next=5,d().get("https://api.github.com/repos/".concat(r,"/").concat(t,"/contributors"));case 5:i=e.sent,n(c.data),a(i.data),o(v({currentRepoLoading:!1}));case 9:case"end":return e.stop()}}),e)})));return function(r,t,n,a,o){return e.apply(this,arguments)}}(),_=t(1892),E=t.n(_),O=t(7957);E()(O.Z,{insert:"head",singleton:!1}),O.Z.locals;const w=function(e){return n.createElement("div",{className:"Loader"},n.createElement("div",null))};var x=t(1685);E()(x.Z,{insert:"head",singleton:!1}),x.Z.locals;var j=t(8160);const R=function(e){var r,t=e.repo;return n.createElement("div",{className:"Repo"},n.createElement("div",{className:"Repo__header"},n.createElement("div",{className:"Repo__avatar"},n.createElement("img",{src:t.owner.avatar_url,alt:"avatar"})),n.createElement(j.rU,{to:"/repo/".concat(t.owner.login,"/").concat(t.name),className:"Repo__name"},((r=t.name.split(""))[0]=r[0].toUpperCase(),r.join(""))),n.createElement("div",{className:"Repo__stars"},n.createElement("i",{className:"fas fa-star"}),t.stargazers_count)),n.createElement("div",{className:"Repo__body"},n.createElement("div",{className:"Repo__owner"},"Автор: ",n.createElement("span",null,t.owner.login)),n.createElement("div",{className:"Repo__desc"},n.createElement("span",null,"Описание:"),n.createElement("p",null,t.description)),n.createElement("div",{className:"Repo__last-update"},"Последнее обновление: ",n.createElement("span",null,t.updated_at)),n.createElement("div",{className:"Repo__branch"},"Ветка по умолчанию: ",n.createElement("span",null,t.default_branch)),n.createElement("a",{href:t.html_url,className:"Repo__link"},"Ссылка на репозиторий")))};var N=t(2614);E()(N.Z,{insert:"head",singleton:!1}),N.Z.locals;const P=function(e){var r=e.placeholder,t=e.clickHandler,a=(0,c.I0)(),o=(0,c.v9)((function(e){return e.repos.searchValue}));return n.createElement("div",{className:"search"},n.createElement("input",{type:"text",onChange:function(e){a(function(e){return{type:u,payload:e}}(e.target.value))},placeholder:r,value:o,className:"form-control"}),n.createElement("button",{className:"btn btn-success",onClick:t},"Search"))};var k=t(7229);E()(k.Z,{insert:"head",singleton:!1}),k.Z.locals;var S=function(e){var r=e.pages,t=e.currentPage,a=(0,c.I0)();return n.createElement("div",{className:"pagination"},n.createElement("div",{className:"pages"},r.map((function(e,r){return n.createElement("div",{key:r,onClick:function(){return a(b(e))},className:t==e?"page page--current":"page"},e)}))))};const Z=(0,n.memo)(S);var C=t(1894);E()(C.Z,{insert:"head",singleton:!1}),C.Z.locals;const A=function(){var e=(0,c.I0)(),r=(0,c.v9)((function(e){return e.repos.items})),t=(0,c.v9)((function(e){return e.loading.reposLoading})),a=(0,c.v9)((function(e){return e.repos.currentPage})),o=(0,c.v9)((function(e){return e.repos.totalCount})),i=(0,c.v9)((function(e){return e.repos.perPage})),l=(0,c.v9)((function(e){return e.repos.searchValue})),s=[];return function(e,r,t){if(r>10)if(t>5)for(var n=t-4;n<=t+5&&(e.push(n),n!=r);n++);else for(var a=1;a<=10&&(e.push(a),a!=r);a++);else for(var o=1;o<=r;o++)e.push(o)}(s,Math.ceil(o/i),a),(0,n.useEffect)((function(){e(h(l,i,a))}),[a]),n.createElement("div",{className:"Main"},n.createElement(P,{placeholder:"Enter repository name...",clickHandler:function(){e(b(1)),e(h(l,i,a))}}),t?n.createElement(w,null):r.map((function(e,r){return n.createElement(R,{key:r,repo:e})})),n.createElement(Z,{pages:s,currentPage:a}))};var L=t(3729);function U(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var n,a,o=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,r)||function(e,r){if(e){if("string"==typeof e)return D(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?D(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}E()(L.Z,{insert:"head",singleton:!1}),L.Z.locals;const I=function(e){var r=(0,c.I0)(),t=(0,o.UO)(),a=t.username,i=t.reponame,l=U((0,n.useState)({}),2),s=l[0],u=l[1],p=U((0,n.useState)([]),2),d=p[0],m=p[1],f=(0,c.v9)((function(e){return e.loading.currentRepoLoading}));return(0,n.useEffect)((function(){y(a,i,u,m,r)}),[]),n.createElement("div",{className:"repoinfo"},f?n.createElement(w,null):n.createElement(n.Fragment,null,n.createElement("h1",{className:"repoinfo__titile"},s.name),n.createElement("div",{className:"repoinfo__image"},n.createElement("img",{src:s.owner.avatar_url,alt:"avatar"})),n.createElement("div",{className:"repoinfo__desc"},s.description),n.createElement("div",{className:"repoinfo__watchers"},"Watchers: ",s.watchers_count),n.createElement("div",{className:"repoinfo__stars"},"Stars: ",s.stargazers_count),n.createElement("div",{className:"repoinfo__branch"},"Branch: ",s.default_branch),n.createElement("a",{href:s.html_url,className:"repoinfo__link"},"Репозиторий"),n.createElement("ul",{className:"repoinfo__contributors-list"},d.map((function(e,r){return n.createElement("li",{className:"repoinfo__contributors-list-item",key:r},n.createElement("a",{href:e.html_url},e.login))}))),n.createElement("button",{className:"btn btn-primary",onClick:function(){e.history.goBack(),r(v({currentRepoLoading:!0}))}},"Back")))},T=function(){return n.createElement("div",{className:"container"},n.createElement(o.rs,null,n.createElement(o.AW,{exact:!0,path:"/",component:A}),n.createElement(o.AW,{path:"/repo/:username/:reponame",component:I}),n.createElement(o.l_,{to:"/"})))};var z=t(6001);E()(z.Z,{insert:"head",singleton:!1}),z.Z.locals;var M=t(8234);function V(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function B(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?V(Object(t),!0).forEach((function(r){H(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function H(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var F={items:[],currentPage:1,perPage:10,totalCount:0,searchValue:""},W=t(7349),q=t(5605);function G(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function K(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?G(Object(t),!0).forEach((function(r){Y(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var $={reposLoading:!1,currentRepoLoading:!0},J=(0,M.UY)({repos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case i:return B(B({},e),{},{items:r.payload.items,totalCount:r.payload.total_count});case u:return B(B({},e),{},{searchValue:r.payload});case s:return B(B({},e),{},{currentPage:r.payload});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case l:var t=Object.keys(r.payload)[0];return K(K({},e),{},Y({},t,r.payload[t]));default:return e}}});const Q=(0,M.MT)(J,(0,W.Uo)((0,M.md)(q.Z)));var X=n.createElement(j.VK,null,n.createElement(c.zt,{store:Q},n.createElement(T,null)));a.render(X,document.querySelector("#root"))},7957:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(763),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,".Loader{display:flex;justify-content:center;align-items:center;padding-top:5rem}.Loader div{width:150px;height:150px;border:20px solid #ccc;border-left-color:transparent;border-radius:50%;animation:rotate 0.5s linear infinite}@keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}\n",""]);const o=a},1894:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(763),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,".Main{padding-top:2rem;display:flex;flex-direction:column;row-gap:1rem;padding-bottom:1rem}\n",""]);const o=a},7229:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(763),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,".pagination{display:flex;align-items:center;justify-content:center}.pages{display:flex;justify-content:space-between;align-items:center;width:min-content}.pages .page{padding:0.2rem 0.8rem;border-radius:8px;cursor:pointer}.pages .page:hover:not(.page--current){background-color:rgba(98,255,145,0.548)}.pages .page--current{background-color:#2aff6a}\n",""]);const o=a},3729:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(763),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,".repoinfo{padding-top:3rem}\n",""]);const o=a},1685:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(763),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,".Repo{padding:1.5rem 0.5rem;border:1px solid #ccc;border-radius:12px}.Repo__header{border-bottom:1px solid #ccc;padding:0.375rem;display:flex;align-items:baseline;justify-content:flex-start;column-gap:20px}.Repo__avatar{border-radius:12px;max-width:8%;overflow:hidden}.Repo__avatar img{width:100%;height:100%;object-fit:cover;object-position:center;display:block}.Repo__name{flex-grow:1;font-size:1.4rem;text-decoration:none;color:#000}.Repo__name:hover{color:#000;text-decoration:underline}.Repo__stars .fa-star{color:gold;margin-right:0.5rem}.Repo__body{padding:2rem 1rem 0rem;display:flex;flex-direction:column;row-gap:20px}.Repo__desc{padding:0.75rem;background-color:#ddd;border-radius:12px}.Repo__desc p{margin:0}.Repo__desc span{font-weight:700;font-size:1.2rem}.Repo__branch span{color:lime;font-size:1.2rem;font-weight:700}.Repo__link{text-decoration:none;color:#1b1b1b;align-self:flex-end}.Repo__link:hover{text-decoration:underline;color:#1b1b1b}\n",""]);const o=a},2614:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(763),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,".search{display:flex;column-gap:10px}\n",""]);const o=a},6001:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(763),a=t.n(n),o=t(7003),c=a()((function(e){return e[1]}));c.i(o.Z),c.push([e.id,"html,\r\nbody {\r\n    font-family: \"Roboto\", Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n\theight: 100%;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n\tbox-sizing: inherit;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n}\r\nh1,h2,h3,h4,h5,h6 {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}",""]);const i=c}},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var o=t[e]={id:e,loaded:!1,exports:{}};return r[e](o,o.exports,n),o.loaded=!0,o.exports}n.m=r,e=[],n.O=(r,t,a,o)=>{if(!t){var c=1/0;for(s=0;s<e.length;s++){for(var[t,a,o]=e[s],i=!0,l=0;l<t.length;l++)(!1&o||c>=o)&&Object.keys(n.O).every((e=>n.O[e](t[l])))?t.splice(l--,1):(i=!1,o<c&&(c=o));i&&(e.splice(s--,1),r=a())}return r}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[t,a,o]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,[c,i,l]=t,s=0;for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var u=l(n);for(r&&r(t);s<c.length;s++)o=c[s],n.o(e,o)&&e[o]&&e[o][0](),e[c[s]]=0;return n.O(u)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.O(void 0,[696],(()=>n(6815)));var a=n.O(void 0,[696],(()=>n(8765)));a=n.O(a)})();