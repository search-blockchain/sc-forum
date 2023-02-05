
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
      "\n\n\n<div class=\"row ip-blacklist\">\n\t<div class=\"col-lg-12\">\n\t\t<p class=\"lead\">\n\t\t\t[[ip-blacklist:lead]]\n\t\t</p>\n\t\t<p>\n\t\t\t[[ip-blacklist:description]]\n\t\t</p>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">[[ip-blacklist:active-rules]]</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<textarea id=\"blacklist-rules\">" + 
      __escape(guard((context != null) ? context['rules'] : null)) + 
      "</textarea><br />\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" data-action=\"test\">\n\t\t\t\t\t\t\t<i class=\"fa fa-bomb\"></i> [[ip-blacklist:validate]]\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" data-action=\"apply\">\n\t\t\t\t\t\t\t<i class=\"fa fa-save\"></i> [[ip-blacklist:apply]]\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">[[ip-blacklist:hints]]</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t[[ip-blacklist:hint-1]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t[[ip-blacklist:hint-2]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div><canvas id=\"blacklist:hourly\" height=\"250\"></canvas></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-footer\"><small>[[ip-blacklist:analytics.blacklist-hourly]]</small></div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div><canvas id=\"blacklist:daily\" height=\"250\"></canvas></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-footer\"><small>[[ip-blacklist:analytics.blacklist-daily]]</small></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>";
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
