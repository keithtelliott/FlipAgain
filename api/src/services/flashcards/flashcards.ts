import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const flashcards = () => {
  return db.flashcard.findMany()
}

export const flashcard = ({ id }: Prisma.FlashcardWhereUniqueInput) => {
  return db.flashcard.findUnique({
    where: { id },
  })
}

interface CreateFlashcardArgs {
  input: Prisma.FlashcardCreateInput
}

export const createFlashcard = ({ input }: CreateFlashcardArgs) => {
  return db.flashcard.create({
    data: input,
  })
}

interface UpdateFlashcardArgs extends Prisma.FlashcardWhereUniqueInput {
  input: Prisma.FlashcardUpdateInput
}

export const updateFlashcard = ({ id, input }: UpdateFlashcardArgs) => {
  return db.flashcard.update({
    data: input,
    where: { id },
  })
}

export const deleteFlashcard = ({ id }: Prisma.FlashcardWhereUniqueInput) => {
  return db.flashcard.delete({
    where: { id },
  })
}

export const Flashcard = {
  User: (_obj, { root }: ResolverArgs<ReturnType<typeof flashcard>>) =>
    db.flashcard.findUnique({ where: { id: root.id } }).User(),
}
