const getPokemonNameList = (): string[] => {
  return [...kanto, ...johto, ...hoenn, ...sinnoh, ...unova, ...kalos ,...alola, ...galar];
}

const kanto: string[] = [
  'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard',
  'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 
  'weedle', 'kakuna', 'beedrill','pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate',
  'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash',
  'nidoran♀', 'nidorina', 'nidoqueen', 'nidoran♂', 'nidorino', 'nidoking', 'clefairy', 'clafable',
  'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume',
  'paras', 'parasect', 'venonat', 'venomoth', 'digglet', 'dugtrio', 'meowth', 'persian',
  'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath',
  'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel',
  'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 
  'magnemite', 'magneton', `farfetch'd`, 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster',
  'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb', 'electrode',
  'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan', 'lickitung', 'koffing', 'weezing',
  'rhyhorn', 'rhydon', 'chansey', 'tangela', 'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking',
  'staryu', 'starmie', 'mr. mime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros',
  'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon', 'flareon', 'porygon',
  'omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl', 'snorlax', 'articuno', 'zapdos', 'moltres',
  'dratini', 'dragonair', 'dragonite', 'mewtwo', 'mew'
];

const johto: string[] = []
const hoenn: string[] = []
const sinnoh: string[] = []
const unova: string[] = []

const kalos: string[] = [
  'chespin', 'quilladin', 'chesnaught', 'fennekin', 'braixen', 'delphox', 'froakie', 'frogadier', 'greninja',
  'bunnelby', 'diggerby', 'fletchling', 'fletchinder', 'talonflame', 'scatterbug', 'spewpa', 'vivillon',
  'litleo', 'pyroar', 'flabébé', 'floette', 'florges', 'skiddo', 'gogoat', 'pancham', 'pangoro',
  'furfrou', 'espurr', 'meowstic', 'honedge', 'doublade', 'aegislash', 'spritzee', 'aromatisse', 
  'swirlix', 'slurpuff', 'inkay', 'malamar', 'binacle', 'barbaracle', 'skrelp', 'dragalge', 
  'clauncher', 'clawitzer', 'helioptile', 'heliolisk', 'tyrunt', 'tyruntrum','amaura', 'aurorus',
  'sylveon', 'hawlucha', 'dedenne', 'carbink', 'goomy', 'sliggoo', 'goodra', 'klefki',
  'phantump', 'trevenant', 'pumpkaboo', 'gourgeist', 'bergmite', 'avalugg', 'noibat', 'noivern',
  'xerneas', 'yveltal', 'zygarde', 'diancie', 'hoopa', 'volcanion'
];

const alola: string[] = []
const galar: string[] = []

export const pokemonNameList = getPokemonNameList();
