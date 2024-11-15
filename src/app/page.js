import HomeUI from "@/components/homeUI";
import { NavBarHome } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarHome/>
      <main className="flex-grow">
        <HomeUI/>
      </main>
    </div>
  );
}
