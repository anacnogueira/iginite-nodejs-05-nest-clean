import { Entity } from "@/core/types/entities/entity";
import { UniqueEntityID } from "@/core/types/entities/unique-entity-id";

export interface QuestionAttachmentProps {
  questionId: UniqueEntityID;
  attachmentId: UniqueEntityID;
}

export class QuestionAttachment extends Entity<QuestionAttachmentProps> {
  get questionId() {
    return this.props.questionId;
  }

  get attachmentId() {
    return this.props.attachmentId;
  }

  static create(props: QuestionAttachmentProps, id?: UniqueEntityID) {
    const attachment = new QuestionAttachment(props, id);

    return attachment;
  }
}
