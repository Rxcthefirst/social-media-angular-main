import User from "./User"

export default class Post {
    id: number
    text: string
    imageUrl: string
    voteCount: number
    author: User
    comments: Post[]
    upVote: boolean
    downVote: boolean

    constructor (id: number, text: string, imageUrl: string, voteCount: number,  author: User, comments: Post[]) {
        this.id = id
        this.text = text
        this.imageUrl = imageUrl
        this.voteCount = voteCount
        this.author = author
        this.comments = comments
    }
}