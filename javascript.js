// *** CRUD Part 1 ***

var dataArray = [
	"United States", "Canada", "Mexico"
];

$("form").submit(function(event) {
	// prevents default action of the browser
	event.preventDefault();
				
	// turns all form elements into an array
	var formData = $(this).serializeArray();
	console.log("Form Data!", formData);
				
	// condenses data into object
	var dataObject = condenseData(formData);
				
	// stores data
	saveDataToLocalStorage(dataObject);
				
	// displays data
	displayDataOnPage();
				
});
			
function condenseData(formData) {
	var object = {};
				
	// loop through the interable rows
	$(formData).each(function() {
		console.log(this);
					
		object[this.name] = this.value;
	});
				
	console.log("Form data in object.", object);
				
	return object;
};
			
function saveDataToLocalStorage(dataObject) {
	var dataArray = JSON.parse(localStorage.getItem("data"));
				
	// if dataArray does not exist, then one is created
	if(!dataArray) {
		dataArray = ["United States", "Canada", "Mexico"];
	};
				
	dataArray.push(dataObject);
				
	localStorage.setItem("data", JSON.stringify(dataArray));
};
			
function displayDataOnPage() {
	var data = JSON.parse(localStorage.getItem("data"));
				
	// update page with data from localStorage
	$(data).each(function() {
		$("#data").append(`<p>${this.input1} - ${this.input2} - ${this.input3}</p>`);
	});
};
			
displayDataOnPage();

// *** CRUD Part 2 ***
// Editing Users
var queryParameters = new URLSearchParams(window.location.search);
console.log(queryParameters);
var localStorageDataArray = [];

localStorageDataArray.forEach(function(localStorageData) {
	console.log("Local Storage Data: " + localStorageData);
				
	localStorageDataArray.push(localStorageData);
});

$("input:text").val(localStorageDataArray);

// Deleting Users
$("deleteDataField1").click(deleteItem(0));
$("deleteDataField2").click(deleteItem(1));
$("deleteDataField3").click(deleteItem(2));

function deleteItem(index) {
	var dataSpliced = dataArray.splice(index,1);
	
	localStorage.setItem("data", dataSpliced);
	
	displayDataOnPage();
	
};