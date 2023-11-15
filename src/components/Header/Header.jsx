import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon, XMarkIcon, HomeModernIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='flex justify-evenly gap-5 items-center my-5'>

            <div className='flex items-center'>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                        {
                            open == true ? <XMarkIcon className="h-6 w-6 text-blue-500" />
                                : <Bars3Icon className="h-6 w-6 text-blue-500" />
                        }
                    </span>
                </div>

                <h2 className='text-xl font-extrabold border-cyan-400 border-l-4 '>
                    Career-<span className='text-cyan-400 border-blue-400 border-r-4'>Compass</span>
                </h2>
            </div>

            <div className='flex items-center gap-20'>
                <ul className={`nav-link sm:flex absolute md:static duration-500 py-2 ${open ? 'top-14 left-10' : '-top-36 left-10'}`}>
                    <ActiveLink to='/'><HomeModernIcon className="h-6 w-6 text-blue-500" /></ActiveLink>
                    <ActiveLink to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink to='/appliedJob'>Applied Job</ActiveLink>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                </ul>

                <button className='btn-Apply font-bold text-white'>Start Applying</button>
            </div>

        </nav>
    );
};

export default Header;