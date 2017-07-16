user -
  # will have username
  # will have password
  # will have many instances of game (state)

game -
  # will have time played
  # will have a state

state -
  # will have saved characters
  # will have saved inventory
  # will have saved storyline state

characters -
  # will have level
  # will have health
  # will have max health
  # will have mana
  # will have max mana
  # will have strength
  # will have max strength
  # will have vitality
  # will have max vitality
  # will have dexterity
  # will have max dexterity
  # will have intelligence
  # will have max intelligence
  # will have mind
  # will have max mind
  # will have speed
  # will have max speed
  # will have a name
  # will have a klass name
  # will have a klass type (melee / ranged / tank / healer)
  # will have a klass description
  # will have a character bio
  # will have many abilities
  # will have many magics

inventory -
  # will have many items
  # will belong to a game.state

item -
  # will have a name
  # will have a type
  # will have an effect
  # will have a potency
