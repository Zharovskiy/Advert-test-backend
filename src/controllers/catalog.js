import { getCatalog } from '../services/catalog.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getCatalogController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const filter = parseFilterParams(req.query);

  const catalog = await getCatalog({
    page,
    perPage,
    filter,
  });
  res.json({
    status: 200,
    message: 'Successfully found campers!',
    data: catalog,
  });
};
