import { NavLink } from "react-router"

export default function NavLinkItem({to, icon, text}) {
    return(
        <NavLink to={ to } className={({ isActive }) => (isActive ? "active sidebar-menu_link" : "sidebar-menu_link")} title={ text }>
            <span className="sidebar-menu-link_icon">{ icon }</span>
            <span className="sidebar-menu-link_text">{ text }</span>
        </NavLink>
    )
}