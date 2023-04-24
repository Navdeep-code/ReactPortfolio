import { useEffect, useState } from "react";
import Head from "next/head";
// import styles from '../styles/Home.module.css'

export default function home() {
  const [education, setEducation] = useState(null);
  useEffect(() => {
    const getEducation = async () => {
      let res = await fetch('/data/education.json');
      let data = await res.json();
      // let edu = data.data;
      setEducation(data);
    }
    getEducation();
  }, []);

  return (
    <>
      <Head>
        <title>My Education</title>
        <script src="https://kit.fontawesome.com/b87bf07b8e.js" crossorigin="anonymous"></script>
        <script src="/js/script.js"></script>
      </Head>

      <header class="header content-wrapper">
        <h2><a href="/">Navdeep's Portfolio</a></h2>
        <nav class="navigation">
          <ul>
            <li><a class="select" href="/education">Education</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
          <button id="menu-btn" class="menu-toggle" aria-label="Togglemenu"><i class="fa-solid fa-bars"></i></button>
        </nav>
      </header>
      <main class="content-wrapper">
        <div class="info-box">
          <ul className="education-detail">
            {education && education.map((edu) => (
              <li key={edu.id}>
                <h3>{edu.Degree}</h3>
                <p>{edu.Discipline}</p>
                <p>{edu.Institute}</p>
                <p>{edu.Location}</p>
                <p>{edu.Started_at}</p>
                <p>{edu.Ended_at}</p>
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