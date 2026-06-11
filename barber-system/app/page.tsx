import { redirect } from "next/navigation"

export default function Page() {
  // Redireciona direto para o site da barbearia (HTML estático em /public)
  redirect("/barber.html")
}
