import { Soshi } from 'soshi';
import componentList from './componentList';

const RaeonComponents = new Soshi({
  dom: `bel`,
})
RaeonComponents.load(componentList)
export default RaeonComponents;