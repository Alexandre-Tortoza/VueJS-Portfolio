<template>
  <div id="corpoAPP">
    <nav>
      <div><h1>GRMS</h1></div>
      <div id="linksNav">
        <router-link to="/">painel</router-link> 
        <router-link to="/projetos">Proejtos</router-link>
        <router-link to="/contratos">contratos</router-link>
        <router-link to="/vagas">Vagas</router-link>
        <router-link to="/usuarios">Usuarios</router-link>
      </div>
      <div></div>
    </nav>
    <div id="painelsAPP">
      <router-view/>
    </div>
  </div>
</template>

<style>
/* RESET */
  
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      font-family: "Roboto", sans-serif;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
/**/
div#corpoAPP{
  display: flex;
  background-color: #f3f3f3;
  width: 100VW;
  height: 100vh;  
}
div#painelsAPP{
  width: 100vw;
  height: 100vh;
  overflow: auto;
  padding: 1rem;
}
div#linksNav{
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  margin: 1rem 0;
}
nav{ 
  /* position: fixed; */
  background-color: #141414;
  height: 100vh;
  width: calc(15vw - 1rem);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  text-transform: uppercase;
  font-weight: bold;
}
nav a{
  text-decoration: none;
  color: #f3f3f3;
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: #282828;
}
nav h1{
  color: #f3f3f3;
  text-transform: uppercase;
  text-align: center;
}

</style>
