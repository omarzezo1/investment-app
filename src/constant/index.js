import { Client1, Client2, Client3, Client4, Client5, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, News1, News2, News3, Shape22, Shape23 } from "../images/imgs"
import { Facebook, IconSvg1, IconSvg2, IconSvg3, IconSvg4, IconSvg5, IconSvg6, Instagram, Tiktok, Youtube } from "../images/svg"

const navLinks = [
    {name: "Home", path: "/"},
    {name: "Pages", path: "/"},
    {name: "Services", path: "/"},
    {name: "Blog", path: "/"},
    {name: "Contact", path: "/"},
]


const Clients = [
    {name: "client1", img: Client1},
    {name: "client2", img: Client2},
    {name: "client3", img: Client3},
    {name: "client4", img: Client4},
    {name: "client5", img: Client5},
    {name: "client6", img: Client2},
]


const services = [
    {
        iconPng: Icon1,
        iconSvg: IconSvg1,
        title: "Investment Plans",
        text: "Offer various investment plans with different durations and expected",
        link: "#"
    },
    {
        iconPng: Icon2,
        iconSvg: IconSvg2,
        title: "Portfolio Management",
        text: "Provide professional portfolio was in services, where investors' funds.",
        link: "#"
    },
    {
        iconPng: Icon3,
        iconSvg: IconSvg3,
        title: "Risk Analysis",
        text: "Conduct thorough risk assessments and analysis of investment",
        link: "#"
    },
    {
        iconPng: Icon4,
        iconSvg: IconSvg4,
        title: "Security Features",
        text: "Implement robust security measures to protect investors' personal",
        link: "#"
    },
    {
        iconPng: Icon5,
        iconSvg: IconSvg5,
        title: "Withdrawal Services",
        text: "Facilitate quick & secure withdrawals for investors to access their funds",
        link: "#"
    },
    {
        iconPng: Icon6,
        iconSvg: IconSvg6,
        title: "Referral Programs",
        text: "Offer referral programs or affiliate commissions to incentivize investors",
        link: "#"
    },
]

const statistics = [
    {
        number: "99",
        sign: "%",
        title: "Customer satisfaction"
    },
    {
        number: "32",
        sign: "M",
        title: "Active users"
    },
    {
        number: "125",
        sign: "+",
        title: "Team members"
    },
    {
        number: "240",
        sign: "%",
        title: "Company growth"
    },
]

const pricingPlans = [
    {
        title: "STARTER Plan",
        price: 100,
        accountsNumber: 1,
        daysNumber: 30,
        features: [
            "Basic Moderate Returns",
            "Expected Return 5% to 7$",
            "General Support"
        ]
    },
    {
        title: "Standard Plan",
        price: 500,
        accountsNumber: 5,
        daysNumber: 60,
        features: [
            "Intermediate Higher Returns",
            "Expected Return 8% to 10$",
            "Priority Support"
        ]
    },
    {
        title: "Advanced Plan",
        price: 1000,
        accountsNumber: 10,
        daysNumber: 90,
        features: [
            "Advanced Higher Returns",
            "Expected Return 12% to 15$",
            "Premium Support"
        ]
    },
]

const faq = [
    {
        title: "How Can I Pay?",
        body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou, or words which don't look even slightly believable."
    },
    {
        title: "How Does It Work?",
        body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou, or words which don't look even slightly believable."
    },
    {
        title: "What Is Process To Get Expert Team?",
        body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou, or words which don't look even slightly believable."
    },
    {
        title: "How Can I Migrate To Another Site?",
        body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou, or words which don't look even slightly believable."
    },
]

const testimonials = [
    {
        body: "“ I was initially skeptical about investing in HYIPs, but after doing my research andspeaking ”",
        name: "Kathryn Murphy",
        jobTitle: "Marketing Coordinator"
    },
    {
        body: "“ As a seasoned investor, I'm always on the lookout for new opportunities, and HYIP ”",
        name: "Robert Fox",
        jobTitle: "Web Designer"
    },
    {
        body: "“ I’ve been investing with for several months now, and I've been consistently impressed ”",
        name: "Annette Black",
        jobTitle: "President of Sales"
    },
    {
        body: "“ I was initially skeptical about investing in HYIPs, but after doing my research and speaking ”",
        name: "Kathryn Murphy",
        jobTitle: "Marketing Coordinator"
    },
]

const blogs = [
    {
        blogImg: News1,
        detailsCover: Shape22,
        tags: [
            {tagName: "Research,", link: "/"},
            {tagName: "Technology", link: "/"},
        ],
        title: "Navigating the World of High-Yield Investments: A Beginner's Guide",
        author: "Samir Jam",
        date: "21 Jan 2024",
        path: '/'
    },
    {
        blogImg: News2,
        detailsCover: Shape23,
        tags: [
            {tagName: "Research,", link: "/"},
            {tagName: "Technology", link: "/"},
        ],
        title: "The Future of High-Yield Investments: Trends to Watch in 2024",
        author: "Samir Jam",
        date: "21 Jan 2024",
        path: '/'
    },
    {
        blogImg: News3,
        detailsCover: Shape23,
        tags: [
            {tagName: "Research,", link: "/"},
            {tagName: "Technology", link: "/"},
        ],
        title: "Maximizing Returns: Investment Strategies for Different HYIP Plans",
        author: "Samir Jam",
        date: "21 Jan 2024",
        path: '/'
    },
    {
        blogImg: News2,
        detailsCover: Shape23,
        tags: [
            {tagName: "Research,", link: "/"},
            {tagName: "Technology", link: "/"},
        ],
        title: "The Future of High-Yield Investments: Trends to Watch in 2024",
        author: "Samir Jam",
        date: "21 Jan 2024",
        path: '/'
    },
]

const footerLinks = [
    {name: "About us", path: "/"},
    {name: "Contact", path: "/"},
    {name: "Blog", path: "/"},
    {name: "Policy", path: "/"},
    {name: "Refund", path: "/"},
]

const socialFooter = [
    {icon: Facebook, name: "facebook", link: "/"},
    {icon: Tiktok, name: "tiktok", link: "/"},
    {icon: Instagram, name: "instagram", link: "/"},
    {icon: Youtube, name: "youtube", link: ""},
]

export {navLinks, Clients, services, statistics, pricingPlans, faq, testimonials, blogs, footerLinks, socialFooter}