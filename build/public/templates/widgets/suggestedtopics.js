
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
    return "<div class=\"category\">\n\t<ul component=\"category\" class=\"topic-list\" itemscope itemtype=\"http://www.schema.org/ItemList\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\" data-set=\"" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "\">\n\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n\n</div>\n";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li component=\"category/topic\" class=\"row clearfix category-item " + 
          __escape(helper(context, helpers, 'generateTopicClass', [guard(value)])) + 
          "\" data-tid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['cid'] : null)) + 
          "\" itemprop=\"itemListElement\" itemscope itemtype=\"https://schema.org/ListItem\">\n\t\t<link itemprop=\"url\" content=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "\" />\n\t\t<meta itemprop=\"name\" content=\"" + 
          __escape(helper(context, helpers, 'stripTags', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)])) + 
          "\" />\n\t\t<meta itemprop=\"itemListOrder\" content=\"descending\" />\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" />\n\t\t<a id=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" component=\"topic/anchor\"></a>\n\n\t\t<div class=\"col-md-6 col-sm-9 col-xs-10 content\">\n\t\t\t<div class=\"avatar pull-left\">\n\t\t\t\t" + 
          (guard((context != null) ? context['showSelect'] : null) ?
            "\n\t\t\t\t<div class=\"select\" component=\"topic/select\">\n\t\t\t\t\t" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null) ?
                "\n\t\t\t\t\t<img src=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null && context['topics'][key0]['thumbs']['0'] != null) ? context['topics'][key0]['thumbs']['0']['url'] : null)) + 
                  "\" class=\"user-img not-responsive\" />\n\t\t\t\t\t" :
                "\n\t\t\t\t\t" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['user'] : null), "46", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
                  "\n\t\t\t\t\t") + 
              "\n\t\t\t\t\t<i class=\"fa fa-check\"></i>\n\t\t\t\t</div>\n\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t" + 
          (guard((context != null) ? context['showSelect'] : null) ?
            "" :
            "\n\t\t\t\t<a href=\"" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
                "#") + 
              "\" class=\"pull-left\">\n\t\t\t\t\t" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null) ? context['topics'][key0]['thumbs']['length'] : null) ?
                "\n\t\t\t\t\t<img src=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['thumbs'] != null && context['topics'][key0]['thumbs']['0'] != null) ? context['topics'][key0]['thumbs']['0']['url'] : null)) + 
                  "\" class=\"user-img not-responsive\" />\n\t\t\t\t\t" :
                "\n\t\t\t\t\t" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['user'] : null), "46", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
                  "\n\t\t\t\t\t") + 
              "\n\t\t\t\t</a>\n\t\t\t\t") + 
          "\n\t\t\t</div>\n\n\t\t\t<h2 component=\"topic/header\" class=\"title\">\n\t\t\t\t<i component=\"topic/scheduled\" class=\"fa fa-clock-o " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) ?
            "" :
            "hide") + 
          "\" title=\"[[topic:scheduled]]\"></i>\n\t\t\t\t<i component=\"topic/pinned\" class=\"fa fa-thumb-tack " + 
          ((guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['scheduled'] : null) || !guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinned'] : null)) ?
            "hide" :
            "") + 
          "\" title=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiry'] : null) ?
            "[[topic:pinned-with-expiry, " + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiryISO'] : null)) + 
              "]]" :
            "[[topic:pinned]]") + 
          "\"></i>\n\t\t\t\t<i component=\"topic/locked\" class=\"fa fa-lock " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['locked'] : null) ?
            "" :
            "hide") + 
          "\" title=\"[[topic:locked]]\"></i>\n\t\t\t\t<i component=\"topic/moved\" class=\"fa fa-arrow-circle-right " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['oldCid'] : null) ?
            "" :
            "hide") + 
          "\" title=\"[[topic:moved]]\"></i>\n\t\t\t\t" + 
          iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['icons'] : null), function each(key1, index, length, value) {
            var key = key1;
            return __escape(guard(value));
          }, function alt() {
            return "";
          }) + 
          "\n\n\n\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['noAnchor'] : null) ?
            "\n\t\t\t\t<span>" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
              "</span><br />\n\t\t\t\t" :
            "\n\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null)) :
                "") + 
              "\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
              "</a><br />\n\t\t\t\t") + 
          "\n\n\t\t\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "" :
            "\n\t\t\t\t<small>\n\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['slug'] : null)) + 
              "\"><span class=\"fa-stack fa-lg\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['category'] : null)])) + 
              "\"><i style=\"color:" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['color'] : null)) + 
              ";\" class=\"fa " + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['icon'] : null)) + 
              " fa-stack-1x\"></i></span> " + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['name'] : null)) + 
              "</a> &bull;\n\t\t\t\t</small>\n\t\t\t\t") + 
          "\n\n\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null) ? context['topics'][key0]['tags']['length'] : null) ?
            "\n\t\t\t\t<span class=\"tag-list hidden-xs\">\n\t\t\t\t\t" + 
              iter(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tags'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/tags/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEncoded'] : null)) + 
                  "\"><span class=\"tag tag-item tag-class-" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['class'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null && context['topics'][key0]['tags'][key1] != null) ? context['topics'][key0]['tags'][key1]['valueEscaped'] : null)) + 
                  "</span></a>\n\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\t\t\t\t\t<small>&bull;</small>\n\t\t\t\t</span>\n\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t<small class=\"hidden-xs\"><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) + 
          "\"></span> &bull; <a href=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['displayname'] : null)) + 
          "</a></small>\n\t\t\t\t<small class=\"visible-xs-inline\">\n\t\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestamp'] : null) ?
            "\n\t\t\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
              "\"></span>\n\t\t\t\t\t" :
            "\n\t\t\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) + 
              "\"></span>\n\t\t\t\t\t") + 
          "\n\t\t\t\t</small>\n\t\t\t</h2>\n\t\t</div>\n\n\t\t<div class=\"mobile-stat col-xs-2 visible-xs text-right\">\n\t\t\t<span class=\"human-readable-number\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
          "</span> <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
          "\"><i class=\"fa fa-arrow-circle-right\"></i></a>\n\t\t</div>\n\n\t\t<div class=\"col-md-1 hidden-sm hidden-xs stats stats-votes\">\n\t\t\t" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\n\t\t\t<span class=\"human-readable-number\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)) + 
              "</span><br />\n\t\t\t<small>[[global:votes]]</small>\n\t\t\t") + 
          "\n\t\t</div>\n\n\t\t<div class=\"col-md-1 hidden-sm hidden-xs stats stats-postcount\">\n\t\t\t<span class=\"human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
          "</span><br />\n\t\t\t<small>[[global:posts]]</small>\n\t\t</div>\n\n\t\t<div class=\"col-md-1 hidden-sm hidden-xs stats stats-viewcount\">\n\t\t\t<span class=\"human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
          "</span><br />\n\t\t\t<small>[[global:views]]</small>\n\t\t</div>\n\n\t\t<div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\n\t\t\t<div class=\"card background-link-container\" style=\"border-color: " + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['bgColor'] : null)) + 
          "\">\n\t\t\t\t<a class=\"background-link\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
          "\"></a>\n\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['unreplied'] : null) ?
            "\n\t\t\t\t<p>\n\t\t\t\t\t[[category:no_replies]]\n\t\t\t\t</p>\n\t\t\t\t" :
            "\n\t\t\t\t" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['pid'] : null) ?
                "\n\t\t\t\t<p>\n\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) + 
                  "\">" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['user'] : null), "24", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
                  "</a>\n\t\t\t\t\t<a class=\"permalink\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/topic/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                  "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
                  "\">\n\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
                  "\"></span>\n\t\t\t\t\t</a>\n\t\t\t\t</p>\n\t\t\t\t<div class=\"post-content\">\n\t\t\t\t\t" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['content'] : null)) + 
                  "\n\t\t\t\t</div>\n\t\t\t\t" :
                "") + 
              "\n\t\t\t\t") + 
          "\n\t\t\t</div>\n\t\t</div>\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
