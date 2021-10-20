# 7Mind Login Automation

For the automated testing I'm using Appium, webdriverio and the UiAutomator2 API. Currently the setup tests only Android devices but one could easily complement it for iOS testing (not included here).

## How to setup

1. Clone this repository
2. Install all dependencies with `npm i` in the root directory of the cloned repository
3. Follow the instructions [here](https://appium.io/docs/en/drivers/android-uiautomator2/#basic-setup)
4. Check with `appium-doctor --android` if you fullfilled all requirements (you only need the necessary dependencies)
5. Follow the instructions of the last two section [here](https://appium.io/docs/en/drivers/android-uiautomator2/#emulator-setup) for emulator or real device setup
6. Use `adb devices` to see all connected devices
7. Set the following environment variables
   1. `APK_LOCATION` - location of the apk of the app
   2. `DEVICE_NAME` - name of a connected device
   3. `ANDROID_VERSION` - Android version of the device
   4. `USER_EMAIL` - registered user email address
   5. `USER_PASSWORD` - registered user password
8.  Run `npm test` to start the automated tests in the root directory of the cloned repository
