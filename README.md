# cordova-plugin-foreground-service [![npm version](https://badge.fury.io/js/cordova-plugin-foreground-service.svg)](https://badge.fury.io/js/cordova-plugin-foreground-service)

This plugin allows for android devices to continue running services in the background, using a foreground ongoing notification. This is targeted towards use with plugins such as 'cordova-geolocation' that will not run while the app is in the background on android API 26+.

---

## Requirements

- cordova version >= 8.0.0
- cordova-android version >= 7.0.0
- android-sdk api >= 26

---

## Setup and Usage

### Install

```shell
cordova plugin add cordova-plugin-foreground-service

#or

cordova plugin add https://github.com/DavidBriglio/cordova-plugin-foreground-service
```

### Start Method

To enable the foreground service, call the `start` method:

```javascript
cordova.plugins.foregroundService.start('Notification Title', 'Notification Text', 'drawable-icon-name', [notification id]);

//ie: ('myicon.png' is in the 'res/drawable' folder)
cordova.plugins.foregroundService.start('GPS Running', 'Background Service', 'myicon', 10);

// Notification id is optional
cordova.plugins.foregroundService.start('GPS Running', 'Background Service', 'myicon');

// Icon is also optional, but will use a 'star' icon as the default
cordova.plugins.foregroundService.start('GPS Running', 'Background Service');
```

The drawable icon can be any drawable image that exists in the resource folder. This means you must copy the icon you want to use into the `platforms/android/app/src/main/res/drawable` folder set. If no icon can be found using the icon name parameter, a default star icon will be used.

**NOTE:** The normal android drawable (`R.drawable`) icons are not available for use as icons. You cannot reference these icons through the `start` icon parameter. Include your icon manually in the folders mentioned above.

The notification id is a customizable integer that is used to reference the notification that will be launched. This is customizable to avoid conflicting with any other notifications. If this is not included, a default id will be used.

### Stop Method

To disable the foreground service, call the `stop` method:

```javascript
cordova.plugins.foregroundService.stop();
```

---

## Questions?

Please feel free to open an issue or make a pull request!

---

## License

MIT - Please see the LICENSE file for details.

---

David Briglio (2018)
