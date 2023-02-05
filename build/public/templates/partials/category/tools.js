
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
    return (guard((context != null) ? context['showTopicTools'] : null) ?
        "\n<div class=\"btn-group thread-tools bottom-sheet\">\n\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n\t\t<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:thread_tools.title]]</span>\n\t\t<span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-gear\"></i></span>\n\t\t<span class=\"caret\"></span>\n\t</button>\n\t<ul class=\"dropdown-menu pull-right\">\n\t\t<li>\n\t\t\t<a component=\"topic/mark-unread-for-all\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-inbox\"></i> [[topic:thread_tools.markAsUnreadForAll]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/pin\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-thumb-tack\"></i> [[topic:thread_tools.pin]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/unpin\" href=\"#\" class=\"hidden\">\n\t\t\t\t<i class=\"fa fa-fw fa-thumb-tack fa-rotate-90\"></i> [[topic:thread_tools.unpin]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a component=\"topic/lock\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-lock\"></i> [[topic:thread_tools.lock]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/unlock\" href=\"#\" class=\"hidden\">\n\t\t\t\t<i class=\"fa fa-fw fa-unlock\"></i> [[topic:thread_tools.unlock]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class=\"divider\"></li>\n\n\t\t<li>\n\t\t\t<a component=\"topic/move\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move]]\n\t\t\t</a>\n\t\t</li>\n\t\t" + 
          (guard((context != null && context['template'] != null) ? context['template']['category'] : null) ?
            "\n\t\t<li>\n\t\t\t<a component=\"topic/move-all\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move_all]]\n\t\t\t</a>\n\t\t</li>\n\t\t" :
            "") + 
          "\n\t\t<li>\n\t\t\t<a component=\"topic/merge\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread_tools.merge]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class=\"divider\"></li>\n\n\t\t<li>\n\t\t\t<a component=\"topic/delete\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread_tools.delete]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/restore\" href=\"#\" class=\"hidden\">\n\t\t\t\t<i class=\"fa fa-fw fa-history\"></i> [[topic:thread_tools.restore]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/purge\" href=\"#\" class=\"hidden\">\n\t\t\t\t<i class=\"fa fa-fw fa-eraser\"></i> [[topic:thread_tools.purge]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t" + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\n\t</ul>\n</div>\n" :
        "");
  }

  compiled.blocks = {
    'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thread_tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li>\n\t\t\t<a href=\"#\" class=\"" + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['class'] : null)) + 
          "\"><i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['icon'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['title'] : null)) + 
          "</a>\n\t\t</li>\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
