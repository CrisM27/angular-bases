import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNameList: string[] = ['Superman', 'Batman', 'Flash', 'Ghost Rider', 'Punisher']
  public deletedHero?: string;

  DeleteHero (): void {
    this.deletedHero = this.heroNameList.pop();
  }
}
