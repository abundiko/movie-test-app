import { notFound, redirect } from "next/navigation";

export default async function Page() {
    const req = await fetch("https://google.com")
    
    return (
        <div>about page</div>
    );
}