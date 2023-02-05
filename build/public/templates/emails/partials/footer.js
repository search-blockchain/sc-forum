
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
    return "\t\t\t<!-- Email Footer : BEGIN -->\n\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 680px;\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"padding: 40px 10px;width: 100%;font-size: 12px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height:18px; text-align: center; color: #888888;\">\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['showUnsubscribe'] : null) ?
        "\n\t\t\t\t\t\t[[email:notif.post.unsub.info]] <a href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null) ? context['uid'] : null)) + 
          "/settings\">[[email:unsub.cta]]</a>.\n\t\t\t\t\t\t<br />[[email:notif.post.unsub.one-click]] <a href=\"" + 
          __escape(guard((context != null) ? context['unsubUrl'] : null)) + 
          "\">[[email:unsubscribe]]</a>.\n\t\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<!-- Email Footer : END -->\n\n\t\t\t<!--[if mso]>\n\t\t\t</td>\n\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<![endif]-->\n\t\t</div>\n\n\t</center>\n</body>\n\n</html>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
