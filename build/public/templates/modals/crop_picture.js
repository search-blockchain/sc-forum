
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
    return "<div id=\"crop-picture-modal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"crop-picture\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n\t\t\t\t<h3 id=\"crop-picture\">[[user:crop_picture]]</h3>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div id=\"upload-progress-box\" class=\"progress hide\">\n\t\t\t\t\t<div id=\"upload-progress-bar\" class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"cropper\">\n\t\t\t\t\t<img id=\"cropped-image\" crossorigin=\"anonymous\" src=\"" + 
      __escape(guard((context != null) ? context['url'] : null)) + 
      "\" alt=\"\">\n\t\t\t\t</div>\n\n\t\t\t\t<hr />\n\n\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t<button class=\"btn btn-primary rotate\" data-degrees=\"-45\"><i class=\"fa fa-rotate-left\"></i></button>\n\t\t\t\t\t<button class=\"btn btn-primary rotate\" data-degrees=\"45\"><i class=\"fa fa-rotate-right\"></i></button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t<button class=\"btn btn-primary flip\" data-option=\"-1\" data-method=\"scaleX\"><i class=\"fa fa-arrows-h\"></i></button>\n\t\t\t\t\t<button class=\"btn btn-primary flip\" data-option=\"1\" data-method=\"scaleY\"><i class=\"fa fa-arrows-v\"></i></button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t<button class=\"btn btn-primary reset\"><i class=\"fa fa-refresh\"></i></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n\t\t\t\t<button class=\"btn btn-primary upload-btn " + 
      (guard((context != null) ? context['allowSkippingCrop'] : null) ?
        "" :
        "hidden") + 
      "\">[[user:upload_picture]]</button>\n\t\t\t\t<button class=\"btn btn-primary crop-btn\">[[user:upload_cropped_picture]]</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
