
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
    return "<li component=\"categories/category\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\" data-numRecentReplies=\"1\" class=\"row clearfix category-" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\n\t<meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\">\n\n\t<div class=\"content col-xs-12 " + 
      (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
        "col-md-10 col-sm-12" :
        "col-md-7 col-sm-9") + 
      "\">\n\t\t<div class=\"icon pull-left\" style=\"" + 
      __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
      "\">\n\t\t\t<i class=\"fa fa-fw " + 
      __escape(guard((context != null) ? context['icon'] : null)) + 
      "\"></i>\n\t\t</div>\n\n\t\t<h2 class=\"title\">\n\t\t\t" + 
      (guard((context != null) ? context['isSection'] : null) ?
        "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n" :
        "\n" + 
          (guard((context != null) ? context['link'] : null) ?
            "\n<a href=\"" + 
              __escape(guard((context != null) ? context['link'] : null)) + 
              "\" itemprop=\"url\">\n" :
            "\n<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null)) + 
              "\" itemprop=\"url\">\n") + 
          "\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\n</a>\n") + 
      "\n\t\t</h2>\n\t\t<div>\n\t\t\t" + 
      (guard((context != null) ? context['descriptionParsed'] : null) ?
        "\n\t\t\t<div class=\"description\">\n\t\t\t\t" + 
          __escape(guard((context != null) ? context['descriptionParsed'] : null)) + 
          "\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
        "" :
        "\n\t\t\t" + 
          __escape(helper(context, helpers, 'generateChildrenCategories', [guard(value)])) + 
          "\n\t\t\t") + 
      "\n\t\t</div>\n\t\t<span class=\"visible-xs pull-right\">\n\t\t\t" + 
      (guard((context != null && context['teaser'] != null) ? context['teaser']['timestampISO'] : null) ?
        "\n\t\t\t<a class=\"permalink\" href=\"" + 
          __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['url'] : null)) + 
          "\">\n\t\t\t\t<small class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['timestampISO'] : null)) + 
          "\"></small>\n\t\t\t</a>\n\t\t\t" :
        "") + 
      "\n\t\t</span>\n\t</div>\n\n\t" + 
      (guard((context != null) ? context['link'] : null) ?
        "" :
        "\n\t<div class=\"col-md-1 hidden-sm hidden-xs stats\">\n\t\t<span class=\"" + 
          __escape(guard((context != null) ? context['unread-class'] : null)) + 
          " human-readable-number\" title=\"" + 
          __escape(guard((context != null) ? context['totalTopicCount'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['totalTopicCount'] : null)) + 
          "</span><br />\n\t\t<small>[[global:topics]]</small>\n\t</div>\n\t<div class=\"col-md-1 hidden-sm hidden-xs stats\">\n\t\t<span class=\"" + 
          __escape(guard((context != null) ? context['unread-class'] : null)) + 
          " human-readable-number\" title=\"" + 
          __escape(guard((context != null) ? context['totalPostCount'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['totalPostCount'] : null)) + 
          "</span><br />\n\t\t<small>[[global:posts]]</small>\n\t</div>\n\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
            "" :
            "\n\t<div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\n\t\t<div class=\"card background-link-container\" style=\"border-color: " + 
              __escape(guard((context != null) ? context['bgColor'] : null)) + 
              "\">\n\t" + 
              compiled.blocks['./posts'](helpers, context, guard, iter, helper) + 
              "\n\n\t" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
                "" :
                "\n\t<div component=\"category/posts\">\n\t\t<div class=\"post-content\">\n\t\t\t[[category:no_new_posts]]\n\t\t</div>\n\t</div>\n\t") + 
              "\n</div>\n\n\t</div>\n\t") + 
          "\n\t") + 
      "\n</li>\n";
  }

  compiled.blocks = {
    './posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          (index === 0 ?
            "\n\t<div component=\"category/posts\">\n\t\t<a class=\"background-link\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\"></a>\n\t\t<p>\n\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n\t\t\t<a class=\"permalink\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\">\n\t\t\t\t<small class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
              "\"></small>\n\t\t\t</a>\n\t\t</p>\n\t\t<div class=\"post-content\">\n\t\t\t" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
              "\n\t\t</div>\n\t</div>\n\t" :
            "") + 
          "\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
