
var cityInfo = function(country) {
	fetch(country + '.txt')
		.then(function(response) {
			response.text().then(function(text) {
				document.getElementById("city").innerHTML = text;
			})
		});
}

var studentInfo = function(student) {
	fetch(student)
		.then(function(response) {
			response.json().then(function(json) {
				var table = "<table><tr><th>First</th><th>Last</th><th>City</th><th>State</th><th>Zip</th><th>Major</th><th>GPA</th></tr>";
				for (var i = 0; i < json.students.length; i++) {
					table += "<tr><td>";
					table += json.students[i].first;
					table += "</td><td>";
					table += json.students[i].last;
					table += "</td><td>";
					table += json.students[i].address.city;
					table += "</td><td>";
					table += json.students[i].address.state;
					table += "</td><td>";
					table += json.students[i].address.zip;
					table += "</td><td>";
					table += json.students[i].major;
					table += "</td><td>";
					table += json.students[i].gpa;
					table += "</td></tr>";
				}
				table += "</table>";
				document.getElementById("student").innerHTML = table;
			})
		});
};