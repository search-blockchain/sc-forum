
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
    return "<div class=\"row\">\n\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\n\t<div class=\"col-lg-2\">\n\t\t<button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary\" title=\"[[groups:details.add-member]]\"><i class=\"fa fa-user-plus\"></i></button>\n\t</div>\n\t" :
        "") + 
      "\n\t<div class=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "col-lg-10" :
        "col-lg-12") + 
      "\">\n\t\t<div class=\"input-group\">\n\t\t\t<input class=\"form-control\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\n\t\t\t<span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\n\t\t</div>\n\t</div>\n</div>\n\n<table component=\"groups/members\" class=\"table table-striped table-hover\" data-nextstart=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['membersNextStart'] : null)) + 
      "\">\n\t<tbody>\n\t" + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\n\t</tbody>\n</table>";
  }

  compiled.blocks = {
    'group.members': function groupmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['uid'] : null)) + 
          "\">\n\t\t<td>\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['group'] != null && context['group']['members'] != null) ? context['group']['members'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t</td>\n\t\t<td class=\"member-name\">\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['username'] : null)) + 
          "</a> <i title=\"[[groups:owner]]\" class=\"fa fa-star text-warning " + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\n\n\t\t\t" + 
          (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
            "\n\t\t\t<div class=\"owner-controls btn-group pull-right\">\n\t\t\t\t<a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"toggleOwnership\" title=\"[[groups:details.grant]]\">\n\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t</a>\n\n\t\t\t\t<a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"kick\" title=\"[[groups:details.kick]]\">\n\t\t\t\t\t<i class=\"fa fa-ban\"></i>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t" :
            "") + 
          "\n\t\t</td>\n\t</tr>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
