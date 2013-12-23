var SkyPager = {

Views:{},

Collections:{},

Models:{},

Routers: {},

initialize: function(data){
  this.posts = new SkyPager.Collections.Posts(data.posts);
  new SkyPager.Routers.Posts({collection: this.posts});
  if(!Backbone.history.started){
    Backbone.history.start();
    Backbone.history.started = true;
  }
}

};