import React from 'react'

export const WelcomePage = () => {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}

export const Header = () => {
    return (
        <header className="bg-gray-800 w-full h-screen flex justify-center items-center">
            <img src="https://devmagazine.co/wp-content/uploads/2018/07/Qu%C3%A9-puedo-hacer-para-iniciar-mi-camino-como-programador.png" className="w-full h-full absolute object-cover z-0 opacity-70 select-none" />

            <div className="flex flex-col w-full h-full">
                <div className="flex items-center justify-center" style={{ flex: 2 }}>
                    <h1 className="z-30 text-white text-5xl font-normal mt-40 w-3/5"><span className="font-semibold">Hola mundo, soy<br /> <span className="text-7xl font-bold">Piero Rolando,</span> </span><br /> <span className="text-6xl font-medium">FullStack developer</span> </h1>
                </div>
                <div className="flex items-center justify-center z-10" style={{ flex: 1 }}>
                    <a href="#main" className="w-14 h-14 bg-blue-900 hover:bg-blue-700 transition-all hover:shadow-2xl shadow-xl flex justify-center items-center cursor-pointer animate-bounce">
                        <svg className="text-gray-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>

        </header>
    )
}

export const Main = () => {
    return (
        <main className="w-full bg-red-600 flex items-center justify-center" id="main" style={{ height: '70vh' }}>
            <div className="max-w-7xl h-full bg-green-400" style={{ flex: 1 }} >
                <h1 className=" mt-32 uppercase font-normal text-center">Desarrollo mobil y web</h1>
                <h1 className="text-3xl text-center">SOY PIERO ROLANDO,<br />DESARROLLADOR FULL STACK</h1>
                <div className="flex items-center justify-center"><p className="w-2/4">Dejenme presentarme, soy un desarrollador full stack, como Freelancer he realizado aplicaciones web y mobiles.</p></div>
            </div>
        </main>
    )
}