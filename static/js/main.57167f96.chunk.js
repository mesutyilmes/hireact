(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,a){t.exports=a(44)},23:function(t,e,a){},24:function(t,e,a){},44:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),l=a(11),i=a.n(l),o=(a(23),a(12)),r=a(13),s=a(15),u=a(14),m=a(16),d=a(2),h=(a(24),a(4)),b=a.n(h);window.apiUrl="http://5cac37c8c85e05001452f0b9.mockapi.io/yilmes/test";var p=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).state={text:"",arr:[],data:[]},t.changeInput=t.changeInput.bind(Object(d.a)(Object(d.a)(t))),t.addItem=t.addItem.bind(Object(d.a)(Object(d.a)(t))),t.clickPic=t.clickPic.bind(Object(d.a)(Object(d.a)(t))),t}return Object(m.a)(e,t),Object(r.a)(e,[{key:"clickPic",value:function(t){console.log(t);var e=this.state.arr.slice();e.push(t),this.setState({arr:e})}},{key:"onClick",value:function(t){console.log(t),console.log("=============")}},{key:"addItem",value:function(t){var e=this,a=this.state.arr.slice();a.push(this.state.text),this.setState({arr:a});var n={name:this.state.text,alan:"Production"};b.a.post(window.apiUrl,n).then(function(t){201===t.status&&(e.setState({text:""}),console.log("frfr"),e.setState({data:e.state.data.concat(t.data)}))})}},{key:"changeInput",value:function(t){var e=t.target.value;"mesut"===e?console.log("Do\u011fru"):console.log("Yanl\u0131\u015f"),this.setState({text:e})}},{key:"componentDidMount",value:function(){var t=this;b.a.get(window.apiUrl).then(function(e){t.setState({data:e.data})})}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"container"},c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h1",null,"Form"),c.a.createElement("form",{action:this.addItem},c.a.createElement("input",{type:"text",value:this.state.text,onChange:this.changeInput}),c.a.createElement("input",{type:"button",value:"Click me",onClick:this.addItem})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),this.state.data.map(function(e){return c.a.createElement("div",null,c.a.createElement("img",{onClick:t.clickPic.bind(t,e.name),src:e.avatar,alt:e.name}),c.a.createElement("p",null,e.id,"  ",e.name))}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.57167f96.chunk.js.map