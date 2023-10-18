import { ApiProperty } from '@nestjs/swagger';
export class ActivityActionDto {
  @ApiProperty()
  id?: number; // Optional for create, but mandatory for update
  @ApiProperty() activityId: number;
  @ApiProperty() userId: number;
  @ApiProperty() action: string;
  @ApiProperty() timestamp: string;
  @ApiProperty() amountParticipants: number;
}
