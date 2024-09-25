import { Button } from "@nextui-org/react";

export default function ContactUs() {
    return (
        <>
            <div>
                <div className="md:flex md:flex-col">
                    <h1 className="font-bold text-4xl pb-4 pt-8 mb-5 font-poppins font-semibold md:text-center">Kami menunggu kehadiran anda.</h1>
                    <p className="text-center">Bergabunglah dengan kami dan jadilah bagian dari misi penghijauan dunia. setiap langkah kecil Anda membawa perubahan besar!</p>
                    <Button color="success" className="text-white mt-12 p-7 px-20 font-bold text-lg w-full md:w-1/3 md:self-center drop-shadow-[0_4px_12px_rgba(255,221,40,0.2)]">
                        Let's go farm
                    </Button>
                </div>
                <div className="bg-bluedark flex items-center justify-center h-32 w-full mt-20 rounded-xl">
                    <h1 className="text-white font-semibold text-center font-poppins">Made With 💝 <br />Gunung Tondano</h1>
                </div>
            </div>
        </>
    );
}