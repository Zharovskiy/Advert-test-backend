import { CamperCollection } from '../db/models/camper.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getCatalog = async ({ page = 1, perPage = 10, filter = {} }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const camperQuery = CamperCollection.find();

  if (filter.location) {
    camperQuery.where('location').in(filter.location);
  }
  //   if (filter.airConditioner) {
  //     camperQuery.where('airConditioner').in(filter.airConditioner);
  //   }
  if (filter.form) {
    camperQuery.where('form').in(filter.form);
  }

  const camperCount = await CamperCollection.find()
    .merge(camperQuery)
    .countDocuments();

  const camper = await camperQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(camperCount, perPage, page);

  return {
    pagination: paginationData,
    data: camper,
  };
};
