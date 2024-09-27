import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ModalBlur from './ModalBlur';

const events = [
    { title: 'Meeting', start: new Date() }
];

export default function Calendar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDateClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='bg-white p-6 rounded-xl font-poppins overflow-scroll'>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                weekends={true}
                events={events}
                eventContent={renderEventContent}
                dateClick={handleDateClick}
                eventClick={handleDateClick}
            />
            <ModalBlur isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

function renderEventContent(eventInfo) {
    return (
        <>
            <i className='truncate'>{eventInfo.event.title}</i>
        </>
    );
}
