(function(SkyPager){
  SkyPager.Collections.Posts = Backbone.Collection.extend({
    model: SkyPager.Models.Post
  });
})(window.SkyPager || {})