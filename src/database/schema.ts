export interface Character {
  id: string;
  name: string;
  category: string;
  level: string;
  rank: string;
  stats: {
    strength: number;
    agility: number;
    body: number;
    spirit: number;
  };
  baseStats: {
    strength: number;
    agility: number;
    body: number;
    spirit: number;
  };
  image: string;
  race: string;
  world: string;
  weaponId: string;
}

export interface Talent {
  name: string;
  rank: string;
  strengthBonus: number;
  agilityBonus: number;
  bodyBonus: number;
  spiritBonus: number;
  powerMultiplier: number;
}
