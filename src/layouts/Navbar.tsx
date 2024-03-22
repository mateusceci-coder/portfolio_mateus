
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface HomeParams {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
  setIsEnglish: Dispatch<SetStateAction<boolean>>
  isEnglish: boolean
}

export default function Navbar({darkMode, setDarkMode, setIsEnglish, isEnglish}: HomeParams) {
  return (
    <nav className='flex gap-4 p-4'>
        <div className="flex gap-2">
            {darkMode ? <Moon color="white" className="hover:cursor-pointer" onClick={() => setDarkMode(!darkMode)} /> : <Sun  onClick={() => setDarkMode(!darkMode)} className="hover:cursor-pointer" />}
        </div>
        <div className={'text-xl font-bold font-playfair flex gap-3'}>
          <p className={`hover:cursor-pointer ${isEnglish ? "text-gray-500" : "text-red-500"}`} onClick={() => setIsEnglish(false)}>PT</p>
          <p className={`hover:cursor-pointer ${isEnglish ? "text-red-500" : "text-gray-400"}`} onClick={() => setIsEnglish(true)}>EN</p>
        </div>
    </nav>
  )
}
