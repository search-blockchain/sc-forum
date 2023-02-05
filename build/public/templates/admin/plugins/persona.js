
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
    return "<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">Theme Settings</div>\n\t<div class=\"col-sm-10 col-xs-12\">\t\n\t\t<form role=\"form\" class=\"persona-settings\">\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"hideSubCategories\" name=\"hideSubCategories\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Hide subcategories on categories view</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"hideCategoryLastPost\" name=\"hideCategoryLastPost\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Hide last post on categories view</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"enableQuickReply\" name=\"enableQuickReply\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Enable quick reply</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\t\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
