const { Router } = require('express');
const Mushroom = require('../models/Mushroom');
const router = Router();

router
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    const mushroom = await Mushroom.getById(req.params.id);
    console.log(mushroom);
    res.json(mushroom);
  })
  .get('/', async (req, res) => {
    const mushrooms = await Mushroom.getAll();
    const ids = mushrooms.map((mushroom) => ({ id: mushroom.id, common_name: mushroom.common_name }));
    res.json(ids);
  });

module.exports = router;
