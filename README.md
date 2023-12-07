# products-store
using angular and concept of data binding
#In an Angular template, 
a binding creates a live connection between a part of the UI created from a template (a DOM element, directive, or component) and the model (the component instance to which the template belongs). This connection can be used to synchronize the view with the model, to notify the model when an event or user action takes place in the view, or both. Angular's Change Detection algorithm is responsible for keeping the view and the model in sync.

Examples of binding include:

1)text interpolations
2)property binding
3)event binding
4)two-way binding

##Text Interpolation
Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces {{ and }} as delimiters
##property binding
Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button features, set paths programmatically, and share values between components.
##event binding
Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.

To bind to an event you use the Angular event binding syntax. This syntax consists of a target event name within parentheses to the left of an equal sign, and a quoted template statement to the right.

Create the following example; the target event name is click and the template statement is onSave()

##two-way binding
Two-way binding combines property binding with event binding.
Angular's two-way binding syntax is a combination of square brackets and parentheses, [()]. The [()] syntax combines the brackets of property binding, [], with the parentheses of event binding, ().

###Use Angular's built-in directives to manage forms, lists, styles, and what users see.

The different types of Angular directives are as follows:
1)Components:	Used with a template. This type of directive is the most common directive type.
2)Attribute directives:	Change the appearance or behavior of an element, component, or another directive.
3)Structural directives:	Change the DOM layout by adding and removing DOM elements.

The most common attribute directives are as follows:

Common directives	Details:-
[NgClass]	Adds and removes a set of CSS classes.
[NgStyle]	Adds and removes a set of HTML styles.
[NgModel]	Adds two-way data binding to an HTML form element.
