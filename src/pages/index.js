import React from "react"
import { Link } from "gatsby"

import HomeLayout from "../components/home-layout"

import SEO from "../components/seo"
import { Text, Block, Button } from "cloudhub-components"
import { sizes, colors } from "../theme"

import reactLogo from "../images/react-logo.svg"
import muiLogo from "../images/material-ui-logo.svg"
import theming from "../images/theming.png"
import documentation from "../images/documentation.svg"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />

    <Block flex={false} color={colors.purple}>
      <Block style={{ minHeight: 250 }} middle center padding={sizes.padding}>
        <Text center h2 mistyWhite semibold>
          React components to help you get going with your project
        </Text>
      </Block>
      <Block middle center padding={sizes.padding}>
        <Link to="/docs">
          <Button contained rounded large color={colors.secondary}>
            <Text button milkyWhite bold>
              Get Started
            </Text>
          </Button>
        </Link>
      </Block>
    </Block>
    <Block padding={sizes.padding} center color={colors.dark} flex={false}>
      <Text h3 mistyWhite center>
        We are ready to help you and your business move to the next level.
      </Text>
      <a
        href="http://www.cloudhub.co.ke/contactus"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text h2 light secondary>
          Talk To Us
        </Text>
      </a>
    </Block>
    <Block row wrap padding={sizes.padding} center middle>
      <Block
        flex={false}
        style={{ width: 380, height: 380, marginRight: sizes.margin }}
        center
        middle
        padding={sizes.padding}
      >
        <img alt="react" src={reactLogo} style={{ height: 200 }} />
        <Text center header>
          Build using React
        </Text>
        <Text center>
          Extend or customize your project's layout by reusing React.
        </Text>
      </Block>

      <Block
        flex={false}
        style={{ width: 380, height: 380, marginRight: sizes.margin }}
        center
        middle
        padding={sizes.padding}
      >
        <img alt="Material Ui" src={muiLogo} style={{ height: 200 }} />
        <Text center header>
          Powered by Material-UI
        </Text>
        <Text center>Set of carefully crafted from the material-ui team</Text>
      </Block>

      <Block
        flex={false}
        style={{ width: 380, height: 380, marginRight: sizes.margin }}
        center
        middle
        padding={sizes.padding}
      >
        <img alt="Theming" src={theming} style={{ height: 200 }} />
        <Text center header>
          CSS Theming
        </Text>
        <Text center>Apply themes to best suite your project</Text>
      </Block>

      <Block
        flex={false}
        style={{ width: 380, height: 380, marginRight: sizes.margin }}
        center
        middle
        padding={sizes.padding}
      >
        <img alt="Updated" src={documentation} style={{ height: 200 }} />
        <Text header center>
          Updated & Well documented
        </Text>
        <Text center>
          A motivated team behind the awesome components keeps them up to date
          and well documentated
        </Text>
      </Block>
    </Block>
  </HomeLayout>
)

export default IndexPage
