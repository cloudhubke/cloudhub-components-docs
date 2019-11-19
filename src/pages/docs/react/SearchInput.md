---
id: search-input
title: SearchInput
sidebar_label: SearchInput
---

## SearchInput


import {Block, SearchInput } from 'cloudhub-components';
import {sizes} from '../../../theme';

SearchInput component is implemented from the [Material-UI TextArea](https://material-ui.com/components/textarea).

## Usage

```js
import {Block, SearchInput } from 'cloudhub-components';
```
### Example

<playground scope={{Block, SearchInput}}>
{
`<Block row>
    <SearchInput />
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
            <tr><td>value</td><td>value</td><td></td></tr>
            <tr><td>onMenuClick</td><td>Called when menu icon is clicked</td><td></td></tr>
            <tr><td>onChange</td><td>Called when the input value is changed</td><td></td></tr>
        </tbody>
    </table>
</Block>