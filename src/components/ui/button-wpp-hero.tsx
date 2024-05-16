import WhatsappIcon from '@/assets/images/icons/whatsapp-icon.svg'

interface ButtonWppType {
    title: string
}

export default function ButtonWpp({ title }: ButtonWppType) {
    return (
        <>
            <button type='button' className='bg-[#00A324] text-white w-full flex items-center justify-between p-5 rounded-sm text-base font-semibold mb-6'>
                {title}
                <img src={WhatsappIcon} alt='Ícone do whatsapp' />
            </button>
        </>
    )
}