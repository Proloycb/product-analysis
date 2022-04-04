import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-center m-5'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/reviews'>Reviews</CustomLink>
            <CustomLink to='/dashboard'>Dashboard</CustomLink>
            <CustomLink to='/blog'>Blog</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </div>
    );
};

export default Header;