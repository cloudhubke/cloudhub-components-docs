import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Block, Text, Button } from "cloudhub-components"
import { useMetrics } from "cloudhub-components/dist/customhooks"
import sizes from "cloudhub-components/dist/theme/Sizes"
import { colors, Images } from "../theme"

const Header = ({ siteTitle }) => {
  const { isMobile } = useMetrics()

  return (
    <Block
      flex={false}
      style={{
        height: sizes.navBarHeight,
        marginBottom: 2,
        position: "relative",
      }}
    >
      <Block
        flex={false}
        style={{
          position: "fixed",
          right: 0,
          left: 0,
          top: 0,
        }}
      >
        <Block row shadow color={colors.milkyWhite} middle wrap>
          {!isMobile && (
            <Link to="/" style={{ margin: 0, padding: 0 }}>
              <Block
                flex={false}
                style={{
                  minWidth: 200,
                }}
              >
                <img
                  src={Images.logo}
                  alt="Clou Hub Limited"
                  style={{
                    height: sizes.navBarHeight - 15,
                  }}
                />
              </Block>
            </Link>
          )}
          <Block row middle margin={[0, sizes.margin]}>
            <Link to="/">
              <Text h3 primary>
                {siteTitle}
              </Text>
            </Link>
          </Block>
          <Block row>
            <Link to="/docs">
              <Button
                color="primary"
                style={{ height: sizes.navBarHeight, borderRadius: 0 }}
              >
                <Text h6>Docs</Text>
              </Button>
            </Link>
            <Link to="/api">
              <Button
                primary
                style={{ height: sizes.navBarHeight, borderRadius: 0 }}
              >
                <Text h6>API</Text>
              </Button>
            </Link>
            <Link to="/blog">
              <Button
                primary
                style={{ height: sizes.navBarHeight, borderRadius: 0 }}
              >
                <Text h6>Blog</Text>
              </Button>
            </Link>
            <a
              href="https://github.com/cloudhubke/cloudhub-components"
              target="_blank"
            >
              <Button
                primary
                style={{ height: sizes.navBarHeight, borderRadius: 0 }}
              >
                <Text h6>Github</Text>
              </Button>
            </a>
          </Block>
        </Block>
      </Block>
    </Block>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
