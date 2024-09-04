import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`captalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                className={`${underlineStyles}`}
                transition={{ type: "tween" }}
                layoutId="underline"
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
