import * as React from 'react';
import DollarIcon from '@mui/icons-material/AttachMoney';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: number;
}

const UserCount = (props: Props) => {
    const { value } = props;
    return (
        <CardWithIcon
            to="/users"
            icon={DollarIcon}
            title={"User Count"}
            subtitle={value}
        />
    );
};

export default UserCount;
