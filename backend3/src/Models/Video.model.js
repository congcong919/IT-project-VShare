import { Schema, model } from 'mongoose'

const videoSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    username: {
        type: String,
    },
    name: {
        type: String,
        required: [true, 'Upload video needs a video name']
    },
    videopath: {
        type: String,
        required: [true, 'Upload video needs a video path'],
        unique: [true, 'Video path already exist']
    },
    category: {
        type: String,
        enum: ["Sports", "News", "Technology", "Music", "Games", "Fashion", "Pet", "Travel", "Others"],
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    views: {
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    },
    description: {
        type: String,
        required: [true, 'Upload video needs a Description']
    },

})
export const videoModel = model('video', videoSchema)