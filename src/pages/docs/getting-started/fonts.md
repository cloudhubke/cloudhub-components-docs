---
id: fonts-object
title: Fonts Object
sidebar_label: Fonts Object
---

## Fonts Object

import { Block, Text } from '@cloudhub-ux/core';
import {colors} from '../../../theme';

Fonts Object is implemented to help pass common font styles as props to the Text component.

### Example

<playground scope={{Block, Text, colors}}>
{
`<Block paper color={colors.successColor}> <Text h2> Heading one </Text> </Block>`
}
</playground>

```js
import sizes from './Sizes';
import colors from './Colors';

const Fonts = {
  h1: {
    fontFamily: 'clanpro-book',
    fontSize: sizes.h1,
    lineHeight: '150%',
  },
  h2: {
    fontFamily: 'clanpro-book',
    fontSize: sizes.h2,
    lineHeight: '150%',
  },
  h3: {
    fontFamily: 'clanpro-book',
    fontSize: sizes.h3,
    lineHeight: '150%',
  },
  h4: {
    fontFamily: 'clanpro-book',
    fontSize: sizes.h4,
    lineHeight: '150%',
  },
  h5: {
    fontFamily: 'clanpro-book',
    fontSize: sizes.h5,
    lineHeight: '150%',
  },
  h6: {
    fontFamily: 'clanpro-book',
    fontSize: sizes.h6,
    lineHeight: '150%',
  },

  header: {
    fontFamily: 'clanpro-black',
    fontSize: sizes.header,
    lineHeight: '150%',
    letterSpacing: 0.5,
    color: colors.black,
  },
  subHeader: {
    fontFamily: 'clanpro-thin',
    fontSize: sizes.subHeader,
    lineHeight: '150%',
    letterSpacing: 0.5,
    color: colors.black,
  },

  title: {
    fontFamily: 'clanpro-book',
    fontSize: sizes.title,
    lineHeight: '150%',
    letterSpacing: 0.5,
    color: colors.black,
  },

  subTitle: {
    fontFamily: 'clanpro-thin',
    fontSize: sizes.subTitle,
    lineHeight: '150%',
    letterSpacing: 0.5,
    color: colors.black,
  },

  semibold: {
    fontFamily: 'clanpro-bold',
    fontWeight: 100,
  },

  bold: {
    fontFamily: 'clanpro-bold',
  },

  light: {
    fontFamily: 'clanpro-thin',
  },

  italic: {
    fontStyle: 'italic',
  },
  strikethrough: {
    textDecoration: 'line-through',
  },
  underline: {
    textDecoration: 'underline',
  },

  normal: {
    fontFamily: 'clanpro-book',
  },

  default: {
    fontFamily: 'clanpro-book',
    fontSize: sizes.body,
  },

  body: {
    fontFamily: 'clanpro-book',
    fontSize: sizes.body,
    lineHeight: '200%',
    color: colors.darkGray,
  },

  caption: {
    fontSize: sizes.caption,
  },
  small: {
    fontSize: sizes.small,
    lineHeight: '200%',
    color: colors.darkGray,
  },
  button: {
    fontSize: sizes.button,
    color: colors.white,
  },
};

export default Fonts;
```
