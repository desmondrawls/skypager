(function(SkyPager){
  SkyPager.Views.PostsIndex = Backbone.View.extend({
    tagName: 'ul',
    className: 'posts',

    append_post: function(post){
      console.log("post in posts#append_post:", post);
      var post_view = new SkyPager.Views.Post({model:post});
      console.log("post_view in posts#append_post:", post_view);
      console.log("this.el in posts#append_post:", this.el);
      this.$el.append(post_view.render());
    },

    render: function(){
      this.collection.each(function(post){
        console.log("post in posts#render:", post);
        this.append_post(post);
      }, this);
    }
  });
})(window.SkyPager || {})

