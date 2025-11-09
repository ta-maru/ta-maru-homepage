import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "た。のプロフィール" },
        { name: "description", content: "た。（たまる）です。" },
    ];
}

export default function Profile() {
    return (
        <>
            <h1>Profile Page</h1>
        </>
    );
}