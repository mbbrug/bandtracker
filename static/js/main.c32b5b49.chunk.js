(this.webpackJsonpbandtracker=this.webpackJsonpbandtracker||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(8),r=c.n(a),i=(c(13),c(7)),o=c(2),l=c(3),j=c(5),d=c(4),b=c(0),h=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return void 0!==this.props.tourdata.stops?Object(b.jsxs)("table",{className:"table table-striped",children:[Object(b.jsx)("thead",{className:"table-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Tour Date"}),Object(b.jsx)("th",{children:"Location"})]})}),Object(b.jsx)("tbody",{children:this.props.tourdata.stops.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.stop_date}),Object(b.jsx)("td",{children:e.city})]},t)}))})]}):null}}]),c}(n.Component),u=h,O=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return void 0!==this.props.discodata.discography?Object(b.jsxs)("table",{className:"table table-striped",children:[Object(b.jsx)("thead",{className:"table-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Release Year"}),Object(b.jsx)("th",{children:"Release Year"})]})}),Object(b.jsx)("tbody",{children:this.props.discodata.discography.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.year}),Object(b.jsx)("td",{children:e.title})]},t)}))})]}):null}}]),c}(n.Component),p=O,x=(c(15),function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return void 0!==this.props.img_src?Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-sm-auto p-3 text-left align-self-center",children:Object(b.jsx)("h1",{children:this.props.band_name})}),Object(b.jsx)("div",{className:"col p-3",children:Object(b.jsx)("img",{src:this.props.img_src,alt:"Band Image",className:"img-responsive center-block band_img"})})]})}):null}}]),c}(s.a.Component)),m=x;c(16);c(17).polyfill(),c(20);var f=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),l=o[0],j=o[1],d=c.band_name,h=c.img_src;return c.stops,Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col p-3",children:Object(b.jsxs)("div",{class:"input-group mb-3",children:[Object(b.jsx)("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon1",onClick:function(e){e.preventDefault(),fetch("./MOCK_DATA.json").then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){console.log(e)})),fetch("./MOCK_DISCO.json").then((function(e){return e.json()})).then((function(e){j(e)})).catch((function(e){console.log(e)}))},children:"Submit"}),Object(b.jsx)("input",{type:"text",class:"form-control",placeholder:"Search for a band..."})]})})})}),Object(b.jsx)(m,{img_src:h,band_name:d}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col p-3",children:Object(b.jsx)(u,{tourdata:c})}),Object(b.jsx)("div",{className:"col p-3",children:Object(b.jsx)(p,{discodata:l})})]})})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};c(22);r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),v()}},[[23,1,2]]]);
//# sourceMappingURL=main.c32b5b49.chunk.js.map