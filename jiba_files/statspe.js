define("sjs/matrix/ad/statspe",["sjs/matrix/ad/config"],function(i){var e=i._db;return{get:function(i,n){if(i){var t="string"==typeof i?e["URL_"+i.toUpperCase()+"_STAT"]||i.split("|"):i,a=n?this.param(this.build(n)):"";if(void 0!=a.match(/[a-z]*\_[0-9]*\_[0-9]*/g)){var r=a.match(/[a-z]*\_[0-9]*\_[0-9]*/g)[0],o=a.match(/[a-z]{5}\_[0-9]*/g)[0];a=a.replace(r,o)}for(var c=0;c<t.length;c++){var s="="+Math.random(),m=window["_IMG"+s]=new Image;m.onload=m.onerror=function(){m=null,window["_IMG"+s]=null},m.src=t[c]+a+"&timestamp="+(new Date).getTime(),setTimeout(function(){},1e3)}}},build:function(i){var n=function(e){return void 0!==i[e]?i[e]:""};"/test2018/index.shtml"===window.location.pathname||"http://2018.sohu.com/"===window.location.href?window.CONFIG.PAGEID="home":"/qiuduitest2018/index.shtml"===window.location.pathname||["2018russia","2018saudiarabia","2018egypt","2018uruguay","2018portugal","2018spain","2018morocco","2018iran","2018france","2018iceland","2018peru","2018denmark","2018argentina","2018iceland","2018croatia","2018nigeria","2018brazil","2018switzerland","2018costarica","2018serbia","2018germany","2018mexico","2018sweden","2018korearepublic","2018belgium","2018panama","2018tunisia","2018england","2018poland","2018senegal","2018colombia","2018japan"].some(function(i){return window.location.href.indexOf(i)>-1})?window.CONFIG.PAGEID="team":"/pictest2018/index.shtml"!==window.location.pathname&&"/2018pictures/"!==window.location.pathname||(window.CONFIG.PAGEID="pic");var t="";return/^\/classic/i.test(window.location.pathname)&&(t=1),{aid:n("adid"),apid:n("cont_id"),impid:n("impression_id"),at:n("adtype"),mkey:n("monitorkey"),latcy:n("latency"),freq:n("freq"),turn:n("turn"),ax:n("x"),ay:n("y"),cx:n("cx"),cy:n("cy"),ed:n("ed"),bucket:n("bucket"),ext:n("ext"),uloc:n("uloc"),supplyid:n("supplyid")||1,shbd_monitor_ext:n("shbd_monitor_ext"),rsln:e.RSLN,sf:e.SWF,pgid:window.CONFIG?window.CONFIG.PAGEID:"",newschn:window.CONFIG.CHANNELID?window.CONFIG.CHANNELID:allnewschn,r:(Math.random()+"").substring(2,15),newm:t}},param:function(i){var e="";for(var n in i)e+="&"+n+"="+i[n];return e.replace("&","?")},get_url:function(i,n){if(e["URL_"+i+"_STAT"]&&n){var t=this.build(n);return t=this.param(t),e["URL_"+i+"_STAT"][0]+t}},ad_plus_pv:function(i){var e=i;if(e.resource.imp)for(var n=0;n<e.resource.imp.length;n++)(e.resource.imp[n].match(/imp/)||e.resource.imp[n].match(/clk/))&&-1===e.resource.imp[n].indexOf("?")?this.get(e.resource.imp[n]+"?apid="+e.cont_id+"&impid="+e.impression_id):e.resource.imp[n].match(/clk/)&&-1!==e.resource.imp[n].indexOf("?")?this.get(e.resource.imp[n]+"&apid="+e.cont_id+"&impid="+e.impression_id):this.get(e.resource.imp[n]);else if(e.imp)for(n=0;n<e.imp[n].length;n++)(e.resource.imp[n].match(/imp/)||e.resource.imp[n].match(/clk/))&&-1==e.resource.imp[n].indexOf("?")?this.get(e.imp[n]+"?apid="+e.cont_id+"&impid="+e.impression_id):(e.imp[n].match(/imp/)||e.resource.imp[n].match(/clk/))&&-1!=e.resource.imp[n].indexOf("?")?this.get(e.imp[n]+"&apid="+e.cont_id+"&impid="+e.impression_id):this.get(e.resource.imp[n])}}});