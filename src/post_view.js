(function(SkyPager){
  SkyPager.Views.Post = Backbone.View.extend({
    tagName: 'li',
    className: 'post',
    template: _.template($('#post-template').html()),

    initialize: function(){
      console.log("in post#initialize");
    },

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      console.log("from #render inside post_view:", this.el);
      return this.el;
    }
  });
})(window.SkyPager || {})
