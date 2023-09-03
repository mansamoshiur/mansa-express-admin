import { UserButton } from "@clerk/nextjs";
import MobilSidbar from "./mobil-sidbar";

export default function Navbar() {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-8">
        <MobilSidbar />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}
