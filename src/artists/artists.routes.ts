import { Request, Response, Router } from 'express';
import { readArtists } from './artists.controller';

const router = Router();
router
    .route('/artists')
    .get(readArtists);

export default router;