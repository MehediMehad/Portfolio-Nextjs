import express from 'express';
import { blogController } from './blog.controller';

const router = express.Router();

router.post('/add-blog', blogController.addBlogData);

export const blogRoutes = router;
