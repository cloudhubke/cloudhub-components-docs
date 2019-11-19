---
id: field-block
title: FieldBlock
sidebar_label: FieldBlock
---

## FieldBlock


import {Block, FieldBlock, Input } from 'cloudhub-components';
import {sizes} from '../../../theme';

Variant of `Block` used to  implement fields.
Mostly used in forms.
## Usage

```js
import {Block, FieldBlock, Input } from 'cloudhub-components';
```
### Example

<playground scope={{Block, FieldBlock, Input}}>
{
`<Block row>
    <FieldBlock label="First Name">
        <Input />
    </FieldBlock>
</Block>`
}
</playground>



## Props


Implements the [Block](./Block) props