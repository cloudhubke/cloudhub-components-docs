---
id: container
title: Container
sidebar_label: Container
---

## Container

import {Block, Container } from '@cloudhub-ux/core';
import {sizes} from '../../../theme';

Container component is implemented from the [Material-UI Container](https://material-ui.com/components/container).

## Usage

```js
import { Container } from '@cloudhub-ux/core';
```

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>row</td><td>flex row</td><td>false</td></tr>
            <tr><td>column</td><td>flex column</td><td>false</td></tr>
            <tr><td>wrap</td><td>flex wrap</td><td>false</td></tr>
            <tr><td>canter</td><td>flex justify canter</td><td>false</td></tr>
            <tr><td>middle</td><td>flex align center</td><td>false</td></tr>
            <tr><td>left, right</td><td>flex justify start, end</td><td>false</td></tr>
            <tr><td>top, bottom</td><td>flex alignItems start, end </td><td>false</td></tr>
            <tr><td>margin, padding</td><td>Accepts array or number for padding and margins</td><td>{[]}</td></tr>
        </tbody>
    </table>
</Block>
