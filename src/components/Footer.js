import React from 'react';
import { Link } from 'gatsby';
import { Text, Block } from '@cloudhub-ux/core';
import { colors, sizes } from '../theme';

const Footer = props => (
  <Block color={colors.dark} flex={false} padding={sizes.padding} center>
    <Block row flex={false} center wrap>
      <Block flex={false} style={{ minWidth: 300 }}>
        <Text
          h5
          style={{ marginBottom: 20, color: colors.gray4, fontWeight: 500 }}
        >
          DOCS
        </Text>
        <Link to="/docs" style={{ marginBottom: 10 }}>
          <Text milkyWhite>Getting started</Text>
        </Link>
        <Link to="/api" style={{ marginBottom: 10 }}>
          <Text milkyWhite>Components and APIs</Text>
        </Link>
        <Link to="/docs" style={{ marginBottom: 10 }}>
          <Text milkyWhite>React Native</Text>
        </Link>
      </Block>

      <Block flex={false} style={{ minWidth: 300 }}>
        <Text
          h5
          style={{ marginBottom: 20, color: colors.gray4, fontWeight: 500 }}
        >
          More Resources
        </Text>
        <Link to="/blog" style={{ marginBottom: 10 }}>
          <Text milkyWhite>Blog</Text>
        </Link>
        <a
          href="https://twitter.com/cloudhubke"
          rel="noopener noreferrer"
          target="_blank"
          style={{ marginBottom: 10 }}
        >
          <Text milkyWhite>Twitter</Text>
        </a>
        <a
          href="https://github.com/cloudhubke"
          rel="noopener noreferrer"
          target="_blank"
          style={{ marginBottom: 10 }}
        >
          <Text milkyWhite>Github</Text>
        </a>
        <a
          href="http://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginBottom: 10 }}
        >
          <Text milkyWhite>React</Text>
        </a>
      </Block>
    </Block>
    <Block flex={false} margin={[sizes.margin, 0]}>
      <a href="https://www.cloudhub.co.ke" rel="noopener noreferrer">
        <Text h5 tertiary>
          ©{new Date().getFullYear()},{' Cloud Hub Limited '}
        </Text>
      </a>
    </Block>
  </Block>
);

export default Footer;
