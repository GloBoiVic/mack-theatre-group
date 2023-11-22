import Image from 'next/image';
import { GiClown } from 'react-icons/gi';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Button } from '@nextui-org/button';

function Hero() {
	return (
		<section className='py-10'>
			<div className='flexCenter'>
				<div className='relative flexCenter flex-col'>
					<GiClown className='w-10 h-10 absolute right-[7rem] md:right-[10rem] lg:right-[18rem] top-0' />
					<h1 className='text-2xl md:text-4xl lg:text-6xl pt-10 tracking-tight'>
						MACK THEATRE GROUP
					</h1>
					<p className='text-center py-5 italic'>Inspiring change through acting</p>
					<Button color='primary' className='text-background rounded'>
						Donate and support us
					</Button>
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 container rounded-md py-20'>
				<Card className='rounded-none'>
					<CardHeader className='text-3xl md:text-4xl flexCenter font-bold tracking-tight pt-10'>
						Who We Are
					</CardHeader>
					<CardBody className='font-extralight px-5 text-stone-500 text-xl tracking-wide leading-7 md:leading-10 py-10'>
						Mack Theatre Group, deeply anchored in Milwaukee County, champions diversity, equity,
						and inclusion by interweaving theater with youth empowerment. Led by Dwayne Mack&apos;s
						transformative journey from adversity to inspiration, we actively encourage the ethos of
						&quot;acting instead of acting out.&quot; Through our Rehabilitative Theater initiative,
						we uplift a diverse range of youth affected by Wisconsin&apos;s criminal legal system,
						equipping them with life skills and a sense of belonging. Mack Theatre Group isn&apos;t
						just an organization; it&apos;s a movement dedicated to reshaping lives, one performance
						at a time.
					</CardBody>
				</Card>
				<div className='hidden lg:block w-full h-full'>
					<Image
						src='/headshot.jpg'
						alt='headshot'
						width={200}
						height={200}
						className='block w-full h-full object-cover object-center'
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
