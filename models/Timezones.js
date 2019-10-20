const mongoose = require("mongoose");

const timezoneSchema = new mongoose.Schema(
  {
    timezone: {
      type: Number,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Timezone", timezoneSchema);
