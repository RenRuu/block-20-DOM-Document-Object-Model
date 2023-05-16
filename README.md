# block-20-DOM-Document-Object-Model

Visit google.com
1. Change the button that says Google Search to "Froogle Search"
2. Make the background color of the body your favorite color
3. Replace the google logo image with another image link (Maybe use https://img.logoipsum.com/297.svg)
4. Now move the logo to the very top of the screen while keeping it centered
5. Delete the entire footer section at the bottom of the page where all the links another
6. Locate the form element on the page. Using the box model view, what is the forms content width and height? What happens if you add a 500px margin to the top using the box model view?
7. Move the header to where the footer section was before.
8. Bonus - Add a div to the bottom of the page and add your favorite lorem ipsom text (bacon ipsum anyone? https://baconipsum.com/)
9. Double Bonus - Do something else cool on the site. Get creative with it!!!
10. Triple Bonus - Go do the same thing to another website. See if you can uncover any cool easter eggs in the code.



Interactivity: 
     One of the main reasons to use the DOM is to create interactive web pages.
Dynamic content: 
     The DOM can be used to update a web page with new content without having to reload the entire page.
Improved performance: 
     Manipulating the DOM can be more efficient than reloading the entire page for small updates. 
     This can improve the user experience and reduce the load on the server.

DOM = Document Object Model 
     Represents the document as nodes and objects 
     Allows the programming languages to 
      - Interact with the page
      - Change the document structure, style, and content 
 DOM selectors use JavaScript to select HTML elements within a documents
     EX) 
         - getElementsByTagName()
         - getElementsByClassName()

LINK: https://domevents.dev/

Every item in the DOM is known as a node.

DOM is a Web API, not JavaScript
Web APIs support complex operations that help us work with data. A browser almost always hosts Web APIs like the DOM.
JS can interact with the DOM, but JS can also run without touching the DOM in environments other than a browser. 

DOM manipulation = use JS to add, remove, and modify elements of a website.

A signal that something has occurred in the browser.
 EX) Button Click, Form Submission, TImer, Page being loaded

When an event occurs, it can trigger a function, which is called an event handler.
To attach an event handler to an element in the DOM, you can use the addEventListener method 
DOM allows you to attach event handlers to elements in the documents, so that when an event occurs on an element, the event handler function is executed.

    Resource links:
        - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
        - https://developer.mozilla.org/en-US/docs/Glossary/DOM
        - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction 
        - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model 


FROM VIDEO SESSION:
 - Grab one thing "document.queryselector("#root")" > const rootElement = document.querySelector(#root)
 - always using "document. xyz.." in the console.
 - How to create element? const h1 = document.createElement("h1")
 - How to change the name = h1.innerHTML or h1.innerText = "Tyler"








