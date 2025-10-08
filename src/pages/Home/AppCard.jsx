import React from 'react';

const AppCard = ({appData}) => {
    console.log(appData);
    
    return (
        <div className='max-w-[1440px] mx-auto'>
            {
                appData.title
            }
        </div>
    );
};

export default AppCard;