import mongoose from 'mongoose';

const TotalDayDealSchema = new mongoose.Schema({
  id_deals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Deal',
    },
  ],
  total_value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

TotalDayDealSchema.set('toJSON', {
  transform(doc, ret) {
    delete ret.__v;
  },
});

export default mongoose.model('Total_Deal', TotalDayDealSchema);
