!function(e){function t(t){for(var o,a,c=t[0],s=t[1],d=t[2],p=0,m=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(l&&l(t);m.length;)m.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={0:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=s;r.push([8,1]),n()}({3:function(e,t,n){var o=n(4),i=n(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},5:function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o)()(!1);i.push([e.i,'html{font-size:12px;font-size:3vmax}body{background:linear-gradient(0deg, rgba(10, 236, 238, 0.8379726891) 0%, rgba(81, 179, 206, 0.8575805322) 3%, rgba(103, 162, 196, 0.8463760504) 17%, rgba(111, 155, 192, 0.8911939776) 46%, rgba(113, 154, 191, 0.8043592437) 52%, rgba(127, 127, 207, 0.8799894958) 70%, rgba(143, 94, 225, 0.8827906162) 80%, rgba(156, 68, 240, 0.9276085434) 88%, rgba(167, 45, 253, 0.950017507) 100%);padding:0px;margin:0px;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center}main{width:90%;height:90%;display:flex;flex-direction:column;justify-content:space-between}main .header-container{display:flex;flex-direction:column;justify-content:space-between;align-items:center;height:15%}main .header-container .social-container{height:35%;width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}main .header-container .social-container #author-text{font-family:"Titillium Web",sans-serif;font-size:.8em;line-height:.8em}main .header-container .social-container .link-container{display:flex;flex-direction:row}main .header-container .social-container .link-container #github :active,main .header-container .social-container .link-container #slack :active{color:#ca0808}main .header-container .social-container .link-container #github{margin-right:.6em}main .header-container .play-container{height:65%;display:flex;justify-content:center;align-items:center}main .header-container .play-container #play-button{background-color:green;border:1px solid #daa520;color:#daa520;font-family:"Press Start 2P",cursive;padding-top:2%;padding-left:1%;word-spacing:-0.5em}main .hero-container{height:20%;display:flex;justify-content:space-between;align-items:flex-start}main .hero-container .lock-container{display:flex;justify-content:center;align-items:center;width:15%;height:100%}main .hero-container #player-1-button,main .hero-container #player-2-button{background-color:#0051ff;color:#fff;text-align:center;padding-bottom:4px;display:none}main .hero-container .info-container{width:50%;height:100%;overflow:hidden}main .hero-container .info-container .inactive-game-container{height:100%;font-family:"Titillium Web",sans-serif}main .hero-container .info-container .inactive-game-container .inactive-game-text{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}main .hero-container .info-container .inactive-game-container .inactive-game-text p{margin:0;width:fit-content}main .hero-container .info-container .inactive-game-container .inactive-game-text #choose-text{font-size:.7em;color:silver}main .hero-container .info-container .inactive-game-container .inactive-game-text #mode-text{font-size:1.2em}main .hero-container .info-container .active-game-container{display:flex;flex-direction:column;justify-content:space-between;height:100%;display:none}main .hero-container .info-container .active-game-container .score-container{height:65%;display:flex;flex-direction:row;justify-content:space-around;align-items:center}main .hero-container .info-container .active-game-container .score-container .ratio-container{width:15%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:fit-content;overflow:hidden;font-size:.7em;font-family:"IM Fell English",serif}main .hero-container .info-container .active-game-container .score-container .ratio-container p{margin:0;padding:0}main .hero-container .info-container .active-game-container .score-container .ratio-container .division-spacing{text-decoration:line-through;margin-top:-20%;margin-bottom:-25%}main .hero-container .info-container .active-game-container .score-container .visual-container{background-color:rgba(25,25,112,.61);width:60%;height:100%}main .hero-container .info-container .active-game-container .stat-container{height:35%;font-family:"IM Fell English",serif;display:flex;justify-content:center;align-items:center;flex-direction:column}main .hero-container .info-container .active-game-container .stat-container .result-stats-container{height:100%;width:100%;display:flex;justify-content:center;align-items:center;font-size:.7em}main .hero-container .info-container .active-game-container .stat-container .result-stats-container p{margin:0;padding:0}main .hero-container .info-container .active-game-container .stat-container .partial-credit-container{display:none}main .hero-container .info-container .active-game-container .stat-container .partial-credit-container #partial-credit{color:#ff0}main .hero-container .info-container .active-game-container .stat-container .question-stats-container{height:100%;width:65%;display:flex;justify-content:space-between;align-items:center;font-size:.5em}main .hero-container .info-container .active-game-container .stat-container .question-stats-container p{margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0}main .middle-container{height:15%}main .middle-container .mode-container{height:100%;display:flex;flex-direction:row;justify-content:space-around}main .middle-container .mode-container .mode-select{width:35%;display:flex;justify-content:center;align-items:center;text-align:center}main .middle-container .mode-container .mode-select #dev-select-button,main .middle-container .mode-container .mode-select #otdb-select-button{background-color:#0051ff;color:#daa520;padding-bottom:4px;font-size:max(1em)}main .middle-container .prompt-container{height:100%;display:flex;justify-content:center;align-items:center;display:none}main .middle-container .prompt-container #prompt{font-family:"IM Fell English",serif;font-style:italic;text-align:center;font-size:.8em}main .bottom-container{height:45%;font-family:"IM Fell English",serif;overflow:hidden}main .bottom-container .dev-pregame-container{height:100%;display:flex;flex-direction:column;justify-content:space-between;display:none}main .bottom-container .dev-pregame-container .dev-description-container{height:15%;width:100%;display:flex;justify-content:center;align-items:center}main .bottom-container .dev-pregame-container .dev-description-container .dev-description-text{font-size:max(0.7em);font-weight:700;text-align:center;margin:0}main .bottom-container .dev-pregame-container .dev-dummy-spacing{height:10%}main .bottom-container .dev-pregame-container .dev-details-container{height:75%;width:100%;font-family:"IM Fell English",serif}main .bottom-container .dev-pregame-container .dev-details-container .dev-option-container{display:flex;justify-content:center;align-items:center}main .bottom-container .dev-pregame-container .dev-details-container .dev-all-container{display:flex;justify-content:center;align-items:center;width:100%;height:100%;margin:0;padding:0}main .bottom-container .dev-pregame-container .dev-details-container .dev-all-container #all{font-size:max(1em);min-width:80%;padding-top:1%;border:2px solid silver}main .bottom-container .dev-pregame-container .dev-details-container .slider-container{display:flex;flex-direction:column;margin-top:auto;align-items:center}main .bottom-container .dev-pregame-container .dev-details-container .slider-container input{width:10vw}main .bottom-container .dev-pregame-container .dev-details-container .slider-text-container{display:flex;justify-content:center;margin-top:-1vh;font-family:"Titillium Web",sans-serif}main .bottom-container .dev-pregame-container .dev-details-container .slider-text-container p{font-size:max(min(12px), 0.5em);margin:0;padding:0;color:#000}main .bottom-container .dev-pregame-container .dev-details-container .dev-option-button{background-color:green;font-size:max(0.6em);color:#daa520;border:1px solid #000;border-radius:5px;padding-left:3px;padding-right:3px;padding-top:4px;padding-bottom:1px;width:50%;overflow:hidden;text-align:center}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container{display:grid;width:80%;height:100%;margin:auto;grid-template-columns:repeat(12, 1fr);grid-template-rows:repeat(10, 1fr)}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .top-left{grid-column-start:1;grid-column-end:6;grid-row-start:1;grid-row-end:4}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .top-middle{grid-column-start:6;grid-column-end:8;grid-row-start:1;grid-row-end:4}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .top-right{grid-column-start:8;grid-column-end:13;grid-row-start:1;grid-row-end:4}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .bottom-left{grid-column-start:1;grid-column-end:6;grid-row-start:8;grid-row-end:11}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .bottom-middle{grid-column-start:6;grid-column-end:8;grid-row-start:8;grid-row-end:11}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .bottom-right{grid-column-start:8;grid-column-end:13;grid-row-start:8;grid-row-end:11}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .center{grid-column-start:4;grid-column-end:10;grid-row-start:4;grid-row-end:8}main .bottom-container .otdb-pregame-container{height:100%;display:flex;flex-direction:column;justify-content:space-between;display:none}main .bottom-container .otdb-pregame-container .otdb-description-container{height:15%;width:100%;display:flex;justify-content:center;align-items:center}main .bottom-container .otdb-pregame-container .otdb-description-container .otdb-description-text{font-size:max(0.7em);font-weight:700;text-align:center;margin:0}main .bottom-container .otdb-pregame-container .otdb-dummy-spacing{height:10%}main .bottom-container .otdb-pregame-container .otdb-parameters-container{height:75%;width:100%;font-size:.7em}main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form{height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-around;align-items:center;padding:0px;margin:0px}main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form ul{list-style:none;margin:0px}main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form ul li{padding-top:.5%;padding-bottom:.5%}main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form ul li :first-child{padding-top:0px}main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form ul li :last-child{padding-bottom:0px}main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form input,main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form select{border:#daa520 dashed 1px;background-color:silver;box-sizing:border-box;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding-top:.3%;padding-bottom:.3%;color:#1f8664;font-size:max(min(12px), 0.7em);font-family:"IM Fell English",serif;font-style:italic}main .bottom-container .response-container{height:100%;display:none}main .bottom-container .response-container .boolean-container{height:100%;display:flex;justify-content:center;align-items:center}main .bottom-container .response-container .boolean-container .boolean-button-container{width:100%;height:100%;display:flex;justify-content:space-around;align-items:center}main .bottom-container .response-container .boolean-container .boolean-button{font-family:"IM Fell English",serif;padding-top:1%;background-color:green;font-size:max(0.8em);color:#daa520}main .bottom-container .response-container .boolean-container #false-select{padding-left:1%;padding-right:1%}main .bottom-container .response-container .boolean-container #true-select{padding-left:1.33%;padding-right:1.33%}main .bottom-container .response-container .multiple-container{height:100%;overflow:auto}main .bottom-container .response-container .multiple-container .boxes-container{text-align:center;font-size:max(min(10px), 0.5em);height:100%;width:100%;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-around;align-items:center;margin:0;padding:0;word-break:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;-moz-hyphens:auto;hyphens:auto}main .bottom-container .response-container .multiple-container .boxes-container .box-container{border:1px solid #000;background-color:green;border-radius:5px;padding-left:3px;padding-right:3px;display:flex;justify-content:space-around}main .bottom-container .response-container .fill-container{height:100%;display:flex;justify-content:center;align-items:center}main .bottom-container .response-container .fill-container .sentence-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;font-family:"IM Fell English",serif;font-size:max(0.8em)}main .bottom-container .response-container .fill-container .sentence-container p{margin:0;padding:1%;white-space:pre-line;text-align:center}main .bottom-container .response-container .fill-container .sentence-container .text-box{background-color:silver;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding-top:.5%;padding-bottom:.5%;color:#1f8664;font-size:max(min(13px), 0.8em);font-family:"IM Fell English",serif;font-style:italic;width:max(min(40px), 10%);display:inline-block;text-align:center;outline:silver auto 3px;text-decoration:none}main .bottom-container .response-container .dropdown-container{height:100%;width:100%;display:flex;justify-content:center;align-items:center}main .bottom-container .response-container .dropdown-container .word-container{width:100%;height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;overflow:visible}main .bottom-container .response-container .dropdown-container #dropdown-form{width:100%;display:flex;justify-content:center;align-items:center}main .bottom-container .response-container .dropdown-container select{background-color:silver;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding-top:.3%;font-size:max(min(14px), min(0.9em, 40px));font-family:"IM Fell English",serif;user-select:none;margin:1.75%;color:#1f8664;border:#daa520 solid 1px;overflow:visible}.button{border:1px solid #000;border-radius:5px;padding-left:3px;padding-right:3px;padding-top:1px;padding-bottom:1px;width:min-content;height:min-content;font-size:max(1.3em);overflow:clip;line-height:1em;user-select:none;font-family:"DotGothic16",sans-serif}.nowrap{white-space:nowrap}',""]),t.default=i},8:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=function(){function e(e,t,n,o){for(var r=[],a=0;a<e.length;a++)r.push(JSON.parse(JSON.stringify(e[a])));if(n&&(r=r.filter((function(e){return n.includes(e.type)}))),n&&o){for(var c=[],s=0;s<n.length;s++)c[s]=r;r=[],c.forEach((function(e,t){c[t]=e.filter((function(e){return e.type===n[t]})).slice(0,o);for(var i=0;i<c[t].length;i++)r.push(c[t][i])}))}r=i.a.shuffle(r),this.maxScore=function(e){for(var t=0,n=0;n<e.length;n++){var o=0;"easy"===e[n].difficulty?o=1:"medium"===e[n].difficulty?o=2:"hard"===e[n].difficulty&&(o=3),t+=o}return t}(r),this.currentRoundNumber=1,this.totalRoundNumbers=r.length,this.currentRound=r.shift(),this.rounds=r,this.player1=t.p1,this.player2=t.p2,this.response=[]}return e.prototype.processResponse=function(e,t,n,o){var i=0,r=0;"easy"===this.currentRound.difficulty?r=1:"medium"===this.currentRound.difficulty?r=2:"hard"===this.currentRound.difficulty&&(r=3);for(var a=0,c=0,s=0;s<t.length+n.length;s++)t.includes(this.response[s])?a++:n.includes(this.response[s])&&c++;return a>0&&("single"===o?a===t.length&&0===c&&(i=1*r):"dropdown"===this.currentRound.type?i=r:(i=r/t.length*(a-c))<0&&(i=0)),this.player1.getName()===e&&this.player1.setScore(this.player1.getScore()+i),this.player2.getName()===e&&this.player2.setScore(this.player2.getScore()+i),this.currentRound=this.rounds.shift(),this.currentRoundNumber++,this.response=[],i},e.prototype.getLeader=function(){return this.player1.getScore()>this.player2.getScore()?this.player1.getName():this.player2.getScore()>this.player1.getScore()?this.player2.getName():null},e}(),a=function(){function e(e,t){this.name=e,this.score=t}return e.prototype.getName=function(){return this.name},e.prototype.getScore=function(){return this.score},e.prototype.setScore=function(e){this.score=e},e}(),c=n(0),s=n.n(c);function d(e,t){switch(void 0===t&&(t="black"),t){case"success":t="Green";break;case"info":t="Blue";break;case"error":t="Red";break;case"warning":t="Orange";break;default:t=t}console.log("%c"+e,"color:"+t)}function l(e,t){return Math.floor(Math.random()*(t-e+1)+e)}n(3),d("This project uses Typescript, jQuery, Sass, Webpack, ESLint & Prettier","rgb("+l(0,255)+",\n\t\t"+l(0,255)+",\n\t\t"+l(0,255)+")"),!window.location.hash&&window.addEventListener&&window.addEventListener("load",(function(){setTimeout((function(){window.scrollTo(0,0)}),0)}));
//! ___          ___    ___  __      __   __   __   ___
//!  |  |  |\/| |__      |  /  \    /  ` /  \ |  \ |__
//!  |  |  |  | |___     |  \__/    \__, \__/ |__/ |___
var p,m,f,u,g=s()("#play-button"),h=s()(".inactive-game-container"),b=s()(".active-game-container"),v=(s()(".ratio-container"),s()("#player-1-points")),x=s()("#player-2-points"),y=s()(".max-points"),w=s()(".division-spacing"),k=(s()(".stat-container"),s()("result-stats-container")),j=s()("#winner-text"),S=s()(".question-stats-container"),R=s()("#question-number-text"),z=s()(".partial-credit-container"),I=s()("#question-difficulty-text"),O=s()("#player-1-button"),E=s()("#player-2-button"),M=s()(".mode-container"),N=s()(".dev-option-container .dev-option-button"),D=s()("#all"),T=s()("#max-question-text"),_=s()("#dev-select-button"),q=s()(".otdb-description-text"),P=s()("#otdb-select-button"),C=s()("#prompt"),F=s()(".prompt-container"),U=s()(".dev-pregame-container"),L=s()(".otdb-pregame-container"),G=document.getElementById("otdb-parameters-form"),J=s()(".response-container"),W=!1,A=["boolean","multiple","fill","dropdown"],B=[],Q=s()("<div/>"),H=function(e){if(f=new a("Player One",0),u=new a("Player Two",0),"dev"===p){var t=B,n=parseInt(T.text(),10);m=new r(e,{p1:f,p2:u},t,n)}else m=new r(e,{p1:f,p2:u});"partial"===m.currentRound.credit&&z.fadeIn(),v.text(f.getScore()),x.text(u.getScore()),y.text(m.maxScore);for(var o="",c=0;c<m.maxScore.toString().split("").length;c++)o+="&nbsp;&nbsp;";w.html(o);var l=m.currentRound,g=l.type,h=l.difficulty,b=l.question,M=l.correct_answer,N=l.incorrect_answers,D=l.options,_=l.datatype,q=l.credit,P=(l.case,l.category);function F(){void 0===_&&(_="text"),void 0===q&&(q="single"),void 0===N&&(N=[]);try{if(b=decodeURIComponent(b),"string"==typeof M){try{M=decodeURIComponent(M)}catch(e){d(M+" decode error","info"),d(e,"error")}M=[M]}else for(var e=0;e<M.length;e++)try{M[e]=decodeURIComponent(M[e])}catch(t){d(M[e]+" decode error","info"),d(t,"error")}for(e=0;e<N.length;e++)try{N[e]=decodeURIComponent(N[e])}catch(t){d(N[e]+" decode error","info"),d(t,"error")}if(void 0!==P)try{P=decodeURIComponent(P)}catch(e){d(P+" decode error","info"),d(e,"error")}}catch(e){d("cleanData() error","info"),d(e,"error")}}F();var U=function(){g=m.currentRound.type,h=m.currentRound.difficulty,b=m.currentRound.question,M=m.currentRound.correct_answer,N=m.currentRound.incorrect_answers,D=m.currentRound.options,_=m.currentRound.datatype,q=m.currentRound.credit,m.currentRound.case,P=m.currentRound.category,F()};function L(e){m.processResponse(e,M,N,q),z.hide(),S.hide(),C.text("Game Over!"),J.fadeOut(),O.fadeOut(),E.fadeOut(),v.text(f.getScore()),x.text(u.getScore());var t=m.getLeader();null===t?j.text("Game ends in tie."):j.text(t+" wins!"),k.show()}var G=function(){var e,t,n,o;0===m.rounds.length&&(O.off(),E.off(),O.on("click",(function(){return L(f.getName())})),E.on("click",(function(){return L(u.getName())}))),Q.detach(),v.text(m.player1.getScore()),x.text(m.player2.getScore()),C.text(b),R.text(m.currentRoundNumber+"/"+m.totalRoundNumbers),"partial"===q?z.fadeIn():z.fadeOut(),I.text(h),"boolean"===g?(e=s()('<div class="boolean-container"/>'),t=s()('<div class="boolean-button-container"></div>'),n=s()('<div class="button boolean-button" id="false-select">FALSE</div>'),o=s()('<div class="button boolean-button" id="true-select">TRUE</div>'),n.on("click",(function(e){e.preventDefault(),o.css("border","1px solid black"),n.css("border","2px solid silver"),O.css("color","white"),E.css("color","white"),m.response=["False"]})),o.on("click",(function(e){e.preventDefault(),n.css("border","1px solid black"),o.css("border","2px solid silver"),O.css("color","white"),E.css("color","white"),m.response=["True"]})),t.append(n).append(o),e.append(t),Q=e):"multiple"===g?Q=function(e,t){for(var n=s()('<div class="multiple-container" />'),o=s()('<div class="boxes-container"></div>'),i=e.length.toString(),r="max((280px / "+i+"), (100% / "+i+")",a=function(n){var i=s()('<div class="box-container" id="box-container-'+n+'">\n\t\t<div class="box-content" id="box-content-'+n+'">'+e[n]+"</div></div>");i.css({"padding-top":"max((2% / 2), (5% / 3))","padding-bottom":"max((2% / 2), (5% / 3))",width:""+r,"margin-left":"max(2%, 5%)","margin-right":"max(2%, 5%)"}),i.on("click",(function(o){(o.preventDefault(),O.css("color","white"),E.css("color","white"),"single"===t)?(s()(".box-container").css("border","1px solid black"),i.css("border","2px solid silver"),m.response=[e[n]]):"rgb(0, 0, 0)"===i.css("borderColor")?(i.css("border","2px solid silver"),m.response.push(e[n])):(i.css("border","1px solid black"),m.response=m.response.filter((function(t){return t!==e[n]})))})),o.append(i)},c=0;c<e.length;c++)a(c);return n.append(o),n}(i.a.shuffle(i.a.concat(M,N)),q):"fill"===g?Q=function(e,t){for(var n=s()('<div class="fill-container" />'),o=s()('<div class="sentence-container"></div>'),i=e[0].split(" "),r="<p>",a=0;a<i.length;a++)"_"!==i[a]?r+=" "+i[a]:r+='</p><span contenteditable="true" id="'+a+'" class="text-box"></span><br><p>';r+="</p>",o.html(r);var c=s()(o[0]).children("span"),d=function(e){var t=s()(c[e]),n=parseInt(t[0].id,10);t.on("input",(function(e){e.preventDefault(),""!==t.text()?t.css("outline","goldenrod auto 3px"):t.css("outline","silver auto 3px"),i[n]=t.text();var o=i.join(" ");m.response=[o]}))};for(a=0;a<c.length;a++)d(a);return n.append(o),n}(N):"dropdown"===g&&(Q=function(e){for(var t=s()('<div class="dropdown-container" />'),n=s()('<div class="word-container"></div>'),o=s()('<form onkeydown="return event.key != \'Enter\';" id="dropdown-form"></form>'),i=0;i<e.length;i++){var r=s()("<select name='"+i+"' id='"+i+"'\"></select>");if(1===e[i].length)r.css({appearance:"none","-moz-appearance":"none","-webkit-appearance":"none","padding-left":"0.5vw","padding-right":"2vw","min-width":"35px","min-height":"25px"}),r.css("pointer-events","none"),r.append(s()('<option value="'+e[i][0]+'">'+e[i][0].toUpperCase()+"</option>"));else{r.css({"max-height":"58px","max-width:":"70px","padding-right":"0.3vw"}),r.append('<option value=""></option>');for(var a=0;a<e[i].length;a++)r.append(s()('<option value="'+e[i][a]+'">'+e[i][a].toUpperCase()+"</option>"))}r.on("change",(function(){var e="";o.serializeArray().forEach((function(t){return e+=t.value})),m.response=[e]})),o.append(r)}return n.append(o),t.append(n),t}(D)),J.append(Q.eq(0))};G(),O.on("click",(function(e){if(e.preventDefault(),0!==m.response.length){E.css("color","white");var t=m.processResponse(f.getName(),M,N,q);if(0===t)O.css("color","red");else if(t>0){var n=0;"easy"===h?n=1:"medium"===h?n=2:"hard"===h&&(n=3),t<n?O.css("color","yellow"):O.css("color","green")}U(),G()}})),E.on("click",(function(e){if(e.preventDefault(),0!==m.response.length){O.css("color","white");var t=m.processResponse(u.getName(),M,N,q);if(0===t)E.css("color","red");else if(t>0){var n=0;"easy"===h?n=1:"medium"===h?n=2:"hard"===h&&(n=3),t<n?E.css("color","yellow"):E.css("color","green")}U(),G()}}))},K=function(e){var t;if(e){var n=e.amount,o=e.category,i=e.difficulty,r=e.type;t="https://opentdb.com/api.php?amount="+n+("any"!==o?"&category="+o:"")+("any"!==i?"&difficulty="+i:"")+("any"!==r?"&type="+r:"")+"&encode=url3986"}else t="https://cdn.aglty.io/3bikcueb/trivia-cases/dev-challenge.json";s.a.ajax({url:t}).then((function(t){e&&0!==t.response_code?(W=!1,O.hide(),E.hide(),b.hide(),F.hide(),J.hide(),q.text("Sorry! No quiz in the Database matched these parameters. Try less questions and/or less specificity..."),M.show(),h.show(),L.show(),g.css("border","1px solid goldenrod")):H(t.results)}),(function(e){console.log("bad request",e),O.hide(),E.hide(),b.hide(),J.hide(),h.show(),M.show(),_.css("border","1px solid black"),P.css("border","1px solid black"),g.css("border","1px solid goldenrod"),C.text("Sorry! Server error. Please check your internet connection or try a different game mode."),C.fadeIn(),W=!1,p=void 0}))};D.on("click",(function(e){e.preventDefault(),"rgb(0, 0, 0)"===D.css("borderColor")?(B=A,N.css("border","1px solid black"),D.css("border","2px solid silver")):(B=[],D.css("border","1px solid black"))})),N.on("click",(function(e){e.preventDefault();var t=this.id,n=s()(this);B.length===A.length&&(D.css("border","1px solid black"),B=[]),"rgb(0, 0, 0)"===n.css("borderColor")?(B.length===A.length-1?(N.css("border","1px solid black"),D.css("border","2px solid silver")):n.css("border","2px solid silver"),B.push(t)):(B=B.filter((function(e){return e!==t})),n.css("border","1px solid black"))})),_.on("click",(function(e){e.preventDefault(),C.text(""),F.hide(),O.hide(),E.hide(),L.hide(),P.css("border","1px solid black"),_.css("border","2px dashed silver"),U.show(),D.css("border","2px solid silver"),N.css("border","1px solid black"),B=A,p="dev"})),P.on("click",(function(e){e.preventDefault(),C.text(""),F.hide(),O.hide(),E.hide(),U.hide(),_.css("border","1px solid black"),P.css("border","2px dashed silver"),q.html('Customize your match! Choose from over 4,000 verified questions housed in the <span class="nowrap">Open Trivia Database.</span>'),G.reset(),L.show(),p="otdb"})),g.on("click",(function(e){if(e.preventDefault(),z.hide(),W)j.text(""),k.hide(),R.text(""),I.text(""),S.show(),Q.detach(),O.off(),E.off(),O.css("color","white"),E.css("color","white"),O.hide(),E.hide(),b.hide(),F.hide(),J.hide(),h.show(),M.show(),_.css("border","1px solid black"),P.css("border","1px solid black"),g.css("border","1px solid goldenrod"),W=!1,p=void 0;else if("otdb"===p||"dev"===p&&0!==B.length){if(U.hide(),L.hide(),h.hide(),M.hide(),O.show(),E.show(),b.show(),F.show(),J.show(),g.css("border","1px dotted silver"),W=!0,"dev"===p&&K(),"otdb"===p){for(var t={amount:"",type:"",difficulty:"",category:""},n=s()("#otdb-parameters-form").serializeArray(),o=0;o<n.length;o++)"otdb-num-input"===n[o].name&&(t.amount=n[o].value),"otdb-format-input"===n[o].name&&(t.type=n[o].value),"otdb-diff-input"===n[o].name&&(t.difficulty=n[o].value),"otdb-cat-input"===n[o].name&&(t.category=n[o].value);K(t)}}else"dev"===p&&0===B.length?(N.fadeOut(500),D.fadeOut(400),N.fadeIn(500),D.fadeIn(400)):(M.fadeOut(),M.fadeIn())}))}});