var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var range = sheet.getRange(1, 1, sheet.getLastRow(), 2);
  var values = range.getValues();
  var updated = false;

  for (var i = 0; i < values.length; i++) {
    if (values[i][0] === data.short_url) {
      values[i][1] = data.long_url;
      updated = true;
      break;
    }
  }

  if (!updated) {
    sheet.appendRow([data.short_url, data.long_url]);
  } else {
    range.setValues(values);
  }

  return ContentService.createTextOutput("Success");
}

function doGet(e) {
  var short_url = e.parameter.short_url;
  var range = sheet.getRange(1, 1, sheet.getLastRow(), 2);
  var values = range.getValues();

  for (var i = 0; i < values.length; i++) {
    if (values[i][0] === short_url) {
      return ContentService.createTextOutput(values[i][1]);
    }
  }

  return ContentService.createTextOutput("URL not found");
}
