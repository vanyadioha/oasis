import { ImgFallback, StyledNew } from "./New.styled"
import { useAxiosGet } from '@/hooks'
import Image from 'next/image'
import { Error, Skeleton } from '@/components/ui'

export const New = ({ baseUrl, apiKey }) => {
    const { data, loading, error } = useAxiosGet(`${baseUrl}/games?key=${apiKey}&page_size=10&ordering=released`)
    return (
        <StyledNew>
            <h1 className="new-h1">New Releases</h1>
            {loading && <Skeleton />}
            {data &&
                <ul className='new-games'>
                    {data.results.map((i) => {
                        return (
                            <li className='new-game' key={i.slug}>
                                <div className="game-img-container">
                                    {i.background_image ? <Image
                                        src={i.background_image}
                                        alt={i.slug}
                                        width={1280}
                                        height={720}
                                    /> : <ImgFallback
                                        bg={i.dominant_color}>{i.name}</ImgFallback>}
                                </div>
                                <h3>{i.name}</h3>
                                <p>$59.99</p>
                            </li>
                        )
                    })}
                </ul>}
            {error && <Error />}
        </StyledNew>
    )
}
