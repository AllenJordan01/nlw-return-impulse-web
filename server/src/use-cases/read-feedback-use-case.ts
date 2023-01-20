import { ReadFeedbacksRepository } from "../repositories/feedbacks-repository";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface ReadFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class ReadFeedbackUseCase {
constructor(
    private readFeedbacksRepository: ReadFeedbacksRepository,
) {}

    async execute(request: ReadFeedbackUseCaseRequest) {
        const {type, comment, screenshot} = request;

        await this.readFeedbacksRepository.readonly({type, comment, screenshot});

    }  
}
