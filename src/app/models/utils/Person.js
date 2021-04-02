import mongoose from 'mongoose';

const PersonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    get(data) {
      try {
        return JSON.parse(data);
      } catch (err) {
        return data;
      }
    },
    set(data) {
      return JSON.stringify(data);
    },
  },
  phone: {
    type: String,
    get(data) {
      try {
        return JSON.parse(data);
      } catch (err) {
        return data;
      }
    },
    set(data) {
      return JSON.stringify(data);
    },
  },
});

export default PersonSchema;
