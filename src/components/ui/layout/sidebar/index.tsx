import React, { FC } from "react";
import { Button } from "../../button";
import Link from "next/link";
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
              asChild
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <Link href={"/"}>
                <RxHome className="mr-2 text-lg" />
                Home
              </Link>
            </Button>
          </div>
          <div className="space-y-3">
            <Button
              asChild
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <Link href={"/"}>
                <RxEnvelopeClosed className="mr-2 text-lg" />
                Messages
              </Link>
            </Button>
          </div>
          <div className="space-y-3">
            <Button
              asChild
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <Link href={"/"}>
                <RxCube className="mr-2 text-lg" />
                Company Profile
              </Link>
            </Button>
          </div>
          <div className="space-y-3">
            <Button
              asChild
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <Link href={"/"}>
                <RxFace className="mr-2 text-lg" />
                Applicants
              </Link>
            </Button>
          </div>
          <div className="space-y-3">
            <Button
              asChild
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <Link href={"/"}>
                <RxBackpack className="mr-2 text-lg" />
                Job Listings
              </Link>
            </Button>
          </div>
          <div className="space-y-3">
            <Button
              asChild
              variant={"ghost"}
              className="w-full justify-start rounded-none  hover:text-primary"
            >
              <Link href={"/"}>
                <RxCalendar className="mr-2 text-lg" />
                My Schedules
              </Link>
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
            asChild
            variant={"ghost"}
            className="w-full justify-start rounded-none hover:text-primary"
          >
            <Link href={"/"}>
              <RxGear className="mr-2 text-lg" />
              Settings
            </Link>
          </Button>
        </div>
        <div className="space-y-3">
          <Button
            asChild
            variant={"ghost"}
            className="w-full justify-start rounded-none text-red-700 hover:text-red-500"
          >
            <Link href={"/"}>
              <RxExit className="mr-2 text-lg" />
              Log Out
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
