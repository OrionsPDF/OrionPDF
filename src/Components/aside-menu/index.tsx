import { PiFolderSimple } from 'react-icons/pi'

const AsideMenu = () => {
  return (
    <aside className="relative  w-[368px] h-[100vh] border-r border-r-border z-20 bg-white">
      <h2 className="p-4.5 pb-0 mt-6.5">Overview</h2>
      <ul>
        <li className="flex items-center cursor-pointer text-textSecondary gap-1.5 py-2.5 pl-4.5 text-[15px] border-l-[3px] border-l-[#3872FA] rounded-sm">
          <PiFolderSimple size={20} color="#3872FA" /> Folders Manager
        </li>
      </ul>
    </aside>
  )
}
export { AsideMenu }
