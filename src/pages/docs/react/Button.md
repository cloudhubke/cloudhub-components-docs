---
id: button
title: Button
sidebar_label: Button
---

## Button


import {Block, Button, Text } from 'cloudhub-components';
import {sizes} from '../../../theme';

Button component is implemented from the [Material-UI Buttos](https://material-ui.com/components/buttons/).

### Example

<playground scope={{Block, Button, Text}}>
  {
  `<Block row>
    <Button contained color={colors.primary}> 
      <Text white>Click me</Text>
    </Button> 
     <Button rounded color={colors.success}> 
      <Text white>Click me</Text>
    </Button> 
    <Button> 
      <Text>Click me</Text>
    </Button> 
  </Block>`
  }
</playground>



## Props

Material UI props and


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
            <td>contained</td>
            <td>variant="contained"</td>
            <td>false</td>
         </tr>
        <tr>    
            <td>color</td>
            <td>color="#FCFCFC"</td>
            <td></td>
         </tr>
          <tr>    
            <td>rounded</td>
            <td>Rounded corners</td>
            <td>false</td>
         </tr>
          <tr>    
            <td>large</td>
            <td>Large button</td>
            <td>false</td>
         </tr>
          <tr>    
            <td>medium</td>
            <td>Medium Button</td>
            <td>true</td>
         </tr>
           <tr>    
            <td>small</td>
            <td>Small Button</td>
            <td>false</td>
         </tr>
        </tbody>
    </table>
</Block>

Other props: outlined, 