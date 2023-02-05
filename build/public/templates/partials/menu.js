
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
    return "\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle pull-left\" id=\"mobile-menu\">\n\t\t\t\t\t<i class=\"fa fa-lg fa-fw fa-bars unread-count\" data-content=\"" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['mobileUnread'] : null)) + 
      "\" data-unread-url=\"" + 
      __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['unreadUrl'] : null)) + 
      "\"></i>\n\t\t\t\t</button>\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" id=\"mobile-chats\">\n\t\t\t\t\t<span component=\"notifications/icon\" class=\"notification-icon fa fa-fw fa-bell-o unread-count\" data-content=\"" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
          "\"></span>\n\t\t\t\t\t<span component=\"chat/icon\" class=\"notification-icon fa fa-fw fa-comments unread-count\" data-content=\"" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
          "\"></span>\n\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "md", guard((context != null) ? context['true'] : null)])) + 
          "\n\t\t\t\t</button>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['searchEnabled'] : null) ?
        "\n\t\t\t\t<div class=\"navbar-search visible-xs pull-right\">\n\t\t\t\t\t<form action=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/search\" method=\"GET\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-link\"><i class=\"fa fa-lg fa-fw fa-search\" title=\"[[global:header.search]]\"></i></button>\n\t\t\t\t\t\t<input autocomplete=\"off\" type=\"text\" class=\"form-control hidden\" name=\"term\" placeholder=\"[[global:search]]\"/>\n\t\t\t\t\t\t<button class=\"btn btn-primary hidden\" type=\"submit\"></button>\n\t\t\t\t\t\t<input type=\"text\" class=\"hidden\" name=\"in\" value=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['searchDefaultInQuick'] : null)) + 
          "\" />\n\t\t\t\t\t</form>\n\t\t\t\t\t<div class=\"quick-search-container hidden\">\n\t\t\t\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null) ? context['brand:logo'] : null) ?
        "\n\t\t\t\t<a href=\"" + 
          (guard((context != null) ? context['brand:logo:url'] : null) ?
            __escape(guard((context != null) ? context['brand:logo:url'] : null)) :
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/") + 
          "\">\n\t\t\t\t\t<img alt=\"" + 
          __escape(guard((context != null) ? context['brand:logo:alt'] : null)) + 
          "\" class=\"" + 
          __escape(guard((context != null) ? context['brand:logo:display'] : null)) + 
          " forum-logo\" src=\"" + 
          __escape(guard((context != null) ? context['brand:logo'] : null)) + 
          "?" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
          "\" />\n\t\t\t\t</a>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['showSiteTitle'] : null) ?
        "\n\t\t\t\t<a href=\"" + 
          (guard((context != null) ? context['title:url'] : null) ?
            __escape(guard((context != null) ? context['title:url'] : null)) :
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/") + 
          "\">\n\t\t\t\t\t<h1 class=\"navbar-brand forum-title\">" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
          "</h1>\n\t\t\t\t</a>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t<div component=\"navbar/title\" class=\"visible-xs hidden\">\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id=\"nav-dropdown\" class=\"hidden-xs\">\n\t\t\t\t" + 
      (guard((context != null) ? context['maintenanceHeader'] : null) ?
        "\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/login\">\n\t\t\t\t\t\t\t<i class=\"fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg\"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t" :
        "\n\t\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
            "\n\n\t\t\t\t<ul id=\"logged-in-menu\" class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t<li class=\"notifications dropdown text-center hidden-xs\" component=\"notifications\">\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/notifications\" title=\"[[global:header.notifications]]\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" id=\"notif_dropdown\" data-ajaxify=\"false\" role=\"button\">\n\t\t\t\t\t\t\t<i component=\"notifications/icon\" class=\"fa fa-fw fa-bell-o unread-count\" data-content=\"" + 
              __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
              "\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"notif_dropdown\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<ul component=\"notifications/list\" class=\"notification-list\">\n\t\t\t\t\t\t\t\t\t<li class=\"loading-text\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-refresh fa-spin\"></i> [[global:notifications.loading]]</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"notif-dropdown-link\">\n\t\t\t\t\t\t\t\t<div class=\"btn-group btn-group-justified\">\n\t\t\t\t\t\t\t\t\t<a role=\"button\" href=\"#\" class=\"btn btn-secondary mark-all-read\"><i class=\"fa fa-check-double\"></i> [[notifications:mark_all_read]]</a>\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-secondary\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/notifications\"><i class=\"fa fa-list\"></i> [[notifications:see_all]]</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t" + 
              (guard((context != null) ? context['canChat'] : null) ?
                "\n\t\t\t\t\t<li class=\"chats dropdown\">\n\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
                  "/chats\" title=\"[[global:header.chats]]\" id=\"chat_dropdown\" component=\"chat/dropdown\" data-ajaxify=\"false\" role=\"button\">\n\t\t\t\t\t\t\t<i component=\"chat/icon\" class=\"fa fa-comment-o fa-fw unread-count\" data-content=\"" + 
                  __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
                  "\"></i> <span class=\"visible-xs-inline\">[[global:header.chats]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"chat_dropdown\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<ul component=\"chat/list\" class=\"chat-list chats-list\">\n\t\t\t\t\t\t\t\t\t<li class=\"loading-text\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-refresh fa-spin\"></i> [[global:chats.loading]]</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"notif-dropdown-link\">\n\t\t\t\t\t\t\t\t<div class=\"btn-group btn-group-justified\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-secondary mark-all-read\" href=\"#\" component=\"chats/mark-all-read\"><i class=\"fa fa-check-double\"></i> [[modules:chat.mark_all_read]]</a>\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-secondary\" href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
                  "/chats\"><i class=\"fa fa-comments\"></i> [[modules:chat.see_all]]</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
                "") + 
              "\n\n\t\t\t\t\t<li id=\"user_label\" class=\"dropdown\">\n\t\t\t\t\t\t<label for=\"user-control-list-check\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" id=\"user_dropdown\" title=\"[[global:header.profile]]\" role=\"button\">\n\t\t\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "md", guard((context != null) ? context['true'] : null)])) + 
              "\n\t\t\t\t\t\t\t<span id=\"user-header-name\" class=\"visible-xs-inline\">" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
              "</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"hidden\" id=\"user-control-list-check\" aria-hidden=\"true\">\n\t\t\t\t\t\t<ul id=\"user-control-list\" component=\"header/usercontrol\" class=\"dropdown-menu\" aria-labelledby=\"user_dropdown\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component=\"header/profilelink\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "\">\n\t\t\t\t\t\t\t\t\t<i component=\"user/status\" class=\"fa fa-fw fa-circle status " + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
              "\"></i> <span component=\"header/username\">" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
              "</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"online\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status online\"></i><span " + 
              (guard((context != null && context['user'] != null) ? context['user']['online'] : null) ?
                "class=\"bold\"" :
                "") + 
              "> [[global:online]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"away\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status away\"></i><span " + 
              (guard((context != null && context['user'] != null) ? context['user']['away'] : null) ?
                "class=\"bold\"" :
                "") + 
              "> [[global:away]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"dnd\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status dnd\"></i><span " + 
              (guard((context != null && context['user'] != null) ? context['user']['dnd'] : null) ?
                "class=\"bold\"" :
                "") + 
              "> [[global:dnd]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"offline\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status offline\"></i><span " + 
              (guard((context != null && context['user'] != null) ? context['user']['offline'] : null) ?
                "class=\"bold\"" :
                "") + 
              "> [[global:invisible]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component=\"header/profilelink/edit\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/edit\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-edit\"></i> <span>[[user:edit-profile]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component=\"header/profilelink/settings\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/settings\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-gear\"></i> <span>[[user:settings]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t" + 
              (guard((context != null) ? context['showModMenu'] : null) ?
                "\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\n\t\t\t\t\t\t\t<li class=\"dropdown-header\">[[pages:moderator-tools]]</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/flags\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-flag\"></i> <span>[[pages:flagged-content]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/post-queue\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-list-alt\"></i> <span>[[pages:post-queue]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/ip-blacklist\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-ban\"></i> <span>[[pages:ip-blacklist]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t" + 
                  (guard((context != null) ? context['postQueueEnabled'] : null) ?
                    "\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"" + 
                      __escape(guard((context != null) ? context['relative_path'] : null)) + 
                      "/post-queue\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-list-alt\"></i> <span>[[pages:post-queue]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t" :
                    "") + 
                  "\n\t\t\t\t\t\t\t") + 
              "\n\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\n\t\t\t\t\t\t\t<li component=\"user/logout\">\n\t\t\t\t\t\t\t\t<form method=\"post\" action=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/logout\">\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
              "\">\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"noscript\" value=\"true\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-link\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-sign-out\"></i><span> [[global:logout]]</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\t\t\t\t" :
            "\n\t\t\t\t<ul id=\"logged-out-menu\" class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t" + 
              (guard((context != null) ? context['allowRegistration'] : null) ?
                "\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/register\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil fa-fw hidden-sm hidden-md hidden-lg\"></i>\n\t\t\t\t\t\t\t<span>[[global:register]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/login\">\n\t\t\t\t\t\t\t<i class=\"fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg\"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['searchEnabled'] : null) ?
            "\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<form id=\"search-form\" class=\"navbar-form navbar-right hidden-xs\" role=\"search\" method=\"GET\">\n\t\t\t\t\t\t\t<button id=\"search-button\" type=\"button\" class=\"btn btn-link\"><i class=\"fa fa-search fa-fw\" title=\"[[global:header.search]]\"></i></button>\n\t\t\t\t\t\t\t<div class=\"hidden\" id=\"search-fields\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<input autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" name=\"query\" value=\"\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-gears fa-fw advanced-search-link\"></i></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default hide\">[[global:search]]</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<div id=\"quick-search-container\" class=\"quick-search-container hidden\">\n\t\t\t\t\t\t\t<div class=\"checkbox filter-category\">\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked><span class=\"name\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n\t\t\t\t\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"visible-xs\" id=\"search-menu\">\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/search\">\n\t\t\t\t\t\t\t<i class=\"fa fa-search fa-fw\"></i> [[global:search]]\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right hidden-xs\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\" id=\"reconnect\" class=\"hide\" title=\"[[global:reconnecting-message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
          "]]\">\n\t\t\t\t\t\t\t<i class=\"fa fa-check\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<ul id=\"main-nav\" class=\"nav navbar-nav\">\n\t\t\t\t\t" + 
          compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t</ul>\n\n\t\t\t\t") + 
      "\n\t\t\t</div>\n";
  }

  compiled.blocks = {
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['navigation'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t" + 
          (helper(context, helpers, 'displayMenuItem', [context, index]) ?
            "\n\t\t\t\t\t<li class=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['class'] : null)) + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                " dropdown" :
                "") + 
              "\">\n\t\t\t\t\t\t<a title=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['title'] : null)) + 
              "\" class=\"navigation-link " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "dropdown-toggle" :
                "") + 
              "\"\n\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                " href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" " :
                " href=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['route'] : null)) + 
                  "\"") + 
              " " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null) ?
                "id=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null)) + 
                  "\"" :
                "") + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['targetBlank'] : null) ?
                " target=\"_blank\"" :
                "") + 
              ">\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null) ?
                "\n\t\t\t\t\t\t\t<i class=\"fa fa-fw " + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null)) + 
                  "\" data-content=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null)) + 
                  "\"></i>\n\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null) ?
                "\n\t\t\t\t\t\t\t<span class=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['textClass'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null)) + 
                  "</span>\n\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "\n\t\t\t\t\t\t\t<i class=\"fa fa-caret-down\"></i>\n\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdownContent'] : null)) + 
                  "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
