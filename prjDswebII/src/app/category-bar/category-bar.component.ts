import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})

export class CategoryBarComponent {

  categories:Category []=[
    {id: 1, title: 'cursos de TI', image:'https://static.wikia.nocookie.net/gensin-impact/images/0/03/Liyue.png/revision/latest/scale-to-width-down/1000?cb=20230905083920'},
    {id: 2, title: 'Category 2', image: 'https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Natlan.png/revision/latest/scale-to-width-down/1000?cb=20240903124439'},
    {id: 3, title: 'Category 3', image: 'https://static.wikia.nocookie.net/gensin-impact/images/1/11/Sumeru.png/revision/latest/scale-to-width-down/1000?cb=20221123012821'},
    {id: 4, title: 'Category 4', image: 'https://static.wikia.nocookie.net/gensin-impact/images/4/46/Desert_of_Hadramaveth.png/revision/latest/scale-to-width-down/1000?cb=20230118060117'},
    {id: 5, title: 'Category 5', image: 'https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Apep%27s_Resort.png/revision/latest/scale-to-width-down/1000?cb=20230124013510'},
  ]
}
