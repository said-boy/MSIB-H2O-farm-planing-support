import React from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/input";

export default function SignUp() {
  return (
    <Card className="py-4 w-full max-w-[500px] h-[550px]">
      <div className="flex px-10 pt-2 flex-row justify-between items-center">
        <span className="text-sm font-bold">Selamat datang</span>
        <span className="text-tiny">
          Sudah punya akun?{" "}
          <a href="/login" className="text-primary">
            Sign In
          </a>
        </span>
      </div>
      <CardHeader className="pb-0 pt-2 px-10 flex-col items-start">
        <h4 className="font-bold text-4xl pt-6 mb-2">Sign Up</h4>
      </CardHeader>
      <CardBody className="overflow-visible px-10 pt-8">
        <p className="text-sm">Masukkan Email</p>
        <Input className="py-2" type="email" label="Email" />
        <div className="row flex justify-between">
          <div className="col-6">
            <p className="text-sm pt-2">Masukkan Nama</p>
            <Input className="py-2" label="Nama" />
          </div>
          <div className="col-6">
            <p className="text-sm pt-2">Masukkan Nomor Telepon</p>
            <Input className="py-2" label="Nomor telepon" />
          </div>
        </div>
        <p className="text-sm my-2">Masukkan Password</p>
        <Input label="Password" />
        <div className="flex justify-end">
          <Button color="success" className="text-white mt-8 px-16">
            Sign in
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
