import React from 'react';

const Message = ({ variant, childern }) => {
    return (
        <div className='d-flex justify-content-center col-12'>
            <div className={`alert ${variant}`}>
                {childern}
            </div>
        </div>
    );
};

Message.defaultProps = {
    variant: 'alert-info',
};

export default Message;