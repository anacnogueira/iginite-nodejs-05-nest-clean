import { DomainEvent } from "@/core/events/domain-event";
import { UniqueEntityID } from "@/core/types/entities/unique-entity-id";
import { Question } from "../entities/question";

export class QuestionBestAnswerChoosenEvent implements DomainEvent {
  public ocurredAt: Date;
  public question: Question;
  bestAnswerId: UniqueEntityID;

  constructor(question: Question, bestAnswerId: UniqueEntityID) {
    this.question = question;
    this.bestAnswerId = bestAnswerId;
    this.ocurredAt = new Date();
  }

  getAggregateId(): UniqueEntityID {
    return this.question.id;
  }
}
