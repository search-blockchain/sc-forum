
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
    return "<div data-widget-area=\"header\">\n\t" + 
      compiled.blocks['widgets.header'](helpers, context, guard, iter, helper) + 
      "\n</div>\n<div class=\"row\">\n\t<div class=\"topic " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\n\t\t<div class=\"topic-header\">\n\t\t\t<h1 component=\"post/header\" class=\"\" itemprop=\"name\">\n\t\t\t\t<span class=\"topic-title\">\n\t\t\t\t\t<span component=\"topic/labels\">\n\t\t\t\t\t\t<i component=\"topic/scheduled\" class=\"fa fa-clock-o " + 
      (guard((context != null) ? context['scheduled'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"[[topic:scheduled]]\"></i>\n\t\t\t\t\t\t<i component=\"topic/pinned\" class=\"fa fa-thumb-tack " + 
      ((guard((context != null) ? context['scheduled'] : null) || !guard((context != null) ? context['pinned'] : null)) ?
        "hidden" :
        "") + 
      "\" title=\"" + 
      (guard((context != null) ? context['pinExpiry'] : null) ?
        "[[topic:pinned-with-expiry, " + 
          __escape(guard((context != null) ? context['pinExpiryISO'] : null)) + 
          "]]" :
        "[[topic:pinned]]") + 
      "\"></i>\n\t\t\t\t\t\t<i component=\"topic/locked\" class=\"fa fa-lock " + 
      (guard((context != null) ? context['locked'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"[[topic:locked]]\"></i>\n\t\t\t\t\t\t<i class=\"fa fa-arrow-circle-right " + 
      (guard((context != null) ? context['oldCid'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) ?
        "[[topic:moved-from, " + 
          __escape(guard((context != null && context['oldCategory'] != null) ? context['oldCategory']['name'] : null)) + 
          "]]" :
        "[[topic:moved]]") + 
      "\"></i>\n\t\t\t\t\t\t" + 
      compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</span>\n\t\t\t\t\t<span component=\"topic/title\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</span>\n\t\t\t\t</span>\n\t\t\t</h1>\n\n\t\t\t<div class=\"topic-info clearfix\">\n\t\t\t\t<div class=\"category-item inline-block\">\n\t\t\t\t\t<div role=\"presentation\" class=\"icon pull-left\" style=\"" + 
      __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null) ? context['category'] : null)])) + 
      "\">\n\t\t\t\t\t\t<i class=\"fa fa-fw " + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['icon'] : null)) + 
      "\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/category/" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['slug'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['name'] : null)) + 
      "</a>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"tags tag-list inline-block hidden-xs\">\n\t\t\t\t\t" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"inline-block hidden-xs\">\n\t\t\t\t\t<div class=\"stats text-muted\">\n\t<i class=\"fa fa-fw fa-user\" title=\"[[global:posters]]\"></i>\n\t<span title=\"" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "\" class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "</span>\n</div>\n<div class=\"stats text-muted\">\n\t<i class=\"fa fa-fw fa-pencil\" title=\"[[global:posts]]\"></i>\n\t<span component=\"topic/post-count\" title=\"" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "\" class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "</span>\n</div>\n<div class=\"stats text-muted\">\n\t<i class=\"fa fa-fw fa-eye\" title=\"[[global:views]]\"></i>\n\t<span class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "</span>\n</div>\n\t\t\t\t</div>\n\t\t\t\t" + 
      (guard((context != null) ? context['feeds:disableRSS'] : null) ?
        "" :
        "\n\t\t\t\t" + 
          (guard((context != null) ? context['rssFeedUrl'] : null) ?
            "<a class=\"hidden-xs\" target=\"_blank\" href=\"" + 
              __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
              "\"><i class=\"fa fa-rss-square\"></i></a>" :
            "") + 
          "\n\t\t\t\t") + 
      "\n\t\t\t\t" + 
      (guard((context != null) ? context['browsingUsers'] : null) ?
        "\n\t\t\t\t<div class=\"inline-block hidden-xs\">\n\t\t\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t<div class=\"topic-main-buttons pull-right inline-block\">\n\t<span class=\"loading-indicator btn pull-left hidden\" done=\"0\">\n\t\t<span class=\"hidden-xs\">[[topic:loading_more_posts]]</span> <i class=\"fa fa-refresh fa-spin\"></i>\n\t</span>\n\n\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t<button component=\"topic/mark-unread\" class=\"btn btn-sm btn-default\" title=\"[[topic:mark_unread]]\">\n\t\t<i class=\"fa fa-fw fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"></span>\n\t</button>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group topic-watch-dropdown bottom-sheet\" component=\"topic/watch\">\n\t<button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\"\n\t\t" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "title=\"[[topic:watching]]\"" :
            "") + 
          "\n\t\t" + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "title=\"[[topic:not-watching]]\"" :
            "") + 
          "\n\t\t" + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "title=\"[[topic:ignoring]]\"" :
            "") + 
          "\n\t>\n\t\t<span component=\"topic/following/menu\" " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-o\"></i></span>\n\n\t\t<span component=\"topic/not-following/menu\" " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-slash-o\"></i></span>\n\n\t\t<span component=\"topic/ignoring/menu\" " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i></span>\n\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t<li><a href=\"#\" component=\"topic/following\"><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-bell-o\"></i> [[topic:watching]]<p class=\"help-text hidden-xs\"><small>[[topic:watching.description]]</small></p></a></li>\n\t\t<li><a href=\"#\" component=\"topic/not-following\"><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-bell-slash-o\"></i> [[topic:not-watching]]<p class=\"help-text hidden-xs\"><small>[[topic:not-watching.description]]</small></p></a></li>\n\t\t<li><a href=\"#\" component=\"topic/ignoring\"><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-eye-slash\"></i> [[topic:ignoring]]<p class=\"help-text hidden-xs\"><small>[[topic:ignoring.description]]</small></p></a></li>\n\t</ul>\n</div>\n" :
        "") + 
      "\n\n\t<div title=\"[[topic:sort_by]]\" class=\"btn-group bottom-sheet hidden-xs\" component=\"thread/sort\">\n\t<button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n\t<span><i class=\"fa fa-fw fa-sort\"></i></span></button>\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t<li><a href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\"><i class=\"fa fa-fw\"></i> [[topic:oldest_to_newest]]</a></li>\n\t\t<li><a href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\"><i class=\"fa fa-fw\"></i> [[topic:newest_to_oldest]]</a></li>\n\t\t<li><a href=\"#\" class=\"most_votes\" data-sort=\"most_votes\"><i class=\"fa fa-fw\"></i> [[topic:most_votes]]</a></li>\n\t</ul>\n</div>\n\n\n\t<div class=\"inline-block\">\n\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['view_thread_tools'] : null) ?
        "\n<div title=\"[[topic:thread_tools.title]]\" class=\"btn-group thread-tools bottom-sheet\">\n\t<button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n\t\t<i class=\"fa fa-fw fa-gear\"></i>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-right\"></ul>\n</div>\n" :
        "") + 
      "\n\t</div>\n\t<div component=\"topic/reply/container\" class=\"btn-group action-bar bottom-sheet " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/compose?tid=" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "&title=" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "\" class=\"btn btn-sm btn-primary\" component=\"topic/reply\" data-ajaxify=\"false\" role=\"button\"><i class=\"fa fa-reply visible-xs-inline\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[topic:reply]]</span></a>\n\t<button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t<span class=\"caret\"></span>\n\t</button>\n\t<ul class=\"dropdown-menu pull-right\" role=\"menu\">\n\t\t<li><a href=\"#\" component=\"topic/reply-as-topic\">[[topic:reply-as-topic]]</a></li>\n\t</ul>\n</div>\n\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n" + 
              (guard((context != null) ? context['locked'] : null) ?
                "\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n" :
                "") + 
              "\n") + 
          "\n\n" + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary hidden\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n") + 
          "\n\n" :
        "\n\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n<a component=\"topic/reply/guest\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/login\" class=\"btn btn-sm btn-primary\">[[topic:guest-login-reply]]</a>\n") + 
          "\n") + 
      "\n</div>\n\n\t\t\t</div>\n\t\t</div>\n\t\t" + 
      (guard((context != null) ? context['merger'] : null) ?
        "\n\t\t<div component=\"topic/merged/message\" class=\"alert alert-warning clearfix\">\n\t\t\t<span class=\"pull-left\">[[topic:merged_message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null) ? context['mergeIntoTid'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['mergedIntoTitle'] : null)) + 
          "]]</span>\n\t\t\t<span class=\"pull-right\">\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['userslug'] : null)) + 
          "\">\n\t\t\t\t\t<strong>" + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['username'] : null)) + 
          "</strong>\n\t\t\t\t</a>\n\t\t\t\t<small class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['mergedTimestampISO'] : null)) + 
          "\"></small>\n\t\t\t</span>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null) ? context['scheduled'] : null) ?
        "" :
        "\n\t\t<div component=\"topic/deleted/message\" class=\"alert alert-warning" + 
          (guard((context != null) ? context['deleted'] : null) ?
            "" :
            " hidden") + 
          " clearfix\">\n    <span class=\"pull-left\">[[topic:deleted_message]]</span>\n    <span class=\"pull-right\">\n        " + 
          (guard((context != null) ? context['deleter'] : null) ?
            "\n        <a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['userslug'] : null)) + 
              "\">\n            <strong>" + 
              __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['username'] : null)) + 
              "</strong>\n        </a>\n        <small class=\"timeago\" title=\"" + 
              __escape(guard((context != null) ? context['deletedTimestampISO'] : null)) + 
              "\"></small>\n        " :
            "") + 
          "\n    </span>\n</div>\n\t\t") + 
      "\n\n\t\t<ul component=\"topic\" class=\"posts timeline\" data-tid=\"" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\n\t\t\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n\t\t</ul>\n\n\t\t" + 
      (guard((context != null) ? context['browsingUsers'] : null) ?
        "\n\t\t<div class=\"visible-xs\">\n\t\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-browsing-users -->\n\t\t\t<hr/>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['enableQuickReply'] : null) ?
        "\n\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "\n<div component=\"topic/quickreply/container\" class=\"clearfix quick-reply\">\n\t<div class=\"icon pull-left hidden-xs\">\n\t\t<a href=\"" + 
              (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null) ?
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null)) :
                "#") + 
              "\">\n\t\t\t" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['loggedInUser'] : null), "46", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
              "\n\t\t\t" + 
              (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null) ?
                "\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
                  __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
                  "\" title=\"[[global:" + 
                  __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
                  "]]\"></i>\n\t\t\t" :
                "") + 
              "\n\t\t</a>\n\t</div>\n\t<form method=\"post\" action=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/compose\">\n\t\t<input type=\"hidden\" name=\"tid\" value=\"" + 
              __escape(guard((context != null) ? context['tid'] : null)) + 
              "\" />\n\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
              "\" />\n\t\t<div class=\"quickreply-message\">\n\t\t\t<textarea name=\"content\" component=\"topic/quickreply/text\" class=\"form-control mousetrap\" rows=\"5\" placeholder=\"[[modules:composer.textarea.placeholder]]\"></textarea>\n\t\t\t<div class=\"imagedrop\"><div>[[topic:composer.drag_and_drop_images]]</div></div>\n\t\t</div>\n\t\t<div class=\"btn-group pull-right\">\n\t\t\t<button type=\"submit\" component=\"topic/quickreply/button\" class=\"btn btn-primary\">[[topic:post-quick-reply]]</button>\n\t\t\t<button type=\"submit\" component=\"topic/quickreply/expand\" class=\"btn btn-default\" formmethod=\"get\"><i class=\"fa fa-expand\"></i></button>\n\t\t</div>\n\t</form>\n\t<form component=\"topic/quickreply/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n\t</form>\n\n</div>\n" :
            "") + 
          "\n\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t" :
        "") + 
      "\n\n\t\t<div class=\"pagination-block text-center\">\n    <div class=\"progress-bar\"></div>\n    <div class=\"wrapper dropup\">\n        <i class=\"fa fa-2x fa-angle-double-up pointer fa-fw pagetop\"></i>\n\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <span class=\"pagination-text\"></span>\n        </a>\n\n        <i class=\"fa fa-2x fa-angle-double-down pointer fa-fw pagebottom\"></i>\n        <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n            <li>\n                <div class=\"row\">\n                    <div class=\"col-xs-8 post-content\"></div>\n                    <div class=\"col-xs-4 text-right\">\n                        <div class=\"scroller-content\">\n                            <span class=\"pointer pagetop\">[[topic:first-post]] <i class=\"fa fa-angle-double-up\"></i></span>\n                            <div class=\"scroller-container\">\n                                <div class=\"scroller-thumb\">\n                                    <span class=\"thumb-text\"></span>\n                                    <div class=\"scroller-thumb-icon\"></div>\n                                </div>\n                            </div>\n                            <span class=\"pointer pagebottom\">[[topic:last-post]] <i class=\"fa fa-angle-double-down\"></i></span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                        <button id=\"myNextPostBtn\" class=\"btn btn-default form-control\" disabled>[[topic:go-to-my-next-post]]</button>\n                    </div>\n                    <div class=\"col-xs-6\">\n                        <input type=\"number\" class=\"form-control\" id=\"indexInput\" placeholder=\"[[global:pagination.enter_index]]\">\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>\n\n\t</div>\n\t<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t\t" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n</div>\n\n<div data-widget-area=\"footer\">\n\t" + 
      compiled.blocks['widgets.footer'](helpers, context, guard, iter, helper) + 
      "\n</div>\n\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "" :
        "\n<noscript>\n\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
          iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
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
          }) + 
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
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n</noscript>\n") + 
      "\n";
  }

  compiled.blocks = {
    'widgets.header': function widgetsheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['header'] != null && context['widgets']['header'][key0] != null) ? context['widgets']['header'][key0]['html'] : null) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    },
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['icons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(guard(value));
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEncoded'] : null)) + 
          "\">\n    <span class=\"tag tag-item tag-class-" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['class'] : null)) + 
          "\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['value'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span>\n</a>\n";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li component=\"post\" class=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['deleted'] : null) ?
            "deleted" :
            "") + 
          " " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['selfPost'] : null) ?
            "self-post" :
            "") + 
          " " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['topicOwnerPost'] : null) ?
            "topic-owner-post" :
            "") + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\" data-timestamp=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestamp'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
          "\" data-userslug=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\" itemscope itemtype=\"http://schema.org/Comment\">\n\t\t\t\t\t<a component=\"post/anchor\" data-index=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) + 
          "\" id=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) + 
          "\"></a>\n\n\t\t\t\t\t<meta itemprop=\"datePublished\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\">\n\t\t\t\t\t<meta itemprop=\"dateModified\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null)) + 
          "\">\n\n\t\t\t\t\t<div class=\"clearfix post-header\">\n\t<div class=\"icon pull-left\">\n\t\t<a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "sm2x", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
          "\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
          "\" title=\"[[global:" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
          "]]\"></i>\n\t\t</a>\n\t</div>\n\n\t<small class=\"pull-left\">\n\t\t<strong>\n\t\t\t<a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\" itemprop=\"author\" data-username=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "</a>\n\t\t</strong>\n\n\t\t" + 
          iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['selectedGroups'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['slug'] : null) ?
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/groups/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['slug'] : null)) + 
                  "\"><small class=\"label group-label inline-block\" style=\"color:" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['textColor'] : null)) + 
                  ";background-color: " + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['labelColor'] : null)) + 
                  ";\">" + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['icon'] : null) ?
                    "<i class=\"fa " + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['icon'] : null)) + 
                      "\"></i> " :
                    "") + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['userTitle'] : null)) + 
                  "</small></a>\n" :
                "") + 
              "\n";
          }, function alt() {
            return "";
          }) + 
          "\n\n\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['banned'] : null) ?
            "\n\t\t<span class=\"label label-danger\">[[user:banned]]</span>\n\t\t" :
            "") + 
          "\n\n\t\t<span class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\n\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['toPid'] : null) ?
            "\n\t\t\t<a component=\"post/parent\" class=\"btn btn-xs btn-default hidden-xs\" data-topid=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['toPid'] : null)) + 
              "\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/post/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['toPid'] : null)) + 
              "\"><i class=\"fa fa-reply\"></i> @" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['parent'] != null) ? context['posts'][key0]['parent']['username'] : null) ?
                __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['parent'] != null) ? context['posts'][key0]['parent']['username'] : null)) :
                "[[global:guest]]") + 
              "</a>\n\t\t\t" :
            "") + 
          "\n\n\t\t\t<span>\n\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['custom_profile_info'] != null) ? context['posts'][key0]['user']['custom_profile_info']['length'] : null) ?
            "\n\t\t\t\t&#124;\n\t\t\t\t" + 
              iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['custom_profile_info'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t\t\t\t" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['custom_profile_info'] != null && context['posts'][key0]['user']['custom_profile_info'][key1] != null) ? context['posts'][key0]['user']['custom_profile_info'][key1]['content'] : null)) + 
                  "\n\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</span>\n\t\t</span>\n\n\t</small>\n\t<small class=\"pull-right\">\n\t\t<span class=\"bookmarked\"><i class=\"fa fa-bookmark-o\"></i></span>\n\t</small>\n\t<small class=\"pull-right\">\n\t\t<i component=\"post/edit-indicator\" class=\"fa fa-pencil-square" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['posts:history'] : null) ?
            " pointer" :
            "") + 
          " edit-icon " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['username'] : null) ?
            "" :
            "hidden") + 
          "\"></i>\n\n\t\t<small data-editor=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['userslug'] : null)) + 
          "\" component=\"post/editor\" class=\"hidden\">[[global:last_edited_by, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['username'] : null)) + 
          "]] <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null)) + 
          "\"></span></small>\n\n\t\t<span class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\n\t\t\t<a class=\"permalink\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\"><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span></a>\n\t\t</span>\n\t</small>\n</div>\n\n<br />\n\n<div class=\"content\" component=\"post/content\" itemprop=\"text\">\n\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\n</div>\n\n<div class=\"post-footer\">\n\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['signature'] : null) ?
            "\n\t<div component=\"post/signature\" data-uid=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
              "\" class=\"post-signature\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['signature'] : null)) + 
              "</div>\n\t" :
            "") + 
          "\n\n\t<div class=\"clearfix\">\n\t" + 
          (guard((context != null) ? context['hideReplies'] : null) ?
            "" :
            "\n\t<a component=\"post/reply-count\" data-target-component=\"post/replies/container\" href=\"#\" class=\"threaded-replies no-select pull-left " + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['count'] : null) ?
                "" :
                "hidden") + 
              "\">\n\t\t<span component=\"post/reply-count/avatars\" class=\"avatars " + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['hasMore'] : null) ?
                "hasMore" :
                "") + 
              "\">\n\t\t\t" + 
              iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['users'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t\t\t" + 
                  __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null && context['posts'][key0]['replies']['users'] != null) ? context['posts'][key0]['replies']['users'][key1] : null), "xs", guard((context != null) ? context['true'] : null), ""])) + 
                  "\n\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\t\t</span>\n\n\t\t<span class=\"replies-count\" component=\"post/reply-count/text\" data-replies=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['count'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['text'] : null)) + 
              "</span>\n\t\t<span class=\"replies-last hidden-xs\">[[topic:last_reply_time]] <span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['replies'] != null) ? context['posts'][key0]['replies']['timestampISO'] : null)) + 
              "\"></span></span>\n\n\t\t<i class=\"fa fa-fw fa-chevron-right\" component=\"post/replies/open\"></i>\n\t\t<i class=\"fa fa-fw fa-chevron-down hidden\" component=\"post/replies/close\"></i>\n\t\t<i class=\"fa fa-fw fa-spin fa-spinner hidden\" component=\"post/replies/loading\"></i>\n\t</a>\n\t") + 
          "\n\n\t<small class=\"pull-right\">\n\t\t<!-- This partial intentionally left blank; overwritten by nodebb-plugin-reactions -->\n\t\t<span class=\"post-tools\">\n\t\t\t<a component=\"post/reply\" href=\"#\" class=\"no-select " + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "hidden") + 
          "\">[[topic:reply]]</a>\n\t\t\t<a component=\"post/quote\" href=\"#\" class=\"no-select " + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "hidden") + 
          "\">[[topic:quote]]</a>\n\t\t</span>\n\n\t\t" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\n\t\t<span class=\"votes\">\n\t\t\t<a component=\"post/upvote\" href=\"#\" class=\"" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['upvoted'] : null) ?
                "upvoted" :
                "") + 
              "\">\n\t\t\t\t<i class=\"fa fa-chevron-up\"></i>\n\t\t\t</a>\n\n\t\t\t<span component=\"post/vote-count\" data-votes=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['votes'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['votes'] : null)) + 
              "</span>\n\n\t\t\t" + 
              (guard((context != null) ? context['downvote:disabled'] : null) ?
                "" :
                "\n\t\t\t<a component=\"post/downvote\" href=\"#\" class=\"" + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['downvoted'] : null) ?
                    "downvoted" :
                    "") + 
                  "\">\n\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\n\t\t\t</a>\n\t\t\t") + 
              "\n\t\t</span>\n\t\t") + 
          "\n\n\t\t<span component=\"post/tools\" class=\"dropdown moderator-tools bottom-sheet " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['display_post_menu'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t<a href=\"#\" data-toggle=\"dropdown\" data-ajaxify=\"false\"><i class=\"fa fa-fw fa-ellipsis-v\"></i></a>\n\t<ul class=\"dropdown-menu dropdown-menu-right hidden\" role=\"menu\"></ul>\n</span>\n\n\t</small>\n\t</div>\n\t<div component=\"post/replies/container\"></div>\n</div>\n\t\t\t\t</li>\n\t\t\t\t" + 
          __escape(helper(context, helpers, 'renderTopicEvents', [index, guard((context != null && context['config'] != null) ? context['config']['topicPostSort'] : null)])) + 
          "\n\t\t\t";
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
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['sidebar'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null && context['widgets']['sidebar'][key0] != null) ? context['widgets']['sidebar'][key0]['html'] : null) + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'widgets.footer': function widgetsfooter(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['footer'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['footer'] != null && context['widgets']['footer'][key0] != null) ? context['widgets']['footer'][key0]['html'] : null) + 
          "\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
