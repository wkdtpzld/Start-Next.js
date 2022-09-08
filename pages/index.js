import Link from "next/link";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query"
import { fetchMovies } from "../components/api";

export default function Home() {

    const router = useRouter();
    const onClick = (id, title) => {
        router.push(`/movies/${title}/${id}`);
    }
    const { isLoading, data } = useQuery("AllMovies", fetchMovies);
    

    return (
        <>
            <div>
                {isLoading ? (
                    null
                ) : (
                    <div className="container">
                        {data.map((movie) => (
                            <div key={movie.id} className="movie" onClick={() => onClick(movie.id, movie.original_title)}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                <h4>
                                    <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                                        <a>{movie.original_title}</a>
                                    </Link>
                                </h4>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    padding: 20px;
                    gap: 20px;
                }
                .movie {
                    cursor: pointer;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </>
    )
}

export async function getServerSideProps() {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery("AllMovies", fetchMovies);

    return {
        props: {
            dehydrateState: dehydrate(queryClient)
        }
    }
    
}