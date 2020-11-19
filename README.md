# week12

Last week, we dealt with displaying a list of items (READ) and creating new items and adding them to a list (CREATE). This week, we're dealing with the U and the D: updating and deleting. 

 

Editing users

When you click on the name of the item a items link, you should get sent to the "edit.html" page with a query string parameter of "?id=X" where X is the index number of the item in the array.

On the edit page, when the page is ready, get the id parameter from the URL, fetch all of the data from local storage.

Populate the form fields with the data using jQuery selectors and the .val() method.

When the save button is clicked, get all of the values from the form using serializeArray() and update the item that ALREADY exists in the array.

Write the data back to local storage and redirect the user back to the index page.
 

DELETING USERS

On the main index page, place a button to the very right of the item.

This button should fire a function called 'deleteItem(index)' when clicked.

it can either be called with onClick='deleteItem(index)' or with a .click() event listener.

use data-* attributes to store data on the item if you're using the event listener.

function should accept the index value of the item wanting to be deleted.

pull data out of localStorage, splice the index out, re-write the data back to localStorage.

re-call the function used to display the data on the page.
