import { Router } from 'express';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Route to get resume data
router.get('/resume', (req, res) => {
  try {
    const resumeData = JSON.parse(readFileSync(join(__dirname, '../data/resume.json'), 'utf-8'));
    res.json(resumeData);
  } catch (error) {
    console.error('Error reading resume data:', error);
    res.status(500).json({ error: 'Failed to retrieve resume data' });
  }
});

export default router;