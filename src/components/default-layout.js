/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { fonts, colors, sizes } from "../theme"

import { Block, Text, Container } from "cloudhub-components"
import ThemeProvider from "cloudhub-components/dist/theme/ThemeProvider"

import { useMetrics } from "cloudhub-components/dist/customhooks"

import Header from "./header"
import "./layout.css"
import Footer from "./Footer"

const DefaultLayout = ({ children }) => {
  const { height } = useMetrics()

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider fonts={fonts} colors={colors} sizes={sizes}>
      <Block color={colors.gray4}>
        <Block
          flex={false}
          style={{
            position: "relative",
            height: sizes.navBarHeight,
            zIndex: 1,
          }}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
        </Block>
        <Block style={{ minHeight: `calc(${height - sizes.navBarHeight}px)` }}>
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
            <Block style={{ minWidth: "100%" }}>{children}</Block>
          </Container>
        </Block>
        <Block flex={false}>
          <Footer />
        </Block>
      </Block>
    </ThemeProvider>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
