import { Card, CardContent } from '@mui/material';
import {
    FilterLiveSearch,
    SavedQueriesList,
    useRecordContext,
} from 'react-admin';

const Aside = () => {
    const record = useRecordContext();

    return (
        <Card
            sx={{
                display: { xs: 'none', md: 'block' },
                order: -1,
                width: '15em',
                mr: 2,
                alignSelf: 'flex-start',
                mt: 9
            }}
        >
            <CardContent sx={{ pt: 1 }}>

                <FilterLiveSearch />

                <SavedQueriesList />

            </CardContent>
        </Card>
    );
};

export default Aside;