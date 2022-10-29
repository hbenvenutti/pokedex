import React from 'react';
import Chart from 'react-apexcharts';

import { calculateHp, calculateMaxHp, calculateMaxStat, calculateStat } from '../../utils/calculateStats';

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

  

  const options = {
    chart: {
      stacked: false,
      toolbar: {
        show: false
      }
    },
    responsive: [
      {
        breakpoint: 800,
        options: {
          chart: {
            width: 600,
            height: 375
          }
        }
      },
      {
        breakpoint: 605,
        options: {
          chart: {
            width: 450,
          }
        }
      },
      {
        breakpoint: 460,
        options: {
          chart: {
            width: 350,
          }
        }
      },
    ],
    plotOptions: {
      bar: {
        borderRadius: 8
      }
    },
    yaxis: {
      max: 450
    },
    xaxis: {
      categories: ['HP', 'Attack', 'Special Attack', 'Defense', 'Special Defense', 'Speed']
    }
  }

  const series = [
    {
      name: 'Base',
      data: [
          {x: 'hp', y: props.hp}, 
          {x: 'attack', y: props.attack}, 
          {x: 'special attack', y: props.specialAttack}, 
          {x: 'defense', y: props.defense}, 
          {x: 'special defense', y: props.specialDefense}, 
          {x: 'speed', y: props.speed}
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

  return (
    <>
      <Chart 
        type='bar' 
        options={options} 
        series={series}
        width={800}
        height={500}
      />
    </>
  )
}
