import { VoteType } from "../components/shared/vote-button/vote-type";
import User from './User';

export class Vote {
    id: number
    voteType: VoteType;
    postId: number;
    authorId: number;
}