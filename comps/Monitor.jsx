import React, { useEffect, useState } from 'react'
import DesktopIcons from './DesktopIcons'
import Start from './Start'
import { useRouter } from 'next/router'
import SmallWindow from './SmallWindow'
import ProjectCard from './ProjectCard'
import Imageviewer from './Imageviewer'
import Notepad from './Notepad'
import Search from './Search'

function Monitor() {
    var [show, setShow] = useState(true)
    var router = useRouter()
    function mouse() {
        return (
            window.innerHeight
        )
    }

    function move(e) {
        var x = mouse()
        var y = e.clientY
        if ((x - y) < 50) {
            setShow(true)
        } else {
            // setShow(false)
        }
    }
    var [showSmallWindow, setShowSmallWindow] = useState(false)
    var [showProject, setShowProject] = useState(false)
    var [aboutType, setAboutType] = useState("txt")
    var [showImage, setShowImage] = useState(false)
    var [showText, setshewTExt] = useState(false)
    var [showSearch, setShowSearch] = useState(false)


    useEffect(() => {
        if (router.query.to) {
            setShowSmallWindow(true)
        } else {
            setShowSmallWindow(false)
        }
        if (router.query.to == 'projects' && router.query.id) {
            setShowProject(true)
        } else {
            setShowProject(false)
        }
        if (router.query.to == 'about' && router.query.id) {
            if (router.query.id == 4) {
                setAboutType('txt')
                setShowImage(false)
                setshewTExt(true)

            } else {
                setAboutType('img')
                setShowImage(true)
                setshewTExt(false)
            }
        } else {
            setShowImage(false)
            setshewTExt(false)
        }
        if (router.query.to == 'search') {
            setShowSearch(true)
        } else {
            setShowSearch(false)
        }
    }, [router.query.to, router.query.id])



    return (
        <div className='monitor' onClick={mouse} onMouseMove={(e) => move(e)}>



            {(showProject) && <ProjectCard />}


            {(showImage) && <Imageviewer />}
            {(showText) && <Notepad />}
            {(showSearch) && <Search />}

            <DesktopIcons />
            {(show) && <Start />}
            {(!showSearch && showSmallWindow) && <SmallWindow to={router.query.to} />}
        </div>
    )
}

export default Monitor