webpackJsonp([1],{"79FW":function(t,e){},JKkS:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("xd7I"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=s("C7Lr")({name:"App"},n,!1,function(t){s("79FW")},null,null).exports,r=s("3XdE"),i=s("3cXf"),l=s.n(i),c=s("ZLEe"),u=s.n(c),h={name:"voterDialog",props:{candidateList:{required:!0,type:Array,default:function(){return[]}}},data:function(){return{radio:"",dialogVisible:!1,colors:["primary","success","info","warning","danger"]}},methods:{handleSure:function(){this.dialogVisible=!1,this.$emit("vote",this.radio)},getColor:function(){var t=Math.floor(5*Math.random());return this.colors[t]}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{attrs:{title:"候选人名单","show-close":!1,visible:t.dialogVisible,"max-width":"80%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("div",{staticClass:"candidate-panel"},t._l(t.candidateList,function(e,o){return s("div",{key:o,staticClass:"radio-block",class:[t.getColor()]},[s("el-radio",{attrs:{label:e},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v(t._s(e))])],1)}),0),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.handleSure}},[t._v("确 定")])],1)])},staticRenderFns:[]};var d=s("C7Lr")(h,f,!1,function(t){s("WTCo")},null,null).exports,v=s("ryJa"),m=s.n(v),b={name:"vote",components:{voterDialog:d},data:function(){return{fans:"",result:{},score:{},voteHistory:{},memberList:["艾小姚","陈煜","戴敏","黄群","姜明哲","柯艳琴","刘钦铸","刘雅琴","刘志斌","马文涛","孟腾飞","王生资","王晓芳","熊龙辉","许璠","徐海","叶国良","张贵"],banList:[],colors:["primary","success","info","warning","danger"],banOrVote:""}},computed:{candidateList:function(){var t=this,e=[];return this.memberList.forEach(function(s){t.banList.includes(s)||e.push(s)}),e}},created:function(){},watch:{},methods:{handleDelBanItem:function(t){this.banList.splice(t,1)},isWinner:function(t){if(this.result.hasOwnProperty(t))return!0},getPercentage:function(t){var e=this.memberList.length-this.banList.length;return Number((t/e*100).toFixed(2))},getFans:function(t){var e=this,s=[];return u()(this.voteHistory).forEach(function(o){e.voteHistory[o]===t&&s.push(o)}),"我的粉丝:"+s.join(",")},setResult:function(){var t=this;this.result={};var e=[],s=[],o=[];u()(this.score).forEach(function(e){s.push(t.score[e]),o.push(e)});var n=0;s.forEach(function(t,s){t>n?(n=t,(e=[]).push(s)):t===n&&(n=t,e.push(s))}),e.forEach(function(e){t.$set(t.result,o[e],n)});for(var a=0;a<s.length-1;a++)for(var r=a+1;r<s.length;r++)if(s[r]>s[a]){var i=s[a];s[a]=s[r],s[r]=i,i=o[a],o[a]=o[r],o[r]=i}this.score={},o.forEach(function(e,o){t.$set(t.score,e,s[o])})},setScore:function(t){this.score.hasOwnProperty(t)?this.score[t]+=1:this.$set(this.score,t,1)},setVoteHistory:function(t){this.voteHistory[this.fans]=t},voteCheck:function(t){if(this.voteHistory.hasOwnProperty(this.fans)){this.$message({message:"亲，重复投票，之前的票数将作废哦!",type:"warning"});var e=this.voteHistory[this.fans];1===this.score[e]?this.$delete(this.score,e):this.score[e]=this.score[e]-1,this.$delete(this.voteHistory,this.fans)}this.fans===t&&this.$message({message:"迷之自信，看好你哦!",type:"warning"})},vote:function(t){console.log("vote:",t),this.voteCheck(t),this.setVoteHistory(t),this.setScore(t),this.setResult()},handleMember:function(t){"vote"===this.banOrVote?(this.fans=t,this.$refs.voterDialog.dialogVisible=!0):"ban"===this.banOrVote&&(this.banList.includes(t)||this.banList.push(t))},getColor:function(){var t=Math.floor(5*Math.random());return this.colors[t]},handleBan:function(){this.banOrVote="ban"},handleVote:function(){this.banOrVote="vote"},handleData:function(){var t={ban:this.banList,vote:this.voteHistory,score:this.score,result:this.result},e=JSON.parse(l()(t.vote)),s={},o=0;u()(e).forEach(function(t){++o%4==0?s["\n"+t]=e[t]:s[t]=e[t]}),t.vote=s;var n=l()(t);n=n.replace(/\\n/g,"\n"),console.log("objStr:",n);var a="---\ntitle: "+m()().format("YYYYMMDD")+"周最佳投票  \ndate: "+m()().format("YYYY-MM-DD hh:mm:ss")+"\ncategories: vote\nauthor: 云业务武汉团队\ntags:\n- 团队\nsidebar: auto\n---\n\n###  周最佳\n\n";a=a+"```json"+n+"```";var r=m()().format("YYYYMMDD")+"_周最佳投票.md";console.log("data:",{fileName:r,doc:a})}}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vote-wrap"},[s("div",{staticClass:"member-panel"},t._l(t.memberList,function(e,o){return s("el-col",{key:o,attrs:{xs:12,sm:8,md:6,lg:4,xl:4}},[s("div",{staticClass:"member-name-block"},[s("el-button",{attrs:{type:t.getColor(),plain:"",size:"medium",disabled:""===t.banOrVote},on:{click:function(s){return t.handleMember(e)}}},[t._v(t._s(e))])],1)])}),1),t._v(" "),s("div",{staticClass:"list"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{staticStyle:{"margin-bottom":"20px"},attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[s("div",{staticClass:"ban-vote-panel"},[s("el-button",{staticClass:"btn-ban",attrs:{type:"danger"},on:{click:t.handleBan}},[t._v("BAN")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.handleVote}},[t._v("VOTE")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:t.handleData}},[t._v("DATA")])],1),t._v(" "),s("div",{staticClass:"ban-list"},[s("p",{staticClass:"title"},[t._v("曾经的周最佳")]),t._v(" "),s("div",{staticClass:"ban-panel"},t._l(t.banList,function(e,o){return s("el-tag",{key:o,attrs:{closable:"",type:t.getColor()},on:{close:function(e){return t.handleDelBanItem(o)}}},[t._v(t._s(e))])}),1)])]),t._v(" "),s("el-col",{attrs:{xs:24,sm:24,md:16,lg:16,xl:16}},[s("div",{staticClass:"vote-list"},t._l(t.score,function(e,o){return s("div",{key:o,staticClass:"vote-block"},[s("div",{staticClass:"progress-line"},[s("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:t.getPercentage(e)}})],1),t._v(" "),s("div",{staticClass:"vote-ticket"},[s("el-popover",{attrs:{placement:"right",title:"",width:"200",trigger:"hover",content:t.getFans(o)}},[s("el-button",{class:{winner:t.isWinner(o)},attrs:{slot:"reference",plain:"",size:"mini",type:t.getColor()},slot:"reference"},[t._v("\n                  "+t._s(o)),s("span",{staticClass:"ticket-num"},[t._v(t._s(e))]),t._v("票\n                ")])],1)],1)])}),0)])],1)],1),t._v(" "),s("voterDialog",{ref:"voterDialog",attrs:{candidateList:t.candidateList},on:{vote:t.vote}})],1)},staticRenderFns:[]};var p=s("C7Lr")(b,j,!1,function(t){s("tNZh")},null,null).exports,g=s("IHPB"),y=s.n(g),k={name:"vote",data:function(){return{memberList:["刘志斌","刘钦铸","马文涛","柯艳琴","张贵","戴敏","熊龙辉","叶国良","许璠","王晓芳","艾小姚","姜明哲","王生资","孟腾飞","徐海","刘雅琴"],noVoteList:["刘志斌","刘钦铸","马文涛"],form:{oldGoodMember:"",allMember:"",voteA:"",voteB:""},tableData:{header:["","A","B","C","票数"],body:{A:{auth:{name:"A",noVote:!1},A:0,B:0,C:0,total:""},B:{auth:{name:"B",noVote:!0},A:0,B:0,C:0,total:""},C:{auth:{name:"C",noVote:!1},A:0,B:0,C:0,total:""}}}}},computed:{oldGoodMemList:function(){return""!==this.form.oldGoodMember?this.form.oldGoodMember.split(","):[]},allMemList:function(){return""!==this.form.allMember?this.form.allMember.split(","):[]},beVoteOpt:function(){var t=this,e=[];return this.memberList.forEach(function(s){if(!t.noVoteList.includes(s)){var o={};o.label=s,o.value=s,e.push(o)}}),e},memberOpt:function(){var t=[];return this.memberList.forEach(function(e){var s={};s.label=e,s.value=e,t.push(s)}),t}},watch:{allMemList:function(){this.memberList=this.allMemList,this.transTableData(this.allMemList)},oldGoodMemList:function(){this.noVoteList=this.oldGoodMemList,this.transNoVote(this.noVoteList)}},methods:{transTableData:function(t){var e=["","票数"];e.splice.apply(e,[1,0].concat(y()(t))),this.tableData.header=e;var s={};t.forEach(function(e){s[e]={};var o={},n={name:e,noVote:!1};o.auth=n,t.forEach(function(t){o[t]=0}),o.total="",s[e]=o}),this.tableData.body=s},transNoVote:function(t){var e=this.tableData.body;this.noVoteList.forEach(function(t){e[t].auth.noVote=!0})},handleVote:function(){var t=this.form,e=t.voteA,s=t.voteB;this.tableData.body[s][e]=1,this.calcVoteNumber()},calcVoteNumber:function(){var t=this.tableData.body;u()(t).forEach(function(e){var s=0;u()(t[e]).forEach(function(o){"auth"!==o&&"total"!==o&&(s+=+t[e][o])}),t[e].total=s})},isNoVote:function(t){return!0===t.noVote},showCol:function(t){return t.name?t.name:t},isColTitle:function(t){return!!t.noVote},isColHasVolter:function(t,e){return"total"===e&&t>0}},created:function(){this.transTableData(this.memberList),this.transNoVote(this.noVoteList)}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vote-wrap-old"},[s("div",{staticClass:"show-wrap"},[s("div",{staticClass:"tb-head"},t._l(t.tableData.header,function(e,o){return s("div",{key:o,staticClass:"tb-head-col"},[t._v("\n        "+t._s(e)+"\n      ")])}),0),t._v(" "),s("div",{staticClass:"tb-body"},t._l(t.tableData.body,function(e,o){return s("div",{key:o,staticClass:"tb-row"},t._l(e,function(e,o){return s("div",{key:o,staticClass:"tb-col",class:{noVote:t.isNoVote(e),"col-title":t.isColTitle(e),"col-hasVoter":t.isColHasVolter(e,o)}},[t._v("\n          "+t._s(t.showCol(e))+"\n        ")])}),0)}),0)]),t._v(" "),s("div",{staticClass:"set-wrap"},[s("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"所有小伙伴"}},[s("el-input",{attrs:{type:"textarea"},model:{value:t.form.allMember,callback:function(e){t.$set(t.form,"allMember",e)},expression:"form.allMember"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"曾经周最佳"}},[s("el-input",{attrs:{type:"textarea"},model:{value:t.form.oldGoodMember,callback:function(e){t.$set(t.form,"oldGoodMember",e)},expression:"form.oldGoodMember"}})],1),t._v(" "),s("div",{staticClass:"vote"},[s("el-select",{attrs:{placeholder:"投票人"},model:{value:t.form.voteA,callback:function(e){t.$set(t.form,"voteA",e)},expression:"form.voteA"}},t._l(t.memberOpt,function(t,e){return s("el-option",{key:e,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),s("span",[t._v("选")]),t._v(" "),s("el-select",{attrs:{placeholder:"得票人"},model:{value:t.form.voteB,callback:function(e){t.$set(t.form,"voteB",e)},expression:"form.voteB"}},t._l(t.beVoteOpt,function(t,e){return s("el-option",{key:e,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.handleVote}},[t._v("确定")])],1)],1)],1)])},staticRenderFns:[]};var V=s("C7Lr")(k,C,!1,function(t){s("zYnN")},null,null).exports;o.default.use(r.a);var L=new r.a({routes:[{path:"/",name:"vote",component:p},{path:"/voteOld",name:"voteOld",component:V}]}),_=s("4gzT"),w=s.n(_);s("JKkS");o.default.use(w.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:L,components:{App:a},template:"<App/>"})},WTCo:function(t,e){},fSkL:function(t,e,s){var o={"./af":"1OrJ","./af.js":"1OrJ","./ar":"bHl5","./ar-dz":"qFyv","./ar-dz.js":"qFyv","./ar-kw":"OhBR","./ar-kw.js":"OhBR","./ar-ly":"3AjD","./ar-ly.js":"3AjD","./ar-ma":"sFwh","./ar-ma.js":"sFwh","./ar-sa":"gg0N","./ar-sa.js":"gg0N","./ar-tn":"lqw4","./ar-tn.js":"lqw4","./ar.js":"bHl5","./az":"xLUF","./az.js":"xLUF","./be":"NWv/","./be.js":"NWv/","./bg":"G9eV","./bg.js":"G9eV","./bm":"zaEJ","./bm.js":"zaEJ","./bn":"/icp","./bn.js":"/icp","./bo":"UyM9","./bo.js":"UyM9","./br":"G5xs","./br.js":"G5xs","./bs":"9h8A","./bs.js":"9h8A","./ca":"8ccl","./ca.js":"8ccl","./cs":"TEiJ","./cs.js":"TEiJ","./cv":"7EVA","./cv.js":"7EVA","./cy":"H6w8","./cy.js":"H6w8","./da":"MSIt","./da.js":"MSIt","./de":"Rl+D","./de-at":"30Vd","./de-at.js":"30Vd","./de-ch":"KKU8","./de-ch.js":"KKU8","./de.js":"Rl+D","./dv":"+DOJ","./dv.js":"+DOJ","./el":"8nDw","./el.js":"8nDw","./en-SG":"1hne","./en-SG.js":"1hne","./en-au":"ZsCN","./en-au.js":"ZsCN","./en-ca":"rHyc","./en-ca.js":"rHyc","./en-gb":"ehFk","./en-gb.js":"ehFk","./en-ie":"Hxoc","./en-ie.js":"Hxoc","./en-il":"oEKo","./en-il.js":"oEKo","./en-nz":"SfkL","./en-nz.js":"SfkL","./eo":"UhWX","./eo.js":"UhWX","./es":"JJW5","./es-do":"LWvi","./es-do.js":"LWvi","./es-us":"RzRn","./es-us.js":"RzRn","./es.js":"JJW5","./et":"pjM/","./et.js":"pjM/","./eu":"oBFE","./eu.js":"oBFE","./fa":"z8Fc","./fa.js":"z8Fc","./fi":"j+B7","./fi.js":"j+B7","./fo":"MuUW","./fo.js":"MuUW","./fr":"CZ8n","./fr-ca":"nDiE","./fr-ca.js":"nDiE","./fr-ch":"T2mj","./fr-ch.js":"T2mj","./fr.js":"CZ8n","./fy":"+eCN","./fy.js":"+eCN","./ga":"6KMf","./ga.js":"6KMf","./gd":"Osat","./gd.js":"Osat","./gl":"3uJi","./gl.js":"3uJi","./gom-latn":"kQyN","./gom-latn.js":"kQyN","./gu":"C85o","./gu.js":"C85o","./he":"Uaie","./he.js":"Uaie","./hi":"KLVO","./hi.js":"KLVO","./hr":"/AQ7","./hr.js":"/AQ7","./hu":"neNx","./hu.js":"neNx","./hy-am":"HL0q","./hy-am.js":"HL0q","./id":"fVYV","./id.js":"fVYV","./is":"pUHy","./is.js":"pUHy","./it":"N5fZ","./it-ch":"KCG7","./it-ch.js":"KCG7","./it.js":"N5fZ","./ja":"bVIB","./ja.js":"bVIB","./jv":"NpB+","./jv.js":"NpB+","./ka":"8RqC","./ka.js":"8RqC","./kk":"pcbE","./kk.js":"pcbE","./km":"o5og","./km.js":"o5og","./kn":"BKte","./kn.js":"BKte","./ko":"vztA","./ko.js":"vztA","./ku":"OmHn","./ku.js":"OmHn","./ky":"gQFs","./ky.js":"gQFs","./lb":"sJOA","./lb.js":"sJOA","./lo":"Wg2E","./lo.js":"Wg2E","./lt":"N5Ie","./lt.js":"N5Ie","./lv":"Z/KU","./lv.js":"Z/KU","./me":"6nQR","./me.js":"6nQR","./mi":"dZ9v","./mi.js":"dZ9v","./mk":"8ttA","./mk.js":"8ttA","./ml":"TFUT","./ml.js":"TFUT","./mn":"Rtcs","./mn.js":"Rtcs","./mr":"ZrND","./mr.js":"ZrND","./ms":"Uszi","./ms-my":"B+3a","./ms-my.js":"B+3a","./ms.js":"Uszi","./mt":"f+DN","./mt.js":"f+DN","./my":"7hhd","./my.js":"7hhd","./nb":"O+uN","./nb.js":"O+uN","./ne":"xB1H","./ne.js":"xB1H","./nl":"pyzp","./nl-be":"6XY9","./nl-be.js":"6XY9","./nl.js":"pyzp","./nn":"wWYI","./nn.js":"wWYI","./pa-in":"khMS","./pa-in.js":"khMS","./pl":"J+lf","./pl.js":"J+lf","./pt":"imZp","./pt-br":"yh7C","./pt-br.js":"yh7C","./pt.js":"imZp","./ro":"/ydL","./ro.js":"/ydL","./ru":"XA72","./ru.js":"XA72","./sd":"K+sy","./sd.js":"K+sy","./se":"HXCg","./se.js":"HXCg","./si":"JhyT","./si.js":"JhyT","./sk":"QL3+","./sk.js":"QL3+","./sl":"KbOk","./sl.js":"KbOk","./sq":"jkQm","./sq.js":"jkQm","./sr":"vGLH","./sr-cyrl":"lZcv","./sr-cyrl.js":"lZcv","./sr.js":"vGLH","./ss":"ikBz","./ss.js":"ikBz","./sv":"gbWe","./sv.js":"gbWe","./sw":"YR+a","./sw.js":"YR+a","./ta":"otVD","./ta.js":"otVD","./te":"3YuF","./te.js":"3YuF","./tet":"IJME","./tet.js":"IJME","./tg":"iKfg","./tg.js":"iKfg","./th":"v87T","./th.js":"v87T","./tl-ph":"otiP","./tl-ph.js":"otiP","./tlh":"L/GK","./tlh.js":"L/GK","./tr":"phcV","./tr.js":"phcV","./tzl":"rgrh","./tzl.js":"rgrh","./tzm":"1pHS","./tzm-latn":"q7e0","./tzm-latn.js":"q7e0","./tzm.js":"1pHS","./ug-cn":"tsGA","./ug-cn.js":"tsGA","./uk":"01SB","./uk.js":"01SB","./ur":"jayG","./ur.js":"jayG","./uz":"k3sX","./uz-latn":"nmSA","./uz-latn.js":"nmSA","./uz.js":"k3sX","./vi":"KTvP","./vi.js":"KTvP","./x-pseudo":"dccK","./x-pseudo.js":"dccK","./yo":"IAhR","./yo.js":"IAhR","./zh-cn":"5Spc","./zh-cn.js":"5Spc","./zh-hk":"ECSc","./zh-hk.js":"ECSc","./zh-tw":"hH/4","./zh-tw.js":"hH/4"};function n(t){return s(a(t))}function a(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(o)},n.resolve=a,t.exports=n,n.id="fSkL"},tNZh:function(t,e){},zYnN:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.df2da72c8f54c5af111d.js.map