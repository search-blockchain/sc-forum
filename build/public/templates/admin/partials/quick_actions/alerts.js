
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
    return "<div class=\"alert " + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "alert-warning" :
        "alert-info") + 
      " well-sm\">\n\t<span>[[admin/menu:alerts.version, " + 
      __escape(guard((context != null) ? context['version'] : null)) + 
      "]]</span>\n\t" + 
      (guard((context != null) ? context['upgradeAvailable'] : null) ?
        "\n\t<span style=\"margin-left: 10px\">\n\t\t<a href=\"https://docs.nodebb.org/configuring/upgrade/\" target=\"_blank\">\n\t\t\t<u>[[admin/menu:alerts.upgrade, " + 
          __escape(guard((context != null) ? context['latestVersion'] : null)) + 
          "]]</u>\n\t\t</a>\n\t</span>\n\t" :
        "") + 
      "\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
