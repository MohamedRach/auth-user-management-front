import { MainNav } from "../components/main-nav"
import DashboardCards from "../components/dashboardCards"
import { Overview } from "../components/overview"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "../../@/components/ui/card"
export default function Dashboard() {
    return (
      <>
        
        <div className="hidden flex-col md:flex">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                <img  src="vite.svg"/>
                <MainNav className="mx-6" />
                
                </div>
            </div>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <DashboardCards />
                </div>
            </div>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-1">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
            </div>
        </div>
    </>
)}