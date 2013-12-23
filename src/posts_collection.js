(function(SkyPager){
  SkyPager.Collections.Posts = Backbone.Collection.extend({
    model: SkyPager.Models.Post,
    initialize: function(data){
      console.log("INITIALIZE POSTS:", data);
    },

    popular: function(){
      var popularPosts = this.select(function(post){
        return post.isPopular();
      });

      return new SkyPager.Collections.Posts(popularPosts);
    },
  });
})(window.SkyPager || {})