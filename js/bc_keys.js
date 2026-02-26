"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: Lukas Haupt
   Date:   2/25/26

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/

// Run functions upon page loading
window.addEventListener("load", findKeyWords);
window.addEventListener("load", makeKeyStyles);

function findKeyWords() {
   // Prepare keyword list

   var key = document.createElement("aside");
   key.setAttribute("id", "keywords");
   
   var mainHeading = document.createElement("h1");
   mainHeading.innerHTML = "Keyword List";
   var outlineList = document.createElement("ol");

   // Keywords are within <dfn>
   var keyWordElems = document.querySelectorAll("dfn");
   var keywords = [];
   var linkID = [];
   
   for (var i = 0; i < keyWordElems.length; i++){

      // Take inner html and put it into an array
      keywords[i] = keyWordElems[i].innerHTML;

      // Change keyword's text to be more fitting for ids
      linkID[i] = replaceWS(keywords[i]);
      
      keyWordElems[i].setAttribute("id", linkID[i]);
      /*console.log(keyWordElems[i]);*/

   }

   // Sort Keywords into alphabetical order
   keywords.sort();

   for (var i = 0; i < keywords.length; i++){

      // Setup for list and links
      var keyWordListItem = document.createElement("li");
      var keyWordLink = document.createElement("a")
      keyWordLink.innerHTML = keywords[i];

      // Run this again now that keywords is sorted
      linkID[i] = replaceWS(keywords[i]);
      
      // Set ids to links
      keyWordLink.setAttribute("href","#"+linkID[i]);

      // Append to list
      keyWordListItem.append(keyWordLink);
      outlineList.append(keyWordListItem);

   }

   key.appendChild(mainHeading);
   key.appendChild(outlineList);

   // Append to document
   var target = document.getElementById("doc");
   target.insertBefore(key, target.firstChild);


}

function makeKeyStyles() {

   var pageStyle = document.createElement("link");
   pageStyle.setAttribute("href", "./css/bc_keys.css");
   pageStyle.setAttribute("rel", "stylesheet");
   
   // Apply styles to stylesheet
   document.head.appendChild(pageStyle);

   document.styleSheets[document.styleSheets.length-1].insertRule("aside#keywords { \
         border: 3px solid rgb(101, 101, 101); \
         float: right; \
         margin: 20px 0px 20px 20px; \
         padding: 10px; \
         width: 320px; \
      }", 0);

   document.styleSheets[document.styleSheets.length-1].insertRule("aside#keywords h1 { \
         font-size: 2em; \
         margin:5px; \
         text-align: center; \
   }", 1);

   document.styleSheets[document.styleSheets.length-1].insertRule("aside#keywords ol { \
         margin-left: 20px; \
         font-size: 1.2em; \
   }", 2);

   document.styleSheets[document.styleSheets.length-1].insertRule("aside#keywords ol li { \
         line-height: 1.5em; \
   }", 3);

   document.styleSheets[document.styleSheets.length-1].insertRule("aside#keywords ol li a { \
         color: rgb(101, 101, 101); \
         text-decoration:none; \
   }", 4);

}

/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
