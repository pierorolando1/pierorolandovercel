import React from 'react'
import { NormalPage } from '../components/NormalPage'
import { Proyect } from '../components/Proyect'
const Proyectos = () => {
    return (
        <NormalPage title="Proyects" footer={false}>
            <div className="w-full min-h-screen bg-primary-900 h-full">
                <h1  className="mx-auto max-w-5xl py-32 pb-9 text-primary-100 font-semibold text-xl">Some proyects that I build</h1>
                <Proyect
                    key="1"
                    name="Twitter clone" 
                    description="Simple twitter clone that i made when i was baned from twitter, then twitter returns me my account and i forgot the proyect" 
                    image="https://firebasestorage.googleapis.com/v0/b/twitter-clone-4316b.appspot.com/o/WhatsApp%20Image%202021-11-04%20at%209.26.39%20PM.jpeg?alt=media&token=62447002-8a9d-4a5e-a062-7bbdefaab969" 
                    repository="http://github.com/pierorolando1/twitter-clone" 
                    tecnologies={ ["Next.js", "React", "Firebase"] } 
                />
                <Proyect
                    key="2"
                    name="Twitter clone" 
                    description="adasda" 
                    image="https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/en_us/products/2017/check-out-our-new-look/Check-new-look-iOS-Refresh-Full-Walkthrough.gif" 
                    repository="http://github.com/pierorolando1" 
                    tecnologies={ ["Flutter", "React"] } 
                />
                <Proyect
                    key="3"
                    name="Twitter clone" 
                    description="adasda" 
                    image="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/11/11/15419529060441.jpg" 
                    repository="http://github.com/pierorolando1" 
                    tecnologies={ ["Flutter", "React"] } 
                />
            </div>
        </NormalPage>
    )
}

export default Proyectos
