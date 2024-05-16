import Whatsapp from '@/assets/images/whatsapp-icon.svg'

interface ButtonWppType {
    title: string
}

export default function ButtonWpp({ title }: ButtonWppType) {
    return (
        <>
            <button type='button' className='bg-[#71CD69] text-white w-full flex items-center justify-between p-5 rounded-sm text-2xl font-bold mb-6'>
                <span>{title}</span>
                <img src={Whatsapp} alt='Ícone do whatsapp' className='h-6 w-6' />
            </button>
        </>
    )
}