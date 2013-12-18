describe("Posts Index View", function() {
  describe("Instantiation", function() {
    it("Creates a list", function() {
      this.view = new SkyPager.Views.PostsIndex;
      expect(this.view.tagName).toEqual('ul');
    });
  });

});