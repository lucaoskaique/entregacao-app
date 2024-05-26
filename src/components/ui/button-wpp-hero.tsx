import { WhatsappIcon } from './utils/icons'

interface ButtonWppType {
    title: string
    whatsappLink: string
}

export default function ButtonWpp({ title, whatsappLink }: ButtonWppType) {
    return (
        <>
            <a role='button' href={whatsappLink} target='_blank' rel="noopener noreferrer" className='bg-wppButton text-white w-full flex items-center justify-between p-5 rounded-sm text-xl font-inter-bold mb-6'>
                {title}
                <WhatsappIcon width={24} height={24} />
            </a>
        </>
    )
}