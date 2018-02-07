import { Soshi } from 'soshi';
import Title from './Title/Title';
import List from './List/List';
import Card from './Card/Card';
import Image from './Image/Image';
import Button from './Button/Button';
//Doc componentList
import Logo from 'components/docs/common';
import Menu from 'components/Menu/menu';


//test
function componentList(builder) {
  return {
    'title': (props) => Title(props, builder),
    'button': (props) => Button(props, builder),
    'card': (props) => Card(props, builder),
    'image': (props) => Image(props, builder),
    'list': (props => List(props, builder)),
    'logo': (props => Logo(props, builder)),
    'menu': (props => Menu(props, builder))
  }

}

const RaeonComponents = new Soshi({
  dom: `bel`,
})
RaeonComponents.load(componentList)
export default RaeonComponents;