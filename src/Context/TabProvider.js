import React from 'react';

const TabContext = React.createContext(null);

const TabProvide = ({ children }) => {
    const [getBottomType, setBottomType] = React.useState('');
    return (
        <TabContext.Provider
            value={{
                getBottomType,
                setBottomType
            }}>
            {children}
        </TabContext.Provider>
    );
};

export { TabProvide, TabContext };
