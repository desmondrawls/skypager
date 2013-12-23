(function(SkyPager) {
  SkyPager.Models.Post = Backbone.Model.extend({
    defaults: {
      title: 'Default Title',
      body: 'Default Body'
    },

    initialize: function(){
      console.log("FROM POST INITIALIZE");
      this.on("change:comments", this.parseComments);
      this.parseComments();
    },

    parseComments: function() {
      console.log("FROM POST PARSECOMMENTS:", this.get("comments"));
      this.comments = new SkyPager.Collections.Comments(this.get("comments"));
    }
  });
})(window.SkyPager || {})