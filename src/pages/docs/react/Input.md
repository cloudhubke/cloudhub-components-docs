---
id: input
title: Input
sidebar_label: Input
---

## Input

import {Block, Form, Field, Input } from '@cloudhub-ux/core';
import {sizes} from '../../../theme';

Input component is implemented from the [Material-UI Inputs](https://material-ui.com/components/buttons/).

## Usage

```js
import { Block, Input } from '@cloudhub-ux/core';
```

### Example

<playground scope={{Block, Form, Field, Input}}>
{
`<Block row> <Form onSubmit={() => {}} initialValues={{ FirstName: "Angela" }} render={() => { return ( <Field label="First Name" type="text" name="FirstName" component={Input} /> ); }} /> </Block>`
}
</playground>

## Outside a form

```js
<Input onChange={handleChange} />
```

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>value</td><td>Current value of input</td><td></td></tr>
            <tr><td>onChange</td><td>called after input changed</td><td></td></tr>
        </tbody>
    </table>
</Block>
