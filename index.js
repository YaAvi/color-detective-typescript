function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}
// requires and returns all modules that match
requireAll(require.context("./www/css/", true, /^\.\/.*\.css$/));
require('./www/fonts/material/material-icons.css');
require("./www/dist/lib/angular/angular.min.js");
require("./www/dist/lib/angular/angular-animate.js");
require("./www/dist/lib/angular/angular-translate.min.js");
require("./www/dist/lib/dist/mn-touch.min.js");
requireAll(require.context("./www/dist/lib/ng-cordova-master/", true, /^\.\/.*\.js$/));
require("./www/build/app.js");
require("./www/build/cd-app-component.js");
require("./www/build/cd-translate-provider.js");
requireAll(require.context("./www/build/", true, /^\.\/.*\.js$/));
