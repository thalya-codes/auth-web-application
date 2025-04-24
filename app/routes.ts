import { route, index, type RouteConfig } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("register", "routes/register.tsx"),
    route("login", "routes/login.tsx"),    
    route('tasks','routes/protected.tsx'),
] satisfies RouteConfig;

