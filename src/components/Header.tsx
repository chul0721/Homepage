import { Component } from 'react'
import MenuOptionEnum from '../typings/MenuOptionEnum'
import {
  Checkbox,
  Grid,
  Image,
  Menu,
  Ref,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

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
        <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment.Group} raised>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            target={segmentRef}
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Games</Menu.Item>
            <Menu.Item as='a'>Channels</Menu.Item>
          </Sidebar>

          <Ref innerRef={segmentRef}>
            <Segment secondary>
              <p>When you will click there, the sidebar will be closed.</p>
            </Segment>
          </Ref>

          <Segment>
            <Image src='/images/wireframe/paragraph.png' />
          </Segment>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
      </nav>
    )
  }
}

export default Header
