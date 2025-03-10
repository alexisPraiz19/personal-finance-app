/---/
// Herrmientas React
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { BrowserRouter, Routes, Route } from "react-router"

// Componentes de complementación
  // Componentes de Autenticación de Usuario
import IsAuth from "./routes/auth/components/IsAuth"
import AuthLayout from "./routes/auth/components/AuthLayout"
import Login from "./routes/auth/components/Login"
import SingUp from "./routes/auth/components/SingUp"

  // Componentes enrutamiento
import Dashboard from "./routes/layouts/dashboard/Darshboard"
import Transaction from "./routes/layouts/transactions/Transactions"
import Budgets from "./routes/layouts/budgets/Budgets"
import Pots from "./routes/layouts/pots/Pots"
import RecurringBills from "./routes/layouts/recurring_bills/RecurringBills"

// Contexto de autenticación
import AuthContextProvider from "./context/AuthContext"

// Estilos
import "./styles/index.css"
/---/

const root = createRoot(document.getElementById("app"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
            {/* Autenticación de Usuario */}
            <Route path="/register" element={<AuthLayout />} >
              <Route path="login" element={<Login />} />
              <Route path="singup" element={<SingUp />} />
            </Route>

            {/* Enruntamiento de Layouts */}
            <Route path="/" element={<IsAuth />}>
              <Route path="/" element={ <Dashboard/> }>
                <Route index element={ <Overview/> } />
                <Route path="transactions" element={ <Transaction/> } />
                <Route path="budgets" element={ <Budgets/> } />
                <Route path="pots" element={ <Pots/> } />
                <Route path="recurring-bills" element={ <RecurringBills/> } />
              </Route>
            </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);