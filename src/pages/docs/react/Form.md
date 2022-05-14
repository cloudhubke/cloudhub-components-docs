---
id: form
title: Form
sidebar_label: Form
---

## Form

import {Block, Form } from '@cloudhub-ux/core';
import {sizes} from '../../../theme';

Form component is implemented from the [React Final Form](https://github.com/final-form/react-final-form).

## Usage

```js
import { Block, Form, Field } from '@cloudhub-ux/core';
```

### Example

<playground scope={{Block, Form}}>
{
`<Block row> Form </Block>`
}
</playground>

## Form Props

Please check the [react-final-form Form props](https://github.com/final-form/react-final-form)

## Field Props

Implements the [react-final-form FieldProps](https://final-form.org/docs/react-final-form/types/FieldProps) and

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>label</td><td>Label of the field</td><td></td></tr>
            <tr><td>name</td><td>Name of the field</td><td></td></tr>
            <tr><td>required</td><td>Validate whether required</td><td>false</td></tr>
            <tr><td>number</td><td>Validate Number</td><td>false</td></tr>
            <tr><td>minValue</td><td>Validate minimum value</td><td></td></tr>
            <tr><td>maxValue</td><td>Validate maximum value</td><td></td></tr>
            <tr><td>minLength</td><td>Validate minimum character lendth</td><td></td></tr>
            <tr><td>maxLength</td><td>Validate maximum charater length</td><td></td></tr>
            <tr><td>maxLength</td><td>Validate maximum charater length</td><td></td></tr>
            <tr><td>flex</td><td>Wheter to flex</td><td>false</td></tr>
        </tbody>
    </table>
</Block>
