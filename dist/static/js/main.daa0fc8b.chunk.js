(this.webpackJsonpsocradio_web_react=this.webpackJsonpsocradio_web_react||[]).push([[0],{10:function(e,t,a){e.exports={"music-player-container":"small_music-player-container__v6Jyk","music-player":"small_music-player__2dI1g",min:"small_min__2fwSS","artist-name":"small_artist-name__1t247","song-title":"small_song-title__25zBC","album-title":"small_album-title__rUFDi","album-container":"small_album-container__2boBs","album-box":"small_album-box__yABfT","album-art":"small_album-art__34-6y","song-data":"small_song-data__1nGa_",vinyl:"small_vinyl__3FmlL","music-player-controls":"small_music-player-controls__2aJCa","control-play":"small_control-play__297sV","is-playing":"small_is-playing__2ireB","control-forwards":"small_control-forwards__Ltjip","control-back":"small_control-back__3r1M8"}},117:function(e,t){},120:function(e,t,a){},143:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n,s=a(70),r=a.n(s),c=a(28),i=a(4),l=a(2),o=a(148),u=a(149),p=a(150),d=a(31),j=a(29),m=a.n(j),b=function(){n=m()("/api"),console.log("Connecting socket...")},_=function(){console.log("Disconnecting socket..."),n&&n.disconnect()},y=function(e,t){n.on(e,t)},g=a(16),O=a(5),h=a.n(O),x=a(6),f=a.n(x),v=(a(120),a(8)),N=a(11),w=a(12),k=a(13),S=a(15),C=a(14),B=a(18),I=a(24),q=a(1),G=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){return Object(q.jsx)("div",{className:"config-list",children:Object(q.jsx)("div",{className:"config-row",onClick:this.props.onHandleBG,children:Object(q.jsx)("div",{className:"config-icon",children:Object(q.jsx)(I.b,{id:"swapBG",style:{height:"30px",width:"30px"}})})})})}}]),a}(l.Component),A=a(23);function E(e){var t=e.station,a=Object(l.useState)(!1),n=Object(i.a)(a,2),s=n[0],r=n[1],o=Object(l.useState)([]),u=Object(i.a)(o,2),p=u[0],d=u[1],j=Object(A.a)("/api/meta"),m=Object(i.a)(j,1)[0],b=m.data,_=m.error,g=Object(l.useState)({}),O=Object(i.a)(g,2),h=O[0],x=O[1];return Object(l.useEffect)((function(){b&&d(Object.keys(b))}),[b]),Object(l.useEffect)((function(){p.length>0&&p.forEach((function(e){return y(e,(function(e){var t=h;h[e.source]=e,x(t)}))}))}),[p]),_&&console.log(_),Object(q.jsxs)("div",{className:"config-list",children:[Object(q.jsx)("div",{className:"config-row",children:Object(q.jsx)("div",{className:"config-icon",onClick:function(){return r(!s)},children:s?Object(q.jsx)(I.a,{style:{height:"30px",width:"30px"}}):Object(q.jsx)(I.c,{style:{height:"30px",width:"30px"}})})}),s?p.filter((function(e){return e!==t})).map((function(e){return Object(q.jsxs)("div",{className:"config-row",children:[h[e]&&Object(q.jsxs)("div",{className:"config-label",children:["Now Playing: ","".concat(h[e].artist," - ").concat(h[e].title)]}),Object(q.jsx)("img",{className:"config-img",alt:"station logo",src:"/images/station/station_".concat(e,".png"),onClick:function(){return Object(c.navigate)("/".concat(e))}})]},e)})):null]})}a(143);var D=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){return Object(q.jsxs)("div",{className:"config",children:[Object(q.jsx)(E,{station:this.props.station,onStation:this.props.handleStation}),Object(q.jsx)(G,{onHandleBG:this.props.handleBG})]})}}]),a}(l.Component),z=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){var e=B[this.props.station][this.props.index]||(this.props.index<0?B[this.props.station][B[this.props.station].length-1]:B[this.props.station][0]);switch(e.endsWith(".mp4")?"video":"image"){case"video":return Object(q.jsx)("video",{className:f.a.BG,autoPlay:!0,muted:!0,loop:!0,id:this.props.id,children:Object(q.jsx)("source",{src:e,type:"video/mp4"})});default:return Object(q.jsx)("div",{className:f.a.BG,id:this.props.id,style:{backgroundImage:'url("'.concat(e,'")')}})}}}]),a}(l.Component),M=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return e=t.call.apply(t,[this].concat(s)),Object(N.a)(Object(v.a)(e),"state",{anim:"stale",bgIndex:Math.floor(Math.random()*B[e.props.station].length)}),Object(N.a)(Object(v.a)(e),"updateBG",(function(){"running"!==e.state.anim&&e.setState({anim:"running"},(function(){e.bgdrag.play()}))})),e}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.bgdrag=Object(g.a)({targets:"#".concat(f.a.newBG),duration:1100,translateX:"100%",easing:"spring(1, 80, 10, 0)",autoplay:!1,complete:function(t){var a=e.state.bgIndex;a+1>=B[e.props.station].length?a=0:a++,e.setState({anim:"stale",bgIndex:a},(function(){t.reset()}))}})}},{key:"render",value:function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(D,{station:this.props.station,handleBG:this.updateBG.bind(this)}),Object(q.jsx)(z,{id:f.a.currentBG,station:this.props.station,index:this.state.bgIndex}),Object(q.jsx)(z,{id:f.a.newBG,station:this.props.station,index:this.state.bgIndex+1})]})}}]),a}(l.Component),T=["Riku's radio extravaganza","Kobayashi's homemade playlist","Ayanami's Anime Socks","Ritsu's tightly locked treasure"];function P(e){var t=e.station,a=Object(l.useRef)(null),n=function(){var e=Object(l.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(l.useState)(!1),r=Object(i.a)(s,2),c=r[0],o=r[1],u=Object(l.useState)(!0),p=Object(i.a)(u,2),d=p[0],j=p[1];return{audio:a,ref:Object(l.useCallback)((function(e){null!==e&&(e.onplay=function(){return o(!0)},e.onpause=function(){return o(!1)},e.onloadstart=function(){return j(!0)},e.waiting=function(){return j(!0)},e.onloadeddata=function(){return j(!1)},e.canplay=function(){return j(!1)},e.playing=function(){return j(!1)},n(e))}),[]),playing:c,loading:d}}(),s=n.audio,r=n.ref,c=n.playing,j=Object(l.useState)(.5),m=Object(i.a)(j,2),O=m[0],x=m[1],v=Object(l.useState)({album:"Press the Play button to start the radio",title:T[Math.floor(Math.random()*T.length)]}),N=Object(i.a)(v,2),w=N[0],k=N[1];function S(){c?s.pause():(s.load(),s.play())}return Object(l.useEffect)((function(){return s&&(s.src="https://play.squid-radio.net/".concat(t),s.load(),c&&s.play()),b(),y(t,(function(e){return k(e)})),_}),[t]),Object(l.useEffect)((function(){var e=Object(g.a)({targets:".".concat(f.a.record," img"),rotate:"1turn",loop:!0,duration:1500,easing:"linear",autoplay:!1});a.current={begin:Object(g.a)({targets:".".concat(f.a.record," img"),rotate:"180deg",duration:2e3,easing:"easeInCubic",autoplay:!1,complete:e.play}),end:Object(g.a)({begin:e.pause,targets:".".concat(f.a.record," img"),rotate:"360deg",duration:2e3,easing:"easeOutBack",autoplay:!1})}}),[]),Object(l.useEffect)((function(){c?a.current.begin.play():a.current.end.play()}),[c]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("audio",{ref:r,preload:"none",src:"https://play.squid-radio.net/".concat(t),volume:O}),Object(q.jsx)(M,{station:t}),Object(q.jsx)(o.a,{className:"d-flex",children:Object(q.jsxs)("div",{className:h()(f.a.radio,"my-auto mx-md-auto"),children:[Object(q.jsx)(u.a,{children:Object(q.jsxs)(p.a,{xs:12,className:h()(f.a.images,"d-flex p-0"),children:[Object(q.jsx)("div",{className:f.a.cover,children:Object(q.jsx)("img",{onError:function(e){e.target.src="images/logo/soc_".concat(t,".png")},src:"covers/".concat(w.album,".jpg"),alt:""})}),Object(q.jsx)("div",{className:h()("flex-grow-1",f.a.record),children:Object(q.jsx)("img",{src:"/images/record/record_".concat(t,".png"),alt:""})})]})}),Object(q.jsx)(u.a,{children:Object(q.jsx)(p.a,{xs:12,className:f.a.songData,children:Object(q.jsxs)(u.a,{children:[Object(q.jsxs)(p.a,{children:[Object(q.jsx)("span",{className:"text-truncate",id:"premidTitle",children:w.title}),Object(q.jsx)("p",{className:"text-truncate",id:"premidArtist",children:w.artist}),Object(q.jsx)("p",{className:"text-truncate",id:"premidAlbum",children:w.album})]}),Object(q.jsx)("div",{className:f.a.cardPlay,children:Object(q.jsx)("i",{className:"card-icon",id:"playPauseIcon",children:0===O?Object(q.jsx)(d.c,{onClick:S}):c?Object(q.jsx)(d.a,{onClick:S}):Object(q.jsx)(d.b,{onClick:S})})}),Object(q.jsx)(p.a,{xs:"auto",className:"d-flex",children:Object(q.jsx)(R,{volume:O,setVolume:function(e){s.volume=e,x(e)}})})]})})})]})})]})}function R(e){var t=e.volume,a=e.setVolume,n=Object(l.useState)(!1),s=Object(i.a)(n,2),r=s[0],c=s[1],o=Object(l.useRef)(null);function u(e){var t=(e-o.current.getBoundingClientRect().left)/o.current.getBoundingClientRect().width;t>1&&(t=1),t<0&&(t=0),a(t)}function p(e){c(!1),u(e.pageX)}function d(e){u(e.pageX)}return Object(l.useEffect)((function(){return r&&(window.addEventListener("mouseup",p),window.addEventListener("mousemove",d)),function(){window.removeEventListener("mouseup",p),window.removeEventListener("mousemove",d)}}),[r]),Object(q.jsx)("div",{className:"align-self-center",children:Object(q.jsx)("div",{className:"switch",children:Object(q.jsx)("div",{className:f.a.volume,title:"Set volume",ref:o,onMouseDown:function(e){c(!0),u(e.pageX)},children:Object(q.jsx)("span",{style:{width:"".concat(100*t,"%")},className:f.a.bar})})})})}var V=a(10),L=a.n(V),H=a(72),J=a.n(H),W=["Riku's radio extravaganza","Kobayashi's homemade playlist","Ayanami's Anime Socks","Ritsu's tightly locked treasure"];function X(e){if("mediaSession"in navigator){var t="https://squid-radio.net/covers/".concat(e.album,".jpg");navigator.mediaSession.metadata=new MediaMetadata({title:e.title,artist:e.artist,album:e.album,artwork:[{src:t,sizes:"96x96",type:"image/jpg"},{src:t,sizes:"128x128",type:"image/jpg"},{src:t,sizes:"192x192",type:"image/jpg"},{src:t,sizes:"256x256",type:"image/jpg"},{src:t,sizes:"384x384",type:"image/jpg"},{src:t,sizes:"512x512",type:"image/jpg"}]})}}var F=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return e=t.call.apply(t,[this].concat(s)),Object(N.a)(Object(v.a)(e),"state",{songData:{album:"Press the Play button to start the radio",title:W[Math.floor(Math.random()*W.length)]},currentArt:"/images/logo/soc_".concat(e.props.station,".png"),min:!1,maxWidth:800}),Object(N.a)(Object(v.a)(e),"minTimeout",null),Object(N.a)(Object(v.a)(e),"startSocket",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e.socket=m()("/api"),e.socket.on(e.props.station,e.handleSong),e.socket.emit("station",{station:e.props.station}),e.startAudio(),t&&t()})),Object(N.a)(Object(v.a)(e),"startAudio",(function(){e.audio=new Audio("https://play.squid-radio.net/".concat(e.props.station,"?cache_ts=").concat((new Date).getTime())),e.audio.onpause=function(){e.setState({playing:!1}),e.spin.pause(),Object(g.a)({targets:".vinyl",rotate:"180deg",duration:2e3,easing:"easeOutBack",autoplay:!0})},e.audio.onplay=function(){if(!e.state.started){X(e.state.songData);var t="https://squid-radio.net/covers/".concat(e.state.songData.album,".jpg");setTimeout((function(){e.setState({currentArt:t})}),1500)}e.setState({started:!0}),e.setState({playing:!0})},e.audio.onended=function(){console.log("Stream Ended. Restarting"),e.startAudio()},e.audio.loop=!1,e.audio.play(),e.audio.volume=1})),Object(N.a)(Object(v.a)(e),"handlePlay",(function(){e.state.playing?e.audio.pause():(e.audio.load(),e.audio.play(),e.audio.volume=1)})),Object(N.a)(Object(v.a)(e),"handleSong",(function(t){if(console.log(t),null!==t&&e.state.started){e.setState({songData:t,min:!1}),X(t);var a="https://squid-radio.net/covers/".concat(t.album,".jpg");setTimeout((function(){e.setState({currentArt:a})}),1500),clearTimeout(e.minTimeout),e.cycleHide()}})),e}return Object(k.a)(a,[{key:"cycleHide",value:function(){var e=this;clearTimeout(this.minTimeout),this.minTimeout=setTimeout((function(){return e.setState({min:!e.state.min},e.cycleHide)}),this.state.min?2e4:5e4)}},{key:"componentDidMount",value:function(){var e=this;this.spin=Object(g.a)({targets:".".concat(L.a.vinyl),rotate:"1turn",loop:!0,duration:1500,easing:"linear",autoplay:!0}),this.startSocket(),setInterval((function(){return e.setState({maxWidth:J()(".".concat(L.a["music-player"])).outerWidth()})}),1e3)}},{key:"render",value:function(){return Object(q.jsx)(o.a,{fluid:!0,children:Object(q.jsxs)("div",{className:K("music-player-container",this.state.min?"min":""),children:[Object(q.jsx)("div",{className:K("music-player"),children:Object(q.jsxs)("div",{className:L.a["song-data"],children:[Object(q.jsx)("h1",{className:L.a["artist-name"],children:this.state.songData.artist}),Object(q.jsx)("h2",{className:L.a["song-title"],children:this.state.songData.title}),Object(q.jsx)("h3",{className:L.a["album-title"],children:this.state.songData.album})]})}),Object(q.jsx)("div",{className:L.a["album-container"],children:Object(q.jsxs)("div",{className:L.a["album-box"],style:{left:this.state.min?"-".concat(this.state.maxWidth-5,"px"):null},children:[Object(q.jsx)("div",{style:{backgroundImage:'url("https://squid-radio.net/covers/'.concat(this.state.songData.album,'.jpg"), url("/images/logo/soc_').concat(this.props.station,'.png")')},className:K("album-art")}),Object(q.jsx)("div",{className:L.a.vinyl,style:{backgroundImage:'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/83141/vinyl.png"), url("/images/station/station_'.concat(this.props.station,'.png")')}})]})})]})})}}]),a}(l.Component);function K(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.map((function(e){return L.a[e]||e})).join(" ")}a(68),a(69);function U(){var e=Object(l.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(l.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(l.useState)(!1),r=Object(i.a)(s,2),c=r[0],o=r[1],u=Object(l.useState)(!0),p=Object(i.a)(u,2),d=p[0],j=p[1];return{audio:a,ref:Object(l.useCallback)((function(e){null!==e&&(e.onplay=function(){return o(!0)},e.onpause=function(){return o(!1)},e.onloadstart=function(){return j(!0)},e.waiting=function(){return j(!0)},e.onloadeddata=function(){return j(!1)},e.canplay=function(){return j(!1)},e.playing=function(){return j(!1)},n(e))}),[]),playing:c,loading:d}}(),r=s.audio,c=s.ref,o=s.playing,u=s.loading,p=Object(l.useState)(.5),d=Object(i.a)(p,2),j=d[0],m=d[1],g=Object(l.useState)("clouds"),O=Object(i.a)(g,2),x=O[0],f=O[1],v=Object(l.useState)({album:"The Best Videogame Music 24/7",title:"",artist:""}),N=Object(i.a)(v,2),w=N[0],k=N[1],S=Object(A.a)("/api/meta"),C=Object(i.a)(S,1)[0],B=C.data,I=C.error;function G(){o?r.pause():(r.load(),r.play())}return Object(l.useEffect)((function(){return r&&(r.src="https://play.squid-radio.net/".concat(x),r.load(),r.play()),b(),y(x,(function(e){return k(e)})),function(){_()}}),[x]),I&&console.log(I),Object(q.jsx)("div",{className:h()("erplayer  erplayer--card erplayer--inline erplayer-- erplayer-- erplayer--open-",{"erplayer-playlist-open":a}),id:"erplayer-id-e390574",children:Object(q.jsx)("div",{className:"h-100 erplayer-content",children:Object(q.jsxs)("div",{className:"h-100 erplayer__container",style:{opacity:1},children:[Object(q.jsx)("audio",{ref:c,preload:"none",id:"erplayer-audio",src:"https://play.squid-radio.net/clouds",volume:j}),Object(q.jsx)("div",{className:"erplayer__bgcolor"}),Object(q.jsx)("div",{className:"erplayer__background",children:Object(q.jsx)("img",{src:"https://squid-radio.net/covers/".concat(w.album,".jpg"),alt:""})}),Object(q.jsx)("div",{className:"erplayer__wrapper",children:Object(q.jsxs)("div",{className:"erplayer__wrapper__container",children:[Object(q.jsxs)("div",{className:"erplayer__info mb-2",children:[Object(q.jsx)("div",{className:"erplayer__info__cover",children:Object(q.jsx)("img",{src:"https://www.squid-radio.net/images/station/station_".concat(x,".png"),alt:""})}),Object(q.jsx)("h3",{className:"erplayer__info__title erplayer-marquee",children:Object(q.jsx)("div",{className:"inner",children:[1,2,3,4].map((function(e){return Object(q.jsxs)("span",{className:"mr-3",children:[w.artist," - ",w.title]},e)}))})}),Object(q.jsx)("h4",{className:"erplayer__info__artist erplayer-marquee mt-3",children:Object(q.jsx)("div",{className:"inner",children:[1,2,3,4].map((function(e){return Object(q.jsx)("span",{className:"mr-3",children:w.album},e)}))})})]}),Object(q.jsxs)("div",{className:h()("erplayer__controls mt-4",{"erplayer-playing":o}),children:[Object(q.jsxs)("div",{className:"erplayer__slidercontrol erplayer__slidercontrol--progressbar",children:[Object(q.jsx)("span",{className:"erplayer__timer",children:"--:--"}),Object(q.jsxs)("div",{className:"erplayer__progressbar erplayer__slidercontrol__slider disabled",children:[Object(q.jsx)("div",{className:"erplayer__slidercontrol__bar erplayer__playhead",style:{width:"49px"}}),Object(q.jsx)("div",{className:"erplayer__slidercontrol__bar erplayer__bufferhead",style:{width:"0px"}}),Object(q.jsx)("div",{className:"erplayer__slidercontrol__trackbar"}),Object(q.jsx)("input",{type:"range",className:"erplayer__slidercontrol__input",min:"0",max:"1",step:"0.005",defaultValue:"0"})]}),Object(q.jsx)("span",{className:"erplayer__duration"})]}),Object(q.jsx)("span",{onClick:G,className:"erplayer__btn erplayer__play",children:Object(q.jsx)("i",{className:"erplayer-icon-play"})}),Object(q.jsx)("span",{onClick:G,className:h()("erplayer__btn erplayer__pause",{loading:u}),style:{pointerEvents:"initial"},children:Object(q.jsx)("i",{className:"erplayer-icon-pause",style:{opacity:1}})}),Object(q.jsxs)("div",{style:{position:"absolute",bottom:"3px",right:"3px",zIndex:100},className:"mt-2 erplayer__slidercontrol erplayer__slidercontrol--volume",children:[Object(q.jsx)("span",{className:"erplayer__btn erplayer__mute",children:Object(q.jsx)("i",{className:"erplayer-icon-volume"})}),Object(q.jsxs)("div",{className:"erplayer__slidercontrol__slider",children:[Object(q.jsx)("div",{className:"erplayer__volume-bar erplayer__slidercontrol__bar",style:{width:"".concat(100*j,"%")}}),Object(q.jsx)("div",{className:"erplayer__slidercontrol__trackbar"}),Object(q.jsx)("input",{type:"range",className:"erplayer__volume-input erplayer__slidercontrol__input",min:"0",max:"1",step:"0.01",defaultValue:.5,onChange:function(e){return t=e.target.value,r.volume=t,void m(t);var t}})]})]})]})]})}),Object(q.jsxs)("span",{onClick:function(){return n(!a)},className:h()("erplayer__btn erplayer__openplaylist",{open:a}),children:[Object(q.jsx)("i",{className:"erplayer-icon-menu erplayer-openicon"}),Object(q.jsx)("i",{className:"erplayer-icon-cancel erplayer-closeicon"})]}),Object(q.jsx)("div",{className:h()("erplayer__playlist",{open:a}),children:Object(q.jsx)("ul",{children:B&&Object.keys(B).map((function(e){return Object(q.jsxs)("li",{children:[Object(q.jsxs)("span",{className:"erplayer__btn erplayer__playlist__cover",onClick:function(){return f(e)},children:[Object(q.jsx)("img",{src:"https://www.squid-radio.net/images/station/station_".concat(e,".png"),alt:"cover"}),Object(q.jsx)("i",{className:"erplayer-icon-play erplayer-playIcon"}),Object(q.jsx)("i",{className:"erplayer-icon-pause erplayer-pauseIcon"})]}),Object(q.jsx)("h5",{children:(t=e,"string"!==typeof t?"":t.trim().replace(/^\w/,(function(e){return e.toUpperCase()})))})]},e);var t}))})})]})})})}function Y(){var e=Object(l.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(l.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(l.useState)(!1),r=Object(i.a)(s,2),c=r[0],o=r[1],u=Object(l.useState)(!0),p=Object(i.a)(u,2),d=p[0],j=p[1];return{audio:a,ref:Object(l.useCallback)((function(e){null!==e&&(e.onplay=function(){return o(!0)},e.onpause=function(){return o(!1)},e.onloadstart=function(){return j(!0)},e.waiting=function(){return j(!0)},e.onloadeddata=function(){return j(!1)},e.canplay=function(){return j(!1)},e.playing=function(){return j(!1)},n(e))}),[]),playing:c,loading:d}}(),r=s.audio,c=s.ref,o=s.playing,u=s.loading,p=Object(l.useState)(.5),d=Object(i.a)(p,2),j=d[0],m=d[1],g=Object(l.useState)("clouds"),O=Object(i.a)(g,2),x=O[0],f=O[1],v=Object(l.useState)({album:"The Best Videogame Music 24/7",title:"",artist:""}),N=Object(i.a)(v,2),w=N[0],k=N[1],S=Object(A.a)("https://api.squid-radio.net/meta"),C=Object(i.a)(S,1)[0],B=C.data,I=C.error;function G(){o?r.pause():(r.load(),r.play())}return Object(l.useEffect)((function(){return r&&(r.src="https://play.squid-radio.net/".concat(x),r.load(),r.play()),b(),y(x,(function(e){return k(e)})),function(){_()}}),[x]),I&&console.log(I),Object(q.jsx)("div",{className:h()("erplayer  erplayer--card erplayer--inline erplayer-- erplayer-- erplayer--open-",{"erplayer-playlist-open":a}),id:"erplayer-id-e390574",children:Object(q.jsx)("div",{className:"h-100 erplayer-content",children:Object(q.jsxs)("div",{className:"h-100 erplayer__container",style:{opacity:1},children:[Object(q.jsx)("audio",{ref:c,preload:"none",id:"erplayer-audio",src:"https://play.squid-radio.net/clouds",volume:j}),Object(q.jsx)("div",{className:"erplayer__bgcolor"}),Object(q.jsx)("div",{className:"erplayer__background",children:Object(q.jsx)("img",{src:"https://squid-radio.net/covers/".concat(w.album,".jpg"),alt:""})}),Object(q.jsx)("div",{className:"erplayer__wrapper py-3",children:Object(q.jsxs)("div",{className:"erplayer__wrapper__container h-100 w-100",children:[Object(q.jsxs)("div",{className:"erplayer__info",children:[Object(q.jsx)("h3",{className:"erplayer__info__title erplayer-marquee m-0",children:Object(q.jsx)("div",{className:"inner",children:[1,2,3,4].map((function(e){return Object(q.jsxs)("span",{className:"mr-3",children:[w.artist," - ",w.title]},e)}))})}),Object(q.jsx)("h4",{className:"erplayer__info__artist erplayer-marquee mt-3",children:Object(q.jsx)("div",{className:"inner",children:[1,2,3,4].map((function(e){return Object(q.jsx)("span",{className:"mr-3",children:w.album},e)}))})})]}),Object(q.jsxs)("div",{className:h()("erplayer__controls mt-4",{"erplayer-playing":o}),children:[Object(q.jsxs)("div",{className:"erplayer__slidercontrol erplayer__slidercontrol--progressbar",children:[Object(q.jsx)("span",{className:"erplayer__timer",children:"--:--"}),Object(q.jsxs)("div",{className:"erplayer__progressbar erplayer__slidercontrol__slider disabled",children:[Object(q.jsx)("div",{className:"erplayer__slidercontrol__bar erplayer__playhead",style:{width:"49px"}}),Object(q.jsx)("div",{className:"erplayer__slidercontrol__bar erplayer__bufferhead",style:{width:"0px"}}),Object(q.jsx)("div",{className:"erplayer__slidercontrol__trackbar"}),Object(q.jsx)("input",{type:"range",className:"erplayer__slidercontrol__input",min:"0",max:"1",step:"0.005",defaultValue:"0"})]})]}),Object(q.jsx)("span",{onClick:G,className:"erplayer__btn erplayer__play",children:Object(q.jsx)("i",{className:"erplayer-icon-play"})}),Object(q.jsx)("span",{onClick:G,className:h()("erplayer__btn erplayer__pause",{loading:u}),style:{pointerEvents:"initial"},children:Object(q.jsx)("i",{className:"erplayer-icon-pause",style:{opacity:1}})}),Object(q.jsxs)("div",{style:{position:"absolute",bottom:"3px",right:"3px",zIndex:100},className:"mt-2 erplayer__slidercontrol erplayer__slidercontrol--volume",children:[Object(q.jsx)("span",{className:"erplayer__btn erplayer__mute",children:Object(q.jsx)("i",{className:"erplayer-icon-volume"})}),Object(q.jsxs)("div",{className:"erplayer__slidercontrol__slider",children:[Object(q.jsx)("div",{className:"erplayer__volume-bar erplayer__slidercontrol__bar",style:{width:"".concat(100*j,"%")}}),Object(q.jsx)("div",{className:"erplayer__slidercontrol__trackbar"}),Object(q.jsx)("input",{type:"range",className:"erplayer__volume-input erplayer__slidercontrol__input",min:"0",max:"1",step:"0.01",defaultValue:.5,onChange:function(e){return t=e.target.value,r.volume=t,void m(t);var t}})]})]})]})]})}),Object(q.jsxs)("span",{onClick:function(){return n(!a)},className:h()("erplayer__btn erplayer__openplaylist",{open:a}),children:[Object(q.jsx)("i",{className:"erplayer-icon-menu erplayer-openicon"}),Object(q.jsx)("i",{className:"erplayer-icon-cancel erplayer-closeicon"})]}),Object(q.jsx)("div",{className:h()("erplayer__playlist",{open:a}),children:Object(q.jsx)("ul",{children:B&&Object.keys(B).map((function(e){return Object(q.jsxs)("li",{children:[Object(q.jsxs)("span",{className:"erplayer__btn erplayer__playlist__cover",onClick:function(){return f(e)},children:[Object(q.jsx)("img",{src:"https://www.squid-radio.net/images/station/station_".concat(e,".png"),alt:"cover"}),Object(q.jsx)("i",{className:"erplayer-icon-play erplayer-playIcon"}),Object(q.jsx)("i",{className:"erplayer-icon-pause erplayer-pauseIcon"})]}),Object(q.jsx)("h5",{children:(t=e,"string"!==typeof t?"":t.trim().replace(/^\w/,(function(e){return e.toUpperCase()})))})]},e);var t}))})})]})})})}a(146);var Z={"/":function(){return Object(q.jsx)(P,{station:"clouds"})},"/small":function(){return Object(q.jsx)(F,{station:"clouds"})},"/board":function(){return Object(q.jsx)(Y,{station:"clouds"})},"/small/:station":function(e){var t=e.station;return Object(q.jsx)(F,{station:t})},"/widget":function(){return Object(q.jsx)(U,{})},"/:station":function(e){var t=e.station;return Object(q.jsx)(P,{station:t})}},Q=function(){return Object(c.useRoutes)(Z)||Object(q.jsx)("script",{children:window.location.href="/404.html"})};r.a.render(Object(q.jsx)(Q,{}),document.getElementById("root"))},18:function(e){e.exports=JSON.parse('{"anime":["images/bg/anime/1.jpg"],"arms":["images/bg/arms/minmin-smash-arms-dlc-fighter_feature.jpg"],"clouds":["images/bg/clouds/1.jpg","images/bg/clouds/2.jpg","images/bg/clouds/Inkling.png","images/bg/clouds/Splatoon_Splatoon_2_Nintendo_Switch_Nintendo_Inkling-1178303.png","images/bg/clouds/Splatoon.png","images/bg/clouds/thumb-1920-1025915.png","images/bg/clouds/tumblr_oyzfhrS09j1stbkjno8_1280.png"],"persona":["images/bg/persona/1.jpg","images/bg/persona/2.jpg"],"sonic":["images/bg/sonic/1.jpg","images/bg/sonic/2.jpg","images/bg/sonic/Inkling.png","images/bg/sonic/Splatoon_Splatoon_2_Nintendo_Switch_Nintendo_Inkling-1178303.png","images/bg/sonic/Splatoon.png","images/bg/sonic/thumb-1920-1025915.png","images/bg/sonic/tumblr_oyzfhrS09j1stbkjno8_1280.png"],"woomy":["images/bg/woomy/Inkling.png","images/bg/woomy/Splatoon_Splatoon_2_Nintendo_Switch_Nintendo_Inkling-1178303.png","images/bg/woomy/Splatoon.png","images/bg/woomy/thumb-1920-1025915.png","images/bg/woomy/tumblr_oyzfhrS09j1stbkjno8_1280.png"]}')},6:function(e,t,a){e.exports={radio:"main_radio__39XAM",cover:"main_cover__3zSiG",record:"main_record__YBa2B",songData:"main_songData__3dCZO",volume:"main_volume__3pcm6",bar:"main_bar__2803L",cardPlay:"main_cardPlay__2KIc-",newBG:"main_newBG__3nCLv",currentBG:"main_currentBG__4Ontj",BG:"main_BG__34uA4"}},69:function(e,t,a){}},[[147,1,2]]]);
//# sourceMappingURL=main.daa0fc8b.chunk.js.map