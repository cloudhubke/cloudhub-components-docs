---
id: text-area
title: TextArea
sidebar_label: TextArea
---

## TextArea

import {Block, TextArea } from '@cloudhub-ux/core';
import {sizes} from '../../../theme';

TextArea component is implemented from the [Material-UI TextAreas](https://material-ui.com/components/buttons/).

## Usage

```js
```

### Example

<playground scope={{Block, TextArea}}>
{
`<Block row> <TextArea value="Hakuna Matata" /> </Block>`
}
</playground>

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
           <tr><td>value</td><td>Current value of input</td><td></td></tr>
            <tr><td>onChange</td><td>called after input changed</td><td></td></tr>
            <tr><td>rows</td><td>number of rows</td><td></td></tr>
        </tbody>
    </table>
</Block>
