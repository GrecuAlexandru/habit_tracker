import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

interface HabitModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const HabitModal: React.FC<HabitModalProps> = ({ isOpen, onClose }) => {
    return (
        <>
            <Modal
                size={"5xl"}
                isOpen={isOpen}
                onClose={onClose}
                hideCloseButton={true}
                backdrop="opaque"
                className="custom-theme text-foreground bg-background"
                style={{ backgroundColor: "#292828" }}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}>
                <ModalContent>
                    <ModalHeader className="flex justify-center items-center">
                        <p className="font-bold text-inherit">New habit</p>
                    </ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter className="flex justify-between">
                        <Button color="white" variant="light" onPress={onClose}>
                            Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                            Done
                        </Button>
                    </ModalFooter>
                </ModalContent >
            </Modal >
        </>
    );
};

export default HabitModal;