
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
    return "<div id=\"widgets\" class=\"row\">\n\t<div class=\"col-md-8\" id=\"active-widgets\">\n\t\t<ul class=\"nav nav-pills\">\n\n\t\t\t<li role=\"presentation\" class=\"dropdown\">\n\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"selected-template\">" + 
      __escape(guard((context != null && context['templates'] != null && context['templates']['0'] != null) ? context['templates']['0']['template'] : null)) + 
      "</span> <span class=\"caret\"></span>\n\t\t\t\t</a>\n\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t" + 
      compiled.blocks['templates'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t" + 
      iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<div class=\"tab-pane " + 
          (index === 0 ?
            "active" :
            "") + 
          "\" data-template=\"" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "\">\n\t\t\t\t\t" + 
          iter(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['areas'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t\t\t\t<div class=\"area\" data-template=\"" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              "\" data-location=\"" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null)) + 
              "\">\n\t\t\t\t\t\t\t<h4>" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['name'] : null)) + 
              " <small>" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              " / " + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null && context['templates'][key0]['areas'] != null && context['templates'][key0]['areas'][key1] != null) ? context['templates'][key0]['areas'][key1]['location'] : null)) + 
              "</small></h4>\n\t\t\t\t\t\t\t<div class=\"well widget-area\">\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t</div>\n\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-4\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/extend/widgets:available]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<div class=\"available-widgets\">\n\t\t\t\t\t<p>[[admin/extend/widgets:explanation]]</p>\n\t\t\t\t\t" + 
      (guard((context != null && context['availableWidgets'] != null) ? context['availableWidgets']['length'] : null) ?
        "" :
        "\n\t\t\t\t\t<div class=\"alert alert-info\">[[admin/extend/widgets:none-installed, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/extend/plugins]]</div>\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<select id=\"widget-selector\" class=\"form-control\">\n\t\t\t\t\t\t\t" + 
      compiled.blocks['availableWidgets'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['availableWidgets'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t<div data-widget=\"" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['widget'] : null)) + 
          "\" class=\"panel widget-panel panel-default pointer hide\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<strong>" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['name'] : null)) + 
          "</strong>\n\t\t\t\t\t\t\t\t\t<small><br />" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['description'] : null)) + 
          "</small>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"panel-body hidden\">\n\t\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['content'] : null)) + 
          "\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"btn-group\" component=\"clone\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" component=\"clone/button\">[[admin/extend/widgets:clone-from]] ...</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<ul class=\"dropdown-menu pull-right\">\n\t\t\t\t\t\t\t" + 
      iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t" + 
          (index === 0 ?
            "" :
            "\n\t\t\t\t\t\t\t<li><a href=\"#\">" + 
              __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
              "</a></li>\n\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      }) + 
      "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">[[admin/extend/widgets:containers.available]]</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<p>[[admin/extend/widgets:containers.explanation]]</p>\n\t\t\t\t<div class=\"available-containers\">\n\t\t\t\t\t<div class=\"containers\">\n\t\t\t\t\t\t<div class=\"pointer\" style=\"padding: 20px; border: 1px dotted #dedede; margin-bottom: 20px;\" data-container-html=\" \">\n\t\t\t\t\t\t\t[[admin/extend/widgets:containers.none]]\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"well pointer\" data-container-html='<div class=\"well\">" + 
      "{{body}}</div>'>\n\t\t\t\t\t\t\t[[admin/extend/widgets:container.well]]\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"jumbotron pointer\" data-container-html='<div class=\"jumbotron\">" + 
      "{{body}}</div>'>\n\t\t\t\t\t\t\t[[admin/extend/widgets:container.jumbotron]]\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel\" data-container-html='<div class=\"panel panel-default\"><div class=\"panel-body\">" + 
      "{{body}}</div></div>'>\n\t\t\t\t\t\t\t<div class=\"panel-body pointer\">\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.panel]]\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel panel-default pointer\" data-container-html='<div class=\"panel panel-default\"><div class=\"panel-heading\"><h3 class=\"panel-title\">" + 
      "{{title}}</h3></div><div class=\"panel-body\">" + 
      "{{body}}</div></div>'>\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.panel-header]]\n\t\t\t\t\t\t\t\t<div class=\"pull-right color-selector\">\n\t\t\t\t\t\t\t\t\t<button data-class=\"panel-default\" class=\"btn btn-xs\">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class=\"panel-primary\" class=\"btn btn-xs btn-primary\">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class=\"panel-success\" class=\"btn btn-xs btn-success\">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class=\"panel-info\" class=\"btn btn-xs btn-info\">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class=\"panel-warning\" class=\"btn btn-xs btn-warning\">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class=\"panel-danger\" class=\"btn btn-xs btn-danger\">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.panel-body]]\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"alert alert-info pointer\" data-container-html='<div class=\"alert alert-info\">" + 
      "{{body}}</div>'>\n\t\t\t\t\t\t\t[[admin/extend/widgets:container.alert]]\n\t\t\t\t\t\t\t<div class=\"pull-right color-selector\">\n\t\t\t\t\t\t\t\t<button data-class=\"alert-success\" class=\"btn btn-xs btn-success\">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t<button data-class=\"alert-info\" class=\"btn btn-xs btn-info\">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t<button data-class=\"alert-warning\" class=\"btn btn-xs btn-warning\">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t<button data-class=\"alert-danger\" class=\"btn btn-xs btn-danger\">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>";
  }

  compiled.blocks = {
    'templates': function templates(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['templates'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<li><a href=\"#\" data-template=\"" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "\" data-toggle=\"pill\">" + 
          __escape(guard((context != null && context['templates'] != null && context['templates'][key0] != null) ? context['templates'][key0]['template'] : null)) + 
          "</a></li>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'availableWidgets': function availableWidgets(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['availableWidgets'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['widget'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['availableWidgets'] != null && context['availableWidgets'][key0] != null) ? context['availableWidgets'][key0]['name'] : null)) + 
          "</option>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
