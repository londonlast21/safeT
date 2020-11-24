import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const DeleteButton = () => {
    return (
        <Button
                as="div"
                color="red"
                floated="right"
                // onClick={() => setConfirmOpen(true)}
            >
                <Icon name="trash" style={{ margin: 0 }} />
        </Button>

    )
}

export default DeleteButton;
