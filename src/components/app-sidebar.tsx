import { BarChart3, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AppSidebarProps {
  isCollapsed: boolean
  onDashboardClick: () => void
  onVentasClick: () => void
}

export function AppSidebar({ isCollapsed, onDashboardClick, onVentasClick }: AppSidebarProps) {
  return (
    <div className="h-full bg-white border-r px-2 py-4 space-y-2">
      <Button variant="ghost" className="w-full justify-start" onClick={onDashboardClick}>
        <BarChart3 className="w-4 h-4 mr-2" />
        {!isCollapsed && "Dashboard"}
      </Button>
      <Button variant="ghost" className="w-full justify-start" onClick={onVentasClick}>
        <ShoppingCart className="w-4 h-4 mr-2" />
        {!isCollapsed && "Ventas"}
      </Button>
    </div>
  )
}
