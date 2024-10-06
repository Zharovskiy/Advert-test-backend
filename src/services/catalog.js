import { CamperCollection } from '../db/models/camper.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getCatalog = async ({ page = 1, perPage = 10, filter = {} }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const queryFilters = {};

  if (filter.location) {
    queryFilters.location = { $in: filter.location };
  }

  if (filter.airConditioner) {
    queryFilters['details.airConditioner'] = {
      $ne: 0,
    };
  }

  if (filter.transmission) {
    queryFilters['details.transmission'] = {
      $ne: 0,
    };
  }

  if (filter.kitchen) {
    queryFilters['details.kitchen'] = {
      $ne: 0,
    };
  }

  if (filter.TV) {
    queryFilters['details.TV'] = {
      $ne: 0,
    };
  }

  if (filter.shower) {
    queryFilters['details.shower'] = {
      $ne: 0,
    };
  }

  if (filter.shower) {
    queryFilters['details.toilet'] = {
      $ne: 0,
    };
  }

  if (filter.form) {
    queryFilters.form = { $in: filter.form };
  }

  const camperQuery = CamperCollection.find(queryFilters);

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
