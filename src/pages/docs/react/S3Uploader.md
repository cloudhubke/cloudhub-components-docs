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

<playground scope={{S3Uploader}}>
    {
        `<S3Uploader />`
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
          <td>signaxiosinstance</td>
          <td>axios instance to send signed url request</td>
          <td></td>
        </tr>
        <tr>    
          <td>uploadaxiosinstance/td>
          <td>axios instance to upload file to S3</td>
          <td></td>
        </tr>
        <tr>    
          <td>signurl</td>
          <td>end point to generate signedurl</td>
          <td></td>
        </tr>
        <tr>    
          <td>deleteurl</td>
          <td>end point to send delete requests to S3</td>
          <td></td>
        </tr>
        <tr>    
          <td>ACL</td>
          <td>amazon access control list (x-amz-acl)</td>
          <td>public-read</td>
        </tr>
        <tr>    
          <td>dirname</td>
          <td>s3 folder to upload file to</td>
          <td>files/</td>
        </tr>
        <tr>    
          <td>limit</td>
          <td>limit of files to upload</td>
          <td>1</td>
        </tr>
        <tr>    
          <td>maxSize</td>
          <td>maximum allowed file size in MB</td>
          <td></td>
        </tr>
        <tr>    
          <td>accept</td>
          <td>file types to upload</td>
          <td></td>
        </tr>
      </tbody>
  </table>
</Block>



## Usage in a from Field

```js
<Field label="Profile Picture" limit={1} name="ProfilePicture" component={S3Uploader} signaxiosinstance={axios} uploadaxiosinstance={axios} signurl="http://server.endpoint"/>
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