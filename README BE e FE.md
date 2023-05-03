<a name="readme-top"></a>
<br />
<div align="center">
  <a href="https://res.cloudinary.com/dpb7beo1e/image/upload/v1681832196/white_logo_color_background_qii5ot.jpg">
    <img src="https://res.cloudinary.com/dpb7beo1e/image/upload/v1681832196/white_logo_color_background_qii5ot.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">errSmart</h3>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

<img src="https://res.cloudinary.com/dpb7beo1e/image/upload/v1682611170/first_zhi96j.png" width="1400" height="700">
Il capstone project “errSmart” vuole ricreare un portale web di prodotti hi-tech con più funzionalità:

- accesso diversificato da cliente a dipendente 
- creazione utente semplificata in home page
- Visualizzazione dei prodotti con le sue caratteristiche e con il prezzo d’acquisto 
- Possibilità di creare un carrello di prodotti da ritirare in negozio
- Possibilità del dipendente di creare , modificare o eliminare prodotti
- Possibilità dell’amministratore di creare, modificare o eliminare dipendenti dal database

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Frontend Built With
* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]


### Backend Built With
- MongoDb
- Node JS
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Di seguito la procedura corretta per accedere al progetto.

### Prerequisites

Verifica di avere installato l’ultima versione di NodeJs, in caso installala da terminale con il codice seguente:  npm install npm@latest -g

### Installation

1. Clona la repo: https://github.com/andrewb1991/capstone_project_fe per il frontend,
2. Clona la repo: https://github.com/andrewb1991/Capstone_Project_backend per il backend,
3. Installa i seguenti pacchetti per il frontend da terminale per rendere funzionale il progetto: 
<ul>
<li>    "@emotion/react": "^11.10.6",
</li>
<li>    "@emotion/styled": "^11.10.6",
</li>
<li>    "@fortawesome/fontawesome-free": "^6.4.0",
</li>
<li>    "@fortawesome/fontawesome-svg-core": "^6.4.0",
</li>
<li>    "@fortawesome/free-regular-svg-icons": "^6.4.0",
</li>
<li>    "@fortawesome/free-solid-svg-icons": "^6.4.0",
</li>
<li>    "@fortawesome/react-fontawesome": "^0.2.0",
</li>
<li>    "@hookform/resolvers": "^3.1.0",
</li>
<li>    "@mui/material": "^5.11.16",
</li>
<li>    "@testing-library/jest-dom": "^5.16.5",
</li>
<li>    "@testing-library/react": "^13.4.0",
</li>
<li>    "@testing-library/user-event": "^13.5.0",
</li>
<li>    "axios": "^1.3.5",
</li>
<li>    "jwt-decode": "^3.1.2",
</li>
<li>    "mdb-react-ui-kit": "^6.0.0",
</li>
<li>    "mdb-ui-kit": "^6.2.0",
</li>
<li>    "mdbreact": "^5.2.0",
</li>
<li>    "multer": "^1.4.5-lts.1",
</li>
<li>    "node-localstorage": "^2.2.1",
</li>
<li>    "react": "^18.2.0",
</li>
<li>    "react-bootstrap": "^2.7.2",
</li>
<li>    "react-confirm-alert": "^3.0.6",
</li>
<li>    "react-custom-alert": "^1.0.4",
</li>
<li>    "react-dom": "^18.2.0",
</li>
<li>    "react-dotenv": "^0.1.3",
</li>
<li>    "react-icons": "^4.8.0",
</li>
<li>    "react-jsx": "^1.0.0",
</li>
<li>    "react-quill": "^2.0.0",
</li>
<li>    "react-redux": "^8.0.5",
</li>
<li>    "react-router": "^6.10.0",
</li>
<li>    "react-router-dom": "^6.10.0",
</li>
<li>    "react-scripts": "5.0.1",
</li>
<li>    "react-use-cart": "^1.13.0",
</li>
<li>    "router": "^1.3.8",
</li>
<li>    "web-vitals": "^2.1.4",
</li>
<li>    "yup": "^1.1.1"
</li>
</ul>

4.  Installa i seguenti pacchetti per il backend da terminale per rendere funzionale il progetto: 
<ul>
<li>"bcrypt": "^5.1.0",
</li>
<li>    "cloudinary": "^1.35.0",
</li>
<li>    "cors": "^2.8.5",
</li>
<li>    "dotenv": "^16.0.3",
</li>
<li>    "express": "^4.18.2",
</li>
<li>    "jsonwebtoken": "^9.0.0",
</li>
<li>    "mongoose": "^7.0.3",
</li>
<li>    "multer": "^1.4.5-lts.1",
</li>
<li>    "multer-storage-cloudinary": "^4.0.0"
</li>
</ul>

5. Dal terminale del progetto in frontend inserire “npm start” per far partire il progetto, mentre nel terminale del progetto in backend inserire "npm run dev" per avviare il database.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1) Pagina Prodotti
<img src="./imagesforreadme/productpage.png">
2) Carrello Prodotti
<img src="./imagesforreadme/cartpage.png">
3) Pagina Profilo Utente
<img src="./imagesforreadme/profilepage.png">
4) Pagina iniziale per Amministratore
<img src="./imagesforreadme/adminprofilepage.png">
5) Pagina di Controllo Prodotti
<img src="./imagesforreadme/editproductpage.png">

<p align="right">(<a href="#readme-top">back to top</a>)</p>




## Contact
Andrea Bramucci - @andrewb1991 - andrea.bramucci@gmail.com

Project Link: 
Frontend: https://github.com/andrewb1991/capstone_project_fe
Backend: https://github.com/andrewb1991/Capstone_Project_backend 


<p align="right">(<a href="#readme-top">back to top</a>)</p>



[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
