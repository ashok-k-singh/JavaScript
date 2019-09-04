// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement1 = d3.select("#datetime");

  // Get the value property of the input element
  var dateField = inputElement1.property("value");  

  // Select the input element and get the raw HTML node
  var inputElement2 = d3.select("#city");

  // Get the value property of the input element
  var cityField = inputElement2.property("value");
  
  // Select the input element and get the raw HTML node
  var inputElement3 = d3.select("#state");

  // Get the value property of the input element
  var stateField = inputElement3.property("value");  

  // Select the input element and get the raw HTML node
  var inputElement4 = d3.select("#country");

  // Get the value property of the input element
  var countryField = inputElement4.property("value");    
  
  // Select the input element and get the raw HTML node
  var inputElement5 = d3.select("#shape");

  // Get the value property of the input element
  var shapeField = inputElement5.property("value"); 


  console.log(dateField, cityField, stateField, countryField, shapeField);

  // if user do not enter any value, do not filter for that field
  var filteredData = tableData.filter(tableEntry => 
    (dateField == '' || tableEntry.datetime === dateField) &&
    (cityField == '' || tableEntry.city === cityField) &&
    (stateField == '' || tableEntry.state === stateField) &&
    (countryField == '' || tableEntry.country === countryField) &&
    (shapeField == '' || tableEntry.shape === shapeField));

  console.log(filteredData);

  // Get a reference to the table body
  var tbody = d3.select("tbody");

  // remove any children from previous
  tbody.html("");

  filteredData.forEach(function(item) {
    // Console.log the data from data.js
    console.log(item);
    var row = tbody.append('tr')

    Object.entries(item).forEach(function([key, value]) {
      row.append('td').text(value)
    })
  })

})

