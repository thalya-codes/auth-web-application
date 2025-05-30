import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <ul>
      <li>
        <Link to={"/register"}>Create account</Link>
      </li>

      <li>
        <Link to={"/login"}>Login</Link>
      </li>
    </ul>
  );
}
