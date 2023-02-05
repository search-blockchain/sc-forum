
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
      "\n\n\n<div class=\"search\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12\">\n\t\t\t<form id=\"advanced-search\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<label>[[global:search]]</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"search-input\" placeholder=\"[[global:search]]\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<label>[[search:in]]</label>\n\t\t\t\t\t\t\t<select id=\"search-in\" class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=\"titlesposts\">[[search:titles-posts]]</option>\n\t\t\t\t\t\t\t\t<option value=\"titles\">[[search:titles]]</option>\n\t\t\t\t\t\t\t\t<option value=\"posts\">[[global:posts]]</option>\n\t\t\t\t\t\t\t\t<option value=\"categories\">[[global:header.categories]]</option>\n\t\t\t\t\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['search:users'] : null) ?
        "\n\t\t\t\t\t\t\t\t<option value=\"users\">[[global:users]]</option>\n\t\t\t\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['search:tags'] : null) ?
        "\n\t\t\t\t\t\t\t\t<option value=\"tags\">[[tags:tags]]</option>\n\t\t\t\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<label>[[search:match-words]]</label>\n\t\t\t\t\t\t\t<select id=\"match-words-filter\" class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=\"all\">[[search:all]]</option>\n\t\t\t\t\t\t\t\t<option value=\"any\">[[search:any]]</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t<label>&nbsp;</label>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary form-control\">[[global:search]]</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\".search-options\">\n\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-sort\"></i> [[search:advanced-search]]</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body search-options collapse " + 
      (guard((context != null) ? context['expandSearch'] : null) ?
        "in" :
        "") + 
      "\">\n\t\t\t\t\t\t<div class=\"form-group post-search-item\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<label>[[search:in-categories]]</label>\n\t\t\t\t\t\t\t\t\t<select multiple class=\"form-control\" id=\"posted-in-categories\" size=\"" + 
      __escape(guard((context != null) ? context['allCategoriesCount'] : null)) + 
      "\">\n\t\t\t\t\t\t\t\t\t\t" + 
      compiled.blocks['allCategories'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"search-children\"> [[search:search-child-categories]]\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group post-search-item\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>[[search:posted-by]]</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"posted-by-user\" placeholder=\"[[search:posted-by]]\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>[[search:has-tags]]</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"has-tags\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"form-group post-search-item\">\n\t\t\t\t\t\t\t\t\t\t<label>[[search:reply-count]]</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"reply-count-filter\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"atleast\">[[search:at-least]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"atmost\">[[search:at-most]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"reply-count\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"form-group post-search-item\">\n\t\t\t\t\t\t\t\t\t\t<label>[[search:post-time]]</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"post-time-filter\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"newer\">[[search:newer-than]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"older\">[[search:older-than]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"post-time-range\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">[[search:any-date]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"86400\">[[search:yesterday]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"604800\">[[search:one-week]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1209600\">[[search:two-weeks]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2592000\">[[search:one-month]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"7776000\">[[search:three-months]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"15552000\">[[search:six-months]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"31104000\">[[search:one-year]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"form-group post-search-item\">\n\t\t\t\t\t\t\t\t\t\t<label>[[search:sort-by]]</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"post-sort-by\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"relevance\">[[search:relevance]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"timestamp\">[[search:post-time]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"votes\">[[search:votes]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"topic.lastposttime\">[[search:last-reply-time]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"topic.title\">[[search:topic-title]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"topic.postcount\">[[search:number-of-replies]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"topic.viewcount\">[[search:number-of-views]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"topic.votes\">[[search:topic-votes]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"topic.timestamp\">[[search:topic-start-date]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"user.username\">[[search:username]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"category.name\">[[search:category]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"post-sort-direction\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"desc\">[[search:descending]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"asc\">[[search:ascending]]</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"form-group post-search-item\">\n\t\t\t\t\t\t\t\t\t\t<label>[[search:show-results-as]]</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"options\" id=\"show-as-posts\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t[[global:posts]]\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"options\" id=\"show-as-topics\">\n\t\t\t\t\t\t\t\t\t\t\t\t[[global:topics]]\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">[[global:search]]</button>\n\t\t\t\t\t\t\t<a class=\"btn btn-default\" id=\"save-preferences\" href=\"#\">[[search:save-preferences]]</a>\n\t\t\t\t\t\t\t<a class=\"btn btn-default\" id=\"clear-preferences\" href=\"#\">[[search:clear-preferences]]</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div id=\"results\" class=\"search-results col-md-12\" data-search-query=\"" + 
      __escape(guard((context != null) ? context['search_query'] : null)) + 
      "\">\n\t" + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "\n\t<div class=\"alert alert-info\">[[search:results_matching, " + 
          __escape(guard((context != null) ? context['matchCount'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['search_query'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['time'] : null)) + 
          "]] </div>\n\t" :
        "\n\t" + 
          (guard((context != null) ? context['search_query'] : null) ?
            "\n\t<div class=\"alert alert-warning\">[[search:no-matches]]</div>\n\t" :
            "") + 
          "\n\t") + 
      "\n\n\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n\n\t" + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "\n\t<ul id=\"users-container\" class=\"users-container\">\n\t" + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\n\t</ul>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "\n\t" + 
          compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
          "\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null && context['categories'] != null) ? context['categories']['length'] : null) ?
        "\n\t<ul class=\"categories\">\n\t\t" + 
          compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
          "\n\t</ul>\n\t" :
        "") + 
      "\n\n\t<div component=\"pagination\" class=\"text-center pagination-container" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n\t<ul class=\"pagination hidden-xs\">\n\t\t<li class=\"previous pull-left" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t<li class=\"next pull-right" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class=\"pagination hidden-sm hidden-md hidden-lg\">\n\t\t<li class=\"first" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
      "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n\t\t</li>\n\n\t\t<li class=\"previous" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\n\t\t\t<a href=\"#\">" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
      " / " + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "</a>\n\t\t</li>\n\n\t\t<li class=\"next" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\n\t\t<li class=\"last" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n</div>\n\t</div>\n</div>\n";
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
    'allCategories': function allCategories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['allCategories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['allCategories'] != null && context['allCategories'][key0] != null) ? context['allCategories'][key0]['value'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['allCategories'] != null && context['allCategories'][key0] != null) ? context['allCategories'][key0]['text'] : null)) + 
          "</option>\n\t\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<div class=\"topic-row panel panel-default clearfix\">\n\t\t<div class=\"panel-body\">\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t\t<span class=\"search-result-text search-result-title\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "</a></span>\n\t\t\t<br/>\n\t\t\t" + 
          (guard((context != null) ? context['showAsPosts'] : null) ?
            "\n\t\t\t<div class=\"search-result-text\">\n\t\t\t\t" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
              "\n\t\t\t\t<p class=\"fade-out\"></p>\n\t\t\t</div>\n\t\t\t" :
            "") + 
          "\n\n\t\t\t<small class=\"post-info pull-right\">\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\"><span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['category'] : null)])) + 
          "\"><i style=\"color:" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['color'] : null)) + 
          ";\" class=\"fa " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['icon'] : null)) + 
          " fa-stack-1x\"></i></span> " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "</a> &bull;\n\t\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\n\t\t\t</small>\n\t\t</div>\n\t</div>\n\t";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"users-box registered-user\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">\n\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "lg", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t<br/>\n\t<div class=\"user-info\">\n\t\t<span>\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['status'] : null)) + 
          "\" title=\"[[global:" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['status'] : null)) + 
          "]]\"></i>\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\n\t\t</span>\n\t\t<br/>\n\n\t\t" + 
          (guard((context != null) ? context['section_online'] : null) ?
            "\n\t\t<div class=\"lastonline\">\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['lastonlineISO'] : null)) + 
              "\"></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_joindate'] : null) ?
            "\n\t\t<div class=\"joindate\">\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
              "\"></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_sort-reputation'] : null) ?
            "\n\t\t<div class=\"reputation\">\n\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t<span class=\"formatted-number\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_sort-posts'] : null) ?
            "\n\t\t<div class=\"post-count\">\n\t\t\t<i class=\"fa fa-pencil\"></i>\n\t\t\t<span class=\"formatted-number\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)) + 
              "</span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\n\t\t" + 
          (guard((context != null) ? context['section_flagged'] : null) ?
            "\n\t\t<div class=\"flag-count\">\n\t\t\t<i class=\"fa fa-flag\"></i>\n\t\t\t<span><a class=\"formatted-number\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/flags?targetUid=" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)) + 
              "</a></span>\n\t\t</div>\n\t\t" :
            "") + 
          "\n\t</div>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<h3 class=\"pull-left tag-container\">\n\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null)) + 
          "\" data-value=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\"><span class=\"tag-item tag-class-" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['class'] : null)) + 
          "\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span><span class=\"tag-topic-count human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "</span></a>\n</h3>\n";
      }, function alt() {
        return "";
      });
    },
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li component=\"categories/category\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-numRecentReplies=\"1\" class=\"row clearfix category-" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\">\n\t<meta itemprop=\"name\" content=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
          "\">\n\n\t<div class=\"content col-xs-12 " + 
          (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
            "col-md-10 col-sm-12" :
            "col-md-7 col-sm-9") + 
          "\">\n\t\t<div class=\"icon pull-left\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
          "\">\n\t\t\t<i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null)) + 
          "\"></i>\n\t\t</div>\n\n\t\t<h2 class=\"title\">\n\t\t\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isSection'] : null) ?
            "\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\n" :
            "\n" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
                  "\" itemprop=\"url\">\n" :
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['slug'] : null)) + 
                  "\" itemprop=\"url\">\n") + 
              "\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\n</a>\n") + 
          "\n\t\t</h2>\n\t\t<div>\n\t\t\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null) ?
            "\n\t\t\t<div class=\"description\">\n\t\t\t\t" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null)) + 
              "\n\t\t\t</div>\n\t\t\t" :
            "") + 
          "\n\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
            "" :
            "\n\t\t\t" + 
              __escape(helper(context, helpers, 'generateChildrenCategories', [guard(value)])) + 
              "\n\t\t\t") + 
          "\n\t\t</div>\n\t\t<span class=\"visible-xs pull-right\">\n\t\t\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['teaser'] != null) ? context['categories'][key0]['teaser']['timestampISO'] : null) ?
            "\n\t\t\t<a class=\"permalink\" href=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['teaser'] != null) ? context['categories'][key0]['teaser']['url'] : null)) + 
              "\">\n\t\t\t\t<small class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['teaser'] != null) ? context['categories'][key0]['teaser']['timestampISO'] : null)) + 
              "\"></small>\n\t\t\t</a>\n\t\t\t" :
            "") + 
          "\n\t\t</span>\n\t</div>\n\n\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
            "" :
            "\n\t<div class=\"col-md-1 hidden-sm hidden-xs stats\">\n\t\t<span class=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['unread-class'] : null)) + 
              " human-readable-number\" title=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalTopicCount'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalTopicCount'] : null)) + 
              "</span><br />\n\t\t<small>[[global:topics]]</small>\n\t</div>\n\t<div class=\"col-md-1 hidden-sm hidden-xs stats\">\n\t\t<span class=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['unread-class'] : null)) + 
              " human-readable-number\" title=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalPostCount'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalPostCount'] : null)) + 
              "</span><br />\n\t\t<small>[[global:posts]]</small>\n\t</div>\n\t" + 
              (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
                "" :
                "\n\t<div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\n\t\t<div class=\"card background-link-container\" style=\"border-color: " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['bgColor'] : null)) + 
                  "\">\n\t" + 
                  iter(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['posts'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\n\t" + 
                      (index === 0 ?
                        "\n\t<div component=\"category/posts\">\n\t\t<a class=\"background-link\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['topic'] != null) ? context['categories'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\"></a>\n\t\t<p>\n\t\t\t<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/user/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['userslug'] : null)) + 
                          "\">" + 
                          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
                          "</a>\n\t\t\t<a class=\"permalink\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['topic'] != null) ? context['categories'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\">\n\t\t\t\t<small class=\"timeago\" title=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['timestampISO'] : null)) + 
                          "\"></small>\n\t\t\t</a>\n\t\t</p>\n\t\t<div class=\"post-content\">\n\t\t\t" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['content'] : null)) + 
                          "\n\t\t</div>\n\t</div>\n\t" :
                        "") + 
                      "\n\t";
                  }, function alt() {
                    return "";
                  }) + 
                  "\n\n\t" + 
                  (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null) ? context['categories'][key0]['posts']['length'] : null) ?
                    "" :
                    "\n\t<div component=\"category/posts\">\n\t\t<div class=\"post-content\">\n\t\t\t[[category:no_new_posts]]\n\t\t</div>\n\t</div>\n\t") + 
                  "\n</div>\n\n\t</div>\n\t") + 
              "\n\t") + 
          "\n</li>\n\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n\t\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n\t\t\t</li>\n\t\t\t" :
            "\n\t\t\t<li class=\"page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n\t\t\t\t<a href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n\t\t\t</li>\n\t\t\t") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
