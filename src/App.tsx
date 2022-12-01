import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyles } from './styles/GlobalStyles'
import { Header } from './components/Header'
import Orders from './components/Orders'

export function App(){

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position="bottom-center" />
    </QueryClientProvider>
  )
}
