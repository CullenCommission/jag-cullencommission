(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),s=a.n(i),l=a(18),o=a(3),c=a(29),h="font-weight: bold; color: orange",p="font-weight: bold; color: green";function m(e,t){console.log("%c"+e,t)}var u={isInit:!1,isDev:!1,themes:null,witnesses:null,hearings:null,displayHearing:!1,selectedHearing:null};function d(e){var t;return void 0===e.themes?(m("NO THEMES",h),t=new Map):t=new Map(e.themes),t=new Map(Object(c.a)(t.entries()).sort((function(e,t){return e[1].localeCompare(t[1])})))}function g(e){var t;return void 0===e.witnesses?(m("NO WITNESSES",h),t=new Map):t=new Map(e.witnesses),t=new Map(Object(c.a)(t.entries()).sort((function(e,t){return e[1].lastName.localeCompare(t[1].lastName)})))}var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"INIT_APP":if(a.themes=d(t.hearingsData),a.witnesses=g(t.hearingsData),void 0===t.hearingsData.hearings)m("NO HEARINGS SCHEDULED",h),a.hearings=new Map;else{var n=new Map(t.hearingsData.hearings);a.hearings=new Map;var r=!0,i=!1,s=void 0;try{for(var l,o=n.entries()[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){var c=l.value,E=c[1];E.themes=new Map(E.themes),a.hearings.set(c[0],E)}}catch(v){i=!0,s=v}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}}a.isInit=!0,a.isDev=t.isDev,m("EDITOR INITIALIZED",p);break;case"SELECT_HEARING":a.hearings.has(t.hearingId)?(a.selectedHearing=a.hearings.get(t.hearingId),m("SELECT HEARING",p)):m("HEARING NOT FOUND",h);break;case"DESELECT_HEARING":a.selectedHearing=null,m("DESELECTED HEARING",p);break;case"SHOW_HEARING":a.displayHearing=!0;break;case"HIDE_HEARING":a.displayHearing=!1}return a},v=a(4),f=a(5),y=a(7),N=a(6),b=a(8),H=a(13),w=(a(57),a(19)),T=a.n(w),S=a(28);function D(e){return{type:"SELECT_HEARING",hearingId:e}}var k=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"handleDayClick",value:function(){var e=this;null===this.props.selectedHearing?(this.props.selectHearing(this.props.hearing.timeStamp),this.props.showHearing()):this.props.selectedHearing.timeStamp===this.props.hearing.timeStamp?(this.props.hideHearing(),setTimeout((function(){e.props.deSelectHearing()}),600)):(this.props.hideHearing(),setTimeout((function(){e.props.selectHearing(e.props.hearing.timeStamp),e.props.showHearing()}),750))}},{key:"render",value:function(){if(this.props.clearDay)return r.a.createElement("div",{className:"ClearDay"});var e="",t=new Date;return e="EXHIBITS"===this.props.calendarType||"CALENDAR"===this.props.calendarType?"DayNoSelection":"Day","EXHIBITS"!==this.props.calendarType&&this.props.selected?e+=" SelectedDay":null!==this.props.hearing?this.props.hearing.isCancelled?e+=" CancelledHearing":e+=" EvidentiaryHearing":this.props.date.getFullYear()===t.getFullYear()&&this.props.date.getMonth()===t.getMonth()&&this.props.date.getDate()===t.getDate()&&"EDITOR"===this.props.calendarType&&(e+=" CurrentDay"),r.a.createElement("div",{className:e,onClick:this.handleDayClick.bind(this)},this.props.date.getDate())}}]),t}(r.a.Component),I=Object(o.b)((function(e,t){var a=null;return void 0!==t.date&&e.hearings.has(t.date.getTime())&&(a=e.hearings.get(t.date.getTime())),{hearing:a,displayHearing:e.displayHearing,selectedHearing:e.selectedHearing}}),(function(e){return{selectHearing:function(t){e(D(t))},deSelectHearing:function(){e({type:"DESELECT_HEARING"})},showHearing:function(){e({type:"SHOW_HEARING"})},hideHearing:function(){e({type:"HIDE_HEARING"})}}}))(k),O=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=[],t=this.props.date.getDay();if(0!==t)for(var a=0;a<t;a++)e.push(r.a.createElement(I,{key:a,clearDay:!0}));for(var n=this.props.date.format("t"),i=1;i<=n;i++){var s=new Date(this.props.date.getFullYear(),this.props.date.getMonth(),i);e.push(r.a.createElement(I,{key:s.getTime(),date:s,calendarType:this.props.calendarType}))}var l="Month",o=new Date;return this.props.date.getFullYear()===o.getFullYear()&&this.props.date.getMonth()===o.getMonth()&&(l+=" CurrentMonth"),r.a.createElement("div",{className:l},r.a.createElement("div",null,r.a.createElement("h2",{className:"MonthName"},this.props.date.format("F")," ",r.a.createElement("span",{className:"YearTitle"},this.props.date.getFullYear()))),r.a.createElement("div",{className:"DaysOfMonth"},r.a.createElement("p",{className:"WeekNames"},"Sun"),r.a.createElement("p",{className:"WeekNames"},"Mon"),r.a.createElement("p",{className:"WeekNames"},"Tue"),r.a.createElement("p",{className:"WeekNames"},"Wed"),r.a.createElement("p",{className:"WeekNames"},"Thu"),r.a.createElement("p",{className:"WeekNames"},"Fri"),r.a.createElement("p",{className:"WeekNames"},"Sat"),e))}}]),t}(r.a.Component),j=Object(o.b)((function(e){return{}}),(function(e){return{}}))(O),M=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=[],t=!0,a=!1,n=void 0;try{for(var i,s=this.props.hearing.themes.get(this.props.themeId)[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var l=i.value,o=this.props.witnesses.get(l).prefix,c=this.props.witnesses.get(l).firstName,h=this.props.witnesses.get(l).lastName,p=this.props.witnesses.get(l).title,m="";""!==o&&(m=o+" "),m+=c+" "+h;var u="";""!==p&&(u=", ("+p+")"),e.push(r.a.createElement("p",{key:m+u,className:"WitnessListNames"},r.a.createElement("strong",null,m),u))}}catch(d){a=!0,n=d}finally{try{t||null==s.return||s.return()}finally{if(a)throw n}}return r.a.createElement("div",{className:"HearingTheme"},r.a.createElement("p",{className:"HearingThemeName"},this.props.themes.get(this.props.themeId)),e)}}]),t}(r.a.Component),C=Object(o.b)((function(e){return{hearing:e.selectedHearing,themes:e.themes,witnesses:e.witnesses}}),(function(e){return{}}))(M),W=a(60),A=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).state={displayVideo:!1,videoToWatch:""},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"handleWatchVideoClick",value:function(e){var t=this;this.state.videoToWatch===e.currentTarget.dataset.watch?(this.setState({displayVideo:!1}),setTimeout((function(){t.setState({videoToWatch:""})}),500)):this.setState({displayVideo:!0,videoToWatch:e.currentTarget.dataset.watch})}},{key:"render",value:function(){var e="",t=[];if(null!==this.props.hearing){if(""!==this.props.hearing.notifications&&t.push(r.a.createElement("div",{key:"Notifications"},r.a.createElement("h2",{className:"HearingFormSectionTitle"},"Notifications"),r.a.createElement("div",{className:"MarkdownPreview"},r.a.createElement(W,{source:this.props.hearing.notifications})))),this.props.hearing.isCancelled)return e=new Date(this.props.hearing.timeStamp).format("F j, Y"),r.a.createElement("div",{className:"SelectedHearing"},r.a.createElement("h2",{className:"HearingFormSectionTitle"},e," ",r.a.createElement("span",{style:{color:"red",fontWeight:"400"}},"Hearing Cancelled")),t);var a,n,i,s,l,o=[],c=[];if(e=new Date(this.props.hearing.timeStamp).format("F j, Y"),a=this.props.hearing.buildingRoom,n=this.props.hearing.street,i=this.props.hearing.city,s=this.props.hearing.morningSession,l=this.props.hearing.afternoonSession,0===this.props.hearing.themes.size)o.push(r.a.createElement("p",{key:"NoThemesScheduled"},"There are no themes scheduled for this hearing."));else{var h=!0,p=!1,m=void 0;try{for(var u,d=this.props.hearing.themes.keys()[Symbol.iterator]();!(h=(u=d.next()).done);h=!0){var g=u.value;o.push(r.a.createElement(C,{key:g,themeId:g}))}}catch(G){p=!0,m=G}finally{try{h||null==d.return||d.return()}finally{if(p)throw m}}}if(0===this.props.hearing.exhibits.length)c.push(r.a.createElement("p",{key:"NoExhibitsEntered"},"There are no exhibits for this hearing."));else{var E=!0,v=!1,f=void 0;try{for(var y,N=this.props.hearing.exhibits[Symbol.iterator]();!(E=(y=N.next()).done);E=!0){var b=y.value;this.props.isDev?c.push(r.a.createElement("p",{key:b},r.a.createElement("a",{href:"/dataDev/exhibits/"+b},b))):c.push(r.a.createElement("p",{key:b},r.a.createElement("a",{href:"/data/exhibits/"+b},b)))}}catch(G){v=!0,f=G}finally{try{E||null==N.return||N.return()}finally{if(v)throw f}}}var H=[];this.props.hearing.timeStamp===new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()).getTime()&&(H=r.a.createElement("h3",{key:"WebcastLink",className:"HearingFormSectionTitle",style:{textAlign:"center"}},r.a.createElement("a",{href:"/webcast-live/",target:"_blank"},"View Live Webcast of this Hearing")));var w="LocationTimeInfo",S="";!1===this.props.hearing.defaultTime&&(w+=" NoneDefault",S=r.a.createElement("span",{key:"NoneDefaultTimeMsg"},r.a.createElement("br",null),r.a.createElement("br",null),"Notice change in time."));var D="LocationTimeInfo",k="";!1===this.props.hearing.defaultAddress&&(D+=" NoneDefault",k=r.a.createElement("span",{key:"NoneDefaultLocationMsg"},r.a.createElement("br",null),r.a.createElement("br",null),"Notice change in location."));var I=[],O="VideoListSection";if(void 0!==this.props.hearing.videos&&this.props.hearing.videos.length>=0){var j=0;O="";var M=!0,A=!1,L=void 0;try{for(var R,_=this.props.hearing.videos[Symbol.iterator]();!(M=(R=_.next()).done);M=!0){var F=R.value;I.push(r.a.createElement("div",{key:"VideoButton"+j,className:"VideoButtonLayout"},r.a.createElement("div",{className:"Button RegularButton ButtonMarginLeft ButtonMarginRight","data-watch":F,onClick:this.handleWatchVideoClick.bind(this)},"Watch Video ",j+1))),j++}}catch(G){A=!0,L=G}finally{try{M||null==_.return||_.return()}finally{if(A)throw L}}}var x=0,V=r.a.createElement("p",{key:"Default"});return this.state.displayVideo&&(x="auto"),""!==this.state.videoToWatch&&(V=r.a.createElement("div",{key:"vimeoplayer",style:{padding:"56.25% 0 0 0",position:"relative"}},r.a.createElement("iframe",{src:"https://player.vimeo.com/video/"+this.state.videoToWatch,frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))),r.a.createElement("div",{className:"SelectedHearing"},r.a.createElement("h2",{className:"HearingFormSectionTitle"},e),H,r.a.createElement("div",{className:"HearingInfo"},r.a.createElement("p",{className:"CalendarWarning"},"Those attending must go through a security check to be allowed in the hearing room. Please allow time for this."),r.a.createElement("p",{className:"CalendarWarning"},"No food or drinks other than water is allowed in the hearing room. There is a cloak room for coats, umbrellas etc."),r.a.createElement("p",{style:{marginTop:"20px"},className:"LocationTimeTitle"},"Address:"),r.a.createElement("p",{className:D},a,r.a.createElement("br",null),n,r.a.createElement("br",null),i,k),r.a.createElement("p",{className:"LocationTimeTitle"},"Session Times:"),r.a.createElement("p",{className:w},"Morning Session: ",s,r.a.createElement("br",null),"Afternoon Session: ",l,S),r.a.createElement("div",{className:O},r.a.createElement("h2",{className:"HearingFormSectionTitle"},"Video List"),r.a.createElement("div",{className:"VideoListContainer"},I)),r.a.createElement(T.a,{duration:500,height:x},V),t,r.a.createElement("h2",{className:"HearingFormSectionTitle"},"Themes"),o,r.a.createElement("h2",{className:"HearingFormSectionTitle"},"Exhibits"),c))}return r.a.createElement("div",{className:"SelectedHearing"})}}]),t}(r.a.Component),L=Object(o.b)((function(e){return{hearing:e.selectedHearing,isDev:e.isDev}}),(function(e){return{}}))(A),R=a(140),_=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"getUrlParameter",value:function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}},{key:"render",value:function(){var e=this;if(this.props.isInit){var t=0;this.props.displayHearing&&(t="auto");var a=[],n=0,i=!0,s=!1,l=void 0;try{for(var o,c=this.props.hearings.keys()[Symbol.iterator]();!(i=(o=c.next()).done);i=!0){var h=o.value;n=h>n?h:n}}catch(b){s=!0,l=b}finally{try{i||null==c.return||c.return()}finally{if(s)throw l}}var p=new Date(2020,0,1,0,0,0,0);p.setDate(1);var m=new Date(n),u=12*(m.getFullYear()-p.getFullYear());u-=p.getMonth()+1,u=((u+=m.getMonth()+2)<=3?3:u)+1;for(var d=S.isMobile?1:3,g=S.isMobile?u-d-2:u-d-1,E=0;E<u;E++){var v=new Date(p);v.setMonth(p.getMonth()+E),a.push(r.a.createElement(H.d,{index:E,key:v.getTime()},r.a.createElement(j,{date:v,calendarType:"CALENDAR"})))}var f="NoHearing";return null!==this.props.selectedHearing&&(f=this.props.selectedHearing.timeStamp),r.a.createElement("div",{id:"App"},r.a.createElement("div",{className:"HearingsCalendarApp"},r.a.createElement(H.c,{naturalSlideWidth:287,naturalSlideHeight:302,totalSlides:u,visibleSlides:d,currentSlide:g},r.a.createElement(H.e,null,a),r.a.createElement(H.a,null,r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement(H.b,null,r.a.createElement("i",{className:"fas fa-chevron-right"})))),r.a.createElement(T.a,{duration:500,height:t},r.a.createElement(L,{key:f})))}var y=this.getUrlParameter("dev"),N="/data/hearings.json";return"t"===y&&(N="/dataDev/hearings.json"),R.get(N).then((function(t){e.props.initApp(t.data,y);var a=e.getUrlParameter("h");if(""!==a){var n=parseInt(a);console.log(n),!1===isNaN(n)&&(e.props.selectHearing(n),e.props.showHearing())}})),r.a.createElement("div",{id:"App"})}}]),t}(r.a.Component),F=Object(o.b)((function(e){return{isInit:e.isInit,appMode:e.appMode,hearings:e.hearings,selectedHearing:e.selectedHearing,displayHearing:e.displayHearing}}),(function(e){return{initApp:function(t,a){e(function(e,t){return{type:"INIT_APP",hearingsData:e,isDev:t}}(t,a))},selectHearing:function(t){e(D(t))},showHearing:function(){e({type:"SHOW_HEARING"})}}}))(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=Object(l.b)(E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(o.a,{store:x},r.a.createElement(F,null)),document.getElementById("root")),document.getElementById("IEMessage").style.display="none","serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},47:function(e,t,a){e.exports=a(158)}},[[47,1,2]]]);
//# sourceMappingURL=main.81461061.chunk.js.map