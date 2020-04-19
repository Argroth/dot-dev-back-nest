import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './interfaces/project.interface';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel('Project') private readonly projectModel: Model<Project>) {}

  async getProjects(): Promise<any> {
    return await this.projectModel.find().exec();
  }

  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectModel(createProjectDto).save();
  }
}
