import { LoginForm } from "../components/loginForm"
export default function Login() {
    
    return (
      <>
        
          <div className="lg:p-8 mt-10">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Login to your account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email and password below to enter your account
                </p>
              </div>
              <LoginForm />
              <p className="px-8 text-center text-sm text-muted-foreground">
              
              <a
                href="/signup"
                className="underline underline-offset-4 hover:text-primary"
              >
                Don't have an account, Create your own.
              </a>{" "}
              
            </p>
            </div>

          </div>
        
      </>
    )
}