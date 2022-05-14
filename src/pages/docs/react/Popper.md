---
id: popper
title: Popper
sidebar_label: Popper
---

## Popper

import {Block, Text, Button } from '@cloudhub-ux/core';
import {Popper} from '@cloudhub-ux/core/dialog'
import {sizes} from '../../../theme';

Popper component is implemented from the [Material-UI Popper](https://material-ui.com/components/popper/).

## Usage

```js
import { Popper } from '@cloudhub-ux/core/dialog';
```

### Example

<playground scope={{Block, Button, Text, Popper}}>
{
`()=>{ const [open, setOpen]=React.useState(false); const handleOpen=()=>{ setOpen(!open); } return (<Block row right> <Popper open={open} onClose={()=>setOpen(false)} anchorComponent={<Button contained onClick={()=>setOpen(true)}>Open Cart</Button>}> <Text h4>There are no cart items </Text> </Popper> </Block>) }`
}
</playground>

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>arrow</td><td>Whether to show arrow</td><td>true</td></tr>
            <tr><td>open</td><td>Open state of popper</td><td>true</td></tr>
            <tr><td>placement</td><td>Placement location in respect to the anchorElement</td><td>'bottom'</td></tr>
            <tr><td>preventOverflow</td><td>parent of popper. scrollParent, window, or viewPort</td><td>'scrollParent'</td></tr>
            <tr><td>paperstyles</td><td>style of the popper container</td><td>{}</td></tr>
            <tr><td>onClose</td><td>function to call after close</td><td>() => {}</td></tr>
            <tr><td>anchorComponent</td><td>clickable component</td><td>null</td></tr>
            <tr><td>color</td><td>color of popper</td><td>colors.white</td></tr>
            <tr><td>disableClickAwayClose</td><td>disable close on clickAway</td><td>false</td></tr>
        </tbody>
    </table>
</Block>
