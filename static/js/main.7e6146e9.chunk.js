(this.webpackJsonpbintodec=this.webpackJsonpbintodec||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),i=a.n(r),l=(a(12),a(3)),o=a(4),s=a(5),m=a(6),u=(a(13),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).bin2dec=function(e){return e.split("").reverse().reduce((function(e,t,a){return e+t*Math.pow(2,a)}),0)},n.dec2bin=function(e){for(var t="";e;)t=(e%2?"1":"0")+t,e=Math.floor(e/2);return t},n.changeBinary=function(e){var t=e.target.value;/^[01]*$/.test(t)?n.setState({binary:t,decimal:n.bin2dec(t)}):alert("Only valid 1 or 0")},n.changeDecimal=function(e){var t=e.target.value;/^[\d]*$/.test(t)?n.setState({decimal:t,binary:n.dec2bin(t)}):alert("Only valid numbers")},n.state={binary:"",decimal:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.binary,a=e.decimal;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"bin"},c.a.createElement("div",{className:"bin-form"},c.a.createElement("input",{type:"text",className:"binary-text",value:t,onChange:this.changeBinary}),c.a.createElement("div",{className:"binary-line"}))),c.a.createElement("div",{className:"dec"},c.a.createElement("div",{className:"dec-form"},c.a.createElement("input",{type:"text",className:"decimal-text",value:a,onChange:this.changeDecimal}),c.a.createElement("div",{className:"decimal-line"}))))}}]),a}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.7e6146e9.chunk.js.map