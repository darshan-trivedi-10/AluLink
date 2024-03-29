import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  headline: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  profile: {
    type: String,
  },
  colleges: [
    {
      college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
      },
      startYear: {
        type: Number,
        require: true,
      },
      graduationYear: {
        type: Number,
        require: true,
      },
    },
  ],
});

const user = mongoose.model("user", userSchema);

export default user;
