import { useEffect, useState } from "react";
import Head from "next/head";

export default function skill() {
  const [skills, setSkills] = useState(null);
  useEffect(() => {
    const getSkills = async () => {
      let res = await fetch('/data/skills.json');
      let data = await res.json();
      // let edu = data.data;
      setSkills(data);
    }
    getSkills();
  }, []);

  return (
    <>
      <Head>
        <title>My Skills</title>
        <script src="https://kit.fontawesome.com/b87bf07b8e.js" crossorigin="anonymous"></script>
        <script src="/js/script.js"></script>
      </Head>

      <header class="header content-wrapper">
        <h2> <a href="/">Navdeep's Portfolio</a></h2>
        <nav class="navigation">
          <ul>
            <li><a href="/education">Education</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a class="select" href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
          <button id="menu-btn" class="menu-toggle" aria-label="Togglemenu"><i class="fa-solid fa-bars"></i></button>
        </nav>
      </header>
      <main class="content-wrapper">
        <div class="info-skill">
          <ul className="projects">
            {skills && skills.map((skill) => (
              <li key={skill.id}>
                <h3>{skill.Name}</h3>
                <img id="skill-image" src={skill.Image} alt={skill.Name}></img>
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