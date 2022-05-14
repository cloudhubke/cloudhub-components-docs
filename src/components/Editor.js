import React from 'react';
import { Block } from '@cloudhub-ux/core';

const Editor = props => {
  const [] = React.useState(0);

  if (global.navigator) {
    const CKEditor = require('@cloudhub-ux/core/CKEditor');
    return <CKEditor />;
  }
  return null;
};

export default Editor;
