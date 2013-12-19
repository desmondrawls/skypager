describe("Post View", function() {
  var post, view;

  beforeEach(function() {
    post = new SkyPager.Models.Post;
    console.log("POST VIEW BEFORE-EACH:", this);
    view = new SkyPager.Views.Post({model:post});
  });

  describe("Instantiation", function() {
    console.log("POST VIEW INSTANTIATION:", this);
    it("Creates a list item", function() {
      expect(view.tagName).toEqual('li');
    });

    it("Has a class of post", function() {
      expect(view.className).toEqual('post');
    });
  });

  describe("Rendering", function() {
    it("returns the view object's el", function() {
      expect(view.render()).toEqual(view.el);
    });

    it("Contains the post's title", function() {
      view.render();
      console.log("CHILDREN:", view.$el.children());
      expect(view.$el.children().map(function() {
        return $(this).html();
      }).get()).toContain('Default Title');
    });

    it("Contains the post's body", function() {
      view.render();
      console.log("CHILDREN:", view.$el.children());
      expect(view.$el.children().map(function() {
        return $(this).html();
      }).get()).toContain('Default Body');
    });
  });
});