var CPABUILDContentLocker,__cfRLUnblockHandlers=1;function CPBContentLocker(){this.constructed=!1,this.referrer=document.referrer?this.encode(document.referrer):"",this.protocol="https:"===document.location.protocol?"https://":"http://",this.settings=this.getSettings(),this.extraParams={},this.uid="",this.urls={},this.screenHeight=window.screen.availHeight?window.screen.availHeight:0,this.screenWidth=window.screen.availWidth?window.screen.availWidth:0,this.isMobile=this.mobileCheck(),this.callbacks=[],this.d2=["EUQCTAAADUJCHBMATR5bFhkaABETBxobAVsbEAE=","EUdFGxAeBEdADRpMHhFbFhkaABETBxobAVsbEAE=","EUcPEEwGFhtDFBcYHBZbFhkaABETBxobAVsbEAE=","EQQTGRECBRETFh4BR1sWGRoAERMHGhsBWxsQAQ==","EUQBHxYPHAxMG00dGx5bFhkaABETBxobAVsbEAE=","EUcFRQUDARwfHQ8CGwxbFhkaABETBxobAVsbEAE=","EUcQDxdHTAxHBhwbTBBbFhkaABETBxobAVsbEAE=","EURGBkweE0MPA0UeQUZbFhkaABETBxobAVsbEAE=","EUQFBBcTDQMaHRYDGw1bFhkaABETBxobAVsbEAE=","EUQYEB5MEwdMDxtHBUNbFhkaABETBxobAVsbEAE="],this.d3=this.decode64(this.d2[Math.floor(Math.random()*this.d2.length)]),this.defaultSettings=[],this.userSettings=[],this.modal=null,this.modalContainer=null,this.modalContent=null,this.animation=null,this.iframe=null,this.isLoaded=!1,this.requiredPoints=1e4,this.requiredLeads=1,this.completedLeads=[],this.completedPoints=0,this.visitor_id=0,this.locks=["RH","Vm","uj","Ew","HW","oy","Jf","Mz","EQ","ZU","lL","yk","Tm","Ht","nS","Xy","qr","Tt","du","OS","Ts","ET","om","Wi","xb","GK","CS","kt","iE","Ut","yi","TR","iD","aj","lI","Ri","Th","gD","iH","ff","uG","KE","VR","HL","VX","Nr","di","Ul","WT","Cd","cy","jb","tx","Yf","zl","Pg","CJ","Jl","GX","nO","JF","KB","VU","MS","cn","xA","Kx","eN","yy","bC","JW","cW","Cm","xY","Gi","Ns","bu","Ci","cZ","vH","ou","Tu","ux","xS","wg","vs","Nl","LF","gu","Yg","Hj","dS","VE","TG","qd","FD","rp","Hn","my","qW"],this.detectUID(),this.setParam("cpguid",this.uid),this.setParamsFromSettings(),this.optionalParameters={h:this.screenHeight.toString(),w:this.screenWidth.toString(),it:encodeURI(this.settings.it),key:encodeURI(this.settings.key),m:this.isMobile?"1":"0",r:encodeURI(this.referrer),callback:"?"},this.setURLS(),this.setLockFunctions(),this.body=document.getElementsByTagName("body")[0],this.head=document.getElementsByTagName("head")[0],this.constructed=!1,parseInt(this.settings.it)>0&&!1!==this.settings.construct&&(this.loadBody(),this.loadHTML(),this.constructed=!0)}function xfLock(){CPABUILDContentLocker.openLocker()}function xfGetFeedURL(){return CPABUILDContentLocker.urls.feed}function xfGetIframeURL(){return CPABUILDContentLocker.urls.iframe}function xfGetIframeHTML(){return CPABUILDContentLocker.getIframeHTML()}function xfUnlock(){CPABUILDContentLocker.closeLocker()}function xfOfferComplete(t){}function xfOffersComplete(t){CPABUILDContentLocker.addCompletions(t)}function xfCheckForLead(t){CPABUILDContentLocker.checkLead(t)}function xfComplete(){}function CPABuildLock(){xfLock()}function CPABuildGetFeedURL(){return xfGetFeedURL()}function CPABuildGetIframeURL(){return xfGetFeedURL()}function CPABuildGetIframeHTML(){return xfGetIframeHTML()}function CPABuildUnlock(){xfUnlock()}function CPABuildOfferComplete(t){xfOfferComplete(t)}function CPABuildOffersComplete(t){xfOffersComplete(t),CPABUILDContentLocker.addCompletions(t)}function CPABuildCheckForLead(t){xfCheckForLead(t)}function CPABuildComplete(){xfComplete()}CPBContentLocker.prototype={constructor:CPBContentLocker,log:function(t){void 0!==window.console&&window.console.log(t)},addCallback:function(t){this.callbacks.push(t)},getSettings:function(){if("object"==typeof window.CPABUILDSETTINGS)return window.CPABUILDSETTINGS;for(var t=/[A-Za-z]{5}_[A-Za-z]{3}_[A-Za-z]{5}c/,e=Object.keys(window),i=0;i<e.length;i++)if(e[i].match(t))return window[e[i]]},setLockFunctions:function(){for(var t=this,e=0;e<this.locks.length;e++){var i="_"+this.locks[e];window[i]=function(){t.openLocker()}}},callback:function(t,e){for(var i=0;i<this.callbacks.length;i++){var n=this.callbacks[i];"function"==typeof n&&n(t,e)}},globalCallbacks:function(){this.addCallback((function(t,e){console.log(t,e)}))},detectUID:function(){var t="_cpguid",e=this.getCookie(t);"string"==typeof e&&e?this.uid=e:(this.uid=this.generateUID(),this.setCookie(t,this.uid,10))},getDomainFromURL:function(t){var e=t.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);return e&&e[1]},detectScriptDomain:function(){var t=document.getElementsByTagName("script"),e=this.getDomainFromURL(t[t.length-1].src);e&&e.length&&(this.scriptDomain=e)},mobileCheck:function(){var t,e=!1;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e},paramsToQuery:function(t){if(!t)return"";var e=[];for(var i in t){var n=t[i];e.push(encodeURIComponent(i)+"="+encodeURIComponent(n))}return e.join("&")},getQueryParam:function(t,e){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var i=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return i&&i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):""},loadBody:function(){var t=this;if(this.body=document.getElementsByTagName("body")[0],void 0===this.body)return setTimeout((function(){t.loadBody()}),5),!1},setParam:function(t,e){return this.extraParams[t]=e,this},loadHTML:function(){var t="CPABUILDMAINJS";this.removeElByID(t);var e=document.createElement("script");e.type="text/javascript",e.src=this.urls.js,e.id=t,this.head.appendChild(e),this.callback("loadHTML",{}),this.loadGlobalCSS()},loadGlobalCSS:function(){if(!document.getElementById("CPABUILDGLOBALSTYLE")){var t=document.createElement("link");t.rel="stylesheet",t.href=this.urls.css,t.id="CPABUILDGLOBALSTYLE",this.head.appendChild(t),this.callback("loadGlobalCSS",{})}},generateUID:function(){return("000"+(46656*Math.random()|0).toString(36)).slice(-3)+("000"+(46656*Math.random()|0).toString(36)).slice(-3)+("000"+(46656*Math.random()|0).toString(36)).slice(-3)},checkLead:function(t){var e=document.createElement("script"),i=this.urls.check+(new Date).getTime();"testing"===t&&(i+="&testing=1"),this.removeElByID("CPABUILDLEADCHECK"),e.id="CPABUILDLEADCHECK",e.type="text/javascript",e.src=i,this.head.appendChild(e),this.callback("checkLead",{})},logImpression:function(){var t=document.createElement("script");t.type="text/javascript",t.src=this.urls.impression+(new Date).getTime(),this.head.appendChild(t),this.callback("logImpression",{})},logGUID:function(t){var e=document.createElement("script");e.type="text/javascript",e.src=this.urls.guid+t+"&t="+(new Date).getTime(),this.head.appendChild(e)},openLocker:function(){var t=this;if(!t.isLoaded)return setTimeout((function(){t.openLocker(),t.callback("openLocker",{})}),5),!1;this.iframe.setAttribute("src",this.urls.iframe),this.modalContainer.style.display="block",this.modal.className="",this.modal.style.display="block",void 0!==this.body&&(this.body.className+=" cpabuildBodyModalOpen"),setTimeout((function(){t.modal.className="cpabuildAnimation cpaBuildShow"}),50),setTimeout((function(){t.logImpression(),t.logGUID("opl")}),1e3)},closeLocker:function(){var t=this;this.modal.className="fadeOut",this.callback("closeLocker",{}),void 0!==this.body&&(this.body.className=this.body.className.replace(/\bcpabuildBodyModalOpen\b/,"")),setTimeout((function(){t.modal.style.display="none"}),550)},encode:function(t){var e="";for(i=0;i<t.length;i++){var n=117^t.charCodeAt(i);e+=String.fromCharCode(n)}return e},decode64:function(t){var e="";for(t=atob(t),i=0;i<t.length;i++){var n=117^t.charCodeAt(i);e+=String.fromCharCode(n)}return e},onSettingsAndHTMLLoaded(){1===parseInt(this.getValue("disable_right_click"))&&document.addEventListener("contextmenu",(t=>t.preventDefault())),1!==parseInt(this.getValue("escape_key_close"))&&1!==this.settings.testing&&!0!==this.settings.escapeOverwrite||(document.onkeydown=function(t){("key"in(t=t||window.event)?"Escape"===t.key||"Esc"===t.key:27===t.keyCode)&&this.closeLocker()})},onVarsChange:function(){var t=this;this.modalContainer=document.getElementById("CPABUILD_MODAL_CONTAINER"),this.modal=document.getElementById("CPABUILD_MODAL"),this.modalContent=document.getElementById("CPABUILDMODALCONTENT"),this.iframe=document.getElementById("CPABUILDOFFERS"),this.isXF()&&(this.modalContainer=document.getElementById("xf_MODAL_CONTAINER"),this.modal=document.getElementById("xf_MODAL"),this.modalContent=document.getElementById("xfMODALCONTENT"),this.iframe=document.getElementById("xfOFFERS")),this.modalContent.className=this.getValue("animation"),setTimeout((function(){t.isLoaded=!0}),500);var e=[];for(var i in t.defaultSettings)if(t.defaultSettings.hasOwnProperty(i)){var n=t.defaultSettings[i];if("object"==typeof n.css&&"html"==n.for){var s=t.getValue(i);"background-image"==n.css.rule&&s&&(s="url('"+s+"')"),s&&"string"==typeof n.css.format&&(s=n.css.format.replace("%value%",s)),s&&e.push({target:n.css.target,rule:n.css.rule,value:s})}}if(t.setCSSRules(e),void 0!==this.defaultSettings.content_locker_title_text&&(document.getElementById("CPABUILDMODALTITLE").innerHTML=t.getValue("content_locker_title_text"),this.isXF()&&(document.getElementById("xfMODALTITLE").innerHTML=t.getValue("content_locker_title_text"))),void 0!==this.defaultSettings.content_locker_footer_text&&(document.getElementById("CPABUILDMODALFOOTERTEXT").innerHTML=t.getValue("content_locker_footer_text"),this.isXF()&&(document.getElementById("xfMODALFOOTERTEXT").innerHTML=t.getValue("content_locker_footer_text"))),void 0!==this.defaultSettings.overlay_color&&void 0!==this.defaultSettings.overlay_opacity){var o=t.getValue("overlay_opacity"),r=t.getValue("overlay_color"),a=t.convertHex(r,o);document.getElementById("CPABUILDSettingsCSS").innerHTML+="#CPABUILD_MODAL_CONTAINER #CPABUILD_MODAL {background-color: "+a+" }",this.isXF()&&(document.getElementById("xfSettingsCSS").innerHTML+="#xf_MODAL_CONTAINER #xf_MODAL {background-color: "+a+" }")}this.isMobile&&(this.modalContainer.className+=" CPABUILD_MODAL_CONTAINER_MOBILE",this.isXF()&&(this.modalContainer.className+=" xf_MODAL_CONTAINER_MOBILE")),void 0!==this.userSettings.number_offers_required&&(this.requiredLeads=parseInt(this.userSettings.number_offers_required)),void 0!==this.userSettings.payout_required&&(this.requiredPoints=parseInt(this.userSettings.payout_required)),setTimeout((function(){t.checkLead()}),2e3),this.onSettingsAndHTMLLoaded()},getValue:function(t){return void 0===this.defaultSettings[t]?(this.log("ERROR - No default settings for key "+t),""):void 0!==this.userSettings[t]&&this.userSettings[t]?this.userSettings[t]:this.defaultSettings[t].default},changeHTML:function(t){document.getElementById("CPABUILDMODALBODY").innerHTML=t,this.isXF()&&(document.getElementById("xfMODALBODY").innerHTML=t)},isXF(){var t=document.getElementById("xf_MODAL_CONTAINER");return console.log("IS XF: ",!!t),!!t},setCSSRulesXF:function(t){var e=[],i="xfSettingsCSS";this.removeElByID(i),t.length>0&&t.map((function(t){var i="#xf_MODAL_CONTAINER "+t.target+"{"+t.rule+":"+t.value+"}";e.push(i)}));var n=parseInt(this.getValue("animation_duration")),s="#xf_MODAL_CONTAINER #xfMODALCONTENT{animation-duration: "+n+"ms;-webkit-transition: all "+n+"ms;transition: all "+n+"ms;transition-duration: "+n+"ms;}";e.push(s);var o=document.createElement("style");o.type="text/css",o.id=i,o.innerHTML=e.join("\n\n"),this.head.appendChild(o)},setCSSRules:function(t){if(this.isXF())return this.setCSSRulesXF(t);var e=[],i="CPABUILDSettingsCSS";this.removeElByID(i),t.length>0&&t.map((function(t){var i="#CPABUILD_MODAL_CONTAINER "+t.target+"{"+t.rule+":"+t.value+"}";e.push(i)}));var n=parseInt(this.getValue("animation_duration")),s="#CPABUILD_MODAL_CONTAINER #CPABUILDMODALCONTENT{animation-duration: "+n+"ms;-webkit-transition: all "+n+"ms;transition: all "+n+"ms;transition-duration: "+n+"ms;}";e.push(s);var o=document.createElement("style");o.type="text/css",o.id=i,o.innerHTML=e.join("\n\n"),this.head.appendChild(o)},removeElByID:function(t){var e=document.getElementById(t);e&&e.parentElement.removeChild(e)},reset:function(){this.removeElByID("CPABUILD_MODAL_CONTAINER"),CPABUILDContentLocker=new CPBContentLocker},addCompletions:function(t){if(!1===this.constructed)return!1;for(var e=t.length,i=!1,n=0;n<e;n++){var s=parseInt(t[n].visitor_id),o=parseInt(t[n].lead_id),r=parseInt(t[n].points);-1==this.completedLeads.indexOf(o)&&(this.visitor_id=s,i=!0,this.completedLeads.push(o),this.completedPoints+=r)}i&&this.checkComplete()},checkComplete:function(){this.completedLeads.length<this.requiredLeads?alert("Completed "+this.completedLeads.length+" out of "+this.requiredLeads+" offers!"):this.completedPoints<this.requiredPoints?alert("Completed "+this.completedPoints+" out of "+this.requiredPoints+" points!"):this.offersComplete({visitor_id:this.visitor_id,points:this.completedPoints,leads:this.completedLeads})},convertHex:function(t,e){return e=parseFloat(e),t=t.replace("#",""),"rgba("+parseInt(t.substring(0,2),16)+","+parseInt(t.substring(2,4),16)+","+parseInt(t.substring(4,6),16)+","+e+")"},offersComplete:function(t){var e,i=this.getValue("onClose");if("function"==typeof this.settings.onComplete&&!1===this.settings.onComplete(t))return!1;return"function"==typeof CPABuildComplete&&CPABuildComplete(),void 0!==this.settings.redirect?(e=this.settings.redirect,window.location=e,this.changeHTML("Offer complete! <a href='"+e+"'>Click here</a> to continue"),!1):"close_locker"===i?(this.closeLocker(),!1):"redirect"===i?(e=(e=(e=this.getValue("onCloseURL")).replace("%lead_id%",this.completedLeads[0])).replace("%visitor_id%",this.visitor_id),window.location=e,this.changeHTML("Offer complete! <a href='"+e+"'>Click here</a> to continue"),!1):void this.callback("offersComplete",{})},getIframeHTML:function(){return'<iframe src="'+this.urls.iframeOnly+'" height="100%" marginwidth="0" marginheight="0" align="middle" frameborder="0" width="100%" ></iframe>'},setParamsFromSettings:function(){var t,e;if("object"==typeof this.settings.params)for(t in this.settings.params){var i=this.settings.params[t];this.setParam(t,i)}for(e=1;e<=4;e++){var n="s"+e;if(!this.extraParams[n]){var s=this.getQueryParam(n);""!==s&&(this.extraParams[n]=s)}}},getParamString:function(t){var e,i=[];for(e=0;e<t.length;e++){var n=t[e],s=this.optionalParameters[n];i.push(n+"="+s)}return i.join("&")},setURLS:function(){var t="https://"+this.d3+"/public/",e=this.paramsToQuery(this.extraParams);return this.urls.iframe=t+"ct?"+e+"&"+this.getParamString(["it","w","h","key","m","r"]),this.urls.feed=t+"f_it?"+e+"&"+this.getParamString(["it","w","h","key","m","callback"]),this.urls.iframeOnly=t+"i_fr?"+e+"&"+this.getParamString(["it","w","h","key","m","r"]),this.urls.js=t+"external/v2/"+(!0===this.settings.preview?"preview":"html")+"."+this.settings.it+"."+this.settings.key+"."+this.optionalParameters.m+".js"+(!0===this.settings.preview?"?t="+(new Date).getTime():""),this.urls.css=t+"external/css_front.css",this.urls.specific_css=t+"clockers/",this.urls.check=t+"external/check.php?"+this.getParamString(["it"])+"&time=",this.urls.impression=t+"external/impression.php?"+this.getParamString(["it"])+"&time=",this.urls.guid=t+"guid?"+e+"&e=",this},setTemplateCSSDir:function(t){var e=this.urls.specific_css+t+"/css.css",i=document.createElement("link");i.setAttribute("data-it",this.settings.it),i.rel="stylesheet",i.id="CPABUILDSPECIFICSTYLE",i.href=e,document.getElementsByTagName("head")[0].appendChild(i)},setCookie:function(t,e,i){var n="";if(i){var s=new Date;s.setTime(s.getTime()+24*i*60*60*1e3),n="; expires="+s.toUTCString()}document.cookie=t+"="+(e||"")+n+"; path=/"},getCookie:function(t){for(var e=t+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var s=i[n];" "==s.charAt(0);)s=s.substring(1,s.length);if(0==s.indexOf(e))return s.substring(e.length,s.length)}return null}},CPABUILDContentLocker=new CPBContentLocker;