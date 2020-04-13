import React from "react";
import {connect} from "react-redux";
import {IState} from "../../store/interface";
import {addUserAddress, delUserAddress} from "../../store/action";
import style from './home.module.scss';

class Home extends React.Component<any, any> {
  input: React.RefObject<HTMLInputElement>;
  
  constructor(props: any) {
    super(props);
    this.input = React.createRef();
    this.addAddress = this.addAddress.bind(this);
  }
  
  addAddress(): void {
    if (this.input.current) {
      let address = this.input.current.value;
      if (!address.length) {
        return;
      }
      this.props.addAddress(address);
      this.input.current.value = '';
    }
  }
  
  delAddress(index: number) {
    let address = this.props.addressList[index];
    this.props.delAddress(address);
  }
  
  render() {
    return (
      <div className={style['home-container']}>
        <h1>用户联系地址：</h1>
        <ul>
          {
            this.props.addressList.map((item: any, index: any) => (
              <li
                className={style['list-item']}
                key={index}
                onClick={this.delAddress.bind(this, index)}>
                {item}
              </li>
            ))
          }
        </ul>
        <input type="text" ref={this.input}/>
        <button onClick={this.addAddress}>添加地址</button>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    addressList: state.addressList
  }
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    addAddress: (address: string) => {
      dispatch(addUserAddress(address));
    },
    delAddress: (address: string) => {
      dispatch(delUserAddress(address))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
