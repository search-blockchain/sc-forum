
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
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/tags:tag]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<a class=\"btn btn-primary\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/tags\">\n\t\t\t\t\t<i class=\"fa fa-external-link\"></i>\n\t\t\t\t\t[[admin/settings/tags:link-to-manage]]\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"systemTags\">[[admin/settings/tags:system-tags]]</label>\n\t\t\t\t<input id=\"systemTags\" type=\"text\" class=\"form-control\" value=\"\" data-field=\"systemTags\" data-field-type=\"tagsinput\" />\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/tags:system-tags-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"minimumTagsPerTopics\">[[admin/settings/tags:min-per-topic]]</label>\n\t\t\t\t<input id=\"minimumTagsPerTopics\" type=\"text\" class=\"form-control\" value=\"0\" data-field=\"minimumTagsPerTopic\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"maximumTagsPerTopics\">[[admin/settings/tags:max-per-topic]]</label>\n\t\t\t\t<input id=\"maximumTagsPerTopics\" type=\"text\" class=\"form-control\" value=\"5\" data-field=\"maximumTagsPerTopic\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"minimumTagLength\">[[admin/settings/tags:min-length]]</label>\n\t\t\t\t<input id=\"minimumTagLength\" type=\"text\" class=\"form-control\" value=\"3\" data-field=\"minimumTagLength\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"maximumTagLength\">[[admin/settings/tags:max-length]]</label>\n\t\t\t\t<input id=\"maximumTagLength\" type=\"text\" class=\"form-control\" value=\"15\" data-field=\"maximumTagLength\">\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/tags:related-topics]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"maximumRelatedTopics\">[[admin/settings/tags:max-related-topics]]</label>\n\t\t\t\t<input id=\"maximumRelatedTopics\" type=\"text\" class=\"form-control\" value=\"5\" data-field=\"maximumRelatedTopics\">\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
