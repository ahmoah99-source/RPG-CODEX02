export const Calculator = {
  // تنسيق الأرقام (K, M, B) كما طلبت في الصور
  formatNumber: (num: number): string => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + " B";
    if (num >= 1000000) return (num / 1000000).toFixed(1) + " M";
    if (num >= 1000) return (num / 1000).toFixed(1) + " K";
    return num.toString();
  },

  // معادلة الصحة ❤️
  calculateHealth: (levelMult: number, body: number) => {
    return levelMult * (body * 50);
  },

  // معادلة الطاقة/المانا ⚡
  calculateMana: (levelMult: number, spirit: number) => {
    return levelMult * (spirit * 20);
  },

  // معادلة قوة الهجوم ⚔️
  calculateAttack: (levelMult: number, strength: number, body: number, agility: number, spirit: number, weaponMult: number) => {
    return levelMult * ((strength + body) * agility * spirit * 5) * weaponMult;
  },

  // معادلة الدفاع 🛡️
  calculateDefense: (levelMult: number, body: number, agility: number) => {
    return levelMult * ((body * 2) + agility);
  }
};

