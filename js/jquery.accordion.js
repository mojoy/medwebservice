jQuery(function(){initAccordion();});function initAccordion(){jQuery('ul.list-clinics').slideAccordion({opener:'>div.box-heading>a.btn-open',slider:'>div.slade',collapsible:true,animSpeed:300});jQuery('ul.multilevel-accordion').slideAccordion({opener:'>a.opener',slider:'>div.slide',collapsible:true,animSpeed:300});};(function($){$.fn.slideAccordion=function(o){var options=$.extend({addClassBeforeAnimation:false,activeClass:'active',opener:'.opener',slider:'.slide',animSpeed:300,collapsible:true,event:'click'},o);return this.each(function(){var accordion=$(this);var items=accordion.find(':has('+options.slider+')');items.each(function(){var item=$(this);var opener=item.find(options.opener);var slider=item.find(options.slider);opener.bind(options.event,function(){if(!slider.is(':animated')){if(item.hasClass(options.activeClass)){if(options.collapsible){slider.slideUp(options.animSpeed,function(){item.removeClass(options.activeClass);});}}else{var _levelItems=item.siblings('.'+options.activeClass);item.addClass(options.activeClass);slider.slideDown(options.animSpeed);_levelItems.find(options.slider).slideUp(options.animSpeed,function(){_levelItems.removeClass(options.activeClass);})}}return false;});if(item.hasClass(options.activeClass))slider.show();else slider.hide();});});}}(jQuery));