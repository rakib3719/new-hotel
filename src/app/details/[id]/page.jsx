
'use client'

import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';
import DetailsPage from '@/app/[component]/detailsPage/DetailsPage';
import { useParams } from 'next/navigation';



const Detailpage = () => {

const params = useParams();




    return (
       <div>
         <aside
        className="relative h-[300px] flex flex-col justify-center items-center text-center text-white"
        style={{
            backgroundImage: `url('https://madebydesignesia.com/themes/almaris/images/background/3.webp')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}
    >
        {/* Title Section */}
        <h1 className="text-4xl font-bold uppercase">Details</h1>
        {/* Orange Line */}
        <div className="mt-2 w-24 h-1 bg-orange-500 mx-auto"></div>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center  space-x-2 mt-4 text-lg font-medium">
            <Link href="/" className="hover:underline">
                Home
            </Link>
            <FaAngleRight className="text-sm" />
            <span>Details</span>
        </div>
    </aside>

        <div className=''>

            <DetailsPage params={params}/>
        </div>
       </div>
    );
};

export default Detailpage;
