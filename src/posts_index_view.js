(function(SkyPager){
  SkyPager.Views.PostsIndex = Backbone.View.extend({
    tagName: 'ul',
    className: 'posts',

    append_post: function(){
      console.log("append_post called");
    },

    render: function(){
      this.collection.each(function(post){
        this.append_post(post);
      }, this);
    }
  });
})(window.SkyPager || {})

