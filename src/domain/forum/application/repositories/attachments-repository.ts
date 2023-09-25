export abstract class AttachmentsRepository {
  abstract findByEmail(email: string): Promise<Student | null>;
  abstract create(student: Student): Promise<void>;
}
