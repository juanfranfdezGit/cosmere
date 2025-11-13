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
      name: 'Idris',
      image: 'assets/images/cities/idris.png',
      description01:
        'Idris se alza entre montañas grises y cielos serenos, un reino donde la piedra y la disciplina definen cada rincón. Sus palacios, austeros y majestuosos, reflejan el peso de la tradición, y cada calle parece susurrar historias de honor y obediencia. Allí, las emociones se esconden tras gestos medidos, y el brillo es considerado pecado.',
      description02:
        'La capital de Idris es también un lugar de educación y destino, donde las princesas y nobles aprenden que la perfección no es un regalo, sino una obligación. Cada gesto, cada palabra y cada mirada son evaluados por el rígido código de la corte, y el futuro del reino se decide en los salones fríos y silenciosos de los palacios.',
      description03:
        'A pesar de su rigidez, Idris guarda belleza en lo sencillo: el susurro del viento entre los riscos, la luz de la mañana reflejada en las torres, y la nobleza silenciosa de sus habitantes. Es un lugar donde la calma es virtud, pero también un recordatorio constante de los sacrificios que exige el deber.',
    },
    {
      name: 'T’Telir',
      image: 'assets/images/cities/ttelir.webp',
      description01:
        'T’Telir estalla en color y movimiento, un contraste vibrante con la sobriedad de Idris. Sus muros brillan con pigmentos y reflejos de luz, y el aire huele a incienso, especias y misterio. Es la ciudad donde lo divino camina entre los mortales y donde cada calle, plaza y templo parece estar impregnado de magia.',
      description02:
        'Los templos cubiertos de seda y los sacerdotes que hablan en susurros crean una sensación de reverencia constante, mientras las calles bulliciosas revelan la vida cotidiana de sus habitantes. T’Telir es un lugar donde los sentidos despiertan: los colores, los sonidos y los aromas se entrelazan para recordar que allí, incluso los dioses no son invencibles.',
      description03:
        'Pero más allá de su esplendor, T’Telir es también un escenario de destinos forjados. Es el lugar donde Siri y Susebron se encuentran, donde las decisiones humanas pueden desafiar la autoridad de los dioses, y donde la voluntad de cada individuo brilla más que cualquier Aliento.',
    },
    {
      name: 'La Corte de los Dioses',
      image: 'assets/images/cities/corte.png',
      description01:
        'La Corte de los Dioses es un espacio casi mítico, un lugar donde el tiempo y la eternidad se entrelazan. Sus salones están llenos de luz y sombras, de rituales ancestrales y secretos que moldean la vida de los mortales. Allí, cada palabra tiene peso y cada silencio puede alterar destinos enteros.',
      description02:
        'Es un centro de autoridad absoluta, donde los dioses deliberan, observan y deciden sobre los reinos que los rodean. Los muros guardan historias de alianzas, traiciones y lecciones aprendidas a través de siglos de existencia, mientras los pasillos resuenan con la energía de quienes portan Aliento.',
      description03:
        'Sin embargo, la Corte no es solo un lugar de poder, sino también de aprendizaje. Es allí donde incluso los inmortales pueden comprender lo que significa sentir, amar o elegir. Entre sus columnas y altares, se revela la verdad de que la fuerza sin conciencia es solo vacío, y que la humanidad puede encontrarse incluso entre los dioses.',
    },
  ];
}
