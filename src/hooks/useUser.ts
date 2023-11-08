import { useMutation, useQuery } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query";
type User = {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
}
interface UpdateUserEntry {
    data: User;
    id: number;
  }
export const useUser = () => {
    const queryClient = useQueryClient();
    const AddUser = useMutation({
        mutationFn: async (data: User) => {
            const res = await fetch(`${import.meta.env.VITE_WEB_SERVER}/users/`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(data),
              });
              if (!res.ok) {
                switch(res.status) {
                  case 404:
                    throw new Error("Page Not Found");
                    break;
                  case 403:
                    throw new Error("Email Or password not correct")
                    break
                  case 500:
                    throw new Error("Something went wrong, try again later")
                    break;
                  case 401:
                    throw new Error("You must be authorized to do this action. if you are try to login again")
                    break
                }
              //
            }
              return res.json()
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getUsers'] });
            return {message: "User added successfully"}
        },
        onError: (error: string) => {
          return error
        }
    })
    const UpdateUser = useMutation({
        mutationFn: async (entry: UpdateUserEntry) => {
            const res = await fetch(`${import.meta.env.VITE_WEB_SERVER}/users/update/${entry.id}`, {
                method: "PATCH",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(entry.data),
              });
              if (!res.ok) {
                switch(res.status) {
                  case 404:
                    throw new Error("Page Not Found");
                    break;
                  case 403:
                    throw new Error("Email Or password not correct")
                    break
                  case 500:
                    throw new Error("Something went wrong, try again later")
                    break;
                  case 401:
                    throw new Error("You must be authorized to do this action. if you are try to login again")
                    break
                }
              //
            }
              return res.json()
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getUsers'] });
            return {message: "User Updated successfully"}
        },
        onError: (error: string) => {
          return error
        }
        
    })

    const DeleteUser = useMutation({
        mutationFn: async (id: number) => {
            const res = await fetch(`${import.meta.env.VITE_WEB_SERVER}/users/delete/${id}`, {
                method: "DELETE",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                
              });
              if (!res.ok) {
                switch(res.status) {
                  case 404:
                    throw new Error("Page Not Found");
                    break;
                  case 403:
                    throw new Error("Email Or password not correct")
                    break
                  case 500:
                    throw new Error("Something went wrong, try again later")
                    break;
                  case 401:
                    throw new Error("You must be authorized to do this action. if you are try to login again")
                    break
                }
              //
            }
              return res.json()
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getUsers'] });
            return {message: "User Deleted successfully"}
        },
        onError: (error: string) => {
          return error
        }
    })

    const getUsers = useQuery({
        queryKey: ["getUsers"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_WEB_SERVER}/users/`, {
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            })
            if (!res.ok) {
                switch(res.status) {
                  case 404:
                    throw new Error("Page Not Found");
                    break;
                  case 403:
                    throw new Error("Email Or password not correct")
                    break
                  case 500:
                    throw new Error("Something went wrong, try again later")
                    break;
                  case 401:
                    //console.log("You must be authorized to do this action. if you are try to login again")
                    throw new Error("You must be authorized to do this action. if you are try to login again")
                    break
                }
              //
            }
            return res.json()
        },
        
    })
    

    return {AddUser, UpdateUser, DeleteUser, getUsers}
}