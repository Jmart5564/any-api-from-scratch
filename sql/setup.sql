-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists mushrooms;

CREATE table mushrooms (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    common_name VARCHAR NOT NULL,
    latin_name VARCHAR NOT NULL,
    spore_color VARCHAR NOT NULL,
    ecology VARCHAR NOT NULL,
    poisonous BOOLEAN NOT NULL
);

INSERT INTO mushrooms (common_name, latin_name, spore_color, ecology, poisonous) VALUES

(
    'King Bolete',
    'Boletus edulis',
    'olive-brown',
    'mycorrhizal',
    false
),

(
    'False Morel',
    'Gyromitra esculenta',
    'pale yellow',
    'saprophtic',
    true
),

(
    'Violet Cort',
    'Cortinarius violaceus',
    'rusty brown',
    'mycorrhizal',
    false
),

(
    'Fir Cone Mushroom',
    'Strobilurus trullisatus',
    'white',
    'saprophytic',
    false
),

(
    'Zombie Ant Fungus',
    'Ophiocordyceps unilateralis',
    'brown',
    'parasitic',
    false
),

(
    'Destroying Angel',
    'Amanita bisporigera',
    'white',
    'mycorrhizal',
    true
);