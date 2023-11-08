import { useMutation} from "@tanstack/react-query"

type User = {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
}
type UserLogin = {
    email: string,
    password: string,
}

export const useAuth = () => {
    const Login = useMutation({
        mutationFn: async (data: UserLogin) => {
            const res = await fetch(`${import.meta.env.VITE_WEB_SERVER}/login/`, {
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
            return {message: "Login successfully"}
        },
        onError: (error: string) => {
          return error
        }
    })
    const Signup = useMutation({
        mutationFn: async (data: User) => {
            const res = await fetch(`${import.meta.env.VITE_WEB_SERVER}/signup`, {
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
            return {message: "User Updated successfully"}
        },
        onError: (error: string) => {
          return error
        }
        
    })

   
    

    return {Login, Signup}
}