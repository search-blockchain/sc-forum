
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
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/chat:chat-settings]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"disableChat\" data-field=\"disableChat\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/chat:disable]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"disableChatMessageEditing\" data-field=\"disableChatMessageEditing\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/chat:disable-editing]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<p class=\"help-block\">[[admin/settings/chat:disable-editing-help]]</p>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"chatEditDuration\">[[admin/settings/chat:restrictions.seconds-edit-after]]</label>\n\t\t\t<input id=\"chatEditDuration\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"chatEditDuration\">\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"chatDeleteDuration\">[[admin/settings/chat:restrictions.seconds-delete-after]]</label>\n\t\t\t<input id=\"chatDeleteDuration\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"chatDeleteDuration\">\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"maximumChatMessageLength\">[[admin/settings/chat:max-length]]</label>\n\t\t\t<input id=\"maximumChatMessageLength\" type=\"text\" class=\"form-control\" value=\"1000\" data-field=\"maximumChatMessageLength\">\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"maximumUsersInChatRoom\">[[admin/settings/chat:max-room-size]]</label>\n\t\t\t<input id=\"maximumUsersInChatRoom\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"maximumUsersInChatRoom\">\n\t\t</div>\n\n\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"chatMessageDelay\">[[admin/settings/chat:delay]]</label>\n\t\t\t<input id=\"chatMessageDelay\" type=\"text\" class=\"form-control\" value=\"200\" data-field=\"chatMessageDelay\">\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"notificationSendDelay\">[[admin/settings/chat:notification-delay]]</label>\n\t\t\t<input id=\"notificationSendDelay\" type=\"text\" class=\"form-control\" value=\"60\" data-field=\"notificationSendDelay\">\n\t\t</div>\n\t</div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
