import { Tabs, Tab } from "@nextui-org/react";
import { HomeIcon } from "../icons/HomeIcon";
import { CalendarIcon } from "../icons/CalendarIcon";
import { BagIcon } from "../icons/BagIcon";
import { LineIcon } from "../icons/LineIcon";
import { ProfileIcon } from "../icons/ProfileIcon";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Menu() {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(location.pathname);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    return (
        <>
            <div className="flex w-full flex-col bg-greendark rounded-xl text-white gap-5">
                <Tabs
                    aria-label="Options"
                    color="success"
                    variant="bordered"
                    selectedKey={activeTab}
                    onSelectionChange={(key) => {
                        setActiveTab(key);
                        navigate(key);
                    }}>
                    <Tab
                        as={Link}
                        to="/"
                        className={`py-6 px-4 ${activeTab === '/' ? 'active' : ''}`}
                        key="/"
                        onClick={() => setActiveTab('/')}
                        title={
                            <div className="flex items-center space-x-2 ">
                                <HomeIcon />
                            </div>
                        }
                    />
                    <Tab
                        as={Link}
                        to="/farm"
                        className={`py-6 px-4 ${activeTab === '/farm' ? 'active' : ''}`}
                        key="/farm"
                        onClick={() => setActiveTab('/farm')}
                        title={
                            <div className="flex items-center space-x-2">
                                <CalendarIcon />
                            </div>
                        }
                        />
                    <Tab
                        as={Link}
                        to="/market"
                        className="py-6 px-4"
                        key="/market"
                        onClick={() => setActiveTab('/market')}
                        title={
                            <div className="flex items-center space-x-2">
                                <BagIcon />
                            </div>
                        }
                    />
                    <Tab
                        className="py-6 px-0"
                        isDisabled={true}
                        key="pip"
                        title={
                            <div className="flex items-center space-x-2">
                                <LineIcon />
                            </div>
                        }
                    />
                    <Tab
                        className="py-6 px-4"
                        key="profile"
                        title={
                            <div className="flex items-center space-x-2">
                                <ProfileIcon />
                            </div>
                        }
                    />
                </Tabs>
            </div>
        </>
    );
}