/*!
 * my.moduule.js
 *
 * @author oosugi20@gmail.com
 */

var NOWJS_SAMPLE = NOWJS_SAMPLE || {};
NOWJS_SAMPLE.module = {};

(function (MY, MOD, $, window, undefined) {

/**
 * MOD.alertAll
 * @requires jquery-ui.js
 */
MOD.alertAll = (function () {

	var $module, $button, $message, $display, $close;

	var SELF = {
		/**
		 * setup
		 */
		setup: function () {
			$module = $('#mod-alertAll');
			$button = $module.find('#alert-button');
			$message = $module.find('#alert-message');
			$close = $module.find('#alert-close');
			$display = $('<div/>').attr({ id: 'mod-alertAll-display' });

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

})(NOWJS_SAMPLE, NOWJS_SAMPLE.module, jQuery, this);
