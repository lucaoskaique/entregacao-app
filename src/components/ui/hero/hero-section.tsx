import SrcBgVector from '@/assets/images/background-vector-hero.svg'
import { HeartIcon, TruckIcon } from '../utils/icons'
import { HeroCard } from './components/hero-card'

const entregadorList: string[] = [
  'Realiza a coleta e a entrega do pedido',
  'Basta entrar no grupo',
  'Aguardar aparecer o próximo pedido',
  'Clicar no link para aceitá-lo e seu cadastro começará imediatamente',
]
const solicitanteList: string[] = [
  'Registra o Restaurante ou Cozinha no Sistema',
  'Intermedia o pedido para o Entregador',
  'Acompanha todos os pedidos [Recebe notificações do momento da Coleta a Entrega]',
  'Apadrinha novos Restaurantes/Cozinhas.',
]

export const Hero = () => {
  return (
    <section className='container min-h-[100px] flex flex-col gap-6 items-center mt-6 min-[992px]:flex-row min-[992px]:justify-center min-[992px]:items-start relative'>
      <img src={SrcBgVector} className='absolute -bottom-[410px] -right-[120px] -z-10 max-tablet:rotate-[30deg] tablet:-right-[290px] tablet:-bottom-[300px]' />

      <HeroCard
        className='bg-neutral-800'
        contentColor='text-white'
        imgContainer={<TruckIcon color='white' />}
        titleName='Entregador'
        borderColor='border-neutral-300'
        buttonLabel='Quero entregar'
        wppURL='https://chat.whatsapp.com/EaLtt3YjZVrLkwNPojlxIO'
        buttonColor='border-neutral-300 text-neutral-300'
        arrowColor='white'
        detailsList={
          entregadorList.map((item, index) => (
            <li className='text-white' key={index}>{item}</li>
          ))} />

      <HeroCard
        className='bg-white border-neutral-800'
        contentColor='text-black'
        imgContainer={<HeartIcon color='black' />}
        titleName='Solicitante'
        borderColor='border-neutral-800'
        buttonLabel='Quero solicitar'
        wppURL='https://api.whatsapp.com/send?phone=555127970709&text=cadastro'
        buttonColor='border-neutral-700 text-neutral-700'
        arrowColor='black'
        detailsList={
          solicitanteList.map((item, index) => (
            <li className='text-black' key={index}>{item}</li>
          ))} />
    </section>
  );
};
