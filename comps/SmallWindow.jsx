import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaWindowMinimize } from 'react-icons/fa'
import { FiMaximize } from 'react-icons/fi'
import { AiOutlineClose, AiOutlinePlusCircle, AiOutlineDelete } from 'react-icons/ai'
import { ImPaste } from 'react-icons/im'
import { MdOutlineContentCopy, MdOutlineContentCut } from 'react-icons/md'
import { CgRename } from 'react-icons/cg'
import proj from '../database/projects'
import Project from './Projext'
import About from './About'




function SmallWindow({ to }) {
    var router = useRouter()
    var [ismax, setIsmax] = React.useState(false)
    function minimize() {
        var smallwindow = document.getElementById('smallwindow')
        smallwindow.classList.remove('sw-maximize')
        smallwindow.classList.add('smallWindow')
    }

    function close() {
        router.push({
            pathname: "/",
        })
    }
    function maximize() {
        setIsmax(!ismax)
        if (!ismax) {
            var smallwindow = document.getElementById('smallwindow')
            smallwindow.classList.remove('smallWindow')
            smallwindow.classList.add('sw-maximize')
        } else {
            var smallwindow = document.getElementById('smallwindow')
            smallwindow.classList.remove('sw-maximize')
            smallwindow.classList.add('smallWindow')
        }
    }
    var [where, setWhere] = React.useState('')
    var [tit, setTit] = React.useState('')
    useEffect(() => {
        if (to) {
            var cap = to[0].toUpperCase() + to.slice(1)
            setTit(cap)
        }
        setWhere(to)
    }, [to])

    return (
        <div className='smallWindow' id='smallwindow'>
            <div className="sw-header">
                <div className="sw-wrapper">
                    <div className="sw-left">
                        <div className="sw-img">
                            <img src="https://th.bing.com/th/id/R.3cd0d9b9fcd3184fba8462cb019eb242?rik=Xm4SMEKIEjHtSg&riu=http%3a%2f%2fwww.rw-designer.com%2ficon-image%2f22985-256x256x68.png&ehk=nV9va2TQPlzP8vOJSplY07AHisYpwRSAeH7G11R30Pc%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        </div>
                        <div className="sw-title">
                            <p>File Explorer | {tit}</p>
                        </div>
                    </div>
                    <div className="sw-right">
                        <div className="sw-btn">
                            <FaWindowMinimize onClick={minimize} />
                            <FiMaximize onClick={maximize} />
                            <AiOutlineClose onClick={close} />
                        </div>
                    </div>
                </div>
                <div className="sw-ccp">
                    <div className="sw-new">
                        <AiOutlinePlusCircle />
                        <p>New</p>
                    </div>
                    <div className="sw-icons">
                        <MdOutlineContentCut />
                        <MdOutlineContentCopy />
                        <ImPaste />
                        <CgRename />
                        <AiOutlineDelete />

                    </div>
                </div>
            </div>
            {where == 'projects' && <Project />}
            {where == 'about' && <About />}


        </div>
    )
}

export default SmallWindow