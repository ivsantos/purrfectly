import type { ActionArgs } from "@remix-run/node";
import { logout } from "~/session.server";
import { redirect } from "@remix-run/node";

export async function action({ request }: ActionArgs) {
  return logout(request);
}

export async function loader() {
  return redirect("/");
}
