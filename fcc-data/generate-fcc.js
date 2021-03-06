const { data } = require("./fcc.json");

let challenges = new Map();

for (let { node } of data.allChallengeNode.edges) {
  challenges.set(node.title, { id: node.id, slug: node.fields.slug });
}

let required = {
  "Basic HTML and HTML5": [
    "Say Hello to HTML Elements",
    "Headline with the h2 Element",
    "Inform with the Paragraph Element",
    "Fill in the Blank with Placeholder Text",
    "Uncomment HTML",
    "Comment out HTML",
    "Delete HTML Elements",
    "Introduction to HTML5 Elements",
    "Add Images to Your Website",
    "Link to External Pages with Anchor Elements",
    "Link to Internal Sections of a Page with Anchor Elements",
    "Nest an Anchor Element within a Paragraph",
    "Make Dead Links Using the Hash Symbol",
    "Turn an Image into a Link",
    "Create a Bulleted Unordered List",
    "Create an Ordered List",
    "Create a Text Field",
    "Add Placeholder Text to a Text Field",
    "Create a Form Element",
    "Add a Submit Button to a Form",
    "Use HTML5 to Require a Field",
    "Create a Set of Radio Buttons",
    "Create a Set of Checkboxes",
    "Use the value attribute with Radio Buttons and Checkboxes",
    "Check Radio Buttons and Checkboxes by Default",
    "Nest Many Elements within a Single div Element",
    "Declare the Doctype of an HTML Document",
    "Define the Head and Body of an HTML Document",
  ],
  "Basic CSS": [
    "Change the Color of Text",
    "Use CSS Selectors to Style Elements",
    "Use a CSS Class to Style an Element",
    "Style Multiple Elements with a CSS Class",
    "Change the Font Size of an Element",
    "Set the Font Family of an Element",
    "Import a Google Font",
    "Specify How Fonts Should Degrade",
    "Size Your Images",
    "Add Borders Around Your Elements",
    "Add Rounded Corners with border-radius",
    "Make Circular Images with a border-radius",
    "Give a Background Color to a div Element",
    "Set the id of an Element",
    "Use an id Attribute to Style an Element",
    "Adjust the Padding of an Element",
    "Adjust the Margin of an Element",
    "Add a Negative Margin to an Element",
    "Add Different Padding to Each Side of an Element",
    "Add Different Margins to Each Side of an Element",
    "Use Clockwise Notation to Specify the Padding of an Element",
    "Use Clockwise Notation to Specify the Margin of an Element",
    "Use Attribute Selectors to Style Elements",
    "Understand Absolute versus Relative Units",
    "Style the HTML Body Element",
    "Inherit Styles from the Body Element",
    "Prioritize One Style Over Another",
    "Override Styles in Subsequent CSS",
    "Override Class Declarations by Styling ID Attributes",
    "Override Class Declarations with Inline Styles",
    "Override All Other Styles by using Important",
    "Use Hex Code for Specific Colors",
    "Use Hex Code to Mix Colors",
    "Use Abbreviated Hex Code",
    "Use RGB values to Color Elements",
    "Use RGB to Mix Colors",
    "Use CSS Variables to change several elements at once",
    "Create a custom CSS Variable",
    "Use a custom CSS Variable",
    "Attach a Fallback value to a CSS Variable",
    "Improve Compatibility with Browser Fallbacks",
    "Inherit CSS Variables",
    "Change a variable for a specific area",
    "Use a media query to change a variable",
  ],
  "Responsive Web Design Principles": [
    "Create a Media Query",
    "Make an Image Responsive",
    "Use a Retina Image for Higher Resolution Displays",
    "Make Typography Responsive",
  ],
  "CSS Flexbox": [
    "Use display: flex to Position Two Boxes",
    "Add Flex Superpowers to the Tweet Embed",
    "Use the flex-direction Property to Make a Row",
    "Apply the flex-direction Property to Create Rows in the Tweet Embed",
    "Use the flex-direction Property to Make a Column",
    "Apply the flex-direction Property to Create a Column in the Tweet Embed",
    "Align Elements Using the justify-content Property",
    "Use the justify-content Property in the Tweet Embed",
    "Align Elements Using the align-items Property",
    "Use the align-items Property in the Tweet Embed",
    "Use the flex-wrap Property to Wrap a Row or Column",
    "Use the flex-shrink Property to Shrink Items",
    "Use the flex-grow Property to Expand Items",
    "Use the flex-basis Property to Set the Initial Size of an Item",
    "Use the flex Shorthand Property",
    "Use the order Property to Rearrange Items",
    "Use the align-self Property",
  ],
  "Basic JavaScript": [
    "Comment Your JavaScript Code",
    "Declare JavaScript Variables",
    "Storing Values with the Assignment Operator",
    "Assigning the Value of One Variable to Another",
    "Initializing Variables with the Assignment Operator",
    "Understanding Uninitialized Variables",
    "Understanding Case Sensitivity in Variables",
    "Add Two Numbers with JavaScript",
    "Subtract One Number from Another with JavaScript",
    "Multiply Two Numbers with JavaScript",
    "Divide One Number by Another with JavaScript",
    "Increment a Number with JavaScript",
    "Decrement a Number with JavaScript",
    "Create Decimal Numbers with JavaScript",
    "Multiply Two Decimals with JavaScript",
    "Divide One Decimal by Another with JavaScript",
    "Finding a Remainder in JavaScript",
    "Compound Assignment With Augmented Addition",
    "Compound Assignment With Augmented Subtraction",
    "Compound Assignment With Augmented Multiplication",
    "Compound Assignment With Augmented Division",
    "Declare String Variables",
    "Escaping Literal Quotes in Strings",
    "Quoting Strings with Single Quotes",
    "Escape Sequences in Strings",
    "Concatenating Strings with Plus Operator",
    "Concatenating Strings with the Plus Equals Operator",
    "Constructing Strings with Variables",
    "Appending Variables to Strings",
    "Find the Length of a String",
    "Use Bracket Notation to Find the First Character in a String",
    "Understand String Immutability",
    "Use Bracket Notation to Find the Nth Character in a String",
    "Use Bracket Notation to Find the Last Character in a String",
    "Use Bracket Notation to Find the Nth-to-Last Character in a String",
    "Word Blanks",
    "Store Multiple Values in one Variable using JavaScript Arrays",
    "Nest one Array within Another Array",
    "Access Array Data with Indexes",
    "Modify Array Data With Indexes",
    "Access Multi-Dimensional Arrays With Indexes",
    "Manipulate Arrays With push()",
    "Manipulate Arrays With pop()",
    "Manipulate Arrays With shift()",
    "Manipulate Arrays With unshift()",
    "Shopping List",
    "Write Reusable JavaScript with Functions",
    "Passing Values to Functions with Arguments",
    "Global Scope and Functions",
    "Local Scope and Functions",
    "Global vs. Local Scope in Functions",
    "Return a Value from a Function with Return",
    "Understanding Undefined Value returned from a Function",
    "Assignment with a Returned Value",
    "Stand in Line",
    "Understanding Boolean Values",
    "Use Conditional Logic with If Statements",
    "Comparison with the Equality Operator",
    "Comparison with the Strict Equality Operator",
    "Practice comparing different values",
    "Comparison with the Inequality Operator",
    "Comparison with the Strict Inequality Operator",
    "Comparison with the Greater Than Operator",
    "Comparison with the Greater Than Or Equal To Operator",
    "Comparison with the Less Than Operator",
    "Comparison with the Less Than Or Equal To Operator",
    "Comparisons with the Logical And Operator",
    "Comparisons with the Logical Or Operator",
    "Introducing Else Statements",
    "Introducing Else If Statements",
    "Logical Order in If Else Statements",
    "Chaining If Else Statements",
    "Golf Code",
    "Selecting from Many Options with Switch Statements",
    "Adding a Default Option in Switch Statements",
    "Multiple Identical Options in Switch Statements",
    "Replacing If Else Chains with Switch",
    "Returning Boolean Values from Functions",
    "Return Early Pattern for Functions",
    "Counting Cards",
    "Build JavaScript Objects",
    "Accessing Object Properties with Dot Notation",
    "Accessing Object Properties with Bracket Notation",
    "Accessing Object Properties with Variables",
    "Updating Object Properties",
    "Add New Properties to a JavaScript Object",
    "Delete Properties from a JavaScript Object",
    "Using Objects for Lookups",
    "Testing Objects for Properties",
    "Manipulating Complex Objects",
    "Accessing Nested Objects",
    "Accessing Nested Arrays",
    "Record Collection",
    "Iterate with JavaScript While Loops",
    "Iterate with JavaScript For Loops",
    "Iterate Odd Numbers With a For Loop",
    "Count Backwards With a For Loop",
    "Iterate Through an Array with a For Loop",
    "Nesting For Loops",
    "Iterate with JavaScript Do...While Loops",
    "Replace Loops using Recursion",
    "Profile Lookup",
    "Generate Random Fractions with JavaScript",
    "Generate Random Whole Numbers with JavaScript",
    "Generate Random Whole Numbers within a Range",
    "Use the parseInt Function",
    "Use the parseInt Function with a Radix",
    "Use the Conditional (Ternary) Operator",
    "Use Multiple Conditional (Ternary) Operators",
    "Use Recursion to Create a Countdown",
    "Use Recursion to Create a Range of Numbers",
  ],
  ES6: [
    "Explore Differences Between the var and let Keywords",
    "Compare Scopes of the var and let Keywords",
    "Declare a Read-Only Variable with the const Keyword",
    "Mutate an Array Declared with const",
    "Prevent Object Mutation",
    "Use Arrow Functions to Write Concise Anonymous Functions",
    "Write Arrow Functions with Parameters",
    "Set Default Parameters for Your Functions",
    "Use the Rest Parameter with Function Parameters",
    "Use the Spread Operator to Evaluate Arrays In-Place",
    "Use Destructuring Assignment to Extract Values from Objects",
    "Use Destructuring Assignment to Assign Variables from Objects",
    "Use Destructuring Assignment to Assign Variables from Nested Objects",
    "Use Destructuring Assignment to Assign Variables from Arrays",
    "Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements",
    "Use Destructuring Assignment to Pass an Object as a Function's Parameters",
    "Create Strings using Template Literals",
    "Write Concise Object Literal Declarations Using Object Property Shorthand",
    "Write Concise Declarative Functions with ES6",
    "Use class Syntax to Define a Constructor Function",
    "Use getters and setters to Control Access to an Object",
    "Create a Module Script",
    "Use export to Share a Code Block",
    "Reuse JavaScript Code Using import",
    "Use * to Import Everything from a File",
    "Create an Export Fallback with export default",
    "Import a Default Export",
    "Create a JavaScript Promise",
    "Complete a Promise with resolve and reject",
    "Handle a Fulfilled Promise with then",
    "Handle a Rejected Promise with catch",
  ],
  "Basic Data Structures": [
    "Use an Array to Store a Collection of Data",
    "Access an Array's Contents Using Bracket Notation",
    "Add Items to an Array with push() and unshift()",
    "Remove Items from an Array with pop() and shift()",
    "Remove Items Using splice()",
    "Add Items Using splice()",
    "Copy Array Items Using slice()",
    "Copy an Array with the Spread Operator",
    "Combine Arrays with the Spread Operator",
    "Check For The Presence of an Element With indexOf()",
    "Iterate Through All an Array's Items Using For Loops",
    "Create complex multi-dimensional arrays",
    "Add Key-Value Pairs to JavaScript Objects",
    "Modify an Object Nested Within an Object",
    "Access Property Names with Bracket Notation",
    "Use the delete Keyword to Remove Object Properties",
    "Check if an Object has a Property",
    "Iterate Through the Keys of an Object with a for...in Statement",
    "Generate an Array of All Object Keys with Object.keys()",
    "Modify an Array Stored in an Object",
  ],
  "Basic Algorithm Scripting": [
    "Convert Celsius to Fahrenheit",
    "Reverse a String",
    "Factorialize a Number",
    "Find the Longest Word in a String",
    "Return Largest Numbers in Arrays",
    "Confirm the Ending",
    "Repeat a String Repeat a String",
    "Truncate a String",
    "Finders Keepers",
    "Boo who",
    "Title Case a Sentence",
    "Slice and Splice",
    "Falsy Bouncer",
    "Where do I Belong",
    "Mutations",
    "Chunky Monkey",
  ],
};

Object.values(required)
  .flat()
  .forEach((v) => console.log(challenges.get(v)));
