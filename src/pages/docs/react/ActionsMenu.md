---
id: actions-menu
title: ActionsMenu
sidebar_label: ActionsMenu
---

## ActionsMenu


import {Block, Button, ActionsMenu, ListMenu, ListMenuItem } from 'cloudhub-components';
import {sizes} from '../../../theme';

ActionsMenu component allows easy actions on a grid/card or any object.

## Usage

```js
import { ActionsMenu, ListMenu, ListMenuItem } from 'cloudhub-components';
```

### Example

<playground scope={{Block, Button, ListMenu, ListMenuItem, ActionsMenu}}>
{
`<Block row  middle>
    <ActionsMenu>
        <ListMenu>
            <ListMenuItem>Save</ListMenuItem>
        </ListMenu>
    </ActionsMenu>
    <ActionsMenu anchorComponent={<Button>Menu</Button>}>
        <ListMenu>
            <ListMenuItem>Save all</ListMenuItem>
            <ListMenuItem>Exit</ListMenuItem>
        </ListMenu>
    </ActionsMenu>
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
            <tr><td>anchorComponent</td><td>Clickable component like buttton</td><td>default</td></tr>
            <tr><td>children</td><td>Array  of ListMenuItem </td><td></td></tr>
        </tbody>
    </table>
</Block>    

