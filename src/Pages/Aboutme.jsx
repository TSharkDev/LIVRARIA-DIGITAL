import Navigation from "../Components/Navigation";
import pic from "../assets/images/book.jpg";
import instagram from "../assets/icons/thatguywithabook.png";
import tweets from "../assets/icons/quakes.png";
import tumblr from "../assets/icons/tumblrblog.png";
import goodreads from "../assets/icons/social.png";

export default function Aboutme() {
  return (
    <div>
      <Navigation />
      <h2 className="author--book--title">O Criador</h2>
      <div className="nagraj--intro--card--container">
        <div className="nagraj--intro--card">
          <div>
            <img className="nagraj-image" src={pic} alt="Nagraj Tadingi" />
            <div className="author-info">
              <p className="nagraj-para">
              Olá! Sou Abel, o criador e curador por trás deste
                site de livros. Como leitor ávido e aprendiz ao longo da vida, tenho
                sempre encontrei consolo, inspiração e possibilidades infinitas
                dentro das páginas dos livros.
                <br />
                <br />
                Tenho uma admiração especial por autores como Andy Weir, cujo
                thrillers científicos nos levam a viagens emocionantes pelo espaço
                e além. Eu também me encontro imerso nos mundos intrincados
                criado por Brandon Sanderson, cujos romances épicos de fantasia são
                conhecido por seus personagens ricos e sistemas mágicos intrincados. E
                quando se trata do enigmático e instigante Haruki
                As obras surreais e introspectivas de Murakami nunca deixam de
                me cativar.
                <br />
                <br />
                Este site é uma plataforma onde pretendo compartilhar meu amor por
                livros. Minha missão é despertar a alegria da leitura, fomentar
                conversas significativas e celebrar o incrível poder de
                contar histórias.
              </p>
              <div className="nagraj--links">
                <a
                  href="https://www.goodreads.com/user/show/57097572-thatguywithabook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={goodreads}
                    alt="Goodreads"
                    className="nagraj--social"
                  />
                </a>
                <a
                  href="https://www.instagram.com/thatguywithabook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="nagraj--social"
                  />
                </a>
                <a
                  href="https://thatguywithabook.tumblr.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tumblr} alt="Tumblr" className="nagraj--social" />
                </a>
                <a
                  href="https://twitter.com/studyingquakes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tweets} alt="Twitter" className="nagraj--social" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
