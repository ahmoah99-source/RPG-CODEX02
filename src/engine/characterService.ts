// src/engine/characterService.ts
import db from '../database/db';
import { calculateAttackPower } from './statEngine';

// Function to get calculated stats for a character by ID
export const getCharacterStats = (characterId: number) => {
  // Fetch character data from the database
  const character = db.getFirstSync(
    'SELECT * FROM characters WHERE id = ?',
    [characterId]
  );

  if (!character) {
    console.error("Character not found");
    return null;
  }

  // Calculate stats using the statEngine
  const attackPower = calculateAttackPower(
    character.base_strength,
    character.base_body,
    character.base_agility,
    character.base_spirit,
    1.0, // This would eventually come from class_id join
    1.0  // This would eventually come from level_id join
  );

  return {
    ...character,
    attackPower
  };
};

