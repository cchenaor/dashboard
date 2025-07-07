"use client"

import { BarChart3, Package, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface AppSidebarProps {
  isCollapsed: boolean
  onVentasClick: () => void
  onDashboardClick: () => void
}

const navigationItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    isActive: true,
  },
  {
    title: "Ventas",
    icon: ShoppingCart,
    isActive: false,
  },
  {
    title: "Almacén",
    icon: Package,
    isActive: false,
  },
]

export function AppSidebar({ isCollapsed, onDashboardClick, onVentasClick }: AppSidebarProps) {
  return (
    <div className="h-full bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Package className="h-4 w-4" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">InventoryPro</span>
              <span className="text-xs text-gray-500">Sistema de Gestión</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {!isCollapsed && (
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Navegación</p>
          )}
          {navigationItems.map((item) => (
            <Link
                key={item.title}
                href={
                item.title === "Dashboard"
                    ? "/" // página principal
                    : item.title === "Ventas"
                    ? "/ventas" // página de ventas
                    : "#"
                 }
                className={`flex items-center w-full px-4 py-2 rounded hover:bg-gray-200 transition ${
                item.isActive ? "bg-gray-200 font-medium" : ""
                }`}
                    >
                <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
            </Link>
            
          ))}
        </div>
      </nav>
    </div>
  )
}
