import mongoose from 'mongoose';

const PersonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: [
    {
      label: {
        type: String,
      },
      value: {
        type: String,
      },
      primary: {
        type: Boolean,
      },
    },
  ],
  phone: [
    {
      label: {
        type: String,
      },
      value: {
        type: String,
      },
      primary: {
        type: Boolean,
      },
    },
  ],
});

PersonSchema.set('toJSON', {
  transform(doc, ret) {
    delete ret._id;
    delete ret.__v;
  },
});

export default PersonSchema;
