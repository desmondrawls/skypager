(function(SkyPager){
  SkyPager.Views.Post = Backbone.View.extend({
    tagName: 'li',
    className: 'post',

    initialize: function(){
      console.log("in post#initialize");
    },

    render: function(){
      console.log("rendering post");
      return this.el;
    }
  });
})(window.SkyPager || {})
