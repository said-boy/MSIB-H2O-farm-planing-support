import { Tabs, Tab } from "@nextui-org/react";
import { HomeIcon } from "../icons/HomeIcon";
import { CalendarIcon } from "../icons/CalendarIcon";
import { BagIcon } from "../icons/BagIcon";
import { LineIcon } from "../icons/LineIcon";
import { ProfileIcon } from "../icons/ProfileIcon";

export default function Menu() {
    return (
        <>
            <div className="flex w-full flex-col bg-greendark rounded-xl text-white gap-5">
                <Tabs aria-label="Options" color="success" variant="bordered">
                    <Tab
                    className="py-6 px-4"
                    key="photos"
                    title={
                        <div className="flex items-center space-x-2 ">
                                <HomeIcon />
                            </div>
                        }
                        />
                    <Tab
                        className="py-6 px-4"
                        key="music"
                        title={
                            <div className="flex items-center space-x-2">
                                <CalendarIcon />
                            </div>
                        }
                    />
                    <Tab
                        className="py-6 px-4"
                        key="videos"
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