const isValidString = (str) => typeof str === 'string' && str.trim() !== '';

const parseLocation = (location) => {
  return isValidString(location) ? location : undefined;
};

const parseBooleanString = (detail) => {
  if (!isValidString(detail)) return undefined;
  return ['true', 'false'].includes(detail) ? detail === 'true' : undefined;
};

const parseFormCamper = (type) => {
  const validFormCamper = ['alcove', 'fullyIntegrated', 'panelTruck'];
  return isValidString(type) && validFormCamper.includes(type)
    ? type
    : undefined;
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

  return {
    location: parseLocation(location),
    airConditioner: parseBooleanString(airConditioner),
    transmission: parseBooleanString(transmission),
    kitchen: parseBooleanString(kitchen),
    TV: parseBooleanString(TV),
    shower: parseBooleanString(shower),
    toilet: parseBooleanString(toilet),
    form: parseFormCamper(formCamper),
  };
};
