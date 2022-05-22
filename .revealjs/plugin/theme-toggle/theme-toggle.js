/**
 * Toggles the current color theme when "t" is pressed
 */
var RevealToggleTheme = (function() {

  function toggleTheme() {
    const currentTheme = document.getElementById("theme");
    if (currentTheme.href.includes("dk-light")) {
      currentTheme.setAttribute("href", currentTheme.href.replace("dk-light", "dk-dark"));
    } else {
      currentTheme.setAttribute("href", currentTheme.href.replace("dk-dark", "dk-light"));
    }
  }

  return {
    init: function() {

      if (!/receiver/i.test(window.location.search)) {

        // If the there's a 'theme' query set, use it directly
        if (window.location.search.match(/(\?|\&)theme/gi) !== null) {
          // TODO: implement
        }

        // Open the notes when the 's' key is hit
        Reveal.addKeyBinding({
          keyCode: 84,
          key: "T",
          description: "Toggle theme"
        }, function() {
          toggleTheme();
        });

      }

    }
  };

})();

Reveal.registerPlugin("toggle-theme", RevealToggleTheme);
