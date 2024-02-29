const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const queueSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    queueNumber: {
      type: String,
      required: true,
    },
    qrCode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Queue = mongoose.model('queues', queueSchema);

module.exports = Queue;
