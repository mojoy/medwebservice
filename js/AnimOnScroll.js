/**
 * animOnScroll.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function(e){
    "use strict";
    function n(){
        var n = t["clientHeight"], r = e["innerHeight"];
        if (n < r) 
            return r;
        else 
            return n
    }
    function r(){
        return e.pageYOffset || t.scrollTop
    }
    function i(e){
        var t = 0, n = 0;
        do {
            if (!isNaN(e.offsetTop)) {
                t += e.offsetTop
            }
            if (!isNaN(e.offsetLeft)) {
                n += e.offsetLeft
            }
        }
        while (e = e.offsetParent);
        return {
            top: t,
            left: n
        }
    }
    function s(e, t){
        var s = e.offsetHeight, o = r(), u = o + n(), a = i(e).top, f = a + s, t = t || 0;
        return a + s * t <= u && f - s * t >= o
    }
    function o(e, t){
        for (var n in t) {
            if (t.hasOwnProperty(n)) {
                e[n] = t[n]
            }
        }
        return e
    }
    function u(e, t){
        this.el = e;
        this.options = o(this.defaults, t);
        this._init()
    }
    var t = e.document.documentElement;
    u.prototype = {
        defaults: {
            minDuration: 0,
            maxDuration: 0,
            viewportFactor: 0
        },
        _init: function(){
            this.items = Array.prototype.slice.call(document.querySelectorAll(".box"));
            this.itemsCount = this.items.length;
            this.itemsRenderedCount = 0;
            this.didScroll = false;
            var t = this;
            imagesLoaded(this.el, function(){
                new Masonry(t.el, {
                    itemSelector: ".box",
                    transitionDuration: 0
                });
                if (Modernizr.cssanimations) {
                    t.items.forEach(function(e, n){
                        if (s(e)) {
                            t._checkTotalRendered();
                            classie.add(e, "shown")
                        }
                    });
                    e.addEventListener("scroll", function(){
                        t._onScrollFn()
                    }, false);
                    e.addEventListener("resize", function(){
                        t._resizeHandler()
                    }, false)
                }
            })
        },
        _onScrollFn: function(){
            var e = this;
            if (!this.didScroll) {
                this.didScroll = true;
                setTimeout(function(){
                    e._scrollPage()
                }, 60)
            }
        },
        _scrollPage: function(){
            var e = this;
            this.items.forEach(function(t, i){
                if (!classie.has(t, "shown") && !classie.has(t, "animate") && s(t, e.options.viewportFactor)) {
                    setTimeout(function(){
                        var i = r() + n() / 2;
                        e.el.style.WebkitPerspectiveOrigin = "50% " + i + "px";
                        e.el.style.MozPerspectiveOrigin = "50% " + i + "px";
                        e.el.style.perspectiveOrigin = "50% " + i + "px";
                        e._checkTotalRendered();
                        if (e.options.minDuration && e.options.maxDuration) {
                            var s = Math.random() * (e.options.maxDuration - e.options.minDuration) + e.options.minDuration + "s";
                            t.style.WebkitAnimationDuration = s;
                            t.style.MozAnimationDuration = s;
                            t.style.animationDuration = s
                        }
                        classie.add(t, "animate")
                    }, 25)
                }
            });
            this.didScroll = false
        },
        _resizeHandler: function(){
            function t(){
                e._scrollPage();
                e.resizeTimeout = null
            }
            var e = this;
            if (this.resizeTimeout) {
                clearTimeout(this.resizeTimeout)
            }
            this.resizeTimeout = setTimeout(t, 1e3)
        },
        _checkTotalRendered: function(){
            ++this.itemsRenderedCount;
            if (this.itemsRenderedCount === this.itemsCount) {
                e.removeEventListener("scroll", this._onScrollFn)
            }
        }
    };
    e.AnimOnScroll = u
})(window)
