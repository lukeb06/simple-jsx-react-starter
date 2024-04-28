import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/Components/ui/navigation-menu';

import { navigationMenuTriggerStyle } from '@/Components/ui/navigation-menu';

import { ModeToggle } from '@/Components/mode-toggle.jsx';
import { Button } from '@/Components/ui/button';

const Navbar = () => {
    return (
        <NavigationMenu className="sticky top-0 p-2 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <NavigationMenuList className="w-full">
                <NavigationMenuItem>
                    <Button variant="ghost">
                        <Link to="/">Home</Link>
                    </Button>
                </NavigationMenuItem>

                <div className="flex flex-grow flex-row-reverse">
                    <NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuItem>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navbar;
