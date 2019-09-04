// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(tableEntry => tableEntry.datetime === inputValue);

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

