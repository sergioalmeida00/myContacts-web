import { Overlay } from "./styles";
import ReactDOM from 'react-dom';

export function Loader({ isLoading }){
  if(!isLoading){
    return null;
  }
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader"></div>
    </Overlay>,
    document.getElementById('loader-root')
  )
}
