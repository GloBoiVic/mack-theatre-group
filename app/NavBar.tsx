'use client';
import { NAV_LINKS } from './constants';
import { HiBars3 } from 'react-icons/hi2';
import { useState } from 'react';
import Link from 'next/link';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/navbar';

function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<Navbar maxWidth='2xl' onMenuOpenChange={setIsMenuOpen}>
			<div className='flex justify-between items-center w-full'>
				<NavbarBrand>
					<h1 className='text-2xl font-bold tracking-wide'>Mack Theatre Group.</h1>
				</NavbarBrand>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='md:hidden font-bold w-10 h-10'
				/>
			</div>

			<NavbarContent className='hidden md:flex'>
				<NavbarItem className='text-sm md:text-md'>
					{NAV_LINKS.map((link) => (
						<Link
							className='last:rounded last:bg-primary last:text-background last:hover:bg-primary/70 last:hover:no-underline hover:underline px-2 py-2'
							key={link.key}
							href={link.href}
						>
							{link.label}
						</Link>
					))}
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{NAV_LINKS.map((link) => (
					<NavbarMenuItem key={link.key} className='text-md'>
						<Link className='hover:font-bold hover:underline' href={link.href}>
							{link.label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}

export default NavBar;
