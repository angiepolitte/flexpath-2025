/*
Exercise 3: Accessing Multiple Elements with querySelectorAll

Description: 

Use querySelectorAll to select all elements with the class 'article-text' and 
set their font size to 18px.
*/

// Exercise 3
const articleTexts = document.querySelectorAll(".article-text");
articleTexts.forEach(function (paragraph) {
  paragraph.style.fontSize = "18px";
});
