---
id: sizes-object
title: Sizes Object
sidebar_label: Sizes Object
---

## Sizes Object


import { Block, Badge,  Text } from 'cloudhub-components';
import {colors, sizes} from '../../../theme';

Sizes Object is implemented to help pass common sizes as props to various components

### Example

<playground scope={{Block, Badge, Text, sizes, colors}}>
{
`<Block color={colors.successColor} row>
    <Badge size={64} color="accent">
        <Text h4 milkyWhite>55</Text>
    </Badge>
</Block>`
}
</playground>

```js
const sizes = {
  // global sizes
  base: 10,
  font: 16,
  border: 15,
  padding: 15,
  margin: 15,

  // font sizes
  h1: 48,
  h2: 36,
  h3: 28,
  h4: 24,
  h5: 20,
  h6: 18,

  title: 24,
  subTitle: 22,

  header: 28,
  subHeader: 26,

  body: 16,
  caption: 14,
  small: 12,
  tiny: 9,
  button: 24,

  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  navBarHeight: 75,
  adminNavBarHeight: 75,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },

  // InputSharp,

  inputHeight: 45,
  inputMinWidth: 150,
};

export default sizes;


```