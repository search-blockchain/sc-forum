
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
    return "<div class=\"category\" data-cid=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3 pull-right\">\n\t\t\t<div component=\"category-selector\" class=\"btn-group bottom-sheet\">\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">" + 
      ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null) ? context['selectedCategory'] : null)])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['icon'] : null)) + 
          "\" style=\"color: " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['color'] : null)) + 
          ";\"></i></span> " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) :
        "\n    <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
          (guard((context != null) ? context['selectCategoryLabel'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
            "[[topic:thread_tools.select_category]]") + 
          "</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw " + 
          (guard((context != null) ? context['selectCategoryIcon'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
            "fa-list") + 
          "\"></i></span>\n    ") + 
      "</span> <span class=\"caret\"></span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden\">\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n    <li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n        <a role=\"menu-item\">[[search:no-matches]]</a>\n    </li>\n    " + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n\t\t</div>\n\t</div>\n\n\t<br/>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-9\" id=\"category-settings\">\n\t\t\t<div class=\"category-settings-form\">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-name\">\n\t\t\t\t\t\t[[admin/manage/categories:name]]\n\t\t\t\t\t</label>\n\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-name\" type=\"text\" class=\"form-control\" placeholder=\"[[admin/manage/categories:name]]\" data-name=\"name\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['name'] : null)) + 
      "\" /><br />\n\n\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-description\">\n\t\t\t\t\t\t[[admin/manage/categories:description]]\n\t\t\t\t\t</label>\n\t\t\t\t\t<textarea id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-description\" data-name=\"description\" placeholder=\"[[admin/manage/categories:description]]\" class=\"form-control category_description description\" />" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['description'] : null)) + 
      "</textarea><br />\n\t\t\t\t</fieldset>\n\n\t\t\t\t<fieldset class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-bgColor\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:bg-color]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"color\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-bgColor\" placeholder=\"#0059b2\" data-name=\"bgColor\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['bgColor'] : null)) + 
      "\" class=\"form-control category_bgColor\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-color\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:text-color]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"color\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-color\" placeholder=\"#ffffff\" data-name=\"color\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['color'] : null)) + 
      "\" class=\"form-control category_color\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-imageClass\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:bg-image-size]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<select id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-imageClass\" class=\"form-control\" data-name=\"imageClass\" data-value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['imageClass'] : null)) + 
      "\">\n\t\t\t\t\t\t\t\t<option value=\"auto\">auto</option>\n\t\t\t\t\t\t\t\t<option value=\"cover\">cover</option>\n\t\t\t\t\t\t\t\t<option value=\"contain\">contain</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><br />\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-class\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:custom-class]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input list=\"customClasses\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-class\" type=\"text\" class=\"form-control\" placeholder=\"" + 
      (guard((context != null && context['customClasses'] != null) ? context['customClasses']['length'] : null) ?
        compiled.blocks['customClasses'](helpers, context, guard, iter, helper) :
        "col-md-6 col-xs-6") + 
      "\" data-name=\"class\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['class'] : null)) + 
      "\" />\n\t\t\t\t\t\t\t<datalist id=\"customClasses\">\n\t\t\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['customClasses'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t<option>" + 
          __escape(guard(value)) + 
          "</option>\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t\t\t\t</datalist>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-numRecentReplies\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:num-recent-replies]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-numRecentReplies\" type=\"text\" class=\"form-control\" placeholder=\"2\" data-name=\"numRecentReplies\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['numRecentReplies'] : null)) + 
      "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-link\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:ext-link]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-link\" type=\"text\" class=\"form-control\" placeholder=\"http://domain.com\" data-name=\"link\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['link'] : null)) + 
      "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-subcategories-per-page\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:subcategories-per-page]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"cid-subcategories-per-page\" type=\"text\" class=\"form-control\" data-name=\"subCategoriesPerPage\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['subCategoriesPerPage'] : null)) + 
      "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-min-tags\">\n\t\t\t\t\t\t\t\t[[admin/settings/tags:min-per-topic]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"cid-min-tags\" type=\"text\" class=\"form-control\" data-name=\"minTags\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['minTags'] : null)) + 
      "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"cid-max-tags\">\n\t\t\t\t\t\t\t\t[[admin/settings/tags:max-per-topic]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id=\"cid-max-tags\" type=\"text\" class=\"form-control\" data-name=\"maxTags\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['maxTags'] : null)) + 
      "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"tag-whitelist\">[[admin/manage/categories:tag-whitelist]]</label><br />\n\t\t\t\t\t\t\t<input id=\"tag-whitelist\" type=\"text\" class=\"form-control\" data-name=\"tagWhitelist\" value=\"\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-isSection\" data-name=\"isSection\" " + 
      (guard((context != null && context['category'] != null) ? context['category']['isSection'] : null) ?
        "checked" :
        "") + 
      " />\n\t\t\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/manage/categories:is-section]]</strong></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t" + 
      (guard((context != null) ? context['postQueueEnabled'] : null) ?
        "\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" data-name=\"postQueue\" " + 
          (guard((context != null && context['category'] != null) ? context['category']['postQueue'] : null) ?
            "checked" :
            "") + 
          " />\n\t\t\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/manage/categories:post-queue]]</strong></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-3 options acp-sidebar\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<div class=\"category-preview\" style=\"\n\t\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null) ?
        "background-image: url(" + 
          __escape(guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null)) + 
          ");" :
        "") + 
      "\n\t\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['bgColor'] : null) ?
        "background-color: " + 
          __escape(guard((context != null && context['category'] != null) ? context['category']['bgColor'] : null)) + 
          ";" :
        "") + 
      "\n\t\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['imageClass'] : null) ?
        "background-size: " + 
          __escape(guard((context != null && context['category'] != null) ? context['category']['imageClass'] : null)) + 
          ";" :
        "") + 
      "\n\t\t\t\t\t\tcolor: " + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['color'] : null)) + 
      ";\n\t\t\t\t\t\">\n\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t<i data-name=\"icon\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['icon'] : null)) + 
      "\" class=\"fa " + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['icon'] : null)) + 
      " fa-2x\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"btn-group btn-group-justified\">\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<button type=\"button\" data-cid=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\" class=\"btn btn-default upload-button\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-upload\"></i>\n\t\t\t\t\t\t\t\t[[admin/manage/categories:upload-image]]\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null) ?
        "\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<button class=\"btn btn-warning delete-image\">\n\t\t\t\t\t\t\t\t<i data-name=\"icon\" value=\"fa-times\" class=\"fa fa-times\"></i>\n\t\t\t\t\t\t\t\t[[admin/manage/categories:delete-image]]\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t</div><br />\n\n\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t<div class=\"form-group text-center\">\n\t\t\t\t\t\t\t<label for=\"category-image\">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:category-image]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t<input id=\"category-image\" type=\"text\" class=\"form-control\" placeholder=\"[[admin/manage/categories:category-image]]\" data-name=\"backgroundImage\" value=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['backgroundImage'] : null)) + 
      "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</fieldset>\n\n\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t<div class=\"form-group text-center\">\n\t\t\t\t\t\t\t<label for=\"cid-" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "-parentCid\">[[admin/manage/categories:parent-category]]</label>\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t<div class=\"btn-group " + 
      (guard((context != null && context['category'] != null && context['category']['parent'] != null) ? context['category']['parent']['name'] : null) ?
        "" :
        "hide") + 
      "\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-action=\"changeParent\" data-parentCid=\"" + 
      __escape(guard((context != null && context['category'] != null && context['category']['parent'] != null) ? context['category']['parent']['cid'] : null)) + 
      "\"><i class=\"fa " + 
      __escape(guard((context != null && context['category'] != null && context['category']['parent'] != null) ? context['category']['parent']['icon'] : null)) + 
      "\"></i> " + 
      __escape(guard((context != null && context['category'] != null && context['category']['parent'] != null) ? context['category']['parent']['name'] : null)) + 
      "</button>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" data-action=\"removeParent\" data-parentCid=\"" + 
      __escape(guard((context != null && context['category'] != null && context['category']['parent'] != null) ? context['category']['parent']['cid'] : null)) + 
      "\"><i class=\"fa fa-times\"></i></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-block " + 
      (guard((context != null && context['category'] != null && context['category']['parent'] != null) ? context['category']['parent']['name'] : null) ?
        "hide" :
        "") + 
      "\" data-action=\"setParent\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-sitemap\"></i>\n\t\t\t\t\t\t\t\t[[admin/manage/categories:parent-category-none]]\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</fieldset>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/manage/privileges/" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\" class=\"btn btn-info btn-block\">\n\t\t\t\t\t\t<i class=\"fa fa-gear\"></i> [[admin/manage/privileges:edit-privileges]]\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/category/" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['cid'] : null)) + 
      "\" class=\"btn btn-info btn-block\">\n\t\t\t\t\t\t<i class=\"fa fa-eye\"></i> [[admin/manage/categories:view-category]]\n\t\t\t\t\t</a>\n\t\t\t\t\t<button class=\"btn btn-info btn-block copy-settings\">\n\t\t\t\t\t\t<i class=\"fa fa-files-o\"></i> [[admin/manage/categories:copy-settings]]\n\t\t\t\t\t</button>\n\t\t\t\t\t<hr />\n\t\t\t\t\t<button data-action=\"toggle\" data-disabled=\"" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['disabled'] : null)) + 
      "\" class=\"btn btn-sm btn-block " + 
      (guard((context != null && context['category'] != null) ? context['category']['disabled'] : null) ?
        "btn-primary" :
        "btn-danger") + 
      "\">\n\t\t\t\t\t\t" + 
      (guard((context != null && context['category'] != null) ? context['category']['disabled'] : null) ?
        "\n\t\t\t\t\t\t[[admin/manage/categories:enable]]\n\t\t\t\t\t\t" :
        "\n\t\t\t\t\t\t[[admin/manage/categories:disable]]\n\t\t\t\t\t\t") + 
      "\n\t\t\t\t\t</button>\n\t\t\t\t\t<button class=\"btn btn-danger btn-block purge\">\n\t\t\t\t\t\t<i class=\"fa fa-eraser\"></i> [[admin/manage/categories:purge]]\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n    <i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n        <a role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i style=\"color: " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['color'] : null)) + 
              ";\" class=\"fa fa-stack-1x fa-fw " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null)) + 
              "\"></i></span>" :
            "") + 
          " " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "</span></a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'customClasses': function customClasses(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['customClasses'] : null), function each(key0, index, length, value) {
        var key = key0;
        return (index === 0 ?
            __escape(guard(value)) :
            "");
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
