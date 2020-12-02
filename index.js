function displayDataOnPage() {
	var dataArray = [
		"United States", "Canada", "Mexico"
	];
	
	localStorage.setItem("data", dataArray)
	
	var data = JSON.parse(localStorage.getItem("data"));
	
	if (!data) {
		data = [];
	};
	

	
	// update page with data from localStorage
	$(data).each(function() {
		$("#data").append(`<p>${this.input1} - ${this.input2} - ${this.input3}</p>`);
	});
	
	
};
			
displayDataOnPage();

