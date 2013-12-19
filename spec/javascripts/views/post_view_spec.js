describe("Post View", function() {
  var view;
  beforeEach(function() {
    view = new SkyPager.Views.Post;
  });
  describe("Instantiating", function() {
    it("Creates a list item", function() {
      expect(view.tagName).toEqual('li');
    });
  });
});