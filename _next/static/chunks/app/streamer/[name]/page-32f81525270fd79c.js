(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[187],{7721:function(e,a,t){Promise.resolve().then(t.bind(t,7603))},7603:function(e,a,t){"use strict";t.d(a,{default:function(){return u}});var n=t(7437),s=t(2265),m=t(4326);let c=[{blue:{top:{name:"도현",champ:"크산테"},jung:{name:"킴성태",champ:"신 짜오"},mid:{name:"김민교",champ:"제이스"},bot:{name:"임아니",champ:"카이사"},sup:{name:"나옹이빵",champ:"라칸"}},red:{top:{name:"해기",champ:"암베사"},jung:{name:"수야",champ:"세주아니"},mid:{name:"민찬기",champ:"르블랑"},bot:{name:"맛종욱",champ:"이즈리얼"},sup:{name:"쿠우",champ:"레나타 글라스크"}},win:"red",date:"2025-02-17 15:00",match_tag:"CK",match_id:"1",submitter:"admin",visible:"true"},{blue:{top:{name:"해기",champ:"모데카이저"},jung:{name:"킴성태",champ:"녹턴"},mid:{name:"김민교",champ:"오로라"},bot:{name:"맛종욱",champ:"애쉬"},sup:{name:"나옹이빵",champ:"세라핀"}},red:{top:{name:"도현",champ:"잭스"},jung:{name:"수야",champ:"브랜드"},mid:{name:"민찬기",champ:"갈리오"},bot:{name:"임아니",champ:"바루스"},sup:{name:"쿠우",champ:"룰루"}},win:"blue",date:"2025-02-17 16:00",match_tag:"CK",match_id:"2",submitter:"admin",visible:"true"}];var l=t(9376),i=t(3145),d=t(6764);let r=async()=>{let[e,a]=await Promise.all([fetch("https://ddragon.leagueoflegends.com/cdn/15.4.1/data/en_US/champion.json"),fetch("https://ddragon.leagueoflegends.com/cdn/15.4.1/data/ko_KR/champion.json")]),t=await e.json(),n=await a.json(),s={};for(let e in n.data){let a=n.data[e].name,m=t.data[e].id;s[a]=m}return s},o=(e,a)=>{let t=a[e]||e;return"https://ddragon.leagueoflegends.com/cdn/15.4.1/img/champion/".concat(t,".png")};function u(e){let{params:a}=e,t=decodeURIComponent(a.name),u=m.f.find(e=>e.name===t);u||(0,l.notFound)();let p=c.filter(e=>Object.values(e.blue).some(e=>e.name===u.name)||Object.values(e.red).some(e=>e.name===u.name)),[h,x]=(0,s.useState)({}),[f,g]=(0,s.useState)(null);(0,s.useEffect)(()=>{(async()=>{x(await r()),g(await (0,d.I)(u.puuid,u.name))})()},[u.puuid,u.name]);let b=p.sort((e,a)=>{let t=new Date(e.date);return new Date(a.date).getTime()-t.getTime()});return(0,n.jsxs)("div",{className:"max-w-4xl mx-auto p-4",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-4 p-4 bg-white shadow-lg rounded-lg mb-6",style:{border:"1px solid #e0e0e0"},children:[(0,n.jsx)(i.default,{src:u.image,alt:u.name,width:80,height:80,className:"rounded-full border"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"text-2xl font-bold",children:u.name}),f&&(0,n.jsxs)("div",{className:"mt-2 text-sm text-gray-600",children:[(0,n.jsx)("a",{href:"https://www.deeplol.gg/summoner/kr/".concat(encodeURIComponent(f.summonerName),"-").concat(encodeURIComponent(f.tagLine)),target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:(0,n.jsxs)("p",{children:[f.summonerName," #",f.tagLine]})}),(0,n.jsxs)("p",{children:[f.tier," ",f.rank]})]})]})]}),(0,n.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"최근 경기"}),(0,n.jsx)("div",{className:"space-y-4",children:b.map(e=>{let a=Object.values(e.blue).some(e=>e.name===u.name),t=Object.values(e.red).some(e=>e.name===u.name),s=a?"blue"===e.win:!!t&&"red"===e.win;return(0,n.jsxs)("div",{className:"flex py-2 px-4 shadow-lg rounded-lg bg-white mb-4",style:{maxHeight:"250px",border:"1px solid #e0e0e0"},children:[(0,n.jsxs)("div",{className:"flex flex-col justify-start flex-1 pr-4",children:[(0,n.jsx)("div",{className:"mb-2 text-xl font-semibold text-gray-700",children:e.match_tag}),(0,n.jsx)("div",{className:"mb-1 text-xs text-gray-500",children:e.date}),(0,n.jsx)("div",{className:"mb-1",children:(0,n.jsx)("span",{className:"font-bold text-xl ".concat(s?"text-blue-600":"text-red-600"),style:{fontSize:"1.5rem"},children:s?"승리":"패배"})})]}),(0,n.jsxs)("div",{className:"flex space-x-4 w-1/2",children:[(0,n.jsx)("div",{className:"p-2 rounded bg-blue-200 w-1/2",children:Object.values(e.blue).map((e,a)=>(0,n.jsxs)("div",{className:"flex items-center space-x-2 ".concat(e.name===u.name?"font-bold":""," text-xs"),children:[h&&(0,n.jsx)(i.default,{src:o(e.champ,h),alt:e.champ,width:25,height:25,className:"rounded"}),(0,n.jsx)("span",{children:e.name})]},a))}),(0,n.jsx)("div",{className:"p-2 rounded bg-red-200 w-1/2",children:Object.values(e.red).map((e,a)=>(0,n.jsxs)("div",{className:"flex items-center space-x-2 ".concat(e.name===u.name?"font-bold":""," text-xs"),children:[h&&(0,n.jsx)(i.default,{src:o(e.champ,h),alt:e.champ,width:25,height:25,className:"rounded"}),(0,n.jsx)("span",{children:e.name})]},a))})]})]},e.match_id)})})]})}},4326:function(e,a,t){"use strict";t.d(a,{f:function(){return n}});let n=[{name:"김민교",puuid:"nypnixd4SwO1UceT57ERnOKIrebbwHUMFRtpNbNq89ug7cQnTDijB2p7y8gHUa2dQGE3e3zJJqZsgA",image:"https://profile.img.sooplive.co.kr/LOGO/ph/phonics1/phonics1.jpg"},{name:"안녕수야",puuid:"78xCIXAwLOqfKlGaQFGSjjm1PzPzrLrUC_-5IKgVilEqPkgBN4llg4D0EMr8Jzt3DY3TOjlU1tm9yA",image:"https://profile.img.sooplive.co.kr/LOGO/tn/tntntn13/tntntn13.jpg"}]},6764:function(e,a,t){"use strict";async function n(e,a){let t="https://riot-proxy.dongsikfamily.workers.dev?puuid=".concat(e,"&streamerName=").concat(encodeURIComponent(a)),n=await fetch(t);if(!n.ok)throw Error("Failed to fetch streamer data");return await n.json()}t.d(a,{I:function(){return n}})},5523:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"RouterContext",{enumerable:!0,get:function(){return n}});let n=t(917)._(t(2265)).default.createContext(null)}},function(e){e.O(0,[785,971,117,744],function(){return e(e.s=7721)}),_N_E=e.O()}]);