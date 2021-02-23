import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import NavBar from './NavBar'

export const MainHome = () => {

    
  const { dark } = useContext(ThemeContext)


    return (
    <body className={ dark ? 'dark' : 'nadaps' }>
    <NavBar />

    <main className={`overflow-x-hidden h-screen w-screen ${ dark ?  'bg-gray-900' : 'a' } `}  style={{ 
        //backgroundImage: `url(${ dark ? 'https://wallpaperaccess.com/full/3949076.jpg' : "https://midu.dev/images/wallpapers/fondo-react-horizontal-random-4k.png" })`, 
        //backgroundSize: 'cover',
    }}>
        <div className="pt-10 w-screen h-1/2 flex justify-center items-center overflow-x-hidden" style={{ 

        backgroundImage: `url(${ dark ? 'https://wallpaperaccess.com/full/3949076.jpg' : "https://midu.dev/images/wallpapers/fondo-react-horizontal-random-4k.png" })`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        marginTop: '5.5rem',
    }}>
            <div className=" h-3/5 w-3/4 max-w-screen-lg pt-4  flex justify-center ">
                <h1 className="font-sans arciform pb-1 text-gradient bg-gradient-to-r dark:text-white dark:from-gray-100 dark:to-white from-blue-800 to-blue-500 text-left text-4xl" style={{filter: 'drop-shadow(5px 3px 9px rgba(0,0,0, 0.9))'}}>Hola, <br/> <span className="font-bold text-6xl">Soy Piero Rolando </span><br/><span className="text-4xl font-normal">y soy un desarrolador React</span></h1>
            </div>
        </div>

        <p>
        ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled successfully
event - build page: /
wait  - compiling...
event - compiled successfully
Warning: Invalid DOM property `crossorigin`. Did you mean `crossOrigin`?
    at link
    at ThemeProvider (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:459:3)
    at Home
    at MyApp (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\_app.js:135:3)
    at AppContainer (D:\NextJSpersonalPage\pierorolandodev\node_modules\next\dist\next-server\server\render.js:25:899)
Warning: Invalid DOM property `stroke-linecap`. Did you mean `strokeLinecap`?
    at path
    at svg
    at button
    at nav
    at NavBar (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:242:63)
    at body
    at MainHome (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:131:63)
    at ThemeProvider (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:459:3)
    at Home
    at MyApp (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\_app.js:135:3)
    at AppContainer (D:\NextJSpersonalPage\pierorolandodev\node_modules\next\dist\next-server\server\render.js:25:899)
Warning: Invalid DOM property `stroke-linejoin`. Did you mean `strokeLinejoin`?
    at path
    at svg
    at button
    at nav
    at NavBar (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:242:63)
    at body
    at MainHome (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:131:63)
    at ThemeProvider (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:459:3)
    at Home
    at MyApp (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\_app.js:135:3)
    at AppContainer (D:\NextJSpersonalPage\pierorolandodev\node_modules\next\dist\next-server\server\render.js:25:899)
Warning: Invalid DOM property `stroke-width`. Did you mean `strokeWidth`?
    at path
    at svg
    at button
    at nav
    at NavBar (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:242:63)
    at body
    at MainHome (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:131:63)
    at ThemeProvider (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:459:3)
    at Home
    at MyApp (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\_app.js:135:3)
    at AppContainer (D:\NextJSpersonalPage\pierorolandodev\node_modules\next\dist\next-server\server\render.js:25:899)
Warning: Invalid value for prop `value` on  tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior 
    at input
    at div
    at ReactSwitch (D:\NextJSpersonalPage\pierorolandodev\node_modules\react-switch\dist\react-switch.dev.js:144:15)
    at div
    at div
    at nav
    at NavBar (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:242:63)
    at body
    at MainHome (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:131:63)
    at ThemeProvider (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:459:3)
    at Home
    at MyApp (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\_app.js:135:3)
    at AppContainer (D:\NextJSpersonalPage\pierorolandodev\node_modules\next\dist\next-server\server\render.js:25:899)
    inHome (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:131:63)
    at ThemeProvider (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:459:3)
    at Home
    at MyApp (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\_app.js:135:3)
    at AppContainer (D:\NextJSpersonalPage\pierorolandodev\node_modules\next\dist\next-server\server\render.js:25:899)
Warning: Invalid DOM property `stroke-width`. Did you mean `strokeWidth`?
    at path
    at svg
    at button
    at nav
    at NavBar (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:242:63)
    at body
    at MainHome (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:131:63)
    at ThemeProvider (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:459:3)
    at Home
    at MyApp (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\_app.js:135:3)
    at AppContainer (D:\NextJSpersonalPage\pierorolandodev\node_modules\next\dist\next-server\server\render.js:25:899)
Warning: Invalid value for prop `value` on  tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior 
    at input
    at div
    at ReactSwitch (D:\NextJSpersonalPage\pierorolandodev\node_modules\react-switch\dist\react-switch.dev.js:144:15)
    at div
    at div
    at nav
    at NavBar (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:242:63)
    at body
    at MainHome (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:131:63)
    at ThemeProvider (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\index.js:459:3)
    at Home
    at MyApp (D:\NextJSpersonalPage\pierorolandodev\.next\server\pages\_app.js:135:3)
        </p>
    </main>
    </body>    
)
}


