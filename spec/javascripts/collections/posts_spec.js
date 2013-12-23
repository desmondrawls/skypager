(function(SkyPager){
  describe("Posts Collection", function(){
    var post1, post2, post3, posts_collection;

    beforeEach(function(){
      post1 = new SkyPager.Models.Post({votes:5, title: "first", created_at: new Date(2010)});
      post2 = new SkyPager.Models.Post({votes:1, title: "second", created_at: new Date(2011)});
      post3 = new SkyPager.Models.Post({votes:6, title: "third", created_at: new Date(2008)});
      posts_collection = new SkyPager.Collections.Posts([post1, post2, post3]);
    })

    it("Filters by popularity", function(){
      expect(posts_collection.popular().models).toEqual([post3]);
    });

    it("Orders by most recent", function(){
      expect(posts_collection.models).toEqual([post2, post1, post3]);
    })
  });
})(window.SkyPager || {})