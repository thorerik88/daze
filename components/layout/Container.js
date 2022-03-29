import layout from '../../styles/global/layout.module.scss';

const Container = ({ children }) => {
  return <div className={layout.container}>{children}</div>
}
 
export default Container;