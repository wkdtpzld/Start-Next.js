import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function NotFound() {

    const [time, setTime] = useState(5);
    const router = useRouter();
    const backToHome = () => {
        setTimeout(() => {
            router.push("/")
        }, 5000);
        setInterval(() => {
            setTime(current => current - 1);
        },1000)
    }
    useEffect(() => {
        backToHome();
    }, [])

    return (
        <div>
            404 PAGE {time} 뒤에 홈 화면으로 돌아갑니다.
        </div>
    )
}