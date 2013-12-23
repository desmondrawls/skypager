(function(SkyPager) {
  SkyPager.Collections.Comments = Backbone.Collection.extend({
    model: SkyPager.Models.Comment
  });
})(window.SkyPager || {})