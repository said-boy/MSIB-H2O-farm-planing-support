import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

export default function ModalPlan({ isOpen, onClose }) {
    return (
        <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} placement="center" className="mx-5">
            <ModalContent className="modal-content">
                <>
                    <ModalHeader className="flex flex-col gap-1">Modal Plan</ModalHeader>
                    <ModalBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam pulvinar risus non risus hendrerit venenatis.
                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    );
}
