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

    beforeEach(function(){
      var data = {
        "posts": 
          [{"title": "Post One", "body": "Body One", "comments": [{"author": "Ana"}, {"author": "babsi"}]}, {"title": "Post Two", "body": "Body Two"}]
      };
      console.log("INITIALIZE POSTS SPEC:", data.posts);
      SkyPager.initialize(data);
    });

    it("instantiates a posts collection from JSON data", function(){
      expect(SkyPager.posts).not.toEqual(undefined);
      expect(SkyPager.posts.length).toEqual(2);
      expect(SkyPager.posts.models[0].get("title")).toEqual("Post One");
    });

    it("instantiates a comments collection belonging to a post", function(){
      console.log("FROM COMMENTS TEST:", SkyPager.posts.models[0].comments);
      expect(SkyPager.posts.models[0].comments).not.toEqual(undefined);
      expect(SkyPager.posts.models[0].comments.length).toEqual(2);
      expect(SkyPager.posts.models[0].comments.models[0].get("author")).toEqual("Ana");
    });
  });
});