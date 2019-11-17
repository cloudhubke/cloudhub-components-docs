import React from 'react';
import { Block } from 'cloudhub-components';
import { useMetrics } from 'cloudhub-components/dist/customhooks';
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
