import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async getProjects() : Promise<any> {
    const projectsList = this.projectsService.getProjects();
    return projectsList;
  }

  @Post()
  async createProject(@Res() res, @Body() createProjectDto: CreateProjectDto): Promise<any>{
    const projectCreated = await this.projectsService.createProject(createProjectDto);
    return res.status(HttpStatus.OK).json({message: "Project Created", project: projectCreated});
  }
}
