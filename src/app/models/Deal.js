import mongoose from 'mongoose';
import Person from './utils/Person';

const DealSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    index: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  org_name: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
  person: {
    type: Person,
    required: true,
  },
  stage_pipeline: {
    type: Number,
    required: true,
  },
  expected_close_date: {
    type: Date,
  },
  owner_name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

DealSchema.set('toJSON', {
  transform(doc, ret) {
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.model('Deal', DealSchema);
