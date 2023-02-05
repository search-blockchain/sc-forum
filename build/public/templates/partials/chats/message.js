
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
    return "<li component=\"chat/message\" class=\"chat-message clear" + 
      (guard((context != null) ? context['deleted'] : null) ?
        " deleted" :
        "") + 
      "\" data-index=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['index'] : null)) + 
      "\" data-mid=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['messageId'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['fromuid'] : null)) + 
      "\" data-self=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['self'] : null)) + 
      "\" data-break=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['newSet'] : null)) + 
      "\" data-timestamp=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['timestamp'] : null)) + 
      "\">\r\n\t<div class=\"message-header\">\r\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['userslug'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null) ? context['messages']['fromUser'] : null), "md", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
      "</a>\r\n\t\t<strong><span class=\"chat-user\"><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['userslug'] : null)) + 
      "\">" + 
      __escape(guard((context != null && context['messages'] != null && context['messages']['fromUser'] != null) ? context['messages']['fromUser']['displayname'] : null)) + 
      "</a></span></strong>\r\n\t\t" + 
      (guard((context != null && context['fromUser'] != null) ? context['fromUser']['banned'] : null) ?
        "\r\n\t\t<span class=\"label label-danger\">[[user:banned]]</span>\r\n\t\t" :
        "") + 
      "\r\n\t\t" + 
      (guard((context != null && context['fromUser'] != null) ? context['fromUser']['deleted'] : null) ?
        "\r\n\t\t<span class=\"label label-danger\">[[user:deleted]]</span>\r\n\t\t" :
        "") + 
      "\r\n\t\t<span class=\"chat-timestamp timeago\" title=\"" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['timestampISO'] : null)) + 
      "\"></span>\r\n\t\t" + 
      (guard((context != null && context['messages'] != null) ? context['messages']['edited'] : null) ?
        "\r\n\t\t<div class=\"text-muted pull-right\" title=\"[[global:edited]] " + 
          __escape(guard((context != null && context['messages'] != null) ? context['messages']['editedISO'] : null)) + 
          "\"><i class=\"fa fa-edit\"></i></span></div>\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n\t<div class=\"message-body-wrapper\">\r\n\t\t<div component=\"chat/message/body\" class=\"message-body\">\r\n\t\t\t" + 
      __escape(guard((context != null && context['messages'] != null) ? context['messages']['content'] : null)) + 
      "\r\n\t\t</div>\r\n\r\n\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['disableChatMessageEditing'] : null) ?
        "" :
        "\r\n\t\t" + 
          (guard((context != null && context['messages'] != null) ? context['messages']['self'] : null) ?
            "\r\n\t\t<div class=\"btn-group controls\">\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"edit\"><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"restore\"><i class=\"fa fa-repeat\"></i></button>\r\n\t\t\t" + 
              (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
                "\r\n\t\t\t<button class=\"btn btn-xs btn-link chat-ip\" title=\"[[modules:chat.show-ip]]\"><i class=\"fa fa-info-circle chat-ip-button\"></i></button>\r\n\t\t\t" :
                "") + 
              "\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\t\t") + 
      "\r\n\t</div>\r\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
