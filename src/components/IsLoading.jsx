import React from 'react';
import "../styles/loading.css"
const IsLoading = () => {
    return (
        <div className='overlay'>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default IsLoading;