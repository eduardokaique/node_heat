import { AuthenticateUserService } from "@services/AuthenticateUserService";
import { CreateMessageService } from "@services/CreateMessageServices";
import { GetLast3MessageService } from "@services/GetLast3MessagesService";
import { ProfileUserService } from "@services/ProfileUserService";
import { Request, Response } from  "express";


class ProfileUserController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const service = new ProfileUserService();

        const result = await service.execute(user_id);

        return response.json(result);

    }
}

export { ProfileUserController }