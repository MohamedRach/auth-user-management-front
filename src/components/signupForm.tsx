"use client"

import * as React from "react"
import { cn } from "../../@/lib/utils"
//import { Icons } from "@/components/icons"
import { Button } from "../../@/components/ui/button"
import { Input } from "../../@/components/ui/input"
import { Label } from "../../@/components/ui/label"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignupForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-3">
          <Label className="sr-only" htmlFor="email">
              First Name
            </Label>
            <Input
              id="first_name"
              placeholder="Jack"
              type="text"
              disabled={isLoading}
              className="border-2"
            />
            <Label className="sr-only" htmlFor="email">
              Last Name
            </Label>
            <Input
              id="last_name"
              placeholder="Harlow"
              type="text"
              disabled={isLoading}
              className="border-2"
            />
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="border-2"
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="Password"
              placeholder="Your Password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              className="border-2"
            />
          </div>
          <Button className="text-white" disabled={isLoading}>
            
            Log In
          </Button>
        </div>
      </form>
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
        
        Google
      </Button>
    </div>
  )
}