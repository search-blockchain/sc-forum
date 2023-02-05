
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
    return "<div class=\"row events\">\n\t<div class=\"col-lg-9\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\"><i class=\"fa fa-calendar-o\"></i> [[admin/advanced/events:events]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t" + 
      (guard((context != null && context['events'] != null) ? context['events']['length'] : null) ?
        "" :
        "\n\t\t\t\t<div class=\"alert alert-info\">[[admin/advanced/events:no-events]]</div>\n\t\t\t\t") + 
      "\n\t\t\t\t<div class=\"events-list\">\n\t\t\t\t" + 
      compiled.blocks['events'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-3 acp-sidebar\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/advanced/events:filters]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<form role=\"form\" id=\"filters\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"type\">[[admin/advanced/events:filter-type]]</label>\n\t\t\t\t\t\t<select id=\"type\" name=\"type\" class=\"form-control\">\n\t\t\t\t\t\t\t" + 
      compiled.blocks['types'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"start\">[[admin/advanced/events:filter-start]]</label>\n\t\t\t\t\t\t<input type=\"date\" id=\"start\" name=\"start\" value=\"" + 
      __escape(guard((context != null && context['query'] != null) ? context['query']['start'] : null)) + 
      "\" class=\"form-control\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"end\">[[admin/advanced/events:filter-end]]</label>\n\t\t\t\t\t\t<input type=\"date\" id=\"end\" name=\"end\" value=\"" + 
      __escape(guard((context != null && context['query'] != null) ? context['query']['end'] : null)) + 
      "\" class=\"form-control\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"perPage\">[[admin/advanced/events:filter-perPage]]</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"perPage\" name=\"perPage\" value=\"" + 
      __escape(guard((context != null && context['query'] != null) ? context['query']['perPage'] : null)) + 
      "\" class=\"form-control\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block\" id=\"apply\">[[admin/advanced/events:filters-apply]]</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<button class=\"btn btn-block btn-danger\" data-action=\"clear\">\n\t\t\t\t\t<i class=\"fa fa-eraser\"></i> [[admin/advanced/events:delete-events]]\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    'events': function events(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['events'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<div data-eid=\"" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['eid'] : null)) + 
          "\">\n\t\t\t\t\t<span class=\"label label-default\">#" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['eid'] : null)) + 
          "</span>\n\t\t\t\t\t<span class=\"label label-info\">" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['type'] : null)) + 
          "</span>\n\t\t\t\t\t<span class=\"label label-default\">uid " + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['uid'] : null)) + 
          "</span>\n\t\t\t\t\t" + 
          (guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['ip'] : null) ?
            "<span class=\"label label-default\">" + 
              __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['ip'] : null)) + 
              "</span>" :
            "") + 
          "\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['userslug'] : null)) + 
          "\" target=\"_blank\">\n\t\t\t\t\t\t" + 
          (guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['picture'] : null) ?
            "\n\t\t\t\t\t\t<img class=\"avatar avatar-xs\" src=\"" + 
              __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['picture'] : null)) + 
              "\" alt=\"\" />\n\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t<div class=\"avatar avatar-xs\" style=\"background-color: " + 
              __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['icon:text'] : null)) + 
              "</div>\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['userslug'] : null)) + 
          "\" target=\"_blank\">" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null && context['events'][key0]['user'] != null) ? context['events'][key0]['user']['username'] : null)) + 
          "</a>\n\t\t\t\t\t<span class=\"pull-right delete-event\"><i class=\"fa fa-trash-o\"></i></span>\n\t\t\t\t\t<span class=\"pull-right\">" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['timestampISO'] : null)) + 
          "</span>\n\t\t\t\t\t<pre class=\"well\">" + 
          __escape(guard((context != null && context['events'] != null && context['events'][key0] != null) ? context['events'][key0]['jsonString'] : null)) + 
          "</pre>\n\t\t\t\t</div>\n\t\t\t\t";
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
    'types': function types(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['types'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['types'] != null && context['types'][key0] != null) ? context['types'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['types'] != null && context['types'][key0] != null) ? context['types'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['types'] != null && context['types'][key0] != null) ? context['types'][key0]['name'] : null)) + 
          " - (" + 
          __escape(guard((context != null && context['types'] != null && context['types'][key0] != null) ? context['types'][key0]['count'] : null)) + 
          ") </option>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
