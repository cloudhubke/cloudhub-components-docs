---
id: icon-label
title: IconLabel
sidebar_label: IconLabel
---

## IconLabel

import {Block, IconLabel } from '@cloudhub-ux/core';
import Check from '@mui/icons-material/Check';
import {sizes} from '../../../theme';

Similar to [FieldLabel](./FieldLabel)

## Usage

```js
import { Block, IconLabel } from '@cloudhub-ux/core';
```

### Example

<playground scope={{Block, IconLabel, Check}}>
{
`<Block row> <IconLabel icon={Check} color="success"> done </IconLabel> </Block>`
}
</playground>

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>icon</td><td>Icon node</td><td></td></tr>
            <tr><td>Children</td><td>Text  node</td><td></td></tr>
        </tbody>
    </table>
</Block>
