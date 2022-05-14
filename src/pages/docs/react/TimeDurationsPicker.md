---
id: time-duration-picker
title: TimeDurationsPicker
sidebar_label: TimeDurationsPicker
---

## TimeDurationsPicker

import {Block, TimeDurationsPicker } from '@cloudhub-ux/core';
import {sizes} from '../../../theme';

TimeDurationsPicker component for selecting an array of time durations

## Usage

```js
import { Block, TimeDurationsPicker } from '@cloudhub-ux/core';
```

### Example

<playground scope={{Block, TimeDurationsPicker}}>
{
`<Block row> <TimeDurationsPicker /> </Block>`
}
</playground>

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>value</td><td>Array of timestamps</td><td>[]</td></tr>            
            <tr><td>onChange</td><td>called after input changed</td><td></td></tr>
        </tbody>
    </table>
</Block>
