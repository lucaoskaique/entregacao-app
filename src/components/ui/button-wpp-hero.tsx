import Whatsapp from '@/assets/images/whatsapp-icon.svg'

export default function ButtonWpp() {
    return (
        <>
            <button type='button' className='bg-[#00A324] text-white w-full flex items-center justify-between p-5 rounded-sm text-base font-semibold mb-6'>
                Quero Ajudar
                <img src={Whatsapp} alt='Ícone do whatsapp' />
            </button>
        </>
    )
}