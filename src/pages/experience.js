import { useEffect, useState } from "react";
import Head from "next/head";

export default function experience() {
  const [experience, setExp] = useState(null);
  useEffect(() => {
    const getExp = async () => {
      let res = await fetch('/data/experience.json');
      let data = await res.json();
      // let exp = data.data;
      setExp(data);
    }
    getExp();
  }, []);

  return (
    <>
      <Head>
        <title>Experience</title>
        <script src="https://kit.fontawesome.com/b87bf07b8e.js" crossorigin="anonymous"></script>
        <script src="/js/script.js"></script>
      </Head>

      <header class="header content-wrapper">
        <h2><a href="/">Navdeep's Portfolio</a></h2>
        <nav class="navigation">
          <ul>
            <li><a href="/education">Education</a></li>
            <li><a class="select" href="/experience">Experience</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
          <button id="menu-btn" class="menu-toggle" aria-label="Togglemenu"><i class="fa-solid fa-bars"></i></button>
        </nav>
      </header>
      <main class="content-wrapper">
        <div class="info-box">
          <ul className="experience">
            {experience && experience.map((exp) => (
              <li key={exp.id}>
                <h3>{exp.Company}</h3>
                <p>{exp.Title}</p>
                <p>{exp.Start}</p>
                <p>{exp.End}</p>
                <p>{exp.Location}</p>
                <p>{exp.Description}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>


      <footer class="content-wrapper">
        <div class="footerfields">
          <div id="apps">
            <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="Mail"><i class="fa-sharp fa-solid fa-envelope"></i></a>
          </div>
          <form id="main-form" action="#" method="post">
            <label for="mail">Contact me:</label>
            <input type="email" placeholder="janedoe@gmail.com" id="mail"></input>
            <input id="signup" type="submit" value="Connect"></input>
          </form>
        </div>
        <div class="copy">&copy; Navdeep Kaur, 2023</div>
      </footer>
    </>
  );
}