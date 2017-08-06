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
        var bodyElement = $('body');

        
        //Menu hidden by default
        it('Menu Hidden by Default', function(){
            checkMenuHidden(); 
        });

        //Check if menu changes status on click
        it('Menu changes visibility', function(){
            var menuIcon = $('.menu-icon-link');
            
            //first click shows
            menuIcon.click();
            expect(bodyElement.attr('class')).toEqual('');

            //second click hides
            menuIcon.click();
            checkMenuHidden();

        });

        //Generic checking function for hidden menu
        function checkMenuHidden(){
            expect(bodyElement.attr('class')).toEqual('menu-hidden');
        }
    });

    describe('Initial Entries', function(){

        //Call function with callback for asynchronous function testing
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        //Load at least 1 entry
        it('load at least 1 entry in feed', function(done){
            var feedElement = $('.feed');

            expect(feedElement.find('.entry').length).toBeGreaterThan(0);

            done();
        });

    });

    describe('New Feed Selection', function(){
        //Get feed value before loading entries
        var previousFeed = $('.feed').text();
    
        //Call function with callback for asynchronous function testing
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        //loaded content different from empty content
        it('check feed content', function(done){
            var modifiedFeed = $('.feed').text();

            expect(modifiedFeed).not.toBe(previousFeed);

            done();
        });
    });

}());
