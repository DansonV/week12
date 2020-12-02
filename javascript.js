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
		dataArray = [];
	};
				
	dataArray.push(dataObject);
				
	localStorage.setItem("data", JSON.stringify(dataArray));
};
			


// *** CRUD Part 2 ***
// Editing Users
var queryParameters = new URLSearchParams(window.location.search);
console.log(queryParameters);
var localStorageDataArray = [];

localStorageDataArray.forEach(function(localStorageData) {
	console.log("Local Storage Data: " + localStorageData);
				
	localStorageDataArray.push(localStorageData);
});

$("#input1").val(localStorageDataArray[0]);
$("#input2").val(localStorageDataArray[1]);
$("#input3").val(localStorageDataArray[2]);



// Deleting Users
$("deleteDataField1").click(deleteItem1);
$("deleteDataField2").click(deleteItem2);
$("deleteDataField3").click(deleteItem3);

function deleteItem1() {
	var dataSpliced = dataArray.splice(0,1);
	
	localStorage.setItem("data0", dataSpliced);
};

function deleteItem2() {
	var dataSpliced = dataArray.splice(1,1);
	
	localStorage.setItem("data1", dataSpliced);
};

function deleteItem3() {
	var dataSpliced = dataArray.splice(2,1);
	
	localStorage.setItem("data2", dataSpliced);
};