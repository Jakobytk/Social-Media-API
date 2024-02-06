const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction')

// Schema to create thought
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      varchar: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

module.exports = thought;
