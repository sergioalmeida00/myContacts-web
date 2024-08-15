import { Spinner } from "../Spinner";
import { Overlay } from "./styles";
import ReactDOM from 'react-dom';

export function Loader({ isLoading }){
  if(!isLoading){
    return null;
  }
  return ReactDOM.createPortal(
    <Overlay>
      <Spinner size={92}/>
    </Overlay>,
    document.getElementById('loader-root')
  )
}
