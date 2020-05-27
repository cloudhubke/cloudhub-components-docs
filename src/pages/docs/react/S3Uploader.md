---
id: s3-uploader
title: S3Uploader
sidebar_label: S3Uploader
---

## S3Uploader

This component is used to upload files to AWS S3 bucket with signed url.

import S3Uploader from 'cloudhub-components/dist/uploaders/S3Uploader';

## Usage

```js
import S3Uploader  from 'cloudhub-components/dist/uploaders/S3Uploader';
```

<!-- <playground scope={{S3Uploader}}>
    {
        `<S3Uploader />`
    }
</playground> -->



## Usage in a from Field

```js
<Field
  label="Profile Picture"
  limit={1}
  name="ProfilePicture"
  component={S3Uploader}
  signaxiosinstance={axios}
  uploadaxiosinstance={axios}
  signurl="http://server.endpoint/sign"
  deleteurl="http://server.endpoint/delete"
/>
```


## Whats expected from the server?

```js

    {
    "fd": "/files/tvnlogo.png",
    "size": 23232,
    "filename": "tvnlogo.png",
    "name": "tvnlogo.png",
    "url": "/files/tvnlogo.png",
    "Location": "https://bucket.s3.region.amazonaws.com/files/tvnlogo.png",
    "uploaddate": 1573542177314,
    }

````

## S3ImageUpload

This component is used to upload files to AWS S3 bucket with signed url.

import S3ImageUpload from 'cloudhub-components/dist/uploaders/S3ImageUpload';
import {Form, Field} from 'cloudhub-components';

## Usage

```js
import S3ImageUpload  from 'cloudhub-components/dist/uploaders/S3ImageUpload';
```

<!-- <playground scope={{S3ImageUpload}}>
    {
        `<S3ImageUpload/>`
       
    }
</playground> -->



## Usage in a from Field

```js
<Field
  label="Profile Picture"
  limit={1}
  name="ProfilePicture"
  component={S3ImageUpload}
  signaxiosinstance={axios}
  uploadaxiosinstance={axios}
  signurl="http://server.endpoint"
  deleteurl="http://server.endpoint/delete"
  previewWidth={100}
  previewHeight={100}
  maxWidth={1200}
/>
```


## S3VideoUpload

This component is used to upload files to AWS S3 bucket with signed url.

import S3VideoUpload from 'cloudhub-components/dist/uploaders/S3VideoUpload';

## Usage

```js
import S3VideoUpload  from 'cloudhub-components/dist/uploaders/S3VideoUpload';
```

<!-- <playground scope={{S3VideoUpload}}>
    {
        `<S3VideoUpload />`
    }
</playground> -->



## Usage in a from Field

```js
<Field
  label="Profile Picture"
  limit={1}
  name="Video"
  component={S3VideoUpload}
  signaxiosinstance={axios}
  uploadaxiosinstance={axios}
  signurl="http://server.endpoint"
  deleteurl="http://server.endpoint/delete"
  maxWidth={1920}
  aspectratio={16/9}
/>
```

## Props
#### Common

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
          <td>accept</td>
          <td>file types to upload</td>
          <td> File */*, Image image/*, Video video/* </td>
        </tr>
        <tr>    
          <td>ACL</td>
          <td>amazon access control list (x-amz-acl)</td>
          <td>public-read</td>
        </tr>
        <tr>    
          <td>deleteurl</td>
          <td>end point to send delete requests to S3</td>
          <td></td>
        </tr>
        <tr>    
          <td>dirname</td>
          <td>s3 folder to upload file to</td>
          <td>files/</td>
        </tr>
        <tr>    
          <td>input</td>
          <td>input properties</td>
          <td></td>
        </tr>
        <tr>    
          <td>limit</td>
          <td>maximum number of files to upload</td>
          <td>1</td>
        </tr>
        <tr>    
          <td>maxSize</td>
          <td>maximum allowed file size in (MB for files and video, KB for Images)</td>
          <td></td>
        </tr>
        <tr>    
          <td>onChange</td>
          <td>called with new value (only required if not a prop of input)</td>
          <td></td>
        </tr>
        <tr>    
          <td>setuploading</td>
          <td>eventemiiter for uploading status (true when uploading starts, false when all uploads finish)</td>
          <td></td>
        </tr>
        <tr>    
          <td>signaxiosinstance</td>
          <td>axios instance to send signed url request</td>
          <td></td>
        </tr>
        <tr>    
          <td>signurl</td>
          <td>end point to generate signedurl</td>
          <td></td>
        </tr>
        <tr>    
          <td>uploadaxiosinstance</td>
          <td>axios instance to upload file to S3</td>
          <td></td>
        </tr>
        <tr>    
          <td>value</td>
          <td>value passed to component</td>
          <td></td>
        </tr>
      </tbody>
  </table>
</Block>


#### S3ImageUpload and S3VideoUpload

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
          <td>aspectratio</td>
          <td>aspect ratio of image/video (number)</td>
          <td>accepts any by default</td>
        </tr>
        <tr>    
          <td>maxWidth</td>
          <td>maximum allowed frame width</td>
          <td></td>
        </tr>
        <tr>    
          <td>minWidth</td>
          <td>minimum allowed frame width</td>
          <td></td>
        </tr>
        <tr>    
          <td>tolerance</td>
          <td>maximum allowed variations for aspect ratio (number)</td>
          <td>0</td>
        </tr>
      </tbody>
  </table>
</Block>


  #### S3ImageUpload

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
          <td>previewHeight</td>
          <td>height of image thumbnail</td>
          <td>150 * image aspect ratio</td>
        </tr>
        <tr>    
          <td>previewWidth</td>
          <td>width of image thumbnail</td>
          <td>150px</td>
        </tr>
      </tbody>
  </table>
</Block>


  #### S3VideoUpload

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
          <td>acceptThumb</td>
          <td>expected video thumbnail mime-type</td>
          <td>image/*</td>
        </tr>
        <tr>    
          <td>maxLength</td>
          <td>maximum video duration (seconds)</td>
          <td></td>
        </tr>
        <tr>    
          <td>minLength</td>
          <td>minimum video duration (seconds)</td>
          <td></td>
        </tr>
        <tr>    
          <td>thumbdirname</td>
          <td>S3 folder to store video thumbnail</td>
          <td>thumbnail/</td>
        </tr>
        <tr>    
          <td>thumbMaxSize</td>
          <td>maximum file size of video thumbnail (KB)</td>
          <td></td>
        </tr>
      </tbody>
  </table>
</Block>


