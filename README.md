# Splashpack

A hosted web site in a packaged app for Firefox OS.

## Why?

* Put your hosted web app in a package to make it future proof to update to a privileged app later on.
* The package can have custom code to keep Firefox OS specific code paths out of your hosted web site.
* Instantly loaded splashscreen and nice offline messaging

## Testing

* Use [App Manager/WebIDE](https://developer.mozilla.org/en-US/docs/Tools/WebIDE) to test the app on a Firefox OS simulator or device.

## Instructions

* Modify `index.html` and add your app name and hosted URL.

* Modify `manifest.webapp` and add your app name, description and developer details.

* Modify `static/script.js` and replace the URL with your app URL on line 10.

* Replace the icons in `static/` with your own at `60px by 60px` and `128px by 128px`.
