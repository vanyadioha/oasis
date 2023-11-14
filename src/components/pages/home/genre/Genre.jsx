import { StyledGenres } from "./Genre.styled"
import { useAxiosGet } from '@/hooks'
import Image from 'next/image'
import { Error, Skeleton } from '@/components/ui'

export const Genres = ({ baseUrl, apiKey }) => {
    const { data, loading, error } = useAxiosGet(`${baseUrl}/genres?key=${apiKey}&page_size=30`)
    return (
        <StyledGenres>
            <h1 className="genre-h1">Explore Games by Genre</h1>
            {loading && <Skeleton />}
            {data &&
                <ul className='game-genres'>
                    {data.results.map((i) => {
                        return (
                            <li className='game-genre' key={i.slug}>
                                <div className="game-img-container">
                                    {i.image_background && <Image
                                        src={i.image_background}
                                        alt={i.slug}
                                        width={1280}
                                        height={720}
                                    />}
                                    <div className="genre-txt"
                                    >
                                        <h3>{i.name}</h3>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                    <li className="browse-all">+ Browse all Games</li>
                </ul>}
            {error && <Error />}
        </StyledGenres>
    )
}

//  : <ImgFallback
//     bg={i.dominant_color}>{i.name}</ImgFallback>