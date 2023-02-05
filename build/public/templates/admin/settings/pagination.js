
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
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/pagination:pagination]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"usePagination\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/pagination:enable]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/pagination:posts]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<strong>[[admin/settings/pagination:posts-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"postsPerPage\"><br/>\n\t\t\t<strong>[[admin/settings/pagination:max-posts-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"maxPostsPerPage\"><br/>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/pagination:topics]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<strong>[[admin/settings/pagination:topics-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"topicsPerPage\"><br />\n\t\t\t<strong>[[admin/settings/pagination:max-topics-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"20\" data-field=\"maxTopicsPerPage\"><br/>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/pagination:categories]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<strong>[[admin/settings/pagination:categories-per-page]]</strong><br /> <input type=\"text\" class=\"form-control\" value=\"50\" data-field=\"categoriesPerPage\"><br />\n\t\t</form>\n\t</div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
