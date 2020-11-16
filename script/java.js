<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Document</title>
    <link rel="shortcut icon" href="#" />
  </head>

  <style>
    body,
    p,
    h1,
    h2,
    ul,
    li {
      margin: 0px;
      padding: 0px;
    }

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: black;
    }

    *::after,
    *::before {
      box-sizing: border-box;
    }

    * {
      box-sizing: border-box;
    }

    img {
      display: block;
      max-width: 100%;
    }
    /* FIM DO RESET */
    :root {
      font-size: 62.5%;
    }

    body {
      background-color: #1e1f26;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .menu {
      margin-top: 200px;
      background: cornflowerblue;
      width: 90px;
      height: 90px;
      position: relative;
      border-radius: 15px;
      cursor: pointer;
      transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    main.menuOpen {
      height: 320px;
    }
    /* tres traçõs */
    .button {
      display: block;
      background: rgb(228, 228, 228);
      width: 40px;
      height: 3px;
      position: absolute;
      top: 42px;
      left: 25px;
      transition: 0.4s ease-in-out;
    }
    .button:after,
    .button:before {
      display: block;
      background: rgb(228, 228, 228);
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      transition: 0.4s ease-in-out;
    }
    .button:before {
      top: -12px;
    }
    .button:after {
      bottom: -12px;
    }
    /* rotação do botao */
    .menuOpen .button {
      transform: rotate(45deg);
    }
    .menuOpen .button:before {
      transform: rotate(90deg);
      top: 0;
    }
    .menuOpen .button:after {
      transform: rotate(90deg);
      bottom: 0;
    }

    .atalhos {
      margin-top: 90px;
    }

    .atalhos p {
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      margin-bottom: 35px;
      text-align: center;
      display: none;
      opacity: 0;
    }

    .menuOpen .atalhos p {
      animation: vemNenem 1s ease forwards;
      display: block;
    }

    .atalhos img {
      opacity: 0;
      display: block;
      margin: 10px auto;
    }
    .menuOpen .atalhos img {
      animation: vemNenem 0.8s ease forwards;
    }

    @keyframes vemNenem {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  </style>

  <body>
    <main class="menu menuClosed" onclick="callback()">
      <div class="button"></div>
      <section class="atalhos">
        <a href="#"
          ><img src="/images/001-informacoes.svg" alt="" />
          <p>Sobre</p></a
        >
        <a href="#"
          ><img src="/images/002-identificacao.svg" alt="" />
          <p>Contato</p></a
        >
        <a href="#">
          <img src="/images/003-mais.svg" alt="" />
          <p>Mais</p></a
        >
      </section>
    </main>
  </body>

  <script>
    const menu = document.querySelector(".menu");

    function callback() {
      menu.classList.toggle("menuOpen");
      menu.classList.toggle("menuClosed");
    }
    function target(event) {
      if (coisa.target != menu) {
        menu.classList.add("menuClosed");
        menu.classList.remove("menuOpen");
      }
    }
    document.addEventListener("click", target);
  </script>
</html>
