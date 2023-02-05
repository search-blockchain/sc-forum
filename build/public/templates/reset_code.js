
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n\n" + 
      (guard((context != null) ? context['valid'] : null) ?
        "\n<div class=\"well\">\n\t" + 
          (guard((context != null) ? context['displayExpiryNotice'] : null) ?
            "\n\t<div class=\"alert alert-warning\">\n\t\t[[reset_password:password_expired]]\n\t</div>\n\t" :
            "") + 
          "\n\t<div class=\"alert alert-success hidden\" id=\"success\">\n\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n\t\t<strong>[[reset_password:password_changed.title]]</strong>\n\t\t<p>[[reset_password:password_changed.message]]</p>\n\t</div>\n\t<div class=\"alert alert-warning hidden\" id=\"notice\">\n\t\t<strong></strong>\n\t\t<p></p>\n\t</div>\n\t<form onsubmit=\"return false;\" id=\"reset-form\" class=\"row\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<label for=\"password\">[[reset_password:new_password]]</label>\n\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[reset_password:new_password]]\" id=\"password\" /><br />\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<label for=\"repeat\">[[reset_password:repeat_password]]</label>\n\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[reset_password:repeat_password]]\" id=\"repeat\" /><br />\n\t\t</div>\n\t\t<div class=\"col-xs-12\">\n\t\t\t<button class=\"btn btn-primary btn-block\" id=\"reset\" type=\"submit\">[[reset_password:reset_password]]</button>\n\t\t</div>\n\t</form>\n</div>\n" :
        "\n<div class=\"panel panel-default panel-danger\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">[[reset_password:wrong_reset_code.title]]</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<p>[[reset_password:wrong_reset_code.message]]</p>\n\t</div>\n</div>\n");
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">" :
            "") + 
          "\n\t\t\t<span itemprop=\"name\">\n\t\t\t\t" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\n\t\t\t\t" + 
          (index === length - 1 ?
            "\n\t\t\t\t" + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\n\t\t\t\t" + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</span>\n\t\t" + 
          (guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null) ?
            "</a>" :
            "") + 
          "\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
