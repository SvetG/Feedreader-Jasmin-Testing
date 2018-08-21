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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

      it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         //loop through each feed in allFeeds object
         //check that the URL is defined
         //check that URL length exceeds 0 (not empty)
      it('URL is defined and not empty', function() {
        for(let feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url.lenght).not.toBe(0);
        }
      });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

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


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {
      //defined both variabels to be used in the global scope of te test suite
      const body = document.querySelector('body');
      const menu = document.querySelector('.menu-icon-link');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         //check that "menu-hidden" class is contained in the HTML body by default.
         //This ensures the menu is hidden
      it('menu is hidden', function () {
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

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
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         //Use asynchronous funtion loadFeed() to load the feed (menu links)
         //Use done parameter to end the loadFeed()
      beforeEach(function(done) {
        loadFeed(0, done);
      });

          //After asynchronous function is run, perform check that what was loaded has a length greater than 0
      it('completes work', function () {
        expect(feed.children.length).toBeGreaterThan(0);
      });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         //store the loaded first feed's contents in an Array
      const firstFeed = [];
         //convert the children of the feed element into the Array
         //push the inner text from the entries into the array, this will be used to compare content changes
      beforeEach(function(done) {
        loadFeed(0);
        Array.from(feed.children).forEach(function(entry) {
          firstFeed.push(entry.innerText);
        });
         //Since the previous entries are now stores, run the second load
      loadFeed(1,done);
      });

         //Check that the update actually happened by comparing the innerText from the new
         //feed to the indexed entries in the firstFeed array to make sure they do not match
      it('update content', function() {
        Array.from(feed.children).forEach(function(entry,index) {
          expect(entry.innerText === firstFeed[index]).toBe(false);
        });
      });
    });
});