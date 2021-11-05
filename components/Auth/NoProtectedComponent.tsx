import { Redirect } from '../Redirect'
import { authState } from "../../helpers"
import { useRouter } from 'next/router';
import NProgress from "nprogress";
import nProgress from "nprogress";
import { useEffect } from 'react';
import BarLoader from 'react-spinners/BarLoader'

export const NoProtectedComponent : React.FunctionComponent<{userState: authState, redirecTo: string}>= (props) => {

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            console.log(url);
            NProgress.start();
        };
  
        router.events.on("routeChangeStart", handleRouteChange);
  
        router.events.on("routeChangeComplete", () => NProgress.done());
  
        router.events.on("routeChangeError", () => nProgress.done());
  
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);
  

    return (
        props.userState == authState.loading ?
            <div className="bg-primary-900 h-screen flex items-center justify-center">
                <BarLoader color="#fd4d4d" />
            </div>
        : (props.userState == authState.loged ?
            <Redirect to={props.redirecTo} />
            : props.userState == authState.notLoged &&
            <>{
                props.children
            }</>)
    )
}
