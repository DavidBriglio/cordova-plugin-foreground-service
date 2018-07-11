var exec = require('cordova/exec');

module.exports = {
  start: function(title, text, icon, notificationId) {
    exec(null, null, "ForegroundPlugin", "start", [title || "", text || "", icon || "", notificationId || ""]);
  },
  stop: function() {
    exec(null, null, "ForegroundPlugin", "stop", []);
  }
};