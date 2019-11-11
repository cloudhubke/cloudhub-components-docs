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

const SyntaxHighlighter = props => {
  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
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

const LiveCode = props => {
  const editorprops = {
    ...defaultProps,
  };

  return (
    <LiveProvider
      code={props.children.props.children.trim()}
      scope={{ Button }}
      language="jsx"
      {...props}
    >
      <LivePreview />
      <LiveEditor {...editorprops} />
      <LiveError />
    </LiveProvider>
  );
};

const components = {
  wrapper: ({ children }) => <React.Fragment>{children}</React.Fragment>,
  pre: props => {
    if (props.children.props['react-live']) {
      return <LiveCode {...props} />;
    }
    return <SyntaxHighlighter {...props} />;
  },
  playground: props => {
    const editorprops = {
      ...defaultProps,
    };

    delete editorprops.Prism;


    return (
      <Block flex={false} paper margin={[sizes.margin, 0]}>
        <LiveProvider
          code={props.children.trim()}
          language="jsx"
          scope={{ ...props.scope, colors, sizes, fonts }}
        >
          <Block margin={[sizes.margin, 0]} padding={sizes.padding}>
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

export const wrapRootElement = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>;
