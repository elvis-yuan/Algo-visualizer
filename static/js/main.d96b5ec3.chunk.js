(this["webpackJsonppathfinding-app"]=this["webpackJsonppathfinding-app"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),i=n.n(a),c=(n(10),n(4)),l=n(1);var s=function(e){var t=e.isFinish,n=e.isStart,r=e.row,a=e.col,i=e.onMouseDown,c=e.onMouseUp,l=e.onMouseEnter,s=e.isWall,u=t?" finish-node":n?" start-node":s?" wall-node":"",f=t?o.a.createElement("span",null,o.a.createElement("i",{className:"fas fa-flag"})):n?o.a.createElement("span",null,o.a.createElement("i",{className:"fas fa-star"})):"";return o.a.createElement("div",{className:"node".concat(u),id:"".concat(r,"-").concat(a),onMouseDown:function(e,t,n,r){return i(e,t,n,r)},onMouseUp:function(e,t){return c(e,t)},onMouseEnter:function(e,t){return l(e,t)}},f)};function u(e,t,n){var r=[];t.distance=0;for(var o=function(e){var t=[],n=!0,r=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value,l=!0,s=!1,u=void 0;try{for(var f,v=c[Symbol.iterator]();!(l=(f=v.next()).done);l=!0){var d=f.value;t.push(d)}}catch(p){s=!0,u=p}finally{try{l||null==v.return||v.return()}finally{if(s)throw u}}}}catch(p){r=!0,o=p}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return t}(e);o.length;){f(o);var a=o.pop();if(!a.isWall){if(a.distance===1/0)return r;if(a.visited=!0,r.push(a),a===n)return r;v(a,e)}}}function f(e){e.sort((function(e,t){return t.distance-e.distance}))}function v(e,t){var n=function(e,t){var n=[],r=e.col,o=e.row;o>0&&n.push(t[o-1][r]);o<t.length-1&&n.push(t[o+1][r]);r>0&&n.push(t[o][r-1]);r<t[0].length-1&&n.push(t[o][r+1]);return n.filter((function(e){return!e.visited}))}(e,t),r=!0,o=!1,a=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var l=i.value;l.distance=e.distance+1,l.previousNode=e}}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}}n(11);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var p=function(e){var t=Object(r.useState)([]),n=Object(l.a)(t,2),a=n[0],i=n[1],f=Object(r.useState)(!0),v=Object(l.a)(f,2),p=v[0],m=v[1],h=Object(r.useState)(!1),w=Object(l.a)(h,2),b=w[0],y=w[1],O=Object(r.useState)({node:null,isDown:!1}),E=Object(l.a)(O,2),g=E[0],j=E[1],D=Object(r.useState)({row:10,col:9}),S=Object(l.a)(D,2),k=S[0],N=S[1],M=Object(r.useState)({row:10,col:40}),W=Object(l.a)(M,2),P=W[0],F=W[1];Object(r.useEffect)((function(){B()}),[k,P]);var x=function(e,t){return{col:t,row:e,isStart:e===k.row&&t===k.col,isFinish:e===P.row&&t===P.col,distance:1/0,visited:!1,isWall:!1,previousNode:null}},B=function(){for(var e=[],t=0;t<20;t++){for(var n=[],r=0;r<50;r++)n.push(x(t,r));e.push(n)}i(e)},A=function(e,t){for(var n=function(n){if(n===e.length)return setTimeout((function(){I(t)}),12*n),{v:void 0};setTimeout((function(){var t=e[n],r=t.row,o=t.col;document.getElementById("".concat(r,"-").concat(o)).classList.add("visited-node")}),12*n)},r=0;r<=e.length;r++){var o=n(r);if("object"===typeof o)return o.v}},I=function(e){for(var t=0;t<e.length;t++){var n=e[t],r=n.row,o=n.col;document.getElementById("".concat(r,"-").concat(o)).classList.add("shortest-path"),m(!1)}},T=function(e,t){var n=a.slice(),r=a[e][t],o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{isWall:!r.isWall});return n[e][t]=o,n},U=a.length>0?a.map((function(e,t){return e.map((function(e,t){var n=e.row,r=e.col,a=e.isFinish,c=e.isStart,l=e.isWall;return o.a.createElement(s,{onMouseDown:function(){return function(e,t,n,r,o){if(!b)if(n)j({node:"start",isDown:!0});else if(r)j({node:"finish",isDown:!0});else{var a=T(e,t);i(a),j({node:"wall",isDown:!0})}}(n,r,c,a)},onMouseUp:function(){g.isDown&&j({node:null,isDown:!1})},onMouseEnter:function(){return function(e,t){if(g.isDown)switch(g.node){case"start":N({row:e,col:t});break;case"finish":F({row:e,col:t});break;case"wall":var n=T(e,t);i(n)}}(n,r)},key:t,row:n,col:r,isFinish:a,isStart:c,isWall:l})}))})):null,z=U?U.map((function(e,t){return o.a.createElement("div",{className:"row",key:t},e)})):null;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"nav-bar"},o.a.createElement("span",{className:"start-button",onClick:function(){if(!b){m(!0),y(!0);var e=a[k.row][k.col],t=a[P.row][P.col],n=u(a,e,t),r=function(e){for(var t=[],n=e;null!==n;)t.push(n),n=n.previousNode;return t.reverse()}(t);A(n,r)}}},"Visualize Dijkstra's Algorithm")),o.a.createElement("div",{className:"grid"},z),p?null:o.a.createElement("span",{className:"reset-button",onClick:function(){i([]),m(!0),y(!1),setTimeout((function(){return B()}),0)}},"Reset"))},m=function(e){return o.a.createElement("div",{id:"nav-bar"},o.a.createElement("div",{id:"nav-title"},o.a.createElement("h1",null,"Algo Visualizer")))};n(12);var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null),o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.d96b5ec3.chunk.js.map