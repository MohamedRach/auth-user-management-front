"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
  } from "../../../@/components/ui/dropdown-menu"
  import { Button } from "../../../@/components/ui/button"
export type User = {
  id: number
  username: string
  email: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-center">ID</div>,
    cell: ({ row }) => {
        const id = parseFloat(row.getValue("id"))
        const formatted = new Intl.NumberFormat("en-US").format(id)
   
        return <div className="text-center font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "email",
    header: () => <div className="text-center">Email</div>,
    cell: ({ row }) =>  {
        const email: string = row.getValue("email")
        return <div className="text-center font-medium">{email}</div>
    }
   
  },
  {
    accessorKey: "username",
    header: () => <div className="text-center">Username</div>,
    cell: ({ row }) => {
        const username: string = row.getValue("username")
        return <div className="text-center font-medium">{username}</div>
    }
    
  },
  {
    id: "actions",
    cell: (/*{ row }*/) => {
      //const user = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Update User</DropdownMenuItem>
            <DropdownMenuItem>Delete User</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
}
]
