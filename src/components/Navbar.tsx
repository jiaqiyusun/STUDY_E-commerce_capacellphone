import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar= () => {
    return (<nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper className="" >
            <div className="flex h-14 items-center justify-between border-b border-ainc-200">
                <Link href={"/"} className="flex z-40 dont-semibold">
                    case<span className="text-green-600">cobre</span>
                </Link>
            </div>
        </MaxWidthWrapper>
    </nav>);
    
}

export default Navbar;;