import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository, ReadFeedbacksRepository} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        });
    }
}


export class PrismaReadFeedbacksRepository {
    async readonly({}: ReadFeedbacksRepository) {
        const feedback = await prisma.feedback.findMany();
        return feedback;

    }
}