import React, { useState } from 'react'
import { EditPanel } from './EditPanel/EditPanel';
import TurnDown from 'turndown';
import { Comments } from '../../db/comments';


export const Editor = () => {
  const [markdownText, setMarkdownText] = useState('');
  const handleText = (e) => {
    const turnDown = new TurnDown();
    const markdown = turnDown.turndown(e.currentTarget);
    setMarkdownText(markdown);
  };

  const sendComment = () => {
    Meteor.call('comment.insert', markdownText)
  };

  return (
    <>
      <EditPanel/>
      <div contentEditable={true}
           id='editor'
           onInput={e => handleText(e)}
      />
      <button className='sendComment' onClick={sendComment}>Send comment</button>
    </>
  )
};
