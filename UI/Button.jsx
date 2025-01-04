export default function Button({
  children,
  type = "button",
  onClick,
  text = "normal",
  className = "",
  variant = "rect",
}) {
  const commonStyles = `
    flex
    gap-2
    items-center
    justify-center
    font-semibold 
    ${text === "small" && "text-sm"} 
    ${text === "large" && "text-xl"} 
    ${text === "normal" && "text-lg"} 
    text-body 
    bg-gradient-box 
    shadow-shadow1 
    focus:outline-none 
    transition 
    transform 
`;

  const baseStyles = {
    rect: `
    p-4 
    rounded-lg
  `,
    round: `
    w-12 h-12 
    flex items-center justify-center 
    rounded-full  
  `,
  };

  const hoverStyles = `
    hover:text-white 
    hover:-translate-y-0.5 
    hover:bg-gradient-red 
  `;

  const combinedStyles = `${baseStyles[variant]} ${commonStyles} ${hoverStyles} ${className}`;

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
