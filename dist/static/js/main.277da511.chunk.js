(this.webpackJsonpsocradio_web_react=this.webpackJsonpsocradio_web_react||[]).push([[0],{148:function(e,t){},151:function(e,t,a){},16:function(e,t,a){e.exports={"music-player-container":"small_music-player-container__v6Jyk","music-player":"small_music-player__2dI1g",min:"small_min__2fwSS","artist-name":"small_artist-name__1t247","song-title":"small_song-title__25zBC","album-title":"small_album-title__rUFDi","album-container":"small_album-container__2boBs","album-box":"small_album-box__yABfT","album-art":"small_album-art__34-6y","song-data":"small_song-data__1nGa_",vinyl:"small_vinyl__3FmlL","music-player-controls":"small_music-player-controls__2aJCa","control-play":"small_control-play__297sV","is-playing":"small_is-playing__2ireB","control-forwards":"small_control-forwards__Ltjip","control-back":"small_control-back__3r1M8"}},17:function(e,t,a){e.exports={player:"player_player__3tV8g",current:"player_current__mOoWV",stations:"player_stations__1tZXQ",background:"player_background__2a6F5",effect:"player_effect__3GAgQ",station:"player_station__z1nJz",content:"player_content__2HaZS",playpause:"player_playpause__3uP9O",playing:"player_playing__N2IaC"}},175:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n,s=a(32),c=a.n(s),r=a(33),i=a(5),l=a(2),o=a(207),u=a(208),j=a(209),p=a(55),d=a(51),b=a.n(d),m=function(){n=b()("https://squid-radio.net",{path:"/api/socket.io"}),console.log("Connecting socket...")},_=function(){console.log("Disconnecting socket..."),n&&n.disconnect()},y=function(e,t){n.on(e,t)},O=a(25),g=a(6),h=a.n(g),x=a(8),f=a.n(x),v=(a(151),a(11)),N=a(9),w=a(20),k=a(21),S=a(24),C=a(23),B=a(28),I=a(41),q=a(1),A=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){return Object(q.jsx)("div",{className:"config-list",children:Object(q.jsx)("div",{className:"config-row",onClick:this.props.onHandleBG,children:Object(q.jsx)("div",{className:"config-icon",children:Object(q.jsx)(I.b,{id:"swapBG",style:{height:"30px",width:"30px"}})})})})}}]),a}(l.Component),z=a(27);function G(e){var t=e.station,a=Object(l.useState)(!1),n=Object(i.a)(a,2),s=n[0],c=n[1],o=Object(l.useState)([]),u=Object(i.a)(o,2),j=u[0],p=u[1],d=Object(z.a)("/api/meta"),b=Object(i.a)(d,1)[0],m=b.data,_=b.error,O=Object(l.useState)({}),g=Object(i.a)(O,2),h=g[0],x=g[1];return Object(l.useEffect)((function(){m&&p(Object.keys(m))}),[m]),Object(l.useEffect)((function(){j.length>0&&j.forEach((function(e){return y(e,(function(e){var t=h;h[e.source]=e,x(t)}))}))}),[j]),_&&console.log(_),Object(q.jsxs)("div",{className:"config-list",children:[Object(q.jsx)("div",{className:"config-row",children:Object(q.jsx)("div",{className:"config-icon",onClick:function(){return c(!s)},children:s?Object(q.jsx)(I.a,{style:{height:"30px",width:"30px"}}):Object(q.jsx)(I.c,{style:{height:"30px",width:"30px"}})})}),s?j.filter((function(e){return e!==t})).map((function(e){return Object(q.jsxs)("div",{className:"config-row",children:[h[e]&&Object(q.jsxs)("div",{className:"config-label",children:["Now Playing: ","".concat(h[e].artist," - ").concat(h[e].title)]}),Object(q.jsx)("img",{className:"config-img",alt:"station logo",src:"/images/station/station_".concat(e,".png"),onClick:function(){return Object(r.navigate)("/".concat(e))}})]},e)})):null]})}a(175);var E=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){return Object(q.jsxs)("div",{className:"config",children:[Object(q.jsx)(G,{station:this.props.station,onStation:this.props.handleStation}),Object(q.jsx)(A,{onHandleBG:this.props.handleBG})]})}}]),a}(l.Component),D=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){var e=B[this.props.station][this.props.index]||(this.props.index<0?B[this.props.station][B[this.props.station].length-1]:B[this.props.station][0]);switch(e.endsWith(".mp4")?"video":"image"){case"video":return Object(q.jsx)("video",{className:f.a.BG,autoPlay:!0,muted:!0,loop:!0,id:this.props.id,children:Object(q.jsx)("source",{src:e,type:"video/mp4"})});default:return Object(q.jsx)("div",{className:f.a.BG,id:this.props.id,style:{backgroundImage:'url("'.concat(e,'")')}})}}}]),a}(l.Component),M=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return e=t.call.apply(t,[this].concat(s)),Object(N.a)(Object(v.a)(e),"state",{anim:"stale",bgIndex:Math.floor(Math.random()*B[e.props.station].length)}),Object(N.a)(Object(v.a)(e),"updateBG",(function(){"running"!==e.state.anim&&e.setState({anim:"running"},(function(){e.bgdrag.play()}))})),e}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.bgdrag=Object(O.a)({targets:"#".concat(f.a.newBG),duration:1100,translateX:"100%",easing:"spring(1, 80, 10, 0)",autoplay:!1,complete:function(t){var a=e.state.bgIndex;a+1>=B[e.props.station].length?a=0:a++,e.setState({anim:"stale",bgIndex:a},(function(){t.reset()}))}})}},{key:"render",value:function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(E,{station:this.props.station,handleBG:this.updateBG.bind(this)}),Object(q.jsx)(D,{id:f.a.currentBG,station:this.props.station,index:this.state.bgIndex}),Object(q.jsx)(D,{id:f.a.newBG,station:this.props.station,index:this.state.bgIndex+1})]})}}]),a}(l.Component),T=["Riku's radio extravaganza","Kobayashi's homemade playlist","Ayanami's Anime Socks","Ritsu's tightly locked treasure"];function P(e){var t=e.station,a=Object(l.useRef)(null),n=function(){var e=Object(l.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(l.useState)(!1),c=Object(i.a)(s,2),r=c[0],o=c[1],u=Object(l.useState)(!0),j=Object(i.a)(u,2),p=j[0],d=j[1];return{audio:a,ref:Object(l.useCallback)((function(e){null!==e&&(e.onplay=function(){return o(!0)},e.onpause=function(){return o(!1)},e.onloadstart=function(){return d(!0)},e.waiting=function(){return d(!0)},e.onloadeddata=function(){return d(!1)},e.canplay=function(){return d(!1)},e.playing=function(){return d(!1)},n(e))}),[]),playing:r,loading:p}}(),s=n.audio,c=n.ref,r=n.playing,d=Object(l.useState)(.5),b=Object(i.a)(d,2),g=b[0],x=b[1],v=Object(l.useState)({album:"Press the Play button to start the radio",title:T[Math.floor(Math.random()*T.length)]}),N=Object(i.a)(v,2),w=N[0],k=N[1];function S(){r?s.pause():(s.load(),s.play())}return Object(l.useEffect)((function(){return s&&(s.src="https://play.squid-radio.net/".concat(t),s.load(),r&&s.play()),m(),y(t,(function(e){return k(e)})),_}),[t]),Object(l.useEffect)((function(){var e=Object(O.a)({targets:".".concat(f.a.record," img"),rotate:"1turn",loop:!0,duration:1500,easing:"linear",autoplay:!1});a.current={begin:Object(O.a)({targets:".".concat(f.a.record," img"),rotate:"180deg",duration:2e3,easing:"easeInCubic",autoplay:!1,complete:e.play}),end:Object(O.a)({begin:e.pause,targets:".".concat(f.a.record," img"),rotate:"360deg",duration:2e3,easing:"easeOutBack",autoplay:!1})}}),[]),Object(l.useEffect)((function(){r?a.current.begin.play():a.current.end.play()}),[r]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("audio",{ref:c,preload:"none",src:"https://play.squid-radio.net/".concat(t),volume:g}),Object(q.jsx)(M,{station:t}),Object(q.jsx)(o.a,{className:"d-flex",children:Object(q.jsxs)("div",{className:h()(f.a.radio,"my-auto mx-md-auto"),children:[Object(q.jsx)(u.a,{children:Object(q.jsxs)(j.a,{xs:12,className:h()(f.a.images,"d-flex p-0"),children:[Object(q.jsx)("div",{className:f.a.cover,children:Object(q.jsx)("img",{onError:function(e){e.target.src="images/logo/soc_".concat(t,".png")},src:"covers/".concat(w.album,".jpg"),alt:""})}),Object(q.jsx)("div",{className:h()("flex-grow-1",f.a.record),children:Object(q.jsx)("img",{src:"/images/record/record_".concat(t,".png"),alt:""})})]})}),Object(q.jsx)(u.a,{children:Object(q.jsx)(j.a,{xs:12,className:f.a.songData,children:Object(q.jsxs)(u.a,{children:[Object(q.jsxs)(j.a,{children:[Object(q.jsx)("span",{className:"text-truncate",id:"premidTitle",children:w.title}),Object(q.jsx)("p",{className:"text-truncate",id:"premidArtist",children:w.artist}),Object(q.jsx)("p",{className:"text-truncate",id:"premidAlbum",children:w.album})]}),Object(q.jsx)("div",{className:f.a.cardPlay,children:Object(q.jsx)("i",{className:"card-icon",id:"playPauseIcon",children:0===g?Object(q.jsx)(p.c,{onClick:S}):r?Object(q.jsx)(p.a,{onClick:S}):Object(q.jsx)(p.b,{onClick:S})})}),Object(q.jsx)(j.a,{xs:"auto",className:"d-flex",children:Object(q.jsx)(V,{volume:g,setVolume:function(e){s.volume=e,x(e)}})})]})})})]})})]})}function V(e){var t=e.volume,a=e.setVolume,n=Object(l.useState)(!1),s=Object(i.a)(n,2),c=s[0],r=s[1],o=Object(l.useRef)(null);function u(e){var t=(e-o.current.getBoundingClientRect().left)/o.current.getBoundingClientRect().width;t>1&&(t=1),t<0&&(t=0),a(t)}function j(e){r(!1),u(e.pageX)}function p(e){u(e.pageX)}return Object(l.useEffect)((function(){return c&&(window.addEventListener("mouseup",j),window.addEventListener("mousemove",p)),function(){window.removeEventListener("mouseup",j),window.removeEventListener("mousemove",p)}}),[c]),Object(q.jsx)("div",{className:"align-self-center",children:Object(q.jsx)("div",{className:"switch",children:Object(q.jsx)("div",{className:f.a.volume,title:"Set volume",ref:o,onMouseDown:function(e){r(!0),u(e.pageX)},children:Object(q.jsx)("span",{style:{width:"".concat(100*t,"%")},className:f.a.bar})})})})}var R=a(16),F=a.n(R),L=a(100),H=a.n(L),J=["Riku's radio extravaganza","Kobayashi's homemade playlist","Ayanami's Anime Socks","Ritsu's tightly locked treasure"];function W(e){if("mediaSession"in navigator){var t="https://squid-radio.net/covers/".concat(e.album,".jpg");navigator.mediaSession.metadata=new MediaMetadata({title:e.title,artist:e.artist,album:e.album,artwork:[{src:t,sizes:"96x96",type:"image/jpg"},{src:t,sizes:"128x128",type:"image/jpg"},{src:t,sizes:"192x192",type:"image/jpg"},{src:t,sizes:"256x256",type:"image/jpg"},{src:t,sizes:"384x384",type:"image/jpg"},{src:t,sizes:"512x512",type:"image/jpg"}]})}}var X=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return e=t.call.apply(t,[this].concat(s)),Object(N.a)(Object(v.a)(e),"state",{songData:{album:"Press the Play button to start the radio",title:J[Math.floor(Math.random()*J.length)]},currentArt:"/images/logo/soc_".concat(e.props.station,".png"),min:!1,maxWidth:800}),Object(N.a)(Object(v.a)(e),"minTimeout",null),Object(N.a)(Object(v.a)(e),"startSocket",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e.socket=b()({path:"/api/socket.io"}),e.socket.on(e.props.station,e.handleSong),e.socket.emit("station",{station:e.props.station}),e.startAudio(),t&&t()})),Object(N.a)(Object(v.a)(e),"startAudio",(function(){e.audio=new Audio("https://play.squid-radio.net/".concat(e.props.station,"?cache_ts=").concat((new Date).getTime())),e.audio.onpause=function(){e.setState({playing:!1}),e.spin.pause(),Object(O.a)({targets:".vinyl",rotate:"180deg",duration:2e3,easing:"easeOutBack",autoplay:!0})},e.audio.onplay=function(){if(!e.state.started){W(e.state.songData);var t="https://squid-radio.net/covers/".concat(e.state.songData.album,".jpg");setTimeout((function(){e.setState({currentArt:t})}),1500)}e.setState({started:!0}),e.setState({playing:!0})},e.audio.onended=function(){console.log("Stream Ended. Restarting"),e.startAudio()},e.audio.loop=!1,e.audio.play(),e.audio.volume=1})),Object(N.a)(Object(v.a)(e),"handlePlay",(function(){e.state.playing?e.audio.pause():(e.audio.load(),e.audio.play(),e.audio.volume=1)})),Object(N.a)(Object(v.a)(e),"handleSong",(function(t){if(console.log(t),null!==t&&e.state.started){e.setState({songData:t,min:!1}),W(t);var a="https://squid-radio.net/covers/".concat(t.album,".jpg");setTimeout((function(){e.setState({currentArt:a})}),1500),clearTimeout(e.minTimeout),e.cycleHide()}})),e}return Object(k.a)(a,[{key:"cycleHide",value:function(){var e=this;clearTimeout(this.minTimeout),this.minTimeout=setTimeout((function(){return e.setState({min:!e.state.min},e.cycleHide)}),this.state.min?2e4:5e4)}},{key:"componentDidMount",value:function(){var e=this;this.spin=Object(O.a)({targets:".".concat(F.a.vinyl),rotate:"1turn",loop:!0,duration:1500,easing:"linear",autoplay:!0}),this.startSocket(),setInterval((function(){return e.setState({maxWidth:H()(".".concat(F.a["music-player"])).outerWidth()})}),1e3)}},{key:"render",value:function(){return Object(q.jsx)(o.a,{fluid:!0,children:Object(q.jsxs)("div",{className:K("music-player-container",this.state.min?"min":""),children:[Object(q.jsx)("div",{className:K("music-player"),children:Object(q.jsxs)("div",{className:F.a["song-data"],children:[Object(q.jsx)("h1",{className:F.a["artist-name"],children:this.state.songData.artist}),Object(q.jsx)("h2",{className:F.a["song-title"],children:this.state.songData.title}),Object(q.jsx)("h3",{className:F.a["album-title"],children:this.state.songData.album})]})}),Object(q.jsx)("div",{className:F.a["album-container"],children:Object(q.jsxs)("div",{className:F.a["album-box"],style:{left:this.state.min?"-".concat(this.state.maxWidth-5,"px"):null},children:[Object(q.jsx)("div",{style:{backgroundImage:'url("https://squid-radio.net/covers/'.concat(this.state.songData.album,'.jpg"), url("/images/logo/soc_').concat(this.props.station,'.png")')},className:K("album-art")}),Object(q.jsx)("div",{className:F.a.vinyl,style:{backgroundImage:'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/83141/vinyl.png"), url("/images/station/station_'.concat(this.props.station,'.png")')}})]})})]})})}}]),a}(l.Component);function K(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.map((function(e){return F.a[e]||e})).join(" ")}a(92),a(93);function U(){var e=Object(l.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(l.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(l.useState)(!1),c=Object(i.a)(s,2),r=c[0],o=c[1],u=Object(l.useState)(!0),j=Object(i.a)(u,2),p=j[0],d=j[1];return{audio:a,ref:Object(l.useCallback)((function(e){null!==e&&(e.onplay=function(){return o(!0)},e.onpause=function(){return o(!1)},e.onloadstart=function(){return d(!0)},e.waiting=function(){return d(!0)},e.onloadeddata=function(){return d(!1)},e.canplay=function(){return d(!1)},e.playing=function(){return d(!1)},n(e))}),[]),playing:r,loading:p}}(),c=s.audio,r=s.ref,o=s.playing,u=s.loading,j=Object(l.useState)(.5),p=Object(i.a)(j,2),d=p[0],b=p[1],O=Object(l.useState)("clouds"),g=Object(i.a)(O,2),x=g[0],f=g[1],v=Object(l.useState)({album:"The Best Videogame Music 24/7",title:"",artist:""}),N=Object(i.a)(v,2),w=N[0],k=N[1],S=Object(z.a)("/api/meta"),C=Object(i.a)(S,1)[0],B=C.data,I=C.error;function A(){o?c.pause():(c.load(),c.play())}return Object(l.useEffect)((function(){return c&&(c.src="https://play.squid-radio.net/".concat(x),c.load(),c.play()),m(),y(x,(function(e){return k(e)})),function(){_()}}),[x]),I&&console.log(I),Object(q.jsx)("div",{className:h()("erplayer  erplayer--card erplayer--inline erplayer-- erplayer-- erplayer--open-",{"erplayer-playlist-open":a}),id:"erplayer-id-e390574",children:Object(q.jsx)("div",{className:"h-100 erplayer-content",children:Object(q.jsxs)("div",{className:"h-100 erplayer__container",style:{opacity:1},children:[Object(q.jsx)("audio",{ref:r,preload:"none",id:"erplayer-audio",src:"https://play.squid-radio.net/clouds",volume:d}),Object(q.jsx)("div",{className:"erplayer__bgcolor"}),Object(q.jsx)("div",{className:"erplayer__background",children:Object(q.jsx)("img",{src:"https://squid-radio.net/covers/".concat(w.album,".jpg"),alt:""})}),Object(q.jsx)("div",{className:"erplayer__wrapper",children:Object(q.jsxs)("div",{className:"erplayer__wrapper__container",children:[Object(q.jsxs)("div",{className:"erplayer__info mb-2",children:[Object(q.jsx)("div",{className:"erplayer__info__cover",children:Object(q.jsx)("img",{src:"https://www.squid-radio.net/images/station/station_".concat(x,".png"),alt:""})}),Object(q.jsx)("h3",{className:"erplayer__info__title erplayer-marquee",children:Object(q.jsx)("div",{className:"inner",children:[1,2,3,4].map((function(e){return Object(q.jsxs)("span",{className:"mr-3",children:[w.artist," - ",w.title]},e)}))})}),Object(q.jsx)("h4",{className:"erplayer__info__artist erplayer-marquee mt-3",children:Object(q.jsx)("div",{className:"inner",children:[1,2,3,4].map((function(e){return Object(q.jsx)("span",{className:"mr-3",children:w.album},e)}))})})]}),Object(q.jsxs)("div",{className:h()("erplayer__controls mt-4",{"erplayer-playing":o}),children:[Object(q.jsxs)("div",{className:"erplayer__slidercontrol erplayer__slidercontrol--progressbar",children:[Object(q.jsx)("span",{className:"erplayer__timer",children:"--:--"}),Object(q.jsxs)("div",{className:"erplayer__progressbar erplayer__slidercontrol__slider disabled",children:[Object(q.jsx)("div",{className:"erplayer__slidercontrol__bar erplayer__playhead",style:{width:"49px"}}),Object(q.jsx)("div",{className:"erplayer__slidercontrol__bar erplayer__bufferhead",style:{width:"0px"}}),Object(q.jsx)("div",{className:"erplayer__slidercontrol__trackbar"}),Object(q.jsx)("input",{type:"range",className:"erplayer__slidercontrol__input",min:"0",max:"1",step:"0.005",defaultValue:"0"})]}),Object(q.jsx)("span",{className:"erplayer__duration"})]}),Object(q.jsx)("span",{onClick:A,className:"erplayer__btn erplayer__play",children:Object(q.jsx)("i",{className:"erplayer-icon-play"})}),Object(q.jsx)("span",{onClick:A,className:h()("erplayer__btn erplayer__pause",{loading:u}),style:{pointerEvents:"initial"},children:Object(q.jsx)("i",{className:"erplayer-icon-pause",style:{opacity:1}})}),Object(q.jsxs)("div",{style:{position:"absolute",bottom:"3px",right:"3px",zIndex:100},className:"mt-2 erplayer__slidercontrol erplayer__slidercontrol--volume",children:[Object(q.jsx)("span",{className:"erplayer__btn erplayer__mute",children:Object(q.jsx)("i",{className:"erplayer-icon-volume"})}),Object(q.jsxs)("div",{className:"erplayer__slidercontrol__slider",children:[Object(q.jsx)("div",{className:"erplayer__volume-bar erplayer__slidercontrol__bar",style:{width:"".concat(100*d,"%")}}),Object(q.jsx)("div",{className:"erplayer__slidercontrol__trackbar"}),Object(q.jsx)("input",{type:"range",className:"erplayer__volume-input erplayer__slidercontrol__input",min:"0",max:"1",step:"0.01",defaultValue:.5,onChange:function(e){return t=e.target.value,c.volume=t,void b(t);var t}})]})]})]})]})}),Object(q.jsxs)("span",{onClick:function(){return n(!a)},className:h()("erplayer__btn erplayer__openplaylist",{open:a}),children:[Object(q.jsx)("i",{className:"erplayer-icon-menu erplayer-openicon"}),Object(q.jsx)("i",{className:"erplayer-icon-cancel erplayer-closeicon"})]}),Object(q.jsx)("div",{className:h()("erplayer__playlist",{open:a}),children:Object(q.jsx)("ul",{children:B&&Object.keys(B).map((function(e){return Object(q.jsxs)("li",{children:[Object(q.jsxs)("span",{className:"erplayer__btn erplayer__playlist__cover",onClick:function(){return f(e)},children:[Object(q.jsx)("img",{src:"https://www.squid-radio.net/images/station/station_".concat(e,".png"),alt:"cover"}),Object(q.jsx)("i",{className:"erplayer-icon-play erplayer-playIcon"}),Object(q.jsx)("i",{className:"erplayer-icon-pause erplayer-pauseIcon"})]}),Object(q.jsx)("h5",{children:(t=e,"string"!==typeof t?"":t.trim().replace(/^\w/,(function(e){return e.toUpperCase()})))})]},e);var t}))})})]})})})}function Z(){var e=Object(l.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(l.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(l.useState)(!1),c=Object(i.a)(s,2),r=c[0],o=c[1],u=Object(l.useState)(!0),j=Object(i.a)(u,2),p=j[0],d=j[1];return{audio:a,ref:Object(l.useCallback)((function(e){null!==e&&(e.onplay=function(){return o(!0)},e.onpause=function(){return o(!1)},e.onloadstart=function(){return d(!0)},e.waiting=function(){return d(!0)},e.onloadeddata=function(){return d(!1)},e.canplay=function(){return d(!1)},e.playing=function(){return d(!1)},n(e))}),[]),playing:r,loading:p}}(),c=s.audio,r=s.ref,o=s.playing,u=s.loading,j=Object(l.useState)(.5),p=Object(i.a)(j,2),d=p[0],b=p[1],O=Object(l.useState)("clouds"),g=Object(i.a)(O,2),x=g[0],f=g[1],v=Object(l.useState)({album:"The Best Videogame Music 24/7",title:"",artist:""}),N=Object(i.a)(v,2),w=N[0],k=N[1],S=Object(z.a)("/api/meta"),C=Object(i.a)(S,1)[0],B=C.data,I=C.error;function A(){o?c.pause():(c.load(),c.play())}return Object(l.useEffect)((function(){return c&&(c.src="https://play.squid-radio.net/".concat(x),c.load(),c.play()),m(),y(x,(function(e){return k(e)})),function(){_()}}),[x]),I&&console.log(I),Object(q.jsx)("div",{className:h()("erplayer  erplayer--card erplayer--inline erplayer-- erplayer-- erplayer--open-",{"erplayer-playlist-open":a}),id:"erplayer-id-e390574",children:Object(q.jsx)("div",{className:"h-100 erplayer-content",children:Object(q.jsxs)("div",{className:"h-100 erplayer__container",style:{opacity:1},children:[Object(q.jsx)("audio",{ref:r,preload:"none",id:"erplayer-audio",src:"https://play.squid-radio.net/clouds",volume:d}),Object(q.jsx)("div",{className:"erplayer__bgcolor"}),Object(q.jsx)("div",{className:"erplayer__background",children:Object(q.jsx)("img",{src:"https://squid-radio.net/covers/".concat(w.album,".jpg"),alt:""})}),Object(q.jsx)("div",{className:"erplayer__wrapper py-3",children:Object(q.jsxs)("div",{className:"erplayer__wrapper__container h-100 w-100",children:[Object(q.jsxs)("div",{className:"erplayer__info",children:[Object(q.jsx)("h3",{className:"erplayer__info__title erplayer-marquee m-0",children:Object(q.jsx)("div",{className:"inner",children:[1,2,3,4].map((function(e){return Object(q.jsxs)("span",{className:"mr-3",children:[w.artist," - ",w.title]},e)}))})}),Object(q.jsx)("h4",{className:"erplayer__info__artist erplayer-marquee mt-3",children:Object(q.jsx)("div",{className:"inner",children:[1,2,3,4].map((function(e){return Object(q.jsx)("span",{className:"mr-3",children:w.album},e)}))})})]}),Object(q.jsxs)("div",{className:h()("erplayer__controls mt-4",{"erplayer-playing":o}),children:[Object(q.jsxs)("div",{className:"erplayer__slidercontrol erplayer__slidercontrol--progressbar",children:[Object(q.jsx)("span",{className:"erplayer__timer",children:"--:--"}),Object(q.jsxs)("div",{className:"erplayer__progressbar erplayer__slidercontrol__slider disabled",children:[Object(q.jsx)("div",{className:"erplayer__slidercontrol__bar erplayer__playhead",style:{width:"49px"}}),Object(q.jsx)("div",{className:"erplayer__slidercontrol__bar erplayer__bufferhead",style:{width:"0px"}}),Object(q.jsx)("div",{className:"erplayer__slidercontrol__trackbar"}),Object(q.jsx)("input",{type:"range",className:"erplayer__slidercontrol__input",min:"0",max:"1",step:"0.005",defaultValue:"0"})]})]}),Object(q.jsx)("span",{onClick:A,className:"erplayer__btn erplayer__play",children:Object(q.jsx)("i",{className:"erplayer-icon-play"})}),Object(q.jsx)("span",{onClick:A,className:h()("erplayer__btn erplayer__pause",{loading:u}),style:{pointerEvents:"initial"},children:Object(q.jsx)("i",{className:"erplayer-icon-pause",style:{opacity:1}})}),Object(q.jsxs)("div",{style:{position:"absolute",bottom:"3px",right:"3px",zIndex:100},className:"mt-2 erplayer__slidercontrol erplayer__slidercontrol--volume",children:[Object(q.jsx)("span",{className:"erplayer__btn erplayer__mute",children:Object(q.jsx)("i",{className:"erplayer-icon-volume"})}),Object(q.jsxs)("div",{className:"erplayer__slidercontrol__slider",children:[Object(q.jsx)("div",{className:"erplayer__volume-bar erplayer__slidercontrol__bar",style:{width:"".concat(100*d,"%")}}),Object(q.jsx)("div",{className:"erplayer__slidercontrol__trackbar"}),Object(q.jsx)("input",{type:"range",className:"erplayer__volume-input erplayer__slidercontrol__input",min:"0",max:"1",step:"0.01",defaultValue:.5,onChange:function(e){return t=e.target.value,c.volume=t,void b(t);var t}})]})]})]})]})}),Object(q.jsxs)("span",{onClick:function(){return n(!a)},className:h()("erplayer__btn erplayer__openplaylist",{open:a}),children:[Object(q.jsx)("i",{className:"erplayer-icon-menu erplayer-openicon"}),Object(q.jsx)("i",{className:"erplayer-icon-cancel erplayer-closeicon"})]}),Object(q.jsx)("div",{className:h()("erplayer__playlist",{open:a}),children:Object(q.jsx)("ul",{children:B&&Object.keys(B).map((function(e){return Object(q.jsxs)("li",{children:[Object(q.jsxs)("span",{className:"erplayer__btn erplayer__playlist__cover",onClick:function(){return f(e)},children:[Object(q.jsx)("img",{src:"https://www.squid-radio.net/images/station/station_".concat(e,".png"),alt:"cover"}),Object(q.jsx)("i",{className:"erplayer-icon-play erplayer-playIcon"}),Object(q.jsx)("i",{className:"erplayer-icon-pause erplayer-pauseIcon"})]}),Object(q.jsx)("h5",{children:(t=e,"string"!==typeof t?"":t.trim().replace(/^\w/,(function(e){return e.toUpperCase()})))})]},e);var t}))})})]})})})}var Q=a(101),Y=a(210),$=a(212),ee=a(102),te=a.n(ee),ae=a(104),ne=a.n(ae),se=Object(Y.a)({root:{color:"white",display:"flex",flexDirection:"row"}});function ce(e){var t=se();return Object(q.jsxs)("div",{className:t.root,children:[Object(q.jsx)(te.a,{className:"mx-3"}),Object(q.jsx)($.a,{min:0,max:1,step:.01,value:e.value,onChange:e.handleChange,"aria-labelledby":"continuous-slider"}),Object(q.jsx)(ne.a,{className:"mx-3"})]})}var re=a(105),ie=a.n(re),le=a(17),oe=a.n(le);function ue(e){var t=function(){var e=Object(l.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(l.useState)(!1),c=Object(i.a)(s,2),r=c[0],o=c[1],u=Object(l.useState)(!0),j=Object(i.a)(u,2),p=j[0],d=j[1];return{audio:a,ref:Object(l.useCallback)((function(e){null!==e&&(e.onplay=function(){return o(!0)},e.onpause=function(){return o(!1)},e.onloadstart=function(){return d(!0)},e.waiting=function(){return d(!0)},e.onloadeddata=function(){return d(!1)},e.canplay=function(){return d(!1)},e.playing=function(){return d(!1)},n(e))}),[]),playing:r,loading:p}}(),a=t.audio,n=t.ref,s=t.playing,c=Object(z.a)("https://squid-radio.net/api/meta"),p=Object(i.a)(c,1)[0].data,d=Object(l.useState)(.5),b=Object(i.a)(d,2),O=b[0],g=b[1],x=Object(l.useState)({album:"The Best Videogame Music 24/7",title:"",artist:""}),f=Object(i.a)(x,2),v=f[0],w=f[1];return Object(l.useEffect)((function(){return a&&(a.src="https://play.squid-radio.net/".concat(e.station),a.load(),a.play()),m(),y(e.station,(function(e){return w(e)})),function(){_()}}),[e.station]),Object(q.jsxs)(o.a,{className:h()(oe.a.player,"text-center px-2 px-md-0 h-100 d-flex align-items-center justify-content-center flex-column"),children:[Object(q.jsx)("audio",{ref:n,preload:"none",id:"erplayer-audio",src:"https://play.squid-radio.net/".concat(e.station),volume:O}),Object(q.jsxs)("div",{className:oe.a.background,children:[Object(q.jsx)("div",{className:oe.a.effect}),Object(q.jsx)("img",{src:"https://squid-radio.net/covers/".concat(v.album,".jpg"),onError:function(t){t.target.src="/images/logo/soc_".concat(e.station,".png")},alt:""})]}),Object(q.jsxs)(u.a,{className:h()(oe.a.content,"justify-content-center my-4 w-100"),children:[Object(q.jsx)(j.a,{xs:"auto",children:Object(q.jsx)("div",{className:oe.a.station,children:Object(q.jsx)("img",{src:"/images/station/station_".concat(e.station,".png"),alt:""})})}),Object(q.jsxs)(j.a,{xs:"auto",children:[Object(q.jsx)(u.a,{style:{height:"".concat(40,"%"),fontSize:"45px"},className:"overflow-hidden",children:Object(q.jsx)(j.a,{children:Object(q.jsx)(je,{text:v.artist})})}),Object(q.jsx)(u.a,{style:{height:"".concat(40,"%"),fontSize:"45px"},className:"overflow-hidden",children:Object(q.jsx)(j.a,{children:Object(q.jsx)(je,{text:v.title})})}),Object(q.jsx)(u.a,{style:{height:"".concat(20,"%"),fontSize:"25px"},className:"overflow-hidden",children:Object(q.jsx)(j.a,{children:Object(q.jsx)(je,{text:v.album})})})]})]}),Object(q.jsx)(u.a,{className:"my-4",children:Object(q.jsx)(j.a,{children:Object(q.jsxs)("span",{className:oe.a.stations,children:["Available stations: ",p&&Object.keys(p).filter((function(e){return"undefined"!==e})).map((function(t,a,n){return Object(q.jsxs)(l.Fragment,{children:[t===e.station?Object(q.jsx)("span",{className:oe.a.current,children:t}):Object(q.jsx)(r.A,{disabled:!0,href:"/".concat(t),children:t}),n.length-1!==a&&" - "]},t)}))]})})}),Object(q.jsx)(u.a,{className:"mt-4 w-100 justify-content-center",children:Object(q.jsx)(j.a,{xs:12,md:4,children:Object(q.jsxs)(u.a,{className:"justify-content-center",children:[Object(q.jsx)(j.a,{md:12,children:Object(q.jsx)(ce,{handleChange:function(e,t){a.volume=t,g(t)},value:O})}),Object(q.jsx)(j.a,{xs:"auto",className:"mt-3",children:Object(q.jsx)("div",{onClick:function(){s?a.pause():(a.load(),a.play())},className:h()(oe.a.playpause,Object(N.a)({},oe.a.playing,s)),children:Object(q.jsx)("label",{htmlFor:oe.a.playpause,tabIndex:1})})})]})})})]})}function je(e){var t=Object(l.useState)(),a=Object(i.a)(t,2),n=a[0],s=a[1],c={whiteSpace:"nowrap"};return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(ie.a,{style:Object(Q.a)({width:"100%",visibility:"hidden",position:"absolute"},c),onChange:function(e){return s(e)},children:e.text}),Object(q.jsx)("div",{className:h()({marquee:n}),style:c,children:e.text})]})}var pe=a(108),de=(a(190),{"/small":function(){return Object(q.jsx)(X,{station:"clouds"})},"/small/:station":function(e){var t=e.station;return Object(q.jsx)(X,{station:t})},"/old":function(){return Object(q.jsx)(P,{station:"clouds"})},"/old/:station":function(e){var t=e.station;return Object(q.jsx)(P,{station:t})},"/board":function(){return Object(q.jsx)(Z,{station:"clouds"})},"/widget":function(){return Object(q.jsx)(U,{})},"/":function(){return Object(q.jsx)(ue,{station:"clouds"})},"/:station":function(e){var t=e.station;return Object(q.jsx)(ue,{station:t})}}),be=function(){var e=Object(r.useRoutes)(de);return Object(q.jsx)(pe.a,{children:e})||Object(q.jsx)("script",{children:window.location.href="/404.html"})};c.a.render(Object(q.jsx)(be,{}),document.getElementById("root"))},28:function(e){e.exports=JSON.parse('{"anime":["images/bg/anime/1.jpg"],"arms":["images/bg/arms/minmin-smash-arms-dlc-fighter_feature.jpg"],"clouds":["images/bg/clouds/1.jpg","images/bg/clouds/2.jpg","images/bg/clouds/Inkling.png","images/bg/clouds/Splatoon_Splatoon_2_Nintendo_Switch_Nintendo_Inkling-1178303.png","images/bg/clouds/Splatoon.png","images/bg/clouds/thumb-1920-1025915.png","images/bg/clouds/tumblr_oyzfhrS09j1stbkjno8_1280.png"],"persona":["images/bg/persona/1.jpg","images/bg/persona/2.jpg"],"sonic":["images/bg/sonic/1.jpg","images/bg/sonic/2.jpg","images/bg/sonic/Inkling.png","images/bg/sonic/Splatoon_Splatoon_2_Nintendo_Switch_Nintendo_Inkling-1178303.png","images/bg/sonic/Splatoon.png","images/bg/sonic/thumb-1920-1025915.png","images/bg/sonic/tumblr_oyzfhrS09j1stbkjno8_1280.png"],"woomy":["images/bg/woomy/Inkling.png","images/bg/woomy/Splatoon_Splatoon_2_Nintendo_Switch_Nintendo_Inkling-1178303.png","images/bg/woomy/Splatoon.png","images/bg/woomy/thumb-1920-1025915.png","images/bg/woomy/tumblr_oyzfhrS09j1stbkjno8_1280.png"]}')},8:function(e,t,a){e.exports={radio:"main_radio__39XAM",cover:"main_cover__3zSiG",record:"main_record__YBa2B",songData:"main_songData__3dCZO",volume:"main_volume__3pcm6",bar:"main_bar__2803L",cardPlay:"main_cardPlay__2KIc-",newBG:"main_newBG__3nCLv",currentBG:"main_currentBG__4Ontj",BG:"main_BG__34uA4"}},93:function(e,t,a){}},[[191,1,2]]]);
//# sourceMappingURL=main.277da511.chunk.js.map