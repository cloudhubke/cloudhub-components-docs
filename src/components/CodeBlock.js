import React from 'react';
import { Block } from '@cloudhub-ux/core';
import { useMetrics } from '@cloudhub-ux/core/customhooks';
import { sizes } from '../theme';

const CodeBlock = ({ children }) => {
  const { width } = useMetrics();

  return (
    <Block
      flex={false}
      style={{ maxWidth: width - sizes.margin * 2, overflowX: 'scroll' }}
    >
      {children}
    </Block>
  );
};

export default CodeBlock;
