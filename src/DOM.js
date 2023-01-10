let DOM;

// DOM ==>>> In modern web development, DOM is crucial to understand.
// In modern javascript DOM stands for document object model,
// it is mainly used to create a Nodes using javascript.

let D = "Document"; // html document file
let O = "Object"; // tags in html, Ex. title, head, body, url
let M = "Model"; // collection and arrangement of html tags

// DOCUMENT in HTML  ====>>>> https://developer.mozilla.org/en-US/docs/Web/API/Document

//============

// The DOM is a W3C (World Wide Web Consortium) standard.

// The DOM defines a standard for accessing documents:

// "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

// The W3C DOM standard is separated into 3 different parts:

// Core DOM - standard model for all document types
// XML DOM - standard model for XML documents
// HTML DOM - standard model for HTML documents

// What is the HTML DOM?
// The HTML DOM is a standard object model and programming interface for HTML. It defines:

// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements
// In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

// =============****************===================

// VIRTUAL DOM

// React creates a tree of custom objects representing a part of the DOM. For example, instead of creating an actual DIV element containing a UL element, it creates a React.div object that contains a React.ul object.
//It can manipulate these objects very quickly without actually touching the real DOM or going through the DOM API. Then, when it renders a component, it uses this virtual DOM to figure out what it needs to do with the real DOM to get the two trees to match.

// You can think of the virtual DOM like a blueprint. It contains all the details needed to construct the DOM, but because it doesn't require all the heavyweight parts that go into a real DOM, it can be created and changed much more easily.

// The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

// IN SIMPLE WORDS ==>> Virtual DOM creates a Copy of Real DOM and compare itself with the changes in UI and Update itself, Then
// compare itself with Real DOM and Changes only to the part of the Real DOM that has changed.
