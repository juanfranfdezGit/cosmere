import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Place {
  name: string;
  image: string;
  description01: string;
  description02: string;
}
@Component({
  selector: 'app-places-era2',
  imports: [CommonModule],
  templateUrl: './places-era2.html',
  styleUrl: './places-era2.scss',
})
export class PlacesEra2 {
  places: Place[] = [
    {
      name: 'Elendel',
      image: 'assets/images/cities/elendel.jpeg',
      description01:
        'Elendel es la capital del nuevo mundo tras el Catacendro, una ciudad vibrante y moderna construida a orillas de un extenso sistema de canales. Sus altos edificios, trenes eléctricos y bulliciosos mercados reflejan una era de progreso e innovación.',
      description02:
        'Sin embargo, bajo su apariencia de orden y prosperidad, se esconden tensiones políticas, desigualdades sociales y una corrupción que amenaza con desestabilizar su gobierno.',
    },
    {
      name: 'Los Eriales',
      image: 'assets/images/cities/eriales.png',
      description01:
        'Los Eriales, o The Roughs, son regiones áridas y salvajes más allá del Basin, donde la ley es débil y la justicia depende de quienes la impongan. Pequeñas comunidades mineras y pueblos polvorientos sobreviven entre montañas, desiertos y llanuras inhóspitas.',
      description02:
        'Es un lugar duro y peligroso, lleno de bandidos, cazadores de recompensas y aventureros, donde hombres como Waxillium Ladrian aprendieron a mantener el orden a punta de revólver y acero.',
    },
    {
      name: 'Nuevo Seran',
      image: 'assets/images/cities/newseran.jpg',
      description01:
        'Nuevo Seran se presenta como una ciudad al sur, casi en la frontera del mundo conocido de Scadrial, una urbe emergente que combina restos de tecnología antigua y convenciones de frontera. Allí, monumentos industriales y arquitectura con vigas de acero conviven con los barrios más pobres y expandidos de la periferia. La llegada de Waxillium Ladrian al lugar es para investigar un misterio que le lleva a rastrear artefactos legendarios —las “Bands of Mourning”— en los entornos poco explorados de ese sur remoto.',
      description02:
        'En Nuevo Seran se respira la tensión de una sociedad en transición: tecnología ferroviaria, iluminación eléctrica y edificaciones modernas tratan de imponerse sobre una historia dominada por la magia de metales antiguos, alomancia y fuerzas ancestrales. La ciudad es vista tanto como un faro de progreso como un lugar de peligros ocultos, donde organizaciones secretas han operado durante décadas y donde la lejanía sirve de refugio para conspiraciones que amenazan el establecimiento de la era industrial de Scadrial.',
    },
  ];
}
