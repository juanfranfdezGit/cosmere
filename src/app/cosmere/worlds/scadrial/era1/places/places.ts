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
      name: 'Luthadel',
      image: 'assets/images/cities/luthadel02.png',
      description01:
        'Luthadel es la imponente capital del Imperio Final, situada en el Dominio Central de Nacidos de la bruma: El imperio final. Fue el centro político, cultural y administrativo del reinado del Lord Ruler, con su palacio monumental llamado Kredik Shaw dominando el horizonte.',
      description02:
        'La ciudad está marcada por la ceniza que cae sin cesar, las chimeneas humeantes y una atmósfera opresiva de poder absoluto. Los altos muros que rodean la ciudad —únicos en el imperio en permitirlos al ciudadano común— refuerzan la sensación de corte, vigilancia y dominación. En sus calles pavimentadas, edificios de piedra y múltiples distritos se apiñan bajo cielos rojizos y envueltos en niebla de ceniza. Los nobles se recluyen en sus mansiones elevadas mientras los skaa trabajan sin descanso en las minas, las fundiciones y los talleres; la desigualdad social se encuentra en el mismísimo diseño urbano.',
      description03:
        'Y cuando cae la noche, la bruma envuelve la ciudad con un manto fantasmal: las torres se recortan como agujas sobre el cielo, las calles se vuelven silenciosas y peligrosas, y la arquitectura del poder se convierte en sombra.',
    },
    {
      name: 'Urteau',
      image: 'assets/images/cities/urteau.png',
      description01:
        'Urteau se alza al noreste de Luthadel, en el Dominio Septentrional, y es la segunda mayor ciudad del Imperio Final. Famosa por su extensa red de canales que antiguamente funcionaban como vías de comunicación y comercio en lugar de las calles convencionales, los edificios nobles se alineaban a lo largo de estos canales que cruzaban la ciudad de lado a lado.',
      description02:
        'Durante el mandato del Lord Ruler y el gobierno de la Casa Venture, Urteau gozó de un relativo auge; sin embargo, ese periodo de estabilidad fue reemplazado por agitación, violencia y cambios de poder. A diferencia de Luthadel, no tenía murallas que la protegieran —la única ciudad permitida por el régimen con muralla era la capital— lo que contribuía a una mayor vulnerabilidad y sensación de frontera dentro del imperio.',
      description03:
        'La atmósfera de Urteau es a la vez portuaria e industrial, con un tinte de ciudad de paso, de cruce de caminos y de luchas internas. La ceniza y la bruma también la cubren, pero sus canales y su historia le otorgan una identidad propia. Puedes imaginar barcazas atracadas, muelles y edificaciones de madera junto al agua, la sombra de montañas de ceniza al fondo y señales de rebelión latente. En esencia, Urteau proyecta la dualidad de una ciudad cultivada por la nobleza y al mismo tiempo sacudida por la opresión skaa y los peligros de la revolución.',
    },
    {
      name: 'Fuerte de Kredik',
      image: 'assets/images/cities/kredik.png',
      description01:
        'Kredik Shaw, conocido como “La colina de las mil agujas” en la lengua terris, es el vasto palacio-fortaleza del Lord Ruler situado en el corazón de Luthadel. Su estructura es poco convencional: torres de metal elevadas, aguja tras aguja, conectadas por alas y pasillos en una composición casi caótica, que al mismo tiempo demuestra poder, temor y dominio.',
      description02:
        'Dentro de sus muros descansaba el enorme poder del Imperio: no solo como residencia real, sino como centro de producción, control y administración del régimen. La arquitectura misma era símbolo de la hegemonía del Lord Ruler, del monopolio del conocimiento y del uso del atium, y del control sobre la tierra y sus secretos.',
      description03:
        'La atmósfera que rodea a Kredik Shaw es cargada de misterio: ni la nobleza más poderosa se atrevía a ignorar su sombra, los skaa la miraban desde abajo con mezcla de temor y resentimiento, y los cielos de ceniza reforzaban la sensación de que nada escapaba al dominio del imperio. Para cualquier narración visual o descriptiva, Kredik Shaw es el epítome de la grandeza oscura, del poder latente y del mundo que se desmorona desde el vértice más alto.',
    },
  ];
}
