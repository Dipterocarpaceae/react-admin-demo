import { Card, CardContent } from '@mui/material';
import RuleIcon from '@mui/icons-material/Rule';
import {
    FilterList,
    FilterListItem,
    FilterLiveSearch,
    SavedQueriesList,
} from 'react-admin';

const Aside = () => {

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

                <FilterList
                    label="Completed"
                    icon={<RuleIcon />}
                >
                    <FilterListItem
                        label="Yes"
                        value={{ completed: true }}
                    />

                    <FilterListItem
                        label="No"
                        value={{ completed: false }}
                    />
                </FilterList>

            </CardContent>
        </Card>
    );
};

export default Aside;