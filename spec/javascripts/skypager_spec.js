describe("SkyPager", function(){
  it("has a namespace for models", function(){
    expect(SkyPager.Models).toBeTruthy();
  });
  it("has a namespace for collections", function(){
    expect(SkyPager.Collections).toBeTruthy();
  });
  it("has a namespace for views", function(){
    expect(SkyPager.Views).toBeTruthy();
  });
  describe("initialize()", function() {
    var data;

    beforeEach(function(){
      data = {
        "posts": 
          [{"title": "Post One", "body": "Body One", "comments": [{"author": "Ana"}, {"author": "babsi"}]}, {"title": "Post Two", "body": "Body Two"}]
      };
      console.log("INITIALIZE POSTS SPEC:", data.posts);
    });

    it("instantiates a posts collection from JSON data", function(){
      SkyPager.initialize(data);
      expect(SkyPager.posts).not.toEqual(undefined);
      expect(SkyPager.posts.length).toEqual(2);
      expect(SkyPager.posts.models[0].get("title")).toEqual("Post One");
    });

    it("instantiates a comments collection belonging to a post", function(){
      SkyPager.initialize(data);
      console.log("FROM COMMENTS TEST:", SkyPager.posts.models[0].comments);
      expect(SkyPager.posts.models[0].comments).not.toEqual(undefined);
      expect(SkyPager.posts.models[0].comments.length).toEqual(2);
      expect(SkyPager.posts.models[0].comments.models[0].get("author")).toEqual("Ana");
    });

    it("instantiates a posts router", function(){
      spyOn(SkyPager.Routers, "Posts");
      SkyPager.initialize(data);
      expect(SkyPager.Routers.Posts).toHaveBeenCalled();
      // SkyPager.Routers.Posts.restore();
    });

    it("starts backbone history", function(){
      Backbone.history.started = null;
      Backbone.history.stop();
      spyOn(Backbone.history, 'start');
      SkyPager.initialize({});
      expect(Backbone.history.start).toHaveBeenCalled();
    })
  });
});