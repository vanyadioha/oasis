import { StyledExtras } from "./Extra.styled";
import Link from "next/link";

export const Extras = ({ deets: { data } }) => {
    return (
        <>
            {data &&
                <StyledExtras>
                    <section className="genres-platforms">
                        <div>
                            <h2>Genres</h2>
                            <p className="list">
                                {data.genres.map((i, j) => (
                                    j !== data.genres.length - 1 ? (<Link key={j} href={'/browse'}>{i.name}, </Link>) : <Link key={j} href={'/browse'}>{i.name}.</Link>
                                ))}
                            </p>
                        </div>
                        <div>
                            <h2>Platforms</h2>
                            <p className="list">
                                {data.platforms.map((i, j) => (
                                    j !== data.platforms.length - 1 ? (<Link key={j} href={'/browse'}>{i.platform.name}, </Link>) : <Link key={j} href={'/browse'}>{i.platform.name}.</Link>
                                ))}
                            </p>
                        </div>
                    </section>
                </StyledExtras>
            }
        </>
    )
}