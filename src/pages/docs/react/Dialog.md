---
id: dialog
title: Dialog
sidebar_label: Dialog
---

## Dialog


import {Block, Button, Text } from 'cloudhub-components';
import Dialog, {DialogHeader, DialogContent, DialogActions} from 'cloudhub-components/dist/dialog';
import {sizes} from '../../../theme';

Dialog component is implemented from the [Material-UI Dialogs](https://material-ui.com/components/buttons/).

## Usage

```js
import {Block, Dialog } from 'cloudhub-components';
```
### Example

<playground scope={{Block, Text, Dialog, DialogHeader, DialogContent, DialogActions, Button}}>
{
`()=>{
    const [open, setOpen]=React.useState(false);
    const handleOpen=()=>{
        setOpen(!open);
    }
    return (<Block row>
        <Dialog open={open} onClose={handleOpen}>
            <DialogHeader />
            <DialogContent>
                <Text>Welcome to Nairobi</Text>
            </DialogContent>
        </Dialog>
        <Button contained color="primary" onClick={handleOpen}>
            Open Dialog
        </Button>
    </Block>)
}`
}
</playground>



## Props



<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>open</td><td>Whether dialog is open</td><td>false</td></tr>
            <tr><td>onClose</td><td>called when dialog is closed</td><td>false</td></tr>
            <tr><td>minHeight</td><td>minHeight of Dialog</td><td>false</td></tr>
            <tr><td>fullScreen</td><td>Whether dialog should fill the screen</td><td>false</td></tr>
            <tr><td>maxWidth</td><td>one of sm, md, lg, xl</td><td>lg</td></tr>
            <tr><td>children</td><td>DialogHeader, DialogTabs, DialogActions, DialogContent</td><td>lg</td></tr>
            <tr><td>animation</td><td>one of slide,..</td><td>slide</td></tr>
        </tbody>
    </table>
</Block>