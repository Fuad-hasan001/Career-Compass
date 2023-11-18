import React, { useState } from 'react';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon, XMarkIcon, HomeModernIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='flex justify-evenly items-center'>

            <div className='flex items-center'>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                        {
                            open == true ? <XMarkIcon className="h-6 w-6 text-blue-500" />
                                : <Bars3Icon className="h-6 w-6 text-blue-500" />
                        }
                    </span>
                </div>

                <h2 className='text-xl flex font-extrabold '>
                    Career-<span className='text-cyan-400'>Compass</span>
                </h2>
            </div>

            <div className='flex'>
                <ul className={`nav-link sm:flex absolute md:static duration-500 py-2 ${open ? 'top-14 left-5' : '-top-36 left-5'}`}>
                    <ActiveLink to='/'><HomeModernIcon className="h-6 w-6 text-blue-500" /></ActiveLink>
                    <ActiveLink to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink to='/appliedJob'>Applied Job</ActiveLink>
                    <ActiveLink to='/blogs'>Blog</ActiveLink>
                    <ActiveLink to='/details'>Job Details</ActiveLink>
                </ul>

            </div>
                <button className='btn-Apply font-bold text-white'>Start Applying</button>

        </nav>
    );
};

export default Header;