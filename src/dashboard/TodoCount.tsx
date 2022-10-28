import * as React from 'react';
import DollarIcon from '@mui/icons-material/AttachMoney';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: number;
}

const TodoCount = (props: Props) => {
    const { value } = props;
    return (
        <CardWithIcon
            to="/todos"
            icon={DollarIcon}
            title={"Todo Count"}
            subtitle={value}
        />
    );
};

export default TodoCount;
