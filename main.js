(function() {
  var lilyInput = ace.edit("editor");
  lilyInput.getSession().setMode("ace/mode/lilypond");
  lilyInput.getSession().setTabSize(2);
  lilyInput.getSession().setUseSoftTabs(true);
  lilyInput.setHighlightActiveLine(true);
  lilyInput.setTheme("ace/theme/tomorrow_night_eighties");
  // Alternative themes:
  // lilyInput.setTheme("ace/theme/ambiance");
  // lilyInput.setTheme("ace/theme/chrome");
  // lilyInput.setTheme("ace/theme/clouds_midnight");
  // lilyInput.setTheme("ace/theme/idle_fingers");
  // lilyInput.setTheme("ace/theme/kuroir");
  // lilyInput.setTheme("ace/theme/pastel_on_dark");
  // lilyInput.setTheme("ace/theme/solarized_dark");
  // lilyInput.setTheme("ace/theme/solarized_light");
  // lilyInput.setTheme("ace/theme/tomorrow_night_eighties");
  // lilyInput.setTheme("ace/theme/tomorrow_night");
  lilyInput.setShowPrintMargin(false);
  lilyInput.getSession().setUseWrapMode(true);
  // lilyInput.setReadOnly(true);
  // console.log(lilyInput.getValue());
})();