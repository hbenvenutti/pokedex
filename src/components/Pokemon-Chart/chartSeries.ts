interface Data {
  x: string;
  y: number;
}

interface Serie {
  name: string;
  data: Data[];
}

type Series = Serie[];

interface SeriesDto {
  baseHp: number;
  hpLv100: number;
  maxHp: number;

  baseAttack: number;
  attackLv100: number;
  maxAttack: number;

  baseSpecialAttack: number;
  specialAttackLv100: number;
  maxSpecialAttack: number;

  baseDefense: number;
  defenseLv100: number;
  maxDefense: number;

  baseSpecialDefense: number;
  specialDefenseLv100: number;
  maxSpecialDefense: number;

  baseSpeed: number;
  speedLv100: number;
  maxSpeed: number;
}

export const getSeries = (data: SeriesDto): Series => {
  const {
    hpLv100, 
    maxHp, 
    baseHp, 
    attackLv100, 
    baseAttack, 
    maxAttack,
    defenseLv100,
    baseDefense,
    maxDefense, 
    baseSpecialAttack,
    maxSpecialAttack,
    specialAttackLv100,
    maxSpecialDefense,
    specialDefenseLv100,
    baseSpecialDefense,
    baseSpeed, 
    maxSpeed,
    speedLv100
  } = data;

  return [
    {
      name: 'Base',
      data: [
          {x: 'hp', y: baseHp}, 
          {x: 'attack', y: baseAttack}, 
          {x: 'special attack', y: baseSpecialAttack}, 
          {x: 'defense', y: baseDefense}, 
          {x: 'special defense', y:baseSpecialDefense}, 
          {x: 'speed', y: baseSpeed}
        ],
    },
    {
      name: 'At Level 100',
      data: [
        {x: 'hp', y: hpLv100}, 
        {x: 'attack', y: attackLv100}, 
        {x: 'special attack', y: specialAttackLv100}, 
        {x: 'defense', y: defenseLv100}, 
        {x: 'special defense', y: specialDefenseLv100}, 
        {x: 'speed', y: speedLv100}
      ]
    },
    {
      name: 'Max',
      data: [
        {x: 'hp', y: maxHp}, 
        {x: 'attack', y: maxAttack}, 
        {x: 'special attack', y: maxSpecialAttack}, 
        {x: 'defense', y: maxDefense}, 
        {x: 'special defense', y: maxSpecialDefense}, 
        {x: 'speed', y: maxSpeed}
      ]
    }
  ];
} 
