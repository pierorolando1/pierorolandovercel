import { GeneralPage } from '../GeneralPage'

export const EditPostPlaceholder = () => {
    return (
        <GeneralPage>
            <div className="h-full min-h-screen bg-primary-900 cursor-default">
                <div className="image-container relative">
                    <div className="w-full h-full absolute bg-primary-800 bg-opacity-80 flex flex-col p-14 animate-pulse">
                        <div className="max-w-7xl mx-auto w-full h-full">
                            <button className="transition-all">
                            </button>{/*TODO */}
                        </div>
                        <div className="max-w-7xl mx-auto w-full">
                            <button disabled className="bg-blue-700 opacity-50 p-3 px-4 rounded font-black text-blue-700 animate-pulse">Change photo</button>
                        </div>
                    </div>
                </div>
                <div className="flex mx-auto max-w-7xl justify-between px-1 py-5 pb-3">
                    <div className="bg-primary-800 animate-pulse w-60 h-10"></div>
                    <div className="flex items-center">
                        <button className="bg-blue-700 opacity-50  p-2 rounded-md text-blue-700 animate-pulse">Edit title</button>
                    </div>
                </div>
                <div className="flex mx-auto max-w-7xl justify-between px-1 py-5 pb-3">
                    <div className="bg-primary-800 animate-pulse w-60 h-8"></div>
                    <div className="flex items-center">
                        <button className="bg-blue-700 opacity-50  p-2 rounded-md text-blue-700 animate-pulse text-sm">Edit subtitle</button>
                    </div>
                </div>
                <div className="bg-primary-800 max-w-7xl mx-auto h-40 animate-pulse"></div>
                <div className="w-full h-8"></div>
            </div>
        </GeneralPage>
    )
}
