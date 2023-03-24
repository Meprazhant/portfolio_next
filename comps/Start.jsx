import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


function Start() {

    useEffect(() => {
        // time and date
        var time = document.getElementById('time')
        var date = document.getElementById('date')
        time.innerHTML = getTime()
        date.innerHTML = getDate()
        setInterval(() => {
            time.innerHTML = getTime()
            date.innerHTML = getDate()
        }, 1000)
    }, [])

    var router = useRouter()
    var [pic, setPic] = useState()


    useEffect(() => {
        var to = router.query.to


        if (to == 'about') {
            setPic("https://i.ibb.co/wCGDmLV/image.png")
        } else if (to == 'projects') {
            setPic("https://i.ibb.co/zJ4zzYY/image.png")
        } else if (to == 'contact') {
            setPic("https://i.ibb.co/yYWX37G/image.png")
        } else {
            setPic()

        }
    }, [router.query.to])





    function getDate() {
        var d = new Date()
        var day = d.getDate()
        var month = d.getMonth()
        var year = d.getFullYear()
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return months[month] + ' ' + day + ', ' + year
    }

    function getTime() {
        var d = new Date()
        var h = d.getHours()
        var m = d.getMinutes()
        var s = d.getSeconds()
        if (h < 10) {
            h = '0' + h
        }
        if (m < 10) {
            m = '0' + m
        }
        if (s < 10) {
            s = '0' + s
        }
        // AMPM
        if (h > 12) {
            h = h - 12
            return h + ':' + m + 'PM'
        } else {
            return h + ':' + m + 'AM'

        }
    }

    function search() {
        router.push({
            pathname: "/",
            query: {
                to: 'search'
            }
        })
    }


    return (
        <div className='start'>
            <div className="start-blank">

            </div>
            <div className="start-content">
                <div className="sa-img ">
                    <img src="https://th.bing.com/th/id/OIP.CfVh6RtIu99eyu781IaoZQAAAA?pid=ImgDet&rs=1" alt="" />
                </div>
                <div className="sa-img " onClick={search}>
                    <img src="https://th.bing.com/th/id/R.6abb6c1a4716c1bfd48231aacb0d2c87?rik=P7VcoSi1TFJHSA&pid=ImgRaw&r=0" alt="" />
                </div>
                <div className="sa-img ">
                    <img src="https://rajaniraiyn.github.io/windows11/src/icons/fileExplorer.png" alt="" />
                </div>
                <div className="sa-img ">
                    <img src="https://th.bing.com/th/id/R.842a530ab18a82ee5ba4120fda6b533b?rik=gcHJ7gwpI2Gb6A&pid=ImgRaw&r=0" alt="" />
                </div>
                {pic &&
                    <div className="sa-img  img-active">
                        <img src={pic} alt="" />
                    </div>
                }
            </div>

            <div className="start-right">
                <div className="sr-datetime">
                    <p id='time'></p>
                    <p id='date'></p>
                </div>
                <div className="sa-img">
                    <img src='https://cdn2.iconfinder.com/data/icons/business-office-6/100/notification-1024.png' alt=''></img>
                </div>

            </div>
        </div>
    )
}

export default Start