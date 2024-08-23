import { Schema, model } from 'mongoose';

const camperSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: false,
    },
    location: {
      type: String,
      default: false,
    },
    adults: {
      type: Number,
      required: false,
    },
    children: {
      type: Number,
      required: false,
    },
    engine: {
      type: String,
      required: false,
    },
    transmission: {
      type: String,
      required: false,
    },
    form: {
      type: String,
      required: false,
    },
    length: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    tank: {
      type: String,
      required: false,
    },
    consumption: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    details: {
      type: Object,
      required: false,
    },
    gallery: {
      type: Array,
      required: false,
    },
    reviews: {
      type: Array,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Camper = model('camper', camperSchema);
