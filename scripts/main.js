function showMessage() {
  console.log('Hallo Entwicklerwelt');
  console.trace();
  console.debug('DEB');
  console.error('ERR');
  console.info('INFO');
}
function calculateSum() {
  var x = parseInt(document.getElementById('field1').value);
  var y = parseInt(document.getElementById('field2').value);
  var result = document.getElementById('result');
  console.log(x + y);
  result.value = x + y;
}
calculateSum();
showMessage();
