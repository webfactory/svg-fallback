;(function($, doc, win) {
    "use strict";
    var name = 'svg';
    function Svg(el, opts){
        this.$el = $(el);
        this.defaults = {
            ie10: false
        };
        var meta  = this.$el.data(name+'-opts');
        this.opts = $.extend(this.defaults, opts, meta);
        this.wrapper = $('html');
        this.init();
    }

    Svg.prototype.init = function() {
        var self = this;
        var attr = {style: ""};
        function changeSvg(){
            attr.src = self.$el.attr('data-svg');
        }
        function changeBmp(){
            attr.src = self.$el.attr('data-bitmap');
        }
        if(!(this.opts.ie10)){
            if(Modernizr.svg && !((self.wrapper.hasClass('lt-ie10')) || (self.wrapper.hasClass('ie10')))) {
                changeSvg();
            } else {
                changeBmp();
            }
        } else {
            if(Modernizr.svg && !((self.wrapper.hasClass('lt-ie10')))) {
                changeSvg();
            } else {
                changeBmp();
            }
        }
        this.$el.attr(attr);
    };

    $.fn.svg = function(opts) {
        return this.each(function(){
            new Svg(this, opts);
        })
    }
})(jQuery, document, window);