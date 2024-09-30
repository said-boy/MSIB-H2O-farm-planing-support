import { Button } from "@nextui-org/react"
import React, { useState } from 'react';
import ModalSchedule from "./ModalSchedule";

export default function Schedule() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="w-full h-full grid content-between bg-white text-start rounded-xl p-6">
            <div>
                <h1 className="text-xl font-poppins font-bold mb-10">Jadwal</h1>
                <p className="font-poppins">Hari ini - 24 September 2024</p>
            </div>
            <div>
            <Button onClick={handleModalClick} className="bg-bluewhite bg-opacity-5 text-success mt-20 lg:mt-36 p-7 px-20 font-bold text-lg w-full drop-shadow-[0_4px_12px_rgba(255,221,40,0.2)]">
                View more
            </Button>
            <ModalSchedule isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </div>
    )
}