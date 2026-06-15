// src/engine/statEngine.ts

export const calculateAttackPower = (
  strength: number,
  body: number,
  agility: number,
  spirit: number,
  classMultiplier: number,
  levelMultiplier: number
): number => {
  // Base attack power calculation formula
  const baseAttack = (strength + body) * agility * spirit * 5;
  
  // Apply multipliers for final output
  return baseAttack * classMultiplier * levelMultiplier;
};

export const calculateMaxHealth = (body: number, level: number): number => {
  // Max health calculation formula based on body and level
  return (body * 10) + (level * 50);
};
