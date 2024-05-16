// import SOS from '@/assets/images/sos-cozinhas.png'
import InstagramIcon from '@/assets/images/icons/instagram-icon.svg'
import Logo from '@/assets/images/logo.svg'

export const Footer = () => {
  return (
    <section className='bg-neutral-900 px-[15px] pb-[56.41px] pt-7'>
      <div>
        <div className='flex justify-center gap-4 my-[41px]'>
          <img src={Logo} alt='Logo' className='w-[32.94px] h-[28.6]' />
          <span className='text-white text-3xl'>entregação</span>
        </div>
        <ul className='text-white flex flex-col items-center gap-5 min-[820px]:flex-row min-[820px]:justify-center min-[820px]:gap-9'>
          <li className='text-sm font-semibold'>
            <a>Sobre</a>
          </li>
          <li className='text-sm font-semibold'>
            <a>Seja um Entregador</a>
          </li>
          <li className='text-sm font-semibold'>
            <a>Seja um Padrinho</a>
          </li>
          <li className='text-sm font-semibold'>
            <a>Privacidade</a>
          </li>
        </ul>
        <div className='flex flex-col my-[24px] gap-2 min-[820px]:flex-row min-[820px]:justify-between min-[820px]:gap-11'>
          <div className='bg-white w-full flex flex-col rounded-lg items-center py-[11px] gap-[10px]'>
            <span className='uppercase font-medium'>Apoio:</span>
            <div className='flex flex-col items-center uppercase'>
              <span className='font-extrabold text-5xl'>SOS</span>
              <span className='font-bold'>CO.ZINHAS</span>
              <span className='font-extrabold text-5xl'>RS</span>
            </div>
          </div>
          <div className='bg-[#262626] border border-[#212121] flex items-center justify-around h-[150px] rounded-xl w-full'>
            <img src={InstagramIcon} alt='Ícone do Instagram' />
            <span className='text-white font-bold text-2xl'>@sos.cozinhas</span>
          </div>
        </div>
        <div className='border-t-2 border-neutral-800'>
          <div className='flex flex-col items-center mt-[22px] min-[820px]:flex-row min-[820px]:justify-center min-[820px]:gap-3'>
            <span className='text-neutral-300 font-normal text-sm'>© 2024 Entregação</span>
            <span className='text-neutral-300 font-normal text-sm'>Todos Os Direitos Reservados</span>
          </div>
        </div>
      </div>
    </section>
  );
};
