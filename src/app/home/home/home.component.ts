import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectserviceService } from 'src/app/projects/projectservice.service';
import { Observable } from 'rxjs';
import { Project } from 'src/app/projects/projects/models/project';
import { map, share, tap} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  projects$: Observable <Project[]>;
  projects: any;

  constructor(private projectService: ProjectserviceService) { }

  ngOnInit() {
    this.numProjects();
  }

  numProjects(){
    this.projects$ = this.projectService.getProjects();
  }

  loadProjects(){
    this.projectService.cargaProyectos();
  }

  deleteProjects() {
    this.projectService.borrarProyectos();
  }
}
