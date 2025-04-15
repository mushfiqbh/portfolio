export default function HLine({ children, className = "" }) {
  const styles = `
    w-[90%] border-t-2 border-slate-200 dark:border-slate-800 mx-auto
     ${className}`;

  return <div className={styles}>{children}</div>;
}
