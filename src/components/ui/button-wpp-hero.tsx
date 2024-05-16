import WhatsappIcon from '@/assets/images/icons/whatsapp-icon.svg'

export default function ButtonWpp() {
    return (
        <>
            <button type='button' className='bg-wppButton text-white w-full flex items-center justify-between p-5 rounded-sm text-base font-semibold mb-6'>
                Quero Ajudar
                <img src={WhatsappIcon} alt='Ícone do whatsapp' />
            </button>
        </>
    )
}