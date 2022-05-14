---
id: badge
title: Badge
sidebar_label: Badge
---

## Badge

import {Block, Badge, Text } from '@cloudhub-ux/core';
import {sizes, colors} from '../../../theme';

Badge component is implemented from the `Block` component

## Usage

```js
```

### Example

<playground scope={{Block, Badge, Text, sizes, colors}}>
{
`<Block row flex={false}> <Badge size={64} color="accent"> <Text h4 milkyWhite>55</Text> </Badge> <Badge size={24} color="accent"> <Text milkyWhite>5</Text> </Badge> </Block>`
}
</playground>

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>size</td><td></td><td>false</td></tr>
        </tbody>
    </table>
</Block>

Check other props of the the [Block Component](./Block)
