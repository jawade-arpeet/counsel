import Button from "@/app/components/ui/button";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaThreads,
  FaXTwitter,
} from "react-icons/fa6";

function HomePage() {
  return (
    <>
      <div className={"h-screen"}>
        {/*HEADER*/}

        <header className={"max-w-screen-lg mx-auto px-6 py-4"}>
          <nav className={"flex items-center justify-between"}>
            <Link href="/" className={"font-bold text-2xl"}>
              counsel
            </Link>
            <Link href={"/sign-up"} passHref={true}>
              <Button>Get Started</Button>
            </Link>
          </nav>
        </header>

        {/*BANNER*/}

        <div className={"flex flex-col items-center gap-y-1 mt-20"}>
          <small className={"text-lg font-bold"}>counsel</small>
          <h1
            className={
              "text-4xl text-center lg:mt-4 mx-auto max-w-[80%] lg:max-w-3xl lg:text-5xl"
            }
          >
            Get answers. Find inspiration. Be more productive.
          </h1>
          <p
            className={
              "text-center mx-auto max-w-[90%] mt-1 lg:mt-4 text-lg lg:max-w-xl"
            }
          >
            Free to use. Easy to try. Just ask and counsel can help with
            writing, learning, brainstorming, and more.
          </p>
          <Link href={"/auth"}>
            <Button className={"mt-2"}>Start Now</Button>
          </Link>
        </div>
      </div>
      {/*FOOTER*/}

      <footer className={"bg-stone-100 px-6 py-6"}>
        <div
          className={
            "max-w-screen-lg mx-auto flex flex-wrap gap-y-2 items-center justify-between"
          }
        >
          <p className={"text-sm"}>counsel © 2024–2025</p>
          <div className={"flex items-center gap-x-6"}>
            <FaXTwitter size={18} />
            <FaInstagram size={18} />
            <FaThreads size={18} />
            <FaLinkedin size={18} />
            <FaFacebookF size={18} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
