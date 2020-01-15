---
id: toastr
title: toastr
sidebar_label: toastr
---

## toastr


import {Block, Text, Button, toastr } from 'cloudhub-components';

toastr component is implemented from the [react-toastify](https://github.com/fkhadra/react-toastify).


## Usage

```js
import {Block, toastr, ToastContainer } from 'cloudhub-components';
```
### Example

<playground scope={{Block, Button, Text, toastr}}>
{
`()=>{
    const openNormal=()=>{
        toastr(() => (
            <Block card flex={false}>
                <Text h4>Toastr easily WORKS!</Text>
            </Block>
        ));
    }
    const openSuccess=()=>{
        toastr.success(() => (
            <Block card flex={false}>
                <Text h4>Toastr easily WORKS!</Text>
            </Block>
        ));
    }
    const openInfo=()=>{
        toastr.info(() => (
            <Block card flex={false}>
                <Text h4>It WORKED</Text>
            </Block>
        ));
    }
    const openWarn=()=>{
        toastr.warn(() => (
            <Block card flex={false}>
                <Text h4>Are you sure?</Text>
            </Block>
        ));
    }
    const openError=()=>{
        toastr.error(() => (
            <Block card flex={false}>
                <Text h4>You cant do that</Text>
            </Block>
        ));
    }
    return (<Block row>
                <Button contained onClick={openNormal}>
                    Open Tastr
                </Button>
                 <Button contained color="success" onClick={openSuccess} style={{marginLeft:10}}>
                    Success Toastr
                </Button>
                <Button contained color="info" onClick={openInfo} style={{marginLeft:10}}>
                    Info Toastr
                </Button>
                <Button contained color="warning" onClick={openWarn} style={{marginLeft:10}}>
                    Warning Toastr
                </Button>
                <Button contained color="danger" onClick={openError} style={{marginLeft:10}}>
                    Error Toastr
                </Button>
            </Block>)
}`
}
</playground>



## Props

See the props of react-toastify

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>content</td><td>String or react node</td><td></td></tr>
            <tr><td>options</td><td>Object with set of options. Please refer to toastr options in the react-toastify documentation</td><td></td></tr>
        </tbody>
    </table>
</Block>