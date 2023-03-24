import React from 'react'
import { useRouter } from 'next/router'

function DesktopIcons() {
    var router = useRouter()
    function click(e) {
        var x = document.getElementsByClassName('di-img')
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove('img-active')
        }
        if (e.target.parentElement.classList.contains('di-img')) {
            e.target.parentElement.classList.add('img-active')
        } else {
            e.target.classList.add('img-active')
        }
    }

    function doubleClick(e) {
        var x = document.getElementsByClassName('di-img')
        var to = e.target.parentElement.id

        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove('img-active')
        }
        if (e.target.parentElement.classList.contains('di-img')) {
            e.target.parentElement.classList.add('img-active')
        } else {
            e.target.classList.add('img-active')
        }

        setTimeout(() => {
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove('img-active')
            }
        }, 1000);

        if (!to) to = e.target.id

        router.push({
            pathname: "/",
            query: { to: to }
        })

    }

    return (

        <div className='DI'>
            <div className="di-img" id='home' onClick={(e) => click(e)} onDoubleClick={(e) => doubleClick(e)}>
                <img src="https://rajaniraiyn.github.io/windows11/src/icons/Computer.png" alt="" />
                <p>Home</p>
            </div>
            <div className="di-img" id='projects' onClick={(e) => click(e)} onDoubleClick={(e) => doubleClick(e)} >
                <img src="https://i.ibb.co/zJ4zzYY/image.png" alt="" />
                <p>Projects</p>
            </div>
            <div className="di-img" id='about' onClick={(e) => click(e)} onDoubleClick={(e) => doubleClick(e)}>
                <img src="https://i.ibb.co/wCGDmLV/image.png" alt="" />
                <p>About</p>
            </div>
            <div className="di-img" id='contact' onClick={(e) => click(e)} onDoubleClick={(e) => doubleClick(e)}>
                <img src="https://i.ibb.co/yYWX37G/image.png" alt="" />
                <p>Contact</p>
            </div>
        </div>
    )
}

export default DesktopIcons