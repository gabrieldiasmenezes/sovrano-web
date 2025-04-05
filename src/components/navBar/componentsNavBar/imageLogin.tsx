import Link from "next/link";

export default function ImageLogin(){
    return(
        <Link href="/Login">
          <img
            className="size-10 rounded-full border-2 border-white hover:opacity-80"
            src="https://github.com/gabrieldiasmenezes.png"
            alt="Login"
          />
        </Link>
    )
}