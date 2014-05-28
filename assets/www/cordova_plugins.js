cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/nl.x-services.plugins.calendar/www/Calendar.js",
        "id": "nl.x-services.plugins.calendar.Calendar",
        "clobbers": [
            "Calendar"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.PushPlugin/www/PushNotification.js",
        "id": "com.phonegap.plugins.PushPlugin.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "nl.x-services.plugins.calendar": "4.2.3",
    "com.phonegap.plugins.PushPlugin": "2.2.0"
}
// BOTTOM OF METADATA
});