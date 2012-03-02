/*!
 * client.js
 *
 * @author oosugi20@gmail.com
 */

var NOWJS_SAMPLE = {};

(function (MY, $, window, undefined) {

now.clientAlert = function (message) {
	window.alert(message);
};


$(function () {
	var $alertButton = $('#alert-button');
	var $alertMessage = $('#alert-message');
	var $alertDisplay = $('<div/>').attr({ id: 'alert-display' });

	$alertButton.on('click', function () {
		var message = $alertMessage.val();
		now.serverAlert(message);
	});
});

})(NOWJS_SAMPLE, jQuery, this);
