import { Feedback } from "@prisma/client";

export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>;
}


export interface ReadFeedbackData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface ReadFeedbacksRepository {
    readonly: (data: FeedbackCreateData) => Promise<void>;
}