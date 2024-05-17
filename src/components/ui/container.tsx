import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='max-w-[1440px] m-auto'>
            {children}
        </div>
    )
}