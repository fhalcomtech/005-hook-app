import React, {memo} from 'react';

const ShowIncrement = ({increment}) => {
   console.log('Run ShowIncrement ');
    return (
        <button
            className='btn btn-outline-primary'
        onClick={increment}
        >
            Add
        </button>
    );
};

export default memo(ShowIncrement);
