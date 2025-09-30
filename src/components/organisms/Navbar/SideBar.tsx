export const SideBar = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) => {
  return (
    <>
    {/* Overlay scuro che copre la pagina quando SideBar è aperto */}
    <div className={`fixed inset-0 z-20 h-screen bg-black transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-80' : 'pointer-events-none opacity-0'} `}>

{/* Contenitore principale della SideBar */}
    <div className={`fixed inset-y-0 right-0 top-0 z-50 h-screen w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>SideBar</div>
    <button onClick={()=> setIsOpen(false)}>chiudi</button>
    </div>
    </>
  );
};
