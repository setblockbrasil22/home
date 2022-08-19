/*
 * Note that this is toastr v2.1.3, the "latest" version in url has no more maintenance,
 * please go to https://cdnjs.com/libraries/toastr.js and pick a certain version you want to use,
 * make sure you copy the url from the website since the url may change between versions.
 * */
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=d(t)),v)}function o(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function s(e){C=e}function i(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var o=m();v||n(o),u(e,o,t)||l(o)}function c(t){var o=m();return v||n(o),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function l(t){for(var n=v.children(),o=n.length-1;o>=0;o--)u(e(n[o]),t)}function u(t,n,o){var s=!(!o||!o.force)&&o.force;return!(!t||!s&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0)}function d(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){C&&C(e)}function g(t){function o(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(){c(),u(),d(),p(),g(),C(),l(),i()}function i(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}I.attr("aria-live",e)}function a(){E.closeOnHover&&I.hover(H,D),!E.onclick&&E.tapToDismiss&&I.click(b),E.closeButton&&j&&j.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(e),b(!0)}),E.onclick&&I.click(function(e){E.onclick(e),b()})}function r(){I.hide(),I[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(k=setTimeout(b,E.timeOut),F.maxHideTime=parseFloat(E.timeOut),F.hideEta=(new Date).getTime()+F.maxHideTime,E.progressBar&&(F.intervalId=setInterval(x,10)))}function c(){t.iconClass&&I.addClass(E.toastClass).addClass(y)}function l(){E.newestOnTop?v.prepend(I):v.append(I)}function u(){if(t.title){var e=t.title;E.escapeHtml&&(e=o(t.title)),M.append(e).addClass(E.titleClass),I.append(M)}}function d(){if(t.message){var e=t.message;E.escapeHtml&&(e=o(t.message)),B.append(e).addClass(E.messageClass),I.append(B)}}function p(){E.closeButton&&(j.addClass(E.closeClass).attr("role","button"),I.prepend(j))}function g(){E.progressBar&&(q.addClass(E.progressClass),I.prepend(q))}function C(){E.rtl&&I.addClass("rtl")}function O(e,t){if(e.preventDuplicates){if(t.message===w)return!0;w=t.message}return!1}function b(t){var n=t&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,o=t&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,s=t&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;if(!e(":focus",I).length||t)return clearTimeout(F.intervalId),I[n]({duration:o,easing:s,complete:function(){h(I),clearTimeout(k),E.onHidden&&"hidden"!==P.state&&E.onHidden(),P.state="hidden",P.endTime=new Date,f(P)}})}function D(){(E.timeOut>0||E.extendedTimeOut>0)&&(k=setTimeout(b,E.extendedTimeOut),F.maxHideTime=parseFloat(E.extendedTimeOut),F.hideEta=(new Date).getTime()+F.maxHideTime)}function H(){clearTimeout(k),F.hideEta=0,I.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function x(){var e=(F.hideEta-(new Date).getTime())/F.maxHideTime*100;q.width(e+"%")}var E=m(),y=t.iconClass||E.iconClass;if("undefined"!=typeof t.optionsOverride&&(E=e.extend(E,t.optionsOverride),y=t.optionsOverride.iconClass||y),!O(E,t)){T++,v=n(E,!0);var k=null,I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),q=e("<div/>"),j=e(E.closeHtml),F={intervalId:null,hideEta:null,maxHideTime:null},P={toastId:T,state:"visible",startTime:new Date,options:E,map:t};return s(),r(),a(),f(P),E.debug&&console&&console.log(P),I}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),w=void 0))}var v,C,w,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:o,options:{},subscribe:s,success:i,version:"2.1.3",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
//# sourceMappingURL=toastr.js.map


var Base={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",setD:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},getD:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};

function scrollToAnchor(aid) {
    var aTag = $("a[id='" + aid + "']");
    $('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
}

/*
 * Variaveis
 */

// Nome do produto, sempre sem espa�os e caracteres especiais
var nomeProduto = 'SetBlock';

// Menu acompanhar a p�gina. Sim - 1, N�o - 0
var menuPage = '0';

// Bloquear bot�o direito, Ctrl+s, Ctrl+u, F12. Sim - 1, N�o - 0
var blockAll = '0';

/*NOTIFICACOES*/
// 1 - usar, 0 - n�o usar
var usarNotificacoes = '1';
// link do site + #ofertas
var linkComprar = '#comprar';
// lado da tela para aparecer. Direita - right, Esquerda - left
var ladoNotificacoes = 'bottom-left';

var acessoC = ['QWxpY2U=','TWlndWVs','U29waGlh','QXJ0aHVy','SGVsZW5h','QmVuYXJkbw==','VmFsZW50aW5h','SGVpdG9y','TGF1cmE=','RGF2aQ==','SXNhYmVsbGE=','TG9yZW56bw==','TWFudWVsYQ==','VGjDqW8=','SsO6bGlh','UGVkcm8=','SGVsb8Otc2E=','R2FicmllbA==','THVpemE=','RW56bw==','TWFyaWEgTHVpemE=','TWF0aGV1cw==','TG9yZW5h','THVjYXM=','TMOtdmlh','QmVuamFtaW4=','R2lvdmFubmE=','Tmljb2xhcw==','TWFyaWEgRWR1YXJkYQ==','R3VpbGhlcm1l','QmVhdHJpeg==','UmFmYWVs','TWFyaWEgQ2xhcmE=','Sm9hcXVpbQ==','Q2Vjw61saWE=','U2FtdWVs','RWxvw6E=','RW56byBHYWJyaWVs','TGFyYQ==','Sm/Do28gTWlndWVs','TWFyaWEgSsO6bGlh','SGVucmlxdWU=','SXNhZG9yYQ==','R3VzdGF2bw==','TWFyaWFuYQ==','TXVyaWxv','RW1hbnVlbGx5','UGVkcm8gSGVucmlxdWU=','QW5hIErDumxpYQ==','UGlldHJv','QW5hIEx1aXph','THVjY2E=','QW5hIENsYXJh','RmVsaXBl','TWVsaXNzYQ==','Sm/Do28gUGVkcm8=','WWFzbWlu','SXNhYWM=','TWFyaWEgQWxpY2U=','QmVuw61jaW8=','SXNhYmVsbHk=','RGFuaWVs','TGF2w61uaWE=','QW50aG9ueQ==','RXN0aGVy','TGVvbmFyZG8=','U2FyYWg=','RGF2aSBMdWNjYQ==','RWxpc2E=','QnJ5YW4=','QW50b25lbGxh','RWR1YXJkbw==','UmFmYWVsYQ==','Sm/Do28gTHVjYXM=','TWFyaWEgQ2Vjw61saWE=','VmljdG9y','TGl6','Sm/Do28=','TWFyaW5h','Q2F1w6M=','Tmljb2xl','QW50w7RuaW8=','TWFpdMOq','VmljZW50ZQ==','SXNpcw==','Q2FsZWI=','QWzDrWNpYQ==','R2FlbA==','THVuYQ==','QmVudG8=','UmViZWNh','Q2Fpbw==','QWdhdGhh','RW1hbnVlbA==','TGV0w61jaWE=','Vmluw61jaXVz','TWFyaWE=','Sm/Do28gR3VpbGhlcm1l','R2FicmllbGE=','RGF2aSBMdWNhcw==','QW5hIExhdXJh','Tm9haA==','Q2F0YXJpbmE=','Sm/Do28gR2FicmllbA==','Q2xhcmE=','Sm/Do28gVmljdG9y','QW5hIEJlYXRyaXo=','THVpeiBNaWd1ZWw=','Vml0w7NyaWE=','RnJhbmNpc2Nv','T2zDrXZpYQ==','S2FpcXVl','TWFyaWEgRmVuYW5kYQ==','T3TDoXZpbw==','RW1pbGx5','QXVndXN0bw==','TWFyaWEgVmFsZW50aW5h','TGV2aQ==','TWlsZW5h','WXVyaQ==','TWFyaWEgSGVsZW5h','RW5yaWNv','QmlhbmNh','VGhpYWdv','TGFyaXNzYQ==','SWFu','TWlyZWxsYQ==','VmljdG9yIEh1Z28=','TWFyaWEgRmxvcg==','VGhvbWFz','QWxsYW5h','SGVucnk=','QW5hIFNvcGhpYQ==','THVpeiBGZWxpcGU=','Q2xhcmljZQ==','Unlhbg==','UGlldHJh','QXJ0aHVyIE1pZ3VlbA==','TWFyaWEgVml0w7NyaWE=','RGF2aSBMdWl6','TWF5YQ==','TmF0aGFu','TGHDrXM=','UGVkcm8gTHVjYXM=','QXlsYQ==','RGF2aSBNaWd1ZWw=','QW5hIEzDrXZpYQ==','UmF1bA==','RWR1YXJkYQ==','UGVkcm8gTWlndWVs','THVpeg==','SGVucmlxdWU=','U3RlbGxh','THVhbg==','QW5h','RXJpY2s=','R2FicmllbGx5','TWFydGlu','U29waGll','QnJ1bm8=','Q2Fyb2xpbmE=','Um9kcmlnbw==','TWFyaWEgTGF1cmE=','THVpeiBHdXN0YXZv','TWFyaWEgSGVsb8Otc2E=','QXJ0aHVyIEdhYnJpZWw=','TWFyaWEgU29waGlh','QnJlbm8=','RmVuYW5kYQ==','S2F1w6o=','TWFsdQ==','RW56byBNaWd1ZWw=','QW5hbHU=','RmVuYW5kbw==','QW1hbmRh','QXJ0aHVyIEhlbnJpcXVl','QXVyb3Jh','THVpeiBPdMOhdmlv','TWFyaWEgSXNpcw==','Q2FybG9zIEVkdWFyZG8=','TG91aXNl','VG9tw6Fz','SGVsb2lzZQ==','THVjYXM=','R2FicmllbA==','QW5hIFZpdMOzcmlh','QW5kcsOp','QW5hIENlY8OtbGlh','Sm9zw6k=','QW5hIExpeg==','WWFnbw==','Sm9hbmE=','RGFuaWxv','THVhbmE=','QW50aG9ueSBHYWJyaWVs','QW50w7RuaWE=','UnVhbg==','SXNhYmVs','TWlndWVsIEhlbnJpcXVl','QnJ1bmE=','T2xpdmVy'];

/*CONTADOR*/
// Valor padrao de 0 dias 2 horas 30 minutos 0 segundos
var day = 0,
    hour = 0,
    minute = 59,
    seconds = 59;
// Manter valores do contador ao recarregar a pagina. Sim - 1, N�o - 0
var everGreen = '1';
// Ao contador terminar, exibir uma mensagem. Sim - 1, N�o - 0
var usarMsgContador = '1',
    msgContador = 'Promo��o Expirada!';
/*CONTADOR*/

// Direcionar para https. Sim - 1, N�o - 0
var https = '0',
    linkHttps = '';

// Redirecionamento ao clicar em voltar. Sim - 1, N�o - 0
var redirect = '0',
    linkAtual = '',
    linkRedirect = '';

// Redirecionamento ao confirmar o nao fechamento da pagina. Sim - 1, N�o - 0
var redirectClose = '0',
    redirectLinkClose = '';

var timerT = 1000;

// begin JS Geral
$(document).ready(function () {
    $('.perguntas .pergunta').click(function(){
        fechar = true;
        console.log('Entrou');

        if($(this).hasClass('ativo')) {
            var fechar = false;
        }
        $('.perguntas .pergunta .resposta').slideUp();
        $('.perguntas .pergunta').removeClass('ativo');
        if(fechar) {
            $(this).find('.resposta').slideDown();
            $(this).addClass('ativo');
        }


    });

    var qtd = Math.floor((Math.random() * 20) + 1);
    if (qtd < 5)qtd = 5;
    acessoC = shuffle(acessoC);
    if (usarNotificacoes == '1') {
        if ($('.test-mobile').css('display') == 'block') {
            setTimeout(function () {
                toastr.info('<a href="' + linkComprar + '">Clique e garanta o seu também!</a>', qtd + ' novas pessoas compraram nos últimos 30min.', {
                    timeOut: 10000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Restam apenas 11 unidades!</a>', Base.getD(acessoC[0]) + ' acabou de comprar 3 unidades.', {
                    timeOut: 15000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*20);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Restam apenas 10 unidades!</a>', Base.getD(acessoC[1]) + ' acabou de comprar ' + nomeProduto + '.', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*57);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Restam apenas 07 unidades!</a>', Base.getD(acessoC[2]) + ' acabou de comprar 3 unidades.', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*100);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Garanta o seu também!</a>', Base.getD(acessoC[3]) + ' acabou de comprar ' + nomeProduto + ' na promoção.', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*200);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Corra e aproveite a promoção!</a>', Base.getD(acessoC[4]) + ' acabou de comprar ' + nomeProduto + '.', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*300);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Últimas unidades disponíveis!</a>', Base.getD(acessoC[5]) + ' está comprando agora ' + nomeProduto + '', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*350);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">Últimas unidades disponíveis!</a>', Base.getD(acessoC[6]) + ' acabou de comprar ' + nomeProduto + '.', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*450);
            setTimeout(function () {
                toastr.info('<a href="' + linkComprar + '">Últimas unidades disponíveis!</a>', qtd + 9 + ' novas pessoas compraram nos últimos 30min.', {
                    timeOut: 20000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*600);
            setTimeout(function () {
                toastr.success('<a href="' + linkComprar + '">O Estoque está esgotando!</a>', Base.getD(acessoC[7]) + ' acabou de comprar ' + nomeProduto + ' na promoção.', {
                    timeOut: 5000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*620);
            setTimeout(function () {
                toastr.info('<a href="' + linkComprar + '">Últimas unidades disponíveis!</a>', qtd + 11 + ' novas pessoas compraram nos últimos 30min.', {
                    timeOut: 20000,
                    positionClass: "toast-" + ladoNotificacoes,
                })
            }, timerT*1200)
        }
    }
});

function openModalKit(kit) {
    $(".modal-kit-" + kit).addClass("is-active");
}

function closeModalKit(kit) {
    $(".modal-kit-" + kit).removeClass("is-active");
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue
    }
    return array
}