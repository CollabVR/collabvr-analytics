import { ApiProperty } from '@nestjs/swagger';

export class UserActionDto {
  @ApiProperty() userId: number;
  @ApiProperty() activityId: number;
  @ApiProperty() timeSpeaking: number;
}
