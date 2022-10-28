import * as React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
import Aside from './Aside';

const TodoList = () => {
    return (
        <List aside={<Aside />}>
            <Datagrid>
                <ReferenceField source="userId" reference="users" />
                <TextField source="id" />
                <TextField source="title" />
            </Datagrid>
        </List>
    );
}

export default TodoList;