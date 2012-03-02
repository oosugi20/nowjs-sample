/*!
 * now.client.js
 *
 * nowjsのクライアント側のメソッド
 *
 * @requires now.js
 * @author oosugi20@gmail.com
 */

var NOWJS_SAMPLE = NOWJS_SAMPLE || {};

(function (MY, $, window, undefined) {

/**
 * now.clientAlert
 * 
 * サーバー側のnow.serverAlertから実行される。
 */
now.clientAlert = function (message) {
	MY.module.alertAll.setMessage(message);
	MY.module.alertAll.open();
};


/**
 * now.clientAlertClose
 *
 * サーバー側のnow.serverAlertCloseから実行される。
 */
now.clientAlertClose = function () {
	MY.module.alertAll.close();
};


})(NOWJS_SAMPLE, jQuery, this);
