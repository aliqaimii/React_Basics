// WHY WE USE FUCNTIONAL COMPONENT

// Functional Components are easier to read in large part because you already know all of the
//things they can’t do, such as have hidden inputs or modify a hidden state. Especially with the use of prop destructuring,
//it’s very clear what’s going in and coming out of a functional component.

// Functional components are easy to test
// It’s easier to test functional components because you don’t have to worry about hidden state or side effects.
// For every input (props), functional components have exactly one output.

// Given certain props, I can assert exactly what the HTML output will be. This means you don’t have to rely on any mocking,
// state manipulation, or crazy testing libraries. It’s pretty awesome.

// Functional components are more reusable
// This one might be a bit controversial. But by removing function level state,
// we often make our components easier to use and more widely applicable.
// et’s take a peek at two implementations of a custom checkbox.

// When NOT to use Functional Components
// If functional components are a hammer, it’s important to remember that not every problem is a nail.
// Class components are included in React for a reason.

// The general heuristic I use is to always start with a functional component.
// If you find out you need lifecycle methods or it makes sense to have a small piece component level state,
// it’s trivial to refactor to a class component. I find this style of writing components keeps me from getting lazy and forces me to use functional components to their full potential.

// This post, “7 Reasons to Outlaw React’s Functional Components” also offers some additional potential downsides to consider.
//  That said, I personally don’t find any of the arguments against functional components very compelling.

// From the release notes:

// “In idiomatic React code, most of the components you write will be stateless, simply composing other components.”

// Companies on the cutting edge of React development like Facebook, Netflix, and Airbnb all readily use functional components.
// It seems pretty clear the upsides outweigh the negatives.

// When should you NOT use functional components? When you have no other option.

// 1. No Class means no ‘this’
// 2. Fewer lines = better performance
// 3. Easier to read, easier to understand, easier to reason about, easier to test
