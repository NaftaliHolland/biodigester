import Header from "@/components/header";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-4">
      <Header />
      <main className="mx-6">{ children }</main>
    </div>
  )
}

export default Layout;
