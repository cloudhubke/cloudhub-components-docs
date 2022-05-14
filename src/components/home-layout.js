/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Block, Container } from '@cloudhub-ux/core';
import { useRect, useMetrics } from '@cloudhub-ux/core/customhooks';

import { fonts, colors, sizes } from '../theme';
import Header from './Header';
import './layout.css';
import Footer from './Footer';

const Layout = ({ children }) => {
  const headerRef = React.useRef();

  const { height, maxWidth } = useMetrics();

  const rect = useRect(headerRef);

  const headersize = rect || {};

  const headerheight = Number(headersize.height || 0);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Block color={colors.gray4}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        maxWidth={maxWidth}
        ref={headerRef}
      />
      <Block
        flex={false}
        style={{
          marginTop: headerheight || sizes.navBarHeight,
          minHeight: `calc(${height - (headerheight || sizes.navBarHeight)}px)`,
        }}
      >
        <Container
          column
          color={colors.milkyWhite}
          padding={0}
          style={{
            flex: 1,
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <Block style={{ width: '100%' }}>{children}</Block>
        </Container>
      </Block>
      <Block flex={false}>
        <Footer />
      </Block>
    </Block>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
