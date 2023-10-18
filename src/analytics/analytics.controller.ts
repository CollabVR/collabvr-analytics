import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { ActivityActionDto } from './dto/activity-action.dto';
import { UserActionDto } from './dto/user-action.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @MessagePattern('get-all-user-actions')
  async getAllUserActions() {
    return this.analyticsService.getAllUserActions();
  }

  @MessagePattern('get-all-activity-actions')
  async getAllActivityActions() {
    return this.analyticsService.findAllActivityActions();
  }

  @MessagePattern('get-activity-action-by-id')
  async getActivityAction(data: { id: number }) {
    console.log('getActivityAction', data);
    return this.analyticsService.findActivityActionById(data.id);
  }

  @MessagePattern('create-or-update-activity-action')
  async createOrUpdateActivityAction(dto: ActivityActionDto) {
    console.log('createOrUpdateActivityAction', dto);
    return this.analyticsService.createOrUpdateActivityAction(dto);
  }

  @MessagePattern('get-user-action-by-composite-id')
  async getUserAction(data: { userId: number; activityId: number }) {
    console.log('getUserAction', data);
    return this.analyticsService.findUserActionByCompositeId(
      data.userId,
      data.activityId,
    );
  }

  @MessagePattern('create-or-update-user-action')
  async createOrUpdateUserAction(dto: UserActionDto) {
    console.log('createOrUpdateUserAction', dto);
    return this.analyticsService.createOrUpdateUserAction(dto);
  }
}
