const pool = require('../utils/pool');

module.exports = class Mushroom {
  id;
  common_name;
  latin_name;
  spore_color;
  ecology;
  poisonous;

  constructor(row) {
    this.id = row.id;
    this.common_name = row.common_name;
    this.latin_name = row.latin_name;
    this.spore_color = row.spore_color;
    this.ecology = row.ecology;
    this.poisonous = row.poisonous;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM mushrooms;');
    return rows.map((row) => new Mushroom(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM mushrooms WHERE id=$1;', [id]);
    if (!rows[0]) return null;
    return new Mushroom(rows[0]);
  }
};
