import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombreE: string;
  descripcionE: string;
  fechaIni: number;
  fechaFin: number;
  img: string = "../../../assets/logo-uncoma.png";

  constructor(private educacionS: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.fechaIni, this.fechaFin, this.img);
    this.educacionS.save(educacion).subscribe(
      data => {
        alert("Educación añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "educacion" + id;
    this.imageService.uploadImage($event, name);
  }

}
