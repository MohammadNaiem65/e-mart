import Image from "next/image";


export default function Navbar() {
    return (
        <nav>
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            <h1 className="text-2xl">Home</h1>
        </nav>
    );
}