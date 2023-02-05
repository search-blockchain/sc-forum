
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
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/guest:settings]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form role=\"form\">\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"allowGuestHandles\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/guest:handles.enabled]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<p class=\"help-block\">\n\t\t\t\t[[admin/settings/guest:handles.enabled-help]]\n\t\t\t</p>\n\t\t</form>\n\t\t<form role=\"form\">\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"guestsIncrementTopicViews\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/guest:topic-views.enabled]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</form>\n\t\t<form role=\"form\">\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"allowGuestReplyNotifications\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/guest:reply-notifications.enabled]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
