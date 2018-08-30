/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  const feed = document.querySelector('.feed');
  describe('RSS Feeds', function() {

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

         //loop through each feed in allFeeds object
         //check that the URL is defined
         //check that URL length exceeds 0 (not empty)
    it('URL is defined and not empty', function() {
      for(let feed of allFeeds) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      }
    });

         //loop through each feed in allFeeds object
         //check that the name is defined
         //check that the name lenght exceeds 0 (not empty)
    it('Name is defined and not empty', function() {
      for(let feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }
    });
  });

  describe('The menu', function() {
      //defined both variabels to be used in the global scope of te test suite
    const body = document.querySelector('body');
    const menu = document.querySelector('.menu-icon-link');

         //check that "menu-hidden" class is contained in the HTML body by default.
         //This ensures the menu is hidden
    it('menu is hidden', function () {
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });

          //Checks the toggle funtion of the menu
          //First click toggle the "menu-hidden" class out of the HTML body
          //This shows the menu
    it('menu toggle', function () {
      menu.click();
        expect(body.classList.contains('menu-hidden')).not.toBe(true);

          //Second click toggles the "menu-hidden" class back into the HTML body
          //This hides the menu
      menu.click();
        expect(body.classList.contains('menu-hidden')).toBe(true);
    });
  });

  describe('Initial Entries', function() {
          //call loadFeed function as an asychronous function
    beforeEach(function(done) {
      loadFeed(0, done);
    });

          //check to see if there is at least 1 .entry element in the .feed container
    it('completes work', function () {
      expect($('.feed .entry').length).not.toBe(0);
    });
  });


  describe('New Feed Selection', function() {

         //define variables
    let prevFeed;
    let newFeed;

    beforeEach(function(done) {
      loadFeed(0, function() {
          prevFeed = document.querySelector('.feed').innerHTML;
          loadFeed(1, function() {
            newFeed = document.querySelector('.feed').innerHTML;
            done();
          });
      });
    });

         //Check that the update actually happened by comparing the variables
    it('update content', function() {
      expect(prevFeed).not.toEqual(newFeed);
    });

  });
});
