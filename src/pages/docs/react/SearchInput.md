---
id: search-input
title: SearchInput
sidebar_label: SearchInput
---

## SearchInput

import {Block, SearchInput } from '@cloudhub-ux/core';
import {sizes} from '../../../theme';

SearchInput component is implemented from the [Material-UI TextArea](https://material-ui.com/components/textarea).

## Usage

```js
import { Block, SearchInput } from '@cloudhub-ux/core';
```

### Example

<playground scope={{Block, SearchInput}}>
{
`<Block row> <SearchInput /> </Block>`
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
            <tr><td>onSubmit</td><td>Called when the righComponent is clicked</td><td></td></tr>
            <tr><td>rightComponent</td><td>Button to display as right adornment</td><td></td></tr>
            <tr><td>leftComponent</td><td>Button to display as left adornment (displays only on mobile view) </td><td></td></tr>
        </tbody>
    </table>
</Block>
