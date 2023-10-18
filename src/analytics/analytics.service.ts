import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ActivityActionDto } from './dto/activity-action.dto';
import { UserActionDto } from './dto/user-action.dto';

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  // For ActivityAction
  async findAllActivityActions() {
    return this.prisma.activityAction.findMany();
  }

  async findActivityActionById(id: number) {
    if (id === undefined || id === null) {
      return null;
    }
    return this.prisma.activityAction.findUnique({ where: { id } });
  }

  async getAllUserActions() {
    return this.prisma.userAction.findMany();
  }

  async createOrUpdateActivityAction(dto: ActivityActionDto) {
    const { id, ...data } = dto;
    const existingRecord = await this.findActivityActionById(id);
    if (existingRecord) {
      return this.prisma.activityAction.update({
        where: { id },
        data,
      });
    } else {
      return this.prisma.activityAction.create({ data: dto });
    }
  }

  // For UserAction
  async findUserActionByCompositeId(userId: number, activityId: number) {
    return this.prisma.userAction.findUnique({
      where: { userId_activityId: { userId, activityId } },
    });
  }

  async createOrUpdateUserAction(dto: UserActionDto) {
    const { activityId, userId, timeSpeaking, ...data } = dto;
    const existingRecord = await this.prisma.userAction.findUnique({
      where: { userId_activityId: { activityId, userId } },
    });

    if (existingRecord) {
      return this.prisma.userAction.update({
        where: { userId_activityId: { activityId, userId } },
        data: {
          ...data,
          timeSpeaking: {
            increment: timeSpeaking || 0,
          },
        },
      });
    } else {
      return this.prisma.userAction.create({ data: dto });
    }
  }
}
