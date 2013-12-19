describe("Posts Index View", function() {
  var view;

  beforeEach(function() {
    view = new SkyPager.Views.PostsIndex;
  });

  describe("Instantiation", function() {
    it("Creates an unordered list", function() {
      expect(view.tagName).toEqual('ul');
    });
    it("Has a class of posts", function() {
      expect(view.className).toEqual('posts')
    });
  });

  describe("Rendering", function(){
    var postView, post1, post2, post3, postSpy;

    beforeEach(function () {
      post1 = new Backbone.Model({id:1});
      post2 = new Backbone.Model({id:2});
      post3 = new Backbone.Model({id:3});
      view.collection = new Backbone.Collection([
        post1,
        post2,
        post3
      ]);
    });

    it("Calls #append_post for each post item", function() {
      spyOn(view, 'append_post');
      view.render();
      expect(view.append_post).toHaveBeenCalled();
      expect(view.append_post).toHaveBeenCalledWith(post1);
      expect(view.append_post).toHaveBeenCalledWith(post2);
      expect(view.append_post).toHaveBeenCalledWith(post3);
    });

    it("Initializes a new post view for each post item", function() {
      spyOn(SkyPager.Views.Post.prototype, "initialize");
      view.render();
      expect(SkyPager.Views.Post.prototype.initialize).toHaveBeenCalledWith({model:post1});
      expect(SkyPager.Views.Post.prototype.initialize).toHaveBeenCalledWith({model:post2});
      expect(SkyPager.Views.Post.prototype.initialize).toHaveBeenCalledWith({model:post3});
    });

    it("Calls #render on a new post view for each post item", function() {
      spyOn(SkyPager.Views.Post.prototype, "render");
      view.render();
      expect(SkyPager.Views.Post.prototype.render).toHaveBeenCalled();
      // expect(postSpy.callCount).toEqual(3);
    });
  });
});