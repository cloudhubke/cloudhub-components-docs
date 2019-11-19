---
id: image
title: Image
sidebar_label: Image
---

## Image


import {Block, Image } from 'cloudhub-components';
import {sizes} from '../../../theme';

Image component is implemented from the [Material-UI Images](https://material-ui.com/components/buttons/).

## Usage

```js
import {Block, Image } from 'cloudhub-components';
```
### Example

<playground scope={{Block, Image }}>
{
`<Block row wrap>
    <Image image="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80" xs/>
     <Image image="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80" sm/>
      <Image image="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80" md />
        <Image image="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80" lg rounded />
     <Image image="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80" />

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
            <tr><td>xs, sm, md,  lg  </td><td>65, 150, 380, 720</td><td>xs</td></tr>
            <tr><td>square </td><td>perfect square</td><td>true</td></tr>
            <tr><td>circle </td><td>perfect circle</td><td>false</td></tr>
            <tr><td>rounded </td><td>Rounded corders</td><td>false</td></tr>
            <tr><td>raised </td><td>shadow</td><td>xs</td></tr>
            <tr><td>fluid </td><td>fill container with objectFit</td><td>xs</td></tr>
        </tbody>
    </table>
</Block>