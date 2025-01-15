import React from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 

import logo from "../../assets/images/logo.png";
import image from "../../assets/images/files.png";

const Login = () => {

  return (
    <>
      <div className="flex min-h-screen ">
        <section className="bg-[#56B8FF] lg:w-[35%] hidden lg:flex flex-col justify-center items-center gap-10">
          <div className="flex items-center w-[70%] mx-auto gap-3 ">
            <img src={logo} alt="" className="h-16 w-16" />
            <p className="text-2xl font-semibold text-gray-100">Store-It</p>
          </div>

          <div className="w-[70%] space-y-5 ">
            <h1 className="text-4xl font-bold text-stone-50">
              Best Place to manage your files
            </h1>
            <p className=" text-stone-50">
              {" "}
              Awesome, we've created the perfect place for you to store all your
              documents.
            </p>
          </div>
          <div className="flex justify-center ">
            <img src={image} alt="" className="h-60" />
          </div>
        </section>
        <section className="flex items-center justify-center">
        <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
          
        </section>
      </div>
    </>
  );
};

export default Login;
