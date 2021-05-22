import { Component } from 'react'
import MenuOptionEnum from '../typings/MenuOptionEnum'

const MenuOptions = [
  {
    name: 'Profile',
    href: 'profile'
  },
  {
    name: 'Projects',
    href: 'projects'
  }
]

class MenuOption extends Component<MenuOptionEnum> {
  render() {
    return (
      <a
        href={`#${this.props.href}`}
        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white hover:opacity-50 mr-4"
      >
        {this.props.name}
      </a>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="font-semibold text-xl tracking-tight"></span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 text-white hover:opacity-50">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            {MenuOptions.map((options) => (
              <MenuOption name={options.name} href={options.href} />
            ))}
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
