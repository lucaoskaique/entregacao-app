import { useState } from 'react'

import { HeartIcon, TruckIcon } from '../../utils/icons'
import Arrow from '@/assets/images/arrow-down-right.svg'
// import BgGreenVectorHero from '@/assets/images/background-vector-hero.svg'

import ButtonWpp from './button-wpp-hero'
import { Container } from './container';

export const Hero = () => {
  const [text1, setText1] = useState<boolean>(false)
  const [text2, setText2] = useState<boolean>(false)

  return (
    <Container>
      <section className='min-h-[100px] flex flex-col gap-6 items-center mt-8 tablet:flex-row tablet:justify-between tablet:items-start'>
        <div className='w-full min-w-[250px] max-w-[411px] bg-neutral-800 rounded-xl p-6 flex flex-col shadow-xl'>
          <div className='border-b border-neutral-300 mb-6'>
            <div className='flex gap-3 mb-6'>
              <TruckIcon color='white' />
              <div className='flex flex-col text-white'>
                <span className='text-base font-inter-regular'>Sou</span>
                <span className='text-3xl font-inter-semibold'>Entregador</span>
              </div>
            </div>
            <ButtonWpp title='Quero entregar' whatsappLink='' />
          </div>
          <button type='button' className='border border-neutral-300 text-neutral-300 text-[13px] font-inter-regular rounded-sm  p-2 w-32 flex justify-between items-center transition-all duration-1000' onClick={() => setText1(!text1)}>
            <span className='font-inter-regular text-[13px]'>Mais detalhes</span>
            <img src={Arrow} alt='Seta' className={`${text1 ? 'transform -rotate-90' : ''}`} />
          </button>
          <span className={`${text1 ? 'block' : 'hidden'} text-neutral-300 text-sm mt-6 leading-7 transition-all duration-1000 font-inter-regular`}>Basta entrar no grupo, aguardar aparecer o próximo pedido, clicar no link para aceitá-lo e seu cadastro começará imediatamente.</span>
        </div>
        <div className='w-full min-w-[250px] max-w-[411px] bg-white border border-neutral-700 rounded-xl p-6 flex flex-col shadow-xl'>
          <div className='border-b border-neutral-700 mb-6'>
            <div className='flex gap-3 mb-5'>
              <HeartIcon />
              <div className='flex flex-col text-black'>
                <span className='text-base font-inter-regular'>Sou</span>
                <span className='text-3xl font-inter-semibold'>Padrinho</span>
              </div>
            </div>
            <ButtonWpp title='Quero apadrinhar' whatsappLink='' />
          </div>
          <button type='button' className='border border-neutral-700 text-neutral-700 text-[13px] rounded-sm p-2 w-32 flex justify-between items-center font-inter-regular' onClick={() => setText2(!text2)}>
            <span className='font-inter-regular text-[13px]'>Mais detalhes</span>
            <img src={Arrow} alt='Seta' className={`${text2 ? 'transform -rotate-90' : ''}`} />
          </button>
          <span className={`${text2 ? 'block' : 'hidden'} text-black text-sm mt-6 leading-7 font-inter-regular`}>
            <strong>Padrinho (Solicitante): </strong>
            Intermedia o pedido entre o Entregador e o Restaurante/Cozinha, Acompanha todos os pedidos, Apadrinha novos Restaurantes/Cozinhas.</span>
        </div>
      </section>
      {/* <img className="absolute -z-10 -right-[170px] top-[300px]" src={BgGreenVectorHero} /> */}
    </Container>
  );
};
