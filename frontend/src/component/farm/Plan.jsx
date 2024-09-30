import React, { useState } from 'react';
import { Button } from "@nextui-org/react";
import ModalPlan from "./ModalPlan";

export default function Plan() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-full bg-white text-center rounded-xl p-6">
            <h1 className="text-xl font-poppins font-bold mt-5 mb-10">Lorem Lorem Lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste optio praesentium unde nesciunt dolorem fuga, facere cum dolorum delectus quos magni tempora omnis quidem magnam.</p>
            <Button onClick={handleModalClick} color="success" className="text-white mt-10 lg:mt-36 p-7 px-20 font-bold text-lg w-full lg:w-1/3 drop-shadow-[0_4px_12px_rgba(255,221,40,0.2)]">
                Let's go farm
            </Button>
            <ModalPlan isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}