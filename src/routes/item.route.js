import { Router } from "express";
const router = Router();

import { readItem, createItem, updateItemHash } from '../controllers/item.controller';

router.get('/:hash', async (req, res) => {
  try {
    const {
      hash
    } = req.params;

    const item = await readItem(hash);
    res.json({
      item,
      status: 200,
      message: 'Item read successfully!'
    });
  } catch (err) {
    res.json({
      item: null,
      status: err.code || err.statusCode || 500,
      message: err.message || 'Something went wrong while reading item from DB!'
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      name,
      rating,
      price,
      hash
    } = req.body;

    const item = await createItem({
      name,
      rating,
      price,
      hash
    });

    res.json({
      item,
      status: 200,
      message: 'Item created successfully!'
    })
  } catch (err) {
    res.json({
      item: null,
      status: err.code || err.statusCode || 500,
      message: err.message || 'Something went wrong while creating new item!'
    });
  }
});

router.put('/', async (req, res) => {
  try {
    const {
      hash
    } = req.body;

    const item = await updateItemHash(hash);
    res.json({
      item,
      status: 200,
      message: 'Item updated successfully!'
    });
  } catch (err) {
    res.json({
      item: null,
      status: err.code || err.statusCode || 500,
      message: err.message || 'Something went wrong while updating item hash!'
    });
  }
});

export default router;