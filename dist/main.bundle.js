!function(e){function n(n){for(var o,a,c=n[0],s=n[1],d=n[2],p=0,m=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(l&&l(n);m.length;)m.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,c=1;c<t.length;c++){var s=t[c];0!==i[s]&&(o=!1)}o&&(r.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},i={0:0},r=[];function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var l=s;r.push([8,1]),t()}({3:function(e,n,t){var o=t(4),i=t(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},5:function(e,n,t){"use strict";t.r(n);var o=t(2),i=t.n(o)()(!1);i.push([e.i,'html{font-size:12px;font-size:3vmax}body{background:linear-gradient(0deg, rgba(10, 236, 238, 0.8379726891) 0%, rgba(81, 179, 206, 0.8575805322) 3%, rgba(103, 162, 196, 0.8463760504) 17%, rgba(111, 155, 192, 0.8911939776) 46%, rgba(113, 154, 191, 0.8043592437) 52%, rgba(127, 127, 207, 0.8799894958) 70%, rgba(143, 94, 225, 0.8827906162) 80%, rgba(156, 68, 240, 0.9276085434) 88%, rgba(167, 45, 253, 0.950017507) 100%);padding:0px;margin:0px;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center}main{width:90%;height:90%;display:flex;flex-direction:column;justify-content:space-between}@media only screen and (max-device-width: 480px){main{margin-top:-10vh;height:90%}}main .header-container{display:flex;flex-direction:column;justify-content:space-between;align-items:center;height:15%}main .header-container .social-container{height:35%;width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}main .header-container .social-container #author-text{font-family:"Titillium Web",sans-serif;font-size:.8em;line-height:.8em}main .header-container .social-container .link-container{display:flex;flex-direction:row}main .header-container .social-container .link-container #github :active,main .header-container .social-container .link-container #slack :active{color:#ca0808}main .header-container .social-container .link-container #github{margin-right:.6em}main .header-container .play-container{height:65%;display:flex;justify-content:center;align-items:center}main .header-container .play-container #play-button{background-color:green;border:1px solid #daa520;color:#daa520;font-family:"Press Start 2P",cursive;padding-top:2%;padding-left:1%;word-spacing:-0.5em}main .hero-container{height:20%;display:flex;justify-content:space-between;align-items:flex-start}main .hero-container .lock-container{display:flex;justify-content:center;align-items:center;width:15%;height:100%}main .hero-container #player-1-button,main .hero-container #player-2-button{background-color:#0051ff;color:#fff;text-align:center;padding-bottom:4px;display:none}main .hero-container .info-container{width:50%;height:100%;overflow:hidden}main .hero-container .info-container .inactive-game-container{height:100%;font-family:"Titillium Web",sans-serif}main .hero-container .info-container .inactive-game-container .inactive-game-text{height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}main .hero-container .info-container .inactive-game-container .inactive-game-text p{margin:0;width:fit-content}main .hero-container .info-container .inactive-game-container .inactive-game-text #choose-text{font-size:.7em;color:silver}main .hero-container .info-container .inactive-game-container .inactive-game-text #mode-text{font-size:1.2em}main .hero-container .info-container .active-game-container{display:flex;flex-direction:column;justify-content:space-between;height:100%;display:none}main .hero-container .info-container .active-game-container .score-container{height:65%;display:flex;flex-direction:row;justify-content:space-around;align-items:center}main .hero-container .info-container .active-game-container .score-container .ratio-container{width:15%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:fit-content;overflow:hidden;font-size:.7em;font-family:"IM Fell English",serif}main .hero-container .info-container .active-game-container .score-container .ratio-container p{margin:0;padding:0}main .hero-container .info-container .active-game-container .score-container .ratio-container .division-spacing{text-decoration:line-through;margin-top:-20%;margin-bottom:-25%}main .hero-container .info-container .active-game-container .score-container .visual-container{background-color:rgba(25,25,112,.61);width:60%;height:100%}main .hero-container .info-container .active-game-container .stat-container{height:35%;font-family:"IM Fell English",serif;display:flex;justify-content:center;align-items:center;flex-direction:column}main .hero-container .info-container .active-game-container .stat-container .result-stats-container{height:100%;width:100%;display:flex;justify-content:center;align-items:center;font-size:.7em}main .hero-container .info-container .active-game-container .stat-container .result-stats-container p{margin:0;padding:0}main .hero-container .info-container .active-game-container .stat-container .partial-credit-container{display:none}main .hero-container .info-container .active-game-container .stat-container .partial-credit-container #partial-credit{color:#ff0}main .hero-container .info-container .active-game-container .stat-container .question-stats-container{height:100%;width:65%;display:flex;justify-content:space-between;align-items:center;font-size:.5em}main .hero-container .info-container .active-game-container .stat-container .question-stats-container p{margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0}main .middle-container{height:15%}main .middle-container .mode-container{height:100%;display:flex;flex-direction:row;justify-content:space-around}main .middle-container .mode-container .mode-select{width:35%;display:flex;justify-content:center;align-items:center;text-align:center}main .middle-container .mode-container .mode-select #dev-select-button,main .middle-container .mode-container .mode-select #otdb-select-button{background-color:#0051ff;color:#daa520;padding-bottom:4px;font-size:max(1em)}main .middle-container .prompt-container{height:100%;display:flex;justify-content:center;align-items:center;display:none}main .middle-container .prompt-container #prompt{font-family:"IM Fell English",serif;font-style:italic;text-align:center;font-size:.8em}main .bottom-container{height:45%;font-family:"IM Fell English",serif;overflow:hidden}main .bottom-container .dev-pregame-container{height:100%;display:flex;flex-direction:column;justify-content:space-between;display:none}main .bottom-container .dev-pregame-container .dev-description-container{height:15%;width:100%;display:flex;justify-content:center;align-items:center}main .bottom-container .dev-pregame-container .dev-description-container .dev-description-text{font-size:max(0.6em);font-weight:700;text-align:center;margin:0}main .bottom-container .dev-pregame-container .dev-dummy-spacing{height:10%}main .bottom-container .dev-pregame-container .dev-details-container{height:75%;width:100%;font-family:"IM Fell English",serif}main .bottom-container .dev-pregame-container .dev-details-container .dev-option-container{display:flex;justify-content:center;align-items:center}main .bottom-container .dev-pregame-container .dev-details-container .dev-all-container{display:flex;justify-content:center;align-items:center;width:100%;height:100%;margin:0;padding:0}main .bottom-container .dev-pregame-container .dev-details-container .dev-all-container #all{font-size:max(1em);min-width:80%;padding-top:1%;border:2px solid silver}main .bottom-container .dev-pregame-container .dev-details-container .slider-container{display:flex;flex-direction:column;margin-top:auto;align-items:center}main .bottom-container .dev-pregame-container .dev-details-container .slider-container input{width:10vw}main .bottom-container .dev-pregame-container .dev-details-container .slider-text-container{display:flex;justify-content:center;margin-top:-1vh;font-family:"Titillium Web",sans-serif}main .bottom-container .dev-pregame-container .dev-details-container .slider-text-container p{font-size:max(min(12px), 0.5em);margin:0;padding:0;color:#000}@media only screen and (max-device-width: 480px){main .bottom-container .dev-pregame-container .dev-details-container #dropdown{font-size:max(0.55em)}}main .bottom-container .dev-pregame-container .dev-details-container .dev-option-button{background-color:green;font-size:max(0.6em);color:#daa520;border:1px solid #000;border-radius:5px;padding-left:3px;padding-right:3px;padding-top:4px;padding-bottom:1px;width:50%;overflow:hidden;text-align:center}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container{display:grid;width:80%;height:100%;margin:auto;grid-template-columns:repeat(12, 1fr);grid-template-rows:repeat(10, 1fr)}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .top-left{grid-column-start:1;grid-column-end:6;grid-row-start:1;grid-row-end:4}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .top-middle{grid-column-start:6;grid-column-end:8;grid-row-start:1;grid-row-end:4}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .top-right{grid-column-start:8;grid-column-end:13;grid-row-start:1;grid-row-end:4}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .bottom-left{grid-column-start:1;grid-column-end:6;grid-row-start:8;grid-row-end:11}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .bottom-middle{grid-column-start:6;grid-column-end:8;grid-row-start:8;grid-row-end:11}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .bottom-right{grid-column-start:8;grid-column-end:13;grid-row-start:8;grid-row-end:11}main .bottom-container .dev-pregame-container .dev-details-container .dev-grid-container .center{grid-column-start:4;grid-column-end:10;grid-row-start:4;grid-row-end:8}main .bottom-container .otdb-pregame-container{height:100%;display:flex;flex-direction:column;justify-content:space-between;display:none}main .bottom-container .otdb-pregame-container .otdb-description-container{height:15%;width:100%;display:flex;justify-content:center;align-items:center}main .bottom-container .otdb-pregame-container .otdb-description-container .otdb-description-text{font-size:max(0.6em);font-weight:700;text-align:center;margin:0}main .bottom-container .otdb-pregame-container .otdb-dummy-spacing{height:10%}main .bottom-container .otdb-pregame-container .otdb-parameters-container{height:75%;width:100%;font-size:.7em}main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form{height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-around;align-items:center;padding:0px;margin:0px}main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form ul{list-style:none;margin:0px}main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form ul li{padding-top:.5%;padding-bottom:.5%}main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form ul li :first-child{padding-top:0px}main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form ul li :last-child{padding-bottom:0px}main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form input,main .bottom-container .otdb-pregame-container .otdb-parameters-container #otdb-parameters-form select{border:#daa520 dashed 1px;background-color:silver;box-sizing:border-box;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding-top:.3%;padding-bottom:.3%;color:#1f8664;font-size:max(min(12px), 0.7em);font-family:"IM Fell English",serif;font-style:italic}main .bottom-container .response-container{height:100%;display:none}main .bottom-container .response-container .boolean-container{height:100%;display:flex;justify-content:center;align-items:center}main .bottom-container .response-container .boolean-container .boolean-button-container{width:100%;height:100%;display:flex;justify-content:space-around;align-items:center}main .bottom-container .response-container .boolean-container .boolean-button{font-family:"IM Fell English",serif;padding-top:1%;background-color:green;font-size:max(0.8em);color:#daa520}main .bottom-container .response-container .boolean-container #false-select{padding-left:1%;padding-right:1%}main .bottom-container .response-container .boolean-container #true-select{padding-left:1.33%;padding-right:1.33%}main .bottom-container .response-container .multiple-container{height:100%;overflow:auto}main .bottom-container .response-container .multiple-container .boxes-container{text-align:center;font-size:max(min(10px), 0.5em);height:100%;width:100%;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-around;align-items:center;margin:0;padding:0;word-break:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;-moz-hyphens:auto;hyphens:auto}main .bottom-container .response-container .multiple-container .boxes-container .box-container{border:1px solid #000;background-color:green;border-radius:5px;padding-left:3px;padding-right:3px;display:flex;justify-content:space-around}main .bottom-container .response-container .fill-container{height:100%;display:flex;justify-content:center;align-items:center}main .bottom-container .response-container .fill-container .sentence-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;font-family:"IM Fell English",serif;font-size:max(0.8em)}@media only screen and (max-device-width: 480px){main .bottom-container .response-container .fill-container .sentence-container{font-size:max(min(11px), 0.6em)}}main .bottom-container .response-container .fill-container .sentence-container p{margin:0;padding:1%;white-space:pre-line;text-align:center}main .bottom-container .response-container .fill-container .sentence-container .text-box{background-color:silver;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding-top:.5%;padding-bottom:.5%;color:#1f8664;font-size:max(min(13px), 0.8em);font-family:"IM Fell English",serif;font-style:italic;width:max(min(40px), 10%);display:inline-block;text-align:center;outline:silver auto 3px;text-decoration:none}@media only screen and (max-device-width: 480px){main .bottom-container .response-container .fill-container .sentence-container .text-box{font-size:max(min(11px), 0.6em)}}main .bottom-container .response-container .dropdown-container{height:100%;width:100%;display:flex;justify-content:center;align-items:center}main .bottom-container .response-container .dropdown-container .word-container{width:100%;height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;overflow:visible}main .bottom-container .response-container .dropdown-container #dropdown-form{width:100%;display:flex;justify-content:center;align-items:center}main .bottom-container .response-container .dropdown-container select{background-color:silver;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding-top:.3%;font-size:max(min(14px), min(0.9em, 40px));font-family:"IM Fell English",serif;user-select:none;margin:1.75%;color:#1f8664;border:#daa520 solid 1px;overflow:visible}.button{border:1px solid #000;border-radius:5px;padding-left:3px;padding-right:3px;padding-top:1px;padding-bottom:1px;width:min-content;height:min-content;font-size:max(1.3em);overflow:clip;line-height:1em;user-select:none;font-family:"DotGothic16",sans-serif}.nowrap{white-space:nowrap}',""]),n.default=i},8:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t.n(o),r=function(){function e(e,n,t,o){for(var r=[],a=0;a<e.length;a++)r.push(JSON.parse(JSON.stringify(e[a])));if(t&&(r=r.filter((function(e){return t.includes(e.type)}))),t&&o){for(var c=[],s=0;s<t.length;s++)c[s]=r;r=[],c.forEach((function(e,n){c[n]=e.filter((function(e){return e.type===t[n]})).slice(0,o);for(var i=0;i<c[n].length;i++)r.push(c[n][i])}))}r=i.a.shuffle(r),this.maxScore=function(e){for(var n=0,t=0;t<e.length;t++){var o=0;"easy"===e[t].difficulty?o=1:"medium"===e[t].difficulty?o=2:"hard"===e[t].difficulty&&(o=3),n+=o}return n}(r),this.currentRoundNumber=1,this.totalRoundNumbers=r.length,this.currentRound=r.shift(),this.rounds=r,this.player1=n.p1,this.player2=n.p2,this.response=[]}return e.prototype.processResponse=function(e,n,t,o){var i=0,r=0;"easy"===this.currentRound.difficulty?r=1:"medium"===this.currentRound.difficulty?r=2:"hard"===this.currentRound.difficulty&&(r=3);for(var a=0,c=0,s=0;s<n.length+t.length;s++)n.includes(this.response[s])?a++:t.includes(this.response[s])&&c++;return a>0&&("single"===o?a===n.length&&0===c&&(i=1*r):"dropdown"===this.currentRound.type?i=r:(i=r/n.length*(a-c))<0&&(i=0)),this.player1.getName()===e&&this.player1.setScore(this.player1.getScore()+i),this.player2.getName()===e&&this.player2.setScore(this.player2.getScore()+i),this.currentRound=this.rounds.shift(),this.currentRoundNumber++,this.response=[],i},e.prototype.getLeader=function(){return this.player1.getScore()>this.player2.getScore()?this.player1.getName():this.player2.getScore()>this.player1.getScore()?this.player2.getName():null},e}(),a=function(){function e(e,n){this.name=e,this.score=n}return e.prototype.getName=function(){return this.name},e.prototype.getScore=function(){return this.score},e.prototype.setScore=function(e){this.score=e},e}(),c=t(0),s=t.n(c);function d(e,n){switch(void 0===n&&(n="black"),n){case"success":n="Green";break;case"info":n="Blue";break;case"error":n="Red";break;case"warning":n="Orange";break;default:n=n}console.log("%c"+e,"color:"+n)}function l(e,n){return Math.floor(Math.random()*(n-e+1)+e)}t(3),d("This project uses Typescript, jQuery, Sass, Webpack, ESLint & Prettier","rgb("+l(0,255)+",\n\t\t"+l(0,255)+",\n\t\t"+l(0,255)+")");
//! ___          ___    ___  __      __   __   __   ___
//!  |  |  |\/| |__      |  /  \    /  ` /  \ |  \ |__
//!  |  |  |  | |___     |  \__/    \__, \__/ |__/ |___
var p,m,f,g,u=s()("#play-button"),h=s()(".inactive-game-container"),b=s()(".active-game-container"),x=(s()(".ratio-container"),s()("#player-1-points")),v=s()("#player-2-points"),y=s()(".max-points"),w=s()(".division-spacing"),k=(s()(".stat-container"),s()("result-stats-container")),j=s()("#winner-text"),S=s()(".question-stats-container"),R=s()("#question-number-text"),z=s()(".partial-credit-container"),I=s()("#question-difficulty-text"),O=s()("#player-1-button"),E=s()("#player-2-button"),M=s()(".mode-container"),N=s()(".dev-option-container .dev-option-button"),D=s()("#all"),_=s()("#max-question-text"),q=s()("#dev-select-button"),P=s()(".otdb-description-text"),C=s()("#otdb-select-button"),F=s()("#prompt"),T=s()(".prompt-container"),U=s()(".dev-pregame-container"),G=s()(".otdb-pregame-container"),J=document.getElementById("otdb-parameters-form"),L=s()(".response-container"),W=!1,A=["boolean","multiple","fill","dropdown"],B=[],Q=s()("<div/>"),H=function(e){if(f=new a("Player One",0),g=new a("Player Two",0),"dev"===p){var n=B,t=parseInt(_.text(),10);m=new r(e,{p1:f,p2:g},n,t)}else m=new r(e,{p1:f,p2:g});"partial"===m.currentRound.credit&&z.fadeIn(),x.text(f.getScore()),v.text(g.getScore()),y.text(m.maxScore);for(var o="",c=0;c<m.maxScore.toString().split("").length;c++)o+="&nbsp;&nbsp;";w.html(o);var l=m.currentRound,u=l.type,h=l.difficulty,b=l.question,M=l.correct_answer,N=l.incorrect_answers,D=l.options,q=l.datatype,P=l.credit,C=(l.case,l.category);function T(){void 0===q&&(q="text"),void 0===P&&(P="single"),void 0===N&&(N=[]);try{if(b=decodeURIComponent(b),"string"==typeof M){try{M=decodeURIComponent(M)}catch(e){d(M+" decode error","info"),d(e,"error")}M=[M]}else for(var e=0;e<M.length;e++)try{M[e]=decodeURIComponent(M[e])}catch(n){d(M[e]+" decode error","info"),d(n,"error")}for(e=0;e<N.length;e++)try{N[e]=decodeURIComponent(N[e])}catch(n){d(N[e]+" decode error","info"),d(n,"error")}if(void 0!==C)try{C=decodeURIComponent(C)}catch(e){d(C+" decode error","info"),d(e,"error")}}catch(e){d("cleanData() error","info"),d(e,"error")}}T();var U=function(){u=m.currentRound.type,h=m.currentRound.difficulty,b=m.currentRound.question,M=m.currentRound.correct_answer,N=m.currentRound.incorrect_answers,D=m.currentRound.options,q=m.currentRound.datatype,P=m.currentRound.credit,m.currentRound.case,C=m.currentRound.category,T()};function G(e){m.processResponse(e,M,N,P),z.hide(),S.hide(),F.text("Game Over!"),L.fadeOut(),O.fadeOut(),E.fadeOut(),x.text(f.getScore()),v.text(g.getScore());var n=m.getLeader();null===n?j.text("Game ends in tie."):j.text(n+" wins!"),k.show()}var J=function(){var e,n,t,o;0===m.rounds.length&&(O.off(),E.off(),O.on("click",(function(){return G(f.getName())})),E.on("click",(function(){return G(g.getName())}))),Q.detach(),x.text(m.player1.getScore()),v.text(m.player2.getScore()),F.text(b),R.text(m.currentRoundNumber+"/"+m.totalRoundNumbers),"partial"===P?z.fadeIn():z.fadeOut(),I.text(h),"boolean"===u?(e=s()('<div class="boolean-container"/>'),n=s()('<div class="boolean-button-container"></div>'),t=s()('<div class="button boolean-button" id="false-select">FALSE</div>'),o=s()('<div class="button boolean-button" id="true-select">TRUE</div>'),t.on("click",(function(e){e.preventDefault(),o.css("border","1px solid black"),t.css("border","2px solid silver"),O.css("color","white"),E.css("color","white"),m.response=["False"]})),o.on("click",(function(e){e.preventDefault(),t.css("border","1px solid black"),o.css("border","2px solid silver"),O.css("color","white"),E.css("color","white"),m.response=["True"]})),n.append(t).append(o),e.append(n),Q=e):"multiple"===u?Q=function(e,n){for(var t=s()('<div class="multiple-container" />'),o=s()('<div class="boxes-container"></div>'),i=e.length.toString(),r="max((280px / "+i+"), (100% / "+i+")",a=function(t){var i=s()('<div class="box-container" id="box-container-'+t+'">\n\t\t<div class="box-content" id="box-content-'+t+'">'+e[t]+"</div></div>");i.css({"padding-top":"max((2% / 2), (5% / 3))","padding-bottom":"max((2% / 2), (5% / 3))",width:""+r,"margin-left":"max(2%, 5%)","margin-right":"max(2%, 5%)"}),i.on("click",(function(o){(o.preventDefault(),O.css("color","white"),E.css("color","white"),"single"===n)?(s()(".box-container").css("border","1px solid black"),i.css("border","2px solid silver"),m.response=[e[t]]):"rgb(0, 0, 0)"===i.css("borderColor")?(i.css("border","2px solid silver"),m.response.push(e[t])):(i.css("border","1px solid black"),m.response=m.response.filter((function(n){return n!==e[t]})))})),o.append(i)},c=0;c<e.length;c++)a(c);return t.append(o),t}(i.a.shuffle(i.a.concat(M,N)),P):"fill"===u?Q=function(e,n){for(var t=s()('<div class="fill-container" />'),o=s()('<div class="sentence-container"></div>'),i=e[0].split(" "),r="<p>",a=0;a<i.length;a++)"_"!==i[a]?r+=" "+i[a]:r+='</p><span contenteditable="true" id="'+a+'" class="text-box"></span><br><p>';r+="</p>",o.html(r);var c=s()(o[0]).children("span"),d=function(e){var n=s()(c[e]),t=parseInt(n[0].id,10);n.on("input",(function(e){e.preventDefault(),""!==n.text()?n.css("outline","goldenrod auto 3px"):n.css("outline","silver auto 3px"),i[t]=n.text();var o=i.join(" ");m.response=[o]}))};for(a=0;a<c.length;a++)d(a);return t.append(o),t}(N):"dropdown"===u&&(Q=function(e){for(var n=s()('<div class="dropdown-container" />'),t=s()('<div class="word-container"></div>'),o=s()('<form onkeydown="return event.key != \'Enter\';" id="dropdown-form"></form>'),i=0;i<e.length;i++){var r=s()("<select name='"+i+"' id='"+i+"'\"></select>");if(1===e[i].length)r.css({appearance:"none","-moz-appearance":"none","-webkit-appearance":"none","padding-left":"0.5vw","padding-right":"2vw","min-width":"35px","min-height":"25px"}),r.css("pointer-events","none"),r.append(s()('<option value="'+e[i][0]+'">'+e[i][0].toUpperCase()+"</option>"));else{r.css({"max-height":"58px","max-width:":"70px","padding-right":"0.3vw"}),r.append('<option value=""></option>');for(var a=0;a<e[i].length;a++)r.append(s()('<option value="'+e[i][a]+'">'+e[i][a].toUpperCase()+"</option>"))}r.on("change",(function(){var e="";o.serializeArray().forEach((function(n){return e+=n.value})),m.response=[e]})),o.append(r)}return t.append(o),n.append(t),n}(D)),L.append(Q.eq(0))};J(),O.on("click",(function(e){if(e.preventDefault(),0!==m.response.length){E.css("color","white");var n=m.processResponse(f.getName(),M,N,P);if(0===n)O.css("color","red");else if(n>0){var t=0;"easy"===h?t=1:"medium"===h?t=2:"hard"===h&&(t=3),n<t?O.css("color","yellow"):O.css("color","green")}U(),J()}})),E.on("click",(function(e){if(e.preventDefault(),0!==m.response.length){O.css("color","white");var n=m.processResponse(g.getName(),M,N,P);if(0===n)E.css("color","red");else if(n>0){var t=0;"easy"===h?t=1:"medium"===h?t=2:"hard"===h&&(t=3),n<t?E.css("color","yellow"):E.css("color","green")}U(),J()}}))},K=function(e){var n;if(e){var t=e.amount,o=e.category,i=e.difficulty,r=e.type;n="https://opentdb.com/api.php?amount="+t+("any"!==o?"&category="+o:"")+("any"!==i?"&difficulty="+i:"")+("any"!==r?"&type="+r:"")+"&encode=url3986"}else n="https://cdn.aglty.io/3bikcueb/trivia-cases/dev-challenge.json";s.a.ajax({url:n}).then((function(n){e&&0!==n.response_code?(W=!1,O.hide(),E.hide(),b.hide(),T.hide(),L.hide(),P.text("Sorry! No quiz in the Database matched these parameters. Try less questions and/or less specificity..."),M.show(),h.show(),G.show(),u.css("border","1px solid goldenrod")):H(n.results)}),(function(e){console.log("bad request",e),O.hide(),E.hide(),b.hide(),L.hide(),h.show(),M.show(),q.css("border","1px solid black"),C.css("border","1px solid black"),u.css("border","1px solid goldenrod"),F.text("Sorry! Server error. Please check your internet connection or try a different game mode."),F.fadeIn(),W=!1,p=void 0}))};D.on("click",(function(e){e.preventDefault(),"rgb(0, 0, 0)"===D.css("borderColor")?(B=A,N.css("border","1px solid black"),D.css("border","2px solid silver")):(B=[],D.css("border","1px solid black"))})),N.on("click",(function(e){e.preventDefault();var n=this.id,t=s()(this);B.length===A.length&&(D.css("border","1px solid black"),B=[]),"rgb(0, 0, 0)"===t.css("borderColor")?(B.length===A.length-1?(N.css("border","1px solid black"),D.css("border","2px solid silver")):t.css("border","2px solid silver"),B.push(n)):(B=B.filter((function(e){return e!==n})),t.css("border","1px solid black"))})),q.on("click",(function(e){e.preventDefault(),F.text(""),T.hide(),O.hide(),E.hide(),G.hide(),C.css("border","1px solid black"),q.css("border","2px dashed silver"),U.show(),D.css("border","2px solid silver"),N.css("border","1px solid black"),B=A,p="dev"})),C.on("click",(function(e){e.preventDefault(),F.text(""),T.hide(),O.hide(),E.hide(),U.hide(),q.css("border","1px solid black"),C.css("border","2px dashed silver"),P.html('Customize your match! Choose from over 4,000 verified questions housed in the <span class="nowrap">Open Trivia Database.</span>'),J.reset(),G.show(),p="otdb"})),u.on("click",(function(e){if(e.preventDefault(),z.hide(),W)j.text(""),k.hide(),R.text(""),I.text(""),S.show(),Q.detach(),O.off(),E.off(),O.css("color","white"),E.css("color","white"),O.hide(),E.hide(),b.hide(),T.hide(),L.hide(),h.show(),M.show(),q.css("border","1px solid black"),C.css("border","1px solid black"),u.css("border","1px solid goldenrod"),W=!1,p=void 0;else if("otdb"===p||"dev"===p&&0!==B.length){if(U.hide(),G.hide(),h.hide(),M.hide(),O.show(),E.show(),b.show(),T.show(),L.show(),u.css("border","1px dotted silver"),W=!0,"dev"===p&&K(),"otdb"===p){for(var n={amount:"",type:"",difficulty:"",category:""},t=s()("#otdb-parameters-form").serializeArray(),o=0;o<t.length;o++)"otdb-num-input"===t[o].name&&(n.amount=t[o].value),"otdb-format-input"===t[o].name&&(n.type=t[o].value),"otdb-diff-input"===t[o].name&&(n.difficulty=t[o].value),"otdb-cat-input"===t[o].name&&(n.category=t[o].value);K(n)}}else"dev"===p&&0===B.length?(N.fadeOut(500),D.fadeOut(400),N.fadeIn(500),D.fadeIn(400)):(M.fadeOut(),M.fadeIn())}))}});