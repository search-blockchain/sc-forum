
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
    return "<div class=\"row manage-users\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"clearfix\">\n\n\t\t\t<div class=\"pull-right\">\n\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t<button class=\"btn btn-primary dropdown-toggle\" id=\"action-dropdown\" data-toggle=\"dropdown\" type=\"button\" disabled=\"disabled\">[[admin/manage/users:edit]] <span class=\"caret\"></span></button>\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t<li><a href=\"#\" class=\"validate-email\"><i class=\"fa fa-fw fa-check\"></i> [[admin/manage/users:validate-email]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"send-validation-email\"><i class=\"fa fa-fw fa-mail-forward\"></i> [[admin/manage/users:send-validation-email]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"password-reset-email\"><i class=\"fa fa-fw fa-key\"></i> [[admin/manage/users:password-reset-email]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"force-password-reset\"><i class=\"fa fa-fw fa-unlock-alt\"></i> [[admin/manage/users:force-password-reset]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"manage-groups\"><i class=\"fa fa-fw fa-users\"></i> [[admin/manage/users:manage-groups]]</a></li>\n\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"ban-user\"><i class=\"fa fa-fw fa-gavel\"></i> [[admin/manage/users:ban]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"ban-user-temporary\"><i class=\"fa fa-fw fa-clock-o\"></i> [[admin/manage/users:temp-ban]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"unban-user\"><i class=\"fa fa-fw fa-comment-o\"></i> [[admin/manage/users:unban]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"reset-lockout\"><i class=\"fa fa-fw fa-unlock\"></i> [[admin/manage/users:reset-lockout]]</a></li>\n\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"delete-user\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:delete]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"delete-user-content\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:delete-content]]</a></li>\n\t\t\t\t\t\t<li><a href=\"#\" class=\"delete-user-and-content\"><i class=\"fa fa-fw fa-trash-o\"></i> [[admin/manage/users:purge]]</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\"><i class=\"fa fa-ellipsis-v\"></i></button>\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t<li><a href=\"#\" data-action=\"create\">[[admin/manage/users:create]]</a></li>\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['showInviteButton'] : null) ?
        "<li><a href=\"#\" component=\"user/invite\">[[admin/manage/users:invite]]</a></li>" :
        "") + 
      "\n\t\t\t\t\t\t<li><a target=\"_blank\" href=\"#\" class=\"export-csv\">[[admin/manage/users:download-csv]]</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<form class=\"form-inline pull-left\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" id=\"user-search\" value=\"" + 
      __escape(guard((context != null) ? context['query'] : null)) + 
      "\">\n\t\t\t\t\t<span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\n\t\t\t\t</div>\n\t\t\t\t<select id=\"user-search-by\" class=\"form-control\">\n\t\t\t\t\t<option value=\"username\" " + 
      (guard((context != null) ? context['searchBy_username'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.username]]</option>\n\t\t\t\t\t<option value=\"email\" " + 
      (guard((context != null) ? context['searchBy_email'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.email]]</option>\n\t\t\t\t\t<option value=\"uid\" " + 
      (guard((context != null) ? context['searchBy_uid'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.uid]]</option>\n\t\t\t\t\t<option value=\"ip\" " + 
      (guard((context != null) ? context['searchBy_ip'] : null) ?
        "selected" :
        "") + 
      ">[[admin/manage/users:search.ip]]</option>\n\t\t\t\t</select>\n\t\t\t\t<select id=\"results-per-page\" class=\"form-control\">\n\t\t\t\t\t<option value=\"50\">[[admin/manage/users:50-per-page]]</option>\n\t\t\t\t\t<option value=\"100\">[[admin/manage/users:100-per-page]]</option>\n\t\t\t\t\t<option value=\"250\">[[admin/manage/users:250-per-page]]</option>\n\t\t\t\t\t<option value=\"500\">[[admin/manage/users:500-per-page]]</option>\n\t\t\t\t</select>\n\n\t\t\t\t<div class=\"btn-group\" id=\"filter-by\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-link dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t[[admin/manage/users:filter-by]] <span class=\"caret\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t\t\t\t\t<li data-filter-by=\"unverified\" role=\"presentation\">\n\t\t\t\t\t\t\t<a role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_unverified'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.unvalidated]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li data-filter-by=\"verified\" role=\"presentation\">\n\t\t\t\t\t\t\t<a role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_verified'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.validated]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li data-filter-by=\"banned\" role=\"presentation\">\n\t\t\t\t\t\t\t<a role=\"menuitem\" href=\"#\"><i class=\"fa fa-fw " + 
      (guard((context != null) ? context['filterBy_banned'] : null) ?
        "fa-check" :
        "") + 
      "\"></i>[[admin/manage/users:pills.banned]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<hr/>\n\n\t\t<div class=\"search " + 
      __escape(guard((context != null) ? context['search_display'] : null)) + 
      "\">\n\t\t\t<i class=\"fa fa-spinner fa-spin hidden\"></i>\n\n\t\t\t<div id=\"user-found-notify\" class=\"label label-info " + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "" :
        "hidden") + 
      "\">[[admin/manage/users:alerts.x-users-found, " + 
      __escape(guard((context != null) ? context['matchCount'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['timing'] : null)) + 
      "]]</div>\n\n\t\t\t<div id=\"user-notfound-notify\" class=\"label label-danger " + 
      (guard((context != null) ? context['query'] : null) ?
        "" :
        "hidden") + 
      " " + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "hidden" :
        "") + 
      "\">[[admin/manage/users:search.not-found]]</div>\n\t\t</div>\n\n\t\t" + 
      (guard((context != null) ? context['inactive'] : null) ?
        "\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/users/inactive?months=3&resultsPerPage=" + 
          __escape(guard((context != null) ? context['resultsPerPage'] : null)) + 
          "\" class=\"btn btn-default\">[[admin/manage/users:inactive.3-months]]</a>\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/users/inactive?months=6&resultsPerPage=" + 
          __escape(guard((context != null) ? context['resultsPerPage'] : null)) + 
          "\" class=\"btn btn-default\">[[admin/manage/users:inactive.6-months]]</a>\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/users/inactive?months=12&resultsPerPage=" + 
          __escape(guard((context != null) ? context['resultsPerPage'] : null)) + 
          "\" class=\"btn btn-default\">[[admin/manage/users:inactive.12-months]]</a>\n\t\t" :
        "") + 
      "\n\n\t\t<div class=\"table-responsive\">\n\t\t\t<table class=\"table table-striped users-table\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th><input component=\"user/select/all\" type=\"checkbox\"/></th>\n\t\t\t\t\t\t<th class=\"text-right text-muted\">[[admin/manage/users:users.uid]]</th>\n\t\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.username]]</th>\n\t\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.email]]</th>\n\t\t\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.ip]]</th>\n\t\t\t\t\t\t<th data-sort=\"postcount\" class=\"text-right pointer\">[[admin/manage/users:users.postcount]] " + 
      (guard((context != null) ? context['sort_postcount'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t\t<th data-sort=\"reputation\" class=\"text-right pointer\">[[admin/manage/users:users.reputation]] " + 
      (guard((context != null) ? context['sort_reputation'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t\t<th data-sort=\"flags\" class=\"text-right pointer\">[[admin/manage/users:users.flags]] " + 
      (guard((context != null) ? context['sort_flags'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t\t<th data-sort=\"joindate\" class=\"pointer\">[[admin/manage/users:users.joined]] " + 
      (guard((context != null) ? context['sort_joindate'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t\t<th data-sort=\"lastonline\" class=\"pointer\">[[admin/manage/users:users.last-online]] " + 
      (guard((context != null) ? context['sort_lastonline'] : null) ?
        "<i class=\"fa fa-sort-" + 
          (guard((context != null) ? context['reverse'] : null) ?
            "down" :
            "up") + 
          "\">" :
        "") + 
      "</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<tr class=\"user-row\">\n\t\t\t\t\t\t<th><input component=\"user/select/single\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\" type=\"checkbox\"/></th>\n\t\t\t\t\t\t<td class=\"text-right\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<i title=\"[[admin/manage/users:users.banned]]\" class=\"ban fa fa-gavel text-danger" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['banned'] : null) ?
            "" :
            " hidden") + 
          "\"></i>\n\t\t\t\t\t\t\t<i class=\"administrator fa fa-shield text-success" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['administrator'] : null) ?
            "" :
            " hidden") + 
          "\"></i>\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\"> " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null) ?
            "\n\t\t\t\t\t\t\t<i class=\"validated fa fa-check text-success" + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:confirmed'] : null) ?
                "" :
                " hidden") + 
              "\" title=\"validated\"></i>\n\t\t\t\t\t\t\t<i class=\"notvalidated fa fa-check text-muted" + 
              (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email:confirmed'] : null) ?
                " hidden" :
                "") + 
              "\" title=\"not validated\"></i>\n\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null)) + 
              "\n\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t<i class=\"notvalidated fa fa-check text-muted\" title=\"not validated\"></i>\n\t\t\t\t\t\t\t<em class=\"text-muted\">[[admin/manage/users:users.no-email]]</em>\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['ip'] : null)) + 
          "</td>\n\t\t\t\t\t\t<td class=\"text-right\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)) + 
          "</td>\n\t\t\t\t\t\t<td class=\"text-right\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)) + 
          "</td>\n\t\t\t\t\t\t<td class=\"text-right\">" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null) ?
            __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)) :
            "0") + 
          "</td>\n\t\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
          "\"></span></td>\n\t\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['lastonlineISO'] : null)) + 
          "\"></span></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t";
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
