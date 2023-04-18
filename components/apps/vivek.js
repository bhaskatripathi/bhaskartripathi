import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about Bhaskar" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Bhaskar' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education and Publications</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Bhaskar' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Bhaskar' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Bhaskar's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.jpg" alt="Bhaskar Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Bhaskar Tripathi</span> ,</div>
                <div className="font-normal ml-1">I'm an Engineer turned <span className="text-pink-600 font-bold">Researcher!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
        <a href="mailto:bhaskar.tripathi@gmail.com">bhaskar.tripathi@gmail.com</a>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" mt-3 list-star">I have a <span className=" font-medium">strong research and publication experience in ML Deep Learning, Reinforcement Learning, mathematical optimization methods, metaheuristic algorithms, econometric methods and Financial Mathematics.</span></li>
                <li className=" mt-3 list-star">I began my career as a programmer using C# and SybaseIQ (the original Columnar DB). I subsequently worked as a Technology Lead and then as a Technical Product Manager where I sucessfully led engagements upto worth $50 million. </li>
                <li className=" mt-3 list-star"> Over the past five years, I have worked as an AI Researcher specializing in dealing with enormous datasets (++petabytes) on and off the cloud and in Deep Learning and ML applied to Finance and algorithmic trading. In Quantitative Finance and Mathematical Optimization, I have authored numerous research papers in reputable SCIE journals and have been awarded two German patents.</li>
                <li className=" mt-3 list-star">Presently I am working as a Principal Product Specialist - Data Science & Research Practices at MultiCloud4U Technologies (an official technology partner of Alibaba Cloud).I am also MVP - Artificial Intelligence for Alibaba Cloud and leading their tech community initiatives.</li>
                <li className=" mt-3 list-star">ML Deep Learning, Reinforcement Learning, mathematical optimization methods, metaheuristic algorithms, econometric methods and Financial Mathematics,Strong Data Engineering experience especially with huge datasets,Product Management, Product Strategy, Product Roadmap and Delivery.</li>
                <li className=" mt-3 list-star">My present interests: Applying AI/Reinforcement Learning in Finance, Large Language Models </li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc1">
                    <div>
                    1. Bachelor of Technology, Kurukshetra University
                    </div>
                </li>
                <li className="list-disc1">
                    <div>
                    2. MBA (Finance), Indian Institute of Foreign Trade, 2012
                    </div>
                </li>
                <li className="list-disc1">
                    <div>
                    3. Ph.D. (Computational and Financial Mathematics), Thapar Institute of Engg. And Technology,2023
                    </div>
                </li>
            </ul>
                    <div>  <strong className="font-medium relative text-2xl mt-2 md:mt-4 mb-4"></strong> PATENTS: </div>
            
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <a href="https://register.dpma.de/DPMAregister/pat/register?AKZ=2020221037590&CURSOR=0" target="_blank">
                    <strong className="text-ubt-gedit-orange">A Mind Controlled Portfolio Optimization and Backtesting System for Online Trading: </strong>
                </a>
                Patent Country : Germany. 
                I created the world's first Mind-Controlled algorithmic trading system, which allows participants to trade using EEG headphones and their thoughts alone. The technology detects the participant's brainwaves and maps Frontal and Temporal-Partial signal changes to trigger EEG-based commands to an AI system that performs autonomous trading.
                </li>
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <a href="https://register.dpma.de/DPMAregister/pat/register?AKZ=2020221044724&CURSOR=1" target="_blank">
                    <strong className="text-ubt-gedit-orange">A blockchain and IoT based system to improve network security: </strong>
                </a>
                Patent Country : Germany.
                This invention involves an IoT and blockchain-based system designed to improve computer network security. The system processes requests from client devices to access server-based services, analyzes URL patterns and request or response data signatures using a machine learning model, and determines the authenticity of requests or responses based on their URL pattern and data signatures.
                </li>
            </li>
            </ul>
            <div>  <strong className="font-medium relative text-2xl mt-2 md:mt-4 mb-4"></strong> PUBLICATIONS:</div>
            <strong className="text-ubt-gedit-orange">Google Scholar:</strong> <a href="https://scholar.google.com/citations?user=lT0XDl8AAAAJ&hl=en" target="_blank">Click here</a>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <strong className="text-ubt-gedit-orange"> Data Science Architecture:</strong> GoF Patterns for ML, Neural Networks, Hybrid Neural Networks, Reinforcement Learning, Mathematical Optimization algorithms.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>  <strong className="text-ubt-gedit-orange">AI / Machine Learning/ Deep Learning Libraries:</strong> Matplotlib, pandas, sci-kit, NumPy, TensorFlow 2.6, Pytorch, mlFlow, Keras, Spark, Most Convex optimization problems and Econometric Forecasting, Developed Novel Neural Network models and hybrid algos with most NNs like LSTM, ANN, CNN, GAN, Attention based networks etc.</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <div> <strong className="text-ubt-gedit-orange">Data: </strong> MS SQL Server, Sybase IQ, Oracle, Microsoft SQL Server Analysis Services (SSAS), Microsoft SSRS, Snowflake, Databricks.</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <div>  <strong className="text-ubt-gedit-orange">Data Analysis: </strong> SQL, Pl/SQL, Python, MATLAB, SPSS, ESRI ArcGIS – Spatial Analytics, PySpark/Spark, PyEMD, PyWavelets</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <div> <strong className="text-ubt-gedit-orange">Cloud Platforms:</strong>Aluxio, Azure ML, Azure Data factory, Google Cloud Platform (GCP), Alibaba Cloud PAI studio, Databricks, Dremio, Clickhouse.</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <div>  <strong className="text-ubt-gedit-orange">Reporting and Cloud ETL:</strong> Hyperion 9.0 (Oracle BI), QlikView, Dundas Charts, Telerik Reporting, Tableau, ArcGIS – Spatial Analytics, Power BI, Azure Data Factory, Confluent, Materialize.</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="python" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="git" className="m-1" />
                        <img src="https://img.shields.io/badge/-Matlab-FFCA28?style=flat&logo=firebase&logoColor=ffffff" alt="Matlab" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="next" />
                        <img src="https://img.shields.io/badge/-PySpark-FA6423?style=flat&logo=firebase&logoColor=fffff" alt="Spark" className="m-1" />

                    </div>
                </div>
            </div>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "PDF GPT",
            date: "March 2023",
            link: "https://github.com/bhaskatripathi/pdfGPT",
            description: [
                "PDF GPT allows you to chat with the contents of your PDF file by using GPT capabilities",
            ],
            domains: ["OpenAI", "next.js", "python"]
        },
        {
            name: "FusionGPT",
            date: "Jan 2023",
            link: "https://github.com/bhaskatripathi/FusionGPT",
            description: [
                "FusionGPT is a web application that allows users to split a large text into smaller parts and send each part along with a request to the OpenAI API. The application is built with Next.js and uses the Langchain's Chain of thoughts and has been deployed on Vercel.                ",
            ],
            domains: ["Next.js", "python"]
        },
        {
            name: "The Tripathi-Sharma Low Discrepancy Quasi Monte Carlo Sequence",
            date: "Dec 2022",
            link: "https://bhaskatripathi-tripathi-sharma-sequence-app-p20l57.streamlit.app/",
            description: [
                "This app computes and compares the L2-star, CD, and MD discrepancies of Sobol, Halton, and Tripathi-Sharma Quasi Monte Carlo sequences. The proposed Tripathi-Sharma sequence has Improved space-filling properties, Lower discrepancy values. It is also computationally less expensive than the standard Sobol and Halton methods.",
            ],
            domains: ["Python", "Streamlit"]
        },
        {
            name: "Text2Question Generation with Text-to-Text-Transfer-Transformer",
            date: "Nov 2022",
            link: "https://bhaskartripathi-text2question.hf.space/",
            description: [
                "Automatically generate questions from a given Text using Transformer!",
            ],
            domains: ["Python", "Gradio"]
        },
        {
            name: "Sanitized Grey Wolf Optimizer(SGWO)-Support Vector Regressor (SVR)",
            date: "Mar 2021",
            link: "https://github.com/bhaskatripathi/GWOSVR",
            description: [
                "Simulating hunting behavior of Grey Wolfs to forecast prices of highly chaotic financial securities.",
            ],
            domains: ["Python", "Matlab"]
        },
        {
            name: "CEEMDAN-LSTM",
            date: "June 2022",
            link: "https://github.com/bhaskatripathi/CEEMDAN_LSTM",
            description: [
                "An advancement on the EEMD method, Complete Ensemble Empirical Mode Decomposition with Adaptive Noise (CEEMDAN) allows for a granular spectral separation of the Intrinsic Mode Functions and a more precise reconstruction of the original signal (IMFs)",
            ],
            domains: ["Python", "PyEMD"]
        },
        {
            name: "Galactica Fine Tuned - Maths Formulae Generator",
            date: "Dec 2022",
            link: "https://colab.research.google.com/drive/1DDIJhUPubiuMMFT7W8Fnp3TZL1rCnbKw?authuser=1#scrollTo=Na-vOLkh6vDH",
            description: [
                "GALACTICA is a general-purpose scientific language model. This model has been fine tuned. The model weights are novel.",
            ],
            domains: ["Python", "LLM fine tuning"]
        },
        {
            name: "Scientific computing python libraries",
            date: "Sep 2021",
            link: "https://github.com/bhaskatripathi/Scientific_computing_libraries",
            description: [
                "A list of helpful libraries that I've utilized in my Ph.D. research work",
            ],
            domains: ["Reinforcement Learning", "Multi-objective Optimization", "Data Pre-processing", "Data Visualization"]
        },
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Open Source Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=bhaskatripathi&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}

function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/BHASKAR_TRIPATHI.pdf" title="Bhaskar resume" frameBorder="0"></iframe>
    )
}
