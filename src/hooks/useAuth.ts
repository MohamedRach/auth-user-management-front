import { useMutation, useQuery} from "@tanstack/react-query"

type User = {
    firstName: string,
    lastName: string,
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
            const res = await fetch(`${import.meta.env.VITE_WEB_SERVER}/login?redirect=${import.meta.env.VITE_REDIRECT}`, {
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
            const res = await fetch(`${import.meta.env.VITE_WEB_SERVER}/signup?redirect=${import.meta.env.VITE_REDIRECT}`, {
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
    const getApiKey = useQuery({
      queryKey: ["getApiKey"],
      queryFn: async () => {
          const res = await fetch(`${import.meta.env.VITE_WEB_SERVER}/apiKey`, {
              method: "GET",
              credentials: "include",
              headers: { "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": "true", },
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

   
    

    return {Login, Signup, getApiKey}
}