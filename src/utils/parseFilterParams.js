const parseLocation = (location) => {
  const isString = typeof location === 'string';
  if (!isString) return undefined;
  return location;
};

const parseDetails = (detail) => {
  const isString = typeof detail === 'string';
  if (!isString) return undefined;

  const validIsDetail = ['true', 'false'];
  if (!validIsDetail.includes(detail)) return undefined;

  return detail;
};

const parseFormCamper = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return undefined;

  const validFormCamper = ['alcove', 'fullyIntegrated', 'panelTruck'];
  if (!validFormCamper.includes(type)) return undefined;

  return type;
};

export const parseFilterParams = (query) => {
  const {
    location,
    airConditioner,
    transmission,
    kitchen,
    TV,
    shower,
    toilet,
    formCamper,
  } = query;

  const parsedLocation = parseLocation(location);
  const parsedAirConditioner = parseDetails(airConditioner);
  const parsedTransmission = parseDetails(transmission);
  const parsedKitchen = parseDetails(kitchen);
  const parsedTV = parseDetails(TV);
  const parsedShower = parseDetails(shower);
  const parsedToilet = parseDetails(toilet);
  const parsedForm = parseFormCamper(formCamper);

  return {
    location: parsedLocation,
    airConditioner: parsedAirConditioner,
    transmission: parsedTransmission,
    kitchen: parsedKitchen,
    TV: parsedTV,
    shower: parsedShower,
    toilet: parsedToilet,
    form: parsedForm,
  };
};
