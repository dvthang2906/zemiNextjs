'use client'

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import css from "@/styles/media.module.css";

const Media = () => {

    const [media, setMedia] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        fetch('http://127.0.0.1:8001/media')
            .then(response => response.json())
            .then(data => {
                setMedia(data.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setIsLoading(false);
            });
    }, []);


    if (isLoading) {
        return <div>loading...</div>;
    }


    return (
        <>
            <div className={css.mediaGrid}>
                {media.map(item => (
                    <a href={item['url_video']} key={item['id']} target="_blank" rel="noopener noreferrer" className={css.mediaImages}>
                        <div className={css.mediaContainer}>
                            <Image
                                src={item['image_url']}
                                alt={item['title']}
                                width={350}
                                height={450}
                                className={css.mediaImages}
                            />
                            <div className={css.type}><span>{item['type']}</span></div>
                            <b className={css.title}>{item['title']}</b>
                        </div>
                    </a>
                ))}
            </div>


        </>
    )
}

export default Media;