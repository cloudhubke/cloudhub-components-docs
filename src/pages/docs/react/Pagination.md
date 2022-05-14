---
id: pagination
title: Pagination
sidebar_label: Pagination
---

## Pagination

import {Block, Pagination } from '@cloudhub-ux/core';
import {sizes} from '../../../theme';

Pagination component can be used to count pages on a large dataset.

## Usage

```js
import { Block, Pagination } from '@cloudhub-ux/core';
```

### Example

<playground scope={{Block, Pagination}}>
{
`<Block row> <Pagination count={100} rowsPerPage={10} /> </Block>`
}
</playground>

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>count</td><td>No. of records</td><td>0</td></tr>
            <tr><td>rowsPerPage</td><td>No. of records in a page</td><td>0</td></tr>
            <tr><td>onChangePage</td><td>called when page is changed</td><td></td></tr>
        </tbody>
    </table>
</Block>
