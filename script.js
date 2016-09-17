(function() {
  'use strict';
  window['counter'] = 0;
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var showToastButton = document.querySelector('#demo-show-toast');
  showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {message: 'Muchas gracias por su mensaje'};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}());