import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { FaGear } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Home(): JSX.Element {
    const navigate = useNavigate();

    const handleCreateHabitClick = () => {
        console.log("Create habit clicked");
        navigate('/create-habit');
    };

    return (
        <div style={{ height: "100vh", width: "100vw", margin: 0, padding: 0 }}>
            <Navbar>
                <NavbarContent justify="start">
                    <NavbarItem>
                        <Button isIconOnly aria-label="Like" variant="light">
                            <FaGear style={{ fontSize: "20px" }} />
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="center">
                    <NavbarBrand>
                        <p className="font-bold text-inherit">Habits</p>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button color="primary" variant="shadow" startContent={<IoIosAddCircle style={{ fontSize: "24px" }} />} onClick={handleCreateHabitClick}>
                            Create habit
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    );
}

export default Home;