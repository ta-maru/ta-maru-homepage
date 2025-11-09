import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("./view/screen/home.tsx"),
    layout("./view/layout/defaultLayout.tsx", [
        route("profile", "./view/screen/profile.tsx"),
        route("apps", "./view/screen/apps.tsx"),
        route("photos", "./view/screen/photos.tsx"),
    ]),

] satisfies RouteConfig;
