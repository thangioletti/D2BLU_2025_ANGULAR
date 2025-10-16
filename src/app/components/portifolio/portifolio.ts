import { Component } from '@angular/core';
import { MovieCard } from "../movie-card/movie-card";

@Component({
  selector: 'app-portifolio',
  imports: [MovieCard],
  templateUrl: './portifolio.html',
  styleUrl: './portifolio.scss'
})
export class Portifolio {
  onRemoveClicked(banana: string) {
    alert(banana)
  }

  protected movies: any = [];
  protected titulo = "Oi";
  constructor() {
    this.movies.push({
      titulo: "Longlegs (Vínculo Mortal)",
      texto: "Cage interpreta um serial killer em um dos papéis mais sombrios de sua carreira. O filme, com estreia marcada para 29 de agosto de 2024 no Brasil, promete uma atmosfera tensa e perturbadora, explorando os limites da mente humana",
      img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/longlegs-2024-movie-poster.jpg"
    });
    this.movies.push({
      titulo: "Dream Scenario (O Homem dos Sonhos)",
      texto: "Neste filme aclamado pela crítica, Cage vive um homem comum que inexplicavelmente começa a aparecer nos sonhos de milhões de pessoas. A produção mistura humor, estranheza e reflexões sobre fama e identidade",
      img: "https://tse4.mm.bing.net/th/id/OIP.0JYErJGEKCdw9tsBggKFlwHaI4?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
    });
    this.movies.push({
      titulo: "Longlegs (Vínculo Mortal)",
      texto: "Cage interpreta um serial killer em um dos papéis mais sombrios de sua carreira. O filme, com estreia marcada para 29 de agosto de 2024 no Brasil, promete uma atmosfera tensa e perturbadora, explorando os limites da mente humana",
      img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/longlegs-2024-movie-poster.jpg"
    });
    this.movies.push({
      titulo: "Dream Scenario (O Homem dos Sonhos)",
      texto: "Neste filme aclamado pela crítica, Cage vive um homem comum que inexplicavelmente começa a aparecer nos sonhos de milhões de pessoas. A produção mistura humor, estranheza e reflexões sobre fama e identidade",
      img: "https://tse4.mm.bing.net/th/id/OIP.0JYErJGEKCdw9tsBggKFlwHaI4?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
    });
    this.movies.push({
      titulo: "Longlegs (Vínculo Mortal)",
      texto: "Cage interpreta um serial killer em um dos papéis mais sombrios de sua carreira. O filme, com estreia marcada para 29 de agosto de 2024 no Brasil, promete uma atmosfera tensa e perturbadora, explorando os limites da mente humana",
      img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/longlegs-2024-movie-poster.jpg"
    });
    this.movies.push({
      titulo: "Dream Scenario (O Homem dos Sonhos)",
      texto: "Neste filme aclamado pela crítica, Cage vive um homem comum que inexplicavelmente começa a aparecer nos sonhos de milhões de pessoas. A produção mistura humor, estranheza e reflexões sobre fama e identidade",
      img: "https://tse4.mm.bing.net/th/id/OIP.0JYErJGEKCdw9tsBggKFlwHaI4?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
    });
    this.movies.push({
      titulo: "Longlegs (Vínculo Mortal)",
      texto: "Cage interpreta um serial killer em um dos papéis mais sombrios de sua carreira. O filme, com estreia marcada para 29 de agosto de 2024 no Brasil, promete uma atmosfera tensa e perturbadora, explorando os limites da mente humana",
      img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/longlegs-2024-movie-poster.jpg"
    });
    this.movies.push({
      titulo: "Dream Scenario (O Homem dos Sonhos)",
      texto: "Neste filme aclamado pela crítica, Cage vive um homem comum que inexplicavelmente começa a aparecer nos sonhos de milhões de pessoas. A produção mistura humor, estranheza e reflexões sobre fama e identidade",
      img: "https://tse4.mm.bing.net/th/id/OIP.0JYErJGEKCdw9tsBggKFlwHaI4?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
    });
    this.movies.push({
      titulo: "Longlegs (Vínculo Mortal)",
      texto: "Cage interpreta um serial killer em um dos papéis mais sombrios de sua carreira. O filme, com estreia marcada para 29 de agosto de 2024 no Brasil, promete uma atmosfera tensa e perturbadora, explorando os limites da mente humana",
      img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/longlegs-2024-movie-poster.jpg"
    });
    this.movies.push({
      titulo: "Dream Scenario (O Homem dos Sonhos)",
      texto: "Neste filme aclamado pela crítica, Cage vive um homem comum que inexplicavelmente começa a aparecer nos sonhos de milhões de pessoas. A produção mistura humor, estranheza e reflexões sobre fama e identidade",
      img: "https://tse4.mm.bing.net/th/id/OIP.0JYErJGEKCdw9tsBggKFlwHaI4?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
    });
    this.movies.push({
      titulo: "Longlegs (Vínculo Mortal)",
      texto: "Cage interpreta um serial killer em um dos papéis mais sombrios de sua carreira. O filme, com estreia marcada para 29 de agosto de 2024 no Brasil, promete uma atmosfera tensa e perturbadora, explorando os limites da mente humana",
      img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/longlegs-2024-movie-poster.jpg"
    });
    this.movies.push({
      titulo: "Dream Scenario (O Homem dos Sonhos)",
      texto: "Neste filme aclamado pela crítica, Cage vive um homem comum que inexplicavelmente começa a aparecer nos sonhos de milhões de pessoas. A produção mistura humor, estranheza e reflexões sobre fama e identidade",
      img: "https://tse4.mm.bing.net/th/id/OIP.0JYErJGEKCdw9tsBggKFlwHaI4?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
    });
    this.movies.push({
      titulo: "Longlegs (Vínculo Mortal)",
      texto: "Cage interpreta um serial killer em um dos papéis mais sombrios de sua carreira. O filme, com estreia marcada para 29 de agosto de 2024 no Brasil, promete uma atmosfera tensa e perturbadora, explorando os limites da mente humana",
      img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/longlegs-2024-movie-poster.jpg"
    });
  }
}
