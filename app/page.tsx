import Header from "@/app/ui/header";
import styles from '@/app/ui/home.module.css';
import { Quicksand } from "next/font/google";

import Image from 'next/image';
import Link from 'next/link';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '600', '700'], });

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex flex-col">
      <section className="px-[24px] md:px-[64px]">
        <div className={`p-[64px] w-[auto] rounded-[64px] md:h-[840px] h-dvh ${styles.heroWrapper} flex justify-between`}>
          <div className="p-0 xl:p-[64px] h-[100%] flex flex-col gap-8 justify-center xl:justify-between items-start max-w-[515px] xl:max-w-[650px]">
            <h1 className={`${quicksand.className} text-white text-[42px] md:text-[64px] leading-tight`}><strong>Tu lugar <br />seguro</strong> para <br /> hablar de dinero <br /> y finanzas.</h1>
            <p className="text-white text-[20px]">Tus necesidades económicas son únicas y merecen una atención personalizada, a la medida, sin costos ocultos ni laaargos cursos.</p>
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
          <div className="pt-[200px] xl:pt-[50px] pb-[154px] xl:px-[64px] h-[100%] max-w-[460px] xl:max-w-[600px] hidden lg:flex items-end">
            <Image
              alt='Abunda chat'
              src='/heroChat.png'
              width={1000}
              height={250}
              objectFit='contain'
            />
          </div>
        </div>
      </section>
      <section className="px-[24px] md:px-[64px]">
        <div className="container mx-auto py-[256px] flex flex-col justify-center items-center gap-[32px]">
          <h2
            className={`${quicksand.className} text-green1 text-[42px] md:text-[64px] leading-tight text-center`}
          >
            Hablemos de dinero<br /><strong>sin tabúes.</strong>
          </h2>
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
      </section>
    </main>
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    </footer>
    </>
  );
}
