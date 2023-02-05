
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
    return "<div class=\"row\">\n\t<div class=\"col-lg-3 pull-right\">\n\t\t<div class=\"input-group\">\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"[[admin/manage/groups:search-placeholder]]\" id=\"group-search\">\n\t\t\t<span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row groups\">\n\t<div class=\"col-xs-12\">\n\t\t<table class=\"table table-striped groups-list\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>[[admin/manage/groups:name]]</th>\n\t\t\t\t\t<th>[[admin/manage/groups:badge]]</th>\n\t\t\t\t\t<th>[[admin/manage/groups:properties]]</th>\n\t\t\t\t\t<th></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</tbody>\n\t\t\t<tfoot>\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan=\"6\"><br /><br /></td>\n\t\t\t\t</tr>\n\t\t\t</tfoot>\n\t\t</table>\n\n\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t</div>\n\n\t<div class=\"modal fade\" id=\"create-modal\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">[[admin/manage/groups:create]]</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"alert alert-danger hide\" id=\"create-modal-error\"></div>\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"create-group-name\">[[admin/manage/groups:name]]</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"create-group-name\" placeholder=\"[[admin/manage/groups:name]]\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"create-group-desc\">[[admin/manage/groups:description]]</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"create-group-desc\" placeholder=\"[[admin/manage/groups:description-placeholder]]\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t<input id=\"create-group-private\" name=\"private\" type=\"checkbox\" checked>\n\t\t\t\t\t\t\t\t<strong>[[admin/manage/groups:private]]</strong>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t<input id=\"create-group-hidden\" name=\"hidden\" type=\"checkbox\">\n\t\t\t\t\t\t\t\t<strong>[[admin/manage/groups:hidden]]</strong>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n\t\t\t\t\t\t[[global:close]]\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" id=\"create-modal-go\">\n\t\t\t\t\t\t[[admin/manage/groups:create-button]]\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<button id=\"create\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">add</i>\n</button>\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<tr data-groupname=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\" data-name-encoded=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['nameEncoded'] : null)) + 
          "\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</a> (" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['memberCount'] : null)) + 
          ")\n\t\t\t\t\t\t<p class=\"description\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['description'] : null)) + 
          "</p>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<span class=\"label label-default\" style=\"color:" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['textColor'] : null)) + 
          "; background-color: " + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['labelColor'] : null)) + 
          ";\">" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['icon'] : null) ?
            "<i class=\"fa " + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['icon'] : null)) + 
              "\"></i> " :
            "") + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['userTitle'] : null)) + 
          "</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['system'] : null) ?
            "\n\t\t\t\t\t\t<span class=\"label label-danger\">[[admin/manage/groups:system]]</span>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['private'] : null) ?
            "\n\t\t\t\t\t\t<span class=\"label label-primary\">[[admin/manage/groups:private]]</span>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['hidden'] : null) ?
            "\n\t\t\t\t\t\t<span class=\"label label-default\">[[admin/manage/groups:hidden]]</span>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t</td>\n\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/api/admin/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['nameEncoded'] : null)) + 
          "/csv\" class=\"btn btn-default\">[[admin/manage/groups:download-csv]]</a>\n\n\t\t\t\t\t\t\t<div component=\"category-selector\" class=\"btn-group\">\n\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t<span>[[admin/manage/groups:privileges]]</span> <span class=\"caret\"></span>\n\t</button>\n\t<div component=\"category-selector-search\" class=\"hidden\">\n\t\t<input type=\"text\" class=\"form-control\" autocomplete=\"off\">\n\t</div>\n\t<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu dropdown-menu-right\" role=\"menu\">\n\t\t<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n\t\t\t<a role=\"menuitem\">[[search:no-matches]]</a>\n\t\t</li>\n\t\t" + 
          iter(guard((context != null) ? context['categories'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t<li role=\"presentation\" class=\"category " + 
              (guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['disabledClass'] : null) ?
                "disabled" :
                "") + 
              "\" data-cid=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['cid'] : null)) + 
              "\" data-name=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['name'] : null)) + 
              "\" data-parent-cid=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['parentCid'] : null)) + 
              "\">\n\t\t\t<a role=\"menuitem\">" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['level'] : null)) + 
              "<span component=\"category-markup\">" + 
              (guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['icon'] : null) ?
                "<span class=\"fa-stack\" style=\"" + 
                  __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
                  "\"><i style=\"color: " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['color'] : null)) + 
                  ";\" class=\"fa fa-stack-1x fa-fw " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['icon'] : null)) + 
                  "\"></i></span>" :
                "") + 
              " " + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key1] != null) ? context['categories'][key1]['name'] : null)) + 
              "</span></a>\n\t\t</li>\n\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t</ul>\n</div>\n\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['system'] : null) ?
            "" :
            "\n\t\t\t\t\t\t\t<button class=\"btn btn-danger\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t";
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
