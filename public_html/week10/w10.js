var cityInfo = function(country) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("city").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", country + ".txt", true);
    xhttp.send();
};

var studentInfo = function(filename) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            var table = "<table><tr><th>First</th><th>Last</th><th>City</th><th>State</th><th>Zip</th><th>Major</th><th>GPA</th></tr>";
            for (var i = 0; i < data.students.length; i++) {
                table += "<tr><td>";
                table += data.students[i].first;
                table += "</td><td>";
                table += data.students[i].last;
                table += "</td><td>";
                table += data.students[i].address.city;
                table += "</td><td>";
                table += data.students[i].address.state;
                table += "</td><td>";
                table += data.students[i].address.zip;
                table += "</td><td>";
                table += data.students[i].major;
                table += "</td><td>";
                table += data.students[i].gpa;
                table += "</td></tr>";
            }
            table += "</table>";
            document.getElementById("student").innerHTML = table;
        }
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
};