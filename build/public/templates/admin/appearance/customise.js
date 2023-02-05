
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
    return "<div id=\"customise\" class=\"customise\">\n\t<ul class=\"nav nav-pills\">\n\t\t<li class=\"active\"><a href=\"#custom-css\" data-toggle=\"tab\">[[admin/appearance/customise:custom-css]]</a></li>\n\t\t<li><a href=\"#custom-js\" data-toggle=\"tab\">[[admin/appearance/customise:custom-js]]</a></li>\n\t\t<li><a href=\"#custom-header\" data-toggle=\"tab\">[[admin/appearance/customise:custom-header]]</a></li>\n\t</ul>\n\t<br />\n\t<div class=\"tab-content\">\n\t\t<div class=\"tab-pane fade active in\" id=\"custom-css\">\n\t\t\t<p>\n\t\t\t\t[[admin/appearance/customise:custom-css.description]]\n\t\t\t</p>\n\t\t\t<div id=\"customCSS\"></div>\n\t\t\t<input type=\"hidden\" id=\"customCSS-holder\" value=\"\" data-field=\"customCSS\" />\n\n\t\t\t<br />\n\t\t\t<form class=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"useCustomCSS\">\n\t\t\t\t\t\t<input class=\"mdl-switch__input\" id=\"useCustomCSS\" type=\"checkbox\" data-field=\"useCustomCSS\" />\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/appearance/customise:custom-css.enable]]</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<div class=\"tab-pane fade\" id=\"custom-js\">\n\t\t\t<p>\n\t\t\t\t[[admin/appearance/customise:custom-js.description]]\n\t\t\t</p>\n\t\t\t<div id=\"customJS\"></div>\n\t\t\t<input type=\"hidden\" id=\"customJS-holder\" value=\"\" data-field=\"customJS\" />\n\n\t\t\t<br />\n\t\t\t<form class=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"useCustomJS\">\n\t\t\t\t\t\t<input class=\"mdl-switch__input\" id=\"useCustomJS\" type=\"checkbox\" data-field=\"useCustomJS\" />\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/appearance/customise:custom-js.enable]]</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<div class=\"tab-pane fade\" id=\"custom-header\">\n\t\t\t<p>\n\t\t\t\t[[admin/appearance/customise:custom-header.description]]\n\t\t\t</p>\n\n\t\t\t<div id=\"customHTML\"></div>\n\t\t\t<input type=\"hidden\" id=\"customHTML-holder\" value=\"\" data-field=\"customHTML\" />\n\n\t\t\t<br />\n\t\t\t<form class=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"useCustomHTML\">\n\t\t\t\t\t\t<input class=\"mdl-switch__input\" id=\"useCustomHTML\" type=\"checkbox\" data-field=\"useCustomHTML\" />\n\t\t\t\t\t\t<span class=\"mdl-switch__label\">[[admin/appearance/customise:custom-header.enable]]</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<form class=\"form\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\" for=\"enableLiveReload\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" id=\"enableLiveReload\" type=\"checkbox\" data-field=\"enableLiveReload\" checked />\n\t\t\t\t\t<span class=\"mdl-switch__label\">\n\t\t\t\t\t\t[[admin/appearance/customise:custom-css.livereload]]\n\t\t\t\t\t\t<small>[[admin/appearance/customise:custom-css.livereload.description]]</small>\n\t\t\t\t\t</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
