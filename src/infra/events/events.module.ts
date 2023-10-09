import { OnAnswerCreated } from "@/domain/forum/notification/application/subscribers/on-answer-created";
import { OnQuestionbestAnswerChoosen } from "@/domain/forum/notification/application/subscribers/on-question-best-answer-choosen";
import { SendNotificationUseCase } from "@/domain/forum/notification/application/use-cases/send-notification";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [
    OnAnswerCreated,
    OnQuestionbestAnswerChoosen,
    SendNotificationUseCase,
  ],
})
export class EventsModule {}
