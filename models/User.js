const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create User Model
const userSchema = new Schema(
  {
    username: {
      type: String,
      Unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      Unique: true,
      required: true,
      validate: {
        validator: function (value) {
          return  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
      },
    },
    thoughts: [thoughtSchema],
    friends: [User],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
