import React from 'react';
import { BoldIcon } from './Icons/Bold'
import { ItalicIcon } from './Icons/Italic'
import { Subtitle } from './Icons/Subtitle';
import { Link } from './Icons/Link';
import { List } from './Icons/List';

export const EditPanel = () => {
  const format = command => {
    document.execCommand(command);
  };
  return (
    <div className='editPanel'>
      <button onClick={() => format('bold')}>
        <BoldIcon/>
      </button>
      <button onClick={() => format('italic')}>
        <ItalicIcon/>
      </button>
      <button onClick={() => format('h3')}>
        <Subtitle/>
      </button>
      <button onClick={() => format('list')}>
        <List/>
      </button>
      <button onClick={() => format('link')}>
        <Link/>
      </button>
    </div>
  )
};
