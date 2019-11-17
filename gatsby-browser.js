/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';

import { MDXProvider } from '@mdx-js/react';
import { Button, Block } from 'cloudhub-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import Highlight, { defaultProps } from 'prism-react-renderer';
import { sizes, colors, fonts } from './src/theme';
import CodeBlock from './src/components/CodeBlock';

const SyntaxHighlighter = props => {
  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  // const { maxWidth } = useMetrics();

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const components = {
  wrapper: ({ children }) => <React.Fragment>{children}</React.Fragment>,
  pre: props => (
    <CodeBlock>
      <SyntaxHighlighter {...props} />
    </CodeBlock>
  ),
  playground: props => {
    const editorprops = {
      ...defaultProps,
    };
    delete editorprops.Prism;

    return (
      <Block
        flex={false}
        paper
        margin={[sizes.margin, 0]}
        style={{ overflowX: 'auto', maxWidth: '100%' }}
      >
        <LiveProvider
          code={props.children.trim()}
          language="jsx"
          scope={{ ...props.scope, colors, sizes, fonts }}
        >
          <Block
            margin={[sizes.margin, 0]}
            padding={sizes.padding}
            flex={false}
          >
            <LivePreview />
          </Block>
          <Block>
            <LiveEditor {...editorprops} />
          </Block>
          <LiveError />
        </LiveProvider>
      </Block>
    );
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
