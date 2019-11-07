import React, { useState } from "react"
import { Link } from "gatsby"
import { colors, sizes } from "../theme"
import { Text, Block } from "cloudhub-components"

const Footer = props => {
  const [] = useState(0)

  return (
    <Block color={colors.dark} flex={false} padding={sizes.padding} center>
      <Block row flex={false} center>
        <Block flex={false} style={{ minWidth: 300 }}>
          <Text
            h5
            style={{ marginBottom: 20, color: colors.gray4, fontWeight: 500 }}
          >
            DOCS
          </Text>
          <Link href="" style={{ marginBottom: 10 }}>
            <Text milkyWhite>Getting started</Text>
          </Link>
          <Link to="/api" style={{ marginBottom: 10 }}>
            <Text milkyWhite>Components and APIs</Text>
          </Link>
          <Link to="/docs" style={{ marginBottom: 10 }}>
            <Text milkyWhite>More resources</Text>
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
            target="_blank"
            style={{ marginBottom: 10 }}
          >
            <Text milkyWhite>Twitter</Text>
          </a>
          <a
            href="https://github.com/cloudhubke"
            target="_blank"
            style={{ marginBottom: 10 }}
          >
            <Text milkyWhite>Github</Text>
          </a>
          <a
            href="http://reactjs.org"
            target="_blank"
            style={{ marginBottom: 10 }}
          >
            <Text milkyWhite>React</Text>
          </a>
        </Block>
      </Block>
      <Block flex={false} margin={[sizes.margin, 0]}>
        <a href="https://www.cloudhub.co.ke">
          <Text h5 primary>
            © {new Date().getFullYear()},{` Cloud Hub Limited `}
          </Text>
        </a>
      </Block>
    </Block>
  )
}

export default Footer
