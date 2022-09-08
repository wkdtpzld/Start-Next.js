import { useRouter } from "next/router"
import Seo from "../../components/Seo";

export default function MovieDetail({params}) {

    const router = useRouter();
    const [title,id] = params || router.query.params;

    return (
        <div>
            <Seo title={title}></Seo>
            <h4>{title}</h4>
        </div>
    )
}

export function getServerSideProps({params: {params}}) {

    return {
        props: {
            params
        },
    }
}