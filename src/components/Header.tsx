import LogoImg from '../assets/logo.svg'

export function Header(){
  return (
    <header className="flex justify-center pt-16 pb-[8.375rem] bg-banner bg-cover bg-no-repeat bg-center">
      <img className="w-36 h-24" src={LogoImg} alt="Logo GitHub Blog" />
    </header>
  )
}