import React from 'react';
import { Block } from 'cloudhub-components';

const Editor = props => {
  const [] = React.useState(0);

  if (global.navigator) {
    const CKEditor = require('cloudhub-components/dist/CKEditor');
    return <CKEditor />;
  }
  return null;
};

export default Editor;
