function FolderButton({ label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative flex flex-col items-center cursor-pointer group"
    >
      {/*Papelito*/}
      <div className="absolute -top-2 w-20 h-12 bg-[#FAFAFA] border border-black rounded-md opacity-0  translate-y-3 transition-all duration-200 z-0 group-hover:opacity-100 group-hover:translate-y-0" />

      {/*Pestaña*/}
      <div
        className="w-12 h-3 bg-[#181818] relative z-10 rounded-tl-md rounded-tr-md absolute top-0 right-5"
        style={{
          clipPath: "polygon(0% 0%, 60% 0%, 100% 110%, 0% 110%)",
        }}
      />

      {/*Carpeta*/}
      <div className="w-22 h-14 bg-[#181818] rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-sm relative z-10" />

      <span className="text-md mt-1 group-hover:underline">{label}</span>
    </div>
  );
}

export default FolderButton;
