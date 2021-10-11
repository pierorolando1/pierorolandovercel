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
        <header className="bg-primary-900 w-full h-screen flex justify-center items-center">
            <div
                className="w-full h-full absolute object-cover z-0 select-none opacity-10"
                style={{
                    background: "url(https://www.upnech.edu.mx/wp-content/uploads/2016/11/37821466-wallpaper-computer-1024x576.jpg)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <div className="flex flex-col w-full h-full">
                <div className="flex items-center justify-center" style={{ flex: 2 }}>
                    <h1 className="z-30 text-white  md:text-5xl sm:text-3xl text-2xl font-normal mt-40 w-3/5"><span className="font-semibold">Hello world, I'm<br /> <span className="md:text-7xl sm:text-5xl text-4xl font-bold">Piero Rolando,</span> </span><br /> <span className="md:text-6xl sm:text-4xl text-2xl font-medium">FullStack developer</span> </h1>
                </div>
                <div className="flex items-center justify-center z-10" style={{ flex: 1 }}>
                    <a href="#main" className="w-14 h-14 bg-accent hover:bg-opacity-80 bg-opacity-60 transition-all hover:shadow-2xl shadow-xl flex justify-center items-center cursor-pointer animate-bounce">
                        <svg className="text-gray-300 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
        <main className="w-full flex items-center justify-center bg-primary-900" id="main" style={{ height: '70vh', }}>
            <div className="max-w-7xl h-full text-gray-400 px-6 md:px-10" style={{ flex: 1 }} >
                <h1 className=" mt-32 uppercase font-normal text-center">Full stack & mobile developer</h1>
                <h1 className="text-3xl text-center text-gray-300">I'M PIERO ROLANDO,<br /></h1>
                <div className="flex items-center justify-center"><p className="">Dejenme presentarme, soy un desarrollador full stack, como Freelancer he realizado aplicaciones web y mobiles.</p></div>
            </div>
        </main>
    )
}