---
id: alert
title: Alert
sidebar_label: Alert
---

## Alert

import {Block, Text, Alert } from 'cloudhub-components';
import {sizes} from '../../../theme';


Alert component is implemented from the Antd Alert component.

## Usage

```js
import {Block, Alert } from 'cloudhub-components';
```
### Example

<playground scope={{Block, Text, Alert}}>
{
`<Block>
    <Alert message={'Registration successfull'}/>
    <Alert success message={'Registration successfull'}/>
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
            <tr><td>message</td><td>Message</td><td></td></tr>
            <tr><td>description</td><td>Description of the message</td><td></td></tr>
            <tr><td>closable</td><td>Whether alert is closable</td><td>true</td></tr>
            <tr><td>onClose</td><td>onClose event function</td><td>null</td></tr>
            <tr><td>showIcon</td><td>Whether to show icon</td><td>true</td></tr>
            <tr><td>type</td><td>one of info, success, danger, warning, error  </td><td>info</td></tr>
        </tbody>
    </table>
</Block>