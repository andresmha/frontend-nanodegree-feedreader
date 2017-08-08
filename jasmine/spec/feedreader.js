
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
            checkDefinedNotEmpty(allFeeds);
        });

        //Check for each feed´s URL to be defined and not empty 
        it('URLs exist', function() {
            allFeeds.forEach(function(feed){
                checkDefinedNotEmpty(feed.url);
            });
        });

        //Check for each feed´s name to be defined and not empty 
        it('Names exist', function() {
            allFeeds.forEach(function(feed){
               checkDefinedNotEmpty(feed.name);
            });
        });


        //General funcition
        function checkDefinedNotEmpty(object) {
            expect(object).toBeDefined();
            expect(object.length).not.toBe(0);
        }
        
    });

    describe('The menu', function(){
        
        
        //Menu hidden by default
        it('is hidden by Default', function(){
            checkMenuHidden(true); 
        });

        //Check if menu changes status on click
        it('changes visibility', function(){
            var menuIcon = $('.menu-icon-link');
            
            //first click shows
            menuIcon.click();
            checkMenuHidden(false);

            //second click hides
            menuIcon.click();
            checkMenuHidden(true);

        });

        //Generic checking function for hidden menu
        function checkMenuHidden(isHidden){
            var bodyElement = $('body');
            expect(bodyElement.hasClass('menu-hidden')).toBe(isHidden);
        }

    });

    describe('Initial Entries', function(){

        //Call function with callback for asynchronous function testing
        beforeEach(function(done){ loadFeed(0, done); });

        //Load at least 1 entry
        it('load at least 1 entry in feed', function(done){
            var feedElement = $('.feed');
            expect(feedElement.find('.entry').length).toBeGreaterThan(0);
            done();
        });

    });

    describe('New Feed Selection', function(){
        var previousFeed, modifiedFeed;

        //Call function with callback for asynchronous function testing
        beforeAll(function(done){
            loadFeed(0, function(){
                previousFeed = $('.feed').text();
                loadFeed(1, function(){
                    modifiedFeed = $('.feed').text();
                    done();
                });
            });
        });

        //loaded content different from empty content
        it('check feed content', function(done){
            expect(previousFeed).not.toEqual(modifiedFeed);
            done();
        });
    });

}());
