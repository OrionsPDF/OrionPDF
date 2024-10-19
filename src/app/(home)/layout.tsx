import { AsideMenu } from '@/src/Components/aside-menu'
import { Header } from '@/src/Components/header'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <div className="flex h-0 flex-1">
        <AsideMenu />

        <div className="flex justify-between flex-1 mt-25.5 w-full bg-[red]">
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
