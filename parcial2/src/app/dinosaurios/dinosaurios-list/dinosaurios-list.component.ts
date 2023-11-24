import { Component, OnInit } from '@angular/core';
import { Dinosaurio } from '../dinosaurio';
import { DinosaurioService } from '../dinosaurio.service';

@Component({
  selector: 'app-dinosaurios-list',
  templateUrl: './dinosaurios-list.component.html',
  styleUrls: ['./dinosaurios-list.component.css']
})
export class DinosauriosListComponent implements OnInit {

  dinosaurios: Array<Dinosaurio> = [];
  constructor(private dinosaurioService: DinosaurioService) { }

  getDinosaurios(): void {
    this.dinosaurioService.getDinosaurios().subscribe((this.dinosaurios) => {
      this.dinosaurios = dinosaurios;
    });
  }

  ngOnInit() {
    this.getDinosaurios
  }

}
