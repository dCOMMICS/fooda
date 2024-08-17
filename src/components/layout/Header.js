export default  function Header(){
    return  (

        <header className="flex items-center justify-between">
        <a href="" className="text-primary font-semibold text-2xl">
          HT FRIES
        </a>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <a href="">Home</a>
          <a href="">Menu</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="" className="bg-primary rounded-full text-white px-6 py-2">LOGIN</a>
        </nav>
      </header>

    );
}