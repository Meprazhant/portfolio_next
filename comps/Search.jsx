import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

function Search() {
    var router = useRouter()
    function exit(e) {
        var search = document.getElementById('search')
        if (e.target.id == 'sw') {
            search.classList.add('search-exit')
            setTimeout(() => {
                router.push({
                    pathname: "/",
                })
                search.classList.remove('search-exit')
            }, 500);
        }
    }
    var [data, setData] = React.useState([])
    var [tomap, settomap] = React.useState([])

    function fetchss() {
        fetch('/api/nes')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                if (json.status == 'ok') {
                    setData(json.articles)
                    var sliced = json.articles.slice(0, 5)
                    settomap(sliced)
                    console.log(sliced)
                }
            })
    }
    function nav(e) {
        window.open(e, '_blank')
    }


    useEffect(() => {
        fetchss()
    }, [])


    return (
        <div className="searchWrap" id='sw' onClick={(e) => exit(e)}>
            <div className='search' id='search'>
                <div className="search-bar">
                    <input type="text" placeholder="Type here To Search" />
                </div>
                <div className="recentNews">
                    <h2>Recent News</h2>
                    <div className="newsCard">
                        {tomap.map((item, index) => {
                            return (
                                <div className="newsCard-item" key={index} onClick={(e) => nav(item.url)}>
                                    <div className="newsCard-img">
                                        <img src={item.urlToImage} alt="" />
                                    </div>
                                    <div className="newsCard-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.author}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search