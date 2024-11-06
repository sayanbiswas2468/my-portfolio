import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as QuoteLeft } from './../../assets/images/quote-left.svg';
import { ReactComponent as QuoteRight } from './../../assets/images/quote-right.svg';
import ProjectSlider from './../../components/projectSlider';

import { BiLogoTypescript } from 'react-icons/bi';
import { FaNode, FaReact, FaWordpress } from 'react-icons/fa';
import { GrDocker } from 'react-icons/gr';
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from 'react-icons/si';
import './home.scss';
import Bgs from '../../assets/images/bg.svg'

const Data = [
    {
        id: 0,
        img: "https://private-user-images.githubusercontent.com/96792157/369371827-282ecde7-174b-48db-89b9-60116a1e2b53.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA4MjQ5NjAsIm5iZiI6MTczMDgyNDY2MCwicGF0aCI6Ii85Njc5MjE1Ny8zNjkzNzE4MjctMjgyZWNkZTctMTc0Yi00OGRiLTg5YjktNjAxMTZhMWUyYjUzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTA1VDE2Mzc0MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc2M2VmMzlhNmE4MmNmMTQyNTg2MWM5ZTUxZjU4YjU5YzdhMGQ4ZjZiMTYwZWYyYTVkYjgwMTdmNmFlNjdjZGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0._K5n5fRN1ik8EE-ir1h2oqyv-wNmjCg4Nl3a7JGBFEk",
    },
    {
        id: 1,
        img: "https://private-user-images.githubusercontent.com/166992902/324908777-96266461-b5e6-4977-ba84-5e510ae18c6d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA4Mjc1MjIsIm5iZiI6MTczMDgyNzIyMiwicGF0aCI6Ii8xNjY5OTI5MDIvMzI0OTA4Nzc3LTk2MjY2NDYxLWI1ZTYtNDk3Ny1iYTg0LTVlNTEwYWUxOGM2ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEwNVQxNzIwMjJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lODgzNTBlNTJlZjBiZGZkZDJkNWIzYWYyZDQxNmQ4NWI2OGYzMDAwYTFmMmMwMTZhOTI4YjVlNGZjYzdmNjM0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.LX0pPItMouglPGyfEabvMXtLyoktdeKRTrcycS-_dYc",
    },
    {
        id: 2,
        img: "https://private-user-images.githubusercontent.com/96792157/337965888-1b857559-6bd1-4b01-8c4e-787b0c430dd9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA4Mjc2MjYsIm5iZiI6MTczMDgyNzMyNiwicGF0aCI6Ii85Njc5MjE1Ny8zMzc5NjU4ODgtMWI4NTc1NTktNmJkMS00YjAxLThjNGUtNzg3YjBjNDMwZGQ5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTA1VDE3MjIwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk3MTUxMjY5YTU5YmVlMDZmMzllY2E1NDJlYjdjYmYwZjY3ZmM5M2E2MmFkMDI4Y2QwMzNhOTFmNjJjOWRjZjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.LWqSbiz3RwdvqVLV51GWnNAq_NIigq2f2O0CegLabVk",
    },
    {
        id: 3,
        img: "https://private-user-images.githubusercontent.com/96792157/337965736-5c2cd506-9586-4083-846a-0311623d8ae3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA4Mjc2ODgsIm5iZiI6MTczMDgyNzM4OCwicGF0aCI6Ii85Njc5MjE1Ny8zMzc5NjU3MzYtNWMyY2Q1MDYtOTU4Ni00MDgzLTg0NmEtMDMxMTYyM2Q4YWUzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTA1VDE3MjMwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA5NTA2MDEyYWNmYzc3MjViYTdhMWYzNzFiZjFmYWJiODc3NDIwZWU4ZDhhNDU0NDhiNTE3OTFiOTI2N2JjMGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.fjxro5knD-Fe-yDsNYaQWKPeaoNJ3TfEEk1YQOIEODE",
    },
    
];


function Home() {
    const navigate = useNavigate();
    const Illus = useRef();
    const i = gsap.utils.selector(Illus);
    const tlm = useRef();
    const dlm = useRef();

    useEffect(() => {
        tlm.current = gsap.timeline()
            .fromTo(i(".b-one"), { fill: "#1E2128", opacity: 0, scale: 0.7 }, {
                fill: "#FF605C", opacity: 1, scale: 1.3, duration: 1, ease: "none", transformOrigin: 'center center', stagger: 0.1, repeat: -1, yoyo: true
            })
            .fromTo(i(".b-two"), { fill: "#1E2128", opacity: 0, scale: 0.7 }, {
                fill: "#FFBD44", opacity: 1, scale: 1.3, duration: 1, ease: "none", transformOrigin: 'center center', stagger: 0.1, repeat: -1, yoyo: true
            })
            .fromTo(i(".b-three"), { fill: "#1E2128", opacity: 0, scale: 0.7 }, {
                fill: "#00CA4E", opacity: 1, scale: 1.3, duration: 1, ease: "none", transformOrigin: 'center center', stagger: 0.1, repeat: -1, yoyo: true
            })
            .fromTo(i(".a-one"), { opacity: 0 }, {
                opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
            })
            .fromTo(i(".a-two"), { opacity: 0 }, {
                opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
            })
            .fromTo(i(".a-three"), { opacity: 0 }, {
                opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
            })
            .fromTo(i(".a-four"), { opacity: 0 }, {
                opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
            })
            .fromTo(i(".a-five"), { opacity: 0 }, {
                opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
            })
            .fromTo(i(".a-six"), { opacity: 0 }, {
                opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
            })
            .fromTo(i(".a-seven"), { opacity: 0 }, {
                opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
            })
            .fromTo(i(".a-eight"), { opacity: 0 }, {
                opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
            })
            .fromTo(i(".a-nine"), { opacity: 0 }, {
                opacity: 1, duration: 1, ease: "none", transformOrigin: 'center center', repeat: -1, yoyo: true
            })
    });

    const [background, setBackground] = useState('');

    const image = Data.filter(data => data.id === background).map(filteredData => (
        filteredData.img
    ))

    const nav = () => {
        return navigate('/work'), window.location.reload();

    }

    const Styles = {
        backgroundImage: `url(${image})`
    }

    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
    })

    hiddenElements.forEach((el) => observer.observe(el))

    return (
        <div className="home">
            <div className="home-intro hidden">
                <div className="content">
                    <div className="content-tertiary">
                        <p><span>✌🏻</span> Hi there! I'm <span className='my-name'>Sayan </span></p>
                    </div>
                    <div className="content-primary">
                        <h1>a <span>Full Stack</span> Developer.
                            I Design And Develop <span> websites</span> and help you
                            <span> Grow</span></h1>
                    </div>
                    <div className="content-secondary">
                        <p>I am software developer with more than two years of experience. recognized as a practical and effective developer, experienced in leading cross-functional teams in a time-pressured setting to complete projects on schedule and within target.</p>
                    </div>
                </div>
                <div className="hero-icon">
                    <img src={Bgs} alt="background" ref={Illus} />
                </div>
            </div>
            <div className="tooling hidden">
                <div className="tooling-title"><h2>Tooling</h2></div>
                <div className="tooling-box">
                    <div className="box-content">
                        <div className="box-icon"><FaReact className="icon" /></div>
                        <div className="box-text"><p>React</p></div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon"><FaNode className="icon" /></div>
                        <div className="box-text"><p>Node</p></div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon"><RiTailwindCssFill className="icon" /></div>
                        <div className="box-text"><p>Tailwind</p></div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon"><RiJavascriptFill className="icon" /></div>
                        <div className="box-text"><p>JavaScript</p></div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon"><RiNextjsFill className="icon" /></div>
                        <div className="box-text"><p>NEXTJS</p></div>
                    </div>

                    <div className="box-content">
                        <div className="box-icon"><SiMongodb className="icon" /></div>
                        <div className="box-text"><p>MongoDB</p></div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon"><BiLogoTypescript className="icon" /></div>
                        <div className="box-text"><p>TypeScript</p></div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon"><GrDocker className="icon" /></div>
                        <div className="box-text"><p>Docker</p></div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon"><SiMysql className="icon" /></div>
                        <div className="box-text"><p>My-SQL</p></div>
                    </div>
                    <div className="box-content">
                        <div className="box-icon"><FaWordpress className="icon" /></div>
                        <div className="box-text"><p>Wordpress</p></div>
                    </div>
                </div>
            </div>
            <div className="showroom-section hidden">
                <div className="showroom-title"><h2>Showroom</h2></div>
                <div className="showroom">
                    <div className="showroom-background" style={Styles}></div>
                    <ProjectSlider setBackground={setBackground} />
                </div>
                <div class="button-wrap">
                    <button class="butt" onClick={nav}>All Project details</button>
                </div>
            </div>
            
            <div className="quote hidden">
                <div className="quote-body">
                    <QuoteLeft className="left" />
                    <div className="quote-body-content">
                        <p>There's no nobility in playing small. Be different<span>!</span></p>
                    </div>
                    <QuoteRight className="right" />
                </div>
            </div>
        </div>
    )
}

export default Home