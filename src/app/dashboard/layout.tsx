import React from 'react';

const DashboardLayout = ({children}) => {
    
    return (
        <div>
            <div className="min-h-screen">{children}</div>
        </div>
    );
};

export default DashboardLayout;