---
id: phoe-input
title: PhoneInput
sidebar_label: PhoneInput
---

## PhoneInput

import {Block, PhoneInput } from '@cloudhub-ux/core';
import {sizes} from '../../../theme';

PhoneInput component for accepting and validating phone numbers

## Usage

```js
import { Block, PhoneInput } from '@cloudhub-ux/core';
```

### Example

<playground scope={{Block, PhoneInput}}>
{
`<Block row> <PhoneInput cca2="TZ"/> </Block>`
}
</playground>

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>value</td><td>value of input</td><td></td></tr>
            <tr><td>cca2</td><td>Default county code</td><td></td></tr>
            <tr><td>onPhoneChanged</td><td>Function called when a phone number is changed</td><td></td></tr>
        </tbody>
    </table>
</Block>
