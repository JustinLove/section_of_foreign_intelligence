# Section of Foreign Intelligence for galactic war

Adds a report on the number and strength of enemy commanders to the Galactic War system detail. This allows you to avoid hitting the two-commander wall without constantly counting graph edges. This would qualify as a cheat, but I don't find counting-steps to be fun or meaningful.

## Evaluation

Better ranges or adjectives welcome.

    if (rate < 0.5) { return 'helpless' }
    else if (rate < 0.75) { return 'incompetent' }
    else if (rate < 0.95) { return 'weak' }
    else if (rate < 1.05) { return 'competent' }
    else if (rate < 1.25) { return 'strong' }
    else if (rate < 1.5) { return 'dangerous' }
    else if (rate < 1.75) { return 'deadly' }
    else { return 'unstoppable' }
