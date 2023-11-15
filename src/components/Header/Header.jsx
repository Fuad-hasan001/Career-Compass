import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='flex justify-evenly gap-5 items-center'>

            <div className='flex items-center'>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                        {
                            open == true ? <XMarkIcon className="h-6 w-6 text-blue-500" />
                                : <Bars3Icon className="h-6 w-6 text-blue-500" />
                        }
                    </span>
                </div>

                <h2 className='text-xl'>
                    Career-<span className='text-cyan-400'>Compass</span>
                </h2>
            </div>

            <div className='flex items-center gap-20'>
                <ul className={`nav-link sm:flex absolute md:static duration-500 py-2 ${open ? 'top-14 left-10' : '-top-36 left-10'}`}>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink to='/appliedJob'>Applied Job</ActiveLink>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                </ul>

                <button className='btn-Apply'>Start Applying</button>
            </div>

        </nav>
    );
};

export default Header;