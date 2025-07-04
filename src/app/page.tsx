"use client"

import { useState } from "react"
import { AppSidebar } from "../components/app-sidebar"
import InventoryDashboard from "../dashboard"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-16"} transition-all duration-300 ease-in-out`}>
        <AppSidebar isCollapsed={!sidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="h-8 w-8">
            <Menu className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Sistema de Gestión</span>
            <span>/</span>
            <span className="font-medium text-gray-900">Dashboard</span>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          <InventoryDashboard />
        </main>
      </div>
    </div>
  )
}
