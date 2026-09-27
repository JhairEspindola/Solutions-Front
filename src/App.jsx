import './App.css'
import { useEffect, useState } from 'react'
import Welcome from './pages/principal/principal'
import Landing from './pages/descripcion/descripcion'
import Padre from './components/inventario_visualizar/inventario_visualizar'
import Form from './components/inventario_modificar/inventario_modificar'
import Hijo from './components/inventario_registrar/inventario_registrar'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('inventario-products') || '[]')
    } catch {
      return []
    }
  })
  const [productDraft, setProductDraft] = useState(null)

  useEffect(() => {
    localStorage.setItem('inventario-products', JSON.stringify(products))
  }, [products])

  return (
    <HashRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/principal" element={<Welcome />} />
          <Route path="/descripcion" element={<Landing />} />
          <Route path="/landing" element={<Navigate to="/descripcion" replace />} />
          <Route path="/inventario_registrar" element={<Hijo onContinue={setProductDraft} />} />
          <Route path="/hijo" element={<Navigate to="/inventario_registrar" replace />} />
          <Route path="/register" element={<Navigate to="/inventario_registrar" replace />} />
          <Route path="/inventario_modificar" element={<Form product={productDraft} onSave={(product) => {
            setProducts((currentProducts) => [...currentProducts, {
              ...productDraft,
              id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
              stock: product.stock,
            }])
            setProductDraft(null)
          }} />} />
          <Route path="/form" element={<Navigate to="/inventario_modificar" replace />} />
          <Route path="/inventario_visualizar" element={<Padre products={products} setProducts={setProducts} />} />
          <Route path="/padre" element={<Navigate to="/inventario_visualizar" replace />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
