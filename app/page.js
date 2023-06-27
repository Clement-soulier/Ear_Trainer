import TopBarHome from "./component/topBarHome.js";
import './home.css';
import Link from 'next/link';

export default function Page() {
    return (
      <>
        <TopBarHome />
        <div className="HomeScreen">
          <img className="logo" src="logo-light.png" alt="logo-light"/>
          <Link href={"/Lessons"} className="button">Lessons</Link>
          <Link href={'/About'} className="button">About</Link>
          <Link href={"mailto:clement.soulier12@gmail.com"} className="button">Contact</Link>
        </div>
      </>
    );
  }