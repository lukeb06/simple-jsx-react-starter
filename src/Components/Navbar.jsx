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

const parseHref = (href) => {
    return `href="${href}"`;
};

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState(window.location.pathname);

    useEffect(() => {
        setCurrentPage(parseHref(window.location.pathname));
    }, []);

    const setPage = (e) => {
        setCurrentPage(parseHref(e.target.getAttribute('href')));
    };

    return (
        <>
            <style>{`
                nav a[${currentPage}] {
                    position:relative;
                }

                nav a[${currentPage}]:after {
                    content: '';
                    display: block;
                    height: 2px;
                    width: 80%;
                    background-color: hsl(var(--primary));
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    z-index:100;
                    transform:translateX(-50%);
                }
            `}</style>
            <NavigationMenu className="sticky top-0 p-2 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <NavigationMenuList className="w-full">
                    <NavigationMenuItem>
                        <Button onClick={setPage} asChild variant="ghost">
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
        </>
    );
};

export default Navbar;
