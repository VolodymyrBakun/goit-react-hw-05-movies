"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{61:function(e,t,n){n.d(t,{e:function(){return i}});var r=n(87),a=n(689),c=n(184);function u(e){var t,n=e.data,u=(0,a.TH)();return(0,c.jsx)(r.OL,{to:"/movies/".concat(n.id),state:{from:u},children:null!==(t=n.original_title)&&void 0!==t?t:"Movie"})}function i(e){var t=e.movies;return(0,c.jsx)("ul",{children:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(u,{data:e})},e.id)}))})}},983:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(791),o=n(390),s=n(61),p=n(184);t.default=function(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),n=t[0],c=t[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.y.fetchMovies();case 2:t=e.sent,c(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{children:"Trending today"}),n&&(0,p.jsx)(s.e,{movies:n})]})}},390:function(e,t,n){n.d(t,{y:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i="b9984943b63ba7234c73c01c632259d1",o={fetchMovies:function(){return(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=b9984943b63ba7234c73c01c632259d1");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},fetchMovieDetails:function(e){return(0,r.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()},fetchMovieCast:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},fetchMovieReviews:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},fetchMovieByQuery:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=983.f2419624.chunk.js.map