import React, {useEffect, useState} from 'react'

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
    }, [])

  return (
    <div>useThemeSwitcher</div>
  )
}

export default useThemeSwitcher
