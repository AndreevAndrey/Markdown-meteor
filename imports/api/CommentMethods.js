import { Comments } from '../db/comments';
import { check } from 'meteor/check';

Meteor.methods({
  'comment.insert'(comment) {
    check(comment, String);
    Comments.insert({
      comment,
      createdAt: new Date()
    })
  }
});

