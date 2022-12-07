import { VoteType } from "../components/shared/vote-button/vote-type";
import User from './User';
import Post from './Post';

export class Vote {
    id: number
    voteType: VoteType;
    post: Post;
    user: User;

    constructor(id: number, voteType: VoteType, post: Post, user: User){
        this.id = id
        this.voteType = voteType
        this.post = post
        this.user = user
    }
    
}