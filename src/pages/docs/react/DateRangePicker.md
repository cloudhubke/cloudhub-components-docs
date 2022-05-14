---
id: date-range-picker
title: DateRangePicker
sidebar_label: DateRangePicker
---

## DateRangePicker

import {Block, DateRangePicker } from '@cloudhub-ux/core';
import {sizes} from '../../../theme';

DateRangePicker used to select a range of date.

return an array of upper and lower date in timestamps.

## Usage

```js
import { Block, DateRangePicker } from '@cloudhub-ux/core';
```

### Example

<playground scope={{Block, DateRangePicker}}>
{
`<Block row> <DateRangePicker /> </Block>`
}
</playground>

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>value</td><td>Array of two dates</td><td> [moment().startOf('day'), moment().endOf('day')]</td></tr>
               <tr><td>onChange</td><td>called after date change</td><td></td></tr>
        </tbody>
    </table>
</Block>
