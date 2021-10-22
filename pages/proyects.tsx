import React from 'react'
import { NormalPage } from '../components/NormalPage'
import { Proyect } from '../components/Proyect'
const Proyectos = () => {
    return (
        <NormalPage title="Proyects" footer={false}>
            <div className="w-full min-h-screen bg-primary-900 h-full">
                <h1  className="mx-auto max-w-5xl py-32 pb-9 text-primary-100 font-semibold text-xl">Some proyects that I build</h1>
                <Proyect name="Twitter clone" description="adasda" image="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/11/11/15419529060441.jpg" repository="http://github.com/pierorolando1" tecnologies={ ["Flutter", "React"] } />
                <Proyect name="Twitter clone" description="adasda" image="https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/en_us/products/2017/check-out-our-new-look/Check-new-look-iOS-Refresh-Full-Walkthrough.gif" repository="http://github.com/pierorolando1" tecnologies={ ["Flutter", "React"] } />
                <Proyect name="Twitter clone" description="adasda" image="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/11/11/15419529060441.jpg" repository="http://github.com/pierorolando1" tecnologies={ ["Flutter", "React"] } />
            </div>
        </NormalPage>
    )
}

export default Proyectos
