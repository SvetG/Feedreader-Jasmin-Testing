# Project Overview
The following is the initial README with the project overview. 

## Instructions
Clone or Download the repository. Extract the files to a file of your choice. 
Right click the index.html file and open in a modern browser of your choice. 
Scroll down to the bottom to view the tests. 

**Scroll to the bottom of this README to view Summary of Tests, Resources, and Dependencies**

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What I have learned

How to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.
Writing code as part of test-driven development allows the developer to approach the functionality of an application from the client's or user's perspective. It also inspires greater confidence in the code as all code would be covered by at least one test. Test-driven development also allows for incremental development which in turn leads to less debugging in the future. 

## Summary of Tests
1. Ensuring that a URL is defined in each feed and that it is not empty
2. Ensuring that each object in the feed has a defined name and that the name is not empty
3. Ensuring the menu is hidden by default (upon page load)
4. Ensuring menu changes visibility and displays when clicked, then hides when clicked again
5. Ensuring there is at least one entry in the feed on load
6. Ensuring the content of the feed actually changes when a new feed is loaded

## Resources 
The UDACITY provided starter code was used. 
https://github.com/udacity/frontend-nanodegree-feedreader

Source used to get started in understanding the project, specifically asychronous functions
https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/

Understanding Jasmine 
https://jasmine.github.io/tutorials/your_first_suite

## Dependencies
Web browser that supports Javascript ES6
