import { useState } from 'react'
import SrcBgVector from '../../assets/images/background-vector-hero.svg'

import { HeartIcon, TruckIcon } from './utils/icons'
import Arrow from '@/assets/images/arrow-down-right.svg'

import ButtonWpp from './button-wpp-hero'

export const Hero = () => {
  const [text1, setText1] = useState<boolean>(false)
  const [text2, setText2] = useState<boolean>(false)

  return (
      <section className='container min-h-[100px] flex flex-col gap-6 items-center mt-6 min-[992px]:flex-row min-[992px]:justify-center min-[992px]:items-start relative'>
        <img src={SrcBgVector} className='absolute -bottom-[410px] -right-[120px] -z-10 max-tablet:rotate-[30deg] tablet:-right-[290px] tablet:-bottom-[300px]' />
        <div className='w-full min-w-[250px] max-w-[411px] bg-neutral-800 rounded-xl p-6 flex flex-col shadow-xl'>
          <div className='border-b border-neutral-300 mb-6'>
            <div className='flex gap-3 mb-6'>
              <TruckIcon color='white' />
              <div className='flex flex-col text-white'>
                <span className='text-base font-inter-regular'>Sou</span>
                <span className='text-3xl font-inter-semibold'>Entregador</span>
              </div>
            </div>
            <ButtonWpp title='Quero entregar' whatsappLink='https://chat.whatsapp.com/EaLtt3YjZVrLkwNPojlxIO' />
          </div>
          <button type='button' className='border border-neutral-300 text-neutral-300 text-[13px] font-inter-regular rounded-sm  p-2 w-32 flex justify-between items-center transition-all duration-1000' onClick={() => setText1(!text1)}>
            <span className='font-inter-regular text-[13px]'>Mais detalhes</span>
            <img src={Arrow} alt='Seta' className={`${text1 ? 'transform -rotate-90' : ''}`} />
          </button>
          <span className={`${text1 ? 'block' : 'hidden'} text-neutral-300 text-sm mt-6 leading-7 transition-all duration-1000 font-inter-regular`}>
            <ul className='list-disc ml-4'>
              <li>Realiza a coleta e a entrega do pedido</li>
              <li>Basta entrar no grupo</li>
              <li>Aguardar aparecer o próximo pedido</li>
              <li>Clicar no link para aceitá-lo e seu cadastro começará imediatamente</li>
            </ul>
          </span>
        </div>
        <div className='w-full min-w-[250px] max-w-[411px] bg-white border border-neutral-700 rounded-xl p-6 flex flex-col shadow-xl'>
          <div className='border-b border-neutral-700 mb-6'>
            <div className='flex gap-3 mb-5'>
              <HeartIcon />
              <div className='flex flex-col text-black'>
                <span className='text-base font-inter-regular'>Sou</span>
                <span className='text-3xl font-inter-semibold'>Solicitante</span>
              </div>
            </div>
            <ButtonWpp title='Quero apadrinhar' whatsappLink='https://api.whatsapp.com/send?phone=555127970709&text=cadastro' />
          </div>
          <button type='button' className='border border-neutral-700 text-neutral-700 text-[13px] rounded-sm p-2 w-32 flex justify-between items-center font-inter-regular' onClick={() => setText2(!text2)}>
            <span className='font-inter-regular text-[13px]'>Mais detalhes</span>
            <img src={Arrow} alt='Seta' className={`${text2 ? 'transform -rotate-90' : ''}`} />
          </button>
          <span className={`${text2 ? 'block' : 'hidden'} text-black text-sm mt-6 leading-7 font-inter-regular`}>
            <ul className='list-disc ml-4'>
              <li>Registra o Restaurante ou Cozinha no Sistema</li>
              <li>Intermedia o pedido para o Entregador</li>
              <li>Acompanha todos os pedidos [Recebe notificações do momento da Coleta a Entrega]</li>
              <li>Apadrinha novos Restaurantes/Cozinhas.</li>
            </ul>
          </span>
        </div>
      </section>
  );
};
