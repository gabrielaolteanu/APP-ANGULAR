import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared/shared.module";
import { ProjectFormComponent } from "./components/project-form/project-form.component";
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { ProjectContainerComponent } from "./pages/project-container/project-container.component";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail.component";
import { ProjectRoutingModule } from "./project-routing.module";
import { ProjectComponent } from './pages/project.component';


@NgModule({
declarations: [
    ProjectContainerComponent,
    ProjectDetailComponent,
    ProjectFormComponent,
    ProjectListComponent,
    ProjectComponent,
],
imports:[
    SharedModule,
    CommonModule,
    FormsModule, 
    ProjectRoutingModule
],
exports: [
    ProjectComponent
]
})

export class ProjectModule {

}