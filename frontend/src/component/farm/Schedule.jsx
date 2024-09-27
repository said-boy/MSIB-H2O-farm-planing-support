import { Button } from "@nextui-org/react"

export default function Schedule() {
    return (
        <div className="w-full bg-white text-start rounded-xl p-6">
            <h1 className="text-xl font-poppins font-bold mb-10">Jadwal</h1>
            <p className="font-poppins">Hari ini - 24 September 2024</p>
            <Button className="bg-bluewhite bg-opacity-5 text-success mt-20 lg:mt-36 p-7 px-20 font-bold text-lg w-full drop-shadow-[0_4px_12px_rgba(255,221,40,0.2)]">
                View more
            </Button>
        </div>
    )
}