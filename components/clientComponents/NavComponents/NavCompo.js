"use client"
import React, { useState } from 'react';

const useNavCompo = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
    return 
       { 
        mobileOpen,
        handleDrawerToggle
    }
    
};

export default useNavCompo;