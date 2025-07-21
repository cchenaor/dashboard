"use client"

import { Package, AlertTriangle, Plus, Edit, Trash2, Eye, ShoppingCart, TrendingUp, DollarSign } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Datos de ejemplo para los productos
const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    availableQuantity: 15,
    reservedQuantity: 3,
    status: "En stock",
  },
  {
    id: 2,
    name: "Mouse Logitech MX Master",
    availableQuantity: 0,
    reservedQuantity: 2,
    status: "Agotado",
  },
  {
    id: 3,
    name: "Teclado Mecánico RGB",
    availableQuantity: 8,
    reservedQuantity: 1,
    status: "En stock",
  },
  {
    id: 4,
    name: "Monitor 4K Samsung",
    availableQuantity: 5,
    reservedQuantity: 0,
    status: "En stock",
  },
  {
    id: 5,
    name: "Auriculares Sony WH-1000XM4",
    availableQuantity: 0,
    reservedQuantity: 5,
    status: "Agotado",
  },
  {
    id: 6,
    name: "Webcam Logitech C920",
    availableQuantity: 12,
    reservedQuantity: 2,
    status: "En stock",
  },
  {
    id: 7,
    name: "Tablet iPad Air",
    availableQuantity: 3,
    reservedQuantity: 1,
    status: "Bajo stock",
  },
  {
    id: 8,
    name: "Impresora HP LaserJet",
    availableQuantity: 0,
    reservedQuantity: 0,
    status: "En camino",
  },
]

// Calcular métricas actualizadas
const productsInStock = products.filter((product) => product.availableQuantity > 0).length
const totalReservedProducts = products.reduce((sum, product) => sum + product.reservedQuantity, 0)
const recentEntries = 12 // Simulado - entradas de los últimos 7 días
const recentSales = 28 // Simulado - ventas de los últimos 7 días
const outOfStockProducts = products.filter((product) => product.availableQuantity === 0).length

export default function InventoryDashboard() {
  const getStatusBadge = (status: string, availableQuantity: number) => {
    if (status === "Agotado" || availableQuantity === 0) {
      return <Badge variant="destructive">Agotado</Badge>
    }
    if (status === "En camino") {
      return <Badge variant="secondary">En camno</Badge>
    }
    if (availableQuantity <= 3) {
      return (
        <Badge variant="outline" className="border-yellow-500 text-yellow-600">
          Bajo stock
        </Badge>
      )
    }
    return (
      <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">
        En stock
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header - Ahora completamente visible */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard de Inventario</h1>
          <p className="text-gray-600 mt-2">Gestiona y monitorea tu inventario en tiempo real</p>
        </div>
        <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          Agregar Producto
        </Button>
      </div>

      {/* Métricas - 5 indicadores */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card className="border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Productos en Stock</CardTitle>
            <Package className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{productsInStock}</div>
            <p className="text-xs text-gray-500 mt-1">Productos disponibles</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Productos Reservados</CardTitle>
            <ShoppingCart className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{totalReservedProducts}</div>
            <p className="text-xs text-gray-500 mt-1">Unidades reservadas</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Entradas Recientes</CardTitle>
            <TrendingUp className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{recentEntries}</div>
            <p className="text-xs text-gray-500 mt-1">Últimos 7 días</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Ventas Recientes</CardTitle>
            <DollarSign className="h-5 w-5 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{recentSales}</div>
            <p className="text-xs text-gray-500 mt-1">Últimos 7 días</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Productos Agotados</CardTitle>
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{outOfStockProducts}</div>
            <p className="text-xs text-gray-500 mt-1">Requieren reposición</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de Productos */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Inventario de Productos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold text-gray-900">Nombre del Producto</TableHead>
                  <TableHead className="text-center font-semibold text-gray-900">Cantidad Disponible</TableHead>
                  <TableHead className="text-center font-semibold text-gray-900">Cantidad Reservada</TableHead>
                  <TableHead className="text-center font-semibold text-gray-900">Estado</TableHead>
                  <TableHead className="text-center font-semibold text-gray-900">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-900">{product.name}</TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`font-semibold ${
                          product.availableQuantity === 0
                            ? "text-red-600"
                            : product.availableQuantity <= 3
                              ? "text-yellow-600"
                              : "text-green-600"
                        }`}
                      >
                        {product.availableQuantity}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-medium text-blue-600">{product.reservedQuantity}</span>
                    </TableCell>
                    <TableCell className="text-center">
                      {getStatusBadge(product.status, product.availableQuantity)}
                    </TableCell>
                    <TableCell className="text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-gray-100">
                            <span className="sr-only">Abrir menú</span>
                            <div className="h-4 w-4">⋯</div>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            Ver detalles
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Edit className="h-4 w-4" />
                            Editar producto
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                            <Trash2 className="h-4 w-4" />
                            Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
