import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Navdeep`s Portfolio</title>
        <script src="https://kit.fontawesome.com/b87bf07b8e.js" crossorigin="anonymous"></script>
        <script src="/js/script.js"></script>
      </Head>

      <header class="header content-wrapper">
        <h2> <a id="heading" href="/">Navdeep's Portfolio</a></h2>
        <nav class="navigation">
          <ul>
            <li><a href="/education">Education</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
          <button id="menu-btn" class="menu-toggle" aria-label="Togglemenu"><i class="fa-solid fa-bars"></i></button>
        </nav>
      </header>

      <main class="content-wrapper">
        <div class="info">
          <h1>Welcome to my Portfolio</h1>
          <img class="profile" alt="profile pic" src='/image/profile.png'></img>
          <p>Get to know the professional work done by me.</p>
          <p>Being a web developer has been my dream and goal always. I managed to become a fullstack developer.
            I can deveop website using industries latest work requirement and technologies without any issues.
          </p>
          <p>MY experience has been nothing but a stepping stone for me to keep forging ahead always. I love
            to learn and this work keeps me updated with every language and framework and other technology as well
          </p>
          <p>
            Have me to do your work and have the best results you ever ask for. Let the perfection do its duty
            and let`s change scenario around us and become the best.
          </p>
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
  )
}

