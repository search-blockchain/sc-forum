
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
    return "<div class=\"row\">\n\t<div class=\"col-xs-6 col-sm-8 col-md-6\">\n\t\t<div class=\"list-group media\">\n\t\t\t<button type=\"button\" class=\"list-group-item\" data-type=\"default\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t" + 
      (guard((context != null) ? context['defaultAvatar'] : null) ?
        "\n\t\t\t\t\t<img class=\"media-object\" src=\"" + 
          __escape(guard((context != null) ? context['defaultAvatar'] : null)) + 
          "\"  />\n\t\t\t\t\t" :
        "\n\t\t\t\t\t<div class=\"user-icon media-object\" style=\"background-color: " + 
          __escape(guard((context != null && context['icon'] != null) ? context['icon']['bgColor'] : null)) + 
          ";\">" + 
          __escape(guard((context != null && context['icon'] != null) ? context['icon']['text'] : null)) + 
          "</div>\n\t\t\t\t\t") + 
      "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">[[user:default_picture]]</h4>\n\t\t\t\t</div>\n\t\t\t</button>\n\t\t\t" + 
      compiled.blocks['pictures'](helpers, context, guard, iter, helper) + 
      "\n\t\t</div>\n\t</div>\n\t<div class=\"col-xs-6 col-sm-4 col-md-6\">\n\t\t<div class=\"btn-group-vertical btn-block\" role=\"group\">\n\t\t\t" + 
      (guard((context != null) ? context['allowProfileImageUploads'] : null) ?
        "\n\t\t\t<button type=\"button\" class=\"btn btn-default\" data-action=\"upload\">\n\t\t\t\t<span class=\"hidden-xs hidden-sm\">\n\t\t\t\t\t[[user:upload_new_picture]]\n\t\t\t\t</span>\n\t\t\t\t<span class=\"visible-xs-inline visible-sm-inline\">\n\t\t\t\t\t<i class=\"fa fa-plus\"></i>\n\t\t\t\t\t<i class=\"fa fa-upload\"></i>\n\t\t\t\t</span>\n\t\t\t</button>\n\t\t\t" :
        "") + 
      "\n\t\t\t<button type=\"button\" class=\"btn btn-default\" data-action=\"upload-url\">\n\t\t\t\t<span class=\"hidden-xs hidden-sm\">\n\t\t\t\t\t[[user:upload_new_picture_from_url]]\n\t\t\t\t</span>\n\t\t\t\t<span class=\"visible-xs-inline visible-sm-inline\">\n\t\t\t\t\t<i class=\"fa fa-plus\"></i>\n\t\t\t\t\t<i class=\"fa fa-link\"></i>\n\t\t\t\t</span>\n\t\t\t</button>\n\t\t\t" + 
      (guard((context != null) ? context['uploaded'] : null) ?
        "\n\t\t\t<button type=\"button\" class=\"btn btn-default\" data-action=\"remove-uploaded\">\n\t\t\t\t<span class=\"hidden-xs hidden-sm\">\n\t\t\t\t\t[[user:remove_uploaded_picture]]\n\t\t\t\t</span>\n\t\t\t\t<span class=\"visible-xs-inline visible-sm-inline\">\n\t\t\t\t\t<i class=\"fa fa-picture-o\"></i>\n\t\t\t\t\t<i class=\"fa fa-long-arrow-right\"></i>\n\t\t\t\t\t<i class=\"fa fa-trash-o\"></i>\n\t\t\t\t</span>\n\t\t\t</button>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n</div>\n\n<hr />\n\n<h4>[[user:avatar-background-colour]]</h4>\n\n<label><input type=\"radio\" name=\"icon:bgColor\" value=\"transparent\" /><span></span></label>\n" + 
      compiled.blocks['iconBackgrounds'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'pictures': function pictures(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['pictures'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<button type=\"button\" class=\"list-group-item\" data-type=\"" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['type'] : null)) + 
          "\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img class=\"media-object\" src=\"" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['url'] : null)) + 
          "\" title=\"" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['text'] : null)) + 
          "\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['text'] : null)) + 
          "</h4>\n\t\t\t\t</div>\n\t\t\t</button>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'iconBackgrounds': function iconBackgrounds(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['iconBackgrounds'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<label><input type=\"radio\" name=\"icon:bgColor\" value=\"" + 
          __escape(guard(value)) + 
          "\" /><span style=\"background-color: " + 
          __escape(guard(value)) + 
          ";\"></span></label>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
