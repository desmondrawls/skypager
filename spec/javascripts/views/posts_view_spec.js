describe("Posts Index View", function() {
  describe("Instantiation", function() {
    it("Creates a list", function() {
      var view = new SkyPager.Views.PostsIndex;
      expect(view.tagName).toEqual('ul');
    });
  });

});