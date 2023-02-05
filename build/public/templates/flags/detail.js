
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
      "\n\n\n<div class=\"row\">\n\t<div class=\"col-sm-12\">\n\t\t<h2 class=\"h4\">\n\t\t\t" + 
      __escape(guard((context != null) ? context['target_readable'] : null)) + 
      "\n\t\t\t<small><span class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['datetimeISO'] : null)) + 
      "\"></span></small>\n\t\t</h2>\n\n\t\t<hr />\n\n\t\t" + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['post'] : null) ?
        "\n\t\t<div class=\"media\">\n\t\t\t<div class=\"media-left\">\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['target'] != null) ? context['target']['user'] : null), "lg", guard((context != null) ? context['false'] : null), "media-object"])) + 
          "</a>\n\t\t\t</div>\n\t\t\t<div class=\"media-body\">\n\t\t\t\t<h4 class=\"media-heading\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['username'] : null)) + 
          "</a></h4>\n\t\t\t\t" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['content'] : null)) + 
          "\n\t\t\t</div>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['user'] : null) ?
        "\n\t\t<div class=\"media\">\n\t\t\t<div class=\"media-left\">\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['target'] : null), "lg", guard((context != null) ? context['false'] : null), "media-object"])) + 
          "</a>\n\t\t\t</div>\n\t\t\t<div class=\"media-body\">\n\t\t\t\t<h4 class=\"media-heading\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['username'] : null)) + 
          "</a></h4>\n\t\t\t\t<p class=\"lead\">\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "\">[[flags:user-view]]</a> |\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "/edit\">[[flags:user-edit]]</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t" :
        "") + 
      "\n\n\t\t" + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['empty'] : null) ?
        "\n\t\t<div class=\"alert alert-warning\">[[flags:target-purged]]</div>\n\t\t" :
        "") + 
      "\n\n\t\t<hr />\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<form role=\"form\" id=\"attributes\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<h2 class=\"h4\">[[flags:reports]]</h2>\n\t\t\t\t\t\t<ul class=\"list-group\" component=\"flag/reports\">\n\t\t\t\t\t\t\t" + 
      compiled.blocks['reports'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<h2 class=\"h4\" for=\"state\">[[flags:state]]</h2>\n\t\t\t\t\t\t<select class=\"form-control\" id=\"state\" name=\"state\" disabled>\n\t\t\t\t\t\t\t<option value=\"open\">[[flags:state-open]]</option>\n\t\t\t\t\t\t\t<option value=\"wip\">[[flags:state-wip]]</option>\n\t\t\t\t\t\t\t<option value=\"resolved\">[[flags:state-resolved]]</option>\n\t\t\t\t\t\t\t<option value=\"rejected\">[[flags:state-rejected]]</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<h2 class=\"h4\" for=\"assignee\">[[flags:assignee]]</h2>\n\t\t\t\t\t\t<select class=\"form-control\" id=\"assignee\" name=\"assignee\" disabled>\n\t\t\t\t\t\t\t<option value=\"\">[[flags:no-assignee]]</option>\n\t\t\t\t\t\t\t" + 
      compiled.blocks['assignees'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-block btn-primary\" data-action=\"update\">[[flags:update]]</button>\n\t\t\t\t</form>\n\n\t\t\t\t<hr />\n\n\t\t\t\t<form role=\"form\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<h2 class=\"h4\" for=\"note\">[[flags:notes]]</h2>\n\t\t\t\t\t\t<textarea id=\"note\" class=\"form-control\"></textarea>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-block btn-primary\" data-action=\"appendNote\">[[flags:add-note]]</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t\t\t\t<div component=\"flag/notes\">\n\t\t\t\t\t" + 
      (guard((context != null && context['notes'] != null) ? context['notes']['length'] : null) ?
        "" :
        "\n\t\t\t\t\t<div class=\"alert alert-success text-center\">[[flags:no-notes]]</div>\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t" + 
      compiled.blocks['notes'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<h2 class=\"h4\">[[flags:quick-actions]]</h2>\n\n\t\t\t\t<a class=\"btn btn-default btn-block\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['type_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['targetId'] : null)) + 
      "\">\n\t\t\t\t\t<i class=\"fa fa-external-link\"></i>\n\t\t\t\t\t[[flags:go-to-target]]\n\t\t\t\t</a>\n\n\t\t\t\t<a class=\"btn btn-default btn-block\" href=\"#\" data-action=\"assign\">\n\t\t\t\t\t<i class=\"fa fa-id-card-o\"></i>\n\t\t\t\t\t[[flags:assign-to-me]]\n\t\t\t\t</a>\n\n\t\t\t\t" + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['post'] : null) ?
        "\n\t\t\t\t" + 
          (guard((context != null && context['target'] != null) ? context['target']['deleted'] : null) ?
            "\n\t\t\t\t<a class=\"btn btn-danger btn-block\" href=\"#\" data-action=\"purge-post\"><i class=\"fa fa-trash\"></i> [[flags:purge-post]]</a>\n\t\t\t\t<a class=\"btn btn-success btn-block\" href=\"#\" data-action=\"restore-post\"><i class=\"fa fa-reply\"></i><i class=\"fa fa-trash\"></i> [[flags:restore-post]]</a>\n\t\t\t\t" :
            "\n\t\t\t\t<a class=\"btn btn-danger btn-block\" href=\"#\" data-action=\"delete-post\"><i class=\"fa fa-trash\"></i> [[flags:delete-post]]</a>\n\t\t\t\t") + 
          "\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null && context['target'] != null) ? context['target']['uid'] : null) ?
        "\n\t\t\t\t<div class=\"btn-group btn-block\" data-uid=\"" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-block dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t<i class=\"fa fa-street-view\"></i>\n\t\t\t\t\t\t[[flags:flagged-user]]\n\t\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "\">[[flags:view-profile]]</a></li>\n\t\t\t\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
            "" :
            "\n\t\t\t\t\t\t\t<li><a href=\"#\" data-action=\"chat\">[[flags:start-new-chat]]</a></li>\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\n\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['ban'] : null) ?
            "\n\t\t\t\t\t\t<li class=\"" + 
              (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['banned'] : null) ?
                "hidden" :
                "") + 
              "\"><a href=\"#\" data-action=\"ban\">[[user:ban_account]]</a></li>\n\t\t\t\t\t\t<li class=\"" + 
              (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['banned'] : null) ?
                "" :
                "hidden") + 
              "\"><a href=\"#\" data-action=\"unban\">[[user:unban_account]]</a></li>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['mute'] : null) ?
            "\n\t\t\t\t\t\t<li class=\"" + 
              (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['muted'] : null) ?
                "hidden" :
                "") + 
              "\"><a href=\"#\" data-action=\"mute\">[[user:mute_account]]</a></li>\n\t\t\t\t\t\t<li class=\"" + 
              (guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['muted'] : null) ?
                "" :
                "hidden") + 
              "\"><a href=\"#\" data-action=\"unmute\">[[user:unmute_account]]</a></li>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['admin:users'] : null) ?
            "\n\t\t\t\t\t\t<li><a href=\"#\" data-action=\"delete-account\">[[user:delete_account_as_admin]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" data-action=\"delete-content\">[[user:delete_content]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" data-action=\"delete-all\">[[user:delete_all]]</a></li>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t<hr />\n\n\t\t\t\t<h2 class=\"h4\">[[flags:history]]</h2>\n\t\t\t\t<div component=\"flag/history\">\n\t\t\t\t\t" + 
      (guard((context != null && context['history'] != null) ? context['history']['length'] : null) ?
        "" :
        "\n\t\t\t\t\t<div class=\"alert alert-success text-center\">[[flags:no-history]]</div>\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t" + 
      compiled.blocks['history'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
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
    'reports': function reports(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['reports'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null && context['reports'][key0]['reporter'] != null) ? context['reports'][key0]['reporter']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['reports'] != null && context['reports'][key0] != null) ? context['reports'][key0]['reporter'] : null), "sm", guard((context != null) ? context['false'] : null)])) + 
          "</a>\n\t\t\t\t\t\t\t\t&ndash; <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null) ? context['reports'][key0]['timestampISO'] : null)) + 
          "\"></span>\n\t\t\t\t\t\t\t\t<blockquote><em>" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null) ? context['reports'][key0]['value'] : null)) + 
          "</em></blockquote>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'assignees': function assignees(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['assignees'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['assignees'] != null && context['assignees'][key0] != null) ? context['assignees'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['assignees'] != null && context['assignees'][key0] != null) ? context['assignees'][key0]['username'] : null)) + 
          "</option>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'notes': function notes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<div class=\"media\" data-datetime=\"" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['datetime'] : null)) + 
          "\" data-index=\"" + 
          __escape(index) + 
          "\">\n\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null && context['notes'][key0]['user'] != null) ? context['notes'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['user'] : null), "md", guard((context != null) ? context['false'] : null), "media-object"])) + 
          "</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h4 class=\"media-heading\">\n\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null && context['notes'][key0]['user'] != null) ? context['notes'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null && context['notes'][key0]['user'] != null) ? context['notes'][key0]['user']['username'] : null)) + 
          "</a>\n\t\t\t\t\t\t\t\t<small><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['datetimeISO'] : null)) + 
          "\"></span></small>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['content'] : null)) + 
          "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"media-right\">\n\t\t\t\t\t\t\t<a href=\"#\" data-action=\"prepare-edit\"><i class=\"fa fa-pencil\"></i></a>\n\t\t\t\t\t\t\t<a href=\"#\" data-action=\"delete-note\"><i class=\"fa fa-trash text-danger\"></i></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'history': function history(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['history'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['user'] != null) ? context['history'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['user'] : null), "md", guard((context != null) ? context['false'] : null), "media-object"])) + 
          "</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h4 class=\"media-heading\">\n\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['user'] != null) ? context['history'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['user'] != null) ? context['history'][key0]['user']['username'] : null)) + 
          "</a>\n\t\t\t\t\t\t\t\t<small><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['datetimeISO'] : null)) + 
          "\"></span></small>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['fields'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span class=\"label label-primary\">[[flags:" + 
              __escape(key) + 
              "]]</span>" + 
              (guard(value) ?
                " &rarr; <span class=\"label label-default\">" + 
                  __escape(guard(value)) + 
                  "</span>" :
                "") + 
              "\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['meta'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span class=\"label label-" + 
              guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['labelClass'] : null) + 
              "\">" + 
              guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['key'] : null) + 
              "</span>" + 
              (guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['value'] : null) ?
                " &rarr; <span class=\"label label-default\">" + 
                  guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['value'] : null) + 
                  "</span>" :
                "") + 
              "\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
