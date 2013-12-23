(function(SkyPager){
  SkyPager.Collections.Posts = Backbone.Collection.extend({
    model: SkyPager.Models.Post,
    initialize: function(data){
      console.log("INITIALIZE POSTS:", data);
    },

    comparator: function(post){
      var today = new Date().getFullYear();
      return today - post.get('created_at');
    },

    popular: function(){
      var popularPosts = this.select(function(post){
        return post.isPopular();
      });

      return new SkyPager.Collections.Posts(popularPosts);
    },
  });
})(window.SkyPager || {})