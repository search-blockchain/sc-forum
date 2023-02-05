
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
    return "\t<div id=\"upload-picture-from-url-modal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"upload-picture-url\" aria-hidden=\"true\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n\t\t\t\t\t<h3 id=\"upload-picture-url\">[[user:upload_picture]]</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<input id=\"uploadFromUrl\" class=\"form-control\" type=\"text\"/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">[[global:close]]</button>\n\t\t\t\t\t<button class=\"btn btn-primary upload-btn\">[[user:upload_picture]]</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
