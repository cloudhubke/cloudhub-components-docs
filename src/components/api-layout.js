import React from "react"
import { Block } from "cloudhub-components"
import HomeLayout from "./home-layout"
import { colors } from "../theme"

const ApiLayout = props => {
  const [] = React.useState(0)

  return (
    <HomeLayout>
      <Block row>
        <Block style={{ width: 250 }} flex={false} color={colors.gray3}>
          Menu
        </Block>

        <Block>{props.children}</Block>
      </Block>
    </HomeLayout>
  )
}

export default ApiLayout
