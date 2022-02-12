import React from 'react';

class DropdownMenu extends React.Component {
  getMenuItemTitle = (menuItem, index, depthLevel) => {
    return menuItem.title;
  };

  getMenuItem = (menuItem, index, depthLevel) => {
    let title = this.getMenuItemTitle(menuItem, index, depthLevel);

    if (menuItem.submenu && menuItem.submenu.length > 0) {
      return (
        <li>
          {title + ' ' + depthLevel}
          <DropdownMenu
            config={menuItem.submenu}
            depthLevel={depthLevel + 1}
            submenu={true}
          />
        </li>
      );
    } else {
      return <li>{title + ' ' + depthLevel}</li>;
    }
  };

  render = () => {
    let config = [
      {
        title: 'Option 1',
        submenu: [
          {
            title: 'Option 2.1',
            submenu: [
              {
                title: 'Option 2.1.1',
                submenu: null,
              },
              {
                title: 'Option 2.1.2',
                submenu: null,
              },
            ],
          },
          {
            title: 'Option 2.2',
            submenu: [
              {
                title: 'Option 2.2.1',
                submenu: null,
              },
              {
                title: 'Option 2.2.2',
                submenu: null,
              },
            ],
          },
          {
            title: 'Option 2.4',
            submenu: [
              {
                title: 'Option 2.4.1',
                submenu: null,
              },
              {
                title: 'Option 2.2.2',
                submenu: null,
              },
            ],
          },
        ],
      },
      {
        title: 'Option 2',
        submenu: [
          {
            title: 'Option 2.1',
            submenu: [
              {
                title: 'Option 2.1.1',
                submenu: null,
              },
              {
                title: 'Option 2.1.2',
                submenu: null,
              },
            ],
          },
          {
            title: 'Option 2.2',
            submenu: [
              {
                title: 'Option 2.2.1',
                submenu: null,
              },
              {
                title: 'Option 2.2.2',
                submenu: null,
              },
            ],
          },
          {
            title: 'Option 2.4',
            submenu: [
              {
                title: 'Option 2.4.1',
                submenu: null,
              },
              {
                title: 'Option 2.2.2',
                submenu: null,
              },
            ],
          },
        ],
      },
    ];
    console.log('Config ', config && config);

    let depthLevel = 0;

    let options = [];
    config &&
      config.map((item, index) => {
        options.push(this.getMenuItem(item, index, depthLevel));
      });

    if (this.props.submenu && this.props.submenu === true)
      return <ul>{options}</ul>;

    return <ul className='dropdown-menu'>{options}</ul>;
  };
}

export default DropdownMenu;

// import Dropdown from 'react-multilevel-dropdown';

// const MultiLevelDropDown = (props) => {
//   const { menusItems } = props;
//   return (
//     <div className='App'>
//       <>
//         {menusItems.children &&
//           menusItems.children.map((item) => (
//             <Dropdown.Item>
//               {item.name}
//               <Dropdown.Submenu position='right'>
//                 {item.children &&
//                   item.children.map((submenu) => (
//                     <Dropdown.Item>{submenu.name}</Dropdown.Item>
//                   ))}
//               </Dropdown.Submenu>
//             </Dropdown.Item>
//           ))}
//       </>
//     </div>
//   );
// };

// export default MultiLevelDropDown;
