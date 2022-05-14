---
id: ck-editor
title: CKEditor
sidebar_label: CKEditor
---

## CKEditor

import {Block, Field, Form } from '@cloudhub-ux/core';
import {sizes} from '../../../theme';

CKEditor component is implemented from the [CKEditor](https://ckeditor.com/docs/ckeditor5).

## Usage

```
import CKEditor from '@cloudhub-ux/core/CKEditor';
```

## Usage with Form

```js
import CKEditor from '@cloudhub-ux/core/CKEditor';
<Form
  onSubmit={() => {}}
  initialValues={{ Description: 'Hello Africa' }}
  render={() => {
    return (
      <Field
        label="Description"
        type="text"
        name="Description"
        component={CKEditor}
        imageplugin
        tableplugin
      />
    );
  }}
/>;
```

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>uploadUrl</td><td>Url Endpoint for image uploads. Must return a plain object with url property</td><td>/fileapi/upload/editorimage</td></tr>
            <tr><td>value</td><td>Value of current content in html format</td><td></td></tr>
            <tr><td>imageplugin</td><td>Whether imageplugin is enabled</td><td>false</td></tr>
            <tr><td>headingplugin</td><td>Whether heading plugin is enabled</td><td>false</td></tr>
            <tr><td>mediaplugin</td><td>Whether media plugin is enabled</td><td>false</td></tr>
            <tr><td>tableplugin</td><td>Whether table plugin is enabled</td><td>false</td></tr>
            <tr><td>onFocus</td><td>Called on focusing</td><td>false</td></tr>
            <tr><td>onChange</td><td>onChange is called when content changes</td><td>null</td></tr>
            <tr><td>onUpdate</td><td>Can be used to track changes, count and outputs Words, Characters</td><td>null</td></tr>
        </tbody>
    </table>
</Block>
