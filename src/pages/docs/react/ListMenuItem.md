---
id: list-menu-item
title: ListMenuItem
sidebar_label: ListMenuItem
---

## ListMenuItem

import {Block, ListMenu, ListSubMenu, ListMenuItem } from '@cloudhub-ux/core';
import {sizes} from '../../../theme';

ListMenuItem component is implemented from the [Material-UI ListItem](https://material-ui.com/components/list).

## Usage

```js
import { Block, ListMenu, ListSubMenu, ListMenuItem } from '@cloudhub-ux/core';
```

### Example

<playground scope={{Block, ListMenuItem, ListMenu, ListSubMenu}}>
{
`<Block row> <Block flex={false} paper> <ListMenu key="2-shopping" header="Shopping List"> <ListSubMenu key="c-groceries" header="Groceries" headerIcon={null}> <ListMenuItem key="c-carrots">Carrots</ListMenuItem> <ListMenuItem key="c-cabbages">Cabbages</ListMenuItem> <ListMenuItem key="c-bananas">Bananas</ListMenuItem> </ListSubMenu> <ListSubMenu key="c-beverages" expanded header="Beverages" headerIcon={null}> <ListMenuItem key="c-coke">Coke 500ml</ListMenuItem> <ListMenuItem key="c-tea">Green Tea</ListMenuItem> </ListSubMenu> </ListMenu> </Block> </Block>`
}
</playground>

## Props

Material UI props and

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>icon</td><td>An icon node</td><td>none</td></tr>
            <tr><td>avatar</td><td>An Avatar node</td><td>none</td></tr>
            <tr><td>primary</td><td>Primary Text</td><td>none</td></tr>
            <tr><td>action</td><td>Action Node</td><td>none</td></tr>
            <tr><td>children</td><td>Children node of string or Text</td><td>none</td></tr>
        </tbody>
    </table>
</Block>
