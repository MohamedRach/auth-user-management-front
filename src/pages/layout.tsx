
import { SidebarNav } from "../components/settings/sidebarNav"
import { MainNav } from "../components/main-nav"


const sidebarNavItems = [
  {
    title: "Profile",
    href: "/profile",
  },
  {
    title: "API key",
    href: "/api",
  },
  
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
            <img  src="vite.svg"/>
            <MainNav className="mx-6" />
        </div>
    </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}