import React, { useMemo, CSSProperties } from 'react';
import { useGetList } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';


import { Order } from '../types';
import UserCount from './UserCount';
import TodoCount from './TodoCount';

// interface OrderStats {
//     revenue: number;
//     nbNewOrders: number;
//     pendingOrders: Order[];
// }

// interface State {
//     nbNewOrders?: number;
//     pendingOrders?: Order[];
//     recentOrders?: Order[];
//     revenue?: string;
// }

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

const Dashboard = () => {
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('lg')
    );

    const { data: users } = useGetList('users', { pagination: { page: 1, perPage: 300 } });
    const { data: todos } = useGetList('todos', { pagination: { page: 1, perPage: 300 } });

    let countUsers = users?.length;
    let countTodos = todos?.length;

    return isXSmall ? (
        <div>
            <div style={styles.flexColumn as CSSProperties}>
                <UserCount value={countUsers} />

                <VerticalSpacer />

                <TodoCount value={countTodos} />

                <VerticalSpacer />
            </div>
        </div>
    ) : isSmall ? (
        <div style={styles.flexColumn as CSSProperties}>
            <div style={styles.flex}>
                <UserCount value={countUsers} />
                <Spacer />
                <TodoCount value={countTodos} />
            </div>
        </div>
    ) : (
        <>
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                        <UserCount value={countUsers} />
                        <Spacer />
                        <TodoCount value={countTodos} />
                    </div>
                </div>
                <div style={styles.rightCol}>
                    <div style={styles.flex}>
                        <Spacer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
