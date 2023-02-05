
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
    return "<div class=\"panel panel-primary tool-modal\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">[[topic:thread_tools.move-posts]]</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<div>\n\t\t\t<label for=\"topicId\">[[topic:topic-id]]</label>\n\t\t\t<input id=\"topicId\" type=\"text\" class=\"form-control\"><br/>\n\t\t</div>\n\t\t<p>\n    \t\t<strong><span id=\"pids\"></span></strong>\n        </p>\n        <p class=\"help-block\">\n            [[topic:move_posts_instruction]]\n        </p>\n\t</div>\n\t<div class=\"panel-footer text-right\">\n\t\t<div class=\"btn-group\">\n\t\t\t<button class=\"btn btn-link btn-xs\" id=\"move_posts_cancel\">[[global:buttons.close]]</button>\n\t\t\t<button class=\"btn btn-primary btn-xs\" id=\"move_posts_confirm\" disabled>[[topic:move]]</button>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
