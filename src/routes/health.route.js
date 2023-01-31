import { Router } from "express";
import { healthCheckSync, healthCheckAsync } from '../controllers/health.controller.js';

const router = Router();

router.get('/', (req, res) => {
  const result = healthCheckSync();
  res.json({
    health: result,
    status: 200
  });
});

router.get('/sync', (req, res) => {
  const result = healthCheckSync();
  res.json({
    health: result,
    status: 200
  });
});

router.get('/async', async (req, res) => {
  const result = await healthCheckAsync();
  res.json({
    health: result,
    status: 200
  });
});

export default router;