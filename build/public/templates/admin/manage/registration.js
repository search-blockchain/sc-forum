
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
    return "<div class=\"row\">\n\t<div class=\"col-xs-12\">\n\t\t<div class=\"registration panel panel-primary\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t[[admin/manage/registration:queue]]\n\t\t\t</div>\n\t\t\t" + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "" :
        "\n\t\t\t<p class=\"panel-body\">\n\t\t\t\t[[admin/manage/registration:description, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/settings/user#user-registration]]\n\t\t\t</p>\n\t\t\t") + 
      "\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table table-striped users-list\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:list.name]]</th>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:list.email]]</th>\n\t\t\t\t\t\t\t<th class=\"hidden-xs\">[[admin/manage/registration:list.ip]]</th>\n\t\t\t\t\t\t\t<th class=\"hidden-xs\">[[admin/manage/registration:list.time]]</th>\n\t\t\t\t\t\t\t" + 
      compiled.blocks['customHeaders'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\n\t\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t</div>\n\n\t\t<div class=\"invitations panel panel-success\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t[[admin/manage/registration:invitations]]\n\t\t\t</div>\n\t\t\t<p class=\"panel-body\">\n\t\t\t\t[[admin/manage/registration:invitations.description]]\n\t\t\t</p>\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table table-striped invites-list\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:invitations.inviter-username]]</th>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:invitations.invitee-email]]</th>\n\t\t\t\t\t\t\t<th>[[admin/manage/registration:invitations.invitee-username]]</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t" + 
      compiled.blocks['invites'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'customHeaders': function customHeaders(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['customHeaders'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<th class=\"hidden-xs\">" + 
          __escape(guard((context != null && context['customHeaders'] != null && context['customHeaders'][key0] != null) ? context['customHeaders'][key0]['label'] : null)) + 
          "</th>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<tr data-username=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['usernameEscaped'] : null)) + 
          "\">\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['usernameSpam'] : null) ?
            "\n\t\t\t\t\t\t\t\t<i class=\"fa fa-times-circle text-danger\" title=\"[[admin/manage/registration:list.username-spam, " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['username'] != null) ? context['users'][key0]['spamData']['username']['frequency'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['username'] != null) ? context['users'][key0]['spamData']['username']['appears'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['username'] != null) ? context['users'][key0]['spamData']['username']['confidence'] : null)) + 
              "]]\"></i>\n\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['spamChecked'] : null) ?
                "\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i>\n\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['emailSpam'] : null) ?
            "\n\t\t\t\t\t\t\t\t<i class=\"fa fa-times-circle text-danger\" title=\"[[admin/manage/registration:list.email-spam, " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['email'] != null) ? context['users'][key0]['spamData']['email']['frequency'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['email'] != null) ? context['users'][key0]['spamData']['email']['appears'] : null)) + 
              "]]\"></i>\n\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['spamChecked'] : null) ?
                "\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i>\n\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null)) + 
          "\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"hidden-xs\">\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['ipSpam'] : null) ?
            "\n\t\t\t\t\t\t\t\t<i class=\"fa fa-times-circle text-danger\" title=\"[[admin/manage/registration:list.ip-spam, " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['ip'] != null) ? context['users'][key0]['spamData']['ip']['frequency'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['spamData'] != null && context['users'][key0]['spamData']['ip'] != null) ? context['users'][key0]['spamData']['ip']['appears'] : null)) + 
              "]]\"></i>\n\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['spamChecked'] : null) ?
                "\n\t\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i>\n\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['ip'] : null)) + 
          "\n\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['ipMatch'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ipMatch'] != null && context['users'][key0]['ipMatch'][key1] != null) ? context['users'][key0]['ipMatch'][key1]['picture'] : null) ?
                "\n\t\t\t\t\t\t\t\t<img src=\"" + 
                  __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ipMatch'] != null && context['users'][key0]['ipMatch'][key1] != null) ? context['users'][key0]['ipMatch'][key1]['picture'] : null)) + 
                  "\" class=\"user-img\" alt=\"\" />\n\t\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t\t<div class=\"user-img avatar avatar-sm\" style=\"background-color: " + 
                  __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ipMatch'] != null && context['users'][key0]['ipMatch'][key1] != null) ? context['users'][key0]['ipMatch'][key1]['icon:bgColor'] : null)) + 
                  ";\">" + 
                  __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ipMatch'] != null && context['users'][key0]['ipMatch'][key1] != null) ? context['users'][key0]['ipMatch'][key1]['icon:text'] : null)) + 
                  "</div>\n\t\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/uid/" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ipMatch'] != null && context['users'][key0]['ipMatch'][key1] != null) ? context['users'][key0]['ipMatch'][key1]['uid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['ipMatch'] != null && context['users'][key0]['ipMatch'][key1] != null) ? context['users'][key0]['ipMatch'][key1]['username'] : null)) + 
              "</a>\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"hidden-xs\">\n\t\t\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['timestampISO'] : null)) + 
          "\"></span>\n\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['customRows'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t<td class=\"hidden-xs\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['customRows'] != null && context['users'][key0]['customRows'][key1] != null) ? context['users'][key0]['customRows'][key1]['value'] : null)) + 
              "</td>\n\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class=\"btn-group pull-right\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success btn-xs\" data-action=\"accept\"><i class=\"fa fa-check\"></i></button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-xs\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\n\t\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['customActions'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t\t\t\t<button id=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['customActions'] != null && context['users'][key0]['customActions'][key1] != null) ? context['users'][key0]['customActions'][key1]['id'] : null)) + 
              "\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['customActions'] != null && context['users'][key0]['customActions'][key1] != null) ? context['users'][key0]['customActions'][key1]['title'] : null)) + 
              "\" class=\"btn btn-xs " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['customActions'] != null && context['users'][key0]['customActions'][key1] != null) ? context['users'][key0]['customActions'][key1]['class'] : null)) + 
              "\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null && context['users'][key0]['customActions'] != null && context['users'][key0]['customActions'][key1] != null) ? context['users'][key0]['customActions'][key1]['icon'] : null)) + 
              "\"></i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t";
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
    'invites': function invites(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['invites'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t" + 
          iter(guard((context != null && context['invites'] != null && context['invites'][key0] != null) ? context['invites'][key0]['invitations'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t<tr data-invitation-mail=\"" + 
              __escape(guard((context != null && context['invites'] != null && context['invites'][key0] != null && context['invites'][key0]['invitations'] != null && context['invites'][key0]['invitations'][key1] != null) ? context['invites'][key0]['invitations'][key1]['email'] : null)) + 
              "\"\n\t\t\t\t\t\t\t\tdata-invited-by=\"" + 
              __escape(guard((context != null && context['invites'] != null && context['invites'][key0] != null) ? context['invites'][key0]['username'] : null)) + 
              "\">\n\t\t\t\t\t\t\t<td class =\"invited-by\">" + 
              (index === 0 ?
                __escape(guard((context != null && context['invites'] != null && context['invites'][key0] != null) ? context['invites'][key0]['username'] : null)) :
                "") + 
              "</td>\n\t\t\t\t\t\t\t<td>" + 
              __escape(guard((context != null && context['invites'] != null && context['invites'][key0] != null && context['invites'][key0]['invitations'] != null && context['invites'][key0]['invitations'][key1] != null) ? context['invites'][key0]['invitations'][key1]['email'] : null)) + 
              "</td>\n\t\t\t\t\t\t\t<td>" + 
              __escape(guard((context != null && context['invites'] != null && context['invites'][key0] != null && context['invites'][key0]['invitations'] != null && context['invites'][key0]['invitations'][key1] != null) ? context['invites'][key0]['invitations'][key1]['username'] : null)) + 
              "\n\t\t\t\t\t\t\t\t<div class=\"btn-group pull-right\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-xs\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
