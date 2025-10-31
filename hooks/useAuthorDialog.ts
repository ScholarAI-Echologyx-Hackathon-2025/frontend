"use client"

import { useState } from "react"

const DIALOG_CLOSE_DELAY = 150

export function useAuthorDialog() {
    const [authorName, setAuthorName] = useState<string>("")
    const [isOpen, setIsOpen] = useState(false)

    const openAuthorDialog = (name: string) => {
        setAuthorName(name)
        setIsOpen(true)
    }

    const closeAuthorDialog = () => {
        setIsOpen(false)
        // Keep the authorName until dialog is fully closed to prevent flash
        setTimeout(() => setAuthorName(""), DIALOG_CLOSE_DELAY)
    }

    return {
        authorName,
        isOpen,
        openAuthorDialog,
        closeAuthorDialog,
        setIsOpen
    }
}
