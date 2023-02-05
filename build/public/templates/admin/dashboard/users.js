
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
    return "<div class=\"dashboard\">\n\t<div class=\"col-xs-12\">\n\t\t<a class=\"btn btn-link\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/admin/dashboard\">\n\t\t\t<i class=\"fa fa-chevron-left\"></i>\n\t\t\t[[admin/dashboard:back-to-dashboard]]\n\t\t</a>\n\n\t\t<div class=\"panel panel-default\" id=\"analytics-panel\">\n\t<div class=\"panel-heading\">\n\t\t[[admin/dashboard:forum-traffic]]\n\t\t<div class=\"pull-right\">\n\t\t\t<a href=\"#\"><i class=\"fa fa-fw fa-expand\"></i></a>\n\t\t</div>\n\t\t<div class=\"pull-right\">\n\t\t\t<a target=\"_blank\" id=\"view-as-json\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/v3/admin/analytics/" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "?type=hourly\"><i class=\"fa fa-fw fa-terminal\"></i></a>\n\t\t</div>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<div class=\"graph-container\" id=\"analytics-traffic-container\">\n\t\t\t<canvas id=\"analytics-traffic\" width=\"100%\" height=\"400\"></canvas>\n\t\t</div>\n\t\t<hr/>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\n\t\t\t\t<div><strong id=\"pageViewsThirty\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['month'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['month'] : null)) :
        "0") + 
      "</strong></div>\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"30\">[[admin/dashboard:page-views-thirty]]</a></div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 text-center pageview-stats\">\n\t\t\t\t<div><strong id=\"pageViewsSeven\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['week'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['week'] : null)) :
        "0") + 
      "</strong></div>\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"days\" data-amount=\"7\">[[admin/dashboard:page-views-seven]]</a></div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 hidden-xs text-center pageview-stats\">\n\t\t\t\t<div><strong id=\"pageViewsPastDay\">" + 
      (guard((context != null && context['summary'] != null) ? context['summary']['day'] : null) ?
        __escape(guard((context != null && context['summary'] != null) ? context['summary']['day'] : null)) :
        "0") + 
      "</strong></div>\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"hours\" data-amount=\"24\">[[admin/dashboard:page-views-last-day]]</a></div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3 text-center pageview-stats\">\n\t\t\t\t<div><strong><i class=\"fa fa-clock-o\"></i></strong></div>\n\t\t\t\t<div><a href=\"#\" class=\"updatePageviewsGraph\" data-action=\"updateGraph\" data-units=\"custom\">[[admin/dashboard:page-views-custom]]</a></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\t\t<div class=\"table-responsive\">\n\t<table class=\"table table-striped\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th></th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.yesterday]]</th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.today]]</th>\n\t\t\t\t<th></th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.last-week]]</th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.this-week]]</th>\n\t\t\t\t<th></th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.last-month]]</th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.this-month]]</th>\n\t\t\t\t<th></th>\n\t\t\t\t<th class=\"text-right\">[[admin/dashboard:stats.all]]</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t" + 
      compiled.blocks['stats'](helpers, context, guard, iter, helper) + 
      "\n\t\t</tbody>\n\t</table>\n</div>\n\n\t\t<table class=\"table table-striped users-list\">\n\t\t\t<thead>\n\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.uid]]</th>\n\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.username]]</th>\n\t\t\t\t<th class=\"text-muted\">[[admin/manage/users:users.email]]</th>\n\t\t\t\t<th data-sort=\"joindate\">[[admin/manage/users:users.joined]]</th>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t" + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "" :
        "\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan=4\" class=\"text-center\"><em>[[admin/dashboard:details.no-logins]]</em></td>\n\t\t\t\t</tr>\n\t\t\t\t") + 
      "\n\t\t\t\t" + 
      compiled.blocks['users'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    'stats': function stats(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['stats'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<strong>\n\t\t\t\t\t\t" + 
          (guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null) ?
            "\n\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['href'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "</a>\n\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['name'] : null)) + 
              "\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t</strong>\n\t\t\t\t</td>\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['yesterday'] : null)) + 
          "</td>\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['today'] : null)) + 
          "</td>\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['dayIncrease'] : null)) + 
          "%</small></td>\n\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastweek'] : null)) + 
          "</td>\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thisweek'] : null)) + 
          "</td>\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['weekIncrease'] : null)) + 
          "%</small></td>\n\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['lastmonth'] : null)) + 
          "</td>\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['thismonth'] : null)) + 
          "</td>\n\t\t\t\t<td class=\"" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthTextClass'] : null)) + 
          "\"><small>" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['monthIncrease'] : null)) + 
          "%</small></td>\n\n\t\t\t\t<td class=\"text-right formatted-number\">" + 
          __escape(guard((context != null && context['stats'] != null && context['stats'][key0] != null) ? context['stats'][key0]['alltime'] : null)) + 
          "</td>\n\t\t\t</tr>\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<tr>\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "</td>\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</td>\n\t\t\t\t\t<td>" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['email'] : null)) + 
          "</td>\n\t\t\t\t\t<td><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
          "\"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
