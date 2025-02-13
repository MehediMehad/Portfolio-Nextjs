import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { blogServices } from './blog.service';

const addBlogData = catchAsync(async (req, res) => {
  const result = await blogServices.addBlogDataIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog Data Added Successfully',
    data: result,
  });
});

export const blogController = {
  addBlogData,
};
