/*!
 * client.js
 *
 * @author oosugi20@gmail.com
 */

var NOWJS_SAMPLE = {};

(function (MY, $, window, undefined) {

now.clientAlert = function (message) {
	MY.alertButton.setMessage(message);
	MY.alertButton.open();
};

now.clientAlertClose = function () {
	MY.alertButton.close();
};

MY.alertButton = (function () {

	var $button, $message, $display, $close;

	var SELF = {
		/**
		 * setup
		 */
		setup: function () {
			$button = $('#alert-button');
			$message = $('#alert-message');
			$close = $('#alert-close');
			$display = $('<div/>').attr({ id: 'alert-display' });

			$display.dialog({
				autoOpen: false
			});

			$button.on('click', function () {
				var msg = $message.val();
				now.serverAlert(msg);
			});

			$close.on('click', function () {
				now.serverAlertClose();
			});
		},

		/**
		 * open
		 */
		open: function () {
			$display.dialog('open');
		},

		/**
		 * close
		 */
		close: function () {
			$display.dialog('close');
		},

		/**
		 * setMessage
		 */
		setMessage: function (message) {
			$display.text(message);
		}
	};

	return SELF;

})();

$(function () {
	MY.alertButton.setup();
});

})(NOWJS_SAMPLE, jQuery, this);
