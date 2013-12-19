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
    var postView, post1, post2, post3;

    beforeEach(function () {
      postView = new Backbone.View();
      postView.render = function(){
        this.el = document.createElement('li');
        return this;
      };
      post1 = new Backbone.Model({id:1});
      post2 = new Backbone.Model({id:2});
      post3 = new Backbone.Model({id:3});
      view.collection = new Backbone.Collection([
        post1,
        post2,
        post3
      ]);
      spyOn(view, 'append_post');
      view.render();
    });

    it("Calls #append_post for each post item", function() {
      expect(view.append_post).toHaveBeenCalled();
      expect(view.append_post).toHaveBeenCalledWith(post1)
      expect(view.append_post).toHaveBeenCalledWith(post2)
      expect(view.append_post).toHaveBeenCalledWith(post3)
    });
  });
});