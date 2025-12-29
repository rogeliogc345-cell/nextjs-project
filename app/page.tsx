import CardExample from "@/components/CardExample";
import Image from "next/image";

export default function Home() {
  return (
    
    <div className="flex flex-col items-center justify-center  bg-amber-300 p-2.5 gap-3">
      <h1 className="font-bold text-4xl text-white">New page and adding changes</h1>
      <p className="text-justify  text-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptate! Sapiente quisquam, distinctio commodi minima nam earum quae minus explicabo. Dolore laudantium esse ab, aliquid minima vero error beatae adipisci?
      </p>
      <CardExample />
      <Image src="/images/logo.png" alt="logo" width={500} height={500} />
    </div>
  );
}
