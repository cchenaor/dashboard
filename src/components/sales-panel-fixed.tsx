"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AppSidebar } from "@/components/app-sidebar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  FileText,
  Receipt,
  Search,
  History,
  TrendingUp,
  Plus,
  Users,
  Menu,
  BarChart3,
  ShoppingCart,
  Package,
  Home,
  Settings,
  HelpCircle,
} from "lucide-react"


const secondaryItems = [
  { title: "Configuración", icon: Settings },
  { title: "Ayuda", icon: HelpCircle },
]
interface SalesPanelFixedProps {
  onClose: () => void
}
export function SalesPanelFixed() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Layout principal */}
      <div className="flex h-screen">
        {/* Contenido principal - Con margen izquierdo para la sidebar */}
        <div className="flex-1">
          {/* Header del contenido principal */}
          <header className="flex h-16 items-center gap-4 border-b bg-background px-4 lg:px-6">
            {/* Botón de menú móvil */}
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                    <Menu className="h-4 w-4" />
                </Button>
                </SheetTrigger>

        <SheetContent side="left" className="w-64 p-0">
        <div className="flex flex-col h-full">
      {/* Header móvil */}
      <div className="flex items-center h-16 px-4 border-b">
        <div className="flex items-center gap-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Home className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Sistema de Ventas</span>
            <span className="truncate text-xs text-muted-foreground">Gestión Comercial</span>
          </div>
        </div>
      </div>

      {/* Items secundarios */}
      <div className="px-3 py-2 mt-auto">
        <div className="space-y-1">
          {secondaryItems.map((item) => (
            <Button
              key={item.title}
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  </SheetContent>
</Sheet>

            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold">Panel de Ventas</h1>
              <Badge variant="secondary">Dashboard</Badge>
            </div>
          </header>

          {/* Contenido principal */}
          <main className="flex-1 p-4 lg:p-6 space-y-6 overflow-auto">
            {/* Barra de búsqueda */}
            <div className="flex items-center space-x-2 w-full">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar cliente o producto..." className="pl-8" />
              </div>
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Buscar
              </Button>
            </div>

            {/* Estadísticas rápidas */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ventas del Mes</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231</div>
                  <p className="text-xs text-muted-foreground">+20.1% respecto al mes anterior</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cotizaciones Pendientes</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">3 vencen esta semana</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Facturas Emitidas</CardTitle>
                  <Receipt className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">+12% este mes</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Clientes Activos</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">234</div>
                  <p className="text-xs text-muted-foreground">+5 nuevos esta semana</p>
                </CardContent>
              </Card>
            </div>

            {/* Acciones principales */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Plus className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Nueva Cotización</CardTitle>
                      <CardDescription>Crear una nueva cotización para un cliente</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Crear Cotización
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Receipt className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Emitir Factura</CardTitle>
                      <CardDescription>Generar factura desde cotización o nueva venta</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Receipt className="mr-2 h-4 w-4" />
                    Nueva Factura
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <FileText className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Cotizaciones</CardTitle>
                      <CardDescription>Consultar y gestionar cotizaciones previas</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-transparent" variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Ver Cotizaciones
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Ventas Realizadas</CardTitle>
                      <CardDescription>Historial completo de ventas y facturas</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-transparent" variant="outline">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Ver Ventas
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Search className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Búsqueda Avanzada</CardTitle>
                      <CardDescription>Buscar clientes, productos y transacciones</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Search className="mr-2 h-4 w-4" />
                    Búsqueda Avanzada
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <History className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Actividad Reciente</CardTitle>
                      <CardDescription>Últimas transacciones y actividades</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-transparent" variant="outline">
                    <History className="mr-2 h-4 w-4" />
                    Ver Actividad
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Actividad reciente */}
            <Card>
              <CardHeader>
                <CardTitle>Actividad Reciente</CardTitle>
                <CardDescription>Últimas transacciones y cotizaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Receipt className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Factura #001234 emitida</p>
                      <p className="text-xs text-muted-foreground">Cliente: Empresa ABC - $2,500</p>
                    </div>
                    <div className="text-xs text-muted-foreground">Hace 2 horas</div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Cotización #COT-456 creada</p>
                      <p className="text-xs text-muted-foreground">Cliente: Distribuidora XYZ - $8,750</p>
                    </div>
                    <div className="text-xs text-muted-foreground">Hace 4 horas</div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <Users className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Nuevo cliente registrado</p>
                      <p className="text-xs text-muted-foreground">Comercial DEF - Contacto: Juan Pérez</p>
                    </div>
                    <div className="text-xs text-muted-foreground">Ayer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}
