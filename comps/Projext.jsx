import React from 'react'
import { useRouter } from 'next/router'
import proj from '../database/projects'

function Project() {
    var [projData, setProjdata] = React.useState("")
    var [desc, setDesc] = React.useState("")
    var router = useRouter()
    var [ismax, setIsmax] = React.useState(false)

    function click(e, index) {
        var x = document.getElementsByClassName('sw-proj-card')

        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove('sw-active')
        }
        if (e.target.parentElement.classList.contains('sw-proj-card')) {
            e.target.parentElement.classList.add('sw-active')
        } else {
            e.target.classList.add('sw-active')
        }

        setProjdata(proj[index])
        var des = proj[index]?.description
        // max only 50 words
        var newDesc = ""
        if (des.length > 50) {
            for (var i = 0; i < 50; i++) {
                newDesc += des[i]
            }
            setDesc(newDesc + "...")
        } else {
            setDesc(des)
        }
    }

    function doubled(e, index) {
        if (e.target.classList.contains('sw-proj-card')) {
            router.push({
                pathname: "/",
                query: {
                    to: 'projects',
                    id: index
                }
            })
        } else {
            router.push({
                pathname: "/",
                query: {
                    to: 'projects',
                    id: index
                }
            })
        }
    }
    return (
        <div className="sw-wrap">
            <div className="sw-body">
                {proj.map((item, index) => {
                    return (
                        <div className="sw-proj-card" id={"proj" + index} onClick={(e) => click(e, index)} key={index} onDoubleClick={(e) => doubled(e, index)}>
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                        </div>
                    )
                })
                }
            </div>
            <div className="sw-button">
                <div className="sb-left">
                    <p>{proj.length} items</p>
                    <p>{projData?.name}</p>
                    <p>{desc}</p>
                </div>
                <div className="sb-right">
                </div>
            </div>
        </div>
    )
}

export default Project