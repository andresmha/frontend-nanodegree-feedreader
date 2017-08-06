# Project Overview
(Given by Udacity)

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## How to run the project

You can run it by opening the index.html file on the project folder or setting up a simple server to run on the same folder and run localhost in your browser. One way of doing this is with Python 3 (you should have python pre installed) with the command python -m http.server [<portNo>].

When you open the main page, the application will automatically start and  the tests will also start to run. The test results will display at the bottom of the page after all the page components are loaded.

This page was tests are:
* RSS feeds defined
* RSS Urls are defined and not empty
* RSS Names are defined and not empty
* Menu is hidden by default
* Menu visibility toogles on menu click icon
* Application loads at least 1 entry
* Feed changes content after loading
