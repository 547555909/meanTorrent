'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Sub Attach Schema
 */
var AttachSchema = new Schema({
  filename: {
    type: String,
    default: '',
    trim: true
  },
  downCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Sub Score Schema
 */
var ScoreSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  score: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


/**
 * Topic Schema
 */
var TopicSchema = new Schema({
  forum: {
    type: Schema.Types.ObjectId,
    ref: 'Forum'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    default: '',
    trim: true
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  readOnly: {
    type: Boolean,
    default: false
  },

  viewCount: {
    type: Number,
    default: 0
  },
  replyCount: {
    type: Number,
    default: 0
  },
  _replies: [this],
  _attach: [AttachSchema],
  _scoreList: [ScoreSchema],

  lastUser: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  isTop: {
    type: Number,
    default: 0
  },
  lastReplyAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


mongoose.model('Topic', TopicSchema);
mongoose.model('Attach', AttachSchema);
mongoose.model('Score', ScoreSchema);