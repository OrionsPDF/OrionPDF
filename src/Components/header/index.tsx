import { Avatar, AvatarFallback, AvatarImage } from '../../Components/ui/avatar'

const Header = () => {
  return (
    <header className="fixed flex justify-end items-center z-10 w-full h-[60px] border-b border-b-border pr-4.5">
      <div className="flex items-center">
        <span className="mr-3.5 font-medium">Adones Balduino</span>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

export { Header }
