import { Component, OnInit } from '@angular/core';
import { Dinosaurio } from '../dinosaurio';
import { DinosaurioService } from '../dinosaurio.service';
import { DinosaurioDetail } from '../dinosaurios-detail/dinosaurio-detail';

@Component({
  selector: 'app-dinosaurios-list',
  templateUrl: './dinosaurios-list.component.html',
  styleUrls: ['./dinosaurios-list.component.css']
})
export class DinosauriosListComponent implements OnInit {

  dinosaurios: Array<Dinosaurio> = [];
  constructor(private dinosaurioService: DinosaurioService) { }
  selectedDinosaurio!: Dinosaurio;
  selected: Boolean = false;

  getDinosaurios(): void {
    this.dinosaurioService.getDinosaurios().subscribe((dinosaurios) => {
      this.dinosaurios = dinosaurios;
    });
  }

  onSelected(dinosaurio: DinosaurioDetail): void {
    this.selected = true;
    this.selectedDinosaurio = dinosaurio;
  }

  ngOnInit() {
    this.getDinosaurios
  }

}
