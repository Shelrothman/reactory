(this.webpackJsonpreactory=this.webpackJsonpreactory||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),m=(a(13),a(14),a(3)),i=a(4),o=a(7),s=a(6),u=a(5),d=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={order:"ascending"},e.handleNameSort=function(){e.setState({order:"ascending"===e.state.order?"descending":"ascending"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=u.sort((function(t,a){return t.name===a.name?0:"ascending"===e.state.order?t.name<a.name?-1:1:t.name<a.name?1:-1}));return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"plants Table")),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{onClick:this.handleNameSort,scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Benefits"),r.a.createElement("th",{scope:"col"},"Safety"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",{scope:"row"},e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.Benefits),r.a.createElement("td",null,e.Safety))})))))}}]),a}(r.a.Component);var h=function(){return r.a.createElement(d,null)};c.a.render(r.a.createElement(h,null),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"Id":1,"Name":"Gingko","Benefits":"Brain Health, Dementia, Alzheimer\'s","Safety":"3","Image":"https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},{"Id":2,"Name":"Turmeric","Benefits":"inflammation and arthritis pain, skin health","Safety":"5","Image":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"},{"Id":3,"Name":"Evening Primrose Oil","Benefits":"PMS, menopause, blood pressure, multiple sclerosis","Safety":"4.5","Image":"https://m.media-amazon.com/images/M/MV5BZjZlZDlkYTktMmU1My00ZDBiLWFlNjEtYTBhNjVhOTM4ZjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"}]')},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.47644752.chunk.js.map