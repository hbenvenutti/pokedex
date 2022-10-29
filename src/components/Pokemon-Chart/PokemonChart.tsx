import React from 'react';
import Chart from 'react-apexcharts';

import { chartOptions } from './chartOptions';
import { calculateHp, calculateMaxHp, calculateMaxStat, calculateStat } from '../../utils/calculateStats';
import { getSeries } from './chartSeries';

interface PokemonChartProps {
  hp: number;
  attack: number;
  specialAttack: number;
  defense: number;
  specialDefense: number;
  speed: number;
}

export const PokemonChart = (props: PokemonChartProps) => {
  const maxHp = calculateMaxHp(props.hp);
  const hpLv100 = calculateHp(props.hp);

  const maxAttack = calculateMaxStat(props.attack);
  const attackLv100 = calculateStat(props.attack);

  const maxSpecialAttack = calculateMaxStat(props.specialAttack);
  const specialAttackLv100 = calculateStat(props.specialAttack);

  const maxDefense = calculateMaxStat(props.defense);
  const defenseLv100 = calculateStat(props.defense);


  const maxSpecialDefense = calculateMaxStat(props.specialDefense);
  const specialDefenseLv100 = calculateStat(props.specialDefense);

  const maxSpeed = calculateMaxStat(props.speed);
  const speedLv100 = calculateStat(props.speed);

  

  const series = getSeries({
      baseHp: props.hp,
      baseAttack: props.attack,
      baseDefense: props.defense,
      baseSpecialAttack: props.specialAttack,
      baseSpecialDefense: props.specialDefense,
      baseSpeed: props.speed,
      hpLv100,
      attackLv100,
      defenseLv100,
      specialAttackLv100,
      specialDefenseLv100,
      speedLv100,
      maxHp,
      maxAttack,
      maxDefense,
      maxSpecialAttack,
      maxSpecialDefense,
      maxSpeed
    }
  )

  return (
    <>
      <Chart 
        type='bar' 
        options={chartOptions} 
        series={series}
        width={800}
        height={500}
      />
    </>
  )
}
