import React, { useState, useEffect } from 'react';
import { BoldIcon } from './Icons/Bold'
import { ItalicIcon } from './Icons/Italic'

export const EditPanel = () => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);

  const format = command => {
    document.execCommand(command);
    switch (command) {
      case 'bold':
        setBold(prev => !prev);
        break;
      case 'italic':
        setItalic(prev => !prev);
        break;
      default:
        break;
    }
  };

  const navUpdate = () => {
    const range = window.getSelection().getRangeAt(0);
    const parentList = [];

    let tempBold = false;
    let tempItalic = false;

    function getNodeParents(node) {
      parentList.push(node);
      if (node.parentElement) {
        getNodeParents(node.parentElement);
      }
    }

    getNodeParents(range.startContainer.parentElement);

    parentList.forEach((element) => {
      if (element.tagName === 'B' || element.tagName === 'STRONG') tempBold = true;
      if (element.tagName === 'I') tempItalic = true;
    });

    setBold(tempBold);
    setItalic(tempItalic);
  };

  useEffect(() => {
    const editor = document.getElementById('editor');
    editor.onkeyup = navUpdate;
    editor.onchange = navUpdate;
  });

  return (
    <div className='editPanel'>
      <button onClick={() => format('bold')}>
        <BoldIcon fill={bold ? '#4682B4' : null}/>
      </button>
      <button onClick={() => format('italic')}>
        <ItalicIcon fill={italic ? '#4682B4' : null}/>
      </button>
    </div>
  )
};
