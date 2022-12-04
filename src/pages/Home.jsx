import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [repos, setRepos] = useState([]);
    const [seeAllRepos, setSeeAllRepos] = useState(false);

    const getRepos = async () => {
        const data = await (
            await fetch("https://api.github.com/users/iamajraj/repos")
        ).json();
        setRepos(data);
        console.log(data);
    };

    useEffect(() => {
        getRepos();
    }, []);

    return (
        <div className="bg-[#292A2D] min-h-screen w-full text-white pb-[100px] px-[40px]">
            <div className="max-w-[800px] mx-auto pt-[70px] md:pt-[150px]">
                <div className="flex justify-center items-center md:items-start md:justify-between gap-[50px] md:gap-[100px] flex-col-reverse md:flex-row">
                    <div className="">
                        <h1 className="text-3xl">Hi 👋</h1>
                        <h2 className="underline italic text-[22px] font-['Josefin_Sans']">
                            I'm Muhammad Akmal Hossain Raj
                        </h2>

                        <ul className="mt-[20px] flex flex-col gap-[10px] text-[15px]">
                            <li>💻 I'm a full stack web developer</li>
                            <li>
                                🚀 Love to explore and learn new technologies.
                            </li>
                            <li>💛 My favorite language: JAVASCRIPT.</li>
                            <li>
                                📫 How to reach me:{" "}
                                <a
                                    href="mailto:akmalraj07@gmail.com"
                                    className="underline italic cursor-pointer"
                                >
                                    akmalraj07@gmail.com
                                </a>
                                .
                            </li>
                            <li>
                                ⚡ Fun fact: I don't like memorizing😒, but
                                docs💀
                            </li>
                        </ul>
                        <p className="mt-[20px] font-['Gloria_Hallelujah']">
                            ~ muhammad raj
                        </p>
                        <Link
                            to="/"
                            className="inline-block mt-[20px] px-[30px] py-[7px] bg-[#20232A] border border-white hover:border-indigo-600 rounded-md text-[16px] font-semibold"
                        >
                            let's talk
                        </Link>
                    </div>
                    <img
                        src="https://github.com/iamajraj.png"
                        alt=""
                        draggable="false"
                        className=" w-[200px] h-[200px] object-cover rounded-full"
                    />
                </div>
                <div className="mt-[100px]">
                    <h1 className="text-[22px] text-center font-['Indie_Flower']">
                        S K I L L S
                    </h1>
                    <div className="flex items-center justify-center gap-[15px] mt-[40px] flex-wrap">
                        <img
                            src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                            alt="javascript"
                        />
                        <img
                            src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                            alt="html5"
                        />
                        <img
                            src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                            alt="css3"
                        />
                        <img
                            src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                            alt="typescript"
                        />
                        <img
                            src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                            alt="nodejs"
                        />
                        <img
                            src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
                            alt="nextjs"
                        />
                        <img
                            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                            alt="react"
                        />
                        <img
                            src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                            alt="tailwindcss"
                        />
                        <img
                            src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                            alt="mongodb"
                        />
                        <img
                            src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
                            alt="mysql"
                        />
                    </div>
                </div>
                <div className="mt-[100px]">
                    <h1 className="text-center text-[22px] font-['Indie_Flower']">
                        Git Repos
                    </h1>
                    <div className="flex flex-wrap gap-[20px] mt-[50px] justify-center">
                        {repos
                            .slice(0, seeAllRepos ? repos.length : 10)
                            .map((repo) => {
                                return (
                                    <div>
                                        <a
                                            className="relative  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-blue-200 hover:before:w-full before:transition-all"
                                            href={repo.html_url}
                                            target="_blank"
                                        >
                                            {repo.name}
                                        </a>
                                    </div>
                                );
                            })}
                        <p
                            onClick={() => setSeeAllRepos(!seeAllRepos)}
                            className="underline cursor-pointer"
                        >
                            ...{seeAllRepos ? "Hide" : "See All"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
