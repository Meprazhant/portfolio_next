import { useRouter } from 'next/router'
import React from 'react'
import Imageviewer from './Imageviewer'

function About() {
    var router = useRouter()
    function click(e, index) {
        var x = document.getElementsByClassName('ab-img')

        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove('ab-active')
        }
        if (e.target.parentElement.classList.contains('ab-img')) {
            e.target.parentElement.classList.add('ab-active')
        } else {
            e.target.classList.add('ab-active')
        }

    }
    var [show, setShow] = React.useState(false)
    var [type, setType] = React.useState('')

    function doubled(e, index, type) {
        setShow(true)
        if (type == 'img') {
            router.push({
                pathname: "/",
                query: {
                    to: 'about',
                    id: index,

                }
            })
        } else {
            router.push({
                pathname: "/",
                query: {
                    to: 'about',
                    id: index,

                }
            })
        }
    }
    return (
        <div className="sw-body">
            <div className="ab-img" onClick={(e) => click(e, 1)} key={1} onDoubleClick={(e) => doubled(e, 1, 'img')}>
                <img src="https://i.ibb.co/WK27xWW/329191215-1563842450803063-6177692811146630390-n.jpg" alt="" />
                <p>mypic1.jpg</p>
            </div>
            <div className="ab-img" onClick={(e) => click(e, 2)} key={2} onDoubleClick={(e) => doubled(e, 2, 'img')}>
                <img src="https://i.ibb.co/4fyJfmb/image.png" alt="" />
                <p>mypic2.jpg</p>
            </div>
            <div className="ab-img" onClick={(e) => click(e, 3)} key={3} onDoubleClick={(e) => doubled(e, 3, 'img')}>
                <img src="https://i.ibb.co/Lh39kfL/image.png" alt="" />
                <p>Happyme.jpg</p>
            </div>
            <div className="ab-img" onClick={(e) => click(e, 4)} key={4} onDoubleClick={(e) => doubled(e, 4, 'text')}>
                <img src="https://3.bp.blogspot.com/-k8kG5u2Lapc/V4tGCl1vcJI/AAAAAAAAGpk/aBMuyFwEUjwHOF74Zn2mjUdEPZNJhibqgCLcB/s1600/read%2Ba%2Btext%2Bfile%2Bin%2BJava.png" alt="" />
                <p>aboutMe.txt</p>
            </div>

            {/* {(show && type == 'img') && <Imageviewer />} */}



        </div>
    )
}

export default About