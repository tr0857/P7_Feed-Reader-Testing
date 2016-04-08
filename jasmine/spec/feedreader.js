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

        //check for URL inside allFeeds objects
        it('should have a URL', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length > 0).toBe(true);
            };
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        // check for a name inside allFeeds objects
         it('should hava a name', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length > 0).toBe(true);
            };
        });
    });

    
    // TODO: Write a new test suite named "The menu"
    // test suite for the menu
    describe("The menu", function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        //check classes of the body for the visibility of the menu at load
        it('should ensure the menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true)
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        //check proper functionality of menu expand button
        it('should expand when icon is clicked', function(){
            $(".icon-list").click();
            expect($("body").hasClass("menu-hidden")).toBe(false);
            $(".icon-list").click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

    })

    // TODO: Write a new test suite named "Initial Entries"

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    // test suite checking async data loading
    describe("Initial Entries", function(){
        beforeEach(function(done){
            loadFeed(0, done);
        })

        //make sure we get results inside on load
        it('should have at least one entry when loadFeed is done', function(done){
            expect($(".feed .entry").length).toBeGreaterThan(0);
            done();
            
        });;
    });
        
    // TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    // test suite checking for proper handling of switching feeds
    describe("New Feed Selection", function(){
        var feed;

        beforeEach(function(done){
            loadFeed(1, function() {
                feed = $('.feed').html();
                done();
            });
        });

        // check if data changes when new feeds are selected
        it('should change content with different feeds', function(done){
            loadFeed(0, function(){
                expect($('.feed').html()).not.toEqual(feed);
                done();
            });
        });
    });
}());
