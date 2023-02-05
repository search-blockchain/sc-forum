
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/notifications:notifications]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<strong>[[admin/settings/notifications:welcome-notification]]</strong><br /> <textarea class=\"form-control\" data-field=\"welcomeNotification\"></textarea><br />\n\t\t\t<strong>[[admin/settings/notifications:welcome-notification-link]]</strong><br /> <input type=\"text\" class=\"form-control\" data-field=\"welcomeLink\"><br />\n\t\t\t<strong>[[admin/settings/notifications:welcome-notification-uid]]</strong><br /> <input type=\"text\" class=\"form-control\" data-field=\"welcomeUid\"><br />\n\t\t\t<strong>[[admin/settings/notifications:post-queue-notification-uid]]</strong><br /> <input type=\"text\" class=\"form-control\" data-field=\"postQueueNotificationUid\"><br />\n\t\t</form>\n\t</div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
