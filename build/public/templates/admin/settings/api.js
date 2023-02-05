
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
    return "<form role=\"form\" class=\"core-api-settings\">\n\t<p class=\"lead\">[[admin/settings/api:lead-text]]</p>\n\t<p>[[admin/settings/api:intro]]</p>\n\t<p>\n\t\t<a href=\"https://docs.nodebb.org/api\">\n\t\t\t<i class=\"fa fa-external-link\"></i>\n\t\t\t[[admin/settings/api:docs]]\n\t\t</a>\n\t</p>\n\n\t<hr />\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/api:settings]]</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input id=\"requireHttps\" class=\"mdl-switch__input\" type=\"checkbox\" name=\"requireHttps\" />\n\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/settings/api:require-https]]</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<p class=\"help-block\">[[admin/settings/api:require-https-caveat]]</p>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/api:tokens]]</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<div class=\"form-group\" data-type=\"sorted-list\" data-sorted-list=\"tokens\" data-item-template=\"admin/partials/api/sorted-list/item\" data-form-template=\"admin/partials/api/sorted-list/form\">\n\t\t\t\t<input type=\"hidden\" name=\"tokens\">\n\t\t\t\t<ul data-type=\"list\" class=\"list-group\"></ul>\n\t\t\t\t<button type=\"button\" data-type=\"add\" class=\"btn btn-info\">Create Token</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
