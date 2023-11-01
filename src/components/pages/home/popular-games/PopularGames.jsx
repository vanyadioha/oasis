import { Skeleton } from '@/components/ui'
import { StyledPopularGames } from './PopularGames.styled'
import { useAxiosGet } from '@/hooks'
import Image from 'next/image'
import { Suspense } from 'react'

export const PopularGames = ({ apiKey, baseUrl }) => {
    const { data, loading, error } = useAxiosGet(`${baseUrl}/games?key=${apiKey}&page=1&page_size=10`)
    return (
        <StyledPopularGames>
            <h1>Games that you love <span>{'>'}</span></h1>
            {loading && <Skeleton />}
            {data &&
                <ul className='popular-games'>
                    {data.results.map((i) => {
                        return (
                            <li className='popular-game' key={i.slug}>
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
                </ul>}
            {error && 'Something is wrong'}
        </StyledPopularGames>
    )
}
