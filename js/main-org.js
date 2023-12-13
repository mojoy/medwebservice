/*
 jQuery Masked Input Plugin
 Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.4.1
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});






// page init
jQuery(function(){
    initFixLayout();
});


function initFixLayout(){
    $('table tr:nth-child(2n)').addClass('even');
    $('table thead th:nth-child(1)').addClass('first-child');
    $('.clinic-price li:nth-child(2n)').addClass('even');

};

$(function(){
    var arr = [2,3,6,7,10,11,14,15,18,19,22,23];
    $("ul.topics-discussed li").each(function(){

        var idx = $(this).index();

        if (arr.indexOf(idx + 1) != -1) {
            $(this).addClass('two-col');
        }
    })
});

$(document).ready(function(){



    $(".award-scroll .gallery-icon a").attr('data-fancybox','award');
    $("[data-fancybox]").fancybox({
        loop     : true,
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });

    $('.expert-content').prepend($('.box-expert'));

    $('.btn-off').addClass('btn-off-active');

    $(document).on('click', ".btn-on", function(e){
        $('.shine').addClass('light');
        $('.btn-off').removeClass('btn-off-active');
        $('.btn-on').addClass('btn-on-active');
    });

    $(document).on('click', ".btn-off", function(e){
        $('.shine').removeClass('light');
        $('.btn-on').removeClass('btn-on-active');
        $('.btn-off').addClass('btn-off-active');
    });

    $(document).on('click', ".caret", function(e){
        e.preventDefault();
        if ($(this).parent().parent().hasClass('dropdown-menu-open')) {
            $(this).parent().parent().removeClass('dropdown-menu-open');
        }
        else {
            $(this).parent().parent().addClass('dropdown-menu-open');
        }
        return false;
    });
    if ($(document).width() < 1050) {
        $('.menu-glavnoe-menyu-container').attr("style","height:"+($(window).height() - $(".header-phablet").outerHeight())+"px;");
        $(window).resize(function() {
            $('.menu-glavnoe-menyu-container').attr("style","height:"+($(window).height() - $(".header-phablet").outerHeight())+"px;");
        });
    }



    $('.ask-a-question').attr("style","width:"+($('.ask-a-question').width())+"px;");
    $(window).resize(function() {
        $('.ask-a-question').attr("style","width:"+($('.ask-a-question').width())+"px;");
    });
    var navbar =  $('.ask-a-question');  // navigation block
    var wrapper = $('.content');        // may be: navbar.parent();

    $(window).scroll(function(){
        var nsc = $(document).scrollTop();
        var bp1 = wrapper.offset().top;
        var bp2 = bp1 + wrapper.outerHeight()-$(window).height();

        if (nsc>bp1) {  navbar.css('position','fixed'); }
        else { navbar.css('position','absolute'); }
        if (nsc>bp2) { navbar.css('top', bp2-nsc); }
        else { navbar.css('top', '0'); }
    });


    var box_categories =  $('.add-box-categories');  // navigation block
    var wrappercontent = $('.content');        // may be: navbar.parent();

    $(window).scroll(function(){
        var nsc = $(document).scrollTop();
        var bp1 = wrappercontent.offset().top;
        var bp2 = bp1 + wrappercontent.outerHeight()-$(window).height();

        if (nsc>bp1) {
            //box_categories.css('position','fixed').css('z-index','10');
            box_categories.addClass('fix-add-box-categories');
        }
        else {
            //box_categories.css('position','static');
            box_categories.removeClass('fix-add-box-categories');
        }
        /*
        if (nsc>bp2) {
            box_categories.css('top', bp2-nsc);
        }
        else {
            box_categories.css('top', '15px');
        }*/
    });

	$('table tr:nth-child(2n)').addClass('even');
    $('table thead th:nth-child(1)').addClass('first-child');
    $('.types-services ul li:nth-child(2n)').addClass('even');
	if ($(document).width() < 440) {
		$(".content .gallery-scroll li").attr("style", "width:" + $(".gallery-scroll-holder").width() + "px");
		 $(window).resize(function(){
            $(".content .gallery-scroll li").attr("style", "width:" + $(".gallery-scroll-holder").width() + "px");
        }).resize();

		$(".item-reviews .item-holder .item").attr("style", "width:" + $(".reviews-holder").width() + "px");
		 $(window).resize(function(){
            $(".item-reviews .item-holder .item").attr("style", "width:" + $(".reviews-holder").width() + "px");
        }).resize();
	}

    if ($(document).width() < 750) {
        $(".aside .ask-a-question").prependTo($('.col-text'));
    }
    $(window).resize(function(){
        if ($(document).width() < 750) {
            $(".aside .ask-a-question").prependTo($('.col-text'));
        }
    });

	if ($(document).width() > 751) {
        $(".col-text .ask-a-question").prependTo($('.aside'));
    }
    $(window).resize(function(){
        if ($(document).width() > 751) {
            $(".col-text .ask-a-question").prependTo($('.aside'));
        }
    });

	$(document).scroll(function(){
        if ($(document).scrollTop()) {
            $(".header").addClass("header-content-scroll");
        }
        else {
            $(".header").removeClass("header-content-scroll");
        }
	});

    $(function($){
        $("#dwqa_question_user_phone").mask("+9 (999) 999-99-99");
    });

	$(document).on('click', ".btn-menu-open", function(e){
        e.preventDefault();
        if ($('.add-menu-holder').hasClass('add-menu-open')) {
            $('.add-menu-holder').removeClass('add-menu-open');
			$('.btn-menu-open').removeClass('btn-menu-open-active');
            $('html').removeClass('no-scroll');
			$('.ovellay').removeClass('ovellay-active');
        }
        else {
            $("html").addClass('no-scroll');
            $('.add-menu-holder').addClass('add-menu-open');
			$('.btn-menu-open').addClass('btn-menu-open-active');
			$('.box-social').removeClass('box-social-open');
			$('.btn-share').removeClass('btn-share-active');
			$('.ovellay').addClass('ovellay-active');
        }
        return false;
    });

	$(document).on('click', ".btn-share", function(e){
        e.preventDefault();
        if ($('.box-social').hasClass('box-social-open')) {
            $('.box-social').removeClass('box-social-open');
			$('.btn-share').removeClass('btn-share-active');


            $('html').removeClass('no-scroll');
			$('.ovellay').removeClass('ovellay-active');
        }
        else {
            $("html").addClass('no-scroll');
            $('.box-social').addClass('box-social-open');
			$('.btn-share').addClass('btn-share-active');

			$('.add-menu-holder').removeClass('add-menu-open');
			$('.btn-menu-open').removeClass('btn-menu-open-active');
            $('.ovellay').addClass('ovellay-active');
        }
        return false;
    });

	$(document).on('click', ".ovellay", function(e) {
		$('.add-menu-holder').removeClass('add-menu-open');
		$('.btn-menu-open').removeClass('btn-menu-open-active');
		$('.btn-share').removeClass('btn-share-active');
		$('.box-social').removeClass('box-social-open');
		$('.ovellay').removeClass('ovellay-active');
		$('html').removeClass('no-scroll');
	});

    $(".gallery-slideshow .flex-prev").attr("style", "top:" + ($(".gallery img").height())/2 + "px");
	$(".gallery-slideshow .flex-next").attr("style", "top:" + ($(".gallery img").height())/2 + "px");
    $(window).resize(function(){
        $(".gallery-slideshow .flex-prev").attr("style", "top:" + ($(".gallery img").height())/2 + "px");
		$(".gallery-slideshow .flex-next").attr("style", "top:" + ($(".gallery img").height())/2 + "px");
    }).resize();

	$(".gallery2 .preview li").attr("style", "width:" + $(".preview").width() + "px");
	$(window).resize(function(){
        $(".gallery2 .preview li").attr("style", "width:" + $(".preview").width() + "px");
    }).resize();

    $(function () {
        var parent = $(".item-holder-random");
        var divs = parent.children();
        while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    });



	$('input,textarea').focus(function(){
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder', $(this).data('placeholder'));
    });

});


// By Chris Coyier & tweaked by Mathias Bynens
$(function(){
    // Find all YouTube videos
    var $allVideos = $("iframe[src^='https://www.youtube.com']"),
	// The element that is fluid width
    $fluidEl = $("div.video-holder");
     // Figure out and save aspect ratio for each video
    $allVideos.each(function(){
       $(this).data('aspectRatio', this.height / this.width)
		// and remove the hard coded width/height
        .removeAttr('height').removeAttr('width');

    });
    // When the window is resized
    // (You'll probably want to debounce this)
    $(window).resize(function(){
        var newWidth = $fluidEl.width();
        // Resize all videos according to their own aspect ratio
			$allVideos.each(function(){
				var $el = $(this);
				if ($(document).width() <= 1000)
					$el.width(newWidth).height(newWidth * $el.data('aspectRatio'));
				else{
					$el.width(newWidth).height(newWidth * $el.data('aspectRatio'));
				}
			});
        // Kick off one resize to fix all videos on page load
    }).resize();
});