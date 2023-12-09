import { Skeleton } from "@/components/ui"
import { StyledHeroAside } from "./HeroAside.styled"

export const HeroAside = ({ deets: { loading, data } }) => {
    return (
        <StyledHeroAside>
            <div className="game-details">
                {[...Array(4)].map((_, j) => (
                    <div className="game-detail" key={j}>
                        {loading &&
                            <>
                                <Skeleton w={'5rem'} h={'2.5rem'} br={'1rem'} />
                                <Skeleton w={'5rem'} h={'2.5rem'} br={'1rem'} />
                            </>
                        }
                        {data &&
                            <>
                                {/* Key */}
                                <p>
                                    {j === 0 ? 'Developer' : j === 1 ? 'Publisher' : j === 2 ? 'Released' : 'Metacritic'}
                                </p>
                                {/* value */}
                                <p className='truncate'>
                                    {j === 0 ? data.developers[0].name : j === 1 ? data.publishers[0].name : j === 2 ? data.released : data.metacritic}
                                </p>
                            </>
                        }
                    </div>
                ))}
            </div>
            <div className="price">
                {loading &&
                    <>
                        <Skeleton w={'15rem'} h={'8rem'} />
                    </>
                }
                {data && <h1>$59.99</h1>}
            </div>
            <div className="checkout-container">
                {loading &&
                    <>
                        <Skeleton h={'6rem'} />
                        <Skeleton h={'6rem'} />
                        <Skeleton h={'5rem'} />
                    </>
                }
                {data &&
                    <>
                        <button type="button">Buy Now</button>
                        <button type="button">Add to Cart</button>
                        <button type="button">Add to Wishlist</button>
                    </>
                }
            </div>
        </StyledHeroAside>
    )
}