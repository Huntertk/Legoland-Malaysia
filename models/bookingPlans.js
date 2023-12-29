import mongoose from 'mongoose'

const bookingPlanSchema = new mongoose.Schema({
    title:{
        type: String
    },
    desc:{
        type: String
    },
    type:{
        type: String
    },
    image:{
        type:[String]
    },
    pricing: {
        fastLane:{
            adult:{
                type: Number
            },
            child:{
                type: Number
            },
            senior:{
                type: Number
            },
        },
        normalLane:{
            adult:{
                type: Number
            },
            child:{
                type: Number
            },
            senior:{
                type: Number
            },
        }
    },
}, {timestamps: true})

const BookingPlan = mongoose.model('bookingPlan', bookingPlanSchema)
export default BookingPlan