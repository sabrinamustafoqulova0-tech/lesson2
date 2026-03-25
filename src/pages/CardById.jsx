import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router';
import imgCard from "../images/imgcard.png";
import img from "../images/img1.png";
import img2 from "../images/image1.png";
import solnze from "../images/image2.png";
import logo from "../images/logo-softclub.svg";
import flag from "../images/imagetf.png";
import macbook from "../images/macbook.png";
import certification from "../images/certification.png";
import facebook from "../images/facebook.png";
import chat from "../images/chat.png";
import instagram from "../images/instagram.png";
import watsapp from "../images/image.png";
import imgCard2 from "../images/js.png";
import imgCard3 from "../images/react.png";
import imgCard4 from "../images/figma.png";
import imgCard5 from "../images/basic.png";
import imgCard6 from "../images/python.png";
import imgCard7 from "../images/cchar.png";
import imgCard8 from "../images/git.png";
import imgCard9 from "../images/mobile.png";
import imgCard10 from "../images/kids.png";
import walet from "../images/wallet.webp";


import TvIcon from '@mui/icons-material/Tv';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListIcon from '@mui/icons-material/List';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChairIcon from '@mui/icons-material/Chair';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const CardById = () => {
    let [cards,setCard]=useState([
        {
            id:1,
            name:"HTML & CSS",
            bg:"#341919",
            img:imgCard,
            about:"Learn the building blocks of the  web",
            time:"1 month",
            stack:"Frontend",
            border:"f0522d",
            aboutInfo:"Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations.",
            answer:"This course provides a solid foundation in HTML and CSS. You'll start with the structure of a web page, semantic tags, and attributes, then move on to styling with CSS selectors, colors, fonts, and box model. Advanced sections include positioning, Flexbox, CSS Grid, transitions, animations, and responsive design. By the end, you will be able to create modern, mobile-friendly, and accessible websites.",
            prosessor:"Intel Core i5 (10-го поколения)",
            operating:"Windows 10, 64-бит",
            random:"8ГБ",
            storage:"SSD 256 ГБ или HDD 512 ГБ",
            question1:"HTML Basics",
            answer1_1:"What is HTML? Document structure",
            answer1_2:"Headings, paragraphs, links, images",
            answer1_3:"Lists: ordered, unordered, description",
            answer1_4:"Forms and input types",
            answer1_5:"Attributes: id, class, title, alt",
            answer1_6:"Semantic tags: header, nav, main, footer",
            question2:"CSS Basics",
            answer2_1:"What is CSS? Syntax and selectors",
            answer2_2:"Colors, backgrounds, borders",
            answer2_3:"Fonts and text styling",
            answer2_4:"Box model: margin, border, padding, content",
            answer2_5:"Inline, internal, and external CSS",
            question3:"Layouts & Positioning",
            answer3_1:"Display property: block, inline, inline-block",
            answer3_2:"Position: static, relative, absolute, fixed, sticky",
            answer3_3:"Z-index and stacking context",
            answer3_4:"Float and clear",
            question4:"Responsive Design",
            answer4_1:"Media queries for different devices",
            answer4_2:"Viewport meta tag",
            answer4_3:"Responsive typography",
            answer4_4:"Mobile-first approach",
            answer4_5:"Grid container and grid items",
            answer4_6:"Grid-template-rows, grid-template-columns",
            answer4_7:"Gap, justify-content, align-items",
            answer4_8:"Grid areas and responsive grids",
            question5:"FlexBox",
            answer5_1:"Flex container and flex items",
            answer5_2:"Position: static, relative, absolute, fixed, sticky",
            answer5_3:"Justify-content, align-items, align-self",
            answer5_4:"Flex-grow, flex-shrink, flex-basis",
            question6:"Transitions & Animations",
            answer6_1:"CSS transitions: properties, duration, timing",
            answer6_2:"CSS animations with keyframes",
            answer6_3:"Transform: translate, scale, rotate, skew",
            answer6_4:"Hover and focus effects",
        },
        {
            id:2,
            name:"JavaScript",
            bg:"#5c5c24",
            img:imgCard2,
            about:"Master programming fundamentals with JavaScript",
            time:"2 month",
            stack:"Frontend",
            border:"yellow",
            aboutInfo:"Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations.",
            answer:"This course provides a solid foundation in HTML and CSS. You'll start with the structure of a web page, semantic tags, and attributes, then move on to styling with CSS selectors, colors, fonts, and box model. Advanced sections include positioning, Flexbox, CSS Grid, transitions, animations, and responsive design. By the end, you will be able to create modern, mobile-friendly, and accessible websites.",
            prosessor:"Intel Core i5 (10-го поколения)",
            operating:"Windows 10, 64-бит",
            random:"8ГБ",
            storage:"SSD 256 ГБ или HDD 512 ГБ",
            question1:"Basics",
            answer1_1:"What is JavaScript? Running code",
            answer1_2:"Variables (let, var, const) and Data Types",
            answer1_3:"Naming rules, Operators",
            answer1_4:"Conditions: if/else, switch, ternary",
            answer1_5:"Loops: for, while, do..while",
            answer1_6:"Functions: declaration, expression, arrow, anonymous, IIFE",
            question2:"String basics and methods",
            answer2_1:"What is CSS? Syntax and selectors",
            answer2_2:"Numbers and number methods",
            answer2_3:"Recursion explained",
            answer2_4:"Closures and lexical environment",
            answer2_5:"Inline, internal, and external CSS",
            question3:"Arrays, Calllbacks & Object",
            answer3_1:"Arrays and array methods",
            answer3_2:"Destructuring, Spread & Rest",
            answer3_3:"Callbacks and array callbacks",
            answer3_4:"Objects and methods",
            question4:"OOP & Date",
            answer4_1:"Date object",
            answer4_2:"Set and Map",
            answer4_3:"OOP concepts: Classes & Objects",
            answer4_4:"Encapsulation, Abstraction, Inheritance, Polymorphism",
            answer4_5:"Constructor functions and prototypes",
            answer4_6:"Class vs Function approach",
            answer4_7:"Gap, justify-content, align-items",
            answer4_8:"Grid areas and responsive grids",
            question5:"DOM, BOM & CRUD",
            answer5_1:"DOM & BOM basics",
            answer5_2:"innerHTML, style object",
            answer5_3:"Create & append elements",
            answer5_4:"CRUD operations: add, delete, get, edit user",
            question6:"Async Programing",
            answer6_1:"CSS transitions: properties, duration, timing",
            answer6_2:"CSS animations with keyframes",
            answer6_3:"Transform: translate, scale, rotate, skew",
            answer6_4:"Hover and focus effects",
        },
        {
            id:3,
            name:"React",
            bg:"#124776",
            img:imgCard3,
            about:"Build interactive Uls with the popular JavaScript library",
            time:"3 month",
            stack:"Frontend",
            border:"#088afc",
            aboutInfo:"Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations.",
            answer:"This course provides a solid foundation in HTML and CSS. You'll start with the structure of a web page, semantic tags, and attributes, then move on to styling with CSS selectors, colors, fonts, and box model. Advanced sections include positioning, Flexbox, CSS Grid, transitions, animations, and responsive design. By the end, you will be able to create modern, mobile-friendly, and accessible websites.",
            prosessor:"Intel Core i5 (10-го поколения)",
            operating:"Windows 10, 64-бит",
            random:"8ГБ",
            storage:"SSD 256 ГБ или HDD 512 ГБ",
            question1:"HTML Basics",
            answer1_1:"What is HTML? Document structure",
            answer1_2:"Headings, paragraphs, links, images",
            answer1_3:"Lists: ordered, unordered, description",
            answer1_4:"Forms and input types",
            answer1_5:"Attributes: id, class, title, alt",
            answer1_6:"Semantic tags: header, nav, main, footer",
            question2:"CSS Basics",
            answer2_1:"What is CSS? Syntax and selectors",
            answer2_2:"Colors, backgrounds, borders",
            answer2_3:"Fonts and text styling",
            answer2_4:"Box model: margin, border, padding, content",
            answer2_5:"Inline, internal, and external CSS",
            question3:"Layouts & Positioning",
            answer3_1:"Display property: block, inline, inline-block",
            answer3_2:"Position: static, relative, absolute, fixed, sticky",
            answer3_3:"Z-index and stacking context",
            answer3_4:"Float and clear",
            question4:"Responsive Design",
            answer4_1:"Media queries for different devices",
            answer4_2:"Viewport meta tag",
            answer4_3:"Responsive typography",
            answer4_4:"Mobile-first approach",
            answer4_5:"Grid container and grid items",
            answer4_6:"Grid-template-rows, grid-template-columns",
            answer4_7:"Gap, justify-content, align-items",
            answer4_8:"Grid areas and responsive grids",
            question5:"FlexBox",
            answer5_1:"Flex container and flex items",
            answer5_2:"Position: static, relative, absolute, fixed, sticky",
            answer5_3:"Justify-content, align-items, align-self",
            answer5_4:"Flex-grow, flex-shrink, flex-basis",
            question6:"Transitions & Animations",
            answer6_1:"CSS transitions: properties, duration, timing",
            answer6_2:"CSS animations with keyframes",
            answer6_3:"Transform: translate, scale, rotate, skew",
            answer6_4:"Hover and focus effects",
        },
        {
            id:4,
            name:"Design",
            bg:"#075607",
            img:imgCard4,
            about:"Create beautiful, functional digital experiences",
            time:"1 month",
            stack:"Design",
            border:"green",
            aboutInfo:"Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations.",
            answer:"This course provides a solid foundation in HTML and CSS. You'll start with the structure of a web page, semantic tags, and attributes, then move on to styling with CSS selectors, colors, fonts, and box model. Advanced sections include positioning, Flexbox, CSS Grid, transitions, animations, and responsive design. By the end, you will be able to create modern, mobile-friendly, and accessible websites.",
            prosessor:"Intel Core i5 (10-го поколения)",
            operating:"Windows 10, 64-бит",
            random:"8ГБ",
            storage:"SSD 256 ГБ или HDD 512 ГБ",
            question1:"HTML Basics",
            answer1_1:"What is HTML? Document structure",
            answer1_2:"Headings, paragraphs, links, images",
            answer1_3:"Lists: ordered, unordered, description",
            answer1_4:"Forms and input types",
            answer1_5:"Attributes: id, class, title, alt",
            answer1_6:"Semantic tags: header, nav, main, footer",
            question2:"CSS Basics",
            answer2_1:"What is CSS? Syntax and selectors",
            answer2_2:"Colors, backgrounds, borders",
            answer2_3:"Fonts and text styling",
            answer2_4:"Box model: margin, border, padding, content",
            answer2_5:"Inline, internal, and external CSS",
            question3:"Layouts & Positioning",
            answer3_1:"Display property: block, inline, inline-block",
            answer3_2:"Position: static, relative, absolute, fixed, sticky",
            answer3_3:"Z-index and stacking context",
            answer3_4:"Float and clear",
            question4:"Responsive Design",
            answer4_1:"Media queries for different devices",
            answer4_2:"Viewport meta tag",
            answer4_3:"Responsive typography",
            answer4_4:"Mobile-first approach",
            answer4_5:"Grid container and grid items",
            answer4_6:"Grid-template-rows, grid-template-columns",
            answer4_7:"Gap, justify-content, align-items",
            answer4_8:"Grid areas and responsive grids",
            question5:"FlexBox",
            answer5_1:"Flex container and flex items",
            answer5_2:"Position: static, relative, absolute, fixed, sticky",
            answer5_3:"Justify-content, align-items, align-self",
            answer5_4:"Flex-grow, flex-shrink, flex-basis",
            question6:"Transitions & Animations",
            answer6_1:"CSS transitions: properties, duration, timing",
            answer6_2:"CSS animations with keyframes",
            answer6_3:"Transform: translate, scale, rotate, skew",
            answer6_4:"Hover and focus effects",
        },
        {
            id:5,
            name:"Basics of C++",
            bg:"#124776",
            img:imgCard5,
            about:"Start your programming journey with C++",
            time:"1 month",
            stack:"Backend",
            border:"#088afc",
            aboutInfo:"Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations.",
            answer:"This course provides a solid foundation in HTML and CSS. You'll start with the structure of a web page, semantic tags, and attributes, then move on to styling with CSS selectors, colors, fonts, and box model. Advanced sections include positioning, Flexbox, CSS Grid, transitions, animations, and responsive design. By the end, you will be able to create modern, mobile-friendly, and accessible websites.",
            prosessor:"Intel Core i5 (10-го поколения)",
            operating:"Windows 10, 64-бит",
            random:"8ГБ",
            storage:"SSD 256 ГБ или HDD 512 ГБ",
            question1:"HTML Basics",
            answer1_1:"What is HTML? Document structure",
            answer1_2:"Headings, paragraphs, links, images",
            answer1_3:"Lists: ordered, unordered, description",
            answer1_4:"Forms and input types",
            answer1_5:"Attributes: id, class, title, alt",
            answer1_6:"Semantic tags: header, nav, main, footer",
            question2:"CSS Basics",
            answer2_1:"What is CSS? Syntax and selectors",
            answer2_2:"Colors, backgrounds, borders",
            answer2_3:"Fonts and text styling",
            answer2_4:"Box model: margin, border, padding, content",
            answer2_5:"Inline, internal, and external CSS",
            question3:"Layouts & Positioning",
            answer3_1:"Display property: block, inline, inline-block",
            answer3_2:"Position: static, relative, absolute, fixed, sticky",
            answer3_3:"Z-index and stacking context",
            answer3_4:"Float and clear",
            question4:"Responsive Design",
            answer4_1:"Media queries for different devices",
            answer4_2:"Viewport meta tag",
            answer4_3:"Responsive typography",
            answer4_4:"Mobile-first approach",
            answer4_5:"Grid container and grid items",
            answer4_6:"Grid-template-rows, grid-template-columns",
            answer4_7:"Gap, justify-content, align-items",
            answer4_8:"Grid areas and responsive grids",
            question5:"FlexBox",
            answer5_1:"Flex container and flex items",
            answer5_2:"Position: static, relative, absolute, fixed, sticky",
            answer5_3:"Justify-content, align-items, align-self",
            answer5_4:"Flex-grow, flex-shrink, flex-basis",
            question6:"Transitions & Animations",
            answer6_1:"CSS transitions: properties, duration, timing",
            answer6_2:"CSS animations with keyframes",
            answer6_3:"Transform: translate, scale, rotate, skew",
            answer6_4:"Hover and focus effects",
        },
        {
            id:6,
            name:"Python",
            bg:"#07837e",
            img:imgCard6,
            about:"Learn one of the most versatile programming languages",
            time:"4 month",
            stack:"Backend",
            border:"#00f1e9",
            aboutInfo:"Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations.",
            answer:"This course provides a solid foundation in HTML and CSS. You'll start with the structure of a web page, semantic tags, and attributes, then move on to styling with CSS selectors, colors, fonts, and box model. Advanced sections include positioning, Flexbox, CSS Grid, transitions, animations, and responsive design. By the end, you will be able to create modern, mobile-friendly, and accessible websites.",
            prosessor:"Intel Core i5 (10-го поколения)",
            operating:"Windows 10, 64-бит",
            random:"8ГБ",
            storage:"SSD 256 ГБ или HDD 512 ГБ",
            question1:"HTML Basics",
            answer1_1:"What is HTML? Document structure",
            answer1_2:"Headings, paragraphs, links, images",
            answer1_3:"Lists: ordered, unordered, description",
            answer1_4:"Forms and input types",
            answer1_5:"Attributes: id, class, title, alt",
            answer1_6:"Semantic tags: header, nav, main, footer",
            question2:"CSS Basics",
            answer2_1:"What is CSS? Syntax and selectors",
            answer2_2:"Colors, backgrounds, borders",
            answer2_3:"Fonts and text styling",
            answer2_4:"Box model: margin, border, padding, content",
            answer2_5:"Inline, internal, and external CSS",
            question3:"Layouts & Positioning",
            answer3_1:"Display property: block, inline, inline-block",
            answer3_2:"Position: static, relative, absolute, fixed, sticky",
            answer3_3:"Z-index and stacking context",
            answer3_4:"Float and clear",
            question4:"Responsive Design",
            answer4_1:"Media queries for different devices",
            answer4_2:"Viewport meta tag",
            answer4_3:"Responsive typography",
            answer4_4:"Mobile-first approach",
            answer4_5:"Grid container and grid items",
            answer4_6:"Grid-template-rows, grid-template-columns",
            answer4_7:"Gap, justify-content, align-items",
            answer4_8:"Grid areas and responsive grids",
            question5:"FlexBox",
            answer5_1:"Flex container and flex items",
            answer5_2:"Position: static, relative, absolute, fixed, sticky",
            answer5_3:"Justify-content, align-items, align-self",
            answer5_4:"Flex-grow, flex-shrink, flex-basis",
            question6:"Transitions & Animations",
            answer6_1:"CSS transitions: properties, duration, timing",
            answer6_2:"CSS animations with keyframes",
            answer6_3:"Transform: translate, scale, rotate, skew",
            answer6_4:"Hover and focus effects",
        },
        {
            id:7,
            name:"С #",
            bg:"#511678",
            img:imgCard7,
            about:"Build versatile applications with this powerful language",
            time:"3 month",
            stack:"Backend",
            border:"#a624fc",
            aboutInfo:"Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations.",
            answer:"This course provides a solid foundation in HTML and CSS. You'll start with the structure of a web page, semantic tags, and attributes, then move on to styling with CSS selectors, colors, fonts, and box model. Advanced sections include positioning, Flexbox, CSS Grid, transitions, animations, and responsive design. By the end, you will be able to create modern, mobile-friendly, and accessible websites.",
            prosessor:"Intel Core i5 (10-го поколения)",
            operating:"Windows 10, 64-бит",
            random:"8ГБ",
            storage:"SSD 256 ГБ или HDD 512 ГБ",
            question1:"HTML Basics",
            answer1_1:"What is HTML? Document structure",
            answer1_2:"Headings, paragraphs, links, images",
            answer1_3:"Lists: ordered, unordered, description",
            answer1_4:"Forms and input types",
            answer1_5:"Attributes: id, class, title, alt",
            answer1_6:"Semantic tags: header, nav, main, footer",
            question2:"CSS Basics",
            answer2_1:"What is CSS? Syntax and selectors",
            answer2_2:"Colors, backgrounds, borders",
            answer2_3:"Fonts and text styling",
            answer2_4:"Box model: margin, border, padding, content",
            answer2_5:"Inline, internal, and external CSS",
            question3:"Layouts & Positioning",
            answer3_1:"Display property: block, inline, inline-block",
            answer3_2:"Position: static, relative, absolute, fixed, sticky",
            answer3_3:"Z-index and stacking context",
            answer3_4:"Float and clear",
            question4:"Responsive Design",
            answer4_1:"Media queries for different devices",
            answer4_2:"Viewport meta tag",
            answer4_3:"Responsive typography",
            answer4_4:"Mobile-first approach",
            answer4_5:"Grid container and grid items",
            answer4_6:"Grid-template-rows, grid-template-columns",
            answer4_7:"Gap, justify-content, align-items",
            answer4_8:"Grid areas and responsive grids",
            question5:"FlexBox",
            answer5_1:"Flex container and flex items",
            answer5_2:"Position: static, relative, absolute, fixed, sticky",
            answer5_3:"Justify-content, align-items, align-self",
            answer5_4:"Flex-grow, flex-shrink, flex-basis",
            question6:"Transitions & Animations",
            answer6_1:"CSS transitions: properties, duration, timing",
            answer6_2:"CSS animations with keyframes",
            answer6_3:"Transform: translate, scale, rotate, skew",
            answer6_4:"Hover and focus effects",
        },
        {
            id:8,
            name:"Git",
            bg:"#6a1010",
            img:imgCard8,
            about:"Master version control to collaborate on coding projects",
            time:"1 month",
            stack:"Frontend",
            border:"#f0522d",
            aboutInfo:"Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations.",
            answer:"This course provides a solid foundation in HTML and CSS. You'll start with the structure of a web page, semantic tags, and attributes, then move on to styling with CSS selectors, colors, fonts, and box model. Advanced sections include positioning, Flexbox, CSS Grid, transitions, animations, and responsive design. By the end, you will be able to create modern, mobile-friendly, and accessible websites.",
            prosessor:"Intel Core i5 (10-го поколения)",
            operating:"Windows 10, 64-бит",
            random:"8ГБ",
            storage:"SSD 256 ГБ или HDD 512 ГБ",
            question1:"HTML Basics",
            answer1_1:"What is HTML? Document structure",
            answer1_2:"Headings, paragraphs, links, images",
            answer1_3:"Lists: ordered, unordered, description",
            answer1_4:"Forms and input types",
            answer1_5:"Attributes: id, class, title, alt",
            answer1_6:"Semantic tags: header, nav, main, footer",
            question2:"CSS Basics",
            answer2_1:"What is CSS? Syntax and selectors",
            answer2_2:"Colors, backgrounds, borders",
            answer2_3:"Fonts and text styling",
            answer2_4:"Box model: margin, border, padding, content",
            answer2_5:"Inline, internal, and external CSS",
            question3:"Layouts & Positioning",
            answer3_1:"Display property: block, inline, inline-block",
            answer3_2:"Position: static, relative, absolute, fixed, sticky",
            answer3_3:"Z-index and stacking context",
            answer3_4:"Float and clear",
            question4:"Responsive Design",
            answer4_1:"Media queries for different devices",
            answer4_2:"Viewport meta tag",
            answer4_3:"Responsive typography",
            answer4_4:"Mobile-first approach",
            answer4_5:"Grid container and grid items",
            answer4_6:"Grid-template-rows, grid-template-columns",
            answer4_7:"Gap, justify-content, align-items",
            answer4_8:"Grid areas and responsive grids",
            question5:"FlexBox",
            answer5_1:"Flex container and flex items",
            answer5_2:"Position: static, relative, absolute, fixed, sticky",
            answer5_3:"Justify-content, align-items, align-self",
            answer5_4:"Flex-grow, flex-shrink, flex-basis",
            question6:"Transitions & Animations",
            answer6_1:"CSS transitions: properties, duration, timing",
            answer6_2:"CSS animations with keyframes",
            answer6_3:"Transform: translate, scale, rotate, skew",
            answer6_4:"Hover and focus effects",
        },
        {
            id:9,
            name:"Flutter",
            bg:"#124776",
            img:imgCard9,
            about:"Build cross-platform mobile apps with a single codebase",
            time:"4 month",
            stack:"Mobile",
            border:"#088afc",
            aboutInfo:"Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations.",
            answer:"This course provides a solid foundation in HTML and CSS. You'll start with the structure of a web page, semantic tags, and attributes, then move on to styling with CSS selectors, colors, fonts, and box model. Advanced sections include positioning, Flexbox, CSS Grid, transitions, animations, and responsive design. By the end, you will be able to create modern, mobile-friendly, and accessible websites.",
            prosessor:"Intel Core i5 (10-го поколения)",
            operating:"Windows 10, 64-бит",
            random:"8ГБ",
            storage:"SSD 256 ГБ или HDD 512 ГБ",
            question1:"HTML Basics",
            answer1_1:"What is HTML? Document structure",
            answer1_2:"Headings, paragraphs, links, images",
            answer1_3:"Lists: ordered, unordered, description",
            answer1_4:"Forms and input types",
            answer1_5:"Attributes: id, class, title, alt",
            answer1_6:"Semantic tags: header, nav, main, footer",
            question2:"CSS Basics",
            answer2_1:"What is CSS? Syntax and selectors",
            answer2_2:"Colors, backgrounds, borders",
            answer2_3:"Fonts and text styling",
            answer2_4:"Box model: margin, border, padding, content",
            answer2_5:"Inline, internal, and external CSS",
            question3:"Layouts & Positioning",
            answer3_1:"Display property: block, inline, inline-block",
            answer3_2:"Position: static, relative, absolute, fixed, sticky",
            answer3_3:"Z-index and stacking context",
            answer3_4:"Float and clear",
            question4:"Responsive Design",
            answer4_1:"Media queries for different devices",
            answer4_2:"Viewport meta tag",
            answer4_3:"Responsive typography",
            answer4_4:"Mobile-first approach",
            answer4_5:"Grid container and grid items",
            answer4_6:"Grid-template-rows, grid-template-columns",
            answer4_7:"Gap, justify-content, align-items",
            answer4_8:"Grid areas and responsive grids",
            question5:"FlexBox",
            answer5_1:"Flex container and flex items",
            answer5_2:"Position: static, relative, absolute, fixed, sticky",
            answer5_3:"Justify-content, align-items, align-self",
            answer5_4:"Flex-grow, flex-shrink, flex-basis",
            question6:"Transitions & Animations",
            answer6_1:"CSS transitions: properties, duration, timing",
            answer6_2:"CSS animations with keyframes",
            answer6_3:"Transform: translate, scale, rotate, skew",
            answer6_4:"Hover and focus effects",
        },
        {
            id:10,
            name:"Programming for teenagers",
            bg:"#122d76",
            img:imgCard10,
            about:"Programming fundamentals for young learners",
            time:"10 month",
            stack:"Kids",
            border:"#094bff",
            aboutInfo:"Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations.",
            answer:"This course provides a solid foundation in HTML and CSS. You'll start with the structure of a web page, semantic tags, and attributes, then move on to styling with CSS selectors, colors, fonts, and box model. Advanced sections include positioning, Flexbox, CSS Grid, transitions, animations, and responsive design. By the end, you will be able to create modern, mobile-friendly, and accessible websites.",
            prosessor:"Intel Core i5 (10-го поколения)",
            operating:"Windows 10, 64-бит",
            random:"8ГБ",
            storage:"SSD 256 ГБ или HDD 512 ГБ",
            question1:"HTML Basics",
            answer1_1:"What is HTML? Document structure",
            answer1_2:"Headings, paragraphs, links, images",
            answer1_3:"Lists: ordered, unordered, description",
            answer1_4:"Forms and input types",
            answer1_5:"Attributes: id, class, title, alt",
            answer1_6:"Semantic tags: header, nav, main, footer",
            question2:"CSS Basics",
            answer2_1:"What is CSS? Syntax and selectors",
            answer2_2:"Colors, backgrounds, borders",
            answer2_3:"Fonts and text styling",
            answer2_4:"Box model: margin, border, padding, content",
            answer2_5:"Inline, internal, and external CSS",
            question3:"Layouts & Positioning",
            answer3_1:"Display property: block, inline, inline-block",
            answer3_2:"Position: static, relative, absolute, fixed, sticky",
            answer3_3:"Z-index and stacking context",
            answer3_4:"Float and clear",
            question4:"Responsive Design",
            answer4_1:"Media queries for different devices",
            answer4_2:"Viewport meta tag",
            answer4_3:"Responsive typography",
            answer4_4:"Mobile-first approach",
            answer4_5:"Grid container and grid items",
            answer4_6:"Grid-template-rows, grid-template-columns",
            answer4_7:"Gap, justify-content, align-items",
            answer4_8:"Grid areas and responsive grids",
            question5:"FlexBox",
            answer5_1:"Flex container and flex items",
            answer5_2:"Position: static, relative, absolute, fixed, sticky",
            answer5_3:"Justify-content, align-items, align-self",
            answer5_4:"Flex-grow, flex-shrink, flex-basis",
            question6:"Transitions & Animations",
            answer6_1:"CSS transitions: properties, duration, timing",
            answer6_2:"CSS animations with keyframes",
            answer6_3:"Transform: translate, scale, rotate, skew",
            answer6_4:"Hover and focus effects",
        }
    ])

    const {cardId}=useParams()
    const card=cards.find((e)=>e.id==cardId)
  return (
    <>
     <div className='px-[150px] bg-[#3782bc]  flex items-center justify-between text-white'>
        <img src={img} alt="" />
        <div className='flex items-center gap-4'>
            <p className='font-bold text-[20px]'>4 «April» 17:00 free class</p>
            <button className='bg-[#fff] text-[black] p-[5px] px-[20px] font-bold rounded-3xl border-4 border-solid border-[#2e9ac4]'>More information</button>
        </div>
        <img src={img2} alt="" />
    </div> 
    <div className='bg-gray-100'>
    <div className='px-[150px] py-[20px] flex items-center justify-between '>
        <div className='flex gap-14 items-center font-bold'>
        <img className='w-[100px]' src={logo} alt="" />
        <div className='flex gap-8'>
        <p>Courses</p>
        <p>About</p>
        <p>Contact</p>
        <p>Insight</p>
        </div>
        </div>
        <div>
            <div className='flex gap-3 items-center'>
            <img className='h-[40px]  border-2 rounded-[5px] border-solid border-gray-300' src={solnze} alt="" />
            <button className='flex items-center gap-[10px] border-2 border-solid border-gray-300 rounded-[10px] bg-gray-100 px-[10px] py-[5px]'>
                <img src={flag} alt="" />
                <p>En</p>
            </button>
            <Button variant="outlined">Войти</Button>
            </div>
        </div>
    </div>
    <div className='px-[150px] py-[60px] gap-5 flex items-center'>
        <p className='text-gray-400'>Home</p>
        <p className='text-gray-400'>></p>
        <p>{card.name}</p>
    </div>
    <div className='px-[180px] flex justify-between'>
        <div className='w-[57%]'>
        <h1 className='text-6xl text-[#359dd6] font-bold'>{card.name}</h1>
        <p className='text-[18px] my-[20px] '>{card.aboutInfo}</p>
        <Button sx={{borderRadius:"30px", border:"2px solid #359dd6", padding:"10px", paddingLeft:"20px", paddingRight:"20px"}} variant="outlined" endIcon={<SendIcon />}>
          Sign up for a course
        </Button>
        </div>
        <img className='w-[300px] transition duration-300 hover:scale-105' src={card.img} alt="" />
    </div>
    <div className='px-[150px] py-[60px] gap-5 justify-center flex items-center flex-wrap'>
        <div className='bg-[#fff] flex justify-center gap-3 w-[290px] items-center p-[10px] border-2 border-solid border-gray-100 rounded-2xl'>
            <CalendarMonthIcon sx={{color:"#359dd6"}}/>
            <p>5 April</p>
        </div>
        <div className='bg-[#fff] flex justify-center gap-3 w-[290px] items-center p-[10px] border-2 border-solid border-gray-100 rounded-2xl'>
            <AccessTimeIcon sx={{color:"#359dd6"}}/>
            <p>6 classes per week</p>
        </div>
        <div className='bg-[#fff] flex justify-center gap-3 w-[290px] items-center p-[10px] border-2 border-solid border-gray-100 rounded-2xl'>
            <ListIcon sx={{color:"#359dd6"}}/>
            <p>3 portfolio projects</p>
        </div>
        <div className='bg-[#fff] flex justify-center gap-3 w-[290px] items-center p-[10px] border-2 border-solid border-gray-100 rounded-2xl'>
            <PeopleAltIcon sx={{color:"#359dd6"}}/>
            <p>Group of 10–12 people</p>
        </div>
        <div className='bg-[#fff] flex justify-center gap-3 w-[500px] items-center p-[10px] border-2 border-solid border-gray-100 rounded-2xl'>
            <ChairIcon sx={{color:"#359dd6"}}/>
            <p>Group of 10–12 people</p>
        </div>
        <div className='bg-[#fff] flex justify-center gap-3 w-[500px] items-center p-[10px] border-2 border-solid border-gray-100 rounded-2xl'>
            <MilitaryTechIcon sx={{color:"#359dd6"}}/>
            <p>Group of 10–12 people</p>
        </div>
    </div>
    <div className='mx-[150px] shadow-2xs border-2 border-solid bg-[#fff] border-gray-100 p-[30px] rounded-2xl'>
        <span className='text-3xl font-bold'>Why </span>
        <span className='text-3xl font-bold'>{card.name}</span>
        <p className='my-[20px] text-[18px]'>{card.answer}</p>
    </div>
    <div className='flex mx-[150px] shadow-2xs border-2 border-solid gap-48 mt-[50px] bg-[#fff] border-gray-100 p-[30px] items-center rounded-2xl'>
        <img className='w-[260px]' src={walet} alt="" />
        <div>
             <Box sx={{ maxWidth: 800, p: 4 }}>
      <Typography
        variant="h4"
        sx={{ color: '#00a3e0', fontWeight: 'bold', mb: 6 }}>
        Average salaries in IT professions
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        
        <Box>
          <Typography sx={{ fontWeight: 'bold', color: '#555' }}>
            JUNIOR
          </Typography>
          <Typography sx={{ color: '#00a3e0', fontWeight: 'bold', mt: 1 }}>
            250$
          </Typography>
        </Box>

        <Box sx={{ flex: 1, height: 2, bgcolor: '#e0e0e0', mx: 2 }} />

        <Box>
          <Typography sx={{ fontWeight: 'bold', color: '#555' }}>
            MIDDLE
          </Typography>
          <Typography sx={{ color: '#00a3e0', fontWeight: 'bold', mt: 1 }}>
            600$
          </Typography>
        </Box>

        <Box sx={{ flex: 1, height: 2, bgcolor: '#e0e0e0', mx: 2 }} />

        <Box>
          <Typography sx={{ fontWeight: 'bold', color: '#555' }}>
            SENIOR
          </Typography>
          <Typography sx={{ color: '#00a3e0', fontWeight: 'bold', mt: 1 }}>
            1500$
          </Typography>
        </Box>

      </Box>
    </Box>
        </div>
    </div>

    <div>
        <div className='font-bold text-4xl text-center my-[50px]'>
            <span className='text-[#3782bc]'>Minimum </span>
            <span>required </span>
            <span className='text-[#3782bc]'>laptop </span>
            <span>for thecourse</span>
        </div>
        <div className='px-[150px] flex gap-[30px] items-center'>
            <div className='bg-[#fff] p-[20px] w-[900px] border-2px border-solid border-gray-100 rounded-2xl'>
                <img className='m-auto w-[300px]' src={macbook} alt="" />
            </div>
            <div className='flex flex-wrap gap-[20px]'>
                <div className='w-[350px] bg-[#fff] border-2 border-solid border-gray-100 p-[20px] flex justify-between items-start rounded-2xl border-t-4 border-t-blue-500'>
                    <Button><TvIcon/></Button>
                    <div>
                        <h2 className='text-2xl font-bold'>{card.prosessor}</h2>
                        <p className='text-[#3782bc]'>Processor</p>
                    </div>
                </div>
                <div className='w-[350px] bg-[#fff] border-2 border-solid border-gray-100 p-[20px] flex justify-between items-start rounded-2xl border-t-4 border-t-blue-500'>
                    <Button><TvIcon/></Button>
                    <div>
                        <h2 className='text-2xl font-bold'>{card.operating}</h2>
                        <p className='text-[#3782bc]'>Operating System</p>
                    </div>
                </div>
                <div className='w-[350px] bg-[#fff] border-2 border-solid border-gray-100 p-[20px] flex justify-between items-start rounded-2xl border-t-4 border-t-blue-500'>
                    <Button><TvIcon/></Button>
                    <div>
                        <h2 className='text-2xl font-bold'>{card.random}</h2>
                        <p className='text-[#3782bc]'>Random Access Memory (RAM)</p>
                    </div>
                </div>
                <div className='w-[350px] bg-[#fff] border-2 border-solid border-gray-100 p-[20px] flex justify-between items-start rounded-2xl border-t-4 border-t-blue-500'>
                    <Button><TvIcon/></Button>
                    <div>
                        <h2 className='text-2xl font-bold'>{card.storage}</h2>
                        <p className='text-[#23a0ff]'>Storage</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='px-[150px]'>
        <h1 className='text-center text-3xl font-bold my-[80px]'>Course Prigtam</h1>
        
      <Accordion sx={{ marginBottom:"50px", padding:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            <div className='flex items-center gap-5'>
            <Button sx={{fontSize:"20px"}} variant='contained'>1</Button>
            <p className='text-2xl font-bold'>{card.question1}</p>
            </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='bg-gray-100 p-[20px] rounded-2xl border-l-7 border-l-blue-600'>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer1_1}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer1_2}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer1_3}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer1_4}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer1_5}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer1_6}</p>
            </div>
            </div>
        </AccordionDetails>
      </Accordion>


      
      <Accordion sx={{ marginBottom:"50px", padding:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            <div className='flex items-center gap-5'>
            <Button sx={{fontSize:"20px"}} variant='contained'>2</Button>
            <p className='text-2xl font-bold'>{card.question2}</p>
            </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='bg-gray-100 p-[20px] rounded-2xl border-l-7 border-l-blue-600'>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer2_1}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer2_2}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer2_3}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer2_4}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer2_5}</p>
            </div>
            </div>
        </AccordionDetails>
      </Accordion>


      
      <Accordion sx={{ marginBottom:"50px", padding:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            <div className='flex items-center gap-5'>
            <Button sx={{fontSize:"20px"}} variant='contained'>3</Button>
            <p className='text-2xl font-bold'>{card.question3}</p>
            </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='bg-gray-100 p-[20px] rounded-2xl border-l-7 border-l-blue-600'>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer3_1}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer3_2}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer3_3}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer3_4}</p>
            </div>
            </div>
        </AccordionDetails>
      </Accordion>

      
      
      <Accordion sx={{ marginBottom:"50px", padding:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            <div className='flex items-center gap-5'>
            <Button sx={{fontSize:"20px"}} variant='contained'>4</Button>
            <p className='text-2xl font-bold'>{card.question4}</p>
            </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='bg-gray-100 p-[20px] rounded-2xl border-l-7 border-l-blue-600'>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer4_1}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer4_2}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer4_3}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer4_4}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer4_5}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer4_6}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer4_7}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer4_8}</p>
            </div>
            </div>
        </AccordionDetails>
      </Accordion>

      
      <Accordion sx={{ marginBottom:"50px", padding:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            <div className='flex items-center gap-5'>
            <Button sx={{fontSize:"20px"}} variant='contained'>5</Button>
            <p className='text-2xl font-bold'>{card.question5}</p>
            </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='bg-gray-100 p-[20px] rounded-2xl border-l-7 border-l-blue-600'>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer5_1}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer5_2}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer5_3}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer5_4}</p>
            </div>
            </div>
        </AccordionDetails>
      </Accordion>

      
      <Accordion sx={{ marginBottom:"50px", padding:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            <div className='flex items-center gap-5'>
            <Button sx={{fontSize:"20px"}} variant='contained'>6</Button>
            <p className='text-2xl font-bold'>{card.question6}</p>
            </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='bg-gray-100 p-[20px] rounded-2xl border-l-7 border-l-blue-600'>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer6_1}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer6_2}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer6_3}</p>
            </div>
            <div className='flex gap-3 mb-[10px]'>
                <CheckCircleOutlineIcon sx={{color:"green"}}/>
                <p className='text-gray-600'>{card.answer6_4}</p>
            </div>
            </div>
        </AccordionDetails>
      </Accordion>
    </div>

    <div className='mx-[150px] bg-[#4f97de24] rounded-2xl p-[40px] mb-[50px] flex justify-between items-center'>
        <div>
            <h1 className='text-5xl text-[#207dc4] font-bold'>Softclub Certificate</h1>
            <p className='text-[17px] text-[#424242] mt-[20px] mb-[40px] font-bold'>Will confirm that you have completed the course and help you find a job</p>
        <Button sx={{borderRadius:"30px", border:"2px solid #359dd6", padding:"10px", paddingLeft:"20px", paddingRight:"20px"}} variant="outlined" endIcon={<SendIcon />}>
          Example certificate
        </Button>
        </div>
        <img src={certification} alt="" />
    </div>

    <footer className='bg-[#fff] flex justify-between  p-[20px] px-[150px]'>
        <div className='flex flex-col gap-2'>
            <img className='w-[100px]' src={logo} alt="" />
            <p className='text-[20px] font-bold w-[300px]'>Master an in-demand IT profession and start earning</p>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-[18px] font-bold'>Master an in-demand IT</p>
            <p>Sign up for a course</p>
            <p>Courses</p>
            <p>News</p>
            <p>About us</p>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-[18px] font-bold'>Contacts</p>
            <p>info@softclub.tj</p>
            <p>(+992) 558 700 900</p>
            <p>Rahimi street 12, landmark: Profsoyuz</p>
            <div className='flex items-center gap-5'>
                <img src={facebook} alt="" />
                <img src={chat} alt="" />
                <img src={instagram} alt="" />
                <img src={watsapp} alt="" />
            </div>
        </div>
    </footer>
    </div>
    </>
  )
}

export default CardById


