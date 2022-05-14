---
id: getting-started-with-react
title: Getting Started
sidebar_label: ReactJs
---

<!-- prettier-ignore -->
## ReactJs

import {Block, Button, Text } from '@cloudhub-ux/core'

@cloudhub-ux/core are designed to work in any reactjs project.

## Installing

In your project, run this command.

```sh
npm install --save @cloudhub-ux/core
```

Once, installed, make sure to create a theme folder [like the one in the project](https://github.com/cloudhubke/@cloudhub-ux/core/tree/master/src/theme). The required configuration parameters are `colors, fonts, sizes`.

Once done, configure pass theme to `ThemeProvider` context.

```js
import { sizes, fonts, colors } from './theme';
import ThemeProvider from '@cloudhub-ux/core/theme/ThemeProvider';

<ThemeProvider fonts={fonts} sizes={sizes} colors={colors}>
  <App />
</ThemeProvider>;
```

Your project is now ready to use with your theme and [Materia Ui Theme](https://material-ui.com/customization/theming/).

```js
import { sizes, fonts, colors } from './theme';
import { Button } from '@cloudhub-ux/core';
```

### Example

<playground scope={{Block, Button, Text}}>
{
`<Block row> <Button contained color={colors.primary}> <Text white>Click me</Text> </Button> </Block>`
}
</playground>

## Import components from @material-ui

```js
//import a component
import { Button } from '@cloudhub-ux/core/mui/core';

//import styles
import { makeStyles, withStyles } from '@cloudhub-ux/core/mui/styles';

//import colors
import { red } from '@cloudhub-ux/core/mui/colors';

//import icons
import { Close } from '@cloudhub-ux/core/mui/icons';
```

## custom hooks

```js
  const debouncedvalue = useDebounce(changingvalue, 400);

  //maxWidth is either sm, md, lg, xl
  const {width, height, isMobile, maxWidth} = useMetrics();

  //use Location after using <LocationProvider>
  const {location, navigate} =  useLocation();

  // similar to setInterval
  useInterval(function, delay);

```
