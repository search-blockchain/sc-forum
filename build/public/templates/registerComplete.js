
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
      "\n\n\n<div class=\"row\">\n\t<div class=\"col-xs-12 col-sm-8 col-sm-offset-2\">\n\t\t<p class=\"lead text-center\">\n\t\t\t" + 
      (guard((context != null) ? context['register'] : null) ?
        "[[register:interstitial.intro-new]]" :
        "[[register:interstitial.intro]]") + 
      "\n\t\t</p>\n\n\t\t" + 
      (guard((context != null && context['errors'] != null) ? context['errors']['length'] : null) ?
        "\n\t\t<div class=\"alert alert-warning\">\n\t\t\t<p>\n\t\t\t\t[[register:interstitial.errors-found]]\n\t\t\t</p>\n\t\t\t<ul>\n\t\t\t\t" + 
          compiled.blocks['errors'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</ul>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\t</div>\n</div>\n\n<form role=\"form\" method=\"post\" action=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register/complete/?_csrf=" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\" enctype=\"multipart/form-data\">\n\t" + 
      compiled.blocks['sections'](helpers, context, guard, iter, helper) + 
      "\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-8 col-sm-offset-2\">\n\t\t\t<div class=\"btn-group btn-block\">\n\t\t\t\t<button class=\"btn btn-block btn-primary\">[[topic:composer.submit]]</button>\n\t\t\t\t<button class=\"btn btn-block btn-link\" formaction=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register/abort?_csrf=" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
      "\">" + 
      (guard((context != null) ? context['register'] : null) ?
        "[[register:cancel_registration]]" :
        "[[modules:bootbox.cancel]]") + 
      "</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>";
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
    },
    'errors': function errors(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['errors'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li>" + 
          __escape(guard(value)) + 
          "</li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'sections': function sections(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sections'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-8 col-sm-offset-2\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t" + 
          __escape(guard(value)) + 
          "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
