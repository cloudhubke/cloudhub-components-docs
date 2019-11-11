---
id: images-upload
title: ImagesUpload
sidebar_label: ImagesUpload
---

## ImagesUpload

This component is used to upload images to the server or cloud.

Its a custom component powered by antd [Upload component](https://ant.design/components/upload/)

import ImagesUpload from 'cloudhub-components/dist/uploaders/ImagesUpload';

## Usage

```js
import ImagesUpload  from 'cloudhub-components/dist/uploaders/ImagesUpload';
```

<playground scope={{ImagesUpload}}>
    {
        `<ImagesUpload />`
    }
</playground>

## Props

<Block>
  <table>
      <thead>
          <tr>    
          <th>prop</th>
          <th>Desc/Equivalent</th>
          <th>Default</th>
          </tr>
      </thead>
      <tbody>
        <tr>    
          <td>limit</td>
          <td>limit of files to upload</td>
          <td>1</td>
        </tr>
        <tr>    
          <td>url</td>
          <td>end point</td>
          <td>/fileapi/upload/image</td>
        </tr>
      </tbody>
  </table>
</Block>



## Usage in a from Field

```js
<Field label="Profile Picture" limit={1} name="ProfilePicture" component={ImagesUpload}/>
```