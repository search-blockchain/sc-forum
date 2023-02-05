
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
    return "<div class=\"tags row\">\n\t<div class=\"col-lg-9\">\n\t\t<div class=\"panel panel-default tag-management\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div class=\"alert alert-info\">\n\t\t\t\t\t<p>[[admin/manage/tags:description]]</p>\n\t\t\t\t</div>\n\n\t\t\t\t" + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "" :
        "\n\t\t\t\t[[admin/manage/tags:none]]\n\t\t\t\t") + 
      "\n\n\t\t\t\t<div class=\"tag-list\">\n\t\t\t\t\t" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-lg-3 acp-sidebar\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<button class=\"btn btn-primary btn-block\" id=\"create\">[[admin/manage/tags:create]]</button>\n\t\t\t\t<button class=\"btn btn-primary btn-block\" id=\"rename\">[[admin/manage/tags:rename]]</button>\n\t\t\t\t<button class=\"btn btn-warning btn-block\" id=\"deleteSelected\">[[admin/manage/tags:delete]]</button>\n\t\t\t\t<hr />\n\t\t\t\t<a class=\"btn btn-default btn-block\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/settings/tags\">\n\t\t\t\t\t<i class=\"fa fa-external-link\"></i>\n\t\t\t\t\t[[admin/manage/tags:settings]]\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"tag-search\" placeholder=\"[[admin/manage/tags:search]]\"/><br/>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"modal fade\" id=\"create-modal\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">[[admin/manage/tags:create]]</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"create-tag-name\">[[admin/manage/tags:name]]</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"create-tag-name\" placeholder=\"[[admin/manage/tags:name]]\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" id=\"create-modal-go\">[[admin/manage/tags:create]]</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"rename-modal hidden\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"value\">[[admin/manage/tags:name]]</label>\n\t\t\t<input id=\"value\" data-name=\"value\" value=\"\" class=\"form-control\" />\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<div class=\"tag-row\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span class=\"mdl-chip mdl-chip--contact tag-item\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\" style=\"\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['color'] : null) ?
            "color: " + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['color'] : null)) + 
              ";" :
            "") + 
          "\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['bgColor'] : null) ?
            "background-color: " + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['bgColor'] : null)) + 
              ";" :
            "") + 
          "\">\n\t\t\t\t\t\t\t    <span class=\"mdl-chip__contact mdl-color--light-blue mdl-color-text--white tag-topic-count\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "</span>\n\t\t\t\t\t\t\t    <span class=\"mdl-chip__text\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
