import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Comments as CommentsFromDB } from '../db/comments';
import Markdown from 'markdown-to-jsx'

export const Comments = () => {
  const comments = useTracker(() => CommentsFromDB.find({}).fetch());
  return comments.map( val => (
    <div key={val._id}>
      <Markdown>{val.comment}</Markdown>
      <p>From server: {val.comment}</p>
    </div>
  ))
};
