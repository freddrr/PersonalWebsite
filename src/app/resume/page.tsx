import Link from "next/link";
import Image from "next/image";

export default function ResumePage() {
    return (
        <div>
            <h1 className="text-center font-bold">
                Resume
            </h1>
            <h2>
                Texas A&M University
            </h2>
            <ul>
                <li> Bachelor of Science in Computer Engineering </li>
            </ul>
            <Image
                src="/avebrsmjx.webp"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
            <Link href="/"> Return Home </Link>
        </div>
    );
}