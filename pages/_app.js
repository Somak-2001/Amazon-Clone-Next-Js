import '@/styles/globals.css'
import { StateProvider} from './StateProvider';


export default function App({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  )

}
