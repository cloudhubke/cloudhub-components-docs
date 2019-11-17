---
id: list-meni
title: ListMenu
sidebar_label: ListMenu
---

## ListMenu


import { Block, ListMenu, ListSubMenu, ListMenuItem } from 'cloudhub-components';
import {sizes} from '../../../theme';

ListMenu component is implemented from the [Material-UI List](https://material-ui.com/components/list/).

## Usage

```js
import { ListMenu, ListSubMenu, ListMenuItem } from 'cloudhub-components';
```
### Example

<playground scope={{Block, ListMenuItem, ListMenu}}>
{
`<Block row>
    <Block flex={false} paper>
        <ListMenu key="1-shopping"  header="Groceries">
            <ListMenuItem key="carrots">Carrots</ListMenuItem>
            <ListMenuItem key="cabbages">Cabbages</ListMenuItem>
            <ListMenuItem key="bananas">Bananas</ListMenuItem>
        </ListMenu>
    </Block>
</Block>`
}
</playground>


### Collapsible Sub Headers

<playground scope={{Block, ListMenuItem, ListMenu, ListSubMenu}}>
{
`<Block row>
    <Block flex={false} paper>
        <ListMenu key="2-shopping" header="Shopping List">
           <ListSubMenu key="c-groceries" header="Groceries" headerIcon={null}>
                <ListMenuItem key="c-carrots">Carrots</ListMenuItem>
                <ListMenuItem key="c-cabbages">Cabbages</ListMenuItem>
                <ListMenuItem key="c-bananas">Bananas</ListMenuItem>
           </ListSubMenu>
            <ListSubMenu key="c-beverages" expanded header="Beverages" headerIcon={null}>
                <ListMenuItem key="c-coke">Coke 500ml</ListMenuItem>
                <ListMenuItem key="c-tea">Green Tea</ListMenuItem>
           </ListSubMenu>
        </ListMenu>
    </Block>
</Block>`
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
            <tr><td>header</td><td>Tile of list (optional)</td><td>null</td></tr>
            <tr><td>children</td><td>Tile of ListItem or ListSubMenu components</td><td>null</td></tr>
        </tbody>
    </table>
</Block>