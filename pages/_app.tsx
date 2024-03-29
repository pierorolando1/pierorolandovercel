import '../styles/globals.css'
import '../styles/helpers.css'
import '../styles/blogpost.css'
import "tailwindcss/tailwind.css"; 
import { Provider } from 'react-redux'
import { store } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps}  />
    </Provider>
  )
}

export default MyApp
