
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
    return "<ul class=\"nav nav-pills\">\n\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=online\">[[global:online]]</a></li>\n\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=sort-posts\">[[users:top_posters]]</a></li>\n\t" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=sort-reputation\">[[users:most_reputation]]</a></li>\n\t") + 
      "\n\t" + 
      (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
        "\n\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=flagged\">[[users:most_flags]]</a></li>\n\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=banned\">[[user:banned]]</a></li>\n\t" :
        "") + 
      "\n</ul>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
