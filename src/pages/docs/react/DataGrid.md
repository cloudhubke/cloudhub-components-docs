---
id: datagrid
title: DataGrid
sidebar_label: DataGrid
---

## DataGrid

import {Block } from '@cloudhub-ux/core';
import SimpleDataGrid from '@cloudhub-ux/core/datagrid/SimpleDataGrid';
import FullDataGrid from '@cloudhub-ux/core/datagrid/FullDataGrid';
import RemoteDataGrid from '@cloudhub-ux/core/datagrid/RemoteDataGrid';
import {sizes} from '../../../theme';

DataGrid component is implemented from the DevExpress DataGrid

## Usage

```js
import SimpleDataGrid from '@cloudhub-ux/core/datagrid/SimpleDataGrid';
import FullDataGrid from '@cloudhub-ux/core/datagrid/FullDataGrid';
import RemoteDataGrid from '@cloudhub-ux/core/datagrid/RemoteDataGrid';
import FullDataGridWithDetailView from '@cloudhub-ux/core/datagrid/FullDataGridWithDetailView';
import RemoteDataGridWithDetailView from '@cloudhub-ux/core/datagrid/RemoteDataGridWithDetailView';
```

### Simple Datagrid

<playground scope={{Block, SimpleDataGrid}}>
{
`()=>{ const users = [ { "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "address": { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" } }, "phone": "1-770-736-8031 x56442", "website": "hildegard.org", "company": { "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets" } }, { "id": 2, "name": "Ervin Howell", "username": "Antonette", "email": "Shanna@melissa.tv", "address": { "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771", "geo": { "lat": "-43.9509", "lng": "-34.4618" } }, "phone": "010-692-6593 x09125", "website": "anastasia.net", "company": { "name": "Deckow-Crist", "catchPhrase": "Proactive didactic contingency", "bs": "synergize scalable supply-chains" } } ]; const columns = [ {name: 'name'}, {name: 'username'}, {name: 'email'}, ] return(<Block flex={false} style={{height: 400}}> <SimpleDataGrid columns={columns} rows={users}/> </Block> ) }`
}
</playground>

### Full Datagrid

<playground scope={{Block, FullDataGrid}}>
{
`()=>{ const users = [ { "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "address": { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" } }, "phone": "1-770-736-8031 x56442", "website": "hildegard.org", "company": { "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets" } }, { "id": 2, "name": "Ervin Howell", "username": "Antonette", "email": "Shanna@melissa.tv", "address": { "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771", "geo": { "lat": "-43.9509", "lng": "-34.4618" } }, "phone": "010-692-6593 x09125", "website": "anastasia.net", "company": { "name": "Deckow-Crist", "catchPhrase": "Proactive didactic contingency", "bs": "synergize scalable supply-chains" } } ]; const columns = [ {name: 'name'}, {name: 'username'}, {name: 'email'}, ] return(<Block flex={false} style={{height: 400}}> <FullDataGrid columns={columns} rows={users}/> </Block> ) }`
}
</playground>

## RemoteDataGrid

Used to fectch data remotely.

#Usage

<playground scope={{RemoteDataGrid, Block}}>
{
`()=>{ const cols = [ {name: 'name', title: 'Full Name'}, {name: 'username'}, {name: 'email'}, ] const columnWidths = [ {columnName: 'name', width: 120}, {columnName: 'username', width: 150}, {columnName: 'email', width: 150} ]; return ( <Block flex={false} style={{height: 700, overflowY:'auto'}}> <RemoteDataGrid title="Users" url={'https://jsonplaceholder.typicode.com/users'} columns={cols} columnWidths={columnWidths} allowColumnResizing={false} onAdd={() => null} onDeleteRows={()=>null} onEdit={()=>{}} /> </Block> ) }`
}
</playground>

## rowComponent

```js
const rowComponent = ({ row, ...restProps }) => <Table.Row {...restProps} />;
```

## cellComponent

```js
const cellComponent = ({ row, column }) => (
  <TableCell>
    {`${typeof row[column.name] === 'undefined' ? '' : row[column.name]}`}
  </TableCell>
);
```

## Permissions

```js
{
    allowadd: true,
    allowedit: true,
    allowdelete: true,
    allowprint: true
  }
```

## Header

```js
const Header = ({ header, permissions, onSearch, queryString, ...props }) => {
  if (header) {
    return (
      <Block flex={false}>
        {header({
          ...props,
          ...permissions,
          queryString,
          onSearch,
        })}
      </Block>
    );
  }
  return (
    <Block flex={false}>
      <TableHeaderBar
        permissions={permissions}
        title={props.title}
        onSearchChange={onSearch}
        onAdd={props.onAdd}
        onRefresh={props.onRefresh}
        onPrint={props.onPrint}
      />
    </Block>
  );
};
```

## Props

<Block>
    <table>
        <thead>
            <tr><th>prop</th><th>Desc/Equivalent</th><th>Default</th></tr>
        </thead>
        <tbody>
            <tr><td>title</td><td>Title of the Grid</td><td>false</td></tr>
            <tr><td>columns</td><td>Columns to display</td><td>[]</td></tr>
            <tr><td>header</td><td>Replace default header</td><td>See above</td></tr>
            <tr><td>hiddencolumns</td><td>Hidden columns</td><td>[]</td></tr>
            <tr><td>columnWidths</td><td>Width  of columns</td><td>[]</td></tr>
            <tr><td>allowColumnResizing</td><td>Whether to allow resizing</td><td>false</td></tr>
            <tr><td>detailTemplate</td><td>detailView component for FullDataGridWithDetailView and RemoteDataGridWithDetailView </td><td>false</td></tr>
            <tr><td>rowComponent</td><td>Component to display each row</td><td>see above</td></tr>
            <tr><td>cellComponen</td><td>Component to display cell</td><td>see above</td></tr>
            <tr><td>actionsComponent</td><td>Component to display actions to be performed in a row</td><td>false</td></tr>
            <tr><td>onEdit</td><td>Function to call when edit button is clicked</td><td>()=>null</td></tr>
            <tr><td>onDeleteRows</td><td>Function to call when delete is confirmed</td><td>()=>null</td></tr>
            <tr><td>onCancelEdit</td><td>Function to call when edit is canceled</td><td>()=>null</td></tr>
            <tr><td>onChangeSelection</td><td>Function to call when rows are selected</td><td>()=>null</td></tr>
            <tr><td>onView</td><td>Function to call when view button is clicked</td><td>false</td></tr>
            <tr><td>onAdd</td><td>Function to call when add button is clicked</td><td>()=>null</td></tr>
            <tr><td>onPrint</td><td>Function to call when print button is clicked</td><td>()=>null</td></tr>
            <tr><td>url</td><td>Url to fetch data from</td><td>'/'</td></tr>
            <tr><td>axiosinstance</td><td>Axios instance for fetching. Useful for including headers</td><td>axios.create()</td></tr>
            <tr><td>keyExtractor</td><td>Extract primary column</td><td>row => row.id,</td></tr>
            <tr><td>dataExtractor</td><td>Function to extract data</td><td>data => data.items || data,</td></tr>
            <tr><td>countExtractor</td><td>function to get remote count of data</td><td>data => data.totalCount</td></tr>
            <tr><td>permissions</td><td>Object for permissions</td><td>See above</td></tr>
            <tr><td>ref</td><td>ref of grid</td><td></td></tr>
        </tbody>
    </table>
</Block>
