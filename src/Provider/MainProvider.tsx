"use client"
import AOS from 'aos'
import { ReactNode, useEffect } from 'react'

const MainProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration in milliseconds
            // once: true, // Whether the animation should happen only once
            easing: "ease-in-out", // Custom easing for animations
            offset: 50, // Offset (in px) from the original trigger point
            mirror: true, // Whether elements should animate out while scrolling
        });
    }, []); // Ensure AOS.init runs only once on mount
    return (
        <div>
            {children}
        </div>
    )
}

export default MainProvider