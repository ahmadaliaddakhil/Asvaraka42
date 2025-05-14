import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav wrapper-logo">
          <Image
            src={"/logo1.png"}
            alt="Logo Asvaraka42"
            className="logo"
            width={60}
            height={60}
          />
          <h1>ASVARAKA42</h1>
        </div>
        <ul>
          <li className="nav">
            <Link href={"#"} className="link">
              HOME
            </Link>
          </li>
          <li className="nav">
            <Link href={"#about"} className="link">
              ABOUT
            </Link>
          </li>
          <li className="nav">
            <Link href={"#products"} className="link">
              MOVIE
            </Link>
          </li>
          <li className="nav">
            <Link href={"#yearbook"} className="link">
              YEARBOOK
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
