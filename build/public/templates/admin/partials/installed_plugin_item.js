
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
    return "\t\t\t\t\t" + 
      (guard((context != null) ? context['error'] : null) ?
        "" :
        "\n\t\t\t\t\t<li id=\"" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "\" data-plugin-index=\"" + 
          __escape(index) + 
          "\" data-plugin-id=\"" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "\" data-version=\"" + 
          __escape(guard((context != null) ? context['version'] : null)) + 
          "\" class=\"clearfix " + 
          (guard((context != null) ? context['active'] : null) ?
            "active" :
            "") + 
          "\">\n\t\t\t\t\t\t<div class=\"pull-right controls\">\n\t\t\t\t\t\t\t" + 
          (guard((context != null) ? context['installed'] : null) ?
            "\n\t\t\t\t\t\t\t\t" + 
              (guard((context != null) ? context['isTheme'] : null) ?
                "\n\t\t\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/admin/appearance/themes\" class=\"btn btn-info\">[[admin/extend/plugins:plugin-item.themes]]</a>\n\t\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t\t<button data-action=\"toggleActive\" class=\"btn " + 
                  (guard((context != null) ? context['active'] : null) ?
                    " btn-warning" :
                    " btn-success") + 
                  " " + 
                  (guard((context != null) ? context['canChangeState'] : null) ?
                    "" :
                    "disabled") + 
                  "\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i> " + 
                  (guard((context != null) ? context['active'] : null) ?
                    "[[admin/extend/plugins:plugin-item.deactivate]]" :
                    "[[admin/extend/plugins:plugin-item.activate]]") + 
                  "</button>\n\t\t\t\t\t\t\t\t") + 
              "\n\n\t\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\n\t\t\t\t\t\t\t\t" + 
              (guard((context != null) ? context['active'] : null) ?
                "\n\t\t\t\t\t\t\t\t" + 
                  (guard((context != null) ? context['settingsRoute'] : null) ?
                    "\n\t\t\t\t\t\t\t\t<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      __escape(guard((context != null) ? context['settingsRoute'] : null)) + 
                      "\" class=\"btn btn-primary\"><i class=\"fa fa-wrench\"></i> [[admin/extend/plugins:plugin-item.settings]]</a>\n\t\t\t\t\t\t\t\t" :
                    "") + 
                  "\n\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"0\" class=\"btn btn-success\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.install]]</button>\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "</strong></h2>\n\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['description'] : null) ?
            "\n\t\t\t\t\t\t<p>" + 
              __escape(guard((context != null) ? context['description'] : null)) + 
              "</p>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['outdated'] : null) ?
            "<i class=\"fa fa-exclamation-triangle text-danger\"></i> " :
            "") + 
          "\n\t\t\t\t\t\t<small>[[admin/extend/plugins:plugin-item.installed]] <strong class=\"currentVersion\">" + 
          __escape(guard((context != null) ? context['version'] : null)) + 
          "</strong> | [[admin/extend/plugins:plugin-item.latest]] <strong class=\"latestVersion\">" + 
          __escape(guard((context != null) ? context['latest'] : null)) + 
          "</strong></small>\n\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['outdated'] : null) ?
            "\n\t\t\t\t\t\t<button data-action=\"upgrade\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-download\"></i> [[admin/extend/plugins:plugin-item.upgrade]]</button>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t" + 
              (guard((context != null) ? context['isCompatible'] : null) ?
                "\n\t\t\t\t\t\t\t<i class=\"fa fa-check text-success\"></i> [[admin/extend/plugins:plugin-item.compatible, " + 
                  __escape(guard((context != null) ? context['version'] : null)) + 
                  "]]\n\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t<i class=\"fa fa-question text-warning\"></i> [[admin/extend/plugins:plugin-item.not-compatible]]\n\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['url'] : null) ?
            "\n\t\t\t\t\t\t<p>[[admin/extend/plugins:plugin-item.more-info]] <a target=\"_blank\" href=\"" + 
              __escape(guard((context != null) ? context['url'] : null)) + 
              "\">" + 
              __escape(guard((context != null) ? context['url'] : null)) + 
              "</a></p>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t</li>\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null) ? context['error'] : null) ?
        "\n\t\t\t\t\t<li data-plugin-id=\"" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "\" class=\"clearfix\">\n\t\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t\t<button class=\"btn btn-default disabled\"><i class=\"fa fa-exclamation-triangle\"></i> [[admin/extend/plugins:plugin-item.unknown]]</button>\n\t\t\t\t\t\t\t<button data-action=\"toggleInstall\" data-installed=\"1\" class=\"btn btn-danger\"><i class=\"fa fa-trash-o\"></i> [[admin/extend/plugins:plugin-item.uninstall]]</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h2><strong>" + 
          __escape(guard((context != null) ? context['id'] : null)) + 
          "</strong></h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t[[admin/extend/plugins:plugin-item.unknown-explanation]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
        "") + 
      "\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
