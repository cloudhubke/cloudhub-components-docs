---
id: check-box
title: CheckBox
sidebar_label: CheckBox
---

## CheckBox


import {Block, CheckBox } from 'cloudhub-components';
import {sizes} from '../../../theme';

CheckBox component is implemented from the [Material-UI Button](https://material-ui.com/components/button).

## Usage

```js
import {Block, CheckBox } from 'cloudhub-components';
```
### Example

<playground scope={{Block, CheckBox}}>
{
`<Block row>
   <CheckBox label="Agree"/>
   <CheckBox value={true}/>
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
            <tr><td>value</td><td>Value of checked</td><td>false</td></tr>
            <tr><td>label</td><td>Label of CheckBox</td><td>false</td></tr>
            <tr><td>disabled</td><td>Whether disabled</td><td>false</td></tr>
        </tbody>
    </table>
</Block>