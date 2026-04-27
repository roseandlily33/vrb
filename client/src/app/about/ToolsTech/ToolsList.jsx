import {
    SiExpress,
    SiMongodb,
    SiMysql,
    SiJavascript,
} from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import {
    FaReact,
    FaNodeJs,
    FaRegStar,
    FaPaypal,
} from "react-icons/fa";

export const skills = {
    "Core Stack": [
        { name: "JavaScript", icon: <SiJavascript />, rating: 3 },
        { name: "React", icon: <FaReact />, rating: 3 },
        { name: "Next.js", icon: <RiNextjsFill />, rating: 3 },
        { name: "Node.js", icon: <FaNodeJs />, rating: 3 },
        { name: "Express.js", icon: <SiExpress />, rating: 3 },
        { name: "MongoDB & Mongoose", icon: <SiMongodb />, rating: 3 },
        { name: "MySQL", icon: <SiMysql />, rating: 2 },
        { name: "Paypal", icon: <FaPaypal />, rating: 2 },
    ],
    "Key Strengths": [
        { name: "UX/UI Design", icon: <FaRegStar />, rating: 3 },
        { name: "Responsive Design", icon: <FaRegStar />, rating: 3 },
        { name: "Performance", icon: <FaRegStar />, rating: 1 },
        { name: "Authorization", icon: <FaRegStar />, rating: 1 },
        { name: "Emails", icon: <MdAlternateEmail />, rating: 3 },
    ],
};
