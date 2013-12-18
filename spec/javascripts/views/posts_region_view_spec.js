describe("Posts Region View", function() {
  describe("Instantiation", function() {
    it("Attaches to the posts container", function() {
      var view = new SkyPager.Views.PostsRegion;
      console.log(view.el);
      expect(view.$el).toEqual($("#posts"));
    });
  });
});

// collectionview or modelview
// tagName
// className
// render
// regionview
// el
// render

// switch collection(collection)
// this.collection = collection
// this.render

// higher level call to switch collection
