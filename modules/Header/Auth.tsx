"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Login } from "@/service/Auth"
import { Dispatch, FC, FormEvent, SetStateAction } from "react"

export const Auth:FC<{closeAction:Dispatch<SetStateAction<boolean>>}> = ({closeAction}) => {
    const mutate = Login()
    function handleLogin(e:FormEvent){
      e.preventDefault()
      const data = {
        email: ( e.target as HTMLFormElement).email.value,
        password: ( e.target as HTMLFormElement).password.value
      }
      mutate.mutate(data)
      closeAction(false)
    }
  return (
    <Tabs defaultValue="login" className="w-[400px] mx-auto ">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <form onSubmit={handleLogin}>
          <CardContent className="space-y-2 mb-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input name="email" autoComplete="off" id="email" placeholder="email@example.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input name="password" autoComplete="off" id="password" type="password" placeholder="*********" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" >Login</Button>
          </CardFooter>
          </form>
        
        </Card>
      </TabsContent>

      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="fullName">Enter your full Name</Label>
              <Input id="fullName" placeholder="John Doe"  type="text"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Enter your Email</Label>
              <Input id="email" placeholder="email@example.com" type="text"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" >Enter your Password</Label>
              <Input id="password" type="password" placeholder="*********" />
            </div>
          </CardContent>
          <CardFooter>
            <Button >Register</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
