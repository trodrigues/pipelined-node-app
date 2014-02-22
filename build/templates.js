(function() {
  if (window.HAML == null) {
    window.HAML = {};
  }

  window.HAML['public/javascripts/index'] = function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<p class='active'>lol</p>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(context);
  };

}).call(this);
