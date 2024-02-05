import React, { FC } from "react";
import Link from "next/link";
import { Button } from "../../button";
import { RxPlus } from "react-icons/rx";
interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="pb-3 mb-8 flex flex-row justify-between items-center border-border">
      <div>
        <div className="font-semibold">Company</div>
        <div>Twitter</div>
      </div>
      <div>
        <Button asChild className="rounded-none p-3">
          <Link href="/post-a-job">
            <RxPlus className="mr-2 w-4 h-4" /> Post a Job
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
