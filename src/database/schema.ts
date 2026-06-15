// src/database/schema.ts

export interface Character {
  id: string;
  name: string;
  category: string;
  level: string;
  rank: string;
  image: string;
  // الإحصائيات الأساسية (التي لا تتغير)
  baseStats: {
    strength: number;
    agility: number;
    body: number;
    spirit: number;
  };
  // الإحصائيات النهائية (التي يتم حسابها بـ الحيسون)
  finalStats: {
    strength: number;
    agility: number;
    body: number;
    spirit: number;
  };
  race: string;
  world: string;
  weaponId: string;
}

export interface Talent {
  id: string;
  name: string;
  rank: string;
  strengthBonus: number;
  agilityBonus: number;
  bodyBonus: number;
  spiritBonus: number;
  powerMultiplier: number;
}
