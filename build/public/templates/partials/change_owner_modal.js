
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
    return "<div class=\"panel panel-primary fork-thread-card\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">[[topic:thread_tools.change_owner]]</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<div>\n\t\t\t<label for=\"username\">[[user:username]]</label>\n\t\t\t<input id=\"username\" type=\"text\" class=\"form-control\"><br/>\n\t\t</div>\n\t\t<p>\n\t\t\t[[topic:change_owner_instruction]]<br />\n\t\t\t<strong><span id=\"pids\"></span></strong>\n\t\t</p>\n\t</div>\n\t<div class=\"panel-footer\">\n\t\t&nbsp;\n\t\t<div class=\"btn-group pull-right\">\n\t\t\t<button class=\"btn btn-link btn-xs\" id=\"change_owner_cancel\">[[global:buttons.close]]</button>\n\t\t\t<button class=\"btn btn-primary btn-xs\" id=\"change_owner_commit\" disabled>[[topic:change-owner]]</button>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
