const Questions = () => (
  <div>
    <h1>
      Preguntas
    </h1>
    <div>
      <p>
        ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
      </p>
      <p>
        Scrum define cinco ceremonias principales Todas orientadas a una buena continidad
        del proceso
      </p>
      <h2>
        1. Sprint Planning
      </h2>
      <p>Es una reunión que se realiza al comienzo de cada sprint, participa el equipo scrum
        completo. Sirve para inspeccionar el backlog del producto (product backlog) y
        para que el equipo de desarrollo selecccione los items (Product Backlog Items) en los
        que va a trabajar la siguiente semana. Ademas el product owner presenta el product
        backlog actualizado para que el equipo de desarrollo se encargue de estimarlo.
      </p>
    </div>
    <div>
      <h2>
        2. Daily Scrum
      </h2>
      <p>
        Reunión diaria de aproximadamente 15 minutos en la que el development team
        revisará los progresos y se organizará para el trabajo del dia, cada persona
        debe responder las siguientes preguntas:
        -¿Que hice ayer para contribuir al sprint?
        -¿que voy a hacer hoy para contribuir al sprint?
        -¿Tengo algun impedimento para la entrega?
      </p>
    </div>
    <div>
      <h2>3. Sprint Review</h2>
      <p>
        Reunion organizada por el product owner al final de cada sprint para estudiar cual
        es la situación del proyecto y para actualizar el product backlog con las nuevas
        condiciones que puedan afectar el negocio.
      </p>
    </div>
    <div>
      <h2>
        4. Sprint Retrospective
      </h2>
      <p>
        Ocurre al final del sprint. El objetivo es hacer reflexion sobre el último sprint para
        identificar posibles mejoras para el próximo
      </p>
    </div>
    <div>
      <h2>
        5. Sprint Grooming o Refinement
      </h2>
      <p>
        Práctica recomendada para asegurar que el backlog siempre esté preparado, dura
        aproximadamente dos horas, es responsabilidad del product owner agendar, gestionar
        y dirigir esta reunion
      </p>
    </div>
    <div>
      <p>
        ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.
      </p>
      <p>
        La creación de wireframes es una manera eficaz de hacer prototipos rapidos de
        página, mientras que se realiza a la vez una medición de la viabilidad de un
        diseño. Dentro del proceso de construccion de un sitio web.
        En resumen es un esquema de pagina o una guia visual que representa la estructura
        esquelética de un sitio web. Algunas herramientas que podemos utilizar son Adobe XD o Axure
      </p>
    </div>
    <div>
      <p>
        Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
      </p>
      <p>
        Si definimos una variable con la palabra reservada var esta no respetará el scope podrá
        ser accedida o renombrada desde cualquier parte si por ejemplo defino la variable
        var cont = 0 dentro de un ciclo for esta permanecerá viva fuera del for.
        Let puede ser usada como remplazo de var, si declaramos la misma variable cont en un
        ciclo for pero con la palabra reservada let (let cont = 0) esta si respetará el scope,
        o sea que morirá tan pronto termine el ciclo for y solo podemos acceder a ella dentro
        del ambito donde fue definida. Y si en cambio nombramos una variable con la palabra
        reservada const estaremos definiendo nuetra variable como una constante, el scope
        será igual de seguro que con let pero a esta no se le cambiara su valor y siempre estará
        apuntando a la misma dirección de memoria
      </p>
    </div>
    <div>
      <p>
        ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva
        rama llamada rama-1?
      </p>
      <ul>
        <li>git branch rama-1</li>
        <li>git checkout rama-1</li>
        <li>git checkout -b rama-1</li>
      </ul>
    </div>
    <div>
      <p>
        Explicar la diferencia entre git merge y git rebase.
      </p>
      <p>
        Cuando haces git rebase los commits locales se eliminan de la rama temporalmente,
        luego se hace un pull y los commits locales se insertan nuevamente. asi tus commits
        quedaran por delante de los commits que otras personas tengan en el repositorio
        remoto. En cambiio cuando haces git merge todos los commits quedarán intercalados
        haciendo que la solución de conflictos sea un poco más compliada
      </p>
    </div>
    <div>
      <p>
        ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
      </p>
      <p>
        git pull se usará para traer los cambios del repositorio remoto al nuestro
        en cambio Pull Request es para ofrecer unos cambios a un repositorio remoto y
        esperar a que el dueño de ese repositorio los extraiga al suyo.
      </p>
    </div>
    <div>
      <p>
        ¿Qué es el Virtual DOM?
      </p>
      <p>
        Es una representación del DOM guardada en memoria que actua de intermediario entre
        los estados de la aplicación y los estados del DOM El virtual DOM se da cuenta cuando
        hay un cambio en la aplicación web y calcula la manera más eficiente de actualizar
        el DOM para que renderice la menor cantidad de cambios posibles
      </p>
    </div>
  </div>
);

export default Questions;
