import React, { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router'

function Imageviewer() {
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
        if (router.query.id == 1) {
            setData({
                image: 'https://i.ibb.co/WK27xWW/329191215-1563842450803063-6177692811146630390-n.jpg',
                title: "myPic1.jpg"
            })
        } else if (router.query.id == 2) {
            setData({
                image: 'https://i.ibb.co/4fyJfmb/image.png',
                title: "myPic2.jpg"
            })
        } else if (router.query.id == 3) {
            setData({
                image: 'https://i.ibb.co/Lh39kfL/image.png',
                title: "Happyme.jpg"
            })
        } else {
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
            <div className="iv-header" id='pcard'>
                <div className="sw-wrapper">
                    <div className="sw-left">
                        <div className="sw-img">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="sw-title">
                            <p>ImageViewer | {data.title} </p>
                        </div>
                    </div>
                    <div className="sw-right">
                        <div className="sw-btn">
                            <AiOutlineClose onClick={close} />
                        </div>
                    </div>
                </div>
                <div className="iv-body">
                    <div className="iv-img">
                        <img src={data.image} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Imageviewer