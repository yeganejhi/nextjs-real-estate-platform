// module/ShareButton.js
"use client"
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { LuShare2 } from "react-icons/lu"

export default function ShareButton() {
    const [url, setUrl] = useState("")
    useEffect(() => {
        setUrl(window.location.href)
    }, [])

    return (
        <CopyToClipboard text={url}>
            <div className="flex items-center gap-2 bg-green-50 hover:bg-green-100 text-green-600 hover:text-green-700 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 w-fit">
                <LuShare2 className="w-4 h-4" />
                <button className="text-sm font-medium">share</button>
            </div>
        </CopyToClipboard>
    )
}