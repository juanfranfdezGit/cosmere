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
      name: 'Llanuras Quebradas',
      image: 'assets/images/cities/llanuras.jpg',
      description01:
        'Las Llanuras Quebradas son un inmenso laberinto natural formado por enormes mesetas fracturadas que se extienden hasta donde alcanza la vista. Cada plataforma parece parte de un rompecabezas colosal que nunca volverá a encajar, separada por abismos profundos que desafían incluso a los viajeros más experimentados. El paisaje, aunque desolado, posee una belleza austera que impresiona a quienes se atreven a contemplarlo.',
      description02:
        'A lo largo del día, la luz del sol transforma el terreno en un mosaico de sombras cambiantes que revelan la magnitud de sus grietas. Las tormentas, habituales y feroces, continúan esculpiendo el lugar con una paciencia implacable, arrancando fragmentos de roca y creando nuevas cicatrices en el suelo. Es un territorio donde la naturaleza demuestra su poder sin reservas..',
      description03:
        'A pesar de su apariencia inhóspita, las Llanuras Quebradas son un punto clave para exploradores, estudiosos y ejércitos que buscan descifrar sus misterios. Entre sus mesetas se libran desafíos constantes: atravesarlas, comprenderlas y sobrevivir a ellas. En cada rincón late la sensación de que ocultan algo antiguo, algo que espera ser descubierto bajo el peso del viento y del tiempo.',
    },
    {
      name: 'Urithiru',
      image: 'assets/images/cities/urithiru.jpg',
      description01:
        'Urithiru se alza como una ciudad suspendida entre el cielo y la memoria, construida en una montaña tan alta que parece desafiar a las propias tormentas. Sus torres, elegantes y colosales, se elevan en espirales que reflejan una arquitectura diferente a todo lo conocido en Roshar. Caminar por sus niveles es recorrer un legado tallado en piedra y luz, obra de una civilización cuyo conocimiento aún supera al presente.',
      description02:
        'Cada uno de sus inmensos pasillos resuena con un silencio casi sagrado, como si las paredes guardaran secretos que prefieren susurrar antes que revelar. Las habitaciones, balcones y plazas internas muestran una precisión que parece más cercana al arte que a la ingeniería, recordando a sus visitantes que Urithiru no fue creada para lo ordinario. Aquí, la luz del amanecer se filtra de un modo distinto, suave y puro, como si la montaña misma la purificara.',
      description03:
        'A pesar de su majestuosidad, Urithiru es también un enigma. Sus mecanismos antiguos duermen, sus funciones ocultas esperan ser comprendidas y sus rincones despiertan tantas preguntas como admiración. Es un refugio, un símbolo y un recordatorio de que incluso en un mundo desgarrado por tormentas, todavía existen lugares donde la esperanza se construyó en piedra para perdurar.',
    },
    {
      name: 'Kharbranth',
      image: 'assets/images/cities/kharbranth.jpg',
      description01:
        'Kharbranth, conocida como la Ciudad de las Campanas, se alza junto al mar como un refugio luminoso entre acantilados. Cada calle está adornada con campanas de distintos tamaños y metales, que tintinean con la brisa salada y llenan el aire de una música suave e incesante. Es una ciudad donde el sonido nunca muere y donde incluso el silencio parece vibrar.',
      description02:
        'Sus muelles, siempre vivos, reciben a comerciantes, viajeros y eruditos atraídos por la reputación del lugar. Las calles empedradas serpentean entre edificios elegantes y miradores que se asoman al océano, ofreciendo vistas donde el azul del agua y el brillo del metal se mezclan en un cuadro único. En cada rincón se respira curiosidad y movimiento.',
      description03:
        'Pero la joya de Kharbranth es su imponente biblioteca y hospital, un faro de conocimiento y compasión que atrae a quienes buscan respuestas, remedios o consuelo. Allí, sabios y sanadores trabajan juntos bajo una misma premisa: entender tanto al cuerpo como al espíritu. Kharbranth es, en esencia, una ciudad dedicada a aprender, a escuchar y a sanar, un santuario donde el ruido de las campanas acompaña tanto a quienes llegan como a quienes parten.',
    },
  ];
}
