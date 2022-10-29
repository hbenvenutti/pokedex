// ? baseHp * 2 + 110 + iv + ev(already calculated from 255 to stats | 63) ? //

export const calculateHp = (baseHp: number): number => {
  return (baseHp * 2) + 110;
}

export const calculateMaxHp = (baseHp: number): number => {
  return (baseHp * 2) + 110 + 31 + 63
}

// ---------------------------------------------------------------------------------------------- //

// ? (baseHp * 2 + 110 + iv + ev) * nature (10%) ? //

export const calculateStat = (baseStat: number): number => {
  return (baseStat * 2) + 5;
}

export const calculateMaxStat = (baseStat: number): number => {
  return (baseStat * 2 + 5 + 31 + 63) * 1.1 | 0;
}
