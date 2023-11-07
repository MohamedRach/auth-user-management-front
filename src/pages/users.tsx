import { MainNav } from "../components/main-nav"
import { User, columns } from "../components/usersTable/columns"
import { DataTable } from "../components/usersTable/dataTable"
export default function Users() {
    const data: User[] = [
        {
            id: 1,
            username: "hamido",
            email: "hamido@gmail.com"
        },
        {
            id: 2,
            username: "youssefo",
            email: "youssefo@outlook.com"
        }
    ]
    return (
        <>
          <div className="hidden flex-col md:flex">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                <img  src="vite.svg"/>
                <MainNav className="mx-6" />
                </div>
            </div>
            <div className="h-screen flex-1 p-7">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Users</h2>
                    
                </div>
                <div className="container mx-auto mt-O py-10">
                    <DataTable columns={columns} data={data}/>
                </div>
            </div>
        </div> 
        </>
    )
}