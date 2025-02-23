import React from 'react';

import { ReactNode } from 'react';

const DashboardLayout = ({children}: {children: ReactNode}) => {
    
    return (
        <div>
            <div className="min-h-screen">{children}</div>
        </div>
    );
};

export default DashboardLayout;