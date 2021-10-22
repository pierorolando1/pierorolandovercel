export interface ProyectInterface {
    name:string,
    description:string,
    image:string,
    /**Tecnologies with the app is build */
    tecnologies:('React'|'Flutter'|'Next.js'|'Node.js'|'Nest.js'|'Typescript'|'Firebase'|'MongoDb'|'Sql(postgresql)')[],
    repository:string
}


export const Proyect = ({ name, description, image, tecnologies, repository }:ProyectInterface) => {
    return (
        <article className="transition-all bg-primary-800 bg-opacity-0 active:bg-opacity-100  max-w-5xl w-full mx-auto grid lg:grid-cols-2 p-10 rounded mt-1">
            <img src={image} className="opacity-60 hover:opacity-90 bg-primary-800 bg-opacity-0 rounded max-h-80 object-cover w-full hover:object-cover transition-all" alt="" />
    
            <div className="text-right p-3 flex flex-col justify-center items-end transition-all">
                <h1 className="w-full text-primary-100 font-semibold text-2xl py-2">{name}</h1>
                <p className="transition-all text-sm text-primary-300 p-2 hover:bg-primary-800 bg-opacity-10 hover:shadow-lg rounded-sm">{description}</p>
                <div className="font-mono text-gray-600 py-3 text-sm flex flex-row-reverse flex-wrap">
                    {
                        tecnologies.map(tec => (
                            <a className="hover:text-accent-hover transition-all cursor-pointer px-1.5">{ tec }</a>
                        ))
                    }
                </div>
                <a href={repository} target="_blank" className="cursor-pointer mx-1.5">
                    <img src="https://cdn.svgporn.com/logos/github-icon.svg" className="w-5 h-5 filter invert" alt="" />
                </a>
            </div>
        </article>
    )
}

