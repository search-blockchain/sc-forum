
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
    return "<div class=\"info\">\n\t<div class=\"panel panel-default\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">[[admin/development/info:you-are-on, " + 
      __escape(guard((context != null) ? context['host'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['port'] : null)) + 
      "]] &bull; [[admin/development/info:ip, " + 
      __escape(guard((context != null) ? context['ip'] : null)) + 
      "]]</h3>\n\t\t</div>\n\n\t\t<div class=\"panel-body\">\n\t\t\t<span>[[admin/development/info:nodes-responded, " + 
      __escape(guard((context != null) ? context['nodeCount'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['timeout'] : null)) + 
      "]]</span>\n\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>[[admin/development/info:host]]</td>\n\t\t\t\t\t\t<td class=\"text-center\">[[admin/development/info:primary]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:pid]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:nodejs]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:online]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:git]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:cpu-usage]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:process-memory]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:system-memory]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:load]]</td>\n\t\t\t\t\t\t<td>[[admin/development/info:uptime]]</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t" + 
      compiled.blocks['info'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"panel panel-default\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">[[admin/development/info:info]]</h3>\n\t\t</div>\n\n\t\t<div class=\"panel-body\">\n\t\t\t<div class=\"highlight\">\n\t\t\t\t<pre>" + 
      __escape(guard((context != null) ? context['infoJSON'] : null)) + 
      "</pre>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'info': function info(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['info'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<tr>\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['os'] != null) ? context['info'][key0]['os']['hostname'] : null)) + 
          ":" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null) ? context['info'][key0]['process']['port'] : null)) + 
          "</td>\n\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t" + 
          (guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['nodebb'] != null) ? context['info'][key0]['nodebb']['isPrimary'] : null) ?
            "<i class=\"fa fa-check\"></i>" :
            "<i class=\"fa fa-times\"></i>") + 
          " /\n\t\t\t\t\t\t" + 
          (guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['nodebb'] != null) ? context['info'][key0]['nodebb']['runJobs'] : null) ?
            "<i class=\"fa fa-check\"></i>" :
            "<i class=\"fa fa-times\"></i>") + 
          "\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null) ? context['info'][key0]['process']['pid'] : null)) + 
          "</td>\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null) ? context['info'][key0]['process']['version'] : null)) + 
          "</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<span title=\"[[admin/development/info:registered]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['stats'] != null) ? context['info'][key0]['stats']['onlineRegisteredCount'] : null)) + 
          "</span> /\n\t\t\t\t\t\t<span title=\"[[admin/development/info:guests]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['stats'] != null) ? context['info'][key0]['stats']['onlineGuestCount'] : null)) + 
          "</span> /\n\t\t\t\t\t\t<span title=\"[[admin/development/info:sockets]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['stats'] != null) ? context['info'][key0]['stats']['socketCount'] : null)) + 
          "</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['git'] != null) ? context['info'][key0]['git']['branch'] : null)) + 
          "@<a href=\"https://github.com/NodeBB/NodeBB/commit/" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['git'] != null) ? context['info'][key0]['git']['hash'] : null)) + 
          "\" target=\"_blank\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['git'] != null) ? context['info'][key0]['git']['hashShort'] : null)) + 
          "</a></td>\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null) ? context['info'][key0]['process']['cpuUsage'] : null)) + 
          "%</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<span title=\"[[admin/development/info:used-memory-process]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null && context['info'][key0]['process']['memoryUsage'] != null) ? context['info'][key0]['process']['memoryUsage']['humanReadable'] : null)) + 
          " gb</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<span title=\"[[admin/development/info:used-memory-os]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['os'] != null) ? context['info'][key0]['os']['usedmem'] : null)) + 
          " gb</span> /\n\t\t\t\t\t\t<span title=\"[[admin/development/info:total-memory-os]]\">" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['os'] != null) ? context['info'][key0]['os']['totalmem'] : null)) + 
          " gb</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['os'] != null) ? context['info'][key0]['os']['load'] : null)) + 
          "</td>\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['info'] != null && context['info'][key0] != null && context['info'][key0]['process'] != null) ? context['info'][key0]['process']['uptimeHumanReadable'] : null)) + 
          "</td>\n\t\t\t\t</tr>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
