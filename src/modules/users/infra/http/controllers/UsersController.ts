import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    // @ts-expect-error ignorando erro
    delete user.password;

    // Com a atualização do TypeScript, isso se faz necessário

    return response.status(200).json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    const updateUserAvatarService = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatarService.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    // @ts-expect-error ignorando erro
    delete user.password;
    // eslint-disable-next-line no-console
    console.log(request.file);
    return response.status(200).json(user);
  }
}
