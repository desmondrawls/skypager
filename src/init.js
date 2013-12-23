var SkyPager = {

Views:{},

Collections:{},

Models:{},

initialize: function(data){
  this.posts = new SkyPager.Collections.Posts(data.posts);
}

};