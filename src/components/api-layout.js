import React from "react"
import { Block } from "cloudhub-components"
import HomeLayout from "./home-layout"
import { colors } from "../theme"
import sizes from "cloudhub-components/dist/theme/Sizes"

const ApiLayout = props => {
  return (
    <HomeLayout>
      <Block row>
        <Block
          style={{ width: 250, paddingTop: sizes.padding }}
          flex={false}
          color={colors.gray3}
        >
          Menu
        </Block>

        <Block style={{ paddingTop: sizes.padding }}>{props.children}</Block>
      </Block>
    </HomeLayout>
  )
}

export default ApiLayout
