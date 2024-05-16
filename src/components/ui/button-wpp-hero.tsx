import Whatsapp from '@/assets/images/whatsapp-icon.svg'

interface ButtonWppProps {
    whatsappLink: string;
}

export default function ButtonWpp({ whatsappLink }: ButtonWppProps) {
    return (
        <>
            <a role='button'  href={whatsappLink} target='_blank' rel="noopener noreferrer" className='bg-[#00A324] text-white w-full flex items-center justify-between p-5 rounded-sm text-base font-semibold mb-6'>
                Quero Ajudar
                <img src={Whatsapp} alt='Ícone do whatsapp' />
            </a>
        </>
    )
}