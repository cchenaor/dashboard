"use client"

import { BarChart3, Package, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AppSidebarProps {
  isCollapsed: boolean
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

export function AppSidebar({ isCollapsed }: AppSidebarProps) {
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
            <Button
              key={item.title}
              variant={item.isActive ? "default" : "ghost"}
              className={`w-full justify-start gap-3 ${isCollapsed ? "px-2" : "px-3"} ${
                item.isActive ? "bg-blue-600 text-white hover:bg-blue-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              {!isCollapsed && <span>{item.title}</span>}
            </Button>
          ))}
        </div>
      </nav>
    </div>
  )
}
