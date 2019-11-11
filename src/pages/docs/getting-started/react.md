---
id: getting-started-with-react
title: Getting Started
sidebar_label: ReactJs
---

<!-- prettier-ignore -->
## ReactJs

import {Block, Button, Text } from 'cloudhub-components'

React-Native components are designed to work with expo. If you are using any other eg react-native-cli to start your project, this may not work for you.

## Installing

In your expo project, run this command.

```sh
npm install --save cloudhub-components
```

Once expo is installed, make sure to create a theme folder [like the one in the project](https://github.com/cloudhubke/expo-components/tree/master/lib/theme). The required configuration parameters are `colors, fonts, sizes`.

Once done, configure pass theme to `ThemeProvider` context.

```js
import { sizes, fonts, colors } from "./theme";
import ThemeProvider from "cloudhub-components/dist/theme/ThemeProvider";

<ThemeProvider fonts={fonts} sizes={sizes} colors={colors}>
  <App />
</ThemeProvider>
```

Your project is now ready to use with your theme and [Materia Ui Theme](https://material-ui.com/customization/theming/).

```js
import { sizes, fonts, colors } from "./theme"
import { Button } from "cloudhub-components"
```


### Example

<playground scope={{Block, Button, Text}}>
  {
  `<Block row>
    <Button contained color={colors.primary}> 
      <Text white>Click me</Text>
    </Button> 
  </Block>`
  }
</playground>

