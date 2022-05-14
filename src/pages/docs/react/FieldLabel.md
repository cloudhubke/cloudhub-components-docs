---
id: field-label
title: FieldLabel
sidebar_label: FieldLabel
---

## FieldLabel

import {Block, FieldLabel } from '@cloudhub-ux/core';
import Close from '@mui/icons-material/Close';
import {sizes} from '../../../theme';

FieldLabel component is used inside a form but just as a label

## Usage

```js
import { Block, FieldLabel } from '@cloudhub-ux/core';
```

### Example

<playground scope={{Block, FieldLabel, Close}}>
{
`<Block row> <FieldLabel icon={Close} label="Pending Activation" /> </Block>`
}
</playground>

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>label</td><td>Label Text</td><td>label</td></tr>
            <tr><td>icon</td><td>Icon Component</td><td>label</td></tr>
            <tr><td>onClick</td><td>onClick method</td><td></td></tr>
        </tbody>
    </table>
</Block>
