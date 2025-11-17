import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Place {
  name: string;
  image: string;
  description01: string;
  description02: string;
  description03: string;
}
@Component({
  selector: 'app-places',
  imports: [CommonModule],
  templateUrl: './places.html',
  styleUrl: './places.scss',
})
export class Places {
  places: Place[] = [
    {
      name: 'La Ciudad de Elantris',
      image: 'assets/images/cities/elantris.jpg',
      description01:
        'La ciudad de Elantris alguna vez fue un lugar de esplendor y magia, con torres brillantes y calles que reflejaban la luz de su poder. Sus edificios y plazas, construidos con una majestuosidad imposible de ignorar, cuentan historias de gloria y conocimiento que aún perduran en sus piedras, incluso después de su decadencia. Caminar por sus calles es como recorrer un museo viviente donde cada rincón susurra secretos del pasado.',
      description02:
        'A pesar de su apariencia desgastada, Elantris conserva un aire de misterio que atrae a quienes buscan descubrirlo. Sus plazas vacías, salones silenciosos y jardines marchitos parecen esperar que alguien desvele sus antiguos secretos. Cada sombra y grieta en sus muros habla de magia que aún palpita débilmente, recordando que nada desaparece por completo mientras quede alguien dispuesto a creer en ello.',
      description03:
        'La ciudad también es un reflejo de la esperanza y la desesperación que coexisten en sus habitantes. Entre sus ruinas se libran historias de superación, redención y desafíos personales que trascienden el espacio físico de Elantris. Es un lugar donde el pasado y el presente se entrelazan, y donde la verdadera grandeza no se mide solo por el poder, sino por la capacidad de quienes la habitan para transformar la oscuridad en luz.',
    },
    {
      name: 'Arelon',
      image: 'assets/images/cities/arelon.png',
      description01:
        'Arelon es un reino lleno de vida y tradición, donde los palacios, castillos y aldeas reflejan siglos de historia. Sus ciudades combinan arquitectura elegante con funcionalidad, y sus calles vibran con comercio, festivales y la rutina diaria de un pueblo orgulloso. Cada rincón del reino muestra la mezcla de poder, cultura y responsabilidad que define a sus gobernantes y habitantes.',
      description02:
        'El paisaje de Arelon varía desde campos fértiles y colinas suaves hasta fortalezas estratégicas en alturas defensivas. Esta diversidad geográfica no solo ofrece belleza natural, sino también desafíos para quienes buscan mantener la paz y la unidad del reino. Cada ciudad y pueblo tiene su propio carácter, sus propias costumbres, y juntos forman un mosaico de vida y tradición que caracteriza al reino.',
      description03:
        'Pero Arelon no es solo un lugar de belleza y prosperidad: también es un escenario de intrigas políticas y decisiones difíciles. Sus líderes deben equilibrar la diplomacia, la seguridad y los intereses de sus ciudadanos mientras enfrentan amenazas internas y externas. Es un reino donde la historia y el destino se entrelazan, y donde cada elección puede cambiar el rumbo del futuro.',
    },
    {
      name: 'Teod',
      image: 'assets/images/cities/teod.png',
      description01:
        'Teod es una tierra próspera y cosmopolita, conocida por sus ciudades portuarias llenas de vida y comercio. Sus muelles rebosan de barcos que traen mercancías, noticias y viajeros de tierras lejanas, mientras sus calles se llenan del bullicio de mercados, artesanos y ciudadanos orgullosos de su cultura. Cada rincón refleja una sociedad que valora tanto el conocimiento como la astucia.',
      description02:
        'El paisaje de Teod combina llanuras fértiles con costas escarpadas, creando un entorno tanto bello como estratégico. Sus ciudades no solo son centros de comercio, sino también focos de diplomacia, donde se negocian alianzas y se traman planes que pueden afectar todo el continente. La naturaleza y la civilización se entrelazan en un equilibrio que define el carácter de sus habitantes.',
      description03:
        'A pesar de su aparente calma, Teod es un lugar donde la política y la intriga están siempre presentes. Sus líderes y ciudadanos deben navegar entre comercio, alianzas y amenazas externas, mientras preservan la identidad de su región. Teod representa un espacio donde la inteligencia y la previsión son tan importantes como la fuerza, y donde cada decisión puede marcar la diferencia entre prosperidad y conflicto.',
    },
  ];
}
