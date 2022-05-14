---
id: date-picker
title: DatePicker
sidebar_label: DatePicker
---

## DatePicker

import {Block, DatePicker } from '@cloudhub-ux/core';
import {sizes} from '../../../theme';

DatePicker component used to select a date in timestamp format.

## Usage

```js
import { Block, DatePicker } from '@cloudhub-ux/core';
```

### Example

<playground scope={{Block, DatePicker}}>
{
`<Block row> <DatePicker /> </Block>`
}
</playground>

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>value</td><td>timestamp date value</td><td></td></tr>
            <tr><td>dateFormat</td><td>momentjs dateFormat</td><td></td></tr>
            <tr><td>onChange</td><td>called after date change</td><td></td></tr>
        </tbody>
    </table>
</Block>
