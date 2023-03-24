import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaWindowMinimize } from 'react-icons/fa'
import { FiMaximize } from 'react-icons/fi'
import { AiOutlineClose, AiOutlinePlusCircle, AiOutlineDelete } from 'react-icons/ai'
import { ImPaste } from 'react-icons/im'
import { MdOutlineContentCopy, MdOutlineContentCut } from 'react-icons/md'
import { CgRename } from 'react-icons/cg'
import proj from '../database/projects'
function ProjectCard() {
    var router = useRouter()
    function close() {
        router.push({
            pathname: "/",
            query: {
                to: 'projects'
            }
        })
    }

    var [projData, setProjdata] = React.useState({})
    var [desc, setDesc] = React.useState("")

    useEffect(() => {
        setProjdata(proj[router.query.id])
        var des = proj[router.query.id]?.description
        // max only 50 words
        var newDesc = ""
        if (des?.length > 500) {
            for (var i = 0; i < 500; i++) {
                newDesc += des[i]
            }
            newDesc += "..."
        } else {
            newDesc = des
        }
        setDesc(newDesc)

    }, [router.query.id])

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
    return (
        <div className="proj-abs" onClick={(e) => glitch(e)}>
            <div className='projectWindow' id='pcard'>
                <div className="sw-header">
                    <div className="sw-wrapper">
                        <div className="sw-left">
                            <div className="sw-img">
                                <img src={projData.image} alt="" />
                            </div>
                            <div className="sw-title">
                                <p>Projects | {projData.name}</p>
                            </div>
                        </div>
                        <div className="sw-right">
                            <div className="sw-btn">
                                <AiOutlineClose onClick={close} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pw-body">
                    <div className="pw-img">
                        <img src={projData.image} alt="" />
                    </div>
                    <div className="pw-title">
                        <p>Name: {projData.name}</p>
                    </div>
                    <div className="pw-desc">
                        <p>Description: {desc}</p>
                    </div>
                    <div className="pw-btn">
                        <a href={projData.link} target="_blank" rel="noreferrer">
                            <button>Have a Look</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard