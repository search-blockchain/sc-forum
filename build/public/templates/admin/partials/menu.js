
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
    return "<nav id=\"menu\" class=\"hidden-md hidden-lg\">\n\t<section class=\"menu-section quick-actions\">\n\t\t<ul class=\"menu-section-list\">\n\t\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n\t\t\t<div class=\"button-group\">\n\t\t\t\t<li component=\"logout\">\n\t<a href=\"#\" title=\"[[admin/menu:logout]]\" data-placement=\"bottom\" data-toggle=\"tooltip\">\n\t\t<i class=\"fa fw-fw fa-sign-out\"></i>\n\t</a>\n</li>\n\n" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\n<li>\n\t<a href=\"#\" class=\"restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:restart-forum]]\">\n\t\t<i class=\"fa fa-fw fa-repeat\"></i>\n\t</a>\n</li>\n<li>\n\t<a href=\"#\" class=\"rebuild-and-restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:rebuild-and-restart-forum]]\">\n\t\t<i class=\"fa fa-fw fa-refresh\"></i>\n\t</a>\n</li>\n" :
            "") + 
          "\n\n<li>\n\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:view-forum]]\">\n\t\t<i class=\"fa fa-fw fa-home\"></i>\n\t</a>\n</li>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t<div class=\"alert " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "alert-warning" :
        "alert-info") + 
      " well-sm\">\n\t<span>[[admin/menu:alerts.version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</span>\n\t" + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "\n\t<span style=\"margin-left: 10px\">\n\t\t<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\n\t\t\t<u>[[admin/menu:alerts.upgrade, " + 
          __escape(guard((context != null) ? context['latestVersion'] : null)) + 
          "]]</u>\n\t\t</a>\n\t</span>\n\t" :
        "") + 
      "\n</div>\n\t\t</ul>\n\t</section>\n\n\t" + 
      (guard((context != null) ? context['showManageMenu'] : null) ?
        "\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-manage]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:categories'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a></li>" :
            "") + 
          "\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:privileges'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a></li>" :
            "") + 
          "\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:users'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a></li>" :
            "") + 
          "\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:groups'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a></li>" :
            "") + 
          "\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:admins-mods'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a></li>" :
            "") + 
          "\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:tags'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a></li>" :
            "") + 
          "\n\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\n\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a></li>\n\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a></li>\n\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a></li>\n\n\t\t\t<li><a target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a></li>\n\t\t\t<li><a target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a></li>\n\t\t\t" :
            "") + 
          "\n\t\t</ul>\n\t</section>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-settings]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/homepage\">[[admin/menu:settings/homepage]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/guest\">[[admin/menu:settings/guest]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/languages\">[[admin/menu:settings/languages]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/social\">[[admin/menu:settings/social]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a></li>\n\t\t</ul>\n\t</section>\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-appearance]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-extend]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t" + 
          (guard((context != null && context['plugins'] != null) ? context['plugins']['length'] : null) ?
            "\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-plugins]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t" + 
              compiled.blocks['plugins'](helpers, context, guard, iter, helper) + 
              "\n\t\t</ul>\n\t</section>\n\t" :
            "") + 
          "\n\n\t" + 
          (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
            "\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-social-auth]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t" + 
              compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
              "\n\t\t</ul>\n\t</section>\n\t" :
            "") + 
          "\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n\t<section class=\"menu-section\">\n\t\t<h3 class=\"menu-section-title\">[[admin/menu:section-advanced]]</h3>\n\t\t<ul class=\"menu-section-list\">\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a></li>\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a></li>\n\t\t\t" + 
          (guard((context != null) ? context['env'] : null) ?
            "\n\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a></li>\n\t\t\t" :
            "") + 
          "\n\t\t</ul>\n\t</section>\n\t" :
        "") + 
      "\n</nav>\n\n<main id=\"panel\">\n\t<nav class=\"header\" id=\"header\">\n\t\t<div class=\"pull-left\">\n\t\t\t<div id=\"mobile-menu\">\n\t\t\t\t<div class=\"bar\"></div>\n\t\t\t\t<div class=\"bar\"></div>\n\t\t\t\t<div class=\"bar\"></div>\n\t\t\t</div>\n\t\t\t<h1 id=\"main-page-title\"></h1>\n\t\t</div>\n\n\t\t<ul class=\"quick-actions hidden-xs hidden-sm\">\n\t\t\t<li component=\"logout\">\n\t<a href=\"#\" title=\"[[admin/menu:logout]]\" data-placement=\"bottom\" data-toggle=\"tooltip\">\n\t\t<i class=\"fa fw-fw fa-sign-out\"></i>\n\t</a>\n</li>\n\n" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n<li>\n\t<a href=\"#\" class=\"restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:restart-forum]]\">\n\t\t<i class=\"fa fa-fw fa-repeat\"></i>\n\t</a>\n</li>\n<li>\n\t<a href=\"#\" class=\"rebuild-and-restart\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:rebuild-and-restart-forum]]\">\n\t\t<i class=\"fa fa-fw fa-refresh\"></i>\n\t</a>\n</li>\n" :
        "") + 
      "\n\n<li>\n\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"[[admin/menu:view-forum]]\">\n\t\t<i class=\"fa fa-fw fa-home\"></i>\n\t</a>\n</li>\n\n\t\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n\t\t\t<form role=\"search\">\n\t\t\t\t<div id=\"acp-search\" >\n\t\t\t\t\t<div class=\"dropdown\" data-text=\"[[admin/menu:search.placeholder]]\">\n\t\t\t\t\t\t<input type=\"text\" data-toggle=\"dropdown\" class=\"form-control\">\n\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right state-start-typing\" role=\"menu\">\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"no-results\">\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.no-results]]</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider search-forum\"></li>\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"search-forum\">\n\t\t\t\t\t\t\t\t<a role=\"menuitem\" target=\"_top\" href=\"#\">\n\t\t\t\t\t\t\t\t\t[[admin/menu:search.search-forum]]\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"keep-typing\">\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.keep-typing]]</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"start-typing\">\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.start-typing]]</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n\t\t\t<div class=\"alert " + 
          (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "alert-warning" :
            "alert-info") + 
          " well-sm\">\n\t<span>[[admin/menu:alerts.version, " + 
          __escape(guard((context != null) ? context['version'] : null)) + 
          "]]</span>\n\t" + 
          (guard((context != null) ? context['upgradeAvailable'] : null) ?
            "\n\t<span style=\"margin-left: 10px\">\n\t\t<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\n\t\t\t<u>[[admin/menu:alerts.upgrade, " + 
              __escape(guard((context != null) ? context['latestVersion'] : null)) + 
              "]]</u>\n\t\t</a>\n\t</span>\n\t" :
            "") + 
          "\n</div>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t<li class=\"reconnect-spinner\">\n\t\t\t\t<a href=\"#\" id=\"reconnect\" class=\"hide\" title=\"[[admin/menu:connection-lost, " + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "]]\">\n\t\t\t\t\t<i class=\"fa fa-check\"></i>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\n\n\t\t<ul id=\"main-menu\">\n\t\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:dashboard'] : null) ?
        "\n\t\t\t<li class=\"dropdown menu-item\">\n\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-dashboard]]</a>\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard\">[[admin/menu:dashboard/overview]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard/logins\">[[admin/menu:dashboard/logins]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard/users\">[[admin/menu:dashboard/users]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard/topics\">[[admin/menu:dashboard/topics]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/dashboard/searches\">[[admin/menu:dashboard/searches]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t" + 
      (guard((context != null) ? context['showManageMenu'] : null) ?
        "\n\t\t\t<li class=\"dropdown menu-item\">\n\t\t\t\t<a id=\"manage-menu\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-manage]]</a>\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:categories'] : null) ?
            "<li><a id=\"manage-categories\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/categories\">[[admin/menu:manage/categories]]</a></li>" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:privileges'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/privileges\">[[admin/menu:manage/privileges]]</a></li>" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:users'] : null) ?
            "<li><a id=\"manage-users\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/users\">[[admin/menu:manage/users]]</a></li>" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:groups'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/groups\">[[admin/menu:manage/groups]]</a></li>" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:admins-mods'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/admins-mods\">[[admin/menu:manage/admins-mods]]</a></li>" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:tags'] : null) ?
            "<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/tags\">[[admin/menu:manage/tags]]</a></li>" :
            "") + 
          "\n\t\t\t\t\t" + 
          (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
            "\n\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/registration\">[[admin/menu:manage/registration]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/uploads\">[[admin/menu:manage/uploads]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/manage/digest\">[[admin/menu:manage/digest]]</a></li>\n\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\n\t\t\t\t\t<li><a target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/post-queue\">[[admin/menu:manage/post-queue]] <i class=\"fa fa-external-link\"></i></a></li>\n\t\t\t\t\t<li><a target=\"_top\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/ip-blacklist\">[[admin/menu:manage/ip-blacklist]] <i class=\"fa fa-external-link\"></i></a></li>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t" :
        "") + 
      "\n\n\t\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['admin:settings'] : null) ?
        "\n\t\t\t<li class=\"dropdown menu-item\">\n\t\t\t\t<a id=\"settings-menu\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-settings]]</a>\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t<li><a id=\"settings-general\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/general\">[[admin/menu:section-general]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/homepage\">[[admin/menu:settings/homepage]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/navigation\">[[admin/menu:settings/navigation]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/user\">[[admin/menu:settings/user]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/reputation\">[[admin/menu:settings/reputation]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/guest\">[[admin/menu:settings/guest]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/group\">[[admin/menu:settings/group]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/tags\">[[admin/menu:manage/tags]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/post\">[[admin/menu:settings/post]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/uploads\">[[admin/menu:settings/uploads]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/languages\">[[admin/menu:settings/languages]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/email\">[[admin/menu:settings/email]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/chat\">[[admin/menu:settings/chat]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/pagination\">[[admin/menu:settings/pagination]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/notifications\">[[admin/menu:settings/notifications]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/api\">[[admin/menu:settings/api]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/social\">[[admin/menu:settings/social]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/cookies\">[[admin/menu:settings/cookies]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/web-crawler\">[[admin/menu:settings/web-crawler]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/settings/advanced\">[[admin/menu:settings/advanced]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class=\"dropdown menu-item\">\n\t\t\t\t<a id=\"appearance-menu\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-appearance]]</a>\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t<li><a id=\"appearance-themes\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/themes\">[[admin/menu:appearance/themes]]</a></li>\n\t\t\t\t\t<li><a id=\"appearance-skins\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/skins\">[[admin/menu:appearance/skins]]</a></li>\n\t\t\t\t\t<li><a id=\"appearance-customise\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/appearance/customise\">[[admin/menu:appearance/customise]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class=\"dropdown menu-item\">\n\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-extend]]</a>\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/plugins\">[[admin/menu:extend/plugins]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/widgets\">[[admin/menu:extend/widgets]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/extend/rewards\">[[admin/menu:extend/rewards]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t" + 
          (guard((context != null && context['plugins'] != null) ? context['plugins']['length'] : null) ?
            "\n\t\t\t<li class=\"dropdown menu-item\">\n\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-plugins]]</a>\n\t\t\t\t<ul class=\"dropdown-menu plugins-menu\" role=\"menu\">\n\t\t\t\t\t<li class=\"dropdown-header\">[[admin/menu:section-plugins]]</li>\n\t\t\t\t\t" + 
              iter(guard((context != null) ? context['plugins'] : null), function each(key0, index, length, value) {
                var key = key0;
                return "\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/admin" + 
                  __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['route'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['name'] : null)) + 
                  "</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t";
              }, function alt() {
                return "";
              }) + 
              "\n\t\t\t\t\t" + 
              (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
                "\n\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t" + 
                  (guard((context != null && context['authentication'] != null) ? context['authentication']['length'] : null) ?
                    "\n\t\t\t\t\t<li class=\"dropdown-header\">[[admin/menu:section-social-auth]]</li>\n\t\t\t\t\t" + 
                      iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
                        var key = key0;
                        return "\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"" + 
                          __escape(guard((context != null) ? context['relative_path'] : null)) + 
                          "/admin" + 
                          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['route'] : null)) + 
                          "\">" + 
                          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
                          "</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t";
                      }, function alt() {
                        return "";
                      }) + 
                      "\n\t\t\t\t\t" :
                    "") + 
                  "\n\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t<li data-link=\"1\">\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/extend/plugins#download\">[[admin/menu:extend/plugins.install]]</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t" :
            "") + 
          "\n\t\t\t" :
        "") + 
      "\n\n\t\t\t" + 
      (guard((context != null && context['user'] != null && context['user']['privileges'] != null) ? context['user']['privileges']['superadmin'] : null) ?
        "\n\t\t\t<li class=\"dropdown menu-item\">\n\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">[[admin/menu:section-advanced]]</a>\n\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/database\">[[admin/menu:advanced/database]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/events\">[[admin/menu:advanced/events]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/hooks\">[[admin/menu:advanced/hooks]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/cache\">[[admin/menu:advanced/cache]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/errors\">[[admin/menu:advanced/errors]]</a></li>\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin/advanced/logs\">[[admin/menu:advanced/logs]]</a></li>\n\t\t\t\t\t" + 
          (guard((context != null) ? context['env'] : null) ?
            "\n\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/admin/development/logger\">[[admin/menu:development/logger]]</a></li>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t" :
        "") + 
      "\n\t\t</ul>\n\t</nav>";
  }

  compiled.blocks = {
    'plugins': function plugins(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['plugins'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li>\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['plugins'] != null && context['plugins'][key0] != null) ? context['plugins'][key0]['name'] : null)) + 
          "</a>\n\t\t\t</li>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li>\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/admin" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['route'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
          "</a>\n\t\t\t</li>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
