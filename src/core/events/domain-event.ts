import { UniqueEntityID } from "../types/entities/unique-entity-id";

export interface DomainEvent {
  ocurredAt: Date;
  getAggregateId(): UniqueEntityID;
}
