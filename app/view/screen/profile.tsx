import type { Route } from "./+types/home";

import { ProfileMain } from "../container/profileMain/profileMain";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "た。のプロフィール" },
        { name: "description", content: "た。（たまる）です。" },
    ];
}

export default function Profile() {
    return (
        <>
            <ProfileMain />
        </>
    );
}