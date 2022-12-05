import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Voucher from './pages/Voucher'
import Cart from './pages/Cart'
import Menu from './pages/Menu'
import Account from './pages/Account'
import Promotion from './pages/Promotion'
import './App.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="voucher" element={<Voucher />} />
      <Route path="promotion" element={<Promotion />} />
      <Route path="cart" element={<Cart />} />
      <Route path="menu" element={<Menu />} />
      <Route path="account-info" element={<Account />} />
    </Routes>
  )
}

export default App
