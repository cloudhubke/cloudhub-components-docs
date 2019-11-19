---
id: IconButton
title: IconButton
sidebar_label: IconButton
---

## IconButton


import {Block, IconButton } from 'cloudhub-components';
import Close from '@material-ui/icons/Close';
import Menu from '@material-ui/icons/Menu';
import {sizes, colors} from '../../../theme';

IconButton component is implemented from the [Material-UI IconButtons](https://material-ui.com/components/buttons/).

## Usage

```js
import {Block, IconButton } from 'cloudhub-components';
```
### Example

<playground scope={{Block, IconButton, Close, Menu}}>
{
`<Block row>
    <IconButton>
        <Close />
    </IconButton>
     <IconButton color={colors.gray4}>
        <Menu />
    </IconButton>
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
            <tr><td>color</td><td>Color of Button</td><td></td></tr>
            <tr><td>children</td><td>The icon node</td><td></td></tr>
            <tr><td>outlined</td><td>bordered</td><td></td></tr>
            <tr><td>padding</td><td>padding</td><td></td></tr>
            <tr><td>margin</td><td>margin</td><td></td></tr>
            <tr><td>size</td><td>size of button</td><td></td></tr>
            <tr><td>onClick</td><td>onClick menthod</td><td></td></tr>
        </tbody>
    </table>
</Block>