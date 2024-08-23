import { Camper } from '../db/models/camper.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getCatalog = async ({ page = 1, perPage = 10, filter = {} }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const camperQuery = Camper.find();

  if (filter.isFavourite) {
    camperQuery.where('isFavourite').in(filter.isFavourite);
  }
  if (filter.type) {
    camperQuery.where('contactType').in(filter.type);
  }

  const camperCount = await Camper.find().merge(camperQuery).countDocuments();

  const camper = await camperQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(camperCount, perPage, page);

  return {
    data: camper,
    ...paginationData,
  };
};
