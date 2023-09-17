import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { ZodValidationPipe } from "@/infra/http/pipes/zod-validation-pipe";
import { z } from "zod";
import { AuthenticateStudentUseCase } from "@/domain/forum/application/use-cases/authenticate-student";

const authemticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type AuthenticateBodySchema = z.infer<typeof authemticateBodySchema>;
@Controller("/sessions")
export class AuthenticateController {
  constructor(private autheticateStudent: AuthenticateStudentUseCase) {}

  @Post()
  @UsePipes(new ZodValidationPipe(authemticateBodySchema))
  async handle(@Body() body: AuthenticateBodySchema) {
    const { email, password } = body;

    const result = await this.autheticateStudent.execute({
      email,
      password,
    });

    if (result.isLeft()) {
      throw new Error();
    }

    const { accessToken } = result.value;

    return {
      access_token: accessToken,
    };
  }
}
