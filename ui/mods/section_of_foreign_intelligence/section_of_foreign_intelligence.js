(function() {
  var evaluation = function(rate) {
    if (rate < 0.5) { return 'helpless' }
    else if (rate < 0.75) { return 'incompetent' }
    else if (rate < 0.95) { return 'weak' }
    else if (rate < 1.05) { return 'competent' }
    else if (rate < 1.25) { return 'strong' }
    else if (rate < 1.5) { return 'dangerous' }
    else if (rate < 1.75) { return 'deadly' }
    else { return 'unstoppable' }
  }

  var intelligence = function(commander) {
    return {
      name: commander.name,
      evaluation: evaluation(commander.econ_rate),
    }
  }

  model.foreign_intelligence = ko.computed(function() {
    var primary = model.selection.system().star.ai()
    var commanders = []
    if (primary) {
      commanders.push(intelligence(primary))
      if (primary.minions) {
        commanders = commanders.concat(primary.minions.map(intelligence))
      }
    }
    return commanders
  })

  url = 'coui://ui/mods/section_of_foreign_intelligence/section_of_foreign_intelligence.html'
  $.get(url, function(html) {
    console.log("Loaded html " + url);
    var $fi = $(html)
    $('#system-detail').append($fi)
    ko.applyBindings(model, $fi[0])
  })
})()
