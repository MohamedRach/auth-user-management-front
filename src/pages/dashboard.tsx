
import { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "../../@/components/ui/card"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom";
import { Button } from "../../@/components/ui/button";

export default function Dashboard() {
    
    const navigate = useNavigate()
    const [showPassword, setShowPassword] =  useState(false)
    const {getApiKey} = useAuth();
    const showPasswordFunction = () => {
      if (showPassword) {
        setShowPassword(false)
      } else {
        setShowPassword(true)
      }
    }

    const logOut = () => {
     
      navigate("/login")
    }

    return (
      <>
        
        <div className="hidden flex-col md:flex">
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-1">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>This is your Api Key: {(getApiKey.data == undefined )? "your not authorized try to login" : (showPassword && getApiKey.data.length != 0 ) ? getApiKey.data[0].apiKey : "*********************"}</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Button className = "text-white" onClick={() => showPasswordFunction()}>Show Api Key </Button>
                    <Button className = "text-white" onClick={() => logOut()}>Log out </Button>
                  </CardContent>
                </Card>
            </div>
        </div>
    </>
)}