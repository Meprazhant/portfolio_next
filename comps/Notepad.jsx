import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AiOutlineClose } from 'react-icons/ai'

function Notepad() {
    var router = useRouter()
    function glitch(e) {
        var proj = document.getElementById('pcard')
        if (e.target.classList.contains('proj-abs')) {
            var num = 0
            var int = setInterval(() => {
                num++
                if (num % 2 == 0) {
                    proj.style.transform = "translateX(10px)"
                } else {
                    proj.style.transform = "translateX(-10px)"
                }
                if (num == 10) {
                    clearInterval(int)
                    proj.style.transform = "translateX(0)"
                }
            }, 10);
        } else {
            return
        }
    }
    var [data, setData] = React.useState({})

    useEffect(() => {
        if (router.query.id != 4) {
            router.push({
                pathname: "/",
                query: {
                    to: 'about'
                }
            })
        }
    }, [router.query.id])

    function close() {
        router.push({
            pathname: "/",
            query: {
                to: 'about'
            }
        })
    }
    return (
        <div className="proj-abs iv-abs" onClick={(e) => glitch(e)}>
            <div className="iv-header np-header" id='pcard'>
                <div className="sw-wrapper np-wrapper">
                    <div className="sw-left">
                        <div className="sw-img">
                            <img src='https://th.bing.com/th/id/R.7a18ea469fb6b81517a00f8273b77656?rik=JN6G6hFrzcyFIA&pid=ImgRaw&r=0' alt="" />
                        </div>
                        <div className="sw-title">
                            <p>Notepad | aboutMe.txt </p>
                        </div>
                    </div>
                    <div className="sw-right">
                        <div className="sw-btn">
                            <AiOutlineClose onClick={close} />
                        </div>
                    </div>
                </div>

                <div className="np-body">
                    <p><span>
                        Hello Everyone, Welcome to my portfolio website. My Name is Prashant, and I am from Jhapa. I am a BCA Student of Mechi Multiple Campus, Bhadrapur.
                        I am a Full Stack Developer, and I am also a Graphic Designer. I am a self taught developer, and I am also a self taught Graphic Designer.
                        I Have been working as freelance web DEveloper for about two years. I have learned some of the popular web development skills like React Js, Node Js, Express, Next JS and MongoDB.
                        You can see the projects that i am working on in the projects section.
                    </span>
                        <span className='anima'>|</span>
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Notepad