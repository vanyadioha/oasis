import { StyledPopularGames } from './PopularGames.styled'
import { useAxiosGet } from '@/hooks'
import Image from 'next/image'

export const PopularGames = ({ apiKey, baseUrl }) => {
    const { data, loading, error } = useAxiosGet(`${baseUrl}/games?key=${apiKey}&page=1&page_size=10`)
    return (
        <StyledPopularGames>
            <h1>Games that you love <span>{'>'}</span></h1>
            <ul className='popular-games'>
                {loading && 'Loading...'}
                {data && data.results.map((i) => {
                    return (
                        <li key={i.slug} className='popular-game'>
                            <div className="game-img-container">
                                {i.background_image && <Image
                                    src={i.background_image}
                                    alt={i.slug}
                                    width={1280}
                                    height={720}
                                />}
                            </div>
                            <h3>{i.name}</h3>
                        </li>
                    )
                })}
                {error && 'Something is wrong'}
            </ul>
        </StyledPopularGames>
    )
}
