import React from 'react';

const TabContext = React.createContext(null);

const TabProvide = ({ children }) => {
    const [getBottomType, setBottomType] = React.useState('');
    const [getHomeStackValue,setHomeStackValue]=React.useState('');
    return (
        <TabContext.Provider
            value={{
                getBottomType,
                setBottomType,
                getHomeStackValue,
                setHomeStackValue
            }}>
            {children}
        </TabContext.Provider>
    );
};

export { TabProvide, TabContext };
