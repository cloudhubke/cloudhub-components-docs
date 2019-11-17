---
id: card
title: Card
sidebar_label: Card
---

## Card


import {Block,  Text,  Card } from 'cloudhub-components';
import {sizes, colors} from '../../../theme';

Card component is a variant of the Block component.

## Usage

```js
import {Block, Text, Card } from 'cloudhub-components';
```
### Example

<playground scope={{Block, Card, Text, colors}}>
{
`<Block row>
    <Card shadow elevation={5} color={colors.gray4}>
        <Text>Card</Text>
    </Card>
</Block>`
}
</playground>



## Props

Material UI props and


Please refer to the [Block](./Block) props