---
id: text
title: Text
sidebar_label: Text
---

## Text

import { Block, Text } from '@cloudhub-ux/core';

import {sizes, colors} from '../../../theme';

Text component is implemented from a span component. The implementation is similar to Material ui's `<Typography />` component.

### Example

<playground scope={{Block, Text}}>
{
`<Block>
<Text h1>The big brown fox jumped over the lazy dog. </Text>
<Text h2>The big brown fox jumped over the lazy dog. </Text>
<Text h3>The big brown fox jumped over the lazy dog. </Text>
<Text h4>The big brown fox jumped over the lazy dog. </Text>
<Text h5>The big brown fox jumped over the lazy dog. </Text>
<Text h6>The big brown fox jumped over the lazy dog. </Text>
<br />
<Text header>The big brown fox jumped over the lazy dog. </Text>
<Text subHeader>The big brown fox jumped over the lazy dog. </Text>
<Text title>The big brown fox jumped over the lazy dog. </Text>
<Text subTitle>The big brown fox jumped over the lazy dog. </Text>

  <br />

<Text h4 italic>The big brown fox jumped over the lazy dog. </Text>
<Text bold>The big brown fox jumped over the lazy dog. </Text>
<Text header bold>The big brown fox jumped over the lazy dog. </Text>

  <br />
  <Text h3 strikethrough>The big brown fox jumped over the lazy dog. </Text>

<Text h4 underline>The big brown fox jumped over the lazy dog. </Text>

  <br />
  <Text h4 accent>The big brown fox jumped over the lazy dog. </Text>
  <Text small dark>The big brown fox jumped over the lazy dog. </Text>

</Block>`
}
</playground>

## Props

Material UI props and

<Block>
  <table>
    <thead>
      <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
    </thead>
    <tbody>
      <tr><td>h1</td><td>Heading 1 </td><td>false</td></tr>
      <tr><td>h2</td><td>Heading 2 </td><td>false</td></tr>
      <tr><td>h3</td><td>Heading 3 </td><td>false</td></tr>
      <tr><td>h4</td><td>Heading 4 </td><td>false</td></tr>
      <tr><td>h5</td><td>Heading 5 </td><td>false</td></tr>
      <tr><td>h6</td><td>Heading 6 </td><td>false</td></tr>
      <tr><td>bold</td><td>Bold </td><td>false</td></tr>
      <tr><td>small</td><td>Small Text </td><td>false</td></tr>
      <tr><td>italic</td><td>Italicize </td><td>false</td></tr>
      <tr><td>semibold</td><td>Semi bold</td><td>false</td></tr>
      <tr><td>accent</td><td>Accent color</td><td>false</td></tr>
      <tr><td>underline</td><td>Underline Text</td><td>false</td></tr>
      <tr><td>strikethrough</td><td>Strike through</td><td>false</td></tr>
      <tr><td>fullwidth</td><td>Take full width</td><td>false</td></tr>
      <tr><td>noWrap</td><td>Dont wrap</td><td>false</td></tr>
      <tr><td>spacing</td><td>Spacing of letters</td><td>0</td></tr>
      <tr><td>capttion</td><td>Caption style</td><td>false</td></tr>
      <tr><td>center</td><td>Center the text</td><td>false</td></tr>
      <tr><td>height</td><td>line-height</td><td>1</td></tr>
      <tr><td>button</td><td>Button Text</td><td>1</td></tr>
      <tr><td>transform</td><td>text-transform css property</td><td>none</td></tr>
      <tr><td>cropped</td><td>Cropped Top and Botton margins/paddings</td><td>false</td></tr>
      <tr><td>style</td><td>Style object to override default styles</td><td>{}</td></tr>
    </tbody>
  </table>
</Block>

## Colors you can pass as props

You can pass the following props.
<Block row wrap color={colors.gray}>
<Text accent>accent</Text>
<Text primary>primary</Text>
<Text secondary>secondary</Text>
<Text tertiary>tertiary</Text>
<Text black>black</Text>
<Text white>white</Text>
<Text gray>gray</Text>
<Text gray2>gray2</Text>
<Text dark>dark</Text>
<Text mistyWhite>mistyWhite</Text>
<Text milkyWhite>milkyWhite</Text>
<Text error>error</Text>
<Text clear>clear</Text>
<Text facebook>facebook</Text>
<Text transparent>transparent</Text>
<Text silver>silver</Text>
<Text steel>steel</Text>
<Text ricePaper>ricePaper</Text>
<Text frost>frost</Text>
<Text cloud>cloud</Text>
<Text windowTint>windowTint</Text>
<Text panther>panther</Text>
<Text charcoal>charcoal</Text>
<Text coal>coal</Text>
<Text bloodOrange>bloodOrange</Text>
<Text snow>snow</Text>
<Text ember>ember</Text>
<Text fire>fire</Text>
<Text drawer>drawer</Text>
<Text eggplant>eggplant</Text>
<Text twitterColor>twitterColor</Text>
<Text facebookColor>facebookColor</Text>
<Text googleColor>googleColor</Text>
<Text linkedinColor>linkedinColor</Text>
<Text pinterestColor>pinterestColor</Text>
<Text youtubeColor>youtubeColor</Text>
<Text tumblrColor>tumblrColor</Text>
<Text behanceColor>behanceColor</Text>
<Text dribbbleColor>dribbbleColor</Text>
<Text redditColor>redditColor</Text>
<Text instagramColor>instagramColor</Text>
<Text success>success</Text>
<Text info>info</Text>
<Text rose>rose</Text>
<Text warning>warning</Text>
<Text danger>danger</Text>
</Block>

Please refer to the [Colors Object](../getting-starte/colors) for more
