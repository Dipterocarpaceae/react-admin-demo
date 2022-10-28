import * as React from 'react';
import { List, Datagrid, TextField, EmailField, TextInput } from 'react-admin'
import Aside from './Aside';

const userFilters = [
    <TextInput source="id" label="Search" alwaysOn />
];

const UserList = () => {
    return (
        <List aside={<Aside />}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="username" />
                <EmailField source="email" />
            </Datagrid>
        </List>
    );
}

export default UserList;