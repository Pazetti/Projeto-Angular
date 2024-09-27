import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  categories: Category[]=[
    {id: 1, idCategory:1, Title: 'Natlan', Description:'Nação do elemento Pyro inspirada em areas da America latina e da África Subsaariana', Cost: 0, Image:'C:\Users\Alunos\Desktop\Aulas 2 semestre\Desenvolvimento Web II\Projeto Angular\prjDswebII\src\assets\Natlan.webp', Duration: 100},
    {id: 2, idCategory:2, Title: 'Fontaine', Description:'Nação do elemento Hydro, inspirada na cultura e geografia francesa', Cost:0, Image:'C:\Users\Alunos\Desktop\Aulas 2 semestre\Desenvolvimento Web II\Projeto Angular\prjDswebII\src\assets\Fontaine.webp', Duration: 400},
    {id: 3, idCategory:3, Title: 'Sumeru', Description: 'Nação do elemento Dendro, inspirada em areas da India e da Africa setentrional', Cost:0, Image:'C:\Users\Alunos\Desktop\Aulas 2 semestre\Desenvolvimento Web II\Projeto Angular\prjDswebII\src\assets\Sumeru.webp'}
  ]
}
