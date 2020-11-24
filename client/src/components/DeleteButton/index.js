import React from 'react';


const DeleteButton = () => {
    return (
        <Button
                as="div"
                color="red"
                floated="right"
                onClick={() => setConfirmOpen(true)}
            >
                <Icon name="trash" style={{ margin: 0 }} />
        </Button>

    )
}

export default DeleteButton;
