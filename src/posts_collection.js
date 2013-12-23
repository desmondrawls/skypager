(function(SkyPager){
  SkyPager.Collections.Posts = Backbone.Collection.extend({
    model: SkyPager.Models.Post,
    initialize: function(data){
      console.log("INITIALIZE POSTS:", data);
    }
  });
})(window.SkyPager || {})