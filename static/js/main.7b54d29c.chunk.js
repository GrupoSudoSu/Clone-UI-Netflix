(this.webpackJsonpnetflixclone=this.webpackJsonpnetflixclone||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),c=n.n(s),i=n(3),o=n.n(i),l=n(4),u=n(5),d=(n(21),"9edc3ddab5c99177627651c76f1aa439"),m=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/discover/tv?with_networks=213&language=pt-BR&api_key=".concat(d));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais da Netflix",items:e.t0},e.next=6,m("/trending/all/week?language=pt-BR&api_key=".concat(d));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para Voc\xea",items:e.t2},e.next=10,m("/movie/top_rated?language=pt-BR&api_key=".concat(d));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em Alta",items:e.t4},e.next=14,m("/discover/movie?with_genres=28&language=pt-BR&api_key=".concat(d));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,m("/discover/movie?with_genres=35&language=pt-BR&api_key=".concat(d));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,m("/discover/movie?with_genres=27&language=pt-BR&api_key=".concat(d));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,m("/discover/movie?with_genres=10749&language=pt-BR&api_key=".concat(d));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,m("/discover/movie?with_genres=99&language=pt-BR&api_key=".concat(d));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rios",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={},!t){e.next=15;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,m("/movie/".concat(t,"?language=pt-BR&api_key=").concat(d));case 7:case 11:return a=e.sent,e.abrupt("break",15);case 9:return e.next=11,m("/tv/".concat(t,"?language=pt-BR&api_key=").concat(d));case 13:return a=null,e.abrupt("break",15);case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},b=(n(22),n(12)),h=n.n(b),g=n(14),p=n.n(g),f=n(1),v=function(e){var t=e.title,n=e.items,r=Object(a.useState)(0),s=Object(u.a)(r,2),c=s[0],i=s[1];return Object(f.jsxs)("div",{className:"movieRow",children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)("div",{className:"movieRow--left",onClick:function(){var e=c+Math.round(window.innerWidth/2);e>0&&(e=0),i(e)},children:Object(f.jsx)(h.a,{style:{fontSize:50}})}),Object(f.jsx)("div",{className:"movieRow--right",onClick:function(){var e=c-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),i(e)},children:Object(f.jsx)(p.a,{style:{fontSize:50}})}),Object(f.jsx)("div",{className:"movieRow--listarea",children:Object(f.jsx)("div",{className:"movieRow--list",style:{marginLeft:c,width:150*n.results.length},children:n.results.length>0&&n.results.map((function(e,t){return Object(f.jsx)("div",{className:"movieRow--item",children:Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title})})}))})})]})},x=(n(29),function(e){var t=e.item;console.log(t);var n=new Date(t.first_air_date),a=[];for(var r in t.genres)a.push(t.genres[r].name);var s=t.overview;return s.length>200&&(s=s.substring(0,200)+"..."),Object(f.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(f.jsx)("div",{className:"featured--vertical",children:Object(f.jsxs)("div",{className:"featured--horizontal",children:[Object(f.jsx)("div",{className:"featured--name",children:t.original_name}),Object(f.jsxs)("div",{className:"featured--info",children:[Object(f.jsxs)("div",{className:"featured--points",children:[t.vote_average," pontos"]}),Object(f.jsx)("div",{className:"featured--year",children:n.getFullYear()}),Object(f.jsxs)("div",{className:"featured--seasons",children:[t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":""]})]}),Object(f.jsx)("div",{className:"featured--description",children:s}),Object(f.jsxs)("div",{className:"featured--buttons",children:[Object(f.jsx)("a",{href:"/watch/".concat(t.id),className:"featured--watchbutton",children:"\u25ba Assistir"}),Object(f.jsx)("a",{href:"/list/add/{item.id}",className:"featured--mylistbutton",children:"+ Minha Lista"})]}),Object(f.jsxs)("div",{className:"featured--genres",children:[Object(f.jsx)("strong",{children:"G\xeaneros:"})," ",a.join(", ")]})]})})})}),O=(n(30),function(e){var t=e.black;return Object(f.jsxs)("header",{className:t?"black":"",children:[Object(f.jsx)("div",{className:"header--logo",children:Object(f.jsx)("a",{href:"/",children:Object(f.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix"})})}),Object(f.jsx)("div",{className:"header--user",children:Object(f.jsx)("a",{href:"",children:Object(f.jsx)("img",{src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Usu\xe1rio"})})})]})}),w=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),c=Object(u.a)(s,2),i=c[0],d=c[1],m=Object(a.useState)(!1),b=Object(u.a)(m,2),h=b[0],g=b[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getHomeList();case 2:return t=e.sent,r(t),n=t.filter((function(e){return"originals"===e.slug})),a=Math.floor(Math.random()*(n[0].items.results.length-1)),s=n[0].items.results[a],e.next=9,j.getMovieInfo(s.id,"tv");case 9:c=e.sent,d(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(a.useEffect)((function(){var e=function(){window.scrollY>10?g(!0):g(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(f.jsxs)("div",{className:"page",children:[Object(f.jsx)(O,{black:h}),i&&Object(f.jsx)(x,{item:i}),Object(f.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(f.jsx)(v,{title:e.title,items:e.items},t)}))}),Object(f.jsxs)("footer",{children:["Feito com ",Object(f.jsx)("span",{role:"img","aria-label":"cora\xe7\xe3o",children:"\u2764"})," pelo Grupo SudoSu",Object(f.jsx)("br",{}),"Direitos de imagem para Netflix",Object(f.jsx)("br",{}),"Dados pegos do site Themoviedb.org"]}),n.length<=0&&Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)("img",{src:"https://1.bp.blogspot.com/-B9juta27w6o/Xzk4GGrOziI/AAAAAAABtpE/0OMhU_0hPTY7PhayDfL3eJ5mIc2csWWWwCLcBGAsYHQ/s1600/Netflix_LoadTime.gif",alt:"Carregando"})})]})};c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.7b54d29c.chunk.js.map