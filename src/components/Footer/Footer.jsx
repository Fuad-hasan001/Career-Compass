import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white rounded-lg p-20 mt-10'>
            <div className='grid grid-cols-3 justify-items-center gap-28 text-left '>
                    <div>
                        <h2 className='font-bold text-xl'>Career-Campus</h2>
                        <p className='text-sm text-gray-400'><small>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</small></p>
                        <img className='mt-3 w-28' src="/public/assets/icons/social.png" alt="" />
                    </div>

                    <div className='flex justify-evenly gap-20'>
                        <div>
                            <h4><small>Company</small></h4>
                            <ul>
                                <li><small>About Us</small></li>
                                <li><small>Work</small> </li>
                                <li><small>Latest News</small></li>
                                <li><small>Careers</small></li>
                            </ul>
                        </div>
                        <div>
                            <h4><small>Product</small></h4>
                            <ul>
                                <li><small>Prototype</small></li>
                                <li><small>Plans & Pricing</small></li>
                                <li><small>Customers</small></li>
                                <li><small>Integrations</small></li>
                            </ul>
                        </div>
                        <div>
                            <h4><small>Support</small></h4>
                            <ul>
                                <li><small>Help Desk</small>  Desk</li>
                                <li><small>Sales</small> </li>
                                <li><small>Become a Partner</small></li>
                                <li><small>Developers</small></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h4><small>Contact</small></h4>
                        <ul>
                            <li><small>524 Broadway , NYC</small></li>
                            <li><small>+1 77 - 978 - 5570</small></li>
                        </ul>
                    </div>
                </div>
                <hr className='border-x-gray-700 my-10 ' />
                
                <div className='text-xs text-gray-400 flex justify-between'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
                </div>
        </div>
    );
};

export default Footer;