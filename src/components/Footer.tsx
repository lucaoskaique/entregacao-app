import SOS from '@/assets/images/sos-cozinhas.png'
import { InstagramIcon } from './Icons'
import { LogoIcon, LogoName } from './Logos'

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#about",
    label: "Sobre nós",
  },
  {
    href: "#Padrinho",
    label: "Seja um Padrinho",
  },
  {
    href: "#Entregador",
    label: "Seja um Entregador",
  },
  {
    href: "#Privacidade",
    label: "Privacidade",
  }
];

export const Footer = () => {
  return (
    <section className='bg-neutral-900 px-5 pb-[56.41px] pt-7'>
      <div>
        <div className='flex justify-center gap-x-4 items-center my-[41px]'>
          <LogoIcon color="white" />
          <LogoName color="white" />
        </div>
        <nav className='text-white flex min-[640px]:flex-row justify-center flex-col items-center gap-6'>
          {routeList.map(({ href, label }: RouteProps) => (
            <a
              rel="noreferrer noopener"
              key={label}
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>
        <section className='flex max-[640px]:flex-col flex-row justify-between gap-10 my-[24px]'>
          <div className='min-[640px]:w-[50%] text-black font-bold bg-white flex flex-col rounded-lg items-center py-[11px] gap-[10px]'>
            <span>Apoio:</span>
            <img src={SOS} alt='Cozinha SOS RS' className='w-[85px] h-[69px]' />
          </div>
          <div className='min-[640px]:w-[50%] bg-[#262626] border border-[#212121] flex items-center  justify-center gap-x-4 h-[150px] rounded-xl'>
            <InstagramIcon />
            <span className='text-white font-bold text-2xl'>@sos.cozinhas</span>
          </div>
        </section>
        <div className='text-neutral-300 border-t-2 border-neutral-800'>
          <div className='flex flex-col items-center mt-[22px]'>
            <span>© 2024 Entregação</span>
            <span>Todos Os Direitos Reservados</span>
          </div>
        </div>
      </div>
    </section>
  );
};
