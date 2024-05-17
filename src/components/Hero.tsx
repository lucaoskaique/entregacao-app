import { useState } from 'react'

import CarIcon from '@/assets/images/icons/delivery-car-icon.svg'
import PadrinhoIcon from '@/assets/images/icons/padrinho-help-icon.svg'
import Arrow from '@/assets/images/arrow-down-right.svg'

import ButtonWpp from './ui/button-wpp-hero'

export const Hero = () => {
  const [text1, setText1] = useState<boolean>(false)
  const [text2, setText2] = useState<boolean>(false)

  return (
    <section className='mx-5 flex flex-col gap-6 items-center mb-[80px] mt-6 min-[992px]:flex-row min-[992px]:justify-center'>
      <div className='w-full min-w-[250px] max-w-[411px] min-h-[280px] max-h-[400px] bg-neutral-800 rounded-xl p-6 flex flex-col shadow-xl'>
        <div className='border-b-2 border-neutral-300 mb-6'>
          <div className='flex gap-3 mb-6'>
            <img src={CarIcon} alt='Ícone do carrinho' />
            <div className='flex flex-col text-white'>
              <span className='text-base font-bold'>Sou</span>
              <span className='text-3xl font-bold'>Entregador</span>
            </div>
          </div>
          <ButtonWpp />
        </div>
        <button type='button' className='border border-neutral-300 text-neutral-300 text-[13px] font-normal rounded-sm p-2 w-32 flex justify-between items-center' onClick={() => setText1(!text1)}>
          <span>Mais detalhes</span>
          <img src={Arrow} alt='Seta' className={`${text1 ? 'transform -rotate-90' : ''}`} />
        </button>
        <span className={`${text1 ? 'block' : 'hidden'} text-neutral-300 text-sm mt-6 leading-7 font-normal`}>Basta entrar no grupo, aguardar aparecer o próximo pedido, clicar no link para aceitá-lo e seu cadastro começará imediatamente.</span>
      </div>
      <div className='w-full min-w-[250px] max-w-[411px] min-h-[250px] max-h-[410px] border-[3px] border-neutral-800 rounded-xl p-6 flex flex-col shadow-xl bg-white'>
        <div className='border-b-2 border-neutral-300 mb-4'>
          <div className='flex gap-3 mb-6'>
            <img src={PadrinhoIcon} alt='Ícone do padrinho' />
            <div className='flex flex-col text-neutral-800'>
              <span className='text-base font-bold'>Sou</span>
              <span className='text-3xl font-bold'>Padrinho</span>
            </div>
          </div>
          <ButtonWpp />
        </div>
        <button type='button' className='border border-neutral-700 text-neutral-700 text-[13px] font-normal rounded-sm p-2 w-32 flex justify-between items-center' onClick={() => setText2(!text2)}>
          Mais detalhes
          <img src={Arrow} alt='Seta' className={`${text2 ? 'transform -rotate-90' : ''}`} />
        </button>
        <span className={`${text2 ? 'block' : 'hidden'} text-black text-sm mt-6 leading-7 font-normal`}>
          <strong>Padrinho (Solicitante): </strong>
          Intermedia o pedido entre o Entregador e o Restaurante/Cozinha, Acompanha todos os pedidos, Apadrinha novos Restaurantes/Cozinhas.</span>
      </div>
    </section>
  );
};
