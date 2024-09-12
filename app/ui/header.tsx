'use client';
import Image from 'next/image';
import Link from 'next/link';


export default function Page(){
    return(
        <>
        <header className='px-[64px] py-[32px] flex justify-between items-center bg-white sticky top-0 z-[100]'>
            <Link href="/" className='max-w-[160px] max-h-[25px]'>
                <Image
                    alt='Abunda'
                    src='/logo.svg'
                    width={1000}
                    height={250}
                    objectFit='contain'
                />
            </Link>
            <div className='hidden md:block'>
                <Link href='/' className='py-[16px] px-[24px] flex gap-[12px] justify-center items-center bg-lime rounded-full border-green1 border'>
                    <div className='max-w-[24px] max-h-[24px]'>
                        <Image
                            alt='Abunda'
                            src='/whatsapp.svg'
                            width={1000}
                            height={250}
                            objectFit='contain'
                        />
                    </div>
                    <span className='font-semibold text-green2'>Unirme al test beta</span>
                </Link>
            </div>
        </header>
        </>
    );
}