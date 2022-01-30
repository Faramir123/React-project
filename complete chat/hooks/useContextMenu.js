import React, { useCallback, useState, useEffect } from 'react'


export default function useContextMenu() {

    const [coordinats, setCoordinats] = useState({ x: 0, y: 0 })
    const [show, setShow] = useState(false)

    const handleContextMenu = useCallback((event) => {
        setCoordinats({ x: event.pageX, y: event.pageY })
        setShow(true)
    }, [setCoordinats, setShow])

    const handleClick = useCallback(() => (show ? setShow(false) : null), [show])

    useEffect(() => {
        document.addEventListener("click", handleClick)
        document.addEventListener("contextmenu", handleContextMenu)
        return () => {
            document.removeEventListener("click", handleClick)
            document.removeEventListener("contextmenu", handleContextMenu)
        }
    })
    return { setCoordinats, show }
}