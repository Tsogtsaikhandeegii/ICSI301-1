import logo from './logo.svg';
import './App.css';


import { Head } from "./components/Head/index1";
import {Comment} from "./components/Classt/index";
const Ontslog= () => {
  return(
<div className="Neg">
<td className="feature"><img src={logo} className="App-logo" alt="logo" /></td>
  <td className="features">
  <tr className="a">
    <div>
    <span className="c" class="square border border-dark">Features</span>
    <p class="square border border-dark">A song of its time, began as a flashback 80’s vibe , then became a lockdown anthem.</p></div>
  </tr>
  <tr className="b">REAM OUR FEATURES</tr></td>
</div>
  );
};

const BorderPage = () => {
  return (
  <>
      <span className="block-example border border-dark">hiiiii</span>
      <span className="block-example border-top border-dark">kkkkk</span>
      <span className="block-example border-right border-dark">mmmmm</span>
      <span className="block-example border-bottom border-dark">ttttt</span>
      <span className="block-example border-left border-dark">sssssss</span>
  </>
  );
  }
const Medeeelel = (props) => {
  return(
    <div className="Hoyr">
      <td className="mzurag"><span>Details</span></td>
      <td className="mzurag"><img src={logo} className="App-logo" alt="logo" /></td>
      <td className="medeelel">
        <tr className="d"><p><p className="ehlel">Lorem ipsum dolor sit ame</p>{props.medee1}<em className="suul"> proident minim</em></p></tr>
        <tr className="d"><p><p className="ehlel">Lorem ipsum dolor sit ame</p>{props.medee1}<em className="suul"> proident minim</em></p></tr>
        <tr className="d"><p><p className="ehlel">Lorem ipsum dolor sit ame</p>{props.medee1}<em className="suul"> proident minim</em></p></tr>
        <tr className="d"><p><p className="ehlel">Lorem ipsum dolor sit ame</p>{props.medee1}<em className="suul"> proident minim</em></p></tr>
        <tr className="d"><p><p className="ehlel">Lorem ipsum dolor sit ame</p>{props.medee1}<em className="suul"> proident minim</em></p></tr>
      </td>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">  
    <Head />
    <Ontslog/>
    <Medeeelel medee1="Dolore ex deserunt aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse"/>
        <BorderPage/>
        <Comment/>  

      </header>
    </div>
  );
}

export default App;
