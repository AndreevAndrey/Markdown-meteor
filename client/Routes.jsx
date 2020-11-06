import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter'
import { Editor } from '../imports/ui/Editor/Editor';
import { Comments } from '../imports/ui/Comments';

FlowRouter.route('/', {
  name: 'Editor',
  action(){
    mount( Editor, {
      content: <Editor />
    })
  }
});

FlowRouter.route('/comments', {
  name: 'Comments',
  action(){
    mount( Comments, {
      content: <Comments />
    })
  }
});
