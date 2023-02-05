
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
    return "<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">Google+ SSO</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<div class=\"alert alert-info\">\n\t\t\t<strong>Quick Start</strong>\n\t\t\t<ol>\n\t\t\t\t<li>\n\t\t\t\t\tCreate a <strong>New Project</strong> via the\n\t\t\t\t\t<a href=\"https://code.google.com/apis/console/\">API Manager <i class=\"fa fa-external-link\"></i></a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tFrom the \"Credentials\" page, create a new \"OAuth Client ID\". (<a data-action=\"help-credentials\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/plugins/nodebb-plugin-sso-google/images/credentials.png\"><i class=\"fa fa-question-circle\"></i> Where is this page?</a>)\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>The \"Application Type\" is \"Web application\"</li>\n\t\t\t\t\t\t<li>\"Name\" can be anything. Perhaps \"NodeBB SSO\" will suffice.</li>\n\t\t\t\t\t\t<li>\"Authorized Javascript origins\" can be left empty</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\tThe \"Authorised Redirect URI\" is your NodeBB's URL with `/auth/google/callback` appended to it.\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>Our best guess for this site is <code>" + 
      __escape(guard((context != null) ? context['baseUrl'] : null)) + 
      "/auth/google/callback</code></li>\n\t\t\t\t\t\t\t\t<li>When you enter this value into the text field, be sure to hit <code>Enter</code> to submit the URL before saving</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t<li>You will be shown a screen containing your <strong>Client ID</strong> and <strong>Client Secret</strong>.</li>\n\t\t\t\t<li>You can set this values in two ways\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>Use environment variables\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><code>export SSO_GOOGLE_CLIENT_ID='Client ID'</code></li>\n\t\t\t\t\t\t\t\t<li><code>export SSO_GOOGLE_CLIENT_SECRET='Client Secret'</code></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>Use form below (this behavior overrides the environment variables)</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t<li>Save and restart NodeBB via the ACP Dashboard</li>\n\t\t\t</ol>\n\t\t</div>\n\t\t<form role=\"form\" class=\"sso-google-settings\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"app_id\">Client ID</label>\n\t\t\t\t<input type=\"text\" name=\"id\" title=\"Client ID\" class=\"form-control input-lg\" placeholder=\"Client ID\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"secret\">Secret</label>\n\t\t\t\t<input type=\"text\" name=\"secret\" title=\"Client Secret\" class=\"form-control\" placeholder=\"Client Secret\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"style\">Login Button Style</label>\n\t\t\t\t<select class=\"form-control\" name=\"style\" id=\"style\" title=\"Login Button Style\">\n\t\t\t\t\t<option value=\"light\">Light</option>\n\t\t\t\t\t<option value=\"dark\">Dark</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label for=\"autoconfirm\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"autoconfirm\" name=\"autoconfirm\">\n\t\t\t\t\t<span class=\"mdl-switch__label\">Skip email verification for people who register using SSO?</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label for=\"disableRegistration\" class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"mdl-switch__input\" id=\"disableRegistration\" name=\"disableRegistration\" />\n\t\t\t\t\t<span class=\"mdl-switch__label\">Disable user registration via SSO</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<p class=\"help-block\">\n\t\t\t\tRestricting registration means that only registered users can associate their account with this SSO strategy.\n\t\t\t\tThis restriction is useful if you have users bypassing registration controls by using social media accounts, or\n\t\t\t\tif you wish to use the NodeBB registration queue.\n\t\t\t</p>\n\t\t</form>\n\t</div>\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
