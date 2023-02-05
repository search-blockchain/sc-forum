
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
    return "<div class=\"panel panel-primary fork-thread-card\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">[[topic:fork_topic]]</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"title\">[[topic:title]]</label>\n\t\t\t<input id=\"fork-title\" type=\"text\" class=\"form-control\" placeholder=\"[[topic:enter-new-topic-title]]\">\n\t\t</div>\n\t\t<p>\n\t\t\t[[topic:fork_topic_instruction]]<br />\n\t\t\t<strong><span id=\"fork-pids\"></span></strong>\n\t\t</p>\n\t</div>\n\t<div class=\"panel-footer\">\n\t\t&nbsp;\n\t\t<div class=\"btn-group pull-right\">\n\t\t\t<button class=\"btn btn-link btn-xs\" id=\"fork_thread_cancel\">[[global:buttons.close]]</button>\n\t\t\t<button class=\"btn btn-primary btn-xs\" id=\"fork_thread_commit\" disabled>[[topic:fork_topic]] <i class=\"fa fa-arrow-circle-right\"></i></button>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
