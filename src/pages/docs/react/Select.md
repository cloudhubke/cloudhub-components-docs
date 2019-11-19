---
id: select
title: Select
sidebar_label: Select
---

## Select


import {Block } from 'cloudhub-components';
import {StaticListSelector, RemoteSelector} from 'cloudhub-components/dist/selectors'
import {sizes} from '../../../theme';

Select component is implemented from the [React-select](https://react-select.com).

## Usage

```js
import {StaticListSelector, RemoteSelector} from 'cloudhub-components/dist/selectors'

```
### Example

<playground scope={{Block, StaticListSelector}}>
{
`<Block row>
    <StaticListSelector key="1" options={['Male', 'Female']} />
</Block>`
}
</playground>

<playground scope={{Block, StaticListSelector}}>
{
`<Block row>
    <StaticListSelector key="2" options={[{name: 'Ben', age: 20}, {name: 'Angie', age: 5}]} labelExtractor={row=>row.name}/>
</Block>`
}
</playground>


## Usage in a form

```js
 import CKEditor from 'cloudhub-components/dist/CKEditor';
    <Form
      onSubmit={() => {}}
      initialValues={{ }}
      render={() => {
        return (
          <Field
            label="Gender"
            type="text"
            name="Gender"
            component={StaticListSelector}
            options={['Male', 'Female']}
          />
        );
      }}
    />
```

## RemoteSelector

<playground scope={{Block, RemoteSelector}}>
{
`<Block row>
    <RemoteSelector key="3" url={'https://jsonplaceholder.typicode.com/users'} 
            labelExtractor={row=>row.name}
            valueExtractor={row=>({name: row.name, email: row.email, username: row.username})}
            />
</Block>`
}
</playground>


## Props
<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>options</td><td>Options of the select</td><td>[]</td></tr>
            <tr><td>labelExtractor</td><td>Funtion to extract label</td><td>(row)=>row</td></tr>
            <tr><td>valueExtractor</td><td>Funtion to extract value to return</td><td>(row)=>row</td></tr>
            <tr><td>onChange</td><td>Funtion to call when value changed</td><td>(row)=>valueExtractor(row)</td></tr>
            <tr><td>onSelectChange</td><td>Funtion to current selected row</td><td>(row)=>row</td></tr>
            <tr><td>isMulti</td><td>Whether to allow multiple selection</td><td>false</td></tr>
            <tr><td>url (for RemoteSelector)</td><td>url Endpoint for getting data</td><td>false</td></tr>
             <tr><td>axiosinstance</td><td>Axios instance for fetching. Useful for including headers</td><td>axios.create()</td></tr>
        </tbody>
    </table>
</Block>