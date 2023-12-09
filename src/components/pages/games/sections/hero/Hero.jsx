import { Skeleton, StarRating } from "@/components/ui"
import { StyledHero } from "./Hero.styled"
import { useAxiosGet } from "@/hooks"
import Image from "next/image"
import { useState } from "react"

export const Hero = ({ deets: { loading, data }, slug, baseUrl, apiKey }) => {
    const screenshots = useAxiosGet(`${baseUrl}/games/${slug}/screenshots?key=${apiKey}`)
    const [currentShot, setCurrentShot] = useState(0)
    return (
        <StyledHero>
            {/* Name, Developer, Publisher */}
            <div className="title-info">
                {loading &&
                    <>
                        <Skeleton w={'50rem'} h={'3rem'} />
                        <Skeleton w={'5rem'} h={'2rem'} br={'0.5rem'} />
                    </>
                }
                {data &&
                    <>
                        <h1>{data.name}</h1>
                        <p>{data.parents_count == 0 ? 'Base Game' : 'Add-ons +/- Base Game'}</p>
                    </>
                }
            </div>
            <div className="ratings">
                {loading &&
                    <>
                        <Skeleton w={'10rem'} h={'3rem'} br={'0.5rem'} />
                        <Skeleton w={'3rem'} h={'2rem'} />
                    </>
                }
                {data &&
                    <>
                        <StarRating rating={data.rating} />
                        <p>{data.rating}</p>
                    </>
                }
            </div>
            {/* Image Carousel */}
            <div className="carousel">
                {screenshots.loading &&
                    <>
                        <Skeleton h={'45rem'} />
                    </>
                }
                {screenshots.data &&
                    <div className="screenshot-container">
                        <Image
                            src={screenshots.data.results[currentShot].image}
                            alt={`${slug} image${currentShot}`}
                            width={1280}
                            height={720}
                        />
                    </div>
                }
            </div>
            <div className="flickity">
                <div className="flickity-container">
                    {screenshots.loading &&
                        <>
                            <Skeleton w={'10rem'} h={'8rem'} />
                            <Skeleton w={'10rem'} h={'8rem'} />
                            <Skeleton w={'10rem'} h={'8rem'} />
                        </>
                    }
                    {screenshots.data &&
                        <>
                            {screenshots.data.results.map((i, j) => (
                                <div key={j} onClick={() => setCurrentShot(j)} className={`flickity-img-container ${currentShot === j && 'active-shot'}`}>
                                    <Image
                                        src={i.image}
                                        alt={`${slug} image${j}`}
                                        width={1280}
                                        height={720}
                                    />
                                </div>
                            ))}
                        </>
                    }
                </div>
            </div>
            <div className="game-desc">
                {loading &&
                    <>
                        <Skeleton h={'15rem'} />
                    </>
                }
                {data &&
                    <p>{data.description_raw}</p>
                }
            </div>
        </StyledHero>
    )
}