(function(SkyPager) {
  SkyPager.Models.Post = Backbone.Model.extend({
    defaults: {
      title: 'Default Title',
      body: 'Default Body'
    }
  });
})(window.SkyPager || {})