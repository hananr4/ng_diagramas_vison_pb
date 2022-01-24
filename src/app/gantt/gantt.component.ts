import { Component, OnInit } from '@angular/core';
import { Dependency, Resource, ResourceAssignment, Service, Task } from './service.ts.service';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styles: [
  ]
})
export class GanttComponent implements OnInit {

  tasks: Task[];

  dependencies: Dependency[];

  resources: Resource[];

  resourceAssignments: ResourceAssignment[];

  constructor(service: Service) {
    this.tasks = service.getTasks();
    this.dependencies = service.getDependencies();
    this.resources = service.getResources();
    this.resourceAssignments = service.getResourceAssignments();
  }
  ngOnInit(): void {
  }

}
