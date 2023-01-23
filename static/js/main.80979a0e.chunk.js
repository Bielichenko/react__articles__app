(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{129:function(e,t,a){},131:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a(29),c=a.n(r),s=a(60),n=a(48),l=a(67),u=Object(l.b)({name:"articles",initialState:{preparedArticles:[],isFetching:!1,actualArticles:[],inputKeyWords:[]},reducers:{setPreparedArticles:function(e,t){e.preparedArticles=t.payload},setIsFetching:function(e,t){e.isFetching=t.payload},setActualArticles:function(e,t){e.actualArticles=t.payload},setInputKeyWords:function(e,t){e.inputKeyWords=t.payload}}}),o=u.actions,d=o.setPreparedArticles,m=o.setIsFetching,A=o.setActualArticles,p=o.setInputKeyWords,b=u.reducer,j=Object(l.a)({reducer:{articles:b}}),f=a(9),h=a(13),g=a(5),v=a(184),E=a(68),O=a.n(E),x=function(){return Object(s.b)()},B=s.c;var Q=a(24);function N(e){return e.toLowerCase()}function C(e,t){var a=0,i=e.title.split(" "),r=e.summaryShort.split(" ");return t.forEach((function(e){var t=N(e);i.forEach((function(e){var i=N(e);i===t?a+=100:i.includes(t)&&(a+=10)})),r.forEach((function(e){var i=N(e);i===t?a+=1:i.includes(t)&&(a+=.5)}))})),a}var I=a(82),q=a.n(I),w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAQdJREFUWEftlrENwjAQRf8NkgaamAWgoslM1MAIkRghFWILChAtEqlSZQBGMDJKpJAE2Wed5cbpYt3df/4+n0yI/FFkfSSA5ICkAysAL25TSwEY8TOAC4ADB0IKwIjuO+EjB0IKwGh7QUgCeEFIA7AhQgCwIH4AtNYnAGrQxXqmo53W6rpetG27NPlZljVKqaarZfJ3RPQ0/2OAG4AN5xp5xm6J6DoHsC6K4t4XJZqekOvat/goP8/zqizLCsCDiN4TgIFFnhuzpk1mRKgm7EmssyEkgFX83xFYfXQIcBIPBeAsHgKAJS4NwBaXBPASlwSI/iAxm4n6JHO4mfMhIQeRE1QCSA58AGb/QCE9R+J9AAAAAElFTkSuQmCC",F=(a(129),a(1)),L=function(e){var t=e.article,a=B((function(e){return e.articles.inputKeyWords}));return Object(F.jsx)(n.b,{className:"cardWrapper",to:"/productId:".concat(t.id),children:Object(F.jsxs)("article",{className:"articleCard",children:[Object(F.jsx)("img",{src:t.imageUrl,alt:"img",className:"articleCard__articleImage"}),Object(F.jsxs)("div",{className:"articleCard__textContent",children:[Object(F.jsxs)("div",{className:"articleCard__dateWrapper",children:[Object(F.jsx)("svg",{className:"articleCard__dateImage",xmlns:"http://www.w3.org/2000/svg",children:Object(F.jsx)("path",{d:"M11.685187903543675,1.5679695094629231 L10.102216475669152,1.5679695094629231 L10.102216475669152,1.1339846641207245 C10.102216475669152,0.8736236834649098 9.94392842989582,0.6999998187785312 9.706450876165203,0.6999998187785312 S9.310685276661257,0.8735738058824101 9.310685276661257,1.1339846641207245 L9.310685276661257,1.5679695094629231 L5.353256706974932,1.5679695094629231 L5.353256706974932,1.1339846641207245 C5.353256706974932,0.8736236834649098 5.194968661201603,0.6999998187785312 4.957491107470986,0.6999998187785312 C4.720059038810998,0.6999998187785312 4.561725507967047,0.8735738058824101 4.561725507967047,1.1339846641207245 L4.561725507967047,1.5679695094629231 L2.9787540800925125,1.5679695094629231 C1.8706467895379681,1.5679695094629231 1.000017052714039,2.522676316116753 1.000017052714039,3.737793981008897 L1.000017052714039,11.549172054090924 C1.000017052714039,12.764289718983068 1.8706467895379681,13.718996525636904 2.9787540800925125,13.718996525636904 L11.685187903543675,13.718996525636904 C12.793295194098224,13.718996525636904 13.66392493092215,12.764289718983068 13.66392493092215,11.549172054090924 L13.66392493092215,3.737793981008897 C13.66392493092215,2.522676316116753 12.793295194098224,1.5679695094629231 11.685187903543675,1.5679695094629231 zM1.7915027666513037,3.737793981008897 C1.7915027666513037,3.043448155010889 2.345556411928577,2.4358893225648153 2.9787540800925125,2.4358893225648153 L4.561725507967047,2.4358893225648153 L4.561725507967047,2.8698741679070103 C4.561725507967047,3.130235148562827 4.7200135537403725,3.303859013249207 4.957491107470986,3.303859013249207 C5.194923176130985,3.303859013249207 5.353256706974932,3.13028502614533 5.353256706974932,2.8698741679070103 L5.353256706974932,2.4358893225648153 L9.310730761731882,2.4358893225648153 L9.310730761731882,2.8698741679070103 C9.310730761731882,3.130235148562827 9.469018807505211,3.303859013249207 9.706496361235825,3.303859013249207 S10.10226196073977,3.13028502614533 10.10226196073977,2.8698741679070103 L10.10226196073977,2.4358893225648153 L11.6852333886143,2.4358893225648153 C12.318431056778234,2.4358893225648153 12.872484702055512,3.043448155010889 12.872484702055512,3.737793981008897 L12.872484702055512,5.039698639452986 L1.7915027666513037,5.039698639452986 L1.7915027666513037,3.737793981008897 zM12.87243921698489,11.549172054090924 C12.87243921698489,12.24351788008893 12.318385571707609,12.851076712535004 11.685187903543675,12.851076712535004 L2.9787540800925125,12.851076712535004 C2.345556411928577,12.851076712535004 1.7915027666513037,12.24351788008893 1.7915027666513037,11.549172054090924 L1.7915027666513037,5.907618452554882 L12.87243921698489,5.907618452554882 L12.87243921698489,11.549172054090924 z",id:"svg_3",fill:"black",fillOpacity:"1",strokeOpacity:"1",opacity:"0.4",stroke:"none"})}),Object(F.jsx)("p",{className:"articleCard__date",children:t.publishedAtFormatted})]}),Object(F.jsx)("h4",{className:"articleCard__title",id:"title",children:Object(F.jsx)(q.a,{searchWords:a,autoEscape:!0,textToHighlight:t.title})}),Object(F.jsx)("p",{className:"articleCard__description",children:Object(F.jsx)(q.a,{searchWords:a,autoEscape:!0,textToHighlight:t.summaryShort})}),Object(F.jsxs)("div",{className:"articleCard__linkWrapper",children:[Object(F.jsx)("p",{className:"articleCard__link",children:"Read more"}),Object(F.jsx)("img",{src:w,alt:"linkImg",className:"articleCard__linkArrow"})]})]})]})})},k=a(183),y=a(185);function S(e){return e.trim().split(" ").filter((function(e){return!0===!!e}))}var P={mr:"20px"},_={background:"#FFFFFF",border:"1px solid #EAEAEA",boxShadow:"0px 8px 24px rgba(0, 0, 0, 0.05)",borderRadius:"5px"},W={fontFamily:"Montserrat",fontStyle:"normal",fontWeight:400,fontSize:"16px",lineHeight:"150%",color:"#575757"},R=(a(131),function(){var e=x(),t=B((function(e){return e.articles.actualArticles})),a=function(e,t){var a=Object(i.useState)((function(){var a=localStorage.getItem(t);return a?JSON.parse(a):e})),r=Object(g.a)(a,2),c=r[0],s=r[1];return Object(i.useEffect)((function(){localStorage.setItem(t,JSON.stringify(c))}),[c]),[c,s]}("","input"),r=Object(g.a)(a,2),c=r[0],s=r[1];Object(i.useEffect)((function(){e(p(S(c)))}),[]);return Object(F.jsxs)("div",{className:"filter",children:[Object(F.jsx)("h2",{className:"filter__title",children:"Filter by keywords"}),Object(F.jsx)("div",{className:"filter__textFieldWrapper",children:Object(F.jsx)(k.a,{id:"input-with-icon-textfield",placeholder:"Search here...",variant:"outlined",fullWidth:!0,sx:_,onChange:function(t){var a;a=t.target.value,s(a),e(p(S(a)))},value:c,InputProps:{startAdornment:Object(F.jsx)(y.a,{position:"start",sx:P,children:Object(F.jsx)("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAUABQDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+jz4afDnXv+Cr2uePvjb8ZviD8QtB/Yr0jx74n+H/AOz/APs//D/xZqHgvS/ippXgjU10LXPi38VvEHhqaz1jX7fxFrlhqlt4f8NxXlq/hr7LdW9lqCJDcaj4nANn4uf8E81/Y/8AB2vfH7/gnD4k8Z/B/wAdfDDSbvxhrHwN1Txv418ffBz41+GfDsM+s+IfBut+HfGOva7qdp4h1qytp10LV7LV4mh1HbZ2h0S41EeINMAP1C/Z9+M3h39of4JfC/43eFIpbbQ/iZ4N0bxVbWNw2+50q5v7ZRqmiXUgVFlutE1WO90i5mjXyZp7KSWBmhdGIB+X3/BPD4u+Df2RIvEX/BOD496vp/ws8e/Bvxp4/wBS+B2r+Nb600Lw98cfgt448ceIfGfhvxN4Q8R6lNa6bq/iK3vtc1i01nw/E6X9tHbLFbR3d7pPia20MA9+/wCCgX/BQP4F/stfAb4gXA8feEPE/wAWvEHhXXND+HPw20PX9N1jxDqmv6rp9xp9pqup6Zpsl9caV4Y0N5m1XWNV1OK0spbexk020uJdUu7S2lAPbf2DPhbZfBb9jf8AZz+G9j4i0nxbFoPwv8P3Vx4j8P6lb6z4f1fU/EkcninWLrw/q9pNcWup6D/a2tXsei39vKYbvTI7WeNY0kEaAHqfxn/Z5+B/7RGg23hn44fCzwV8TtHsZZrjTIfFmiWuo3Wj3NxH5M91oeqFU1XQ7qaH91LdaRe2VxJGAjyFQAADyr4X/sE/safBm01yz+HP7OHwt0NfEujap4c167u/DsXiTVtU8Pa5aGw1nQLvW/FL61rMmiarZlrfUdJ+3jT7yJnW4t5N7ZAPjH9nz9ny9+Cd78evg/8AB/49fHb4ffCz4ffHbVrDwN4GsNW+HHiXSfCmk+Jfhx8MvH13omiXfj74ZeL9ctNHtNc8X6sLCwGrNEkTfarr7XrN3quq6iAA/9k=",alt:"search img"})})},inputProps:{style:W}})}),Object(F.jsx)("p",{className:"filter__resultsNumber",children:"Results: ".concat(t.length)})]})}),H=(a(137),function(){var e=x(),t=B((function(e){return e.articles.preparedArticles})),a=B((function(e){return e.articles.actualArticles})),r=B((function(e){return e.articles.inputKeyWords})),c=B((function(e){return e.articles.isFetching})),s=Object(i.useState)(1),n=Object(g.a)(s,2),l=n[0],u=n[1],o=Object(i.useState)(6),d=Object(g.a)(o,1)[0];Object(i.useEffect)((function(){var a=function(e,t){return e.map((function(e){return Object(Q.a)(Object(Q.a)({},e),{},{rankRating:C(e,t)})}))}(t,r),i=function(e,t){var a=e,i=t.join("").length>0;return i&&(a=a.filter((function(e){return e.rankRating>0})).sort((function(e,t){return t.rankRating-e.rankRating}))),i||(a=a.sort((function(e,t){return t.id-e.id}))),a}(Object(h.a)(a),r);e(A(i)),u(1)}),[t,r]);var m=function(e,t){return Math.ceil(e/t)}(a.length,d),p=function(e,t,a){var i=e*t,r=i-t;return a.slice(r,i)}(l,d,a);return Object(F.jsxs)("main",{className:"catalog",children:[Object(F.jsx)(R,{}),c?Object(F.jsx)(O.a,{color:"#363636"}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("ul",{className:"catalog__articles",children:p.map((function(e){return Object(F.jsx)("li",{children:Object(F.jsx)(L,{article:e})},e.id)}))}),Object(F.jsx)("div",{className:"catalog__paginationWrapper",children:Object(F.jsx)(v.a,{count:m,color:"primary",onChange:function(e,t){u(t)},page:l})})]})]})}),D=(a(138),function(){var e=B((function(e){return e.articles.preparedArticles})),t=Object(f.o)().productId,a=null===t||void 0===t?void 0:t.split(":")[1];Object(i.useEffect)((function(){window.scroll(0,0)}),[]);var r=e.find((function(e){return!!a&&e.id===parseInt(a,10)}));return r?Object(F.jsxs)("article",{className:"selectedArticle",children:[Object(F.jsx)("div",{className:"selectedArticle__backImage",style:{backgroundImage:"url(".concat(r.imageUrl,")")}}),Object(F.jsxs)("main",{className:"selectedArticle__textContent",children:[Object(F.jsx)("h1",{className:"selectedArticle__title",children:r.title}),Object(F.jsx)("p",{className:"selectedArticle__textParagraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit. Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi mauris diam amet et sed."}),Object(F.jsx)("p",{className:"selectedArticle__textParagraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit. Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi mauris diam amet et sed."}),Object(F.jsx)("p",{className:"selectedArticle__textParagraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit. Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi mauris diam amet et sed."}),Object(F.jsx)("p",{className:"selectedArticle__textParagraph",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit. Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi mauris diam amet et sed."})]}),Object(F.jsxs)("div",{className:"selectedArticle__linkContainer",children:[Object(F.jsx)("img",{src:w,alt:"img",className:"selectedArticle__linkArrow--reverse"}),Object(F.jsx)(n.b,{to:"/",className:"selectedArticle__link",children:"Back to homepage"})]})]}):Object(F.jsx)(O.a,{color:"#363636"})});function X(e){return e.map((function(e){var t=e.summary,a=function(e){var t=e.slice(0,10).split("-"),a=Object(g.a)(t,3),i=a[0],r=a[1],c=a[2],s=function(e){switch(e){case"01":return"January";case"02":return"February";case"03":return"March";case"04":return"April";case"05":return"May";case"06":return"June";case"07":return"July";case"08":return"August";case"09":return"September";case"10":return"October";case"11":return"November";case"12":return"December";default:return"???"}}(r),n=function(e){switch(e){case"1":case"21":case"31":return"".concat(e,"st");case"2":case"22":return"".concat(e,"nd");case"3":case"23":return"".concat(e,"rd");default:return"".concat(e,"th")}}(parseInt(c,10).toFixed());return"".concat(s," ").concat(n,", ").concat(i)}(e.publishedAt),i="/articleId:".concat(e.id);return e.summary.length>100&&(t="".concat(e.summary.slice(0,100),"...")),e.title.length>70&&(t="".concat(e.summary.slice(0,70),"...")),Object(Q.a)(Object(Q.a)({},e),{},{id:parseInt(e.id,10),publishedAtFormatted:a,summaryShort:t,rankRating:0,articleUrl:i})}))}var J=a(15),K=a.n(J),Z=a(21),M=(a(139),function(){var e=x(),t=function(e){var t=Object(i.useState)({isLoading:!1,articlesFromServer:void 0,error:void 0}),a=Object(g.a)(t,2),r=a[0],c=a[1];function s(e){return n.apply(this,arguments)}function n(){return(n=Object(Z.a)(K.a.mark((function e(t){var a,i;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(Object(Q.a)(Object(Q.a)({},r),{},{isLoading:!0})),e.prev=1,e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:i=e.sent,c(Object(Q.a)(Object(Q.a)({},r),{},{isLoading:!1,articlesFromServer:i})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),c(Object(Q.a)(Object(Q.a)({},r),{},{error:e.t0}));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return Object(i.useEffect)((function(){e&&s(e)}),[]),Object(Q.a)(Object(Q.a)({},r),{},{fetchNow:s})}("https://api.spaceflightnewsapi.net/v3/articles/"),a=t.articlesFromServer,r=t.isLoading,c=t.error;return Object(i.useEffect)((function(){if(e(m(r)),a){var t=X(a);e(d(t))}c&&alert(c)}),[a,r,c]),Object(F.jsx)("div",{className:"app",children:Object(F.jsxs)(f.c,{children:[Object(F.jsx)(f.a,{path:"/",element:Object(F.jsx)(H,{})}),Object(F.jsx)(f.a,{path:"/:productId",element:Object(F.jsx)(D,{})}),Object(F.jsx)(f.a,{path:"*",element:Object(F.jsx)("p",{children:"Oops, can't find this page"})})]})})});a(140);c.a.render(Object(F.jsx)(n.a,{children:Object(F.jsx)(s.a,{store:j,children:Object(F.jsx)(M,{})})}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.80979a0e.chunk.js.map