
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
    return "<div class=\"form-group\">\n\t<p class=\"lead\">[[user:consent.lead]]</p>\n\t<p>[[user:consent.intro]]</p>\n\t<div class=\"checkbox\">\n\t\t<label>\n\t\t\t<input type=\"checkbox\" name=\"gdpr_agree_data\" id=\"gdpr_agree_data\"> <strong>[[register:gdpr_agree_data]]</strong>\n\t\t</label>\n\t</div>\n\t<p>\n\t\t[[user:consent.email_intro]]\n\t\t" + 
      (guard((context != null) ? context['digestEnabled'] : null) ?
        "\n\t\t[[user:consent.digest_frequency, " + 
          __escape(guard((context != null) ? context['digestFrequency'] : null)) + 
          "]]\n\t\t" :
        "\n\t\t[[user:consent.digest_off]]\n\t\t") + 
      "\n\t</p>\n\t\n\t<div class=\"checkbox\">\n\t\t<label>\n\t\t\t<input type=\"checkbox\" name=\"gdpr_agree_email\" id=\"gdpr_agree_email\"> <strong>[[register:gdpr_agree_email]]</strong>\n\t\t</label>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
