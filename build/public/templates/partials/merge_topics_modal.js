
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
    return "<div class=\"panel panel-primary merge-topic-card\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">[[topic:thread_tools.merge_topics]]</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<p>\n\t\t\t[[topic:merge_topics_instruction]]\n\t\t</p>\n\t\t<p>\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<input class=\"form-control topic-search-input\" type=\"text\">\n\t\t\t\t<span class=\"input-group-addon\">\n\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</p>\n\t\t<div style=\"position: relative;\">\n\t\t\t<div class=\"quick-search-container hidden\">\n\t\t\t\t<div class=\"text-center loading-indicator\"><i class=\"fa fa-spinner fa-spin\"></i></div>\n\t\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<p><strong>[[topic:merge-topic-list-title]]</strong></p>\n\t\t<ul class=\"topics-section\">\n\t\t\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\n\t\t</ul>\n\t\t<p>\n\t\t\t<strong>[[topic:merge-options]]</strong>\n\t\t</p>\n\t\t<form>\n\t\t\t<p>\n\t\t\t\t<input class=\"merge-main-topic-radio\" type=\"radio\" name=\"merge-topic-option\" checked=\"true\"> [[topic:merge-select-main-topic]]\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<select class=\"form-control merge-main-topic-select\">\n\t\t\t\t\t" + 
      iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</option>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t</select>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<input class=\"merge-new-title-radio\" type=\"radio\" name=\"merge-topic-option\"> [[topic:merge-new-title-for-topic]]\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<input class=\"merge-new-title-input form-control\" type=\"text\">\n\t\t\t</p>\n\t\t</form>\n\t</div>\n\t<div class=\"panel-footer\">\n\t\t&nbsp;\n\t\t<div class=\"btn-group pull-right\">\n\t\t\t<button class=\"btn btn-link btn-xs\" id=\"merge_topics_cancel\">[[global:buttons.close]]</button>\n\t\t\t<button class=\"btn btn-primary btn-xs\" id=\"merge_topics_confirm\" disabled>[[topic:thread_tools.merge]]</button>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</strong></a></li>\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
