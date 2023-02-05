
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
    return "<li component=\"chat/recent/room\" data-roomid=\"" + 
      __escape(guard((context != null && context['rooms'] != null) ? context['rooms']['roomId'] : null)) + 
      "\" class=\"" + 
      (guard((context != null && context['rooms'] != null) ? context['rooms']['unread'] : null) ?
        "unread" :
        "") + 
      "\">\n\t" + 
      compiled.blocks['rooms.users'](helpers, context, guard, iter, helper) + 
      "\n\n\t<ul class=\"members\">\n\t\t" + 
      iter(guard((context != null && context['rooms'] != null) ? context['rooms']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li>\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms']['users'] != null && context['rooms']['users'][key0] != null) ? context['rooms']['users'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms']['users'] != null) ? context['rooms']['users'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\t\t</li>\n\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t</ul>\n\n\t<div class=\"notification-chat-content\">\n\t\t<strong class=\"room-name\">\n\t\t\t" + 
      (guard((context != null && context['rooms'] != null && context['rooms']['lastUser'] != null) ? context['rooms']['lastUser']['uid'] : null) ?
        "\n\t\t\t<span component=\"chat/title\">" + 
          (guard((context != null && context['rooms'] != null) ? context['rooms']['roomName'] : null) ?
            __escape(guard((context != null && context['rooms'] != null) ? context['rooms']['roomName'] : null)) :
            __escape(guard((context != null && context['rooms'] != null) ? context['rooms']['usernames'] : null))) + 
          "</span>\n\t\t\t" :
        "\n\t\t\t<span>[[modules:chat.no-users-in-room]]</span>\n\t\t\t") + 
      "\n\t\t</strong>\n\t</div>\n</li>";
  }

  compiled.blocks = {
    'rooms.users': function roomsusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['rooms'] != null) ? context['rooms']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          (index === 0 ?
            "\n\t<div class=\"main-avatar\">\n\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms']['users'] != null && context['rooms']['users'][key0] != null) ? context['rooms']['users'][key0]['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms']['users'] != null) ? context['rooms']['users'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n\t</div>\n\t" :
            "") + 
          "\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
