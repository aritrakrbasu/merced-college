$(document).ready(function(){
  var slides=$('.custom-slide').length;
  var active=1;
  autoplay();
  function autoplay(){

    $('.active-slide').removeClass('active-slide');
    $('.active-caption').removeClass('active-caption');
    $('.active-button').removeClass('active-button');
    active=(active==slides) ? 1 : active+1;
    $('.custom-slide'+active).addClass('active-slide');
    setTimeout(function(){
      $('.active-slide').find('h1,h3').addClass('active-caption');
      $('.active-slide').find('.button').addClass('active-button');
    },500)
    setTimeout(function(){autoplay();},5000)

  }
});

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 200) {
	    $(".top-slim").css("display" , "none");
		$("header").css("box-shadow" , "1px 1px 3px #ddd");	
		$(".logo img").css("width" , "65px");	
		$("#cssmenu>ul>li>a").css("padding" , "20px 0px");	
	    $(".logo img").css("margin-top" , "-20px");
		
	  }

	  else{

			$("header").css("box-shadow" , "1px 1px 3px transparent");		
			$(".top-slim").css("display" , "block");			
		    $(".logo img").css("width" , "100px");		
			$("#cssmenu>ul>li>a").css("padding" , "50px 0px");	  
			$(".logo img").css("margin-top" , "0px");	  
			
	  }
  })
})
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(function() {
  $('#example').vTicker();
});
(function(d){var g,c,f;g={speed:700,pause:4E3,showItems:1,mousePause:!0,height:0,animate:!0,margin:0,padding:0,startPaused:!1,autoAppend:!0};c={moveUp:function(a,b){return c.showNextItem(a,b,"up")},moveDown:function(a,b){return c.showNextItem(a,b,"down")},nextItemState:function(a,b){var e,c;c=a.element.children("ul");e=a.itemHeight;0<a.options.height&&(e=c.children("li:first").height());e+=a.options.margin+2*a.options.padding;return{height:e,options:a.options,el:a.element,obj:c,selector:"up"===b?
"li:first":"li:last",dir:b}},showNextItem:function(a,b,e){var d;d=c.nextItemState(a,e);d.el.trigger("vticker.beforeTick");e=d.obj.children(d.selector).clone(!0);"down"===d.dir&&d.obj.css("top","-"+d.height+"px").prepend(e);b&&b.animate?a.animating||c.animateNextItem(d,a):c.nonAnimatedNextItem(d);"up"===d.dir&&a.options.autoAppend&&e.appendTo(d.obj);return d.el.trigger("vticker.afterTick")},animateNextItem:function(a,b){b.animating=!0;return a.obj.animate("up"===a.dir?{top:"-="+a.height+"px"}:{top:0},
b.options.speed,function(){d(a.obj).children(a.selector).remove();d(a.obj).css("top","0px");return b.animating=!1})},nonAnimatedNextItem:function(a){a.obj.children(a.selector).remove();return a.obj.css("top","0px")},nextUsePause:function(){var a,b;b=d(this).data("state");a=b.options;if(!b.isPaused&&!c.hasSingleItem(b))return f.next.call(this,{animate:a.animate})},startInterval:function(){var a,b;b=d(this).data("state");a=b.options;return b.intervalId=setInterval(function(a){return function(){return c.nextUsePause.call(a)}}(this),
a.pause)},stopInterval:function(){var a;if(a=d(this).data("state"))return a.intervalId&&clearInterval(a.intervalId),a.intervalId=void 0},restartInterval:function(){c.stopInterval.call(this);return c.startInterval.call(this)},getState:function(a,b){var c;if(!(c=d(b).data("state")))throw Error("vTicker: No state available from "+a);return c},isAnimatingOrSingleItem:function(a){return a.animating||this.hasSingleItem(a)},hasMultipleItems:function(a){return 1<a.itemCount},hasSingleItem:function(a){return!c.hasMultipleItems(a)},
bindMousePausing:function(a){return function(a,e){return a.bind("mouseenter",function(){if(!e.isPaused)return e.pausedByCode=!0,c.stopInterval.call(this),f.pause.call(this,!0)}).bind("mouseleave",function(){if(!e.isPaused||e.pausedByCode)return e.pausedByCode=!1,f.pause.call(this,!1),c.startInterval.call(this)})}}(this),setItemLayout:function(a,b,c){var f;a.css({overflow:"hidden",position:"relative"}).children("ul").css({position:"absolute",margin:0,padding:0}).children("li").css({margin:c.margin,
padding:c.padding});return isNaN(c.height)||0===c.height?(a.children("ul").children("li").each(function(){if(d(this).height()>b.itemHeight)return b.itemHeight=d(this).height()}),a.children("ul").children("li").each(function(){return d(this).height(b.itemHeight)}),f=c.margin+2*c.padding,a.height((b.itemHeight+f)*c.showItems+c.margin)):a.height(c.height)},defaultStateAttribs:function(a,b){return{itemCount:a.children("ul").children("li").length,itemHeight:0,itemMargin:0,element:a,animating:!1,options:b,
isPaused:b.startPaused,pausedByCode:!1}}};f={init:function(a){var b,e;d(this).data("state")&&f.stop.call(this);b=jQuery.extend({},g);a=d.extend(b,a);b=d(this);e=c.defaultStateAttribs(b,a);d(this).data("state",e);c.setItemLayout(b,e,a);a.startPaused||c.startInterval.call(this);if(a.mousePause)return c.bindMousePausing(b,e)},pause:function(a){var b;b=c.getState("pause",this);if(!c.hasMultipleItems(b))return!1;b.isPaused=a;b=b.element;if(a)return d(this).addClass("paused"),b.trigger("vticker.pause");
d(this).removeClass("paused");return b.trigger("vticker.resume")},next:function(a){var b;b=c.getState("next",this);if(c.isAnimatingOrSingleItem(b))return!1;c.restartInterval.call(this);return c.moveUp(b,a)},prev:function(a){var b;b=c.getState("prev",this);if(c.isAnimatingOrSingleItem(b))return!1;c.restartInterval.call(this);return c.moveDown(b,a)},stop:function(){c.getState("stop",this);return c.stopInterval.call(this)},remove:function(){var a;a=c.getState("remove",this);c.stopInterval.call(this);
a=a.element;a.unbind();return a.remove()}};return d.fn.vTicker=function(a){return f[a]?f[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==typeof a&&a?d.error("Method "+a+" does not exist on jQuery.vTicker"):f.init.apply(this,arguments)}})(jQuery);

