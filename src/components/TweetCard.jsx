import { createElement, useRef, useState } from "react"
import { Comments } from "../iconos/comments"
import { Elipsis } from "../iconos/elipsis"
import { Likes } from "../iconos/likes"
import { Retweet } from "../iconos/Retweet"
import { Share } from "../iconos/share"
import { Verified } from "../iconos/verified"
import { addLinks } from "../helpers/addLinks"

import "../styles/Tweetcard.css"
import { getDate } from "../helpers/getDate"
import { formatCount } from "../helpers/formatCount"

import {toPng} from "html-to-image"

export const TweetCard = () => {
    const currentDate = new Date().toISOString().slice(0, 16);
     const paragraph = "This is a sample tweet @mentions, #hashtags, https:links.com are all automatically converted."
    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState("")
    const [userName, setUsername] = useState("")
    const [verified, setVerified] = useState(false)
    const [imagen, setImagen] = useState("")
    const [value, setValue] = useState(paragraph)
    const [date, setDate] = useState("")
    const [comments, setComments] = useState("")
    const [reTweet, setReTweet] = useState("")
    const [like, setLike] = useState("")


    const uploadAvatar = (e) => {
        const file = e.target.files[0]
        if (file) {
            const avatarUrl = URL.createObjectURL(file)
            setAvatar(avatarUrl)
            console.log(avatarUrl)
            console.log(file)
        }
    }

    const uploadImagen = (e) => {
        const file = e.target.files[0]
        if (file) {
            const imagenUrl = URL.createObjectURL(file)
            setImagen(imagenUrl)
        }
    }
  
    const uploadTextarea = (e) => {
        setValue(e.target.value)

    }

    const handleDate = (e) => {
        setDate(getDate(e.target.value))
    }
    
    const handleComments = (e) => {
        const numero = e.target.value
        setComments(formatCount(numero))
    }
    const handleRetweet = (e) => {
        const numero = e.target.value
        setReTweet(formatCount(numero))
    }
    const handleLike = (e) => {
        const numero = e.target.value
        setLike(formatCount(numero))
    }
    const ref = useRef(null)
    const handleDownload = async (e) => {
        const urlImage = await toPng(ref.current);
        const link = document.createElement("a")
        link.download = "tweet-image.png"
        link.href = urlImage
        link.click()
    }

   

    return (
        < >
            <div >
                <h1>Tweet Generator</h1>
                <section className="container-card" ref={ref}>
                    {avatar ?
                        <picture>
                            <img className="avatar" src={avatar} alt="" />
                        </picture>
                        : <picture>
                            <img className="avatar" src="/sinperfil.jpg" alt="" />
                        </picture>}

                    <div className="container-datos">
                        <header>
                            <div className="container-header">
                                {name ? <h3>{name}</h3> : <h3>Carlos25</h3>}
                                {verified ? <Verified color="#48e" /> : ""}

                                {userName ? <p>{userName} . {date}</p>
                                    : <p> @carlos25 . {date} </p>}

                            </div>
                            <Elipsis></Elipsis>
                        </header>
                      
                      <p className="parrafo" dangerouslySetInnerHTML={{ __html: addLinks(value) }}></p>
                      
                       
                       
                        
                        {imagen ?
                            <div className="container-img">
                                <img className="img-fondo" src={imagen} alt="" />
                            </div>
                            : ""}

                        <footer>
                            <div>
                                <Comments />
                                <span>{comments}</span>
                            </div>
                            <div>
                                <Retweet />
                                <span>{reTweet}</span>
                            </div>
                            <div>
                                <Likes />
                                <span>{like}</span>
                            </div>
                            <div>
                                <Share />
                                <span>0</span>
                            </div>
                        </footer>
                    </div>

                </section>
            </div>

            <div className="container-form">
                <div className="container-flex">
                    <form >
                        <span className="datos">
                            <label htmlFor="">Avatar:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={uploadAvatar} />
                        </span>

                        <span className="datos">
                            <label htmlFor="">Name:</label>
                            <input
                                type="text"
                                onChange={e => setName(e.target.value)} />
                        </span>

                        <span className="datos">
                            <label htmlFor="">Username:</label>
                            <input type="text" onChange={e => setUsername(e.target.value)} />
                        </span>

                        <span className="datos">
                            <label htmlFor="">Tweet date:</label>
                            <input type="datetime-local" onChange={handleDate} max={currentDate}/>
                        </span>

                        <span className="datos">
                            <label htmlFor="">Tweet image:</label>
                            <input type="file" accept="image/*" onChange={uploadImagen} />
                        </span>

                        <span className="datos boton">
                            <button
                                type="button"
                                onClick={() => setVerified(!verified)}
                            >Verified</button>
                        </span>

                        <span className="datos textarea">
                            <label htmlFor="">Content: {value.length}/280</label>
                            <textarea cols="10" rows="5" onChange={uploadTextarea} value={value}></textarea>
                        </span>

                        <span className="datos">
                            <label htmlFor="">Comments:</label>
                            <input type="text" onChange={handleComments}/>
                        </span>

                        <span className="datos">
                            <label htmlFor="">Retweet:</label>
                            <input type="text" onChange={handleRetweet}/>
                        </span>

                        <span className="datos">
                            <label htmlFor="">Likes:</label>
                            <input type="text" onChange={handleLike}/>
                        </span>

                    </form>
                    <button className="download" onClick={handleDownload}>Download tweet</button>
                </div>
            </div>
        </>
    )
}
