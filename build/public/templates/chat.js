
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
    return "\n<div id=\"chat-modal\" class=\"chat-modal hide\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Chat\" aria-hidden=\"true\" data-backdrop=\"none\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button id=\"chat-close-btn\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n\t\t\t\t<button type=\"button\" class=\"close hidden-xs hidden-sm\" data-action=\"maximize\"><span aria-hidden=\"true\"><i class=\"fa fa-expand\"></i></span><span class=\"sr-only\">[[modules:chat.maximize]]</span></button>\n\t\t\t\t<button type=\"button\" class=\"close hidden-xs hidden-sm\" data-action=\"minimize\"><span aria-hidden=\"true\"><i class=\"fa fa-minus\"></i></span><span class=\"sr-only\">[[modules:chat.minimize]]</span></button>\n\t\t\t\t<div class=\"dropdown pull-right\">\n  <button class=\"close\" data-toggle=\"dropdown\" component=\"chat/controlsToggle\"><i class=\"fa fa-gear\"></i></button>\n  <ul class=\"dropdown-menu dropdown-menu-right pull-right\" component=\"chat/controls\">\n    <li class=\"dropdown-header\">[[modules:chat.options]]</li>\n    <li>\n      <a href=\"#\" data-action=\"members\"><i class=\"fa fa-fw fa-cog\"></i> [[modules:chat.manage-room]]</a>\n    </li>\n    <li>\n      <a href=\"#\" data-action=\"rename\"><i class=\"fa fa-fw fa-edit\"></i> [[modules:chat.rename-room]]</a>\n    </li>\n    <li>\n      <a href=\"#\" data-action=\"leave\"><i class=\"fa fa-fw fa-sign-out\"></i> [[modules:chat.leave]]</a>\n    </li>\n    " + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "\n    <li role=\"separator\" class=\"divider\"></li>\n    <li class=\"dropdown-header\">[[modules:chat.in-room]]</li>\n    " + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\n    " :
        "") + 
      "\n  </ul>\n</div>\n\n\n\t\t\t\t<h4 component=\"chat/room/name\">" + 
      (guard((context != null) ? context['roomName'] : null) ?
        __escape(guard((context != null) ? context['roomName'] : null)) :
        __escape(guard((context != null) ? context['usernames'] : null))) + 
      "</h4>\n\t\t\t</div>\n\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div component=\"chat/messages/scroll-up-alert\" class=\"scroll-up-alert alert alert-info\" role=\"button\">[[modules:chat.scroll-up-alert]]</div>\n\t\t\t\t<ul class=\"chat-content\" component=\"chat/messages\">\n\t\t\t\t\t" + 
      compiled.blocks['messages'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\n\t\t\t\t<div component=\"chat/composer\">\n\t\t\t\t\t<textarea component=\"chat/input\" placeholder=\"[[modules:chat.placeholder]]\" class=\"form-control chat-input mousetrap\" rows=\"1\"></textarea>\n\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\" data-action=\"send\"><i class=\"fa fa-fw fa-2x fa-paper-plane\"></i></button>\n\t\t\t\t\t<span component=\"chat/message/remaining\">" + 
      __escape(guard((context != null) ? context['maximumChatMessageLength'] : null)) + 
      "</span>\n\t\t\t\t\t<form component=\"chat/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t\t\t\t<input type=\"file\" name=\"files[]\" multiple class=\"hidden\"/>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"imagedrop\"><div>[[topic:composer.drag_and_drop_images]]</div></div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li>\n      <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'messages': function messages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['messages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t" + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['system'] : null) ?
            "\n\t<li component=\"chat/system-message\" class=\"system-message clear\" data-index=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['index'] : null)) + 
              "\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
              "\" data-self=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
              "\" data-break=\"0\" data-timestamp=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
              "\">\r\n\t[[modules:chat.system." + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
              ", " + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['username'] : null)) + 
              "]]\r\n</li>\n\t" :
            "\n\t<li component=\"chat/message\" class=\"chat-message clear" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['deleted'] : null) ?
                " deleted" :
                "") + 
              "\" data-index=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['index'] : null)) + 
              "\" data-mid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
              "\" data-self=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
              "\" data-break=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['newSet'] : null)) + 
              "\" data-timestamp=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
              "\">\r\n\t<div class=\"message-header\">\r\n\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromUser'] : null), "md", guard((context != null) ? context['true'] : null), "not-responsive"])) + 
              "</a>\r\n\t\t<strong><span class=\"chat-user\"><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['displayname'] : null)) + 
              "</a></span></strong>\r\n\t\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['banned'] : null) ?
                "\r\n\t\t<span class=\"label label-danger\">[[user:banned]]</span>\r\n\t\t" :
                "") + 
              "\r\n\t\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['deleted'] : null) ?
                "\r\n\t\t<span class=\"label label-danger\">[[user:deleted]]</span>\r\n\t\t" :
                "") + 
              "\r\n\t\t<span class=\"chat-timestamp timeago\" title=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestampISO'] : null)) + 
              "\"></span>\r\n\t\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['edited'] : null) ?
                "\r\n\t\t<div class=\"text-muted pull-right\" title=\"[[global:edited]] " + 
                  __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['editedISO'] : null)) + 
                  "\"><i class=\"fa fa-edit\"></i></span></div>\r\n\t\t" :
                "") + 
              "\r\n\t</div>\r\n\t<div class=\"message-body-wrapper\">\r\n\t\t<div component=\"chat/message/body\" class=\"message-body\">\r\n\t\t\t" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
              "\r\n\t\t</div>\r\n\r\n\t\t" + 
              (guard((context != null && context['config'] != null) ? context['config']['disableChatMessageEditing'] : null) ?
                "" :
                "\r\n\t\t" + 
                  (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null) ?
                    "\r\n\t\t<div class=\"btn-group controls\">\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"edit\"><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"restore\"><i class=\"fa fa-repeat\"></i></button>\r\n\t\t\t" + 
                      (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
                        "\r\n\t\t\t<button class=\"btn btn-xs btn-link chat-ip\" title=\"[[modules:chat.show-ip]]\"><i class=\"fa fa-info-circle chat-ip-button\"></i></button>\r\n\t\t\t" :
                        "") + 
                      "\r\n\t\t</div>\r\n\t\t" :
                    "") + 
                  "\r\n\t\t") + 
              "\r\n\t</div>\r\n</li>\n\t") + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
