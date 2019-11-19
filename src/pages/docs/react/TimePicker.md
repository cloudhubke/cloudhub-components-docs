---
id: time-picker
title: TimePicker
sidebar_label: TimePicker
---

## TimePicker


import {Block, TimePicker } from 'cloudhub-components';
import {sizes} from '../../../theme';

TimePicker component for selecting time implemented from antd

## Usage

```js
import {Block, TimePicker } from 'cloudhub-components';
```
### Example

<playground scope={{Block, TimePicker}}>
{
`<Block row>
    <TimePicker />
</Block>`
}
</playground>



## Props



<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
                <tr><td>value</td><td>Current value in timestamp</td><td></td></tr>
            <tr><td>onChange</td><td>called after input changed</td><td></td></tr>
        </tbody>
    </table>
</Block>