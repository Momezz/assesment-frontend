import image from '../../assets/description.JPG';
import './styles.css';

const Information = () => (
  <div className="info__container">
    <h1 className="info__title">JULIAN GOMEZ MEJIA</h1>
    <div className="info__image">
      <img className="info__img" src={image} alt="" />
    </div>
    <p>
      Soy un hombre de 36 años de carácter amable, muy profesional y comprometido con lo que hago.
      Hace poco tiempo encontré en la programación una gran pasión, gracias a
      ella tengo una necesidad constante por aprender nuevas tecnologias y siempre estoy
      buscando la forma de aplicar y mejorar lo que aprendo.
      Soy una persona que habla poco. soy mas de escuchar, entender y ver como puedo aportar.
      Mi objetivo principal es aprovechar al máximo todas las enseñanzas de mis maestros en el
      programa
    </p>
    <h2 className="info__caption">Lo aprendido</h2>
    <p>En este programa he aprendido muchas cosas y he tenido que recordar algunas
      otras que tenia en el olvido. Pero las tres cosas más importantes que he aprendido son:
    </p>
    <ol>
      <li className="info__item">
        1. Además de fortalecer mis habilidades duras debo trabajar a la par mis habilidades
        blandas. Estas siempre se pueden mejorar
      </li>
      <li className="info__item">
        2. Uso de props y su importancia
      </li>
      <li className="info__item">
        3. desarrollar componentes funcionales con estado y ciclo de vida
      </li>
    </ol>
    <div className="info__contact">
      <p><a className="info__link" href="mailto:julgomez14@gmail.com">julgomez14@gmail</a></p>
      <p><a className="info__link" href="https://github.com/Momezz">Git hub</a></p>
    </div>
  </div>
);

export default Information;
