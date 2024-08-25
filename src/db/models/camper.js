import { Schema, model } from 'mongoose';

const camperSchema = new Schema(
  {
    _id: {
      // type: Schema.Types.ObjectId,
      type: String,
      required: true,
    },
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
      default: 0,
    },
    location: {
      type: String,
      required: true,
    },
    adults: {
      type: Number,
      required: true,
    },
    children: {
      type: Number,
      required: false,
      default: 0,
    },
    engine: {
      type: String,
      required: true,
      default: 'petrol',
      enum: ['petrol', 'diesel'],
    },
    transmission: {
      type: String,
      required: true,
      default: 'mechanics',
      enum: ['mechanics', 'automatic'],
    },
    form: {
      type: String,
      required: true,
      default: '',
      enum: ['alcove', 'fullyIntegrated', 'panelTruck'],
    },
    length: {
      type: String,
      required: false,
      default: '',
    },
    width: {
      type: String,
      required: false,
      default: '',
    },
    height: {
      type: String,
      required: false,
      default: '',
    },
    tank: {
      type: String,
      required: false,
      default: '',
    },
    consumption: {
      type: String,
      required: false,
      default: '',
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    details: {
      airConditioner: {
        type: Number,
        default: 0,
      },
      bathroom: {
        type: Number,
        default: 0,
      },
      kitchen: {
        type: Number,
        default: 0,
      },
      beds: {
        type: Number,
        default: 0,
      },
      TV: {
        type: Number,
        default: 0,
      },
      CD: {
        type: Number,
        default: 0,
      },
      radio: {
        type: Number,
        default: 0,
      },
      shower: {
        type: Number,
        default: 0,
      },
      toilet: {
        type: Number,
        default: 0,
      },
      freezer: {
        type: Number,
        default: 0,
      },
      hob: {
        type: Number,
        default: 0,
      },
      microwave: {
        type: Number,
        default: 0,
      },
      gas: {
        type: String,
        default: '',
      },
      water: {
        type: String,
        default: '',
      },
    },

    gallery: {
      type: [
        {
          type: String,
          default: '',
        },
      ],
      required: false,
    },

    reviews: {
      type: [
        {
          reviewer_name: {
            type: String,
            required: true,
          },
          reviewer_rating: {
            type: Number,
            required: true,
          },
          comment: {
            type: String,
            required: false,
          },
        },
      ],
      required: false,
      default: [],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const CamperCollection = model('campers', camperSchema);
