import { AggregateRoot } from "../entities/aggregate-root";
import { UniqueEntityID } from "../entities/unique-entity-id";
import { DomainEvent } from "./domain-event";
import { DomainEvents } from "./domain-events";
import { vi } from "vitest";

class CustomAggregate extends AggregateRoot<null> {
  static create() {
    const aggregate = new CustomAggregate(null);

    aggregate.addDomainEvent(new CustomAggregateCreated(aggregate));

    return aggregate;
  }
}

class CustomAggregateCreated implements DomainEvent {
  public ocurredAt: Date;
  private aggreagte: CustomAggregate;

  constructor(aggregate: CustomAggregate) {
    this.aggreagte = aggregate;
    this.ocurredAt = new Date();
  }

  getAggregateId(): UniqueEntityID {
    return this.aggreagte.id;
  }
}

describe("domain events", () => {
  it("should be able to dispatch ans listen to events", () => {
    const callbackSpy = vi.fn();

    DomainEvents.register(callbackSpy, CustomAggregateCreated.name);

    const aggreagte = CustomAggregate.create();

    expect(aggreagte.domainEvents).toHaveLength(1);

    DomainEvents.dispatchEventsForAggregate(aggreagte.id);

    expect(callbackSpy).toHaveBeenCalled();
    expect(aggreagte.domainEvents).toHaveLength(0);
  });
});
