'use client'


// import { useRouter } from "next/navigation"
import { Button } from 'react-bootstrap';
import Image from "next/image";
import Link from "next/link";
import css from '@/styles/champion.module.css';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Champion = () => {

    const [champions, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const router = useRouter();

    // const handleBtn = () => {
    //     router.push("/")
    // }


    useEffect(() => {
        // Fetch data from the server
        fetch('http://localhost:8000/blogs')
            .then(response => response.json())
            .then(data => {
                // Update state with the data
                setBlogs(data);
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

    // const champions = [
    //     { name: 'Aphelios', image: '/images/Aphelios_0.jpg' },
    //     { name: 'aatrox', image: '/images/RiotX_ChampionList_aatrox.jpg' },
    //     { name: 'ahri', image: '/images/RiotX_ChampionList_ahri.jpg' },
    //     { name: 'akali', image: '/images/RiotX_ChampionList_akali.jpg' },
    //     { name: 'akshan', image: '/images/RiotX_ChampionList_akshan_v2.jpg' },
    //     { name: 'alistar', image: '/images/RiotX_ChampionList_alistar.jpg' },
    //     { name: 'amumu', image: '/images/RiotX_ChampionList_amumu.jpg' },
    //     { name: 'anivia', image: '/images/RiotX_ChampionList_anivia.jpg' },
    //     { name: 'azir', image: '/images/RiotX_ChampionList_azir.jpg' },
    //     { name: 'belveth', image: '/images/RiotX_ChampionList_belveth.jpg' },

    // ];


    return (
        <>
            <div className={css.championGrid}>
                {champions.map(champion => (
                    <Link href={'https://www.leagueoflegends.com/ja-jp/champions/' + champion['title']} key={champion['title']} legacyBehavior>
                        <div className={css.championContainer}>
                            <Image src={champion['author']} alt={champion['title']} width={210} height={280} className={css.championImages} />
                            <div className={css.championName}>{champion['title']}</div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* <div>Facebook</div>
            <div>
                <Button variant="danger">Hoi DAN IT</Button>
                <button onClick={() => handleBtn()}>Back Home</button>
            </div> */}
        </>
    )
}

export default Champion;


