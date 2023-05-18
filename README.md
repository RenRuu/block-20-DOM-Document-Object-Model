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


Further notes after watching: https://www.youtube.com/watch?v=wKBu_dEaF9E

DOM = Document Object Model

HTML = root node
Head, body, title, h1, div = element nodes
Content within “Element nodes” = text nodes 

BASED ON CSS SELECTORS

**Reads top to bottom on HTML doc**
	- if there are multiple same class designations can specify further in your (‘’) section.
	- EX)
		 const para = document.querySelector(‘.error’);
		 const para = document.querySelector(‘.div.error’);
	- can copy the selector path through the browser inspect tool
		highlight section in question > copy > copy by selector = paste into js file 
		EX) result: “body > div > p:nth-child(1)”

1st step is the action of reaching in and selecting elements = “Querying the Dom” 
2nd step is the part we actually do something with that element like change it’s content.

EX) 
const para = document.querySelector(‘p’);. 
^ assigning variable to select from the html aka making a connection or “Querying the Dom” 

console.log(para); 
^ uses the created variable (connection) to display data within the HTML doc

Expected output in console: <p>hello, world</p>

To select a single element = document.querySelector(‘p’);
To select multiple element nodes in the query search = document.querySelectorAll (‘p’);
	Makes a node list if there are repeating element nodes like multiple ‘p’ sections 
	Can look like an array but is actually called ‘node list’
	Can specify exact node within node list by the following ex)
		const para = document.querySelectorAll('p');
			^query is selecting all p text nodes 
		console.log(para[0]);
			^’[0]’ can select the exact p element by inputting the number placement in the order.

Using the loop type ‘forEach’ you can have the console print all p element nodes.
		EX)	para.forEach(para => {
     				console.log(para);
			});
		Expected print in console: displays all p element nodes in order.

(Replicating video)
get an element by ID 
	const title = document.getElementById('page-title');
	console.log(title);
		expected print: <h1 id="page-title"> Hello </h1>

get elements by their calls name 
	const errors = document.getElementsByClassName('errors');
	console.log(errors);
		expected print creates a "HTMLCollection" and prints the following:
			HTMLCollection []
			length: 0
			[[Prototype]]: HTMLCollection
			item: ƒ item()
			length: (...)
			namedItem: ƒ namedItem()
			constructor: ƒ HTMLCollection()
			Symbol(Symbol.iterator): ƒ values()
			Symbol(Symbol.toStringTag): "HTMLCollection"
			get length: ƒ length()
			[[Prototype]]: Object

Similar to the “Node list” but not identical, like a node list we can still use ‘[ ]’ square bracket notation to get a single element from that list or collection. However, ‘forEach’ loop is not functional from a collection.

get elements by their tag name
const paras = document.getElementsByTagName('p');
	console.log(paras);
	console.log(paras[1]);

		expected print: 
			1st log > HTMLCollection(3) [p, p, p.error]
			2nd log > <p>lorem ipsum</p>

CHANGING TEXT & ADDING

	 const para = document.querySelector('p'); 
		^ selecting the first p element node 

	console.log(para.innerText);
		^ used to list out the text within the selected node
			putting 'para.' causes it to be a property and not a method (doesn't use parenthesis as it's only for methods).

	para.innerText += ' ninjas are awesome!';
		^ will add onto what’s in the text node ex) Hello world ninjas are awesome!
	para.innerText = ' ninjas are awesome!';
		^ will replace existing text ex) ninjas are awesome!
	para.innerText = 'ninjas are awesome!';
		^ Is equal to string and is replaced (adding the + will do same as 1st ex)

	const para = document.querySelector('p');
		^ will pull from the first available ‘p’ text node
	const paras = document.querySelectorAll('p');
		^ will pull all ‘p’ text nodes

This function makes all ‘p’ nodes list out in the console and add ‘new text’ to each p node section to reflect on the final product (HTML page)

	paras.forEach( para => {
     		console.log(para.innerText);
     	para. innerText += ' new text';
	});

Expected print in console: 
		hello, world
		lorem ipsum
		this is an error message
		this is the content


	const content = document.querySelector('.content');
		^ adding to above code, creates link to div element with class ID
	console.log(content.innerHTML);
		^ console will print out the text inside the element node / expected print:   <p>this is the content</p>
	content.innerHTML = '<h2>THIS IS A NEW  H2 </h2>';
		^ Overrides the text node within the element and replaces with content mentioned after the ‘=‘. If you add a ‘+’ next to the ‘=‘ will only 		add on and not replace content

Below code accessed the ‘p’ text node and adds in the people mentioned on the array onto the HTML page
	const para = document.querySelector('p');
	const paras = document.querySelectorAll('p');
	const content = document.querySelector('.content');

	const people = ['mario', 'luigi', 'yoshi'];

		people.forEach(person => {
     			content.innerHTML += `<p>${person} </p>`;
		});

``
‘’
“”	
[]
{}
()



