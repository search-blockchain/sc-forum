
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
    return "\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"alert-window\" component=\"toaster/tray\"></div>\n\n\t<div id=\"footer\" class=\"container\" style=\"padding-top: 50px; display:none;\">\n\t\t<footer class=\"footer\">Copyright &copy; 2015 <a target=\"_blank\" href=\"https://nodebb.org\">NodeBB</a> by <a target=\"_blank\" href=\"https://github.com/psychobunny\">psychobunny</a>, <a href=\"https://github.com/julianlam\" target=\"_blank\">julianlam</a>, <a href=\"https://github.com/barisusakli\" target=\"_blank\">barisusakli</a> from <a target=\"_blank\" href=\"http://www.designcreateplay.com\">designcreateplay</a></footer>\n\t</div>\n\t<script>\n\t\tif (document.readyState === 'loading') {\n\t\t\tdocument.addEventListener('DOMContentLoaded', prepareFooter);\n\t\t} else {\n\t\t\tprepareFooter();\n\t\t}\n\n\t\tfunction prepareFooter() {\n\t\t\t$(document).ready(function () {\n\t\t\t\tapp.coldLoad();\n\t\t\t});\n\t\t}\n\t</script>\n</body>\n</html>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
