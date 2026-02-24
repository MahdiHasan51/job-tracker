1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: It returns single element. It targets a unique ID. It is faster than the getElementsByClassName and querySelector / querySelectorAll.
getElementsByClassName: It returns HTMLCollection. It targets multiple elements by class.
querySelector: It returns a single element. It targets the first match of any CSS Selector.
querySelectorAll: It returns a NodeList. It targets all matches of any CSS Selector.

2. How do you create and insert a new element into the DOM?

We can create and insert a new element to DOM in the two following ways:
1. Using createElement: We can use createElement() method which is used to dynamically create new elements and then insert them into the DOM.
2. Using innerHTML: We can also use innerHTML property to add a new element into the DOM. It involves setting the innerHTML of an existing element to include the HTML markup for the new element.



3. What is Event Bubbling? And how does it work?

Event Bubbling is a concept in the Document Object Model(DOM). It happens when an element receives an event and the event bubbles up to its parent and ancestor elements in the DOM tree until it gets to the root element.
It works by allowing parent elements to handle events that occur on their children's element.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding individual event listeners to each child elements. The parent elements listens for the event and determines whether the event  was triggered by one of its child elements.
It is useful because it improves performance, it handles dynamically added elements, it makes coding simpler, it is easy to manage.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() method prevents the browser from executing the default behavior of the selected element. This method can cancel the event only if the event is cancelable.
stopPropagation() method is used to stop the parent element from accessing the event. It prevents further propagation of current events by parent or child elements.

