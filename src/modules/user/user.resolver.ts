import { Resolver, Root, FieldResolver } from 'type-graphql';

import { User } from '../../entities/user.entity';
import { Note } from '../../entities/note.entity';

@Resolver(() => User)
export class UserResolver {
  @FieldResolver(() => [Note], { nullable: 'items' })
  async notes(@Root() user: User): Promise<Array<Note>> {
    return await Note.find({ where: { id: user.id } })
  }
}