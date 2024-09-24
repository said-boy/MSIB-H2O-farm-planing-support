import React from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/input";

export default function SignIn() {
  return (
    <Card className="py-4 w-full max-w-[400px] h-[550px]">
      <div className="flex px-10 pt-2 flex-row justify-between items-center">
        <span className="text-sm font-bold">Selamat datang</span>
        <span className="text-tiny">
          Tidak punya akun?{" "}
          <a href="/signup" className="text-primary">
            Sign up
          </a>
        </span>
      </div>
      <CardHeader className="pb-0 pt-2 px-10 flex-col items-start">
        <h4 className="font-bold text-4xl py-10">Sign in</h4>
      </CardHeader>
      <CardBody className="overflow-visible px-10 pt-12">
        <p className="text-sm">Masukkan Email</p>
        <Input className="py-2" type="email" label="Email" />
        <p className="text-sm my-2">Masukkan Password</p>
        <Input label="Password" />
        <div className="flex justify-end">
          <Button color="success" className="text-white mt-16 px-16">
            Sign in
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
