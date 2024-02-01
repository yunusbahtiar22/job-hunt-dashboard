import React, { FC } from "react";
import { Button } from "../../button";
import {
  RxHome,
  RxEnvelopeClosed,
  RxCube,
  RxFace,
  RxBackpack,
  RxCalendar,
  RxGear,
  RxExit,
} from "react-icons/rx";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-3 px-4 text-lg font-semibold hover:text-primary">
            Dashboard
          </h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <RxHome className="mr-2 text-lg" />
              Home
            </Button>
          </div>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <RxEnvelopeClosed className="mr-2 text-lg" />
              Messages
            </Button>
          </div>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <RxCube className="mr-2 text-lg" />
              Company Profile
            </Button>
          </div>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <RxFace className="mr-2 text-lg" />
              Applicants
            </Button>
          </div>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <RxBackpack className="mr-2 text-lg" />
              Job Listings
            </Button>
          </div>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <RxCalendar className="mr-2 text-lg" />
              My Schedules
            </Button>
          </div>
        </div>
      </div>
      <div className="px-3 py-2">
        <h2 className="mb-3 px-4 text-lg font-semibold hover:text-primary">
          Settings
        </h2>
        <div className="space-y-3">
          <Button
            variant={"ghost"}
            className="w-full justify-start rounded-none hover:text-primary"
          >
            <RxGear className="mr-2 text-lg" />
            Settings
          </Button>
        </div>
        <div className="space-y-3">
          <Button
            variant={"ghost"}
            className="w-full justify-start rounded-none text-red-700 hover:text-red-500"
          >
            <RxExit className="mr-2 text-lg" />
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
