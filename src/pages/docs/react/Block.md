---
id: block
title: Block
sidebar_label: Block
---

import {Block, Text} from '@cloudhub-ux/core';
import {sizes, colors} from '../../../theme';

## Block

A block is just a `div` element used to format layout using the flex layout attributes

## usage

```js
import { Block } from '@cloudhub-ux/core';
```

## example

<playground scope={{Block, Text}}>
{
`<Block color={colors.gray4} margin={sizes.margin} padding={sizes.padding} paper> <Text>Hello World</Text> </Block>`
}
</playground>

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
    <tr><td>absolute</td><td>absoulute position, fill</td><td>false</td></tr>
    <tr><td>flex</td><td>flex: 1</td><td>true</td></tr>
    <tr><td>row</td><td>flexDirection: 'row'</td><td>false</td></tr>
    <tr><td>column</td><td>flexDirection: 'column'</td><td>false</td></tr>
    <tr><td>wrap</td><td>flexWrap: 'wrap'</td><td>false</td></tr>
    <tr><td>center</td><td>justifyContent: 'center'</td><td>false</td></tr>
    <tr><td>middle</td><td>alignItems: 'center'</td><td>false</td></tr>
    <tr><td>left</td><td>justifyContent: 'flex-start'</td><td>false</td></tr>
    <tr><td>right</td><td>justifyContent:  'flex-end'</td><td>false</td></tr>
    <tr><td>top</td><td>alignItems: 'flex-start'</td><td>false</td></tr>
    <tr><td>bottom</td><td>alignItems: 'flex-end'</td><td>false</td></tr>
    <tr><td>margin</td><td>margin: margin</td><td>false</td></tr>
    <tr><td>padding</td><td>padding: padding</td><td>false</td></tr>
    <tr><td>card</td><td>Card format</td><td>false</td></tr>
    <tr><td>shadow</td><td>Add shadow</td><td>false</td></tr>
    <tr><td>shadowhover</td><td>onHover add shadow</td><td>false</td></tr>
    <tr><td>elevation</td><td>shadow elevation</td><td>false</td></tr>
    <tr><td>color</td><td>background color in hex</td><td>false</td></tr>
    <tr><td>space</td><td>justifyContent: between/around</td><td>false</td></tr>
    <tr><td>style</td><td>styleObject</td><td>{}</td></tr>
    <tr><td>animated</td><td>add animation</td><td>false</td></tr>
    <tr><td>paper</td><td>Material ui paper</td><td>false</td></tr>
    <tr><td>visible</td><td>visibility to trigger animation</td><td>false</td></tr>
      
      </tbody>
  </table>
</Block>
