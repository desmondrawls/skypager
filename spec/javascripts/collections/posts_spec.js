(function(SkyPager){
  describe("Posts Collection", function(){
    var post1, post2, post3, posts_collection;

    beforeEach(function(){
      post1 = new SkyPager.Models.Post({votes:5, title: "first"});
      post2 = new SkyPager.Models.Post({votes:1, title: "second"});
      post3 = new SkyPager.Models.Post({votes:6, title: "third"});
      posts_collection = new SkyPager.Collections.Posts([post1, post2, post3])
    })

    it("Filters by popularity", function(){
      expect(posts_collection.popular()).toEqual(new SkyPager.Collections.Posts([post3]));
    });
  });
})(window.SkyPager || {})