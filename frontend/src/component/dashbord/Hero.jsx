import background from "../../assets/images/bg-signin.jpg";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

export default function Hero() {
    return (
        <>
            <div className="flex gap-8 px-5 pt-28 bg-soft">
                <div>
                    <h1 className="text-5xl font-bold">Nero Farm.</h1>
                    <p className="pt-10">Neró Farm diambil dari kata Nero(Air) dan Farm(Berkebun) yang bisa diartikan secara lengkap yaitu perkebunan yang cara pertumbuhannya  lebih banyak menggunakan media air atau Hidroponik.
                        Maksud dari Situs Web Nero Farm adalah Situs berbasis Web yang menyajikan informasi mengenai Hidroponik dan Jual tanaman Hidroponik.</p>
                    <Button color="success" className="text-white mt-36 p-7 px-20 font-bold text-lg">
                        Let's go farm
                    </Button>
                </div>
                <img src={background} alt="" className="w-1/2 rounded-xl -mt-20" />
            </div>
            <div className="bg-soft flex flex-col text-center justify-center items-center pt-20">
                <h1 className="font-bold text-4xl mb-5">Lorem Lorem Lorem</h1>
                <p className="xl:mx-72 md:mx-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem facilis molestiae, nam voluptas nesciunt illo laborum fuga sequi accusamus recusandae iure autem amet quasi minus debitis iusto veritatis facere suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere rem consectetur quibusdam earum voluptates adipisci praesentium perferendis quidem quia, odit doloribus, in commodi maxime.</p>
            </div>
        </>
    );
}