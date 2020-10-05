import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
//import Home from '../Home/Home'; // need to import our container component instead
import Home from '../../containers/HomeContainer';
import Movie from '../../containers/MovieContainer';
import NotFound from '../elements/NotFound/NotFound';

const App = () => (
  <BrowserRouter>
    <React.Fragment> 
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:movieId" component={Movie} exact />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default App;

//React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
// render() {
//   return (
//     <React.Fragment>
//       <ChildA />
//       <ChildB />
//       <ChildC />
//     </React.Fragment>
//   );
// }