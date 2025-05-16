import React from "react"

export default function Layout({children}:{children : React.ReactNode
}){
    return (
        <div className="max-w-screen-sm mx-auto ps-5">
       {children}
        </div>
    )
}