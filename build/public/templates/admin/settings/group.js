
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
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/group:general]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form role=\"form\">\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"allowPrivateGroups\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/group:private-groups]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<p class=\"help-block\">\n\t\t\t\t[[admin/settings/group:private-groups.help]]\n\t\t\t</p>\n\t\t\t<p class=\"help-block\">\n\t\t\t\t[[admin/settings/group:private-groups.warning]]\n\t\t\t</p>\n\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"allowMultipleBadges\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/group:allow-multiple-badges]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<p class=\"help-block\">\n\t\t\t\t[[admin/settings/group:allow-multiple-badges-help]]\n\t\t\t</p>\n\n\t\t\t<label for=\"maximumGroupNameLength\">[[admin/settings/group:max-name-length]]</label>\n\t\t\t<input id=\"maximumGroupNameLength\" class=\"form-control\" type=\"text\" placeholder=\"255\" data-field=\"maximumGroupNameLength\" />\n\n\t\t\t<label for=\"maximumGroupTitleLength\">[[admin/settings/group:max-title-length]]</label>\n\t\t\t<input id=\"maximumGroupTitleLength\" class=\"form-control\" type=\"text\" placeholder=\"40\" data-field=\"maximumGroupTitleLength\" />\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/group:cover-image]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form role=\"form\">\n\t\t\t<label for=\"groups:defaultCovers\"><strong>[[admin/settings/group:default-cover]]</strong></label>\n\t\t\t<p class=\"help-block\">\n\t\t\t\t[[admin/settings/group:default-cover-help]]\n\t\t\t</p>\n\t\t\t<input type=\"text\" class=\"form-control input-lg\" id=\"groups:defaultCovers\" data-field=\"groups:defaultCovers\" data-field-type=\"tagsinput\" value=\"/assets/images/cover-default.png\" placeholder=\"https://example.com/group1.png, https://example.com/group2.png\" /><br />\n\t\t</form>\n\t</div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
