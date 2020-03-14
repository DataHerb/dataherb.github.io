function tabulate(element_id, data, columns) {
	var preview_div = d3.select(element_id).append('div').attr("class", "data-preview-table")
    var table = preview_div.append('table')
	var thead = table.append('thead')
	var	tbody = table.append('tbody');

	// append the header row
	thead.append('tr')
	  .selectAll('th')
	  .data(columns).enter()
	  .append('th')
	    .text(function (column) { return column; });

	// create a row for each object in the data
	var rows = tbody.selectAll('tr')
	  .data(data)
	  .enter()
	  .append('tr');

	// create a cell in each row for each column
	var cells = rows.selectAll('td')
	  .data(function (row) {
	    return columns.map(function (column) {
	      return {column: column, value: row[column]};
	    });
	  })
	  .enter()
	  .append('td')
	    .text(function (d) { return d.value; });

  return table;
}

function loadCSVPreview(dataPath, previewId, first=0, last=5) {
	// This is a preview of the first 5 rows.
	var preview_notify_div = d3.select(previewId).append('div').attr("class", "data-preview-table-notify")
	preview_notify_div.append("div")
	.attr("class", "notification")
	.text(`This is a preview of the rows ${first} to ${last}.`)

	d3.csv(dataPath).then(function(data) {
	  console.log(data)
	  if (data[0]) {
		  keys = Object.keys(data[0])
	  }
	  tabulate(previewId, data.slice(first,last), keys)
  })
}

function get_filesize(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState == this.DONE) {
            callback(parseInt(xhr.getResponseHeader("Content-Length")));
        }
    };
    xhr.send();
}
