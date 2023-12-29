import { createSlice } from "@reduxjs/toolkit";
import { setBookingDetailsFromLocalStorage, getBookingDetailsFromLocalStorage } from "../../utils/localStorage";
import { toast } from 'react-toastify';


const initialState = {
    adultCount:0,
    childCount:0,
    seniorCount:0,
    adultTotal: 0,
    childTotal: 0,
    seniorTotal: 0,
    totalAmount: 0,
    isPaxModal: false,
    loading: false,
    totalAmount: 0,
    bookingDate: "",
    name:"", 
    email:"",
    mobileNumber:"",
    bookingResponse: "",
    responseClientUrl:"",
    type:"",
    totalBookingsCount: 0,
    bookingDay: "",
    bookingId:"",
    bookingTitle:"",
    pricing:{}
}


const bookingSlice = createSlice({
    name:'booking',
    initialState: getBookingDetailsFromLocalStorage() || initialState,
    reducers:{
        adultCountIncrease : (state, action) => {
            state.adultCount = state.adultCount + 1
        },
        adultCountDecrease : (state, action) => {
            state.adultCount = state.adultCount - 1
        },
        childCountIncrease : (state, action) => {
            state.childCount = state.childCount + 1
        },
        childCountDecrease : (state, action) => {
            state.childCount = state.childCount - 1
        },
        seniorCountIncrease : (state, action) => {
            state.seniorCount = state.seniorCount + 1
        },
        seniorCountDecrease : (state, action) => {
            state.seniorCount = state.seniorCount - 1
        },
        adultTotalAmount: (state) => {
            if(state.type === 'bookTypeOne'){
                state.adultTotal = state.adultCount *  state.pricing.adult
            } else if(state.type === 'bookTypeTwo'){
                state.adultTotal = state.adultCount *  state.pricing.adult
            } else if(state.type === 'bookTypeThree'){
                state.adultTotal = state.adultCount *  state.pricing.adult
            }else if(state.type === 'bookTypeFour'){
                state.adultTotal = state.adultCount *  state.pricing.adult
            }else if(state.type === 'bookTypeFive'){
                state.adultTotal = state.adultCount *  state.pricing.adult
            }

        },
        childTotalAmount: (state) => {
            if(state.type === 'bookTypeOne'){
                state.childTotal = state.childCount *  state.pricing.child
            }
            else if(state.type === 'bookTypeTwo'){
                state.childTotal = state.childCount *  state.pricing.child
            }
            else if(state.type === 'bookTypeThree'){
                state.childTotal = state.childCount *  state.pricing.child
            }
            else if(state.type === 'bookTypeFour'){
                state.childTotal = state.childCount *  state.pricing.child
            }
            else if(state.type === 'bookTypeFive'){
                state.childTotal = state.childCount *  state.pricing.child
            }

        },
        seniorTotalAmount: (state) => {
            if(state.type === 'bookTypeOne'){
                state.seniorTotal = state.seniorCount *  state.pricing.senior
            } else if(state.type === 'bookTypeTwo'){
                state.seniorTotal = state.seniorCount *  state.pricing.senior
            }
            else if(state.type === 'bookTypeThree'){
                state.seniorTotal = state.seniorCount *  state.pricing.senior
            }
            else if(state.type === 'bookTypeFour'){
                state.seniorTotal = state.seniorCount *  state.pricing.senior
            }
            else if(state.type === 'bookTypeFive'){
                state.seniorTotal = state.seniorCount *  state.pricing.senior
            }
        },
        countTotalBookingAmount: (state, action) => {
            state.totalAmount = state.adultTotal + state.childTotal + state.seniorTotal
            state.bookingResponse = ""
        },
        setBookingDate: (state, action) => {
            state.bookingDate = action.payload.selectedBookingDate
            state.bookingResponse = ""
            state.bookingDay = action.payload.selectedDay.split(' ')[0]
        },
        openPaxModel: (state) => {
            state.isPaxModal = true
        },
        closePaxModel: (state) => {
            state.isPaxModal = false
        }, 
        cancelBooking: (state) => {
            setBookingDetailsFromLocalStorage(initialState)
            toast.warning("Booking Cancel")
            return state = initialState
        }, 
        bookingStart: (state,action) =>{
            state.loading  = true
            state.bookingResponse = ""
            
        },
        bookingSucess: (state, action) => {
            state.loading  = false
            state.name = action.payload.name
            state.email = action.payload.email
            state.mobileNumber = action.payload.mobileNumber
            state.bookingResponse = action.payload.bookingResponse
            state.totalBookingsCount = action.payload.totalBookingsCount
            state.responseClientUrl = action.payload.responseClientUrl
            console.log(state);
            setBookingDetailsFromLocalStorage(state)
        },
        bookingFailed: (state, action) => {
            state.loading = false
            toast.error("Booking Failed")
        },
        bookingConfirm: (state, action) => {
            setBookingDetailsFromLocalStorage(initialState)
            return state = initialState
        },
        choosingBooking: (state, action) => {
            state.type = action.payload.type
            state.bookingTitle = action.payload.title,
            state.pricing = action.payload.pricing
        },
        settingBookingResponse: (state, action) => {
            state.bookingResponse = ""
            state.bookingId = action.payload.createBookingId
            setBookingDetailsFromLocalStorage(state)
        },
        initialRender: (state) => {
            setBookingDetailsFromLocalStorage(initialState)
            return state = initialState
        },
    }
})

export const {
    adultCountIncrease, 
    adultCountDecrease, 
    childCountIncrease, 
    childCountDecrease,
    infantCountDecrease,
    infantCountIncrease,
    seniorCountDecrease,
    seniorCountIncrease,
    adultTotalAmount,
    childTotalAmount,
    infantTotalAmount,
    seniorTotalAmount,
    countTotalBookingAmount, 
    setBookingDate,
    openPaxModel,
    closePaxModel,
    cancelBooking,
    bookingFailed,
    bookingSucess,
    bookingStart,
    bookingConfirm,
    choosingBooking,
    settingBookingResponse,
    initialRender,
} = bookingSlice.actions

export default bookingSlice.reducer