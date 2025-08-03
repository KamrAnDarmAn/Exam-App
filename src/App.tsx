
import { Toaster } from "@/components/ui/sonner"
import { SidebarD } from "./components/Sidebar"
import { Route, Routes } from "react-router-dom"
import { DashboardWrapper } from './components/Dashboard'
import CreateQuestion from './components/CreateQuestion'
import { Navigate } from "react-router-dom";
import HomeAndManagement from './components/HomeAndManagement'
import ListOfPapers from './components/ListOfPapers'
import Settings from './components/Settings'
import QuestionHanlerAnWrapper from './components/QuestionHanlerAnWrapper'
import Profile from './components/Profile'
// Add at the top of your Routes:


const App = () => {
  return (

    <main className='bg-slate-950 flex items-center justify-center flex-col text-slate-950 dark:slate-50 h-[100vh]'>
      <Routes>
        <Route path="/" element={<SidebarD />}>
          <Route path="/" element={<Navigate to="/papers" />} />
          <Route path="/home" element={<HomeAndManagement />} />
          <Route path="/papers" element={<ListOfPapers />} />
          <Route path="/papers/:paperTitle" element={<QuestionHanlerAnWrapper />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<DashboardWrapper />} />
          <Route path="/create-paper" element={<CreateQuestion />} />
          <Route path="/profile/:user_id" element={<Profile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>

  )
}

export default App
