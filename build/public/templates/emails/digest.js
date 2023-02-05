
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
    return "<!DOCTYPE html>\n<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\n<head>\n    <meta charset=\"utf-8\"> <!-- utf-8 works for most cases -->\n    <meta name=\"viewport\" content=\"width=device-width\"> <!-- Forcing initial-scale shouldn't be necessary -->\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <!-- Use the latest (edge) version of IE rendering engine -->\n    <meta name=\"x-apple-disable-message-reformatting\">  <!-- Disable auto-scale in iOS 10 Mail entirely -->\n    <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->\n\n    <!-- Web Font / @font-face : BEGIN -->\n\t<!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. -->\n\n    <!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->\n    <!--[if mso]>\n        <style>\n            * {\n                font-family: sans-serif !important;\n            }\n        </style>\n    <![endif]-->\n\n    <!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->\n    <!--[if !mso]><!-->\n        <!-- insert web font reference, eg: <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'> -->\n    <!--<![endif]-->\n\n    <!-- Web Font / @font-face : END -->\n\n\t<!-- CSS Reset -->\n    <style>\n\n        /* What it does: Remove spaces around the email design added by some email clients. */\n        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */\n        html,\n        body {\n            margin: 0 auto !important;\n            padding: 0 !important;\n            height: 100% !important;\n            width: 100% !important;\n        }\n\n        /* What it does: Stops email clients resizing small text. */\n        * {\n            -ms-text-size-adjust: 100%;\n            -webkit-text-size-adjust: 100%;\n        }\n\n        /* What it does: Centers email on Android 4.4 */\n        div[style*=\"margin: 16px 0\"] {\n            margin:0 !important;\n        }\n\n        /* What it does: Stops Outlook from adding extra spacing to tables. */\n        table,\n        td {\n            mso-table-lspace: 0pt !important;\n            mso-table-rspace: 0pt !important;\n        }\n\n        /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */\n        table {\n            border-spacing: 0 !important;\n            border-collapse: collapse !important;\n            table-layout: fixed !important;\n            margin: 0 auto !important;\n        }\n        table table table {\n            table-layout: auto;\n        }\n\n        /* What it does: Uses a better rendering method when resizing images in IE. */\n        img {\n            -ms-interpolation-mode:bicubic;\n        }\n\n        /* What it does: A work-around for email clients meddling in triggered links. */\n        *[x-apple-data-detectors],\t/* iOS */\n        .x-gmail-data-detectors, \t/* Gmail */\n        .x-gmail-data-detectors *,\n        .aBn {\n            border-bottom: 0 !important;\n            cursor: default !important;\n            color: inherit !important;\n            text-decoration: none !important;\n            font-size: inherit !important;\n            font-family: inherit !important;\n            font-weight: inherit !important;\n            line-height: inherit !important;\n        }\n\n        /* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */\n        .a6S {\n\t        display: none !important;\n\t        opacity: 0.01 !important;\n        }\n        /* If the above doesn't work, add a .g-img class to any image in question. */\n        img.g-img + div {\n\t        display:none !important;\n\t   \t}\n\n        /* What it does: Prevents underlining the button text in Windows 10 */\n        .button-link {\n            text-decoration: none !important;\n        }\n\n        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */\n        /* Create one of these media queries for each additional viewport size you'd like to fix */\n        /* Thanks to Eric Lepetit (@ericlepetitsf) for help troubleshooting */\n        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) { /* iPhone 6 and 6+ */\n            .email-container {\n                min-width: 375px !important;\n            }\n        }\n\n    </style>\n\n    <!-- Progressive Enhancements -->\n    <style>\n\n        /* What it does: Hover styles for buttons */\n        .button-td,\n        .button-a {\n            transition: all 100ms ease-in;\n        }\n        .button-td:hover,\n        .button-a:hover {\n            background: #555555 !important;\n            border-color: #555555 !important;\n        }\n\n        /* Media Queries */\n        @media screen and (max-width: 600px) {\n\n            /* What it does: Adjust typography on small screens to improve readability */\n\t\t\t.email-container p {\n\t\t\t\tfont-size: 17px !important;\n\t\t\t\tline-height: 26px !important;\n\t\t\t}\n\n\t\t}\n\n        .notification-body img {\n            max-width: 100%;\n            height: auto;\n        }\n\t</style>\n\n\t<!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->\n\t<!--[if gte mso 9]>\n\t<xml>\n\t\t<o:OfficeDocumentSettings>\n\t\t\t<o:AllowPNG/>\n\t\t\t<o:PixelsPerInch>96</o:PixelsPerInch>\n\t\t</o:OfficeDocumentSettings>\n\t</xml>\n\t<![endif]-->\n\n</head>\n\n<body width=\"100%\" bgcolor=\"#f6f6f6\" style=\"margin: 0; mso-line-height-rule: exactly;\">\n\t<center style=\"width: 100%; background: #f6f6f6; text-align: left;\">\n\n\t\t<!--\n\t\t\tSet the email width. Defined in two places:\n\t\t\t1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 600px.\n\t\t\t2. MSO tags for Desktop Windows Outlook enforce a 600px width.\n\t\t-->\n\t\t<div style=\"max-width: 600px; margin: auto;" + 
      (guard((context != null) ? context['rtl'] : null) ?
        " text-align: right; direction: rtl;" :
        "") + 
      "\" class=\"email-container\">\n\t\t\t<!--[if mso]>\n\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"600\" align=\"center\">\n\t\t\t<tr>\n\t\t\t<td>\n\t\t\t<![endif]-->\n\n\t\t\t<!-- Email Header : BEGIN -->\n\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 600px;\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"padding: 20px 0; text-align: center\">\n\t\t\t\t\t\t" + 
      (guard((context != null && context['logo'] != null) ? context['logo']['src'] : null) ?
        "\n\t\t\t\t\t\t<img src=\"" + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['src'] : null)) + 
          "\" height=\"" + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['height'] : null)) + 
          "\" width=\"" + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['width'] : null)) + 
          "\" alt=\"" + 
          __escape(guard((context != null) ? context['site_title'] : null)) + 
          "\" border=\"0\" style=\"height: " + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['height'] : null)) + 
          "px; width: " + 
          __escape(guard((context != null && context['logo'] != null) ? context['logo']['width'] : null)) + 
          "px; background: #f6f6f6; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #333333;\">\n\t\t\t\t\t\t" :
        "\n\t\t\t\t\t\t&nbsp;\n\t\t\t\t\t\t") + 
      "\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<!-- Email Header : END -->\n\n<!-- Email Body : BEGIN -->\n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 600px;\">\n\n\t<!-- 1 Column Text + Button : BEGIN -->\n\t<tr>\n\t\t<td bgcolor=\"#ffffff\">\n\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"padding: 40px 40px 6px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\n\t\t\t\t\t\t<h1 style=\"margin: 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 24px; line-height: 27px; color: #333333; font-weight: normal;\">[[email:greeting_with_name, " + 
      __escape(guard((context != null) ? context['username'] : null)) + 
      "]]</h1>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\n\t\t\t\t\t\t<h1 style=\"margin: 0 0 10px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;\">[[email:digest.title." + 
      __escape(guard((context != null) ? context['interval'] : null)) + 
      "]]</h1>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t" + 
      (guard((context != null && context['notifications'] != null) ? context['notifications']['length'] : null) ?
        "\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\n\t\t\t\t\t\t<ul style=\"margin: 0; padding: 0;\">\n\t\t\t\t\t\t\t" + 
          compiled.blocks['notifications'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      (guard((context != null && context['topTopics'] != null) ? context['topTopics']['length'] : null) ?
        "\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\n\t\t\t\t\t\t<h1 style=\"margin: 16px 0 24px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;\">[[email:digest.top-topics, " + 
          __escape(guard((context != null) ? context['site_title'] : null)) + 
          "]]</h1>\n\t\t\t\t\t\t<ul style=\"margin: 0; padding: 0;\">\n\t\t\t\t\t\t\t" + 
          compiled.blocks['topTopics'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      (guard((context != null && context['popularTopics'] != null) ? context['popularTopics']['length'] : null) ?
        "\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\n\t\t\t\t\t\t<h1 style=\"margin: 16px 0 24px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;\">[[email:digest.popular-topics, " + 
          __escape(guard((context != null) ? context['site_title'] : null)) + 
          "]]</h1>\n\t\t\t\t\t\t<ul style=\"margin: 0; padding: 0;\">\n\t\t\t\t\t\t\t" + 
          compiled.blocks['popularTopics'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      (guard((context != null && context['recent'] != null) ? context['recent']['length'] : null) ?
        "\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\n\t\t\t\t\t\t<h1 style=\"margin: 16px 0 24px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;\">[[email:digest.latest_topics, " + 
          __escape(guard((context != null) ? context['site_title'] : null)) + 
          "]]</h1>\n\t\t\t\t\t\t<ul style=\"margin: 0; padding: 0;\">\n\t\t\t\t\t\t\t" + 
          compiled.blocks['recent'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"padding: 32px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;\">\n\t\t\t\t\t\t<!-- Button : BEGIN -->\n\t\t\t\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"border-radius: 3px; background: #222222; text-align: center;\" class=\"button-td\">\n\t\t\t\t\t\t\t\t\t<a href=\"" + 
      __escape(guard((context != null) ? context['url'] : null)) + 
      "\" style=\"background: #222222; border: 15px solid #222222; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 3px; font-weight: bold;\" class=\"button-a\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"color:#ffffff;\" class=\"button-link\">[[email:digest.cta, " + 
      __escape(guard((context != null) ? context['site_title'] : null)) + 
      "]] &rarr;</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<!-- Button : END -->\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</td>\n\t</tr>\n\t<!-- 1 Column Text + Button : END -->\n\n</table>\n<!-- Email Body : END -->\n\n\t\t\t<!-- Email Footer : BEGIN -->\n\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 680px;\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"padding: 40px 10px;width: 100%;font-size: 12px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height:18px; text-align: center; color: #888888;\">\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['showUnsubscribe'] : null) ?
        "\n\t\t\t\t\t\t[[email:notif.post.unsub.info]] <a href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null) ? context['uid'] : null)) + 
          "/settings\">[[email:unsub.cta]]</a>.\n\t\t\t\t\t\t<br />[[email:notif.post.unsub.one-click]] <a href=\"" + 
          __escape(guard((context != null) ? context['unsubUrl'] : null)) + 
          "\">[[email:unsubscribe]]</a>.\n\t\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<!-- Email Footer : END -->\n\n\t\t\t<!--[if mso]>\n\t\t\t</td>\n\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<![endif]-->\n\t\t</div>\n\n\t</center>\n</body>\n\n</html>\n";
  }

  compiled.blocks = {
    'notifications': function notifications(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notifications'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; padding-bottom: 0.5em;\">\n\t\t\t\t\t\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px;\">\n\t\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null) ?
            "\n\t\t\t\t\t\t\t\t\t\t\t<img style=\"vertical-align: middle; width: 32px; height: 32px; border-radius: 50%\" src=\"" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null)) + 
              "\" alt=\"\" />\n\t\t\t\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"vertical-align: middle; width: 32px; height: 32px; line-height: 32px; font-size: 16px; background-color: " + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['icon:bgColor'] : null)) + 
              "; color: white; text-align: center; display: inline-block; border-radius: 50%\">" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['icon:text'] : null)) + 
              "</div>\n\t\t\t\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #333333;\" href=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['notification_url'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['bodyShort'] : null)) + 
          "</a></p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'topTopics': function topTopics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topTopics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; padding-bottom: 0.5em;\">\n\t\t\t\t\t\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px; vertical-align: middle;\">" + 
          __escape(helper(context, helpers, 'renderDigestAvatar', [guard(value)])) + 
          "</td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #333333;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topTopics'] != null && context['topTopics'][key0] != null) ? context['topTopics'][key0]['slug'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['topTopics'] != null && context['topTopics'][key0] != null) ? context['topTopics'][key0]['title'] : null)) + 
          "</strong></a></p>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; font-size: 12px;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #aaaaaa; line-height: 16px;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['topTopics'] != null && context['topTopics'][key0] != null && context['topTopics'][key0]['teaser'] != null && context['topTopics'][key0]['teaser']['user'] != null) ? context['topTopics'][key0]['teaser']['user']['uid'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['topTopics'] != null && context['topTopics'][key0] != null && context['topTopics'][key0]['teaser'] != null && context['topTopics'][key0]['teaser']['user'] != null) ? context['topTopics'][key0]['teaser']['user']['username'] : null)) + 
          "</strong></a></p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"padding: 8px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 26px; color: #666666;\">" + 
          __escape(guard((context != null && context['topTopics'] != null && context['topTopics'][key0] != null && context['topTopics'][key0]['teaser'] != null) ? context['topTopics'][key0]['teaser']['content'] : null)) + 
          "</p>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"text-decoration:none !important; text-decoration:none; text-transform: capitalize; color: #666666; line-height: 16px;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topTopics'] != null && context['topTopics'][key0] != null) ? context['topTopics'][key0]['slug'] : null)) + 
          "\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small><strong><span style=\"color: #aaaaaa;\">&rsaquo;</span> [[global:read_more]]</strong></small>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t" + 
          (index === length - 1 ?
            "" :
            "\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; margin: 0px 64px 16px 64px; border-bottom: 1px solid #dddddd\"></li>\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'popularTopics': function popularTopics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['popularTopics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; padding-bottom: 0.5em;\">\n\t\t\t\t\t\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px; vertical-align: middle;\">" + 
          __escape(helper(context, helpers, 'renderDigestAvatar', [guard(value)])) + 
          "</td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #333333;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['popularTopics'] != null && context['popularTopics'][key0] != null) ? context['popularTopics'][key0]['slug'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['popularTopics'] != null && context['popularTopics'][key0] != null) ? context['popularTopics'][key0]['title'] : null)) + 
          "</strong></a></p>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; font-size: 12px;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #aaaaaa; line-height: 16px;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['popularTopics'] != null && context['popularTopics'][key0] != null && context['popularTopics'][key0]['teaser'] != null && context['popularTopics'][key0]['teaser']['user'] != null) ? context['popularTopics'][key0]['teaser']['user']['uid'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['popularTopics'] != null && context['popularTopics'][key0] != null && context['popularTopics'][key0]['teaser'] != null && context['popularTopics'][key0]['teaser']['user'] != null) ? context['popularTopics'][key0]['teaser']['user']['username'] : null)) + 
          "</strong></a></p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"padding: 8px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 26px; color: #666666;\">" + 
          __escape(guard((context != null && context['popularTopics'] != null && context['popularTopics'][key0] != null && context['popularTopics'][key0]['teaser'] != null) ? context['popularTopics'][key0]['teaser']['content'] : null)) + 
          "</p>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"text-decoration:none !important; text-decoration:none; text-transform: capitalize; color: #666666; line-height: 16px;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['popularTopics'] != null && context['popularTopics'][key0] != null) ? context['popularTopics'][key0]['slug'] : null)) + 
          "\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small><strong><span style=\"color: #aaaaaa;\">&rsaquo;</span> [[global:read_more]]</strong></small>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t" + 
          (index === length - 1 ?
            "" :
            "\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; margin: 0px 64px 16px 64px; border-bottom: 1px solid #dddddd\"></li>\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'recent': function recent(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['recent'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; padding-bottom: 0.5em;\">\n\t\t\t\t\t\t\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px; vertical-align: middle;\">" + 
          __escape(helper(context, helpers, 'renderDigestAvatar', [guard(value)])) + 
          "</td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #333333;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['recent'] != null && context['recent'][key0] != null) ? context['recent'][key0]['slug'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['recent'] != null && context['recent'][key0] != null) ? context['recent'][key0]['title'] : null)) + 
          "</strong></a></p>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; font-size: 12px;\"><a style=\"text-decoration:none !important; text-decoration:none; color: #aaaaaa; line-height: 16px;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['recent'] != null && context['recent'][key0] != null && context['recent'][key0]['teaser'] != null && context['recent'][key0]['teaser']['user'] != null) ? context['recent'][key0]['teaser']['user']['uid'] : null)) + 
          "\"><strong>" + 
          __escape(guard((context != null && context['recent'] != null && context['recent'][key0] != null && context['recent'][key0]['teaser'] != null && context['recent'][key0]['teaser']['user'] != null) ? context['recent'][key0]['teaser']['user']['username'] : null)) + 
          "</strong></a></p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"padding: 8px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 26px; color: #666666;\">" + 
          __escape(guard((context != null && context['recent'] != null && context['recent'][key0] != null && context['recent'][key0]['teaser'] != null) ? context['recent'][key0]['teaser']['content'] : null)) + 
          "</p>\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"text-decoration:none !important; text-decoration:none; text-transform: capitalize; color: #666666; line-height: 16px;\" href=\"" + 
          __escape(guard((context != null) ? context['url'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['recent'] != null && context['recent'][key0] != null) ? context['recent'][key0]['slug'] : null)) + 
          "\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small><strong><span style=\"color: #aaaaaa;\">&rsaquo;</span> [[global:read_more]]</strong></small>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t" + 
          (index === length - 1 ?
            "" :
            "\n\t\t\t\t\t\t\t<li style=\"text-decoration: none; list-style-type: none; margin: 0px 64px 16px 64px; border-bottom: 1px solid #dddddd\"></li>\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
