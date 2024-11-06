import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { BiLogoTypescript } from 'react-icons/bi';
import { FaNode, FaReact, FaWordpress } from 'react-icons/fa';
import { GrDocker } from 'react-icons/gr';
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import Bankease from '../../assets/images/Bankease.png';
import Bgs from '../../assets/images/bg.svg';
import Geargrid from '../../assets/images/Geargrid.png';
import Mistore from '../../assets/images/Mi-Store.png';
import Threads from '../../assets/images/Threads.png';
import { ReactComponent as QuoteLeft } from './../../assets/images/quote-left.svg';
import { ReactComponent as QuoteRight } from './../../assets/images/quote-right.svg';
import ProjectSlider from './../../components/projectSlider';
import './home.scss';

const Data = [
    {
        id: 0,
        img: Bankease,
    },
    {
        id: 1,
        img: Geargrid,
    },
    {
        id: 2,
        img: Threads,
    },
    {
        id: 3,
        img: Mistore,
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
                        <p>I am software developer with more than two years of experience. Recognized as a practical and effective developer, experienced in leading cross-functional teams in a time-pressured setting to complete projects on schedule and within target.</p>
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
                        <p>Creating tomorrow's solutions today <span>!</span></p>
                    </div>
                    <QuoteRight className="right" />
                </div>
            </div>
        </div>
    )
}

export default Home