
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
    return "<div class=\"text-center\">\n\t<div class=\"panel panel-default\">\n\t\t<div class=\"panel-body collapse\" id=\"flags-daily-wrapper\" aria-expanded=\"false\">\n\t\t\t<div><canvas id=\"flags:daily\" height=\"150\"></canvas></div>\n\t\t</div>\n\t\t<div class=\"panel-footer\" data-toggle=\"collapse\" data-target=\"#flags-daily-wrapper\" aria-controls=\"#flags-daily-wrapper\"><small>[[flags:graph-label]]</small>&nbsp;<i class=\"fa fa-sort\"></i></div>\n\t</div>\n</div>\n\n<div class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">[[flags:quick-filters]]</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<ul>\n\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/flags?quick=mine\">[[flags:filter-quick-mine]]</a></li>\n\t\t</ul>\n\t</div>\n</div>\n\n<div class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">[[flags:filters]]</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<form role=\"form\" component=\"flags/filters\">\n\t\t\t<fieldset>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"filter-cid\">[[flags:filter-cid]]</label>\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<div component=\"category/dropdown\" class=\"btn-group category-dropdown-container bottom-sheet\">\n   <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    " + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null) ? context['selectedCategory'] : null)])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['icon'] : null)) + 
          "\" style=\"color: " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['color'] : null)) + 
          ";\"></i></span> <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "</span>" :
        "\n    <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[unread:all_categories]]</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-list\"></i></span>") + 
      " <span class=\"caret\"></span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden\">\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n    <li role=\"presentation\" class=\"category\" data-all=\"all\">\n        <a role=\"menu-item\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['allCategoriesUrl'] : null)) + 
      "\"><i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "invisible" :
        "") + 
      "\"></i> [[unread:all_categories]]</a>\n    </li>\n    " + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"sort\">[[flags:sort]]</label>\n\t\t\t\t\t<select class=\"form-control\" id=\"sort\" name=\"sort\">\n\t\t\t\t\t\t<optgroup label=\"[[flags:sort-all]]\">\n\t\t\t\t\t\t\t<option value=\"newest\">[[flags:sort-newest]]</option>\n\t\t\t\t\t\t\t<option value=\"oldest\">[[flags:sort-oldest]]</option>\n\t\t\t\t\t\t\t<option value=\"reports\">[[flags:sort-reports]]</option>\n\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t<optgroup label=\"[[flags:sort-posts-only]]\">\n\t\t\t\t\t\t\t<option value=\"downvotes\">[[flags:sort-downvotes]]</option>\n\t\t\t\t\t\t\t<option value=\"upvotes\">[[flags:sort-upvotes]]</option>\n\t\t\t\t\t\t\t<option value=\"replies\">[[flags:sort-replies]]</option>\n\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"filter-state\">[[flags:filter-state]]</label>\n\t\t\t\t\t<select class=\"form-control\" id=\"filter-state\" name=\"state\">\n\t\t\t\t\t\t<option value=\"\">[[flags:state-all]]</option>\n\t\t\t\t\t\t<option value=\"open\">[[flags:state-open]]</option>\n\t\t\t\t\t\t<option value=\"wip\">[[flags:state-wip]]</option>\n\t\t\t\t\t\t<option value=\"resolved\">[[flags:state-resolved]]</option>\n\t\t\t\t\t\t<option value=\"rejected\">[[flags:state-rejected]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"filter-type\">[[flags:filter-type]]</label>\n\t\t\t\t\t<select class=\"form-control\" id=\"filter-type\" name=\"type\">\n\t\t\t\t\t\t<option value=\"\">[[flags:filter-type-all]]</option>\n\t\t\t\t\t\t<option value=\"post\">[[flags:filter-type-post]]</option>\n\t\t\t\t\t\t<option value=\"user\">[[flags:filter-type-user]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</fieldset>\n\n\t\t\t<fieldset class=\"collapse" + 
      (guard((context != null) ? context['expanded'] : null) ?
        " in" :
        "") + 
      "\" id=\"more-filters\" aria-expanded=\"" + 
      __escape(guard((context != null) ? context['expanded'] : null)) + 
      "\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"filter-assignee\">[[flags:filter-assignee]]</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"filter-assignee\" name=\"assignee\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"filter-targetUid\">[[flags:filter-targetUid]]</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"filter-targetUid\" name=\"targetUid\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"filter-reporterId\">[[flags:filter-reporterId]]</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"filter-reporterId\" name=\"reporterId\" />\n\t\t\t\t</div>\n\t\t\t</fieldset>\n\n\t\t\t" + 
      (guard((context != null) ? context['expanded'] : null) ?
        "\n\t\t\t<button type=\"button\" class=\"btn btn-link btn-block\" data-toggle=\"collapse\" data-target=\"#more-filters\" aria-controls=\"#more-filters\" data-text-variant=\"[[flags:more-filters]] \">[[flags:fewer-filters]]&nbsp;<i class=\"fa fa-sort\"></i></button>\n\t\t\t" :
        "\n\t\t\t<button type=\"button\" class=\"btn btn-link btn-block\" data-toggle=\"collapse\" data-target=\"#more-filters\" aria-controls=\"#more-filters\" data-text-variant=\"[[flags:fewer-filters]] \">[[flags:more-filters]]&nbsp;<i class=\"fa fa-sort\"></i></button>\n\t\t\t") + 
      "\n\t\t\t<button type=\"button\" id=\"apply-filters\" class=\"btn btn-primary btn-block\">[[flags:apply-filters]]</button>\n\t\t</form>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\">\n        <a role=\"menu-item\" href=\"#\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "<i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i><span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i class=\"fa fa-fw fa-stack-1x " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null)) + 
              "\" style=\"color: " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['color'] : null)) + 
              ";\"></i></span>" :
            "") + 
          " " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "</span></a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
