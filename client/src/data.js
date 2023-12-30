import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/G2xtg8pj/build-test.jpg",
            "https://i.postimg.cc/LXKgbF3m/MINILAND-Amazing-Malaysia-Kuching-area-at-LEGOLAND-Malaysia-Resort-censored.jpg",
            "https://i.postimg.cc/bNzkP8cJ/i-K7-CPDr3-L-1.jpg",
            "https://i.postimg.cc/rsgds0Xp/Whats-App-Image-2023-12-27-at-10-36-33-1.jpg",
            "https://i.postimg.cc/wTTyPVLR/Whats-App-Image-2023-12-27-at-10-36-32.jpg",
        ],
        title:"1 Day Legoland Themepark",
        desc:"An exciting Lego-themed amusement park in Johor, featuring a colorful array of attractions, rides, and shows for a fun-filled family adventure.",
        type:"bookTypeOne",
        pricing: {
            adult:178,
            child:148,
            senior:148,
        },

    },
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/8zx77g3L/Whats-App-Image-2023-12-27-at-10-36-35.jpg",
            "https://i.postimg.cc/HL77zk5S/Whats-App-Image-2023-12-27-at-10-36-31-1.jpg",
            "https://i.postimg.cc/h4V1gpXC/131022122524-11-legoland-malaysia-waterpark.jpg",
            "https://i.postimg.cc/VkKFpvJm/145.jpg",
            "https://i.postimg.cc/Pr4bvJzY/131022122232-9-legoland-malaysia-waterpark.jpg",
        ],
        title:"1 Day Legoland Waterpark",
        desc:"Dive into aquatic fun at this Lego-themed water park in Johor, offering a splashing good time with water rides, slides, and interactive attractions for all ages.",
        type:"bookTypeTwo",
        pricing: {
            adult:135,
            child:120,
            senior:120,
        },

    },
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/y8xRJPNC/sea-life-malaysia-magical-storytelling-interactive-displays-a-hands-on-encounter.jpg",
            "https://i.postimg.cc/nzpcmF19/01056120008mxz4nm-B2-EC.jpg",
            "https://i.postimg.cc/qRs6fD1y/Whats-App-Image-2023-12-27-at-10-36-31.jpg",
            "https://i.postimg.cc/tTxtsz24/72a60970-c8f0-4300-a660-6b9e3da8ce99.jpg",
            "https://i.postimg.cc/15J65TsK/360-Ocean-Tunnel-Hi-Res-1.jpg",
        ],
        title:"1 Day Legoland Sealife",
        desc:"Lego-themed aquarium featuring vibrant marine life exhibits for a unique, family-friendly experience.",
        type:"bookTypeThree",
        pricing: {
            adult:75,
            child:60,
            senior:60,
        },

    },
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/y8xRJPNC/sea-life-malaysia-magical-storytelling-interactive-displays-a-hands-on-encounter.jpg",
            "https://i.postimg.cc/nzpcmF19/01056120008mxz4nm-B2-EC.jpg",
            "https://i.postimg.cc/qRs6fD1y/Whats-App-Image-2023-12-27-at-10-36-31.jpg",
            "https://i.postimg.cc/8zx77g3L/Whats-App-Image-2023-12-27-at-10-36-35.jpg",
            "https://i.postimg.cc/h4V1gpXC/131022122524-11-legoland-malaysia-waterpark.jpg",
            "https://i.postimg.cc/VkKFpvJm/145.jpg",
        ],
        title:"1 Day Legoland Combo : Themepark + Sealife",
        desc:"Thrilling theme park meets underwater wonder at Sealife. Enjoy rides, attractions, and Lego-themed marine adventures for family fun.",
        type:"bookTypeFour",
        pricing: {
            adult:260,
            child:200,
            senior:200,
        },

    },

    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/y8xRJPNC/sea-life-malaysia-magical-storytelling-interactive-displays-a-hands-on-encounter.jpg",
            "https://i.postimg.cc/nzpcmF19/01056120008mxz4nm-B2-EC.jpg",
            "https://i.postimg.cc/qRs6fD1y/Whats-App-Image-2023-12-27-at-10-36-31.jpg",
            "https://i.postimg.cc/8zx77g3L/Whats-App-Image-2023-12-27-at-10-36-35.jpg",
            "https://i.postimg.cc/h4V1gpXC/131022122524-11-legoland-malaysia-waterpark.jpg",
            "https://i.postimg.cc/VkKFpvJm/145.jpg",
            "https://i.postimg.cc/8zx77g3L/Whats-App-Image-2023-12-27-at-10-36-35.jpg",
            "https://i.postimg.cc/HL77zk5S/Whats-App-Image-2023-12-27-at-10-36-31-1.jpg",
            "https://i.postimg.cc/h4V1gpXC/131022122524-11-legoland-malaysia-waterpark.jpg",
            "https://i.postimg.cc/VkKFpvJm/145.jpg",
        ],
        title:"1 Day Legoland Combo : Themepark + Waterpark + Sealife",
        desc:"Experience the perfect trio of theme park thrills, Sealife wonders, and waterpark fun. All in one unforgettable adventure for the whole family.",
        type:"bookTypeFive",
        pricing: {
            adult:310,
            child:250,
            senior:250,
        },

    },
    
]

export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Fast Lane Tickets",
        price: 80,
        details:[
            "Skip queues with a fast lane upgrade."
        ]
    },  
    {
        id: uuidv4(),
        title: "Normal Lane Ticket",
        price: 30,
        details:[
            "Standard Admission ticket"
        ]
    },

]




export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/pd9KSZNJ/2016-03-11-legolandflorida-buildaboat-074-resized.jpg",
        title:"Build-A-Boat",
        desc:"Unleash your creativity in a thrilling boat-building game, racing through rapids  to determine the top captain."
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/h4V1gpXC/131022122524-11-legoland-malaysia-waterpark.jpg",
        title:"Red Rush",
        desc:"Ideal for the entire family, this tube ride guarantees an unforgettable experienceas it glides down a 312-foot-long twisting track."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/L5mYmkW7/Whats-App-Image-2023-12-27-at-10-36-32-1.jpg",
        title:"Dragon's Apperentice",
        desc:"Designed for young knights in training preparing for the day they faceafully-grown dragon, this mini rollercoaster allows you to build bravery gradually. Enjoy twists, turns, and spirals with a view of the Kingdom Castle."
    },   
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:"Ignite a passion for ocean learning in children with an up-close and inter active educational journey at the SEA LIFE Aquarium.",
        image: "https://i.postimg.cc/y8xRJPNC/sea-life-malaysia-magical-storytelling-interactive-displays-a-hands-on-encounter.jpg"
    },
    {
        id: uuidv4(),
        desc:"Ride the waves in LEGOLAND Water Park's wave pool, float along the lazy river, and feel the excitement of sliding down body slides and tubes!",
        image: "https://i.postimg.cc/h4V1gpXC/131022122524-11-legoland-malaysia-waterpark.jpg"
    },
    {
        id: uuidv4(),
        desc:"Experience an adrenaline rush with LEGOLAND Theme Park's 8 themed areas and 40+ rides, attractions, and shows.",
        image: "https://i.postimg.cc/pd9KSZNJ/2016-03-11-legolandflorida-buildaboat-074-resized.jpg"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "All park opens everyday from 10am-6pm.", 
            "Themepark closed every Wednesday except Public and School holiday",
            "Waterpark closed every Tuesday except Public and School holiday"
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult age is 12 to 59 years old.",
            "Child age is 3 to 11 years old.",
            "Senior Citizen age 60 and above."
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased",
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter"]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:["You may use the tickets within 30 days from purchased date."]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Can I bring food inside Legoland Malaysia?",
        ans:"No. Food and drinks is prohibited inside."
    },
    {
        id: uuidv4(),
        ques:"Does my 2 years old baby need to buy ticket to enter Legoland Malaysia ? ",
        ans:"No, Child below 90cm can enter for FREE."
    },
    {
        id: uuidv4(),
        ques:"How long can I stay inside Legoland Malaysia ? ",
        ans:"You may stay as long as you want, no time limit."
    },
    {
        id: uuidv4(),
        ques:"When does Legoland Malaysia close ? ",
        ans:"Legoland Waterpark is close every Tuesday and Legoland Themepark is close every Wednesday, except for Public Holiday and School Holiday."
    },
    {
        id: uuidv4(),
        ques:"Does my ticket includes Locker and Tubes ? ",
        ans:"No, its not included, but there are stations everywhere inside the park where guest may rent the items needed."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]