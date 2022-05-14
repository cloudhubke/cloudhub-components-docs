---
id: chips
title: Chips
sidebar_label: Chips
---

## Chips

import {Block, Chips } from '@cloudhub-ux/core';
import {sizes} from '../../../theme';

Chips component is implemented from the [Material-UI Chips](https://material-ui.com/components/chips).

## Usage

```js
import { Block, Chips } from '@cloudhub-ux/core';
```

### Example

<playground scope={{Block, Chips}}>
{
`<Block row> <Chips data={[{name: 'John', value: 50}, {name: 'James', value: 24}, {name: 'Angela', value: 30}]} extractLabel={n=>n.name} extractKey={n=>n.name} /> </Block>`
}
</playground>

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>data</td><td>The data to represent each cheap</td><td>[]</td></tr>
            <tr><td>extractLabel</td><td>Function to extract the label</td><td>null</td></tr>
            <tr><td>extractKey</td><td>Function to extract the key</td><td>null</td></tr>
            <tr><td>onChange</td><td>onChange data function</td><td>null</td></tr>
        </tbody>
    </table>
</Block>
