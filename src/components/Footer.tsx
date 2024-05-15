import SOS from '@/assets/images/sos-cozinhas.png'
import InstagramIcon from '@/assets/images/instagram-icon.svg'
import Logo from '@/assets/images/logo.png'

export const Footer = () => {
  return (
    <section className='bg-neutral-900 px-[15px] pb-[56.41px] pt-7'>
      <div>
        <div className='flex flex-col items-center my-[41px]'>
          <img src={Logo} alt='Logo' className='w-[55.59px] h-[53px]' />
          <span className='text-white text-3xl'>entregação</span>
        </div>
        <ul className='text-white flex flex-col items-center gap-6'>
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <a>Seja um Entregador</a>
          </li>
          <li>
            <a>Seja um Padrinho</a>
          </li>
          <li>
            <a>Privacidade</a>
          </li>
        </ul>
        <div className='bg-white flex flex-col rounded-lg items-center py-[11px] gap-[10px] my-[24px]'>
          <span>Apoio:</span>
          <img src={SOS} alt='Cozinha SOS RS' className='w-[85px] h-[69px]' />
        </div>
        <div className='bg-[#262626] border border-[#212121] flex items-center justify-around h-[150px] rounded-xl'>
          <img src={InstagramIcon} alt='Ícone do Instagram' />
          <span className='text-white font-bold text-2xl'>@sos.cozinhas</span>
        </div>
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
