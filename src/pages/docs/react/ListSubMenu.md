---
id: list-sub-menu
title: ListSubMenu
sidebar_label: ListSubMenu
---

## ListSubMenu


import {Block, ListSubMenu, ListMenu, ListMenuItem } from 'cloudhub-components';
import {sizes} from '../../../theme';

ListSubMenu component is implemented from the [Material-UI list](https://material-ui.com/components/buttons/).

## Usage

```js
import {Block, ListMenu, ListSubMenu, ListMenuItem } from 'cloudhub-components';
```
### Example

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
            <tr><td>headerIcon</td><td>Icon on the sub header</td><td>none</td></tr>
            <tr><td>header</td><td>Header Text</td><td>none</td></tr>
            <tr><td>expanded</td><td>Whether subheader is expanded</td><td>false</td></tr>
            <tr><td>style</td><td>Style object</td><td>false</td></tr>
            <tr><td>children</td><td>Array  of ListMenuItem</td><td>false</td></tr>
        </tbody>
    </table>
</Block>