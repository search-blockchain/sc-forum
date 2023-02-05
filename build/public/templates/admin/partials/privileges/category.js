
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
    return "\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\n\t\t\t\t\t\t\t\t<th class=\"privilege-filters btn-toolbar\" colspan=\"100\">\n\t\t\t\t\t\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountGroupOther'] : null) ?
        "\n\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"19,99\" class=\"btn btn-default pull-right\">[[admin/manage/categories:privileges.section-other]]</button>\n\t\t\t\t\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"16,18\" class=\"btn btn-default pull-right\">[[admin/manage/categories:privileges.section-moderation]]</button>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"6,15\" class=\"btn btn-default pull-right\">[[admin/manage/categories:privileges.section-posting]]</button>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"3,5\" class=\"btn btn-default pull-right\">[[admin/manage/categories:privileges.section-viewing]]</button>\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t\t\t\t\t" + 
      compiled.blocks['privileges.labels.groups'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t" + 
      compiled.blocks['privileges.groups'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\"></td>\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
      __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['groups'] != null) ? context['privileges']['keys']['groups']['length'] : null)) + 
      "\">\n\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.group\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-users\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"copyPrivilegesFrom\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-from-category]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"copyToChildren\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-to-children]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"copyToAll\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-privileges-to-all-categories]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class=\"help-block\">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<label>[[admin/manage/privileges:user-privileges]]</label>\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\n\t\t\t\t\t\t\t\t<th class=\"privilege-filters btn-toolbar\" colspan=\"100\">\n\t\t\t\t\t\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountUserOther'] : null) ?
        "\n\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"19,99\" class=\"btn btn-default pull-right\">[[admin/manage/categories:privileges.section-other]]</button>\n\t\t\t\t\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"16,18\" class=\"btn btn-default pull-right\">[[admin/manage/categories:privileges.section-moderation]]</button>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"6,15\" class=\"btn btn-default pull-right\">[[admin/manage/categories:privileges.section-posting]]</button>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" data-filter=\"3,5\" class=\"btn btn-default pull-right\">[[admin/manage/categories:privileges.section-viewing]]</button>\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t\t\t\t\t" + 
      compiled.blocks['privileges.labels.users'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t" + 
      compiled.blocks['privileges.users'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\"></td>\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
      __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['users'] != null) ? context['privileges']['keys']['users']['length'] : null)) + 
      "\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.user\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t</table>\n";
  }

  compiled.blocks = {
    'privileges.labels.groups': function privilegeslabelsgroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null) ? context['privileges']['labels']['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
          __escape(guard(value)) + 
          "</th>\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.groups': function privilegesgroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<tr data-group-name=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['nameEscaped'] : null)) + 
          "\" data-private=\"" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
            "1" :
            "0") + 
          "\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
            "\n\t\t\t\t\t\t\t\t\t\t" + 
              ((guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null) == "banned-users") ?
                "\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-exclamation-triangle text-muted\" title=\"[[admin/manage/categories:privileges.inheritance-exception]]\"></i>\n\t\t\t\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-lock text-muted\" title=\"[[admin/manage/categories:privileges.group-private]]\"></i>\n\t\t\t\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-none\"></i>\n\t\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null)) + 
          "\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyToAllGroup\"><a href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-to-all-categories]]</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyToChildrenGroup\"><a href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-to-children]]</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyPrivilegesFromGroup\"><a href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-from]]</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['privileges'] : null)])) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.labels.users': function privilegeslabelsusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null) ? context['privileges']['labels']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
          __escape(guard(value)) + 
          "</th>\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.users': function privilegesusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['uid'] : null)) + 
          "\"" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
            " data-banned" :
            "") + 
          ">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['picture'] : null) ?
            "\n\t\t\t\t\t\t\t\t\t<img class=\"avatar avatar-sm\" src=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['picture'] : null)) + 
              "\" title=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
              "\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t\t<div class=\"avatar avatar-sm\" style=\"background-color: " + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['icon:text'] : null)) + 
              "</div>\n\t\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
            "\n\t\t\t\t\t\t\t\t\t<i class=\"ban fa fa-gavel text-danger\" title=\"[[admin/manage/categories:privileges.banned-user-inheritance]]\"></i>\n\t\t\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
          "\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['privileges'] : null)])) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
