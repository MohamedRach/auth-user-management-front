"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm} from "react-hook-form"
import * as React from "react"
import { cn } from "../../@/lib/utils"
//import { Icons } from "@/components/icons"
import { Button } from "../../@/components/ui/button"
import { Input } from "../../@/components/ui/input"
import { Label } from "../../@/components/ui/label"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../../@/components/ui/form"
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
const formSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email("Invalid Email"),
    password: z.string().min(8, {
      message: "password must be at least 8 characters"
    }),
  })
export function SignupForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    console.log(values)
   
  }
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
      <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem className="w-[400px]">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="JACK" {...field} />
                
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem className="w-[400px]">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="HARLOW" {...field} />
                
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-[400px]">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
                
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-[400px]">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
      
        <Button  type="submit" className="w-[400px]">
          LogIn
        </Button>
      </form>
    </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button className= "bg-primary text-white" variant="outline" type="button" disabled={isLoading}>
        <a href="https://auth-user-management.onrender.com/google/signup" target="_blank" rel="noopener noreferrer">Google</a>
        
      </Button>
    </div>
  )
}