import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <span className="absolute left-3 text-gray-400">
          <Search size={16} />
        </span>
        <Input
          type="text"
          placeholder="Search"
          className="pl-10 rounded-none rounded-l-md"
        />
      </div>

      <Button className="rounded-none rounded-r-md">Search</Button>
    </div>
  );
};

export default Searchbar;
