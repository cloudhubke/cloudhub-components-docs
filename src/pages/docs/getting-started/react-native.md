---
id: react-native
title: React Native
sidebar_label: React Native
---

## React Native

React-Native components are designed to work with expo. If you are using any other eg react-native-cli to start your project, this may not work for you.

## Installing

In your expo project, run this command.

```sh
    npm install --save @expocraft/core
```

Once expo is installed, make sure to create a theme folder [like the one in the project](https://github.com/cloudhubke/expo-components/tree/master/lib/theme). The required configuration parameters are `colors, fonts, sizes`.

Once done, configure pass theme to `ThemeProvider` context.

```js
import ThemeProvider from '@expocraft/core/lib/theme/ThemeProvider';
import { sizes, fonts, colors } from './theme';

<ThemeProvider fonts={fonts} sizes={sizes} colors={colors}>
  <App />
</ThemeProvider>;
```

Your project is now ready to use with your theme and [Materia Ui Theme](https://material-ui.com/customization/theming/).

Example

```js
import { sizes, fonts, colors } from './theme';
import { Button } from '@expocraft/core';

<Button color={colors.primary}>
  <Text white>Click Me</Text>
</Button>;
```
